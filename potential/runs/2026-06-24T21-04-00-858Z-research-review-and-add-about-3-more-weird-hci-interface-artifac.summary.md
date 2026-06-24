# Run Summary — 2026-06-24T21-04

## Goal
Research, review, and add about 3 weird HCI interface artifacts from 1976–1992.

## What changed

### Added to the museum collection (3 artifacts)

1. **Fairlight CMI (1979)** — The first digital sampling synthesizer with a light pen interface for drawing sound waveforms on a CRT. Built by Peter Vogel and Kim Ryrie in Sydney. Only ~300 units made, priced £15K–£30K. Used by Peter Gabriel, Kate Bush, Herbie Hancock, Art of Noise. The light pen predated the commercial mouse; Page R invented the visual pattern-grid sequencer used by every modern DAW. Fills a major collection gap: no music HCI interfaces.

2. **Konami LaserScope (1990)** — A $39.95 voice-activated head-mounted targeting device for the NES. Headset with crosshair eyepiece, boom microphone (sound threshold, not speech recognition), and light gun sensor. You shouted "Fire!" to shoot. Only 5K–10K units produced; a legendary failure. Every design choice created friction: mic triggered on any loud noise, head-aiming caused neck fatigue, and you still needed a regular Zapper plugged in. A prescient but tragic combination of HUD, voice, and head-tracking in a consumer wearable.

3. **NES Power Pad (1988)** — A full-body floor mat controller with 12 pressure sensors, originally Bandai's Family Trainer (Japan, 1986). Sold ~500K units in North America. Players ran in place, jumped, and stomped to control games. Direct ancestor of DDR, Wii Fit, and Kinect. Pioneered exergaming. The recalled launch title Stadium Events is the rarest licensed NES game ($41K+ at auction). Fills the full-body exertion gap in the collection.

### Declined for this batch
- **Quantel Paintbox (1981)** — Rich and well-sourced, but overlaps category-wise with existing stylus/tablet devices (KoalaPad, Bit Pad, GRiDPad).
- **SynthAxe (1985)** — Fantastically weird (<100 units, CHM "curator's wish"), but adding two music HCI artifacts in one batch felt excessive. May revisit in future.

### Files written
- `potential/fairlight-cmi/info.json`
- `potential/konami-laserscope/info.json`
- `potential/nes-power-pad/info.json`
- `potential/runs/2026-06-24T21-04-00-858Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

### Files modified
- `docs/hci-wiki.md` — Appended three exhibit sections, updated intro (15→29 projects) and ToC (entries 16–29 added)
- `src/data.ts` — Three new exhibit data entries with image references and metadata
- `docs/beepy-memory.md` — Updated
- `potential/runs/2026-06-24T21-04-00-858Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Live trace updated

## Verification
- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (29 exhibits + blog + about, 33 pages)

## Research method
- Launched 5 parallel `hci-research-subagent` tasks via Exa search, Wikipedia, and web fetches
- All 5 candidates returned deep, well-sourced reports with image URLs
- Selected 3 best for category diversity, source quality, and "strange/embodied" fit

## Collection now
29 exhibits spanning 1976–1992, covering VR, gesture, brain control, voice, wearable computing, full-body exertion, music HCI, robots, mobile computing, pen/tablet computing, and assistive technology.

## Still needs review
- SynthAxe and Quantel Paintbox remain high-quality candidates worth revisiting in future runs
- No haptic/tactile feedback devices yet in the collection (a gap to fill next time)
