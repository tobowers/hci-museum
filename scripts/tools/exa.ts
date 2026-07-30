#!/usr/bin/env bun

import { envInt } from "../concurrency";
import { searchExa } from "../exa-client";

const MAX_RESULTS = 8;

function usage(): never {
  console.error('usage: bun scripts/tools/exa.ts search "query" [--num 8] [--timeout-ms 20000] [--json]');
  process.exit(1);
}

function argValue(args: string[], name: string): string | undefined {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1];
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  if (command !== "search") usage();

  const query = args.find((arg, index) => index > 0 && !arg.startsWith("--") && args[index - 1] !== "--num");
  if (!query) usage();

  const numResults = Number(argValue(args, "--num") ?? MAX_RESULTS);
  if (!Number.isInteger(numResults) || numResults < 1 || numResults > MAX_RESULTS) {
    throw new Error(`--num must be an integer between 1 and ${MAX_RESULTS}`);
  }
  const timeoutMs = Number(argValue(args, "--timeout-ms") ?? envInt("SCOUT_FETCH_TIMEOUT_MS", 20_000));
  const json = args.includes("--json");
  const data = await searchExa({ query, numResults, timeoutMs });
  const results = (data.results ?? []).map((result) => ({
    title: result.title ?? "Untitled",
    url: result.url ?? "",
    snippet: (result.text ?? "").slice(0, 1000),
  }));

  if (json) {
    console.log(JSON.stringify(results, null, 2));
    return;
  }

  for (const [index, result] of results.entries()) {
    console.log(`${index + 1}. ${result.title}`);
    console.log(`   ${result.url}`);
    if (result.snippet) console.log(`   ${result.snippet.replace(/\s+/g, " ")}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
