import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fetchWithTimeout } from "./concurrency";

const DEFAULT_ENDPOINT = "https://api.octen.ai/broad-search";
const LOCK_TIMEOUT_MS = 5_000;
const STALE_LOCK_MS = 10_000;

export type OctenSearchResult = {
  title: string;
  url: string;
  highlight?: string;
  full_content?: string;
};

type OctenBroadSearchResponse = {
  code: number;
  msg?: string;
  request_id?: string;
  data?: {
    query?: string;
    queries?: string[];
    search_results?: Array<{
      query?: string;
      results?: OctenSearchResult[];
      latency?: number;
    }>;
  };
  meta?: {
    usage?: {
      num_search_queries?: number;
      full_content_tokens?: number;
    };
    latency?: number;
  };
};

export type SearchResult = {
  title: string;
  url: string;
  text?: string;
};

export class OctenBudgetExceededError extends Error {
  constructor(limit: number) {
    super(
      `Octen search-query budget exhausted (${limit} per run). Use existing sources, Wikipedia, or direct page fetches; do not retry Octen.`,
    );
    this.name = "OctenBudgetExceededError";
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
  const rawLimit = process.env.OCTEN_MAX_QUERIES_PER_RUN;
  if (rawLimit === undefined || rawLimit === "") return undefined;

  const limit = Number(rawLimit);
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error(`OCTEN_MAX_QUERIES_PER_RUN must be a positive integer; received "${rawLimit}"`);
  }

  const runID = process.env.GITHUB_RUN_ID ?? String(process.ppid);
  const file =
    process.env.OCTEN_BUDGET_FILE ??
    path.join(process.env.RUNNER_TEMP ?? os.tmpdir(), `hci-museum-octen-budget-${runID}.json`);
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
  throw new Error(`Timed out waiting for Octen budget lock: ${lockFile}`);
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
    throw new Error(`Could not read Octen budget file ${file}: ${String(error)}`);
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

export async function claimOctenBudget(queryCount: number): Promise<BudgetClaim | undefined> {
  if (!Number.isInteger(queryCount) || queryCount < 1) {
    throw new Error(`Octen budget claim must be a positive integer; received "${queryCount}"`);
  }
  const budget = configuredBudget();
  if (!budget) return undefined;

  fs.mkdirSync(path.dirname(budget.file), { recursive: true });
  const lockFile = `${budget.file}.lock`;
  const lockFD = await acquireLock(lockFile);
  try {
    const state = readBudget(budget.file, budget.limit);
    if (state.used + queryCount > budget.limit) throw new OctenBudgetExceededError(budget.limit);

    state.used += queryCount;
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

export async function searchOcten(options: {
  query: string;
  numResults: number;
  maxQueries: number;
  timeoutMs: number;
}): Promise<SearchResult[]> {
  const apiKey = process.env.OCTEN_API_KEY;
  if (!apiKey) throw new Error("OCTEN_API_KEY missing");

  const claim = await claimOctenBudget(options.maxQueries);
  const res = await fetchWithTimeout(
    process.env.OCTEN_ENDPOINT ?? DEFAULT_ENDPOINT,
    {
      method: "POST",
      headers: { "X-Api-Key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        query: options.query,
        max_queries: options.maxQueries,
        search_options: {
          count: options.numResults,
          highlight: { enable: true, max_tokens: 300 },
          full_content: { enable: false },
          format: "text",
          safesearch: "strict",
        },
      }),
    },
    options.timeoutMs,
  );
  if (!res.ok) throw new Error(`Octen broad search failed: ${res.status} ${res.statusText}\n${await res.text()}`);

  const data = (await res.json()) as OctenBroadSearchResponse;
  if (data.code !== 0) {
    throw new Error(`Octen broad search failed: code=${data.code} ${data.msg ?? "unknown error"}`);
  }

  const results = new Map<string, SearchResult>();
  for (const group of data.data?.search_results ?? []) {
    for (const result of group.results ?? []) {
      if (!result.url || results.has(result.url)) continue;
      results.set(result.url, {
        title: result.title || "Untitled",
        url: result.url,
        text: result.highlight ?? result.full_content,
      });
    }
  }

  const budgetLabel = claim ? ` queries=${claim.used}/${claim.limit}` : "";
  const actualQueries = data.meta?.usage?.num_search_queries;
  const usageLabel = typeof actualQueries === "number" ? ` actual_queries=${actualQueries}` : "";
  const latency = data.meta?.latency;
  const latencyLabel = typeof latency === "number" ? ` latency=${latency}ms` : "";
  console.error(
    `octen: broad max_queries=${options.maxQueries} results=${results.size}${budgetLabel}${usageLabel}${latencyLabel}`,
  );
  return [...results.values()];
}
