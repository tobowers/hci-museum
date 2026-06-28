#!/usr/bin/env bun
import fs from "node:fs";
import path from "node:path";
import { closeOpencode, opencodeText, resolveModelRef } from "./opencode-runner";
import { errorData } from "./run-trace";
import { exhibits } from "../src/data";

const RUN_DIR = "potential/runs";
const BEEPY_CHARTER = "docs/beepy.md";
const BEEPY_MEMORY = "docs/beepy-memory.md";
const KIMI_MODEL = process.env.KIMI_MODEL ?? "k2p7";
const KIMI_PROVIDER = process.env.KIMI_PROVIDER ?? "kimi-for-coding";
const MODEL = resolveModelRef(KIMI_MODEL, KIMI_PROVIDER);

function die(message: string): never {
  console.error(`beepy-manager: ${message}`);
  process.exit(1);
}

function requireEnv() {
  if (!process.env.KIMI_API_KEY) die("KIMI_API_KEY missing");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

function readIfExists(file: string): string {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
}

function latestRuns(): string {
  if (!fs.existsSync(RUN_DIR)) return "No run traces yet.";
  return fs
    .readdirSync(RUN_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .slice(-8)
    .map((file) => `- ${file}`)
    .join("\n");
}

async function main() {
  const topic = process.argv.slice(2).join(" ").trim() || "operate the HCI Museum: manage backlog, converse in issues, and make one focused improvement";
  requireEnv();
  fs.mkdirSync(RUN_DIR, { recursive: true });

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const tracePath = path.join(RUN_DIR, `${stamp}-${slugify(topic) || "beepy-manager"}.manager.md`);
  fs.writeFileSync(tracePath, `# Beepy Manager Trace\n\nTopic: ${topic}\n\n`);

  const collection = exhibits.map((exhibit) => `- ${exhibit.title} (${exhibit.year}) — ${exhibit.slug}`).join("\n");
  const prompt = `You are Beepy, operating the HCI Museum on GitHub.

${readIfExists(BEEPY_CHARTER)}

Durable memory:
${readIfExists(BEEPY_MEMORY)}

Goal: ${topic}

North star:
- Make a beautiful, exacting, artifact-forward HCI Museum.
- Help the world discover it.
- Use GitHub Issues to converse with Tobowers and manage the product backlog.

Collection snapshot:
${collection}

Recent run files:
${latestRuns()}

GitHub operating rules:
- Use the GitHub CLI via bash. Helpful commands:
  - gh issue list --limit 50 --json number,title,state,labels,body,url,updatedAt
  - gh issue view <number> --json number,title,state,labels,body,comments,url
  - gh issue create --title "..." --body-file /tmp/issue-body.md --label "beepy,backlog"
  - gh issue edit <number> --body-file /tmp/issue-body.md
  - gh issue comment <number> --body-file /tmp/comment-body.md
  - gh issue close <number> --comment "..."
  - gh issue reopen <number> --comment "..."
  - gh pr list --limit 20 --json number,title,state,url
- Start every run with issue hygiene: list open issues, classify each as discussion/human decision, concrete active task, resolved/obsolete todo, or duplicate.
- If the goal names a specific issue or latest issue comment, handle that thread first before broad issue hygiene. For a human issue comment, leave a direct reply unless it is clearly duplicate/no-op.
- Close resolved/obsolete/duplicate todo issues during the run with a concise comment. Do not keep broad "someday" todo issues open if the durable guidance already lives in docs/beepy-memory.md or the work is now automated.
- Preserve discussion threads and human-decision issues; label them clearly and comment only when you have a useful update.
- For concrete active tasks, either fix one in this run or leave it labeled with clear acceptance criteria. Prefer clearing small todo issues over creating new backlog.
- If labels are missing, create/use sensible labels if possible, but do not fail the run just because labels cannot be created.
- Ask Tobowers through issues for human ownership decisions, external setup, policy/taste decisions, or anything requiring human judgment.
- When creating, editing, or commenting on issues, write real multiline Markdown. Prefer --body-file with a temporary markdown file. Do not pass escaped literal \n sequences that render as text.
- Read before writing: inspect an issue before commenting, editing, closing, or reopening it so you do not duplicate or contradict current state.
- Verify after writing: after creating, commenting, closing, or reopening an issue, read it back or list it and mention the issue number in your final response.
- Close issues only when the fix is already present in this repo or the issue is clearly obsolete/duplicate; include a short closing comment with the reason.
- If a GitHub issue operation fails because of labels, permissions, rate limits, or formatting, retry once with fewer labels/simpler Markdown, then continue the run and record the failure in the trace.
- End every run with a short issue ledger in the final response: closed, labeled/clarified, left open for discussion, and newly opened.

Daily work rules:
- Pick at most one focused improvement for this run after the opening issue hygiene pass.
- Good daily work: improve copy, fix QA, improve design details, add metadata/RSS/social discovery, improve Beepy memory, add a small backlog issue, or prepare outreach scaffolding.
- If there is an open issue that is a small concrete todo, prefer clearing that issue over inventing unrelated work.
- Do not run long curation research here; collection curation and blog writing have separate scheduled workflows.
- Treat outreach as part of the museum product: plan campaigns, draft posts, improve shareability, and ask Tobowers through issues when human ownership or external setup is needed.
- Always keep promoted collection images local if touching exhibits.

Trace and verification:
- Append short progress notes to ${tracePath} as you work.
- Run bun run typecheck.
- Run bun run build.
- Run bun run smoke:browser for site-facing changes.
- If verification fails, fix your own change or leave a clear issue/comment explaining the blocker.
- Broken images should not stop all Beepy work. If smoke fails only because of an image that is unrelated to your focused change or already existed before the run, open or comment on a QA issue with the broken URL/page, record it in the trace, and continue with safe issue/backlog work. Do not hide the failure; report it clearly in the final response.

Finish:
- Final response should list the issue ledger, file changes, verification, and trace path.
- The workflow will open a PR with file changes. If you only changed issues/comments and no files, say so clearly.`;

  console.log(`beepy-manager: topic = "${topic}"`);
  console.log(`beepy-manager: coding model = ${MODEL.providerID}/${MODEL.modelID}`);
  console.log(`beepy-manager: trace = ${tracePath}`);

  try {
    const result = await opencodeText({
      title: `Beepy manager: ${topic}`,
      model: MODEL,
      agent: "beepy-manager",
      system: "You are Beepy operating the HCI Museum GitHub project. Manage issues and make one focused verified improvement.",
      prompt,
    });
    console.log(result);
    await closeOpencode();
  } catch (error) {
    fs.appendFileSync(tracePath, `\n## Fatal Error\n\n\`\`\`json\n${JSON.stringify(errorData(error), null, 2)}\n\`\`\`\n`);
    console.error(`beepy-manager: failed; trace so far: ${tracePath}`);
    console.error(error);
    await closeOpencode();
    process.exit(1);
  }
}

main();
