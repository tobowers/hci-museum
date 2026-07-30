#!/usr/bin/env bun
/**
 * Curator Scout — multi-agent research pipeline
 *
 * Agents:
 *   1. Scout    (Grok via opencode + Octen + Wikipedia) — broad discovery of candidate objects.
 *   2. Dedupe   — filter out objects already in the museum.
 *   3. Research (DeepSeek V4 Flash by default) — deep-dive each candidate, find multiple images,
 *      build a rich info.json matching the museum's wiki format.
 *   4. Curator  (Beepy via OpenRouter GLM 5.2) — final curation, writeup,
 *      and placement as Field Notes blog posts.
 *
 * Usage:
 *   source .env
 *   bun scripts/curator-scout.ts "early 1990s wearable computers"
 *
 * Env overrides:
 *   GROK_MODEL=grok-4.3
 *   DEEPSEEK_MODEL=deepseek-v4-flash
 *   OPENROUTER_MODEL=z-ai/glm-5.2
 */

import fs from "node:fs";
import path from "node:path";
import { envInt, fetchWithTimeout, mapLimit, withTimeout } from "./concurrency";
import { searchOcten } from "./octen-client";
import { closeOpencode, opencodeText, resolveModelRef } from "./opencode-runner";
import { RunTrace, errorData } from "./run-trace";
import { exhibits } from "../src/data";

const POTENTIAL_DIR = "potential";
const BLOG_DIR = "docs/blog";
const TRACE_DIR = `${POTENTIAL_DIR}/runs`;
const BEEPY_CHARTER = "docs/beepy.md";
const WIKI_PATH = "docs/hci-wiki.md";

const WIKI_API = "https://en.wikipedia.org/w/api.php";

const GROK_MODEL = process.env.GROK_MODEL ?? "grok-4.3";
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL ?? "deepseek-v4-flash";
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL ?? "z-ai/glm-5.2";
const GROK_PROVIDER = process.env.GROK_PROVIDER ?? "xai";
const DEEPSEEK_PROVIDER = process.env.DEEPSEEK_PROVIDER ?? "deepseek";
const OPENROUTER_PROVIDER = process.env.OPENROUTER_PROVIDER ?? "openrouter";
const DISCOVERY_COUNT = Number(process.env.SCOUT_DISCOVERY_COUNT ?? 24);
const TARGET_COLLECTION_COUNT = Number(process.env.SCOUT_TARGET_COUNT ?? 4);
const CANDIDATE_LIMIT = Number(process.env.SCOUT_CANDIDATE_LIMIT ?? 4);
const RESEARCH_CONCURRENCY = envInt("SCOUT_RESEARCH_CONCURRENCY", 3);
const FETCH_TIMEOUT_MS = envInt("SCOUT_FETCH_TIMEOUT_MS", 20_000);
const CANDIDATE_TIMEOUT_MS = envInt("SCOUT_CANDIDATE_TIMEOUT_MS", 300_000);
const DRAFT_BLOGS = process.env.SCOUT_DRAFT_BLOGS === "true";
const GROK_MODEL_REF = resolveModelRef(GROK_MODEL, GROK_PROVIDER);
const DEEPSEEK_MODEL_REF = resolveModelRef(DEEPSEEK_MODEL, DEEPSEEK_PROVIDER);
const OPENROUTER_MODEL_REF = resolveModelRef(OPENROUTER_MODEL, OPENROUTER_PROVIDER);

type ExistingExhibit = {
  slug: string;
  title: string;
  wikiTitle: string;
};

type Candidate = {
  slug: string;
  title: string;
  year: string;
  subtitle: string;
  why_scout_cares: string;
  search_terms: string[];
};

type WebSource = {
  title: string;
  url: string;
  snippet?: string;
};

type ResearchResult = {
  title: string;
  year: string;
  by?: string;
  tags: string[];
  overview: string;
  deepDive: { heading: string; text: string }[];
  team: { name: string; note: string }[];
  media: { src: string; alt: string; caption: string }[];
  sources: { text: string; url: string }[];
  imageUrls: string[];
};

type CuratedItem = {
  candidate: Candidate;
  research: ResearchResult;
  score: number;
  decision: "blog" | "archive" | "reject";
  reasoning: string;
  blogMarkdown: string;
};

type ResearchedItem = { candidate: Candidate; research: ResearchResult; savedImages: string[] };

let runTrace: RunTrace | undefined;

function trace(phase: string, message: string, data?: unknown) {
  runTrace?.add(phase, message, data);
}

function die(msg: string): never {
  console.error(`scout: ${msg}`);
  runTrace?.printRecent();
  process.exit(1);
}

function loadEnv() {
  const required = ["OCTEN_API_KEY", "DEEPSEEK_API_KEY", "OPENROUTER_API_KEY"];
  for (const key of required) {
    if (!process.env[key]) die(`${key} missing. run: source .env`);
  }
  if (!process.env.GROK_API_KEY && !process.env.XAI_API_KEY) die("GROK_API_KEY or XAI_API_KEY missing. run: source .env");
}

async function loadBeepyCharter(): Promise<string> {
  return await Bun.file(BEEPY_CHARTER).text();
}

async function loadExistingExhibits(): Promise<ExistingExhibit[]> {
  const wiki = await Bun.file(WIKI_PATH).text();
  const titles = [...wiki.matchAll(/^##\s+(.+?)\s*(?:\(|$)/gm)].map((m) => m[1]!.trim());
  return exhibits.map((e, i) => ({
    slug: e.slug,
    title: e.title,
    wikiTitle: titles[i] ?? e.title,
  }));
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function today(): string {
  return new Date().toISOString().split("T")[0]!;
}

async function fetchJson(url: string, init?: RequestInit): Promise<unknown> {
  const res = await fetchWithTimeout(url, init, FETCH_TIMEOUT_MS);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

function extractJsonObject(text: string): Record<string, unknown> {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return {};
  try {
    return JSON.parse(match[0]) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function extractJsonArray(text: string): unknown[] {
  const match = text.match(/\[[\s\S]*\]/);
  if (!match) return [];
  try {
    return JSON.parse(match[0]) as unknown[];
  } catch {
    return [];
  }
}

async function octenSearch(query: string, num = 5): Promise<WebSource[]> {
  const data = await searchOcten({
    query,
    numResults: Math.min(num, 10),
    maxQueries: 3,
    timeoutMs: FETCH_TIMEOUT_MS,
  });
  return data.map((r) => ({
    title: r.title,
    url: r.url,
    snippet: (r.text ?? "").slice(0, 800),
  }));
}

async function wikiSearch(query: string): Promise<string | undefined> {
  const url = `${WIKI_API}?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=1&format=json&origin=*`;
  const data = (await fetchJson(url)) as { query?: { search?: { title: string }[] } };
  return data.query?.search?.[0]?.title;
}

async function wikiExtract(title: string): Promise<{ extract?: string; image?: string }> {
  const url = `${WIKI_API}?action=query&titles=${encodeURIComponent(title)}&prop=extracts|pageimages&exintro=1&explaintext=1&pithumbsize=800&format=json&origin=*`;
  const data = (await fetchJson(url)) as {
    query?: { pages?: Record<string, { extract?: string; thumbnail?: { source: string } }> };
  };
  const pages = data.query?.pages ?? {};
  for (const id of Object.keys(pages)) {
    const p = pages[id];
    return { extract: p?.extract, image: p?.thumbnail?.source };
  }
  return {};
}

function isImageUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(u.pathname);
  } catch {
    return false;
  }
}

function resolveUrl(base: string, src: string): string {
  try {
    return new URL(src, base).href;
  } catch {
    return src;
  }
}

async function extractPageImages(url: string): Promise<string[]> {
  try {
    const res = await fetchWithTimeout(url, undefined, FETCH_TIMEOUT_MS);
    if (!res.ok) return [];
    const html = await res.text();
    const images: string[] = [];

    const og = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    if (og) images.push(resolveUrl(url, og[1]!));

    const twitter = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
    if (twitter) images.push(resolveUrl(url, twitter[1]!));

    const imgMatches = html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi);
    for (const m of imgMatches) {
      const src = resolveUrl(url, m[1]!);
      if (isImageUrl(src)) images.push(src);
    }

    return [...new Set(images)].slice(0, 8);
  } catch {
    return [];
  }
}

async function downloadFile(url: string, dest: string): Promise<boolean> {
  try {
    const res = await fetchWithTimeout(url, undefined, FETCH_TIMEOUT_MS);
    if (!res.ok) return false;
    const buffer = await res.arrayBuffer();
    await Bun.write(dest, new Uint8Array(buffer));
    return true;
  } catch {
    return false;
  }
}

async function scoutAgent(topic: string, existing: ExistingExhibit[]): Promise<Candidate[]> {
  console.log(`scout agent: broad search for "${topic}"...`);
  trace("scout", "starting broad candidate search", { topic, discoveryCount: DISCOVERY_COUNT });
  const prompt = `You are a sharp-eyed museum scout hunting for obscure or semi-obscure human-computer interaction hardware from roughly 1976 to 1992.

Topic: "${topic}"

Already in the museum (do NOT suggest these):
${existing.map((e) => `- ${e.title}`).join("\n")}

Brainstorm ${DISCOVERY_COUNT} candidate objects. Beautiful failures, weird vaporware, and ambitious experiments are especially welcome, but commercial hits are also valid when they demonstrate a genuinely distinct human-computer interaction idea. Be specific with years and mechanics.

Return ONLY a JSON array. Each item must have:
- title: object name
- year: year or range
- subtitle: one-sentence hook
- why_scout_cares: why it might belong in the HCI Museum
- search_terms: 2-4 strings for Octen/Wikipedia lookup

Example:
[
  {
    "title": "Handykey Twiddler",
    "year": "1992",
    "subtitle": "A keyboard you hold like a grenade.",
    "why_scout_cares": "One-handed chorded typing for wearable computing; still in production decades later.",
    "search_terms": ["Handykey Twiddler", "Twiddler chord keyboard 1992"]
  }
]`;
  const raw = await opencodeText({
    title: `HCI scout: ${topic}`,
    model: GROK_MODEL_REF,
    agent: "hci-scout",
    system: "You are an HCI museum scout. Return only valid JSON when requested.",
    prompt,
  });
  const items = extractJsonArray(raw);
  const seen = new Set<string>();
  const candidates: Candidate[] = [];
  for (const item of items) {
    if (!item || typeof item !== "object") continue;
    const title = String((item as Record<string, unknown>).title ?? "").trim();
    if (!title || seen.has(title)) continue;
    seen.add(title);
    const terms = (item as Record<string, unknown>).search_terms;
    candidates.push({
      slug: slugify(title),
      title,
      year: String((item as Record<string, unknown>).year ?? "").trim(),
      subtitle: String((item as Record<string, unknown>).subtitle ?? "").trim(),
      why_scout_cares: String((item as Record<string, unknown>).why_scout_cares ?? "").trim(),
      search_terms: Array.isArray(terms) ? (terms as unknown[]).map((t) => String(t)) : [title],
    });
  }
  trace("scout", "broad candidate search complete", { count: candidates.length, candidates: candidates.map((c) => c.title) });
  return candidates;
}

function dedupeAgent(candidates: Candidate[], existing: ExistingExhibit[]): Candidate[] {
  const existingSlugs = new Set(existing.map((e) => e.slug));
  const existingNorms = new Set(existing.map((e) => normalize(e.title)));
  return candidates.filter((c) => {
    if (existingSlugs.has(c.slug)) return false;
    const norm = normalize(c.title);
    if (existingNorms.has(norm)) return false;
    for (const e of existing) {
      if (norm.includes(normalize(e.title)) || normalize(e.title).includes(norm)) return false;
    }
    return true;
  });
}

async function researchAgent(candidate: Candidate): Promise<ResearchResult> {
  console.log(`research agent: ${candidate.title}`);
  trace("research", "starting candidate research", { slug: candidate.slug, title: candidate.title, year: candidate.year });
  const query = candidate.search_terms[0] ?? candidate.title;

  const [octenSources, wikiTitle] = await Promise.all([
    octenSearch(`${query} ${candidate.year} HCI hardware`, 5).catch(() => [] as WebSource[]),
    wikiSearch(query).catch(() => undefined),
  ]);

  let wikiExtractText = "";
  let wikiImage = "";
  if (wikiTitle) {
    const wiki = (await wikiExtract(wikiTitle).catch(() => ({}))) as { extract?: string; image?: string };
    wikiExtractText = wiki.extract ?? "";
    wikiImage = wiki.image ?? "";
  }

  const pageImages = (
    await Promise.all(octenSources.slice(0, 4).map((s) => extractPageImages(s.url).catch(() => [])))
  ).flat();

  const allImageUrls = [...(wikiImage ? [wikiImage] : []), ...pageImages];

  const prompt = `You are a meticulous HCI research assistant. Write a deep, factual research summary for a museum catalog entry.

Candidate object: "${candidate.title}" (${candidate.year})
Scout's note: ${candidate.why_scout_cares}

Web sources found:
${octenSources.map((s) => `- ${s.title}: ${s.url}\n  ${s.snippet ?? ""}`).join("\n")}

Wikipedia page: ${wikiTitle ?? "none found"}
Wikipedia extract: ${wikiExtractText}

Image URLs discovered (verify and select the best 3-5):
${allImageUrls.join("\n")}

Produce a JSON object with these exact fields:
{
  "title": "${candidate.title}",
  "year": "${candidate.year}",
  "by": "primary company, lab, or inventor",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "overview": "2-3 paragraphs of markdown prose. Be specific and factual.",
  "deepDive": [
    {"heading": "Origins", "text": "..."},
    {"heading": "Hardware", "text": "..."},
    {"heading": "Interaction", "text": "..."},
    {"heading": "Commercial fate", "text": "..."},
    {"heading": "Impact", "text": "..."}
  ],
  "team": [
    {"name": "Person or org", "note": "their role"}
  ],
  "media": [
    {"src": "image-url", "alt": "alt text", "caption": "caption with source"}
  ],
  "sources": [
    {"text": "Source name", "url": "source-url"}
  ],
  "imageUrls": ["url1", "url2", "url3"]
}

Rules:
- Only include image URLs you believe are real and reachable.
- Use markdown in overview; keep headings plain text.
- If a fact is uncertain, say so.
- Do not invent people or dates.`;

  const raw = await opencodeText({
    title: `HCI research: ${candidate.title}`,
    model: DEEPSEEK_MODEL_REF,
    agent: "hci-researcher",
    system: "You are a meticulous HCI research assistant. Return only valid JSON when requested.",
    prompt,
  });
  const result = extractJsonObject(raw);

  const research = {
    title: String(result.title ?? candidate.title),
    year: String(result.year ?? candidate.year),
    by: result.by ? String(result.by) : undefined,
    tags: Array.isArray(result.tags) ? (result.tags as unknown[]).map((t) => String(t)) : ["HCI"],
    overview: String(result.overview ?? ""),
    deepDive: Array.isArray(result.deepDive)
      ? (result.deepDive as Record<string, string>[])
          .filter((d) => d.heading && d.text)
          .map((d) => ({ heading: String(d.heading), text: String(d.text) }))
      : [],
    team: Array.isArray(result.team)
      ? (result.team as Record<string, string>[])
          .filter((m) => m.name)
          .map((m) => ({ name: String(m.name), note: String(m.note ?? "") }))
      : [],
    media: Array.isArray(result.media)
      ? (result.media as Record<string, string>[])
          .filter((m) => m.src)
          .map((m) => ({ src: String(m.src), alt: String(m.alt ?? ""), caption: String(m.caption ?? "") }))
      : [],
    sources: Array.isArray(result.sources)
      ? (result.sources as Record<string, string>[])
          .filter((s) => s.url)
          .map((s) => ({ text: String(s.text ?? ""), url: String(s.url) }))
      : octenSources.map((s) => ({ text: s.title, url: s.url })),
    imageUrls: Array.isArray(result.imageUrls)
      ? (result.imageUrls as unknown[]).map((u) => String(u)).filter(isImageUrl)
      : allImageUrls,
  };
  trace("research", "candidate research model returned", {
    slug: candidate.slug,
    title: candidate.title,
    sources: research.sources.length,
    imageUrls: research.imageUrls.length,
    team: research.team.length,
    deepDive: research.deepDive.length,
  });
  return research;
}

async function downloadCandidateImages(slug: string, imageUrls: string[]): Promise<string[]> {
  const dir = path.join(POTENTIAL_DIR, slug, "images");
  fs.mkdirSync(dir, { recursive: true });
  const saved: string[] = [];
  for (let i = 0; i < imageUrls.length && saved.length < 6; i++) {
    const url = imageUrls[i]!;
    const ext = path.extname(new URL(url).pathname) || ".jpg";
    const dest = path.join(dir, `${saved.length + 1}${ext}`);
    const ok = await downloadFile(url, dest);
    if (ok) saved.push(dest);
  }
  return saved;
}

async function saveResearch(slug: string, candidate: Candidate, research: ResearchResult, savedImages: string[]) {
  const dir = path.join(POTENTIAL_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });
  const info = {
    ...candidate,
    research,
    savedImages,
  };
  await Bun.write(path.join(dir, "info.json"), JSON.stringify(info, null, 2));
  console.log(`  saved potential/${slug}/ (${savedImages.length} images)`);
  trace("research", "saved candidate bundle", { slug, title: candidate.title, savedImages });
}

async function curatorAgent(
  items: { candidate: Candidate; research: ResearchResult; savedImages: string[] }[],
  charter: string,
): Promise<CuratedItem[]> {
  console.log(`curator agent (Beepy / ${OPENROUTER_MODEL}): reviewing ${items.length} candidates...`);
  trace("curator", "starting curator review", {
    count: items.length,
    draftBlogs: DRAFT_BLOGS,
    candidates: items.map((item) => item.candidate.title),
  });

  const prompt = `You are Beepy, curator of the HCI Museum.

${charter}

Review these researched candidates. The museum is looking to add about ${TARGET_COLLECTION_COUNT} more objects, so be selective but not timid. Decide for each:
- decision: "blog" if it deserves a Field Notes blog post, "archive" if interesting but not worth a post right now, "reject" if it doesn't fit.
- score: 0-100 overall curatorial score.
- reasoning: one sentence of Beepy-style curatorial reasoning.
- blogMarkdown: ${DRAFT_BLOGS ? 'if decision is "blog", the full markdown post with frontmatter. Otherwise empty string.' : 'always an empty string. Do not draft blog prose in this run.'}

${DRAFT_BLOGS ? `
The blog post must start with this exact frontmatter:
---
title: "Object Title"
date: "${today()}"
description: "subtitle"
author: "Beepy"
slug: "object-slug"
---

Use internal links like [Object](../exhibits/object-slug/) if you mention other exhibits.
Tone: specific, warm, honest that you are an AI curator, no gushing, 400-700 words.` : "Keep this fast: return compact JSON decisions only."}

Candidates:
${JSON.stringify(
    items.map((it) => ({
      slug: it.candidate.slug,
      title: it.candidate.title,
      year: it.candidate.year,
      subtitle: it.candidate.subtitle,
      overview: it.research.overview.slice(0, 400),
      tags: it.research.tags,
      team_count: it.research.team.length,
      image_count: it.savedImages.length,
    })),
    null,
    2,
  )}

Return ONLY a JSON array:
[
  {
    "slug": "object-slug",
    "score": 78,
    "decision": "blog",
    "reasoning": "...",
    "blogMarkdown": "---\\ntitle: \\"...\\"\\n---\\n..."
  }
]`;

  const raw = await opencodeText({
    title: "HCI curator review",
    model: OPENROUTER_MODEL_REF,
    agent: "hci-curator",
    system: "You are Beepy, curator of the HCI Museum. Return only valid JSON when requested.",
    prompt,
  });
  const decisions = extractJsonArray(raw);
  trace("curator", "curator review returned", { decisions: decisions.length });

  const curated: CuratedItem[] = [];
  for (const d of decisions) {
    if (!d || typeof d !== "object") continue;
    const slug = String((d as Record<string, unknown>).slug ?? "");
    const item = items.find((it) => it.candidate.slug === slug);
    if (!item) continue;
    curated.push({
      candidate: item.candidate,
      research: item.research,
      score: Number((d as Record<string, unknown>).score ?? 0),
      decision: String((d as Record<string, unknown>).decision ?? "archive") as CuratedItem["decision"],
      reasoning: String((d as Record<string, unknown>).reasoning ?? ""),
      blogMarkdown: String((d as Record<string, unknown>).blogMarkdown ?? ""),
    });
  }

  const sorted = curated.sort((a, b) => b.score - a.score);
  trace("curator", "parsed curator decisions", {
    decisions: sorted.map((item) => ({ slug: item.candidate.slug, decision: item.decision, score: item.score })),
  });
  return sorted;
}

function fallbackCuratedItems(items: ResearchedItem[], error: unknown): CuratedItem[] {
  trace("curator", "curator review failed; using archive fallback", { error: errorData(error) });
  console.warn(`curator agent failed; saving researched candidates as archive/pending review: ${error}`);
  return items.map((item) => ({
    candidate: item.candidate,
    research: item.research,
    score: 50,
    decision: "archive",
    reasoning: `Curator review failed or timed out; saved research bundle for manual Beepy review. Error: ${error instanceof Error ? error.message : String(error)}`,
    blogMarkdown: "",
  }));
}

async function main() {
  const topic = process.argv[2]?.trim() ?? "obscure HCI hardware 1976-1992";
  loadEnv();
  const charter = await loadBeepyCharter();
  const existing = await loadExistingExhibits();

  fs.mkdirSync(POTENTIAL_DIR, { recursive: true });
  fs.mkdirSync(BLOG_DIR, { recursive: true });
  runTrace = new RunTrace(TRACE_DIR, topic);

  console.log(`scout: topic = "${topic}"`);
  console.log(
    `scout: models = grok:${GROK_MODEL_REF.providerID}/${GROK_MODEL_REF.modelID}, deepseek:${DEEPSEEK_MODEL_REF.providerID}/${DEEPSEEK_MODEL_REF.modelID}, openrouter:${OPENROUTER_MODEL_REF.providerID}/${OPENROUTER_MODEL_REF.modelID}`,
  );
  console.log(`scout: trace = ${runTrace.jsonPath}`);
  trace("run", "starting scout run", {
    topic,
    discoveryCount: DISCOVERY_COUNT,
    candidateLimit: CANDIDATE_LIMIT,
    researchConcurrency: RESEARCH_CONCURRENCY,
    fetchTimeoutMs: FETCH_TIMEOUT_MS,
    candidateTimeoutMs: CANDIDATE_TIMEOUT_MS,
    draftBlogs: DRAFT_BLOGS,
    models: {
      grok: GROK_MODEL_REF,
      deepseek: DEEPSEEK_MODEL_REF,
      openrouter: OPENROUTER_MODEL_REF,
    },
  });

  const rawCandidates = await scoutAgent(topic, existing);
  console.log(`scout: ${rawCandidates.length} raw candidates`);
  trace("scout", "raw candidates", { count: rawCandidates.length, candidates: rawCandidates });

  const novel = dedupeAgent(rawCandidates, existing);
  const selected = novel.slice(0, Math.max(1, CANDIDATE_LIMIT));
  console.log(`scout: ${novel.length} after de-dupe; researching ${selected.length}`);
  trace("dedupe", "selected candidates for research", {
    novelCount: novel.length,
    selectedCount: selected.length,
    selected: selected.map((candidate) => ({ slug: candidate.slug, title: candidate.title, year: candidate.year })),
  });

  console.log(`scout: researching ${selected.length} candidates with concurrency=${RESEARCH_CONCURRENCY}`);
  const maybeResearched = await mapLimit(selected, RESEARCH_CONCURRENCY, async (candidate, i): Promise<ResearchedItem | undefined> => {
    console.log(`[${i + 1}/${selected.length}] start ${candidate.title}`);
    trace("research", "candidate job started", { index: i + 1, total: selected.length, slug: candidate.slug, title: candidate.title });
    try {
      return await withTimeout(`candidate ${candidate.title}`, CANDIDATE_TIMEOUT_MS, async () => {
        const research = await researchAgent(candidate);
        const savedImages = await downloadCandidateImages(candidate.slug, research.imageUrls);
        await saveResearch(candidate.slug, candidate, research, savedImages);
        console.log(`[${i + 1}/${selected.length}] done ${candidate.title}`);
        trace("research", "candidate job completed", {
          index: i + 1,
          total: selected.length,
          slug: candidate.slug,
          title: candidate.title,
          savedImageCount: savedImages.length,
        });
        return { candidate, research, savedImages };
      });
    } catch (error) {
      console.warn(`[${i + 1}/${selected.length}] skipped ${candidate.title}: ${error}`);
      trace("research", "candidate job skipped", {
        index: i + 1,
        total: selected.length,
        slug: candidate.slug,
        title: candidate.title,
        error: errorData(error),
      });
      return undefined;
    }
  });
  const researched = maybeResearched.filter((item): item is ResearchedItem => Boolean(item));
  if (!researched.length) die("all candidate research jobs failed or timed out");
  trace("research", "research phase complete", {
    researchedCount: researched.length,
    researched: researched.map((item) => ({ slug: item.candidate.slug, title: item.candidate.title, savedImages: item.savedImages.length })),
  });

  const curated = await curatorAgent(researched, charter).catch((error) => fallbackCuratedItems(researched, error));
  console.log(`scout: ${curated.filter((c) => c.decision === "blog").length} blog posts selected`);
  trace("curator", "curation phase complete", {
    blogPosts: curated.filter((c) => c.decision === "blog").length,
    decisions: curated.map((c) => ({ slug: c.candidate.slug, title: c.candidate.title, decision: c.decision, score: c.score })),
  });

  for (const c of curated) {
    console.log(`  [${c.decision}] ${c.candidate.title} (${c.score}) — ${c.reasoning}`);
    if (c.decision === "blog" && c.blogMarkdown) {
      const outPath = path.join(BLOG_DIR, `${c.candidate.slug}.md`);
      await Bun.write(outPath, c.blogMarkdown);
      console.log(`    wrote ${outPath}`);
      trace("write", "wrote blog post", { path: outPath, slug: c.candidate.slug, title: c.candidate.title });
    }
    const curatedPath = path.join(POTENTIAL_DIR, c.candidate.slug, "curated.json");
    await Bun.write(
      curatedPath,
      JSON.stringify(
        {
          score: c.score,
          decision: c.decision,
          reasoning: c.reasoning,
        },
        null,
        2,
      ),
    );
    trace("write", "wrote curation decision", { path: curatedPath, slug: c.candidate.slug, decision: c.decision, score: c.score });
  }

  trace("run", "scout run complete");
  await closeOpencode();
  console.log("scout: done.");
}

main().catch((e) => {
  console.error(e);
  trace("fatal", "scout run failed", { error: errorData(e) });
  runTrace?.printRecent();
  void closeOpencode();
  process.exit(1);
});
