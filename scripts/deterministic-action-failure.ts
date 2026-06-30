#!/usr/bin/env bun
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const runId = requireEnv("FAILED_RUN_ID");
const runUrl = requireEnv("FAILED_RUN_URL");
const workflowName = requireEnv("FAILED_WORKFLOW_NAME");
const displayTitle = requireEnv("FAILED_DISPLAY_TITLE");
const failedEvent = requireEnv("FAILED_EVENT");
const headBranch = requireEnv("FAILED_HEAD_BRANCH");
const headSha = requireEnv("FAILED_HEAD_SHA");
const repository = requireEnv("GITHUB_REPOSITORY");
const recoveryRunUrl = process.env.GITHUB_RUN_ID
  ? `${process.env.GITHUB_SERVER_URL ?? "https://github.com"}/${repository}/actions/runs/${process.env.GITHUB_RUN_ID}`
  : runUrl;

type RunMeta = {
  attempt: number;
  conclusion: string;
  displayTitle: string;
  event: string;
  headBranch: string;
  headSha: string;
  jobs: Array<{
    name: string;
    conclusion: string;
    steps: Array<{ name: string; conclusion: string; number: number }>;
    url: string;
  }>;
  name: string;
  url: string;
};

type CommandResult = {
  ok: boolean;
  output: string;
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} missing`);
  return value;
}

function sh(command: string, args: string[], options: { allowFailure?: boolean; maxBuffer?: number } = {}): string {
  try {
    return execFileSync(command, args, { encoding: "utf-8", maxBuffer: options.maxBuffer ?? 30 * 1024 * 1024 }).trim();
  } catch (error) {
    if (options.allowFailure) return `${String((error as { stdout?: Buffer }).stdout ?? "")}${String((error as { stderr?: Buffer }).stderr ?? "")}`;
    throw error;
  }
}

function run(command: string, args: string[]): CommandResult {
  const result = spawnSync(command, args, { encoding: "utf-8", maxBuffer: 30 * 1024 * 1024 });
  return { ok: result.status === 0, output: `${result.stdout ?? ""}${result.stderr ?? ""}`.trim() };
}

function issueBodyFile(body: string): string {
  const file = path.join(process.env.RUNNER_TEMP ?? "/tmp", `beepy-recovery-${runId}-${Date.now()}.md`);
  fs.writeFileSync(file, body);
  return file;
}

function ensureLabels() {
  sh("gh", ["label", "create", "beepy", "--color", "53ff87", "--description", "Beepy-managed work"], { allowFailure: true });
  sh("gh", ["label", "create", "qa", "--color", "d29922", "--description", "Quality assurance"], { allowFailure: true });
  sh("gh", ["label", "create", "actions", "--color", "8957e5", "--description", "GitHub Actions and automation"], { allowFailure: true });
  sh("gh", ["label", "create", "needs-human", "--color", "ffcc00", "--description", "Requires Tobowers or external human action"], { allowFailure: true });
}

function upsertIssue(title: string, body: string, labels = ["beepy", "qa", "actions"]): string {
  ensureLabels();
  const existing = sh("gh", ["issue", "list", "--state", "open", "--search", `${JSON.stringify(title)} in:title`, "--json", "number", "--jq", ".[0].number // empty"], {
    allowFailure: true,
  }).trim();
  const file = issueBodyFile(body);
  if (existing) {
    sh("gh", ["issue", "comment", existing, "--body-file", file]);
    return existing;
  }
  const created = sh("gh", ["issue", "create", "--title", title, "--body-file", file, ...labels.flatMap((label) => ["--label", label])], { allowFailure: true });
  return created.trim();
}

function closeIssueIfOpen(title: string, comment: string) {
  const existing = sh("gh", ["issue", "list", "--state", "open", "--search", `${JSON.stringify(title)} in:title`, "--json", "number", "--jq", ".[0].number // empty"], {
    allowFailure: true,
  }).trim();
  if (!existing) return;
  sh("gh", ["issue", "close", existing, "--comment", comment], { allowFailure: true });
}

function getRunMeta(): RunMeta {
  return JSON.parse(sh("gh", ["run", "view", runId, "--json", "attempt,conclusion,displayTitle,event,headBranch,headSha,jobs,name,url"], { maxBuffer: 30 * 1024 * 1024 }));
}

function getRunLog(): string {
  return sh("gh", ["run", "view", runId, "--log"], { allowFailure: true, maxBuffer: 80 * 1024 * 1024 });
}

function failedSteps(meta: RunMeta): string {
  const lines: string[] = [];
  for (const job of meta.jobs) {
    for (const step of job.steps ?? []) {
      if (step.conclusion === "failure") lines.push(`- ${job.name} / ${step.name} (${job.url})`);
    }
  }
  return lines.length ? lines.join("\n") : "- unknown failed step";
}

function isTransient(log: string): boolean {
  return /ECONNRESET|ETIMEDOUT|ENOTFOUND|EAI_AGAIN|TLS connection|network timeout|rate limit|secondary rate limit|502 Bad Gateway|503 Service Unavailable|504 Gateway Timeout|runner.*lost|The operation was canceled|Failed to download|Failed to resolve|could not resolve host/i.test(log);
}

function isModelProviderFailure(log: string): boolean {
  return /MessageAbortedError|opencode model error|SCOUT_AGENT_TIMEOUT_MS|timeout: aborting opencode session|provider.*error|model.*timeout|rate limit/i.test(log);
}

function tryRerunOnce(meta: RunMeta, reason: string): boolean {
  if (meta.attempt > 1) return false;
  const rerun = run("gh", ["run", "rerun", runId, "--failed"]);
  if (!rerun.ok) return false;
  console.log(`Retried failed jobs for ${runId}: ${reason}`);
  return true;
}

function generatedPrForCommit(): { number: string; author: string; headRefName: string; title: string; url: string } | null {
  const prs = sh("gh", ["pr", "list", "--state", "all", "--search", headSha, "--json", "number,author,headRefName,title,url", "--jq", ".[0] // empty"], {
    allowFailure: true,
  }).trim();
  if (!prs) return null;
  return JSON.parse(prs);
}

function createRevertPr(log: string, meta: RunMeta): boolean {
  if (workflowName !== "Deploy GitHub Pages" || failedEvent !== "push") return false;

  const prMatch = displayTitle.match(/Merge pull request #(\d+)/);
  const pr = prMatch ? JSON.parse(sh("gh", ["pr", "view", prMatch[1]!, "--json", "number,author,headRefName,title,url"])) : generatedPrForCommit();
  if (!pr) return false;

  const generated = pr.author?.login === "app/github-actions" || /^(curator-scout|beepy-blog|beepy-manager|beepy-action-failure)\//.test(pr.headRefName ?? "");
  if (!generated) return false;

  const branch = `beepy-recovery/revert-${runId}`;
  sh("git", ["fetch", "origin", "main"]);
  sh("git", ["checkout", "-B", branch, "origin/main"]);
  const parents = sh("git", ["show", "-s", "--format=%P", headSha], { allowFailure: true }).split(/\s+/).filter(Boolean);
  const revert = parents.length > 1 ? run("git", ["revert", "-m", "1", "--no-edit", headSha]) : run("git", ["revert", "--no-edit", headSha]);
  if (!revert.ok) {
    upsertIssue(
      `Deploy failure could not be auto-reverted for run ${runId}`,
      `Beepy recovery identified a failed deploy after generated PR #${pr.number}, but \`git revert\` did not apply cleanly.

Failed run: ${runUrl}
Recovery run: ${recoveryRunUrl}
Generated PR: ${pr.url}

Failed steps:
${failedSteps(meta)}

Revert output:

\`\`\`text
${revert.output || "(no output)"}
\`\`\`

Log tail:

\`\`\`text
${log.split("\n").slice(-80).join("\n")}
\`\`\``,
      ["beepy", "qa", "actions", "needs-human"],
    );
    return true;
  }

  const checks = [run("bun", ["run", "typecheck"]), run("bun", ["run", "build"]), run("bunx", ["playwright", "install", "--with-deps", "chromium"]), run("bun", ["run", "smoke:browser"])] ;
  const failed = checks.find((check) => !check.ok);
  if (failed) {
    upsertIssue(
      `Deploy failure revert did not verify for run ${runId}`,
      `Beepy recovery created a local revert for generated PR #${pr.number}, but verification still failed, so it did not push the revert PR.

Failed run: ${runUrl}
Recovery run: ${recoveryRunUrl}
Generated PR: ${pr.url}

Verification output:

\`\`\`text
${failed.output || "(no output)"}
\`\`\``,
      ["beepy", "qa", "actions", "needs-human"],
    );
    return true;
  }

  sh("git", ["push", "--force-with-lease", "origin", `${branch}:${branch}`]);
  const body = issueBodyFile(`Automated recovery for a failed deploy caused by generated PR #${pr.number}.

Failed run: ${runUrl}
Recovery run: ${recoveryRunUrl}
Generated PR: ${pr.url}

Recovery verification passed:
- \`bun run typecheck\`
- \`bun run build\`
- \`bunx playwright install --with-deps chromium\`
- \`bun run smoke:browser\`

This PR reverts the generated merge commit so main can deploy again.`);
  sh("gh", ["pr", "create", "--base", "main", "--head", branch, "--title", `Revert generated PR after failed deploy #${runId}`, "--body-file", body], { allowFailure: true });
  return true;
}

function closeBadGeneratedPr(meta: RunMeta, log: string): boolean {
  if (workflowName !== "Beepy PR Review") return false;
  const match = log.match(/PR_NUMBER:\s*(\d+)/) ?? log.match(/gh pr view "?(\d+)"?/);
  if (!match) return false;
  const prNumber = match[1]!;
  const prJson = sh("gh", ["pr", "view", prNumber, "--json", "number,state,author,headRefName,title,url"], { allowFailure: true }).trim();
  if (!prJson) return false;
  const pr = JSON.parse(prJson);
  if (pr.state !== "OPEN" || pr.author?.login !== "app/github-actions") return false;

  const body = issueBodyFile(`Beepy recovery closed this generated PR because the deterministic PR-review workflow failed while handling it.

Failed run: ${runUrl}
Recovery run: ${recoveryRunUrl}

Failed steps:
${failedSteps(meta)}

Log tail:

\`\`\`text
${log.split("\n").slice(-80).join("\n")}
\`\`\``);
  sh("gh", ["pr", "comment", prNumber, "--body-file", body], { allowFailure: true });
  sh("gh", ["pr", "close", prNumber], { allowFailure: true });
  return true;
}

function main() {
  fs.mkdirSync("potential/runs", { recursive: true });
  const meta = getRunMeta();
  const log = getRunLog();
  fs.writeFileSync(
    path.join("potential/runs", `${new Date().toISOString().replace(/[:.]/g, "-")}-recovery-${runId}.action-failure.md`),
    `# Deterministic Action Failure Recovery

Workflow: ${workflowName}
Run: ${runUrl}
Recovery run: ${recoveryRunUrl}
Attempt: ${meta.attempt}

Failed steps:
${failedSteps(meta)}
`,
  );

  if (isTransient(log) && tryRerunOnce(meta, "network/platform transient pattern in logs")) return;

  if (workflowName === "Beepy Manager" && ["issues", "issue_comment"].includes(failedEvent)) {
    console.log("Issue-triggered Beepy Manager failures are reported to their source issue by the manager workflow.");
    return;
  }

  if (createRevertPr(log, meta)) return;

  if (closeBadGeneratedPr(meta, log)) return;

  if (workflowName === "Beepy Manager" && isModelProviderFailure(log)) {
    upsertIssue(
      `Beepy Manager provider/model failure for run ${runId}`,
      `Beepy Manager failed in the model/provider layer. This is recorded but not handed to another model agent.

Failed run: ${runUrl}
Recovery run: ${recoveryRunUrl}
Event: ${failedEvent}

Failed steps:
${failedSteps(meta)}

Log tail:

\`\`\`text
${log.split("\n").slice(-80).join("\n")}
\`\`\``,
      ["beepy", "qa", "actions", "needs-human"],
    );
    return;
  }

  upsertIssue(
    `${workflowName} deterministic recovery needed for run ${runId}`,
    `Beepy recovery inspected this failed workflow but did not find a safe deterministic fix.

Workflow: ${workflowName}
Failed run: ${runUrl}
Recovery run: ${recoveryRunUrl}
Head: ${headBranch} @ ${headSha}

Failed steps:
${failedSteps(meta)}

Log tail:

\`\`\`text
${log.split("\n").slice(-100).join("\n")}
\`\`\``,
    ["beepy", "qa", "actions", "needs-human"],
  );
}

main();
