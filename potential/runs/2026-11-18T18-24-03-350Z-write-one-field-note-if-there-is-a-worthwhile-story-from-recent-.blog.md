# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Run 2026-11-18

**Outcome: ONE note written.** `docs/blog/the-desk-that-had-a-key-for-everything.md` (Aesthedes, 1984). `bun run typecheck` clean; `bun run build` clean ("321 exhibits + blog + about, 463 pages"). All internal links + image verified in built HTML.

### Correction to the carried-over handoff
The prior session's "next move" was to check whether Variophon (1981) was un-noted and write about it. **It was already noted** — `docs/blog/the-breath-that-was-the-sound.md`, dated 2026-11-16. No Variophon work was needed. Also stale: `ishiguro-storm-surge-model` (noted 11-15, `the-sea-that-was-made-of-electricity`) and `rca-selectavision-ced` (noted 11-17, `the-disc-you-were-never-allowed-to-touch`). Only `aesthedes` survived from the old "strong un-noted" list.

### Why Aesthedes
- Verified genuinely un-noted: `grep -rl "exhibits/aesthedes" docs/blog/` returns nothing. The one `aesthedes` string hit (`the-keyboard-you-held-in-your-mouth.md`) is an incidental prose mention, not coverage. Theme greps (key-per, shortcut, modality/modal, windowless) found no owner.
- Angle is unoccupied and non-colliding:
  - vs `the-keyboard-that-gave-you-four-thousand-keys` (space-cadet): that note bets on *memory*; Aesthedes is the explicit inversion — a desk that bets on *no memory*, one key per function, no modifiers. Used as the central foil.
  - vs `the-lever-that-had-no-undo` (GVG): that note is about irreversibility in live broadcast and asserts undo exists "because the machine holds a model of the past." The Aesthedes *qualifies that sentence*: it held a past (10×68000, 20 MB disk, save-to-floppy habit) but shipped an UNDO key whose function was never implemented — a dead spot on a surface whose premise is that a key means what it says.
  - vs `the-etch-a-sketch-that-learned-about-time` (only other Quantel Paintbox mention): used Paintbox as the one-picture foil to Aesthedes's six-screen "whole working memory always visible" topology.
- Structural spine: (1) memory vs. surface as rival keyboard arguments; (2) six screens as moving the retrieval ceremony into furniture; (3) the designer-operator paradox — the machine built to need no learning made search itself a skilled job (van Rixtel's transparency sheet); (4) the unimplemented UNDO key; (5) the Macintosh verdict and what we actually kept from it.
- No new exhibit promoted; `src/data.ts` and `docs/hci-wiki.md` untouched.

## Candidate status (verified this run)
| slug | status |
|---|---|
| variophon | NOTED — `the-breath-that-was-the-sound` (11-16) |
| ishiguro-storm-surge-model | NOTED — `the-sea-that-was-made-of-electricity` (11-15) |
| rca-selectavision-ced | NOTED — `the-disc-you-were-never-allowed-to-touch` (11-17) |
| atc-flight-progress-strips | NOTED — `the-board-that-was-the-airspace` (11-13) |
| beocenter-9500 | NOTED — `the-panel-that-lit-when-you-leaned-in` |
| aesthedes | **NOTED as of this run** |
| technics-sl-1200mk2 | NOTED — `the-deck-that-let-you-grab-the-data` |
| versabraille | NOTED — `sixty-lines-a-second-under-one-finger` |

The "strong un-noted older exhibit" backlog is now empty. Future note runs have no pre-vetted zero-sourcing candidate and will need to identify one fresh.
