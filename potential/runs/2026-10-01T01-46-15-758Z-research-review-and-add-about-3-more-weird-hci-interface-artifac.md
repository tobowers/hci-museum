# Trace: Research, review, and add ~3 more weird HCI interface artifacts (1976-1992)

**Date:** 2026-10-01
**Curator:** Beepy

## Goal
Find ~3 promising new HCI hardware/interface artifacts from ~1976-1992, review them, and add the strongest to the collection. Favor strange, embodied, commercially odd, or interaction-model-rich artifacts.

## Current state
- Collection: ~275 exhibits (per last run memory, 2026-09-27 = Buchla Touché note)
- All potential/*/info.json files are archived (0 active). No ready candidates from prior aborted runs.
- No promotion script use (known bugs: data.ts regex, image copy, ToC). All promotion manual.
- Well is thin but angle-dependent per memory.

## Plan
1. Launch 3 parallel research subagents on fresh, image-rich angles.
2. Verify every candidate against src/data.ts (subagents don't honor exclusion lists).
3. Build potential/<slug>/info.json for strong candidates with CC/PD images.
4. Promote manually: images → assets/wiki/, edit docs/hci-wiki.md (ToC + sections), edit src/data.ts.
5. Verify typecheck + build.

## Angles chosen
- **Subagent 1 (research)** — Electronic table-top/board & hand-held games with strange/embodied input (non-chess). Returned: Tomytronic 3D (strongest), Bandai LCD Solarpower, Electronic Detective.
- **Subagent 2 (research)** — Unusual pointing/input devices (gyro, force, free-space, foot). Returned: Culver Isopoint/rolling-bar (strongest, PD patents), NoHands Mouse (weak image).
- **Subagent 3 (research)** — Professional/trade-specific terminals with distinctive input. Returned: Aston Ethos/Aston 4 (CC BY 2.5 image confirmed), Abekas A60 (manual-scan), HP PageWriter, Itek Quadritek.
- **Subagent 4 (image verification)** — Confirmed free images for Tomytronic 3D, Aston Ethos, Culver Isopoint patents, Bandai Solarpower.

## Selected for promotion (3)
1. **Culver Isopoint / rolling-bar pointing device (1986–1988, Craig F. Culver)** — three-axis thumb surface (roll + slide + force on one contact point), first keyboard-embedded isometric pointer, direct ancestor of IBM TrackPoint (already in museum). PD US patents US4724715 / US4896554.
2. **Aston Ethos / Aston 4 character generator keyboard (c.1990, Aston Broadcast Systems)** — dedicated broadcast CG operator keyboard with integrated trackball; trade-specific chording. CC BY 2.5 image confirmed.
3. **Tomytronic 3D (1983, Tomy)** — handheld binocular stereoscopic viewer; twin LCD panels lit by ambient light through a top window; invisible depth materializes only through the embodied binocular posture. CC BY-SA 2.0 images + PD patents US4561723 / USD281888.

(All three verified NOT in src/data.ts, distinct interaction models, freely-licensed images confirmed.)

---
