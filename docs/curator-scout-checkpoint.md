# Curator Scout Checkpoint

Date: 2026-06-24

## Goal

Build an agentic discovery and curation pipeline for adding about 15 more HCI Museum objects.

Desired flow:

1. **Discovery / scout** uses Exa, Grok, and Wikipedia to find candidate HCI hardware objects.
2. **Research agent** uses DeepSeek V4 Pro to research each object deeply, collect sources, find people/organizations, and download images from more than Wikipedia.
3. **Dedupe** removes candidates already represented in the museum.
4. **Beepy curator** uses OpenRouter `z-ai/glm-5.2` for final curation, writeup, and placement.

## Current Implementation

Files added or changed:

- `scripts/curator-scout.ts`
  - Multi-stage scout/research/curation script.
  - Uses Grok for broad discovery.
  - Uses Exa + Wikipedia for source/image discovery.
  - Uses DeepSeek V4 Pro for research JSON generation.
  - Uses OpenRouter `z-ai/glm-5.2` for Beepy curation and blog writing.
  - Writes candidate bundles to `potential/{slug}/`.

- `scripts/eval-curator-scout.ts`
  - Evaluates the two sides of the pipeline separately:
  - Research/download side: source breadth, team detail, dedupe, images, schema completeness.
  - Curation/writeup side: Beepy voice, frontmatter, grounding, links, placement decision.
  - Writes reports to `potential/evals/`.

- `package.json` / lockfile
  - Added Vercel AI SDK packages: `ai`, `@ai-sdk/openai`.

## Partial Scout Run Saved

A broad scout run was started with commercial hits allowed when they demonstrate a distinct HCI model.

The process timed out during candidate 11 (`Spaceball 1003`), but the first 10 candidate bundles were saved:

- `potential/koalapad/`
- `potential/gridpad-100/`
- `potential/hp-150-touchscreen/`
- `potential/microwriter/`
- `potential/polhemus-isotrak/`
- `potential/heathkit-hero-1/`
- `potential/summagraphics-bit-pad/`
- `potential/nintendo-d-pad-controller/`
- `potential/psion-organiser-ii/`
- `potential/poqet-pc/`

Each saved directory contains an `info.json`; most also contain downloaded images under `images/`.

## What Worked

- Dedupe against existing exhibit titles/slugs is wired in.
- Grok returned a good broad candidate set.
- Exa + Wikipedia enrichment worked for multiple objects.
- Page image scraping downloaded more than Wikipedia images for many candidates.
- DeepSeek v4 models now run through chat-completions mode instead of the unsupported Responses API path.
- Typecheck and site build pass after the script additions.

## What Felt Wrong

The AI SDK abstraction works technically, but this project likely wants **agentic tool use**, not just API-prompt chaining.

The current script asks models to summarize/research from gathered snippets. A stronger approach would run an opencode-style agent per candidate so it can:

- Search iteratively.
- Inspect pages directly.
- Follow source trails.
- Use `yt-dlp` intentionally for video thumbnails/stills.
- Compare against existing museum pages.
- Download and verify images with provenance.
- Produce a richer research bundle with explicit citations.

## Recommended Next Direction

Preserve the current script as a prototype, but replace the research loop with opencode agent sessions:

1. Scout candidate names using Grok + Exa + Wikipedia.
2. For each deduped candidate, launch an opencode research agent with a strict output contract:
   - `info.json`
   - `sources.md`
   - downloaded images with attribution
   - `candidate.md` draft in museum wiki format
3. Run `scripts/eval-curator-scout.ts` over each bundle.
4. Send the top bundles to Beepy/GLM 5.2 for final curation and blog/exhibit placement.

## Last Known Verification

Commands passed:

```bash
bun run typecheck
bun run build
```

The curatorial scout run timed out after saving 10 potential candidates, so continue from `potential/` rather than discarding that work.
