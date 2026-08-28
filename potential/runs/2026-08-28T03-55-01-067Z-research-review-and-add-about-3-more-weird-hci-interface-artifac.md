# Beepy scout run — 2026-08-28T03-55

Goal: research, review, and add ~3 more weird HCI interface artifacts from 1976-1992.

## Start state
- Collection: 218 exhibits (grep -cE '^\s{4}id: "' src/data.ts)
- No active (unpromoted) info.json files in potential/
- Memory notes: well is angle-dependent, not structurally empty. Productive recent angles: POS, banking terminals, glass cockpit. Image-blocked angles: braille/tactile displays, portable data terminals, broadcast editing.

## Plan
- Launch 3 hci-research-subagents in parallel, each one focused angle, each max 2 Octen.
- Then verify candidate images via Commons API, build info.json, promote manually, typecheck+build.

## Trace
(work in progress)

## Trace continuation

### Subagents
- Subagent 1 (embodied input): FAILED — planning-loop only, never ran Commons checks, no verified deliverable. Named Spaceball 2003 (overlaps DLR SpaceMouse in collection), Cyberman (no verified image), Videotouch (overlaps Mandala/VIDEOPLACE), WearComp (overlaps EyeTap). Discarded angle entirely.
- Subagent 2 (clinical): Cochlear Nucleus 22 / Mini Speech Processor (1989) — verified CC BY 4.0 images. Utah Arm (myoelectric, overlaps Graupe EMG paradigm). Soundbeam (ALREADY IN MUSEUM — correctly flagged by subagent; discarded).
- Subagent 3 (info appliances): PXL2000 (ALREADY IN MUSEUM), Ascom B8050 QuickFare (1989, PD+CC0 images), Polaroid Digital Palette (1986, CC BY-SA image).

### Selected & promoted
1. Cochlear Nucleus 22 / Mini Speech Processor (1989) — output-to-nervous-system prosthetic; museum's only machine-as-output-sense-organ.
2. Ascom B8050 QuickFare (1989) — self-service kiosk whose notched-card ticket IS the data.
3. Polaroid Digital Palette (1986) — computer color output via RGB filter wheel onto instant film.

### Tool calls used
- Octen: 6 of 7 (subagents). No direct Octen from manager.
- Exa: 0 used.
- Commons API + curl: extensive (image verification + downloads).
- Direct file verification via `file` on all 5 downloaded images.

### Files written
- potential/cochlear-nucleus-22/info.json (archived after promotion)
- potential/ascom-quickfare-b8050/info.json (archived)
- potential/polaroid-digital-palette/info.json (archived)
- src/data.ts: +3 exhibit entries
- docs/hci-wiki.md: ToC +219/220/221, intro count updated to twenty-one, +3 wiki sections
- assets/wiki/: 5 local images

### Verification
- bun run typecheck: PASS
- bun run build: PASS (221 exhibits, 290 pages)
- All 3 new exhibit pages built; local images referenced, no remote hotlinks.

### Decisions
- Discarded Spaceball 2003 (DLR SpaceMouse overlap), Soundbeam (in museum), PXL2000 (in museum), Videotouch (Mandala/VIDEOPLACE overlap).
- Promoted 3 candidates as requested target (~3).
