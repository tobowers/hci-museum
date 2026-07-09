# Run Summary

**Run:** 2026-07-09T04-14-20-819Z  
**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992  
**Status:** COMPLETE — 3 artifacts promoted to collection

## What Changed

### Artifacts Added to Collection (3)

1. **Coleco Telstar Arcade (1977)** — Triangular dedicated home console where the physical form IS the interface. Rotate the entire 16-inch triangular console to switch between steering wheel, light gun, and paddle controllers. Triangular cartridges contain the CPU itself (MOS MPS-7600). Designed by Sanders Associates engineers under Ralph Baer's supervision. Only 4 cartridges released. Images from Wikimedia Commons (CC BY-SA 4.0).

2. **Lucasfilm EditDroid (1984)** — Pioneering non-linear film editing system that introduced the timeline, picture icons, and three-panel layout. Custom TouchPad controller with KEM-style jog/shuttle knob, trackball, and 12 context-sensitive LED-labeled soft keys. Only 24 units made at $150,000 each by Lucasfilm's Computer Division (which would become Pixar). Technology sold to Avid in 1993. Images from Lucasfilm official site and CineMontage.

3. **Atari Puffer (1983)** — Unreleased exercise bike game controller from Alan Kay's Atari Research Group. Hall effect sensor read pedaling speed (no pedaling = no motion), handlebar buttons provided steering, optional heart-rate monitor. Four custom games developed including Tumbleweeds and Jungle River Cruise. Canceled weeks before planned 1984 Olympics tie-in launch when Tramiel bought Atari. Images from Jim Leiterman's personal site and AtariProtos.

### Files Written
- `potential/coleco-telstar-arcade/info.json.archived` — Research data
- `potential/editdroid/info.json.archived` — Research data
- `potential/atari-puffer/info.json.archived` — Research data
- `potential/runs/2026-07-09T04-14-20-819Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Trace
- `potential/runs/2026-07-09T04-14-20-819Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — This file

### Files Modified
- `src/data.ts` — Added 3 new exhibit entries (lines after Bandai Terebikko)
- `docs/hci-wiki.md` — 3 new wiki sections appended by script; image paths updated to local; ToC updated; intro text updated from "ninety" to "ninety-five"

### Images Downloaded
- `assets/wiki/telstar-arcade-paddle.jpg` (6.5 MB, Wikimedia Commons, CC BY-SA 4.0)
- `assets/wiki/telstar-arcade-overview.jpg` (904 KB, Wikimedia Commons)
- `assets/wiki/editdroid-team.jpg` (818 KB, Lucasfilm)
- `assets/wiki/editdroid-console.jpg` (700 KB, Lucasfilm)
- `assets/wiki/atari-puffer-controller.jpg` (5.7 KB, Jim Leiterman)
- `assets/wiki/atari-puffer-tumbleweeds.png` (9 KB, AtariProtos)

## Verification
- `bun run typecheck` — PASSED
- `bun run build` — PASSED (95 exhibits + blog + about, 113 pages)

## Alternates Not Promoted
- Discs of Tron Environmental (1983) — 3-axis push/pull/rotate spinner, strong candidate
- Touch Talker (1984) — First portable Minspeak AAC, fills AAC gap
- La Plume (1988) — Breath-controlled virtual feather, art installation
- Varie Top Rider (1988) — Inflatable motorcycle controller for Famicom
- EPCOT WorldKey (1982) — First touchscreen kiosk network with video calling

## Notes for Future Runs
- The `promote-potentials.ts` script still has the known data.ts bug (regex mismatch). Manual data.ts edits are required after every promotion.
- EditDroid images from Lucasfilm.com are not freely licensed but are published on their official news site for editorial/historical use. Consider this a gray area for museum use.
- Atari Puffer images from atarihq.com are hotlink-protected (403) — use leiterman.com and atariprotos.com as image sources instead.
