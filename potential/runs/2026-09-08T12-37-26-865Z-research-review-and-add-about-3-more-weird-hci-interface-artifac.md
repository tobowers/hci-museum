# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start
- Collection at 251 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 251).
- All potential/*/info.json archived (no active unpromoted candidates).
- Octen budget: 7 shared. Exa budget: 2 shared.
- Earlier today's run promoted Supermarket Checkout Laser Scanner (1974) + Casio DG-20 (1987) — both now in museum.
- Memory guidance: well is angle-dependent; pick fresh angles with high Commons-image yield.

## Angles chosen (2026-09-08)
1. Early telephone-answering machines / voice-message devices with distinctive physical interaction + visual feedback (voice-menu/embodied message playback).
2. Physical/virtual hybrid play surfaces or input devices using unusual sensing (acoustic, tilt, inertial, pressure) for home computers beyond covered games.
3. Early musical instruments where the BODY becomes a novel circuit/input element OR consumer instruments with genuinely weird physical interfaces not in collection.

## Subagent results
- Angle 1 (answering machines): Strongest = National/Panasonic "Easa-Phone" (dual endless-loop cassette tapes — one greeting, one message bank; the message medium physically cannot be rewound; CC0 Commons images verified). Code-A-Phone beeperless touch-tone remote retrieval (strong HCI story, image-blocked). Panasonic KX-T1423 (backup, conventional dual-cassette).
- Angle 2 (unusual sensing): Goo Surfboard Tilt Controller (US4817950, patent-only, never shipped, image-poor) + Roklan Un-Roller (already in deferred list, © CHM image). No promotable image-verified candidate.
- Angle 3 (consumer devices): TI Magic Wand Speaking Reader (ALREADY IN MUSEUM), Speak & Spell (ALREADY IN MUSEUM), Speak & Read (weak sibling, pressure-surface reading trainer). No promotable candidate.
- Octen budget: fully exhausted (7/7) by subagents. All manager image work via direct Commons API / Wikipedia / curl (no Octen).

## Manager-side verification
- Verified Easa-Phone CC0 images on Commons (both by phreakindee, CC0 — even better than reported CC-BY-SA). Downloaded + `file`-verified both. Full-res 3648×2736 / 3424×2404.
- Easa-Phone year is imprecise: endless-loop answerphone mechanism pioneered 1960s-70s (Hashimoto Ansa Fone); National consumer unit is late-70s/early-80s. Will date "c. 1979" with honest framing.
- Evaluated alternatives: Speak & Read (weak sibling), Code-A-Phone (image-blocked), Goo Surfboard (patent-only). None meet museum bar alongside Easa-Phone.

## Decision
- Promote exactly ONE quality candidate this run: National Easa-Phone. Distinct interaction = "the message medium that physically cannot be rewound" — fits museum's medium-as-interface family (2-XL, Sony Typecorder, IBM 6:5). Clean CC0 images. Honest about modest HCI distinctness and imprecise year.
- Do not pad: subagent yields across 3 angles produced only this one image-verified, distinct, promotable artifact.

## Promotion (manual, per memory bugs in promote-potentials.ts)
- Copied both CC0 images to assets/wiki/easa-phone-*.jpg, resized to 1200px (Pillow 12.3.0) — 175KB/171KB.
- Added entry to src/data.ts (id easa-phone, year "c. 1979", sortYear 1979). Data count now 252.
- Added wiki section "## National Easa-Phone Answering Machine (c. 1979)" to docs/hci-wiki.md + ToC entry #252 (anchor #national-easa-phone-answering-machine-c-1979).
- Updated wiki intro count: 251 → 252.
- Archived info.json as info.json.archived.
- typecheck: PASS. build: PASS (252 exhibits, 336 pages).
- Pillow was not present at start; installed via pip3 (works offline in this env).
