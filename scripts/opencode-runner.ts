import { createOpencode, type Config } from "@opencode-ai/sdk";
import { envInt, withTimeout } from "./concurrency";

type RequestResult<T> = {
  data?: T;
  error?: unknown;
  response?: Response;
};

type ModelRef = {
  providerID: string;
  modelID: string;
};

type TextPart = {
  type: "text";
  text: string;
};

type Part = TextPart | { type: string; [key: string]: unknown };

type Session = {
  id: string;
};

type PromptResponse = {
  info: {
    error?: unknown;
    providerID?: string;
    modelID?: string;
    cost?: number;
    tokens?: {
      input?: number;
      output?: number;
      reasoning?: number;
      cache?: {
        read?: number;
        write?: number;
      };
    };
  };
  parts: Part[];
};

type UsageRecord = {
  title: string;
  agent: string;
  providerID: string;
  modelID: string;
  cost: number;
  input: number;
  output: number;
  reasoning: number;
  cacheRead: number;
  cacheWrite: number;
};

type OpencodeInstance = Awaited<ReturnType<typeof createOpencode>>;

const KNOWN_PROVIDER_IDS = new Set([
  "anthropic",
  "deepseek",
  "github-copilot",
  "google",
  "kimi-for-coding",
  "moonshotai",
  "openai",
  "openrouter",
  "xai",
]);

let instancePromise: Promise<OpencodeInstance> | undefined;
const usageRecords: UsageRecord[] = [];
const AGENT_TIMEOUT_MS = envInt("SCOUT_AGENT_TIMEOUT_MS", 180_000);

function providerApiKey(providerID: string): string | undefined {
  if (providerID === "xai") return process.env.XAI_API_KEY ?? process.env.GROK_API_KEY;
  if (providerID === "deepseek") return process.env.DEEPSEEK_API_KEY;
  if (providerID === "kimi-for-coding" || providerID === "moonshotai") return process.env.KIMI_API_KEY;
  if (providerID === "openrouter") return process.env.OPENROUTER_API_KEY;
  return undefined;
}

function buildProviderConfig(providerID: string): NonNullable<Config["provider"]>[string] | undefined {
  const apiKey = providerApiKey(providerID);
  if (!apiKey) return undefined;
  return { options: { apiKey } };
}

export function resolveModelRef(modelID: string, defaultProviderID: string): ModelRef {
  const slash = modelID.indexOf("/");
  if (slash > 0) {
    const maybeProvider = modelID.slice(0, slash);
    if (KNOWN_PROVIDER_IDS.has(maybeProvider)) {
      return { providerID: maybeProvider, modelID: modelID.slice(slash + 1) };
    }
  }
  return { providerID: defaultProviderID, modelID };
}

function unwrap<T>(result: RequestResult<T>, label: string): T {
  if (result.error) throw new Error(`${label} failed: ${JSON.stringify(result.error)}`);
  if (result.data === undefined) throw new Error(`${label} failed: empty response`);
  return result.data;
}

function fmtCost(cost: number): string {
  return `$${cost.toFixed(6)}`;
}

function logUsage(record: UsageRecord) {
  usageRecords.push(record);
  console.log(
    `usage: ${record.title} [${record.agent} ${record.providerID}/${record.modelID}] input=${record.input} output=${record.output} reasoning=${record.reasoning} cache_read=${record.cacheRead} cache_write=${record.cacheWrite} cost=${fmtCost(record.cost)}`,
  );
}

function logUsageSummary() {
  if (!usageRecords.length) return;

  const byModel = new Map<string, UsageRecord>();
  for (const record of usageRecords) {
    const key = `${record.providerID}/${record.modelID}`;
    const current = byModel.get(key);
    if (!current) {
      byModel.set(key, { ...record, title: key, agent: "total" });
      continue;
    }
    current.cost += record.cost;
    current.input += record.input;
    current.output += record.output;
    current.reasoning += record.reasoning;
    current.cacheRead += record.cacheRead;
    current.cacheWrite += record.cacheWrite;
  }

  const total = [...byModel.values()].reduce(
    (acc, record) => {
      acc.cost += record.cost;
      acc.input += record.input;
      acc.output += record.output;
      acc.reasoning += record.reasoning;
      acc.cacheRead += record.cacheRead;
      acc.cacheWrite += record.cacheWrite;
      return acc;
    },
    { cost: 0, input: 0, output: 0, reasoning: 0, cacheRead: 0, cacheWrite: 0 },
  );

  console.log("usage summary:");
  for (const record of [...byModel.values()].sort((a, b) => `${a.providerID}/${a.modelID}`.localeCompare(`${b.providerID}/${b.modelID}`))) {
    console.log(
      `  ${record.providerID}/${record.modelID}: calls=${usageRecords.filter((item) => item.providerID === record.providerID && item.modelID === record.modelID).length} input=${record.input} output=${record.output} reasoning=${record.reasoning} cache_read=${record.cacheRead} cache_write=${record.cacheWrite} cost=${fmtCost(record.cost)}`,
    );
  }
  console.log(
    `  total: calls=${usageRecords.length} input=${total.input} output=${total.output} reasoning=${total.reasoning} cache_read=${total.cacheRead} cache_write=${total.cacheWrite} cost=${fmtCost(total.cost)}`,
  );
}

function opencodeConfig(): Config {
  const providerIDs = ["xai", "deepseek", "openrouter", "kimi-for-coding", "moonshotai"];
  const provider: NonNullable<Config["provider"]> = {};
  for (const id of providerIDs) {
    const config = buildProviderConfig(id);
    if (config) provider[id] = config;
  }

  return {
    autoupdate: false,
    share: "disabled",
    provider,
    agent: {
      "beepy-scout": {
        mode: "primary",
        maxSteps: 48,
        tools: {
          bash: true,
          read: true,
          glob: true,
          grep: true,
          edit: true,
          write: true,
          task: true,
          webfetch: true,
          todowrite: true,
        },
        permission: { bash: "allow", webfetch: "allow", edit: "allow" },
        prompt:
          "You are Beepy, the HCI Museum's AI curator. Use research subagents through the task tool to parallelize source gathering. Keep an explicit trace of what you did. Prefer small, reviewable output files under potential/ and docs/blog/; do not promote artifacts into docs/hci-wiki.md unless explicitly asked.",
      },
      "beepy-blogger": {
        mode: "primary",
        maxSteps: 28,
        tools: {
          bash: true,
          read: true,
          glob: true,
          grep: true,
          edit: true,
          write: true,
          webfetch: true,
          todowrite: true,
        },
        permission: { bash: "allow", webfetch: "allow", edit: "allow" },
        prompt:
          "You are Beepy's Field Notes writing agent for the HCI Museum. Write at most one thoughtful blog post from existing collection knowledge, Beepy memory, and recent run traces. Do not add or promote collection exhibits. Prefer local images under assets/wiki if you include images.",
      },
      "beepy-manager": {
        mode: "primary",
        maxSteps: 42,
        tools: {
          bash: true,
          read: true,
          glob: true,
          grep: true,
          edit: true,
          write: true,
          webfetch: true,
          todowrite: true,
        },
        permission: { bash: "allow", webfetch: "allow", edit: "allow" },
        prompt:
          "You are Beepy operating the HCI Museum GitHub project. Use GitHub Issues as your backlog and conversation channel. Use `gh issue` and `gh pr` through bash for issue management. Do one focused, safe site/content/outreach improvement per run, or open/comment on issues when blocked. Do not expose secrets. Verify changes before finishing.",
      },
      "beepy-pr-reviewer": {
        mode: "primary",
        maxSteps: 52,
        tools: {
          bash: true,
          read: true,
          glob: true,
          grep: true,
          edit: true,
          write: true,
          webfetch: true,
          todowrite: true,
        },
        permission: { bash: "allow", webfetch: "allow", edit: "allow" },
        prompt:
          "You are Beepy reviewing an HCI Museum pull request from fresh context. Be objective and conservative: inspect the diff, verify behavior, fix clear issues when safe, and merge only when the PR is clean, verified, and low risk. Use GitHub CLI through bash for PR comments, pushes, and merging. Do not expose secrets.",
      },
      "beepy-action-triager": {
        mode: "primary",
        maxSteps: 52,
        tools: {
          bash: true,
          read: true,
          glob: true,
          grep: true,
          edit: true,
          write: true,
          webfetch: true,
          todowrite: true,
        },
        permission: { bash: "allow", webfetch: "allow", edit: "allow" },
        prompt:
          "You are Beepy triaging a failed HCI Museum GitHub Actions run. Inspect the failed run and logs, identify the root cause, make the smallest safe repo fix when possible, verify it, or open/comment on a QA issue when not safely fixable. Do not expose secrets.",
      },
      "hci-research-subagent": {
        mode: "subagent",
        maxSteps: 18,
        tools: { bash: true, read: true, glob: true, grep: true, webfetch: true, edit: false, write: false },
        permission: { bash: "allow", webfetch: "allow", edit: "deny" },
        prompt:
          "You are an HCI research subagent. Research one focused angle or candidate deeply. Make at most 2 Exa calls through `bun scripts/tools/exa.ts search \"query\" --num 8 --json`; never call Exa directly or retry an exhausted shared budget. Use existing sources, direct page fetches, Wikipedia, and `bun scripts/tools/grok.ts \"prompt\" --json` for other leads. Return concise, sourced findings only; do not edit files.",
      },
      "hci-image-subagent": {
        mode: "subagent",
        maxSteps: 12,
        tools: { bash: true, webfetch: true, read: true, glob: true, edit: false, write: false },
        permission: { bash: "allow", webfetch: "allow", edit: "deny" },
        prompt:
          "You are an HCI media/source subagent. Find plausible public source pages and image leads for one artifact. Return URLs and licensing/source notes; do not download or edit files.",
      },
      "hci-scout": {
        mode: "primary",
        maxSteps: 14,
        tools: { bash: true, webfetch: true, edit: false, write: false },
        permission: { bash: "allow", webfetch: "allow", edit: "deny" },
        prompt:
          "You are an HCI museum research agent. Return exactly the requested artifact, usually strict JSON. You may use repo-local CLI tools under scripts/tools for search or model assistance. Do not edit files.",
      },
      "hci-researcher": {
        mode: "primary",
        maxSteps: 18,
        tools: { bash: true, webfetch: true, edit: false, write: false },
        permission: { bash: "allow", webfetch: "allow", edit: "deny" },
        prompt:
          "You are a meticulous HCI hardware researcher. Use sources carefully, distinguish uncertainty, and return exactly the requested structured output. Do not edit files.",
      },
      "hci-curator": {
        mode: "primary",
        maxSteps: 12,
        tools: { bash: true, webfetch: true, edit: false, write: false },
        permission: { bash: "allow", webfetch: "allow", edit: "deny" },
        prompt:
          "You are Beepy's curatorial agent for the HCI Museum. Preserve factual grounding and return exactly the requested structured output. Do not edit files.",
      },
      "hci-evaluator": {
        mode: "primary",
        maxSteps: 8,
        tools: { bash: false, webfetch: false, edit: false, write: false },
        permission: { bash: "deny", webfetch: "deny", edit: "deny" },
        prompt: "You are a strict evaluator. Return only the requested JSON.",
      },
    },
  };
}

async function getOpencode(): Promise<OpencodeInstance> {
  if (!instancePromise) {
    const port = Number(process.env.OPENCODE_PORT ?? 0) || 4300 + Math.floor(Math.random() * 1000);
    instancePromise = createOpencode({ port, timeout: 15000, config: opencodeConfig() });
  }
  return instancePromise;
}

export async function opencodeText(options: {
  title: string;
  model: ModelRef;
  agent: string;
  system: string;
  prompt: string;
}): Promise<string> {
  const { client } = await getOpencode();
  const directory = process.cwd();
  const session = unwrap<Session>(
    await client.session.create({ query: { directory }, body: { title: options.title } }),
    "create opencode session",
  );
  const response = await withTimeout(
    `opencode ${options.agent} ${options.title}`,
    AGENT_TIMEOUT_MS,
    async () =>
      unwrap<PromptResponse>(
        await client.session.prompt({
          path: { id: session.id },
          query: { directory },
          body: {
            model: options.model,
            agent: options.agent,
            system: options.system,
            parts: [{ type: "text", text: options.prompt }],
          },
        }),
        "prompt opencode session",
      ),
    async () => {
      console.warn(`timeout: aborting opencode session ${session.id} (${options.title})`);
      await client.session.abort({ path: { id: session.id }, query: { directory } }).catch(() => undefined);
    },
  );
  if (response.info.error) throw new Error(`opencode model error: ${JSON.stringify(response.info.error)}`);
  logUsage({
    title: options.title,
    agent: options.agent,
    providerID: response.info.providerID ?? options.model.providerID,
    modelID: response.info.modelID ?? options.model.modelID,
    cost: response.info.cost ?? 0,
    input: response.info.tokens?.input ?? 0,
    output: response.info.tokens?.output ?? 0,
    reasoning: response.info.tokens?.reasoning ?? 0,
    cacheRead: response.info.tokens?.cache?.read ?? 0,
    cacheWrite: response.info.tokens?.cache?.write ?? 0,
  });
  return response.parts
    .filter((part): part is TextPart => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
}

export async function closeOpencode() {
  if (!instancePromise) return;
  const instance = await instancePromise;
  logUsageSummary();
  usageRecords.length = 0;
  instance.server.close();
  instancePromise = undefined;
}
