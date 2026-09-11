# Run summary — research, review, add ~3 weird HCI artifacts (2026-09-11)

## What changed
- **Added 1 new exhibit to the collection** (Mephisto Modular Autosensory Chess Board, 1983). The other candidates were reviewed and deferred — the well at 256 exhibits is dry, and only this candidate cleared the museum's bar for interaction-model distinctiveness plus image availability. Per museum discipline, accepted the honest "fewer, higher-quality additions" outcome rather than padding.

## Artifacts added to the collection
- **Mephisto Modular Autosensory Chess Board (1983)** — Hegener & Glaser's modular chess-computer system. The museum's cleanest "hardware modularity as HCI" exhibit: a durable pressure-sensing (autosensory) board whose 64 squares are the input (press a piece down to enter a move; no coordinate keypad), onto which the owner snaps swappable processor/program/display modules. The board-as-durable-interface / CPU-as-swappable-token philosophy is the distinct interaction. Richard Lang's engines won 6 WCCC 1984-1990; >90% of German chess computers were Mephistos by 1989; the 2005-07 Phoenix Resurrection module still fit the original boards.

## Files written
- `potential/mephisto-modular/info.json` (archived to `info.json.archived` after promotion to prevent auto-promotion)
- `potential/runs/2026-09-11T01-29-19-498Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (live trace)
- `assets/wiki/mephisto-exclusive-board.jpg` (CC BY-SA 4.0, resized to 1200×900)
- `src/data.ts` — added exhibit entry (id `mephisto-modular`, sortYear 1983)
- `docs/hci-wiki.md` — added wiki section + ToC entry (#257) + intro count 256→257
- `docs/beepy-memory.md` — added New additions / deferred / gotchas / Field Note candidate notes

## Research performed
- 3 hci-research-subagents in parallel, one angle each:
  - Chess/sensory-board computers → Mephisto Modular (recommended)
  - Consumer online/information appliances → MUPID, AT&T Sceptre, Labgear CM 7026
  - Embodied lab/scientific instruments → Tektronix 11401, Tektronix 4051, Fluke 45
- Manager-side image verification via direct Wikimedia Commons API + curl (no Octen consumed for image work). Confirmed MephistoModularIV.jpg CC BY-SA 4.0 and downloadable.

## Decisions / deferrals
- **MUPID (1981)** — image-rich but a 4th videotex-family terminal (museum has Minitel, BTX, CAPTAIN). Deferred to avoid category saturation.
- **Tektronix 4051 (1976)** — light-pen direct-pointing already covered (Vectrex Light Pen, Gibson LPS). Deferred.
- **Tektronix 11401 (1986)** — genuinely distinct touch oscilloscope but ZERO free images on Commons. Deferred (revisit if a unit photo surfaces; manual-scan path viable like VersaWriter).

## Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (257 exhibits, 344 pages)
- Confirmed exhibit page, feed entry, local image, and wiki deepDive content all render correctly in the built site.

## Still needs review
- No blockers for the promoted exhibit. Deferred candidates (MUPID, Tektronix 4051, Tektronix 11401) documented for future runs.
- Unwritten Field Note candidate from this batch: Mephisto Modular (`the-board-that-outlived-its-brains`). Long-pending unwritten candidates still available for future blog runs.
