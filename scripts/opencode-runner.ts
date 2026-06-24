import { createOpencode, type Config } from "@opencode-ai/sdk";

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
  info: { error?: unknown };
  parts: Part[];
};

type OpencodeInstance = Awaited<ReturnType<typeof createOpencode>>;

const KNOWN_PROVIDER_IDS = new Set(["anthropic", "deepseek", "github-copilot", "google", "openai", "openrouter", "xai"]);

let instancePromise: Promise<OpencodeInstance> | undefined;

function providerApiKey(providerID: string): string | undefined {
  if (providerID === "xai") return process.env.XAI_API_KEY ?? process.env.GROK_API_KEY;
  if (providerID === "deepseek") return process.env.DEEPSEEK_API_KEY;
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

function opencodeConfig(): Config {
  const providerIDs = ["xai", "deepseek", "openrouter"];
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
  agent: "hci-scout" | "hci-researcher" | "hci-curator" | "hci-evaluator";
  system: string;
  prompt: string;
}): Promise<string> {
  const { client } = await getOpencode();
  const directory = process.cwd();
  const session = unwrap<Session>(
    await client.session.create({ query: { directory }, body: { title: options.title } }),
    "create opencode session",
  );
  const response = unwrap<PromptResponse>(
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
  );
  if (response.info.error) throw new Error(`opencode model error: ${JSON.stringify(response.info.error)}`);
  return response.parts
    .filter((part): part is TextPart => part.type === "text")
    .map((part) => part.text)
    .join("\n")
    .trim();
}

export async function closeOpencode() {
  if (!instancePromise) return;
  const instance = await instancePromise;
  instance.server.close();
  instancePromise = undefined;
}
