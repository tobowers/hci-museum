# Run trace: research, review, add ~3 weird HCI artifacts (2026-09-11)

## Context
- Collection at 256 exhibits. Well is thin/dry for automated discovery; image availability is the dominant bottleneck.
- Goal: ~3 genuinely new, interaction-model-rich HCI artifacts 1976-1992, promoted to collection with local images.

## Angles chosen (fresh, likely image-verifiable)
- A: Electronic chess/sensory-board computers beyond Fidelity/Novag (Mephisto/Saitek with sensory boards)
- B: Consumer online/information appliances with distinctive physical ritual (MUPID, AT&T Sceptre, Labgear)
- C: Embodied lab/scientific instruments with unusual interfaces (Tektronix 11401 touch scope, Tektronix 4051, Fluke 45)

## Subagents (3 parallel, 2 Octen each)
- A → Mephisto Modular/Exclusive autosensory board (1983, Hegener & Glaser). Recommended. CC BY-SA 4.0 image confirmed.
- B → MUPID (1981), AT&T Sceptre, Labgear CM 7026. MUPID image-rich (9 Commons files) but = 4th videotex-ish terminal.
- C → Tektronix 11401 (touch scope, image-blocked), Tektronix 4051 (light pen, image-rich), Fluke 45 (weak).

## Decisions
- PROMOTE: Mephisto Modular Autosensory Chess Board (1983) — distinct board-outlives-modules modular HCI philosophy; only clearly interaction-distinct + image-verified candidate.
- DEFER: MUPID (videotex saturation: museum has Minitel, BTX, CAPTAIN), Tektronix 4051 (light-pen direct-pointing already covered by Vectrex Light Pen / Gibson LPS), Tektronix 11401 (image-blocked), Fluke 45 (weak interaction).
- Honest outcome: 1 high-quality addition for a dry well, per museum "fewer but higher quality / don't pad" discipline.

## Actions taken
- Wrote potential/mephisto-modular/info.json
- Downloaded MephistoModularIV.jpg (CC BY-SA 4.0) → resized to assets/wiki/mephisto-exclusive-board.jpg (1200×900)
- Added exhibit entry to src/data.ts (id mephisto-modular, sortYear 1983)
- Added wiki section to docs/hci-wiki.md + ToC entry (#257) + intro count 256→257
- All promotion manual (promote-potentials.ts NOT run — known data.ts regex + image-copy + ToC bugs)
- Verified: typecheck passes; build = 257 exhibits, 344 pages; exhibit page + image + wiki content render correctly

## Verification
- bun run typecheck: pass
- bun run build: pass (257 exhibits, 344 pages)
