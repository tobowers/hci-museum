# Run Trace — 2026-10-29 Research/Review/Add ~3 weird HCI artifacts

Status: in progress

## Setup
- Collection at 308 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 308).
- No unpromoted ready candidates in potential/ (all info.json slugs found in src/data.ts).
- Shared budget: 7 Octen, 2 Exa total across run including subagents.
- Memory guidance: well is dry for automated discovery at 308; image resolution for image-blocked deferred candidates is primary path; expect 0-1 additions.

## Plan
- Launch 3 research subagents with fresh, Commons-image-likely angles that are NOT flagged exhausted in memory.
- Verify every candidate against src/data.ts + memory exclusion lists (subagents miss exclusions frequently).
- Check image availability via Wikimedia Commons API myself (free, no Octen).
- Select strongest with distinct interaction + CC/PD images, build info.json, promote manually.

## Result: 0 promoted, 1 candidate staged for human review

Research (via Octen/Exa + free Wikimedia Commons API) surfaced candidates in three angles (home-computer storage media; electronic board games; music controllers), but confirmed the well is dry for *image-verified, category-distinct* additions at 308:

- **Sinclair ZX Microdrive (1983)** — STAGED as `potential/zx-microdrive/` with 3 CC-licensed local images. Strong interaction ("endless loop you cannot rewind; back-up-to-expand") but borders the saturated storage-media family (Cauzin, Typecorder, VIEW, Discman, Etak). NOT promoted — left for a human saturation call per memory's "don't pad" discipline. Exatron Stringy Floppy (1978) noted as sibling, not a separate candidate (near-duplicate).
- **Electronic Battleship (1977)** / **Electronic Scrabble (1986)** — dropped: Commons images DELETED/removed.
- **SynthAxe (1985)** — dropped: CHM "curator's wish" (no museum owns one), music-HCI saturated, no CC images.

## Decision
Staged the ZX Microdrive candidate (info.json + 3 local images) rather than promoting, consistent with the instruction "do not promote into docs/hci-wiki.md unless explicitly asked" and with memory's saturation guidance. Updated `docs/beepy-memory.md` with the durable lessons (storage-media family full; board-game Commons deletions; SynthAxe deferral).