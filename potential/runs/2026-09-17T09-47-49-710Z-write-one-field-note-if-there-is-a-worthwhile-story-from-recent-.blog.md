# Blog Writing Trace — 2026-09-17

## Decision

**One Field Note written.** Subject: Caere Hand-held OCR Wand with Visual Aligner (1980).

## Why this artifact

The Caere OCR Wand was chosen from ~6 unwritten recently-promoted candidates because:

1. **No near-neighbor note.** Its interaction — a continuous visual-to-motor calibration loop where the human adjusts hand geometry in response to a projected light pattern — has ZERO near-neighbor notes. No other exhibit or note involves "the machine teaches your hand to hold it right by showing you light."

2. **Specific competition analysis:**
   - **Linn LM-1** (pad-as-grid): Strong but music HCI is saturated (~9 music notes). The TR-808 note (`the-grid-shown-and-hidden`) already anchors that angle.
   - **Casio VDB-1000** (touchscreen watch): Interaction (finger tap on display) is a variant of the HP-150/Buick GCC touchscreen paradigm. Not distinct enough.
   - **Questron** (hidden-ink IR): Strong, but the interaction (press wand on surface, hear tone) is simpler — the novelty is in the sensing, not the human-machine loop.
   - **Gyricon** (electronic paper): Strange and lovely but the output-mechanism family is growing quickly (Talaria, flip-dot, Visicorder, Palette, 1520). Would add to an already-noted category.
   - **McDonald's Brobeck POS** (menu-as-keyboard): The "register as physical grid of buttons" angle is adjacent to the IBM 5265 note (`the-register-with-the-paper-drum`).
   - **HP-75D / FX-7000G / Amana Touchmatic / Caere Wand** — Caere won because its interaction channel (you learn to match a projected light pattern) is the rarest.

3. **Era texture.** The post highlights a specific beautiful thing: the moment before software accommodation won, when the machine set a firm physical requirement and trusted the human to learn it. This is a real HCI philosophy that died out and the Caere wand is a perfect, specific expression of it.

## Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (264 exhibits + blog + about, 359 pages)
- Wiki and data.ts unmodified (no promotion)
- Note written at `docs/blog/the-light-that-taught-your-hand.md`