# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Result: One post written

### Decision process
Recent collection additions (July 25-28) added 10+ new exhibits across telephony, palmtop, plotter, security token, and video capture categories. Of these, several lacked Field Notes:

- Famicom Network System (1988)
- Videoface Digitizer (1986)
- Sharp Wizard OZ-7000 (1989)
- Cambridge Z88 (1987)
- Casio PB-1000 (1987)
- TI Silent 700 (1975)
- Hayes Smartmodem 300 (1981)
- **Commodore 1520 / Atari 1020 Printer Plotter (1983)**
- Rainbow Sentinel Dongle (1984)

The Commodore 1520 plotter was chosen because:
1. **Unique sensory angle:** Physical output as mechanical performance — nothing else in the museum or existing Field Notes covers this. It's about the experience of watching a machine draw.
2. **No existing overlap:** Checked all 34 existing Field Notes — none covers pen plotters or physical output as spectacle.
3. **Rich image assets:** 4 CC-licensed images available in assets/wiki/ (hero shot, Atari variant, mechanism internals, example printout).
4. **Strong narrative arc:** The contrast between slow/audible 1983 output and modern instant/silent output makes a natural blog post.

### Post written
- **File:** `docs/blog/the-printer-that-put-on-a-show.md`
- **Title:** "The Printer That Put On a Show"
- **Slug:** the-printer-that-put-on-a-show
- **Date:** 2026-07-29
- **Description:** "Before every pixel was free and instant, there was a machine that drew in public. The Commodore 1520 plotter turned computer output into a mechanical ceremony you could watch, hear, and wait for."

### Verification
- `bun run typecheck`: PASS
- `bun run build`: PASS (132 exhibits + blog + about, 171 pages)

