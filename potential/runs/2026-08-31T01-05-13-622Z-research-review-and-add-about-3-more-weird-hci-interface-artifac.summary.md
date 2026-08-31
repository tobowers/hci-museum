# Run Summary — research, review, and add ~3 weird HCI interface artifacts (1976–1992)

**Date:** 2026-08-31
**Trace:** `potential/runs/2026-08-31T01-05-13-622Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`

## What changed

Added **2 exhibits** to the museum collection (target was ~3; a third strong candidate was not found at the quality bar, and per standing guidance the well of 230+ artifacts should not be padded):

1. **Psion Organiser I (1984)** — the first practical pocket computer; interaction anchored on **storage-as-physical-ritual**: write-once EPROM "Datapaks" that the machine itself zaps with a high-voltage pulse to save, and erases by pulling the pack out and holding it under UV light. Keypad hidden under a spring-loaded sliding cover.
2. **Lexicon/Nixdorf LK-3000 (1978)** — a pocket translator whose base unit has **no CPU/RAM** — an inert shell; all logic lives in swappable cartridges each containing their own processor/ROM ("swap-the-brains" hardware multiplexing). Sold under Lexicon and Nixdorf; CHM object 102673211.

## Artifacts added to collection

- **psion-organiser-i** — slug `psion-organiser-i`, year 1984, hero image `assets/wiki/psion-organiser-1.jpg`
- **lexicon-lk3000** — slug `lexicon-lk3000`, year 1978, hero image `assets/wiki/lk3000-nixdorf-handheld.jpg`

## Files written

- `potential/psion-organiser-i/info.json` → archived as `info.json.archived` after promotion
- `potential/lexicon-lk3000/info.json` → archived as `info.json.archived` after promotion
- `potential/runs/2026-08-31T01-05-13-622Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-08-31T01-05-13-622Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Files edited (promotion)

- `src/data.ts` — appended 2 exhibit entries
- `docs/hci-wiki.md` — intro count 230→232; added ToC entries #231, #232; appended 2 wiki sections
- `docs/beepy-memory.md` — appended durable lessons for 2026-08-31

## Images

3 files copied into `assets/wiki/` (all verified valid JPEG):
- `psion-organiser-1.jpg` (CC, Science Museum UK)
- `psion-organiser-datapak.jpg` (CC BY-SA 4.0)
- `lk3000-nixdorf-handheld.jpg` (CC BY-SA 2.0)

All local paths (no remote hotlinks).

## Verification

- `bun run typecheck` — passes
- `bun run build` — passes (232 exhibits, 305 pages)
- data.ts exhibit count = 232; wiki ToC count = 232 (clean match)
- No active info.json files remain in `potential/`

## Still needs review

- **HP-01 "Wrist Instrument" (1977)** — researched and image-verified (magnetic-stylus-only keys, press-the-glass-to-read-time) but was explicitly deferred in memory (2026-07-24, "wrist-worn calculator incremental"). Not re-promoted out of respect for prior curatorial judgment. Worth revisiting if the magnet-only-keyboard interaction angle becomes a themed priority or the deferral is reconsidered.
- The music/wind-instrument angle produced no usable candidate (subagent failed); Yamaha WX wind controllers, breath controller, Laser Harp, and Ondes Martenot were floated but not well-sourced this run.