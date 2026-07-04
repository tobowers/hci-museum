# Run Summary — 2026-07-04 Research & Add 3 Artifacts

## What changed

### Artifacts added to collection (3)

1. **Sega Hang-On (1985)** — First arcade game to use full-body lean as primary control input. Yu Suzuki's motorcycle-shaped deluxe cabinet launched Sega's "taikan" (body sensation) movement. ~20,000 units sold, highest-grossing arcade game of 1985 (US) and 1986 (US & Japan). Interaction model: proprioceptive leaning → steering. Team: Yu Suzuki, Masaki Matsuno, Hiroshi Kawaguchi, Yoji Ishii.

2. **CMU Sensor Frame (1985)** — The multi-touch system where pinch-to-zoom was born. Paul McAvinney repurposed DRAM memory chips as optical sensors to track three fingers simultaneously. Steve Jobs visited and signed an NDA in October 1985. NASA funded a 3D variant (Sensor Cube). Never commercialized. Canonical gesture vocabulary demonstrated including pinch-to-zoom, two-finger rotation, marquee selection.

3. **UPIC (1977)** — Iannis Xenakis's electromagnetic drawing tablet that turned hand-drawn lines directly into synthesized sound. X-axis = time, Y-axis = pitch. Draw a waveform = timbre. No keyboard, no notation, no code. Designed to be usable by children. The entire system fit under 1MB. First piece: *Mycènes Alpha* (1978), premiered at the Acropolis of Mycenae. Aphex Twin: "UPIC by Xenakis puts almost everything else to shame."

### Deferred candidates from this run (strong, not promoted)
- **Konix Multisystem (1988-89)** — Unreleased force-feedback console-in-controller with morphing yoke, Power Chair, light gun with recoil. Richly documented on konixmultisystem.co.uk. Deferred due to never-shipped status and image licensing from fan archive vs. institutional sources.
- **Miracle Piano Teaching System (1990)** — Real 49-key MIDI piano as NES/SNES/Genesis game controller. Cross-platform. Good sources and images. Deferred due to music-education focus overlapping somewhat with SynthAxe and Radio Drum already in collection.

## Files written
- `potential/sega-hang-on/info.json`
- `potential/cmu-sensor-frame/info.json`
- `potential/upic/info.json`
- `assets/wiki/sega-hang-on-cabinet.jpg` (from Wikimedia)
- `assets/wiki/yu-suzuki-gdc2011.jpg` (from Wikimedia)
- `assets/wiki/sensor-frame-hardware.jpg` (from billbuxton.com)
- `assets/wiki/sensor-frame-patent-pinch.jpg` (from Google Patents)
- `assets/wiki/upic-system.jpg` (from Wikimedia)
- `assets/wiki/xenakis-studio.jpg` (from Wikimedia)

## Files modified
- `docs/hci-wiki.md` — Added 3 new exhibit sections + ToC entries, updated image paths to local, updated count from 74→77
- `src/data.ts` — Added 3 new exhibit entries

## Verification
- `bun run typecheck` — passed
- `bun run build` — 77 exhibits + blog + about, 91 pages — passed

## What still needs review
- None for this batch. All three artifacts are fully promoted with local images.

## Research subagents used
- 5 parallel discovery subagents (multi-touch, balance/motion, music, weird peripherals, room-scale)
- 5 parallel deep-research subagents (Sensor Frame, Hang-On, Konix, Miracle Piano, UPIC)
- All returned well-sourced reports with image URLs and team details.
