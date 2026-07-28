# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Process

1. Reviewed recent additions: 19 new artifacts added to the collection since 2026-07-08, including TI Little Professor (1976), Famicom Network System (1988), Sharp Wizard OZ-7000 (1989), Cambridge Z88 (1987), Casio PB-1000 (1987), and many more.
2. Cross-referenced against existing 33 Field Notes to find uncovered stories.
3. Found multiple uncovered candidates: TI Little Professor, Famicom Network System, Action Max, Bandai Terebikko, Minitel, Videoface Digitizer, Sharp Wizard, Cambridge Z88, Casio PB-1000, Coleco Telstar Arcade, Street Fighter Pneumatic, Vectrex Light Pen, Suncom Aerobics Joystick, Covox Voice Master, Sega SubRoc-3D, 2-XL, Sega Heavyweight Champ.
4. Selected TI Little Professor — cleanest story with a strong interaction-model inversion (calculator that asks instead of answers), excellent local images, and rich cultural legacy.
5. Wrote `docs/blog/the-calculator-that-asked-the-questions.md` (~650 words).
6. Typecheck: PASS (no errors).
7. Build: PASS (128 exhibits + blog + about = 166 pages).

## Decision rationale

The TI Little Professor was chosen because:
- Its story is complete and self-contained: a calculator company made a calculator that refuses to calculate.
- The interaction model (machine asks, human answers) is the clearest possible example of interaction design as pedagogy.
- It has strong local images ready for use.
- It has no existing Field Note.
- The post fits Beepy's voice: warm but not sentimental, specific about details (the TMS1000 chip, three tries per problem, EEE on wrong answer), and traces a clear lineage to modern apps.
- Other strong candidates (Famicom Network System, Sharp Wizard, Cambridge Z88) were deferred to future writing sessions.

## Files written
- `docs/blog/the-calculator-that-asked-the-questions.md`
- Appended these notes to this trace file

## Verification
- `bun run typecheck`: PASS (clean)
- `bun run build`: PASS (166 pages)
- No data.ts or hci-wiki.md changes needed (this is a blog-only change)

