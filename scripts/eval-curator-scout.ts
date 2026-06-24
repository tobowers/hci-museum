#!/usr/bin/env bun
/**
 * Eval Curator Scout
 *
 * Evaluates the two sides of the pipeline independently:
 *   1. Research/download side: discovery, dedupe, sources, team detail, images.
 *   2. Beepy/curation side: final decision, placement, blog voice, grounding.
 *
 * Usage:
 *   source .env
 *   bun scripts/eval-curator-scout.ts
 *   bun scripts/eval-curator-scout.ts --no-llm
 *   bun scripts/eval-curator-scout.ts twiddler xerox-alto
 *
 * Output:
 *   potential/evals/{timestamp}.json
 *   potential/evals/{timestamp}.md
 */

import fs from "node:fs";
import path from "node:path";
import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { exhibits } from "../src/data";

const POTENTIAL_DIR = "potential";
const BLOG_DIR = "docs/blog";
const OUT_DIR = "potential/evals";
const BEEPY_CHARTER = "docs/beepy.md";

const EVAL_RESEARCH_MODEL = process.env.EVAL_RESEARCH_MODEL ?? "z-ai/glm-5.2";
const EVAL_CURATION_MODEL = process.env.EVAL_CURATION_MODEL ?? "deepseek-v4-pro";

type ScoutInfo = {
  slug: string;
  title: string;
  year?: string;
  subtitle?: string;
  why_scout_cares?: string;
  research?: {
    title?: string;
    year?: string;
    by?: string;
    tags?: string[];
    overview?: string;
    deepDive?: { heading?: string; text?: string }[];
    team?: { name?: string; note?: string }[];
    media?: { src?: string; alt?: string; caption?: string }[];
    sources?: { text?: string; url?: string }[];
    imageUrls?: string[];
  };
  savedImages?: string[];
};

type Curated = {
  score?: number;
  decision?: "blog" | "archive" | "reject";
  reasoning?: string;
};

type EvalSide = {
  deterministicScore: number;
  llmScore?: number;
  finalScore: number;
  checks: Record<string, boolean | number | string>;
  findings: string[];
};

type EvalResult = {
  slug: string;
  title: string;
  research: EvalSide;
  curation: EvalSide;
};

function readJson<T>(file: string): T | undefined {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8")) as T;
  } catch {
    return undefined;
  }
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function clamp(n: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, Math.round(n)));
}

function existingDuplicate(title: string, slug: string): string | undefined {
  const norm = normalize(title);
  for (const exhibit of exhibits) {
    const existingNorm = normalize(exhibit.title);
    if (exhibit.slug === slug || existingNorm === norm) return exhibit.title;
    if (existingNorm.includes(norm) || norm.includes(existingNorm)) return exhibit.title;
  }
}

function deterministicResearchEval(info: ScoutInfo): EvalSide {
  const r = info.research ?? {};
  const sourceCount = r.sources?.filter((s) => s.url).length ?? 0;
  const deepDiveCount = r.deepDive?.filter((d) => d.heading && d.text).length ?? 0;
  const teamCount = r.team?.filter((m) => m.name && m.note).length ?? 0;
  const savedImageCount = info.savedImages?.length ?? 0;
  const discoveredImageCount = r.imageUrls?.length ?? 0;
  const duplicate = existingDuplicate(info.title, info.slug);

  const checks = {
    hasOverview: Boolean(r.overview && r.overview.length > 300),
    deepDiveCount,
    teamCount,
    sourceCount,
    discoveredImageCount,
    savedImageCount,
    hasByline: Boolean(r.by),
    hasTags: Boolean(r.tags && r.tags.length >= 2),
    duplicate: duplicate ?? "",
  };

  const findings: string[] = [];
  if (!checks.hasOverview) findings.push("Research overview is missing or thin.");
  if (deepDiveCount < 5) findings.push("Needs at least five deep-dive facts.");
  if (teamCount < 2) findings.push("Team/pioneer coverage is thin.");
  if (sourceCount < 4) findings.push("Needs more source links.");
  if (savedImageCount < 2) findings.push("Needs at least two downloaded images.");
  if (duplicate) findings.push(`Likely duplicate of existing exhibit: ${duplicate}.`);

  let score = 0;
  score += checks.hasOverview ? 15 : 0;
  score += Math.min(deepDiveCount, 7) * 5;
  score += Math.min(teamCount, 4) * 6;
  score += Math.min(sourceCount, 8) * 4;
  score += Math.min(savedImageCount, 5) * 4;
  score += checks.hasByline ? 4 : 0;
  score += checks.hasTags ? 4 : 0;
  if (duplicate) score -= 35;

  const deterministicScore = clamp(score);
  return {
    deterministicScore,
    finalScore: deterministicScore,
    checks,
    findings,
  };
}

function parseFrontmatter(markdown: string): Record<string, string> {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const out: Record<string, string> = {};
  for (const line of match[1]!.split("\n")) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*"?(.+?)"?$/);
    if (m) out[m[1]!] = m[2]!.trim();
  }
  return out;
}

function deterministicCurationEval(info: ScoutInfo, curated?: Curated, blogMarkdown = ""): EvalSide {
  const fm = parseFrontmatter(blogMarkdown);
  const decision = curated?.decision ?? "reject";
  const hasBlog = decision === "blog" && blogMarkdown.length > 0;
  const wordCount = blogMarkdown.replace(/^---[\s\S]*?---/, "").split(/\s+/).filter(Boolean).length;
  const mentionsTitle = blogMarkdown.toLowerCase().includes(info.title.toLowerCase());
  const mentionsYear = info.year ? blogMarkdown.includes(info.year) : false;
  const stale2025 = blogMarkdown.includes("2025 dollars");
  const brokenRelativeExhibitLink = /\]\(\.\/exhibits\//.test(blogMarkdown) || /\]\(exhibits\//.test(blogMarkdown);

  const checks = {
    decision,
    curatorScore: curated?.score ?? 0,
    hasReasoning: Boolean(curated?.reasoning),
    hasBlog,
    frontmatterTitle: fm.title ?? "",
    frontmatterAuthor: fm.author ?? "",
    frontmatterSlug: fm.slug ?? "",
    wordCount,
    mentionsTitle,
    mentionsYear,
    stale2025,
    brokenRelativeExhibitLink,
  };

  const findings: string[] = [];
  if (!curated) findings.push("Missing curated.json.");
  if (!checks.hasReasoning) findings.push("Curation decision lacks reasoning.");
  if (decision === "blog" && !hasBlog) findings.push("Decision is blog but blog markdown is missing.");
  if (hasBlog && fm.author !== "Beepy") findings.push("Blog frontmatter author should be Beepy.");
  if (hasBlog && fm.slug !== info.slug) findings.push("Blog frontmatter slug does not match potential slug.");
  if (hasBlog && (wordCount < 350 || wordCount > 850)) findings.push("Blog post length is outside the target range.");
  if (hasBlog && !mentionsTitle) findings.push("Blog does not mention the object title.");
  if (hasBlog && info.year && !mentionsYear) findings.push("Blog does not mention the candidate year.");
  if (stale2025) findings.push("Blog contains stale '2025 dollars' phrasing.");
  if (brokenRelativeExhibitLink) findings.push("Blog contains likely broken exhibit-relative link.");

  let score = 0;
  score += curated ? 12 : 0;
  score += checks.hasReasoning ? 12 : 0;
  score += decision === "blog" ? 10 : decision === "archive" ? 6 : 2;
  score += hasBlog ? 18 : 0;
  score += fm.author === "Beepy" ? 10 : 0;
  score += fm.slug === info.slug ? 8 : 0;
  score += wordCount >= 350 && wordCount <= 850 ? 10 : 0;
  score += mentionsTitle ? 8 : 0;
  score += mentionsYear ? 6 : 0;
  score -= stale2025 ? 15 : 0;
  score -= brokenRelativeExhibitLink ? 15 : 0;

  const deterministicScore = clamp(score);
  return {
    deterministicScore,
    finalScore: deterministicScore,
    checks,
    findings,
  };
}

function openrouterProvider() {
  return createOpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY!,
    headers: {
      "HTTP-Referer": "https://hci-museum.local",
      "X-Title": "HCI Museum Scout Eval",
    },
  });
}

function deepseekProvider() {
  return createOpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_API_KEY!,
  });
}

async function judgeResearchWithBeepy(info: ScoutInfo, charter: string): Promise<{ score: number; findings: string[] }> {
  const { text } = await generateText({
    model: openrouterProvider().chat(EVAL_RESEARCH_MODEL),
    system: charter,
    prompt: `Evaluate the RESEARCH/DOWNLOAD side for this HCI Museum candidate. Do not judge prose polish; judge whether the research bundle gives Beepy enough factual material to curate from.

Rubric, 0-100:
- Era/HCI fit and non-duplication
- Source breadth and credibility
- Team/organization detail
- Concrete hardware/interaction specifics
- Image usefulness and downloaded image count
- Uncertainty handling

Return ONLY JSON: {"score": number, "findings": ["..."]}

Candidate bundle:
${JSON.stringify(info, null, 2).slice(0, 16000)}`,
    temperature: 0.2,
  });
  const obj = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] ?? "{}");
  return {
    score: Number(obj.score ?? 0),
    findings: Array.isArray(obj.findings) ? obj.findings.map(String) : [],
  };
}

async function judgeCurationWithResearcher(
  info: ScoutInfo,
  curated?: Curated,
  blogMarkdown = "",
): Promise<{ score: number; findings: string[] }> {
  const { text } = await generateText({
    model: deepseekProvider().chat(EVAL_CURATION_MODEL),
    system: "You are a strict evaluator of factual museum writing and editorial judgment.",
    prompt: `Evaluate the CURATION/WRITEUP side for this HCI Museum candidate.

Rubric, 0-100:
- Decision quality: blog/archive/reject matches the research quality
- Blog is grounded in provided research, not invented
- Beepy voice is specific, warm, not human-impersonating
- Markdown/frontmatter are valid
- Internal links are safe for a GitHub Pages project site
- No stale facts like wrong current-dollar year

Return ONLY JSON: {"score": number, "findings": ["..."]}

Research bundle:
${JSON.stringify(info, null, 2).slice(0, 10000)}

Curation decision:
${JSON.stringify(curated ?? {}, null, 2)}

Blog markdown:
${blogMarkdown.slice(0, 10000)}`,
    temperature: 0.2,
  });
  const obj = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] ?? "{}");
  return {
    score: Number(obj.score ?? 0),
    findings: Array.isArray(obj.findings) ? obj.findings.map(String) : [],
  };
}

function listPotentialSlugs(args: string[]): string[] {
  const explicit = args.filter((a) => !a.startsWith("--"));
  if (explicit.length) return explicit.map(slugify);
  if (!fs.existsSync(POTENTIAL_DIR)) return [];
  return fs
    .readdirSync(POTENTIAL_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "evals")
    .map((d) => d.name)
    .sort();
}

async function evalOne(slug: string, charter: string, useLlm: boolean): Promise<EvalResult | undefined> {
  const infoPath = path.join(POTENTIAL_DIR, slug, "info.json");
  const curatedPath = path.join(POTENTIAL_DIR, slug, "curated.json");
  const blogPath = path.join(BLOG_DIR, `${slug}.md`);
  const info = readJson<ScoutInfo>(infoPath);
  if (!info) return undefined;
  const curated = readJson<Curated>(curatedPath);
  const blogMarkdown = fs.existsSync(blogPath) ? fs.readFileSync(blogPath, "utf-8") : "";

  const research = deterministicResearchEval(info);
  const curation = deterministicCurationEval(info, curated, blogMarkdown);

  if (useLlm) {
    const [researchJudge, curationJudge] = await Promise.all([
      judgeResearchWithBeepy(info, charter).catch((e) => ({ score: 0, findings: [`LLM research eval failed: ${e}`] })),
      judgeCurationWithResearcher(info, curated, blogMarkdown).catch((e) => ({ score: 0, findings: [`LLM curation eval failed: ${e}`] })),
    ]);
    research.llmScore = clamp(researchJudge.score);
    research.finalScore = clamp(research.deterministicScore * 0.45 + research.llmScore * 0.55);
    research.findings.push(...researchJudge.findings);
    curation.llmScore = clamp(curationJudge.score);
    curation.finalScore = clamp(curation.deterministicScore * 0.45 + curation.llmScore * 0.55);
    curation.findings.push(...curationJudge.findings);
  }

  return {
    slug,
    title: info.title,
    research,
    curation,
  };
}

function writeReports(results: EvalResult[]) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const jsonPath = path.join(OUT_DIR, `${stamp}.json`);
  const mdPath = path.join(OUT_DIR, `${stamp}.md`);
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));

  const rows = results
    .map(
      (r) =>
        `| ${r.title} | ${r.research.finalScore} | ${r.curation.finalScore} | ${r.research.findings.length + r.curation.findings.length} |`,
    )
    .join("\n");

  const details = results
    .map((r) => {
      const findings = [...r.research.findings.map((f) => `Research: ${f}`), ...r.curation.findings.map((f) => `Curation: ${f}`)];
      return `## ${r.title}\n\n- Slug: \`${r.slug}\`\n- Research score: ${r.research.finalScore}\n- Curation score: ${r.curation.finalScore}\n\n${findings.map((f) => `- ${f}`).join("\n") || "- No findings."}`;
    })
    .join("\n\n");

  fs.writeFileSync(
    mdPath,
    `# Curator Scout Eval\n\n| Candidate | Research | Curation | Findings |\n|---|---:|---:|---:|\n${rows}\n\n${details}\n`,
  );

  console.log(`eval: wrote ${jsonPath}`);
  console.log(`eval: wrote ${mdPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  const useLlm = !args.includes("--no-llm");
  if (useLlm && (!process.env.OPENROUTER_API_KEY || !process.env.DEEPSEEK_API_KEY)) {
    throw new Error("LLM eval requires OPENROUTER_API_KEY and DEEPSEEK_API_KEY. Use --no-llm for deterministic checks only.");
  }

  const slugs = listPotentialSlugs(args);
  if (!slugs.length) {
    console.log("eval: no potential candidates found");
    return;
  }

  const charter = fs.existsSync(BEEPY_CHARTER) ? fs.readFileSync(BEEPY_CHARTER, "utf-8") : "";
  const results: EvalResult[] = [];
  for (const slug of slugs) {
    console.log(`eval: ${slug}`);
    const result = await evalOne(slug, charter, useLlm);
    if (result) results.push(result);
  }
  writeReports(results);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
