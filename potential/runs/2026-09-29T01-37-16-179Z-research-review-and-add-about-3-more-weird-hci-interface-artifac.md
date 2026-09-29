# Run: research-review-and-add ~3 weird HCI artifacts (2026-09-29)

Started Tue Sep 29 01:37 UTC 2026

## Setup
- Collection: 280 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 280).
- Wiki: 285 sections (^## ), ToC ~280 entries.
- No active info.json in potential/ (all archived).
- Found: `potential/scanset-xl/` has an image staged (scanset-xl.jpg, 131KB) but NO info.json and NOT in collection — flagged as strong candidate on 09-28 (network terminals angle) but never promoted.

## Plan
1. Verify Scanset XL (1982) as a ready candidate — research it, build info.json, promote.
2. Launch 3 hci-research-subagents on fresh, unexplored angles to find 2+ more candidates.
3. Filter candidates, build info.json, promote strong ones manually (promote-potentials.ts has known bugs).
4. Verify typecheck + build.
5. Update memory + summary.

## Log (appended as work proceeds)

## Subagent results (3 parallel, all completed)
- Angle 1 (home exercise HCI): ExerVision Bike Trainer (1985, prototype/ROM-only) = commercially-odd but prototype, no shipped hardware. CompuTrainer (1986, real product, reflexive resistance) but image unverified. Not promotable without clean images.
- Angle 2 (handheld reference): Rand McNally codebook translator + Talking Hexaglot + TI Language Translator — all image-unverified. Strong interactions but no clean images.
- Angle 3 (lab instruments): Tektronix 11401 (1986) touchscreen oscilloscope = strong interaction, images on TekWiki (not clean Commons). HP 64000 (1979) soft-key reconfigurable-front-panel dev system = clean Commons images (4 files).

## Scanset XL verification (direct research, no Octen — budget exhausted)
- Commons file: File:Scanset XL Terminal.jpg, CC BY-SA 4.0, staged image at potential/scanset-xl/images/scanset-xl.jpg (1280x956, verified JPEG).
- UPI Dec 15 1982: Scanset XL by Tymshare Inc (Cupertino CA), $895. Telephone+computer-terminal convergence device. Plugs into phone jack, access to 1000+ databases. Features: automatic speed dialing, simultaneous phone+data for conference calls with displays (charts/forecasts), 4 cursor controls, 6 multifunction buttons above keyboard labeled at bottom of screen (soft keys), smaller-than-typewriter keyboard, 15 lbs.
- Distinct interaction: consumer "personal information terminal" fusing telephone and screen, with on-screen-labeled soft keys — museum's first telephone-computer convergence terminal.

## Decisions
- Promote Scanset XL (1982) — ready candidate, staged image, distinctive consumer telephone-terminal + soft keys.
- Evaluate HP 64000 (1979, soft-key front panel) and Tektronix 11401 (1986, touchscreen scope) for 2nd/3rd slots — verify images.

## Promotion (manual, promote-potentials.ts NOT run — known data.ts regex + image-copy + ToC bugs)
Three candidates promoted:
1. Scanset XL (1982) — image assets/wiki/scanset-xl-terminal.jpg (CC BY-SA 4.0, staged image copied).
2. HP 64000 Logic Development System (1979) — assets/wiki/hp64100a-logic-development-system.png (CC BY-SA 4.0) + hp64000-rack.jpg (CC BY 2.0).
3. Tektronix 11401 Digitizing Oscilloscope (1986) — assets/wiki/tektronix-11403-touchscreen-scope.jpg (vintageTEK museum photo, attribution).
Edits: src/data.ts (3 exhibit entries before closing `];`), docs/hci-wiki.md (3 sections + 3 ToC entries + intro count 280->283).
Info.json files created at potential/scanset-xl/info.json, potential/hp-64000-logic-development-system/info.json, potential/tektronix-11401-touchscreen-oscilloscope/info.json.
