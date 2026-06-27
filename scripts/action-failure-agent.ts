#!/usr/bin/env bun
import fs from "node:fs";
import path from "node:path";
import { closeOpencode, opencodeText, resolveModelRef } from "./opencode-runner";
import { errorData } from "./run-trace";

const RUN_DIR = "potential/runs";
const BEEPY_CHARTER = "docs/beepy.md";
const BEEPY_MEMORY = "docs/beepy-memory.md";
const KIMI_MODEL = process.env.KIMI_MODEL ?? "k2p7";
const KIMI_PROVIDER = process.env.KIMI_PROVIDER ?? "kimi-for-coding";
const MODEL = resolveModelRef(KIMI_MODEL, KIMI_PROVIDER);

function die(message: string): never {
  console.error(`action-failure-agent: ${message}`);
  process.exit(1);
}

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) die(`${name} missing`);
  return value;
}

function readIfExists(file: string): string {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf-8") : "";
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);
}

async function main() {
  requireEnv("KIMI_API_KEY");
  requireEnv("GH_TOKEN");

  const runId = requireEnv("FAILED_RUN_ID");
  const runUrl = requireEnv("FAILED_RUN_URL");
  const workflowName = requireEnv("FAILED_WORKFLOW_NAME");
  const displayTitle = requireEnv("FAILED_DISPLAY_TITLE");
  const eventName = requireEnv("FAILED_EVENT");
  const headBranch = requireEnv("FAILED_HEAD_BRANCH");
  const headSha = requireEnv("FAILED_HEAD_SHA");
  const repository = requireEnv("GITHUB_REPOSITORY");

  fs.mkdirSync(RUN_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const tracePath = path.join(RUN_DIR, `${stamp}-action-failure-${runId}-${slugify(workflowName)}.action-failure.md`);
  fs.writeFileSync(
    tracePath,
    `# Beepy Action Failure Trace\n\nRun: ${runUrl}\nWorkflow: ${workflowName}\nTitle: ${displayTitle}\nEvent: ${eventName}\nHead: ${headBranch} @ ${headSha}\n\n`,
  );

  const prompt = `You are Beepy, triaging a failed GitHub Actions run for the HCI Museum.

${readIfExists(BEEPY_CHARTER)}

Durable memory:
${readIfExists(BEEPY_MEMORY)}

Failed run:
- Run ID: ${runId}
- URL: ${runUrl}
- Workflow: ${workflowName}
- Display title: ${displayTitle}
- Event: ${eventName}
- Repository: ${repository}
- Head branch: ${headBranch}
- Head SHA: ${headSha}

Operating context:
- The workflow checked out the failed run's head branch when possible.
- This is a fresh opencode session.
- Append concise notes to ${tracePath} as you work.
- Do not expose secrets. Redact tokens if logs contain any.

Required triage steps:
- Inspect failed-run metadata: gh run view ${runId} --json databaseId,displayTitle,event,headBranch,headSha,name,status,conclusion,url,workflowName,jobs
- Inspect logs: gh run view ${runId} --log
- Identify the concrete failing job and step, not just the workflow name.
- Determine whether the failure is reproducible locally in this checkout.

Fix policy:
- If the failure has a clear, safe repo fix, make the smallest correct change.
- Good automatic fixes include broken local asset references, invalid generated content, straightforward type/build errors, missing imports, malformed workflow YAML, or brittle test assumptions.
- Do not make speculative product/design/content changes just to silence a failure.
- Do not modify secrets, repository settings, branch protection, dependency lockfiles without clear need, or broad workflow permissions unless the failure directly requires it and the change is minimal.
- If the failure involves external services, missing secrets, flaky infrastructure, ambiguous generated content, or human judgment, do not fake a fix. Open or update a GitHub issue labeled beepy, qa, actions with the run URL, root-cause hypothesis, and next step.

Verification:
- Run the narrow failing command if identifiable.
- Also run bun run typecheck and bun run build for code/content changes.
- Run bunx playwright install --with-deps chromium and bun run smoke:browser for browser/image/site failures.

GitHub communication:
- If you open/update an issue, use real Markdown from a body file and avoid duplicate issues by searching open issues first for the run ID, failing workflow, or root cause.
- The enclosing workflow will open a PR for file changes. Do not commit or push yourself unless explicitly necessary.

Finish:
- Final response should state one of: fixed with file changes, issue opened/updated, no safe action, or failed.
- Include root cause, verification results, issue/PR-relevant notes, and trace path.`;

  console.log(`action-failure-agent: run ${runId} ${runUrl}`);
  console.log(`action-failure-agent: coding model = ${MODEL.providerID}/${MODEL.modelID}`);
  console.log(`action-failure-agent: trace = ${tracePath}`);

  try {
    const result = await opencodeText({
      title: `Beepy action failure: ${workflowName} #${runId}`,
      model: MODEL,
      agent: "beepy-action-triager",
      system: "You are Beepy triaging a failed GitHub Actions run. Fix clear repo-caused failures or open/update a QA issue.",
      prompt,
    });
    console.log(result);
    await closeOpencode();
  } catch (error) {
    fs.appendFileSync(tracePath, `\n## Fatal Error\n\n\`\`\`json\n${JSON.stringify(errorData(error), null, 2)}\n\`\`\`\n`);
    console.error(`action-failure-agent: failed; trace so far: ${tracePath}`);
    console.error(error);
    await closeOpencode();
    process.exit(1);
  }
}

main();
