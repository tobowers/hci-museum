import { afterEach, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { claimExaBudget, ExaBudgetExceededError, searchExa } from "./exa-client";

const originalEnv = {
  EXA_API_KEY: process.env.EXA_API_KEY,
  EXA_BUDGET_FILE: process.env.EXA_BUDGET_FILE,
  EXA_ENDPOINT: process.env.EXA_ENDPOINT,
  EXA_MAX_REQUESTS_PER_RUN: process.env.EXA_MAX_REQUESTS_PER_RUN,
};
const tempDirs: string[] = [];

function tempBudgetFile(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hci-museum-exa-test-"));
  tempDirs.push(dir);
  return path.join(dir, "budget.json");
}

afterEach(() => {
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  for (const dir of tempDirs.splice(0)) fs.rmSync(dir, { recursive: true, force: true });
});

test("the shared budget allows only the configured number of parallel claims", async () => {
  process.env.EXA_MAX_REQUESTS_PER_RUN = "7";
  process.env.EXA_BUDGET_FILE = tempBudgetFile();

  const results = await Promise.allSettled(Array.from({ length: 30 }, () => claimExaBudget()));
  const accepted = results.filter((result) => result.status === "fulfilled");
  const rejected = results.filter((result) => result.status === "rejected");

  expect(accepted).toHaveLength(7);
  expect(rejected).toHaveLength(23);
  expect(rejected.every((result) => result.reason instanceof ExaBudgetExceededError)).toBe(true);
});

test("search always requests the fast search type", async () => {
  process.env.EXA_API_KEY = "test-key";
  process.env.EXA_MAX_REQUESTS_PER_RUN = "1";
  process.env.EXA_BUDGET_FILE = tempBudgetFile();

  let requestBody: Record<string, unknown> = {};
  const server = Bun.serve({
    port: 0,
    async fetch(request) {
      requestBody = (await request.json()) as Record<string, unknown>;
      return Response.json({
        results: [{ title: "Example", url: "https://example.com" }],
        costDollars: { total: 0.007 },
      });
    },
  });
  process.env.EXA_ENDPOINT = `http://127.0.0.1:${server.port}`;

  try {
    const response = await searchExa({ query: "HCI history", numResults: 8, timeoutMs: 1_000 });
    expect(response.results).toHaveLength(1);
    expect(requestBody).toEqual({
      query: "HCI history",
      numResults: 8,
      type: "fast",
    });
  } finally {
    server.stop(true);
  }
});
