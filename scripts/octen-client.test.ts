import { afterEach, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { claimOctenBudget, OctenBudgetExceededError, searchOcten } from "./octen-client";

const originalEnv = {
  OCTEN_API_KEY: process.env.OCTEN_API_KEY,
  OCTEN_BUDGET_FILE: process.env.OCTEN_BUDGET_FILE,
  OCTEN_ENDPOINT: process.env.OCTEN_ENDPOINT,
  OCTEN_MAX_QUERIES_PER_RUN: process.env.OCTEN_MAX_QUERIES_PER_RUN,
};
const tempDirs: string[] = [];

function tempBudgetFile(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hci-museum-octen-test-"));
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

test("the shared budget caps generated queries across parallel broad searches", async () => {
  process.env.OCTEN_MAX_QUERIES_PER_RUN = "12";
  process.env.OCTEN_BUDGET_FILE = tempBudgetFile();

  const results = await Promise.allSettled(Array.from({ length: 30 }, () => claimOctenBudget(3)));
  const accepted = results.filter((result) => result.status === "fulfilled");
  const rejected = results.filter((result) => result.status === "rejected");

  expect(accepted).toHaveLength(4);
  expect(rejected).toHaveLength(26);
  expect(rejected.every((result) => result.reason instanceof OctenBudgetExceededError)).toBe(true);
});

test("search uses bounded Octen broad search and deduplicates results", async () => {
  process.env.OCTEN_API_KEY = "test-key";
  process.env.OCTEN_MAX_QUERIES_PER_RUN = "3";
  process.env.OCTEN_BUDGET_FILE = tempBudgetFile();

  let requestBody: Record<string, unknown> = {};
  let apiKeyHeader = "";
  const server = Bun.serve({
    port: 0,
    async fetch(request) {
      apiKeyHeader = request.headers.get("x-api-key") ?? "";
      requestBody = (await request.json()) as Record<string, unknown>;
      return Response.json({
        code: 0,
        data: {
          search_results: [
            {
              query: "first",
              results: [{ title: "Example", url: "https://example.com", highlight: "Useful context" }],
            },
            {
              query: "second",
              results: [
                { title: "Duplicate", url: "https://example.com", highlight: "Duplicate context" },
                { title: "Second", url: "https://example.org", highlight: "More context" },
              ],
            },
          ],
        },
        meta: { usage: { num_search_queries: 3 }, latency: 42 },
      });
    },
  });
  process.env.OCTEN_ENDPOINT = `http://127.0.0.1:${server.port}`;

  try {
    const results = await searchOcten({
      query: "HCI history",
      numResults: 5,
      maxQueries: 3,
      timeoutMs: 1_000,
    });
    expect(results).toHaveLength(2);
    expect(results[0]?.text).toBe("Useful context");
    expect(apiKeyHeader).toBe("test-key");
    expect(requestBody).toEqual({
      query: "HCI history",
      max_queries: 3,
      search_options: {
        count: 5,
        highlight: { enable: true, max_tokens: 300 },
        full_content: { enable: false },
        format: "text",
        safesearch: "strict",
      },
    });
  } finally {
    server.stop(true);
  }
});
