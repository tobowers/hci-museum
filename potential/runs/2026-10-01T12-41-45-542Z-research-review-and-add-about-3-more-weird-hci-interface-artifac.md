# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Start state
- Collection: 283 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 283). Wiki ToC has 239 entries (pre-existing lag from runs where ToC wasn't updated; known gotcha).
- potential/: 0 active info.json files (all archived). No ready candidates from prior aborted runs.
- No promotion script use (known bugs: data.ts regex, image copy, ToC). All promotion manual.

## Strong leads from the aspirational 09-28/10-01 trace (never actually committed — verified absent from src/data.ts)
1. **Culver Isopoint / rolling-bar pointing device (1986–1988, Craig F. Culver)** — three-axis thumb surface (roll + slide + force on one contact), first keyboard-embedded isometric pointer, ancestor of IBM TrackPoint. PD US patents.
2. **Tomytronic 3D (1983, Tomy)** — handheld binocular stereoscopic viewer, twin LCD panels lit by ambient light; depth materializes only through the embodied binocular posture. CC BY-SA 2.0 images + PD patents.
3. **Aston Ethos / Aston 4 character generator keyboard (c.1990, Aston Broadcast Systems)** — dedicated broadcast CG operator keyboard with integrated trackball. CC BY 2.5 image.

## Plan
1. Launch 3 research subagents: (A) validate Culver Isopoint + scout isometric/force pointing, (B) validate Tomytronic 3D + scout handheld embodied-viewer games, (C) validate Aston Ethos + scout broadcast/professional trade terminals.
2. Verify every candidate against src/data.ts (subagents don't honor exclusion lists).
3. Build potential/<slug>/info.json for strong candidates with CC/PD images.
4. Promote manually: images → assets/wiki/, edit docs/hci-wiki.md (ToC + sections), edit src/data.ts.
5. Verify typecheck + build.
