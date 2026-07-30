import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fetchWithTimeout } from "./concurrency";

const DEFAULT_ENDPOINT = "https://api.exa.ai/search";
const LOCK_TIMEOUT_MS = 5_000;
const STALE_LOCK_MS = 10_000;

export type ExaSearchResult = {
  title: string;
  url: string;
  text?: string;
};

export type ExaSearchResponse = {
  results: ExaSearchResult[];
  costDollars?: {
    total?: number;
  };
};

export class ExaBudgetExceededError extends Error {
  constructor(limit: number) {
    super(
      `Exa request budget exhausted (${limit} per run). Use existing sources, Wikipedia, or direct page fetches; do not retry Exa.`,
    );
    this.name = "ExaBudgetExceededError";
  }
}

type BudgetState = {
  version: 1;
  used: number;
  limit: number;
  updatedAt: string;
};

type BudgetClaim = {
  used: number;
  limit: number;
};

function configuredBudget(): { limit: number; file: string } | undefined {
  const rawLimit = process.env.EXA_MAX_REQUESTS_PER_RUN;
  if (rawLimit === undefined || rawLimit === "") return undefined;

  const limit = Number(rawLimit);
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error(`EXA_MAX_REQUESTS_PER_RUN must be a positive integer; received "${rawLimit}"`);
  }

  const runID = process.env.GITHUB_RUN_ID ?? String(process.ppid);
  const file =
    process.env.EXA_BUDGET_FILE ??
    path.join(process.env.RUNNER_TEMP ?? os.tmpdir(), `hci-museum-exa-budget-${runID}.json`);
  return { limit, file };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function acquireLock(lockFile: string): Promise<number> {
  const deadline = Date.now() + LOCK_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      return fs.openSync(lockFile, "wx", 0o600);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "EEXIST") throw error;

      try {
        const age = Date.now() - fs.statSync(lockFile).mtimeMs;
        if (age > STALE_LOCK_MS) {
          fs.unlinkSync(lockFile);
          continue;
        }
      } catch (statError) {
        if ((statError as NodeJS.ErrnoException).code !== "ENOENT") throw statError;
      }
      await delay(20);
    }
  }
  throw new Error(`Timed out waiting for Exa budget lock: ${lockFile}`);
}

function readBudget(file: string, limit: number): BudgetState {
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8")) as Partial<BudgetState>;
    return {
      version: 1,
      used: Number.isInteger(parsed.used) && Number(parsed.used) >= 0 ? Number(parsed.used) : 0,
      limit,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date(0).toISOString(),
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return { version: 1, used: 0, limit, updatedAt: new Date(0).toISOString() };
    }
    throw new Error(`Could not read Exa budget file ${file}: ${String(error)}`);
  }
}

function writeBudget(file: string, state: BudgetState) {
  const tempFile = `${file}.${process.pid}.${crypto.randomUUID()}.tmp`;
  try {
    fs.writeFileSync(tempFile, `${JSON.stringify(state, null, 2)}\n`, { mode: 0o600 });
    fs.renameSync(tempFile, file);
  } finally {
    try {
      fs.unlinkSync(tempFile);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    }
  }
}

export async function claimExaBudget(): Promise<BudgetClaim | undefined> {
  const budget = configuredBudget();
  if (!budget) return undefined;

  fs.mkdirSync(path.dirname(budget.file), { recursive: true });
  const lockFile = `${budget.file}.lock`;
  const lockFD = await acquireLock(lockFile);
  try {
    const state = readBudget(budget.file, budget.limit);
    if (state.used >= budget.limit) throw new ExaBudgetExceededError(budget.limit);

    state.used += 1;
    state.updatedAt = new Date().toISOString();
    writeBudget(budget.file, state);
    return { used: state.used, limit: budget.limit };
  } finally {
    fs.closeSync(lockFD);
    try {
      fs.unlinkSync(lockFile);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    }
  }
}

export async function searchExa(options: {
  query: string;
  numResults: number;
  timeoutMs: number;
}): Promise<ExaSearchResponse> {
  const apiKey = process.env.EXA_API_KEY;
  if (!apiKey) throw new Error("EXA_API_KEY missing");

  const claim = await claimExaBudget();
  const res = await fetchWithTimeout(
    process.env.EXA_ENDPOINT ?? DEFAULT_ENDPOINT,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        query: options.query,
        numResults: options.numResults,
        type: "fast",
      }),
    },
    options.timeoutMs,
  );
  if (!res.ok) throw new Error(`Exa search failed: ${res.status} ${res.statusText}\n${await res.text()}`);

  const data = (await res.json()) as ExaSearchResponse;
  const budgetLabel = claim ? ` request=${claim.used}/${claim.limit}` : "";
  const cost = data.costDollars?.total;
  const costLabel = typeof cost === "number" ? ` cost=$${cost.toFixed(4)}` : "";
  console.error(`exa: type=fast results=${options.numResults}${budgetLabel}${costLabel}`);
  return data;
}
