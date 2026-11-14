# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

# Run trace — 2026-11-14

## Start
- Repo clean except this trace file. HEAD = e9f1da9 (skills merge).
- `grep -cE '^\s{4}id: "' src/data.ts` = **318 exhibits**.
- `ls potential/*/info.json` → **no active info.json**. No ready unpromoted candidates from prior runs.
- So: fresh research required. Memory says the well is angle-dependent, not empty.

## Plan
- 3 research subagents, one focused angle each, max 2 Octen each (shared 7 budget).
- Angles chosen to hit categories memory says are unrepresented or under-explored,
  while avoiding ones confirmed exhausted (music, medical imaging, lab instruments,
  videotex, payment terminals, phonecards, digitizers/tablets, chess computers,
  keyboards, output mechanisms, body-interface sensors).

## Subagent results (3 in parallel)
1. **Life-safety / annunciator panels** — GOOD.
   - TMI-2 control room console (1979): PD images verified by subagent (NARA, NRC, Carter visit crop).
   - Simplex 4208/4247 conventional FACP: CC BY 3.0 images verified; year soft (~1976-79).
   - Simplex 4100 addressable (1985): only a later 4100U photo → image/date mismatch.
   - Rochester Instrument Systems AN-3100 window annunciator: textbook interaction
     (flash → acknowledge → steady → clear; lamp-test), patent US4001797 (1977, PD) drawings
     exist but subagent didn't confirm a fascia figure.
2. **Broadcast/studio consoles** — WEAK. Character generators/weather graphics/sports scoring all
   Commons-blocked (agreed with memory: Chyron, Ampex ACE image-blocked). Only lead: Telescript MPS
   teleprompter hand controller (CC BY-SA 4.0, high-res) with UNVERIFIED in-window date.
3. **Marine/avionics/vehicle panels** — FAILED (step cap, no report usable).

Octen budget: 1 used by subagent 1, 2 by subagent 2 (~3 used of 7). Exa: 0.

## Decision
Pursue: (a) TMI-2 control room as the flagship, (b) annunciator-panel class if I can get a clean
period artifact image, (c) Telescript MPS only if a date can be pinned.
Verify everything myself via Commons API + direct fetches (free, no Octen).

## Outcome: 1 exhibit promoted (319 total)
**Three Mile Island TMI-2 Control Room Console (1979)** — `tmi-2-control-room`
- images: `assets/wiki/tmi2-control-room-nara.jpg` (NARA 540034, PD, 1920x1295 JPEG; true
  archive original is 3000x2023 TIF — I pulled a 1920px lossy JPG thumb),
  `assets/wiki/tmi2-control-room-panel-detail.jpg` (PD Carter-visit crop, 645x1013).
- data.ts entry added (sortYear 1979), wiki section + ToC #317 added (also fixed the
  pre-existing broken indentation on ToC lines 313-314 that left 315-316 flush-left).
- `bun run typecheck` OK; `bun run build` OK → "319 exhibits".
- candidate archived: `potential/tmi-2-control-room/info.json.archived`.

### Notes for next run
- `File:Control room operators.png` on Commons: direct `upload.wikimedia.org/5/58/...` URL 404s
  (bucket path missing); `Special:FilePath/<name>` fallback DID work (603x596). But it is
  operators testifying, not the console — skipped as non-interface. **Lesson: when an
  upload.wikimedia.org direct path returns "File not found", retry Special:FilePath before
  giving up.**
- The TIF thumb URL form `/lossy-page1-1920px-....tif.jpg` worked for NARA TIF originals.
- TMI-2 console accepted as a room-scale artifact (largest display in collection); the
  curatorial framing is the PORV command-vs-state lamp + buried downstream gauge.
- Annunciator patent US4001797 has only wiring/block drawings (no fascia figure) — not usable
  as a hero image; used as a textual source only.
- Angles 2 (broadcast) and 3 (nautical/avionics) produced nothing promotable this run.

### Budget used (final)
Octen ~3 of 7 (subagents), Exa 0 of 2. Manager-side research was free Commons/Patents/Wikipedia.
