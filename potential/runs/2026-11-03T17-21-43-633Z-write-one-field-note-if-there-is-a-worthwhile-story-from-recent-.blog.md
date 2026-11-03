# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Run start (2026-11-03)
- Collection count: 311 exhibits (parsed from `src/data.ts`; note: memory's "309" was stale — the latest research push landed new exhibits at indices 297–311).
- Re-verified memory's "unwritten candidates" FIRST, by grepping blog *content* for exhibit slugs (not just slugs):
  - `brother-punch-card-knitting-machine` -> ALREADY WRITTEN (`the-program-that-made-a-sweater`, 2026-10-24). Memory's headline candidate was stale/wrong.
  - `casio-cmd-40` -> ALREADY WRITTEN (`the-remote-that-listened-before-it-spoke`).
  - Conclusion: memory's unwritten lists were stale again — always re-grep blog content for the exhibit slug before trusting them.

## Ground-truth freshness method (better than slug list)
Enumerated all 311 `slug:` values from `src/data.ts` and all `../exhibits/<slug>/` links from `docs/blog/`; `comm -23` gives exhibits linked from no note. That surfaced genuinely-unwritten NEW exhibits from the recent push: `grass-valley-1600`, `hell-chromagraph-dc300b`, `scantron-888p`, `ferranti-mrt-100`, `nikon-qv-1000c`, `ams-audiofile`, `hp-8450a`.
- `potential/` scan: TWO active (unarchived) `info.json` leftovers — `grass-valley-1600` and `hell-chromagraph-dc300b` — i.e. the two most recent promotions. (Housekeeping: both should have been `.archived`; noted, not touched this run.)

## Chosen note
- Exhibit: **Grass Valley 1600 Series Production Switcher** (1979). Freshest promotion with a live info.json, richest verified primary-source material (Grass Valley Television Equipment Catalog No. 16, 1979, archive.org).
- Angle: the T-bar as an *embodied, irreversible, live-performance* control — the opposite of the undo-able software panel. The program bus is always "hot"; the lever is momentary, not a state toggle; "no undo" because the show is already airing.
- Counterpoint: museum's `the-two-dials-and-the-two-hands` (Sony BVE-600, offline two-deck editing) — deliberately contrasts live/irreversible vs offline/repeatable. That note even name-drops "Grass Valley system," making it the natural sibling.
- Star Wars hook (verified via vintageTEK / PartsofSW): the GVG "T" handle on a model 1600 was the Death Star superlaser lever prop.

## File
- Wrote `docs/blog/the-lever-that-had-no-undo.md` (788 words; frontmatter title/date 2026-11-03/description/author Beepy/slug).
- Image: `../assets/wiki/gvg-switcher-console.jpg` (already in repo; file-verified JPEG 640x426). No new image downloaded.
- Links: `../exhibits/grass-valley-1600/` (slug confirmed in data.ts), `../blog/the-two-dials-and-the-two-hands/`.

## Verification
- `bun run typecheck` -> pass (tsc --noEmit, no output).
- `bun run build` -> pass ("Built static site ... 311 exhibits + blog + about, 440 pages").
- Post present in `public/blog/the-lever-that-had-no-undo/index.html`, blog index, feeds/blog.xml, llms.txt.

## Files touched
- `docs/blog/the-lever-that-had-no-undo.md` (new)
- `docs/beepy-memory.md` (durable lesson appended)
- this trace

