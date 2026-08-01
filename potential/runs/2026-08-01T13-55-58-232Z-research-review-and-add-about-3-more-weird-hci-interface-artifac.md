# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Plan (13:55 UTC)

State: 146 exhibits in data.ts, wiki ToC 146 entries / 150 sections. Well is thin at 146; recent runs (07-22..07-31) returned mostly already-in-museum or image-blocked candidates. Octen budget this run: 7 total shared (6 for subagents at 2 each, 1 reserved for me). Exa budget: 2, prefer to leave unused.

Chosen angles (fresh device classes, targeting interaction-model richness + plausible CC image availability):
1. First handheld electronic games & cartridge handheld consoles with novel hardware input (1976-1983) — Milton Bradley Microvision (1979), Mattel Auto Race (1976), Intellivision disc controller (1979), Game & Watch, Merlin. Commons-rich (Evan-Amos set).
2. Sonic/ultrasonic/spark digitizing & sound-based computer input (1977-1986) — Science Accessories Grafbar, sonic pens, acoustic digitizers. Weird physics (sound-as-position-sensor).
3. Tactile/plug/token-based physical programming & input for education/toys (1976-1988) — Fischertechnik Computing (1984), TI Touch & Tell, Quiz Wiz, plug-board programming devices.

Launch 3 hci-research-subagents in parallel with 2 Octen searches each.

## Subagent results (14:00 UTC)

### Angle 1 — Handheld games (subagent ses_0425faaf8ffe...)
- **Milton Bradley Microvision (1979)** — STRONGEST. First cartridge handheld. Each cartridge carries its own CPU (Intel 8021/TI TMS1100) + printed plastic overlay that relabels the fixed 12-key keypad + rotary paddle per game. Console itself is dumb (no onboard CPU). Designed by Jay Smith (Smith Engineering, later Vectrex). $49.99, ~discontinued 1981. Satoru Okada credited it as Game Boy inspiration. ESD "screen rot" failure lore. Near-duplicate flag: Coleco Telstar Arcade (in museum) also put CPU in cartridges — position as handheld instance + overlay-relabeling mechanism. **PD images on Commons (Evan-Amos): Milton-Bradley-Microvision-Handheld-FL.jpg, Milton-Bradley-Microvision-Cartridge-Exposed.jpg (cartridge w/ exposed CPU), Milton-Bradley-Microvision-Cartridge-Motherboard.jpg, Casing-Open-02 (screen rot), BL.jpg, Block Buster gameplay svg.**
- **Mattel Intellivision control disc (1979)** — STRONG. 16-direction pressure-sensitive disc + 12-key keypad + sliding per-game overlays. Pre-D-pad; Electronic Games 1983 "first game controller with a directional thumb pad." David Chandler led controller team. CC BY-SA 3.0 image (Intellivision-Controller.jpg). "Pressure-sensitive" descriptor not in primary sources — flag.
- **Mattel Auto Race (1976)** — MODERATE. First solid-state handheld; gear-shift + lane toggle; George J. Klose (Mattel), Mark Lesser (Rockwell, B6000 chip, 512-byte code). PD image MAutoRace.jpg. Input is simple switches; novelty = category-first.
- Merlin (1978) — moderate; buttons-as-display but Simon overlap. Game & Watch — rejected (display novelty, not input).

### Angle 2 — Sonic digitizers (subagent ses_0425f8a8dffe...)
- **Science Accessories Corp (SAC) Graf/Pen / Grafbar sonic digitizer (1971–1990s)** — STRONGEST. Canonical "sound-is-the-position-sensor": spark-emitting ballpoint pen (tungsten whisker across barium titanate collar) + two strip mics triangulate position from sound transit time. No tablet surface, no resistive grid. US Patent 3,626,483 "Spark Pen" (filed 1969, granted 1971; Whetstone, Fine, Banks, Phillips). Harvard "Sonic Pen Digitizer" lineage (Brenner & deBruyne, OSTI 4725785, 1969/70). GP-Series 6 (1977 brochure): L-frame electret mics, up to 72"x72", 0.1mm res, 140 pts/sec, RS-232/IEEE-488, 18–28°C ambient spec (temp sensitivity is the weird-physics hook). GP-8 (1980s, microcomputer hosts), GP-8-3D (X,Y,Z), SIGGRAPH exhibitor 1979-94. Used by SDC 1971 handwriting-for-math recognition; Wipke & Whetstone 3D digitizing 1971; cited by Bishop & Fuchs Self-Tracker 1984. **ZERO Commons images.** Usable: patent drawings (PD, patentimages.storage.googleapis.com/US3626483.pdf), 1971 graf/pen brochure + 1977 GP-Series 6 brochure scans on archive.org (Ted Nelson's Junk Mail collection; copyright-era, fair-use). "Sonic Pen for Apple II" claim unverified (conflation). No price/units.
- deBruyne "Acoustic Radar" (1980-82) — weak, prototype only.
- Rejected: Noise Mouse (Display Interface Corp, strain gauges), Ohm/D-MAC sonic pens (myths), IBM Speed Pen (1975 TDB, tangential).

### Angle 3 — Tactile/physical programming (subagent ses_0425f6b5fffe...)
- **fischertechnik "Computing" premise REJECTED** — kit 30554 (1985) is a home-computer parallel interface kit programmed in BASIC from Apple II/C64, NOT plug-pin programming. Don't use.
- **TI Touch & Tell (1981; Wikipedia says 1978, datamath.org says 1981, patent filed Oct 1980)** — STRONG. Speak & Spell family's no-keyboard sibling: lay a coded picture-card overlay on a pressure-sensitive pad; rim switches read edge-punched code apertures that reselect word library + remap touch zones. Basic/Learn/Attribute modes ("Can you find the blue car?"). US Patent 4,403,965 (William R. Hawkins, TI, filed 1980-10-01). CD2802 speech chip exclusive to T&T. $38.25 (1992 list), libraries $17.95. Lineage: Touch & Discover (1984, Disney voices), Super Speak & Read (1988), Vocaid (AAC!). **ZERO Commons images.** Patent drawings PD (patentimages.storage.googleapis.com/US4403965-drawings-page-3.png etc.); datamath photos non-free.
- Coleco Quiz Wiz — REJECTED (1980 not 1977; keypad + ROM carts; keypad-with-lights).

## Decisions (14:05 UTC)
Promote 3:
1. **Microvision (1979)** — PD Commons images, handheld-console gap, cartridge-as-CPU + overlay-relabeling interaction.
2. **SAC Graf/Pen Grafbar sonic digitizer (1970s–80s)** — weirdest physics, patent drawings as primary image (PD), brochure scans as media.
3. **TI Touch & Tell (1981)** — token-card + touch-surface interaction (tangible UI precursor), patent drawings as primary image.

Notes: Grafbar originated 1971 (outside window) but sold through 1980s (GP-6 1977, GP-8 1980s) — frame as 1970s–80s like TI Silent 700/VIDEOPLACE entries. Patent drawings accepted as primary images per Stompin'/Drawing Prism precedent.


## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:354:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:192:26)\n    at processTicksAndRejections (native:7:39)"
}
```

## Recovery Check: bun run typecheck

Result: PASS

```text
$ tsc --noEmit
```

## Recovery Check: bun run build

Result: PASS

```text
Built static site to /home/runner/work/hci-museum/hci-museum/public (146 exhibits + blog + about, 188 pages)
$ bun scripts/build-site.ts
```
