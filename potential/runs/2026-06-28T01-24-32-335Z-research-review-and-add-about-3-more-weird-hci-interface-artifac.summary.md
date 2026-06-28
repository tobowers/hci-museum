# Run Summary — 2026-06-28

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976–1992

## Artifacts Added to Collection

### 1. Barcode Battler (Epoch Co., 1991)
- Handheld LCD game with built-in barcode scanner. Swipe any product barcode → RPG stats
- Massive Japanese fad, Western commercial failure
- Novel interaction paradigm: ambient physical-world data as game input, decades before Skylanders/amiibo/QR games
- Slug: `barcode-battler`
- Images: 2 (Wikimedia Commons — device with LCD, scanner close-up)

### 2. Talking Glove (Kramer/Stanford, 1988–1991)
- First portable ASL fingerspelling-to-speech translation system
- 14 strain-gauge flex sensors, DECtalk speech synthesis, beacon recognition algorithm
- Commercial legacy: Virtual Technologies → CyberGlove → Immersion Corp (multimillion-dollar patent settlements)
- Slug: `kramers-talking-glove`
- Images: 3 (US Patent 5,047,952 drawings — system diagram, usage scenarios, glove plan)

### 3. Performance-Driven Facial Animation (Williams/Apple ATG, 1990)
- SIGGRAPH 1990 landmark: retroreflective dots on actor's face → real-time 3D CG character
- Birth of facial performance capture — "electronic mask" concept
- Lance Williams later Chief Scientist at Disney, won Technical Academy Award
- Slug: `williams-facial-animation`
- Images: 1 (SIGGRAPH History Archive title card)

## Files Written

- `potential/kramers-talking-glove/info.json`
- `potential/williams-facial-animation/info.json`
- `potential/barcode-battler/info.json`
- `potential/kramers-talking-glove/images/` (5 patent drawing PNGs)
- `potential/williams-facial-animation/images/` (1 SIGGRAPH title JPG)
- `potential/barcode-battler/images/` (2 device photos)
- `assets/wiki/kramers-talking-glove-{1,2,3}.png`
- `assets/wiki/williams-facial-animation-1.jpg`
- `assets/wiki/barcode-battler-{1,2}.{png,jpg}`
- `potential/runs/2026-06-28T01-24-32-335Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-06-28T01-24-32-335Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Files Modified

- `docs/hci-wiki.md` — appended 3 new wiki sections + updated ToC (entries 45–47)
- `src/data.ts` — added 3 new exhibit entries

## Verification

- `bun run typecheck` — **passed** (zero errors)
- `bun run build` — **succeeded** (47 exhibits + blog + about, 54 pages)

## Known Issues

- The `promote-potentials.ts` data.ts replacement regex bug persists: `/\n\];\s*\n\nexport const featured/` does not match the file structure where `export const exhibits` sits between `];` and `export const featured`. Workaround: manual data.ts edit.
- The script also doesn't copy local images when `savedImages` are specified — the images needed manual copy to `assets/wiki/`.

## Collection Now At

- 47 exhibits (up from 44)
- Modalities added: barcode-scanning game input, ASL-to-speech wearable, facial expression as real-time input

## Candidates Evaluated but Not Added

- VersaBraille (1979): Tactile display, overlaps with Kurzweil Reading Machine for accessibility reading
- TORTIS (1974–76): Important but thin documentation, edge of era window
- Synapse Relax (1984): BioMuse covers biofeedback
- Atari Puffer (1982–84): Unreleased prototype, sparse documentation
- Stompin' (1986): NES Power Pad covers foot-pad
- Marble Answering Machine (1992): Concept only, not a hardware artifact
- Petajan Automatic Lipreading (1984–88): CV system, not user-facing interaction paradigm

## Subagents Used

- 6 initial research subagents (hci-research-subagent)
- 3 deep-research subagents (hci-research-subagent)
- 1 image subagent (hci-image-subagent)
- Total: 10 subagent invocations
