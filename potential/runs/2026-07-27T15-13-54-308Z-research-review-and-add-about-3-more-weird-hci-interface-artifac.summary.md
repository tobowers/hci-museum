# Run Summary: 2026-07-27

## What Changed
- 3 new exhibits added to the museum collection
- Build: 125 exhibits, 161 pages (up from 122)
- Typecheck: PASS

## Artifacts Added

### 1. Famicom Network System / Famicom Modem (1988)
- Nintendo/Nomura Securities/NTT dial-up modem for Famicom
- Interaction model: game console as financial information terminal
- 130,000 units shipped. Stock trading, home banking, horse-race betting
- 3 PD/CC0 images from Wikimedia Commons (Evan-Amos set)

### 2. Videoface Digitizer (1986)
- Data-Skip/Romantic Robot real-time video frame capture for ZX Spectrum
- Interaction model: analog video → grayscale digitized frames at ~4 fps
- £69 at launch. Physical contrast knob as sole control
- 1 CC-BY-SA 4.0 image from Wikimedia Commons

### 3. TI Little Professor (1976)
- Texas Instruments' first electronic educational toy
- Interaction model: backwards calculator — machine asks, human answers
- Under $20. Over 1 million units sold in 1977
- 2 CC images from Wikimedia Commons

## Files Written
- `potential/famicom-network-system/info.json`
- `potential/videoface/info.json`
- `potential/little-professor/info.json`
- `assets/wiki/famicom-modem-attached.jpg`
- `assets/wiki/famicom-modem-controller.jpg`
- `assets/wiki/famicom-modem-horse-betting.jpg`
- `assets/wiki/videoface.jpg`
- `assets/wiki/little-professor-booklet.jpg`
- `assets/wiki/little-professor-vintage.jpg`
- `potential/runs/2026-07-27T15-13-54-308Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-07-27T15-13-54-308Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Files Edited
- `docs/hci-wiki.md` (3 wiki sections appended, ToC updated, count updated)
- `src/data.ts` (3 entries added before closing bracket)
- `docs/beepy-memory.md` (this run's summary appended)

## Verification
- `bun run typecheck`: PASS (0 errors)
- `bun run build`: SUCCESS (125 exhibits + blog + about, 161 pages)

## What Still Needs Review
- All 3 additions should be spot-checked in the live/development site
- Each wiki entry's anchor link should be tested from the ToC
- Image quality should be verified at display resolution

## Stale Cleanup
- 3 info.json files archived: cracklebox, novation-cat, topo (from previous run)
- No new stale files created this run
