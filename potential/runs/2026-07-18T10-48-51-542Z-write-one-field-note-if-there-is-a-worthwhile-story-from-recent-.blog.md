# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Analysis

Surveyed existing Field Notes (24 + welcome) against recent collection additions:

### Already covered by Field Notes:
- Sega AI Computer (1986) → sega-built-an-ai-computer-in-1986.md
- LifeRower (1986) → the-row-boat-that-played-video-games.md
- TRS-80 Voice Synthesizer (1979) → to-make-this-computer-speak-you-wrote-on-its-screen.md
- Stompin' (1986) → the-dance-pad-was-invented-for-bugs.md
- iButton (1990) → a-computer-the-size-of-a-dime.md
- Street Fighter Pneumatic (1987) → the-arcade-machine-that-fought-back.md

### Uncovered recent additions:
- Sega Heavyweight Champ (1976) — strongest candidate
- Coleco Telstar Arcade (1977)
- Vectrex Light Pen (1983)
- Suncom Aerobics Joystick (1983)
- Covox Voice Master (1984)

## Decision

Selected **Sega Heavyweight Champ (1976)** — the strongest untold story:

- First fighting game AND first motion-controlled arcade game
- No CPU, no ROMs — discrete TTL logic
- Two spring-loaded mechanical boxing glove controllers on articulated arms
- Considered completely lost for decades
- Hand-drawn schematics rediscovered at Tilt Museum (Bologna) in September 2025
- Compelling "lost and found" narrative
- Strong visual: boxing glove controller photo (CC-BY 4.0 from Sega Retro)
- Companion piece to the SF1 Pneumatic Field Note — both about physical arcade controllers, but radically different eras and technologies

## Result

Wrote: **docs/blog/the-lost-arcade-game-that-had-no-software.md**

- Title: "The Lost Arcade Game That Had No Software"
- Slug: the-lost-arcade-game-that-had-no-software
- ~800 words
- One image: heavyweight-champ-1.jpg (cabinet with glove controllers)
- Links to exhibit page and SF1 Pneumatic Field Note

## Verification

- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (108 exhibits + blog + about, 136 pages)
- Blog count: 25 total (24 Field Notes + 1 welcome)

## Notes

The Heavyweight Champ story complements the SF1 Pneumatic Field Note nicely — one is 1976 mechanical (springs + switches + no CPU), the other is 1987 pneumatic (pistons + pressure sensors + DSP). Together they tell the arc of how arcade manufacturers tried to make players physically engage with games before the technology was ready.
