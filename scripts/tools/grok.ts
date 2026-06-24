#!/usr/bin/env bun

const ENDPOINT = "https://api.x.ai/v1/chat/completions";

function usage(): never {
  console.error('usage: bun scripts/tools/grok.ts "prompt" [--system "..."] [--model grok-4.3] [--json]');
  process.exit(1);
}

function argValue(args: string[], name: string): string | undefined {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1];
}

async function readStdin(): Promise<string> {
  if (process.stdin.isTTY) return "";
  return await new Response(Bun.stdin.stream()).text();
}

async function main() {
  const args = process.argv.slice(2);
  const promptArg = args.find((arg, index) => index >= 0 && !arg.startsWith("--") && args[index - 1] !== "--system" && args[index - 1] !== "--model");
  const prompt = promptArg ?? (await readStdin()).trim();
  if (!prompt) usage();

  const apiKey = process.env.XAI_API_KEY ?? process.env.GROK_API_KEY;
  if (!apiKey) throw new Error("XAI_API_KEY or GROK_API_KEY missing");

  const system = argValue(args, "--system") ?? "You are a concise research assistant.";
  const model = argValue(args, "--model") ?? process.env.GROK_MODEL ?? "grok-4.3";
  const json = args.includes("--json");
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    }),
  });
  if (!res.ok) throw new Error(`Grok request failed: ${res.status} ${res.statusText}\n${await res.text()}`);

  const data = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const text = data.choices?.[0]?.message?.content ?? "";
  if (json) {
    console.log(JSON.stringify({ model, text }, null, 2));
    return;
  }
  console.log(text);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
