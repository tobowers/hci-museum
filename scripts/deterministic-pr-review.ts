#!/usr/bin/env bun
import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

type CommandResult = {
  ok: boolean;
  command: string;
  output: string;
};

const prNumber = requireEnv("PR_NUMBER");
const prTitle = requireEnv("PR_TITLE");
const prUrl = requireEnv("PR_URL");
const prAuthor = requireEnv("PR_AUTHOR");
const baseRef = requireEnv("PR_BASE_REF");
const headRef = requireEnv("PR_HEAD_REF");
const headRepo = requireEnv("PR_HEAD_REPO");
const repository = requireEnv("GITHUB_REPOSITORY");
const runUrl = process.env.GITHUB_RUN_ID
  ? `${process.env.GITHUB_SERVER_URL ?? "https://github.com"}/${repository}/actions/runs/${process.env.GITHUB_RUN_ID}`
  : prUrl;

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} missing`);
  return value;
}

function sh(command: string, args: string[], options: { allowFailure?: boolean; maxBuffer?: number } = {}): string {
  try {
    return execFileSync(command, args, { encoding: "utf-8", maxBuffer: options.maxBuffer ?? 20 * 1024 * 1024 }).trim();
  } catch (error) {
    if (options.allowFailure) return String((error as { stdout?: Buffer; stderr?: Buffer }).stdout ?? "") + String((error as { stderr?: Buffer }).stderr ?? "");
    throw error;
  }
}

function run(command: string, args: string[]): CommandResult {
  const result = spawnSync(command, args, { encoding: "utf-8", maxBuffer: 20 * 1024 * 1024 });
  return {
    ok: result.status === 0,
    command: [command, ...args].join(" "),
    output: `${result.stdout ?? ""}${result.stderr ?? ""}`.trim(),
  };
}

function writeTempMarkdown(body: string): string {
  const file = path.join(process.env.RUNNER_TEMP ?? "/tmp", `beepy-pr-${prNumber}-${Date.now()}.md`);
  fs.writeFileSync(file, body);
  return file;
}

function comment(body: string) {
  const file = writeTempMarkdown(body);
  sh("gh", ["pr", "comment", prNumber, "--body-file", file]);
}

function ensureLabel(name: string, color: string, description: string) {
  sh("gh", ["label", "create", name, "--color", color, "--description", description], { allowFailure: true });
}

function addLabel(name: string) {
  sh("gh", ["pr", "edit", prNumber, "--add-label", name], { allowFailure: true });
}

function createIssue(title: string, body: string) {
  ensureLabel("beepy", "53ff87", "Beepy-managed work");
  ensureLabel("qa", "d29922", "Quality assurance");
  ensureLabel("actions", "8957e5", "GitHub Actions and automation");
  ensureLabel("needs-human", "ffcc00", "Requires Tobowers or external human action");
  const file = writeTempMarkdown(body);
  sh("gh", ["issue", "create", "--title", title, "--body-file", file, "--label", "beepy", "--label", "qa", "--label", "actions", "--label", "needs-human"], {
    allowFailure: true,
  });
}

function closePr(body: string) {
  comment(body);
  sh("gh", ["pr", "close", prNumber]);
}

function isImageLike(file: string): boolean {
  return /(^|\/)(assets\/wiki|assets\/social)\//.test(file) || /\.(avif|gif|ico|jpe?g|png|svg|webp)$/i.test(file);
}

function isSafeGeneratedPath(file: string): boolean {
  if (file.startsWith("docs/blog/")) return true;
  if (file === "docs/hci-wiki.md") return true;
  if (file === "docs/curator-scout-checkpoint.md") return true;
  if (file === "docs/beepy-memory.md") return true;
  if (file.startsWith("assets/wiki/")) return true;
  if (file.startsWith("potential/")) return true;
  if (file === "src/data.ts") return true;
  return false;
}

function summarizeResult(result: CommandResult): string {
  if (result.ok) return `- \`${result.command}\`: passed`;
  const tail = result.output.split("\n").slice(-20).join("\n");
  return `- \`${result.command}\`: failed\n\n\`\`\`text\n${tail || "(no output)"}\n\`\`\``;
}

function hasRenderableChanges(files: string[]): boolean {
  return files.some(
    (file) =>
      file.startsWith("docs/") ||
      file.startsWith("assets/wiki/") ||
      file.startsWith("src/") ||
      file.startsWith("scripts/build") ||
      file === "package.json",
  );
}

function main() {
  console.log(`deterministic-pr-review: PR #${prNumber} ${prUrl}`);

  if (headRepo !== repository || prAuthor !== "app/github-actions") {
    console.log("Not a same-repository GitHub Actions PR; leaving for pull_request_target/model/manual review.");
    return;
  }

  const files = sh("git", ["diff", "--name-only", `origin/${baseRef}...HEAD`]).split("\n").filter(Boolean);
  const stat = sh("git", ["diff", "--stat", `origin/${baseRef}...HEAD`], { allowFailure: true });
  const unsafeFiles = files.filter((file) => !isSafeGeneratedPath(file));
  const imageFiles = files.filter(isImageLike);
  const textFiles = files.filter((file) => !isImageLike(file));

  console.log(`Changed files: ${files.length}; text=${textFiles.length}; images=${imageFiles.length}`);
  console.log(stat);

  const mergeStatus = sh("gh", ["pr", "view", prNumber, "--json", "mergeStateStatus", "--jq", ".mergeStateStatus"], { allowFailure: true });
  if (["DIRTY", "BLOCKED"].includes(mergeStatus)) {
    ensureLabel("needs-human", "ffcc00", "Requires Tobowers or external human action");
    addLabel("needs-human");
    comment(`Beepy could not merge this generated PR deterministically because GitHub reports merge state \`${mergeStatus}\`.

Run: ${runUrl}

This is not a model/provider failure; it needs a branch update or human conflict resolution.`);
    return;
  }

  if (unsafeFiles.length) {
    ensureLabel("needs-human", "ffcc00", "Requires Tobowers or external human action");
    addLabel("needs-human");
    comment(`Beepy left this generated PR open because it changes automation or unsupported paths that should not be auto-merged.

Run: ${runUrl}

Unsupported files:
${unsafeFiles.map((file) => `- \`${file}\``).join("\n")}`);
    return;
  }

  const checks: CommandResult[] = [run("bun", ["run", "typecheck"]), run("bun", ["run", "build"])];
  if (hasRenderableChanges(files)) {
    checks.push(run("bunx", ["playwright", "install", "--with-deps", "chromium"]));
    if (checks.at(-1)?.ok) checks.push(run("bun", ["run", "smoke:browser"]));
  }

  const failed = checks.filter((check) => !check.ok);
  if (failed.length) {
    closePr(`Beepy closed this generated PR because deterministic verification failed. This prevents the scheduled review loop from repeatedly timing out on an unmergeable automated branch.

PR: ${prTitle}
Run: ${runUrl}

Verification:
${checks.map(summarizeResult).join("\n")}`);
    return;
  }

  const merge = run("gh", ["pr", "merge", prNumber, "--merge", "--delete-branch", "--subject", `Merge pull request #${prNumber} from ${headRef}`, "--body", ""]);
  if (!merge.ok) {
    ensureLabel("needs-human", "ffcc00", "Requires Tobowers or external human action");
    addLabel("needs-human");
    comment(`Beepy verified this generated PR, but GitHub refused the deterministic merge command.

Run: ${runUrl}

Verification:
${checks.map(summarizeResult).join("\n")}

Merge output:

\`\`\`text
${merge.output || "(no output)"}
\`\`\``);
    return;
  }
  const deploy = run("gh", ["workflow", "run", "pages.yml", "--ref", "main"]);
  if (!deploy.ok) {
    createIssue(
      `Beepy could not dispatch deploy after PR #${prNumber}`,
      `Beepy merged generated PR #${prNumber}, but could not dispatch the Pages deploy workflow.

PR: ${prUrl}
Run: ${runUrl}

Merge succeeded. Dispatch output:

\`\`\`text
${deploy.output || "(no output)"}
\`\`\``
    );
  }
  console.log(`Merged PR #${prNumber}`);
}

main();
