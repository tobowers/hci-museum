# Run Summary: 2026-07-07T15-15-47-964Z

## What changed

Added 3 new artifacts to the HCI Museum collection, bringing the total from 87 to 90 exhibits.

## Artifacts added

### 1. Butler in a Box (1983)
First voice-controlled home automation system. Created by professional magician Gus Searcy and ex-IBM programmer Franz Kavan. Pioneered the wake-word-plus-command interaction model 30 years before Alexa. Speaker-dependent speech recognition, X10 home control, 4 user voice profiles, 256 functions. Priced at $1,495. Smithsonian artifact. Used by William Shatner, displayed at Epcot's Future House.

### 2. Gibson Light Pen System / LPS II (1981)
Professional-grade light pen for the Apple II by Steve Gibson (who worked at Stanford AI Lab at age 15, later created SpinRite and co-hosts Security Now!). Slot 7 interface card with 1:1 absolute positioning on the CRT. $250. Sold to Atari, rights recovered, licensed to Koala Technologies. Finest light pen for any 8-bit microcomputer.

### 3. Versatron Footmouse (1985)
First commercially available foot-operated computer cursor controller. Keyboard-wedge device (not a serial mouse) that injected cursor-key scan codes when the user slid their foot across the surface. Built by Versatron Corporation — a defense contractor whose main products were actuators for Stinger missiles and Excalibur artillery shells. The footmouse was their only consumer product. CHM specimen.

## Files written

- `potential/versatron-footmouse/info.json`
- `potential/gibson-light-pen/info.json`
- `potential/butler-in-a-box/info.json`
- `assets/wiki/versatron-footmouse-1.jpg` (1365x1600)
- `assets/wiki/versatron-footmouse-2.jpg` (1486x728)
- `assets/wiki/gibson-light-pen-1.jpg` (158x164)
- `assets/wiki/gibson-light-pen-2.jpg` (158x164)
- `assets/wiki/gibson-light-pen-3.jpg` (250x250, downloaded but unreferenced)
- `assets/wiki/butler-in-a-box-1.jpg` (780x1073)
- `assets/wiki/butler-in-a-box-2.jpg` (780x587)

## Files edited

- `docs/hci-wiki.md` — Added 3 new exhibit sections (lines 4439–4565), updated ToC (entries 88-90), updated intro count, fixed all image paths to local
- `src/data.ts` — Added 3 new exhibit entries

## Verification

- `bun run typecheck`: PASSED
- `bun run build`: PASSED (90 exhibits, 107 pages, no warnings)

## Still needs review

- Polar Sport Tester PE 2000/PE 3000 (1982-83): Strong candidate for wearable biosensing but working image URLs not found. CPHR museum and ccapitalia both return 403. Bike-Magazin article may have embedded images.
- Gibson light pen ad images are very small (158x164) — acceptable for the era (1980s magazine ads) but larger images would improve the exhibit page.
- Third Gibson image (gibson-light-pen-3.jpg, sealed box photo at 250x250) downloaded but not wired into wiki or data.ts.
