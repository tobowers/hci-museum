#!/usr/bin/env bun
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { closeOpencode, deepseekModelRef, opencodeText, requireProviderKey } from "./opencode-runner";
import { errorData } from "./run-trace";
import { exhibits } from "../src/data";

const POTENTIAL_DIR = "potential";
const BLOG_DIR = "docs/blog";
const RUN_DIR = `${POTENTIAL_DIR}/runs`;
const BEEPY_CHARTER = "docs/beepy.md";
const BEEPY_MEMORY = "docs/beepy-memory.md";
const MODEL = deepseekModelRef();
const OCTEN_REQUEST_LIMIT = Number(process.env.OCTEN_MAX_REQUESTS_PER_RUN ?? 7);
const EXA_REQUEST_LIMIT = Number(process.env.EXA_MAX_REQUESTS_PER_RUN ?? 2);

function die(message: string): never {
  console.error(`agent-scout: ${message}`);
  process.exit(1);
}

function requireEnv() {
  try {
    requireProviderKey(MODEL.providerID);
  } catch (error) {
    die((error as Error).message);
  }
  if (!process.env.OCTEN_API_KEY) die("OCTEN_API_KEY missing");
  if (!process.env.EXA_API_KEY) die("EXA_API_KEY missing");
  if (!process.env.XAI_API_KEY && !process.env.GROK_API_KEY) die("XAI_API_KEY or GROK_API_KEY missing");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

function runPaths(topic: string): { tracePath: string; summaryPath: string } {
  fs.mkdirSync(RUN_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const slug = slugify(topic) || "scout";
  return {
    tracePath: path.join(RUN_DIR, `${stamp}-${slug}.md`),
    summaryPath: path.join(RUN_DIR, `${stamp}-${slug}.summary.md`),
  };
}

function commandOutput(command: string, args: string[]): { ok: boolean; output: string } {
  const result = spawnSync(command, args, { encoding: "utf-8", maxBuffer: 50 * 1024 * 1024 });
  return { ok: result.status === 0, output: `${result.stdout ?? ""}${result.stderr ?? ""}`.trim() };
}

function gitStatusShort(): string {
  return commandOutput("git", ["status", "--short"]).output;
}

function hasSubstantiveGeneratedChanges(status: string): boolean {
  return status
    .split("\n")
    .map((line) => line.slice(3).trim())
    .filter(Boolean)
    .some((file) => !file.startsWith("potential/runs/"));
}

function isRecoverableAbort(error: unknown): boolean {
  const data = errorData(error);
  const text = `${String(error)}\n${JSON.stringify(data)}`;
  return /MessageAbortedError|timed out after|timeout: aborting opencode session|The operation was canceled/i.test(text);
}

function writeFallbackSummary(summaryPath: string, details: { topic: string; tracePath: string; status: string; checks: Array<{ label: string; ok: boolean; output: string }> }) {
  const checks = details.checks
    .map((check) => {
      const output = check.output ? `\n\n\`\`\`text\n${check.output.slice(-5000)}\n\`\`\`` : "";
      return `- ${check.ok ? "PASS" : "FAIL"}: \`${check.label}\`${output}`;
    })
    .join("\n");

  fs.writeFileSync(
    summaryPath,
    `# Agent Scout Partial Summary\n\nTopic: ${details.topic}\n\nThe opencode scout session was aborted by the Actions timeout after producing repository changes. The wrapper treated this as a recoverable partial run because generated output exists and verification passed.\n\nTrace: ${details.tracePath}\n\n## Changed Files\n\n\`\`\`text\n${details.status}\n\`\`\`\n\n## Verification\n\n${checks}\n`,
  );
}

async function main() {
  const topic = process.argv.slice(2).join(" ").trim() || "research, review, and add about 3 more weird HCI interface artifacts from 1976-1992";
  requireEnv();

  fs.mkdirSync(POTENTIAL_DIR, { recursive: true });
  fs.mkdirSync(BLOG_DIR, { recursive: true });
  const charter = fs.existsSync(BEEPY_CHARTER) ? fs.readFileSync(BEEPY_CHARTER, "utf-8") : "";
  const memory = fs.existsSync(BEEPY_MEMORY) ? fs.readFileSync(BEEPY_MEMORY, "utf-8") : "";
  const { tracePath, summaryPath } = runPaths(topic);
  fs.writeFileSync(tracePath, `# Agent Scout Trace\n\nTopic: ${topic}\n\n`);

  const existing = exhibits.map((exhibit) => `- ${exhibit.title} (${exhibit.year})`).join("\n");
  const prompt = `You are Beepy, AI curator of the HCI Museum. Run this as one opencode agent session, not as a rigid pipeline.

${charter}

Beepy memory:
${memory}

Goal: ${topic}

Find about 3 promising new HCI hardware/interface artifacts from roughly 1976-1992, review them, and add the strongest ones to the real collection. Favor strange, embodied, commercially odd, or interaction-model-rich artifacts. Commercial hits are OK only when the interaction idea is distinctive.

Already in the museum. Do not duplicate these:
${existing}

Use subagents to speed up research without multiplying search costs:
- Use the task tool with subagent_type "hci-research-subagent" for candidate research.
- Use the task tool with subagent_type "hci-image-subagent" for image/source leads when useful.
- Launch no more than 3 research subagents in parallel, each with one focused angle.

Available CLI tools for you and subagents through bash:
- Octen focused search: bun scripts/tools/octen.ts search "precise query" --num 8 --json
- Exa quality fallback: bun scripts/tools/exa.ts search "precise query" --num 8 --json
- Grok helper: bun scripts/tools/grok.ts "prompt" --json

Discovery/query behavior:
- Come up with your own search queries based on the goal, current collection gaps, and Beepy memory.
- Do not wait for a prewritten candidate list. Use Grok for broad ideation only if helpful; use Octen/source pages for grounding.
- The entire run, including all subagents, has a shared hard limit of ${OCTEN_REQUEST_LIMIT} Octen requests. Never bypass scripts/tools/octen.ts with curl or another client.
- Octen is the primary web search. Always try a precise Octen query before considering Exa.
- Give each research subagent at most 2 focused Octen searches. Author each query yourself and preserve the concrete artifact class, 1976-1992 date range, unusual interaction requirement, and useful source terms such as prototype, patent, proceedings, manual, brochure, museum, or archive.
- Treat an exhausted Octen budget as final and continue with existing sources, Wikipedia, and direct page fetches.
- The entire run also has a shared hard limit of ${EXA_REQUEST_LIMIT} Exa fallback requests. Never bypass scripts/tools/exa.ts with curl or another client, and never retry an exhausted Exa budget.
- Use Exa only when the first Octen result set is mostly irrelevant, fails to name a plausible in-period artifact, or when one final candidate needs independent source validation. Never use Exa for broad exploration. Give any one subagent at most 1 Exa call.
- Try up to 3 query angles in parallel through subagents, then choose what deserves promotion.

Memory behavior:
- Read docs/beepy-memory.md as durable guidance.
- If this run teaches a durable lesson, update docs/beepy-memory.md with a concise note.
- Do not turn memory into a run log; trace files are for run logs.

Keep a live trace:
- Append short progress notes to ${tracePath} as you work.
- Include candidate names, subagent assignments, source/tool calls used, decisions, and blockers.

Write reviewable output files:
- For each good candidate, create potential/<slug>/info.json.
- Match this shape closely:
  {
    "slug": "object-slug",
    "title": "Object title",
    "year": "1984",
    "subtitle": "one-sentence hook",
    "why_scout_cares": "why this belongs in the museum",
    "search_terms": ["..."],
    "research": {
      "title": "Object title",
      "year": "1984",
      "by": "company/lab/person",
      "tags": ["HCI", "Input", "Wearable"],
      "overview": "2-3 factual paragraphs in markdown",
      "deepDive": [{"heading":"Origins","text":"..."}],
      "team": [{"name":"Person or organization","note":"role"}],
      "media": [{"src":"source URL","alt":"alt text","caption":"caption with source"}],
      "sources": [{"text":"Source title","url":"source URL"}],
      "imageUrls": ["source image or source page URLs"]
    },
    "savedImages": []
  }
- If one candidate is especially ready, you may also draft docs/blog/<slug>.md as a Beepy Field Note. This is optional; do not let blog drafting block the run.

Add selected artifacts to the collection:
- After you have created and reviewed potential/<slug>/info.json files, promote the selected artifacts into the actual museum collection.
- Prefer running: bun scripts/promote-potentials.ts
- That script updates docs/hci-wiki.md, src/data.ts, and copies downloaded local images from potential/<slug>/images into assets/wiki when present.
- If the promotion script is not enough, make the smallest direct edits needed to docs/hci-wiki.md and src/data.ts.
- Do not promote weak or poorly sourced candidates. It is okay to add fewer than 3 if fewer are ready.
- Always use local images for promoted collection exhibits. Download/copy selected media to assets/wiki/ and ensure src/data.ts and docs/hci-wiki.md reference assets/wiki paths, not remote hotlinks.

Verify after collection edits:
- Run bun run typecheck.
- Run bun run build.
- If verification fails, fix the issue or revert only your own incomplete candidate addition.

At the end:
- Write ${summaryPath} with what changed, what artifacts were added to the collection, what files were written, verification results, and what still needs review.
- Final response should be a concise summary plus the trace and summary paths.`;

  console.log(`agent-scout: topic = "${topic}"`);
  console.log(`agent-scout: model = ${MODEL.providerID}/${MODEL.modelID}`);
  console.log(`agent-scout: trace = ${tracePath}`);
  console.log(`agent-scout: summary = ${summaryPath}`);

  try {
    const result = await opencodeText({
      title: `Beepy scout: ${topic}`,
      model: MODEL,
      agent: "beepy-scout",
      system: "You are Beepy, the HCI Museum AI curator. Use task subagents for research and write reviewable repo files.",
      prompt,
    });
    console.log(result);
    await closeOpencode();
  } catch (error) {
    fs.appendFileSync(tracePath, `\n## Fatal Error\n\n\`\`\`json\n${JSON.stringify(errorData(error), null, 2)}\n\`\`\`\n`);
    console.error(`agent-scout: failed; trace so far: ${tracePath}`);
    console.error(error);
    await closeOpencode();

    const status = gitStatusShort();
    if (hasSubstantiveGeneratedChanges(status) && isRecoverableAbort(error)) {
      console.warn("agent-scout: timeout/abort produced repository changes; verifying partial output before treating as recoverable");
      const checks = [
        { label: "bun run typecheck", ...commandOutput("bun", ["run", "typecheck"]) },
        { label: "bun run build", ...commandOutput("bun", ["run", "build"]) },
      ];
      for (const check of checks) {
        fs.appendFileSync(tracePath, `\n## Recovery Check: ${check.label}\n\nResult: ${check.ok ? "PASS" : "FAIL"}\n\n\`\`\`text\n${check.output.slice(-5000)}\n\`\`\`\n`);
      }
      if (checks.every((check) => check.ok)) {
        writeFallbackSummary(summaryPath, { topic, tracePath, status: gitStatusShort(), checks });
        console.warn(`agent-scout: recovered partial output; summary = ${summaryPath}`);
        process.exit(0);
      }
      console.error("agent-scout: partial output did not verify; keeping failure state");
    }

    process.exit(1);
  }
}

main();
