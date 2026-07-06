# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision

Wrote one Field Note: **"Drawing Sound: Xenakis and the Machine That Had No Keyboard"** (`docs/blog/drawing-sound.md`)

## Rationale

Reviewed recent additions from the past three curation runs (2026-07-04 through 2026-07-06). The UPIC (1977) stood out as the strongest candidate:

- **Unique interaction model**: Drawing = music. No notation, no keyboard, no code. Radical and not covered by any existing Field Note.
- **Rich story**: Xenakis's 12 years with Le Corbusier, the Philips Pavilion, the same mathematical surfaces appearing in architecture and music, the Acropolis premiere, children composing with no training.
- **Modern anchor**: Aphex Twin's "under 1mb and it shits on everyone" quote bridges the era to today.
- **Philosophical weight**: The system as "an idea with conviction," not a tool with features — aligns perfectly with the museum's voice.

Other recent candidates considered but not chosen:
- Big Trak (1979): Strong story (screenless programming, CMU psychology research) but narrower arc.
- Armatron (1984): Mechanical teleoperation toy, fun but less narratively rich.
- Sega Hang-On (1985): First lean-to-steer arcade — strong but gaming Field Notes already well represented.
- CMU Sensor Frame (1985): Already covered in "the-pinch-that-took-twenty-two-years.md."
- AtariLab (1983): Joystick-port-as-ADC — overlaps thematically with "the-shoe-you-plugged-into-your-computer."

## Verification

- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (84 exhibits + blog + about, 100 pages)
- Output confirmed at `public/blog/drawing-sound/index.html`

