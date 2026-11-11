# Run Summary — 2026-11-11T06-22-23-765Z

**Objective:** Research and add ~3 new weird/embodied HCI interface artifacts (1976–1992).

**Result:** Promoted 3 exhibits. Collection **313 → 316**. Typecheck and build clean.

## Added (all fill previously-unrepresented interaction categories)

1. **Technics SL-1200MK2 (1979)** — `technics-sl-1200mk2`
   First playable-medium / turntablism artifact. Direct-drive motor stable enough to be grabbed (a belt deck slips; the 1200 lets a hand bend pitch/time live); MK2's linear ±8% pitch slider is an ear-read, not eye-read, tempo control. Image CC BY-SA 2.5 (Commons).

2. **Air Traffic Control Flight Progress Strips (1970s–1990s)** — `atc-flight-progress-strips`
   The museum's clearest paper-as-distributed-state object: position = data (altitude order / ground-runway-air bays), tilt = signal ("cocked out"), ink colour = authorship. Hook: the word **"handoff"** came from physically handing the strip. Not a machine — tests the definition of "artifact." Two PD/FAA images.

3. **Ishiguro Electronic Storm Surge Model (1960–1983)** — `ishiguro-storm-surge-model`
   Purest *medium-is-the-model* artifact: 80-node electrical analogue of the North Sea; CBM 8032 + floppy as digital front end, OS-240 oscilloscope output photographed not saved. Analog↔digital hybrid (origin 1960, digital front end in-window). Images CC0 + CC BY 4.0.

## Process (explicit trace)
- Confirmed 3 ACTIVE pre-researched candidates in `potential/`; verified local images valid and no slug collisions.
- Launched 2 parallel research subagents to explore fresh angles: the retail/order-terminal agent hit its step cap with no report; the bizarre-sensing music/audio agent returned only patent-only concepts and out-of-window instruments (Waterphone 1973/75) — **zero promotable**. Consistent with prior memory that the music sector is saturated. Stopped fresh discovery rather than burning Octen budget.
- Promoted **manually** (`promote-potentials.ts` does not copy images, edit `src/data.ts`, or update the ToC):
  - 5 images resized to 1200px / q86 into `assets/wiki/`.
  - 3 entries added to `src/data.ts`.
  - 3 full wiki sections appended to `docs/hci-wiki.md`; ToC 312–314 added; stale intro count corrected.
  - Each `potential/<slug>/info.json` archived → `info.json.archived` (0 active remain).
- Verified: all 3 exhibit pages built; all 5 images in `public/assets/wiki/`; `bun run typecheck` clean; `bun run build` → "316 exhibits + blog + about, 449 pages".

## Not done / open
- No field note written this run (research + promotion only).
- Durable lessons recorded in `docs/beepy-memory.md` entry 1051 (incl. patent-only ≠ artifact; manual promotion checklist; stale counts; ToC numbering mess).
- Open for future sessions: `beocenter-9500` and `rca-selectavision-ced` remain un-noted holders.
