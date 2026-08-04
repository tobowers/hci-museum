#!/usr/bin/env bun
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { closeOpencode, opencodeText, resolveModelRef } from "./opencode-runner";
import { errorData } from "./run-trace";

const RUN_DIR = "potential/runs";
const BEEPY_CHARTER = "docs/beepy.md";
const BEEPY_MEMORY = "docs/beepy-memory.md";
const KIMI_MODEL = process.env.KIMI_MODEL ?? "k2p7";
const KIMI_PROVIDER = process.env.KIMI_PROVIDER ?? "kimi-for-coding";
const MODEL = resolveModelRef(KIMI_MODEL, KIMI_PROVIDER);

function die(message: string): never {
  console.error(`pr-review-agent: ${message}`);
  process.exit(1);
}

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) die(`${name} missing`);
  return value;
}

function requirePrTitle(): string {
  const encoded = process.env.PR_TITLE_B64?.trim();
  if (!encoded) return requireEnv("PR_TITLE");
  const title = Buffer.from(encoded, "base64").toString("utf-8");
  if (!title) die("PR_TITLE_B64 decoded to an empty title");
  return title;
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

function git(args: string[]): string {
  return execFileSync("git", args, { encoding: "utf-8", maxBuffer: 12 * 1024 * 1024 }).trim();
}

function isImageLike(file: string): boolean {
  return /(^|\/)(assets\/wiki|assets\/social)\//.test(file) || /\.(avif|gif|ico|jpe?g|png|svg|webp)$/i.test(file);
}

function bulletList(items: string[], limit = 80): string {
  const shown = items.slice(0, limit).map((item) => `- ${item}`);
  if (items.length > limit) shown.push(`- ... ${items.length - limit} more`);
  return shown.length ? shown.join("\n") : "- none";
}

async function main() {
  requireEnv("KIMI_API_KEY");
  requireEnv("GH_TOKEN");

  const prNumber = requireEnv("PR_NUMBER");
  const prTitle = requirePrTitle();
  const prUrl = requireEnv("PR_URL");
  const prAuthor = requireEnv("PR_AUTHOR");
  const baseRef = requireEnv("PR_BASE_REF");
  const headRef = requireEnv("PR_HEAD_REF");
  const headSha = requireEnv("PR_HEAD_SHA");
  const headRepo = requireEnv("PR_HEAD_REPO");
  const repository = requireEnv("GITHUB_REPOSITORY");

  const diffBase = `origin/${baseRef}...HEAD`;
  const changedFiles = git(["diff", "--name-only", diffBase]).split("\n").filter(Boolean);
  const imageFiles = changedFiles.filter(isImageLike);
  const textFiles = changedFiles.filter((file) => !isImageLike(file));
  const diffStat = git(["diff", "--stat", diffBase]);
  const reviewScale = headRef.startsWith("curator-scout/") || changedFiles.length > 10 ? "large-curator" : "standard";

  fs.mkdirSync(RUN_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const tracePath = path.join(RUN_DIR, `${stamp}-pr-${prNumber}-${slugify(prTitle) || "review"}.pr-review.md`);
  fs.writeFileSync(tracePath, `# Beepy PR Review Trace\n\nPR: ${prUrl}\nTitle: ${prTitle}\nHead: ${headRepo}:${headRef} @ ${headSha}\nBase: ${baseRef}\n\n`);

  const prompt = `You are Beepy, reviewing a pull request for the HCI Museum from fresh context.

${readIfExists(BEEPY_CHARTER)}

Durable memory:
${readIfExists(BEEPY_MEMORY)}

Pull request:
- Number: ${prNumber}
- Title: ${prTitle}
- URL: ${prUrl}
- Author: ${prAuthor}
- Repository: ${repository}
- Head: ${headRepo}:${headRef} at ${headSha}
- Base: ${baseRef}

Diff summary:
- Review scale: ${reviewScale}
- Changed files: ${changedFiles.length}
- Text/source files: ${textFiles.length}
- Image/binary-like files: ${imageFiles.length}

Diff stat:
${diffStat || "(no diff stat)"}

Text/source changed files:
${bulletList(textFiles)}

Image/binary-like changed files:
${bulletList(imageFiles)}

Operating context:
- The workflow has checked out the PR head branch.
- This is a fresh opencode session. Do not rely on any prior review conversation.
- The workflow only runs for same-repository, non-draft PRs. Still be careful with secrets and shell output.
- Append concise notes to ${tracePath} as you work.

Review objective:
- Review the PR objectively as if you were a strict senior maintainer.
- Prefer merging useful, correct automated Beepy work quickly.
- Do not rubber-stamp. Find correctness, build, content, data, asset, workflow, and security risks.

Required review steps:
- Inspect PR metadata with gh, for example: gh pr view ${prNumber} --json number,title,author,baseRefName,headRefName,mergeable,mergeStateStatus,files,url
- Inspect the diff against origin/${baseRef}; use git diff and gh pr diff as useful.
- For large curator/content PRs, keep review bounded: inspect file lists, stats, changed text/data/source files, and source metadata. Do not attempt exhaustive prose review of every generated paragraph when deterministic checks pass and the change pattern is consistent.
- Do not open, read, OCR, describe, or visually analyze image/binary assets during PR review. Treat images as files to validate by path, type, presence, build output, and browser smoke tests. Review captions/source metadata in text files instead.
- Prefer commands like git diff --name-status ${diffBase}, git diff --stat ${diffBase}, and targeted text diffs. Avoid dumping huge binary/image diffs or full generated pages into context.
- Run bun run typecheck.
- Run bun run build.
- Run bun run smoke:browser when the PR changes site-facing UI, routing, data, images, docs rendered on the site, or build output. Install Chromium first with bunx playwright install --with-deps chromium if needed.

Decision rules:
- If the PR is clean, verified, and low risk, merge it with: gh pr merge ${prNumber} --merge --subject "Merge pull request #${prNumber} from ${headRef}" --body ""
- If there are clear fixable problems, make the smallest correct fixes, verify again, commit, and push to the PR branch with: git push origin HEAD:${headRef}
- After pushing fixes, re-review the resulting diff. If it is now clean, verified, and low risk, merge it in the same run. If the fix is substantial or uncertainty remains, leave the PR open and comment with exactly what changed and what remains.
- If the PR has merge conflicts, try to resolve them only when straightforward and low risk. Otherwise comment and leave it open.
- Never merge if verification fails, the PR is still dirty/conflicting, the change is unclear, required assets are missing, generated content looks hallucinated or unsourced, or human taste/policy judgment is needed.
- Never merge PRs that modify GitHub Actions, opencode configuration, this PR-review agent, secrets handling, or merge permissions unless the change is trivial and clearly safe. Prefer leaving those for human review.
- Do not request human review solely because a curator-scout PR is large or image-heavy. If deterministic checks pass and the text/source review finds no concrete risk, merge it. Ask for human review only for a specific unresolved risk.

GitHub communication:
- If you fix, block, or decline to merge, comment on the PR using a real Markdown body file.
- If you merge, a separate comment is optional, but your final response should state the merge result.

Finish:
- Final response should state one of: merged, fixed and left open, left open, or failed.
- Include verification run results, pushed commits if any, comments made, and trace path.`;

  console.log(`pr-review-agent: PR #${prNumber} ${prUrl}`);
  console.log(`pr-review-agent: coding model = ${MODEL.providerID}/${MODEL.modelID}`);
  console.log(`pr-review-agent: trace = ${tracePath}`);

  try {
    const result = await opencodeText({
      title: `Beepy PR review: #${prNumber} ${prTitle}`,
      model: MODEL,
      agent: "beepy-pr-reviewer",
      system: "You are Beepy performing an objective PR review for the HCI Museum. Fix clear issues or merge only verified low-risk PRs.",
      prompt,
    });
    console.log(result);
    await closeOpencode();
  } catch (error) {
    fs.appendFileSync(tracePath, `\n## Fatal Error\n\n\`\`\`json\n${JSON.stringify(errorData(error), null, 2)}\n\`\`\`\n`);
    console.error(`pr-review-agent: failed; trace so far: ${tracePath}`);
    console.error(error);
    await closeOpencode();
    process.exit(1);
  }
}

main();
