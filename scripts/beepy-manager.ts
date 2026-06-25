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
  - gh issue list --limit 50 --json number,title,state,labels,body,url
  - gh issue view <number> --comments
  - gh issue create --title "..." --body "..." --label "beepy,backlog"
  - gh issue comment <number> --body "..."
  - gh pr list --limit 20 --json number,title,state,url
- Maintain a product backlog in issues.
- If labels are missing, create/use sensible labels if possible, but do not fail the run just because labels cannot be created.
- Ask Tobowers through issues for missing API keys, account setup, social credentials, policy/taste decisions, or anything requiring human ownership.

Daily work rules:
- Pick at most one focused improvement for this run.
- Good daily work: improve copy, fix QA, improve design details, add metadata/RSS/social discovery, improve Beepy memory, add a small backlog issue, or prepare outreach scaffolding.
- Do not run long curation research here; collection curation and blog writing have separate scheduled workflows.
- Do not post to social media unless credentials and posting norms already exist in repo secrets/issues. If not, create a needs-human issue asking Tobowers to set up the account/API access.
- Always keep promoted collection images local if touching exhibits.

Trace and verification:
- Append short progress notes to ${tracePath} as you work.
- Run bun run typecheck.
- Run bun run build.
- Run bun run smoke:browser for site-facing changes.
- If verification fails, fix your own change or leave a clear issue/comment explaining the blocker.

Finish:
- Final response should list issue actions, file changes, verification, and trace path.
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
