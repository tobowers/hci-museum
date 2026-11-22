# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (2026-11-21)
- Repo state: HEAD `43ed084` (merge PR #481), clean except this trace.
- `src/data.ts` exhibit count: 326. Blog posts: 141. Archived potentials: 326.
- Active `potential/*/info.json`: NONE — no ready leftovers from a prior aborted run.
- Memory read; notable open threads: none un-noted in collection (the long "un-noted" backlog is empty as of 2026-11-20).
- Plan: 3 parallel research subagents on angles NOT exhausted per memory. Memory says these are dry: kiosk/POS, lab instruments (image-blocked), industrial PLC (image-blocked), music/expressional controllers, digitizers (Summagraphics rebadge trap), braille tactile, home automation, scanning/OCR, answering machines, fax, marine.
- Chosen fresh angles (deliberately left-field):
  A. Veterinary / agricultural / animal-facing computer interfaces (livestock ID, milking parlour, feed-mix control, animal-tracking).
  B. Accessibility/assistive input NOT in collection: switch-scanning, single-switch, gas-puff, attending/communication boards with electronics, mobility joystick trainers.
  C. Toy/game peripheral "physical compute" weirdness: light-based, sound-based, mechanical-digital hybrids not covered.
- Octen budget: 7 shared. Giving each subagent 2 (6 total), reserving 1 for manager validation.

## Subagent round 1 results
- Angle A (animal/agricultural): FAILED — returned empty result ("================"), no candidates. No Octen evidence used.
- Angle B (assistive input): no promotable artifact. TDD/TTY (ACC/Epson portable) surfaced with strong PD Commons images (ACC-TDD-*.JPG, PD-author Engicoder) — but interaction is a QWERTY keyboard + acoustic cups + Baudot, effectively a teletype in a phone shell; the museum already has Novation CAT / TI Silent 700 / Mufax for acoustic-coupling ritual. Weak distinctness. Critically-damped scanner + Neil Squire sip-puff = patent/one-off, image-blocked.
- Angle C (odd mechanics): 2 image-verified candidates:
  1. **Suncom Joy Sensor (Oct 1983)** — capacitive touch-pad "joystick": stroke an 8-direction printed ring pad with a thumb, no stick at all. `File:Suncom Joy Sensor.png` CC BY 4.0 Commons (VGHF scan of Video Game Update Oct 1983). ← PROMISING (touch-as-direction, pre-trackpad)
  2. **Kraft Premium Joystick (1982-83)** — RC-aircraft gimbal mechanics transplanted into a home computer joystick. `File:Kraft Premium Joystick.png` PD ad scan; `File:Kraft KC 3.jpg` CC BY-SA 4.0 photo. ← PROMISING but interaction may be "good conventional joystick", weaker.
  3. Magstick (1983, magnetic centering) — IMAGE-BLOCKED.
  4. Power Pad — ALREADY IN MUSEUM (subagent missed exclusion list, 3rd time).

## Triage (manager verification against src/data.ts + docs/beepy-memory.md + docs/blog/)
- Kraft Premium Joystick: REJECTED. Title/description on Commons is "a joystick for the Atari 2600" — interaction model = ordinary self-centering 8-way stick with a fire button. Museum already has ~15 joystick-class entries (Naomi grip, Bally pistol grip, Channel F twist-cap, Fairchild, Coleco, Arkanoid spinner-ish, Coleco Super Action roller). "RC gimbal lineage" is a materials story, not an interaction story. Also memory records the "Kraft" theme is saturated.
- Nintendo Power Pad: ALREADY IN MUSEUM (confirmed; subagent already admitted it).
- Suncom Joy Sensor (Oct 1983): ACCEPTED for build. Interaction: no lever at all — an 8-direction *printed* direction ring under a capacitive touch pad, held slab-style and *stroked* by the opposite thumb; diagonals by somewhere-between-zones; top-face touch pads for fire; a slide switch physically removes diagonals. This is touch-as-direction with **no null zone and no continuous rotation** → cleanly distinct from `turbo-touch-360` (1992, octagonal 8-sensor plate WITH a central null zone, sold as medicine) and from `synthesizer-touchplate` capacity keyboards. Also a Suncom-family neighbour to `suncom-aerobics-joystick` — same company, opposite philosophy (exertion-controlled vs. touch-controlled).
- Image: `File:Suncom Joy Sensor.png` — 488×481 PNG, CC BY 4.0, VGHF scan of The Video Game Update Vol. 2 no. 7 p.104 (Oct 1983). Small but legible; it is a period product scan, acceptable per precedent (magazine-scan images used before, e.g. Houston HIPAD / Suncom Aerobics ANTIC scans).

## Decision
- Promote only 1 of the 3 requested (1/3). Angles A and B were dry; angle C yielded 1 promotable artifact. Do not pad.
- Next: build potential/suncom-joy-sensor/{info.json,images}, then promote manually.
