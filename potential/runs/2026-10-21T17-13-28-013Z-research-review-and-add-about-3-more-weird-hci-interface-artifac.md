# Run trace: research/review/add ~3 weird HCI artifacts (2026-10-21)

Start state: 299 exhibits in src/data.ts. Well is historically dry at 295-296; image-blocked
deferred candidates dominate. Plan: check potential/ for ready unpromoted info.json first
(reaffirmed lesson), then launch focused fresh-angle subagents (≤3, each ≤2 Octen), then
promote strongest with local images.

## Progress
(ongoing)

## Found ready candidate in potential/
- `potential/entex-select-a-game/info.json` ACTIVE, not in src/data.ts, images staged + valid JPEGs.
  Entex Select-A-Game (1981): cartridge-as-computer handheld, VFD 7×16 dot-matrix, static overlay per cart,
  no processor in base. Strong + ready. Will promote.

## Launching 3 fresh research subagents (each ≤2 Octen)
Angles chosen for interaction-model richness + plausible Commons image yield, avoiding saturated categories
(music HCI, scanning/OCR, biometric, security, expressional music controllers, exergaming).

## Subagent results
- Subagent 1 (telephony): returned EMPTY output (failed/used budget, no report).
- Subagent 2 (output/display): proposed PLATO V (1981) + TI Silent 700 — BOTH ALREADY IN MUSEUM (verified in src/data.ts). Duplicate-failure; no new candidates.
- Subagent 3 (kids' learning toys): proposed Tomy Tutor Play Computer (1984, V&A-restricted image, program-build->step->run interaction, NOT on Commons) + Talk 'n Play (1984, voice-record + audio-mixer, NO image anywhere). Both genuinely new but image-weak. Interaction stories distinctive.
- Entex Select-A-Game confirmed NOT in collection, images staged. Strong ready promote.

## Octen budget exhausted (7/7 consumed by subagents before manager's own queries)
Manager fell back to direct webfetch/Wikipedia/Commons API for verification. Plan: promote the
fully-ready Entex Select-A-Game (image-verified). For the kids'-toy candidates, verify interaction
via direct fetches; assess image path before deciding.

## Final outcome (manager decision)
- Entex Select-A-Game images verified PUBLIC DOMAIN on Commons (File:Entex-SelectAGame.jpg,
  File:Entex Select a Game 01.jpg). Clean for local use.
- Commons API searched for "Tomy Tutor Play Computer", "Talk 'n Play", "CBS Talk and Play":
  ZERO usable free images for either kids'-toy candidate. Both image-blocked.
- DISCIPLINED CALL: Promote Entex Select-A-Game only (fully ready, image-verified, distinctive
  cartridge-as-computer interaction). Do NOT pad with image-weak candidates. This aligns with the
  goal's "fewer if fewer are ready / no weak promotions" guidance.

## Actions taken
1. Copied + resized Entex images to assets/wiki/entex-select-a-game.jpg (1200x675) and
   entex-select-a-game-01.jpg (1200x895), quality 86.
2. Added exhibit entry to src/data.ts (id entex-select-a-game, sortYear 1981) -> count 299->300.
3. Added wiki section + ToC entry 298 in docs/hci-wiki.md; updated intro count to "three hundred".
4. Archived Tomy Tutor Play Computer + Talk 'n Play as deferred candidates in potential/ with
   info.json documenting the image blocker.
5. bun run typecheck: PASS. bun run build: PASS (300 exhibits, 421 pages).

## Result
Promoted 1 exhibit (Entex Select-A-Game 1981). Zero-add would have been acceptable; one strong,
image-verified addition delivered rather than padding to 3.
