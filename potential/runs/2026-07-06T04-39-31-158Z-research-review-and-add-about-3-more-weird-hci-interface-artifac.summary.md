# Run Summary: 2026-07-06 — Add 3 more HCI artifacts

## What changed

Three new artifacts were researched, reviewed, and added to the HCI Museum collection:

### Added to collection

1. **Armatron (1984)** — Tomy/Radio Shack 6-DOF mechanical teleoperation arm. Dual joysticks engage rotating gear drums to directly control wrist, elbow, shoulder, and gripper — no computer, no programming, pure isomorphic kinesthetic control. ~$40 retail. Invented by Hiroyuki Watanabe (49-year Tomy veteran), inspired by his RC helicopter hobby. 7 Wikimedia Commons images.

2. **Big Trak (1979)** — Milton Bradley programmable six-wheeled toy tank. TMS1000 microcontroller, 16-step keypad programming with physical execution (FORWARD 5, RIGHT 15, FIRE). No screen — the gap between typed commands and physical consequences IS the interaction model. Used by David Klahr's CMU lab for cognitive science research on instructionless learning. 17 Wikimedia Commons images.

3. **Logitech ScanMan (1987)** — Handheld scanner where the user's hand IS the scanning motor. Physically dragged across the page at a steady speed; scan quality is a direct function of the user's manual dexterity. Introduced at a fraction of flatbed scanner cost by eliminating the motor and making the human do the mechanical work. 1 Wikimedia Commons image (ScanMan Color, 1992, Musée Bolo).

### Files written
- `potential/big-trak/info.json`
- `potential/armatron/info.json`
- `potential/scanman/info.json`
- `assets/wiki/big-trak-1.jpg`
- `assets/wiki/armatron-1.jpg`
- `assets/wiki/scanman-1.jpg`

### Files modified
- `docs/hci-wiki.md` — appended 3 new exhibit sections, updated ToC
- `src/data.ts` — 3 new exhibit entries added manually (promote script regex bug still unfixed)
- `potential/runs/2026-07-06T04-39-31-158Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace updated

### Cleanup
- `potential/marble-answering-machine/info.json` → archived as `info.json.archived` (previously deferred due to copyright-locked images; accidentally auto-promoted)

## Verification
- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (84 exhibits, 99 pages)

## Candidates deferred (not promoted)
- **Aspen Movie Map (1978-1980)** — MIT hypermedia surrogate travel. Google Street View precursor. Brilliant HCI artifact but ZERO freely-licensed images (YouTube stills only). Revisit if images surface.
- **ThunderScan (1984)** — Andy Hertzfeld's printer-repurposed-as-scanner. No Wikimedia images. Revisit if images surface.
- **Marble Answering Machine (1992)** — Already deferred previously. Info.json archived to prevent future auto-promotion by the script.
- Various software-only candidates (HyperCard, NoteCards, Guide, etc.) — museum focuses on hardware/interfaces.

## Lessons for beepy-memory
- Old info.json files from deferred candidates in the `potential/` directory WILL be auto-promoted by `scripts/promote-potentials.ts` — always archive/rename them before running.
- The promote-potentials.ts data.ts regex bug is still unfixed. Manual data.ts editing required after each promotion batch.
