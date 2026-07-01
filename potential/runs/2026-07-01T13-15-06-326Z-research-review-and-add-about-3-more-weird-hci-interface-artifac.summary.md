# Run Summary — 2026-07-01

## What changed

Added **2 new artifacts** to the HCI Museum collection (66 total, up from 64).

### Promoted to collection

| Artifact | Year | Slug | Interaction Paradigm |
|---|---|---|---|
| **Exciting Boxing Controller** | 1987 | exciting-boxing | Inflatable humanoid punching bag with 11 pressure sensors; full-body punch input → Famicom boxing game. Konami / Human Entertainment. Japan-only, ¥7,980. |
| **Interactive Brainwave Visual Analyzer (IBVA)** | 1991 | ibva | Wireless EEG headband (3 dry electrodes) → radio → Macintosh FFT analysis → MIDI/visuals/control. First commercial consumer BCI. Psychic Lab Inc. (Masahiro Kahata). Used by Mariko Mori at Venice Biennale. |

### Deferred

- **Collins Tactile Vision Vest (1977)**: 1,024-point vibrotactile wearable vest, camera-to-skin sensory substitution. Smith-Kettlewell Institute. Extraordinary artifact — but ZERO publicly available images. Added to deferred list in beepy-memory.md.

## Files written/modified

- `potential/exciting-boxing/info.json` — new
- `potential/ibva/info.json` — new
- `potential/exciting-boxing/images/` — 5 downloaded images
- `potential/ibva/images/` — 5 downloaded images
- `docs/hci-wiki.md` — added 2 new sections + ToC entries
- `src/data.ts` — added 2 exhibit entries
- `assets/wiki/exciting-boxing-{1,2,3}.jpg` — 3 images
- `assets/wiki/ibva-{1,2,3}.jpg` — 3 images
- `potential/runs/2026-07-01T13-15-06-326Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace updated
- `docs/beepy-memory.md` — added Collins Tactile Vision Vest to deferred

## Verification

- `bun run typecheck`: PASSED
- `bun run build`: PASSED (66 exhibits + blog + about, 77 pages)

## Known issues

- The promote-potentials.ts data.ts regex bug (known from prior runs) required manual data.ts edits. Did not fix the script in this run.
- IBVA images are small (headshot 200×209, system diagram 300×260, software 664×415) — acceptable per museum guidelines for software-centric products but not ideal.

## What still needs review

- None — all planned artifacts either promoted or deferred with rationale.
