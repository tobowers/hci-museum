# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## 2026-06-27T12:46 Initial scan

- Read Beepy memory (57 lines), collection data.ts (497 lines, ~40 exhibits)
- Collection is well-populated. Looking for gaps: immersive displays beyond VPL/Virtuality, music HCI beyond Fairlight CMI, wrist-worn computing, multimodal office interfaces
- Excluded: overlap with existing (DataSuit overlaps VPL, Sayre Glove overlaps VPL, ERICA overlaps EyeTyper), deferred in memory (SynthAxe, Quantel Paintbox, Minsky Sandpaper, Buchla Thunder, Lyricon, Voice Navigator)
- Selected 3 candidates for parallel research:
  1. Fakespeare BOOM (1989) — CRT-on-a-boom immersive display
  2. Buchla Lightning (1991) — Optical gesture MIDI wands
  3. Seiko RC-1000 Wrist Terminal (1984) — First wristwatch computer terminal
- Launching 3 hci-research-subagents in parallel

## 2026-06-27T12:55 Promotion complete

- All three candidates promoted to collection:
  1. **Buchla Lightning (1991)** — Optical gesture MIDI controller. Two IR wands + photosensor triangulation + TMS370 DSP. $1,995, hand-built by Don Buchla in Berkeley. Tags: Music HCI, Gesture, Optical Tracking.
  2. **Fakespeare BOOM (1989)** — CRT-on-a-boom immersive display. 1280×1024 stereo per eye, spring-counterbalanced articulated arm, joint optical encoders for 6-DOF tracking. Mark Bolas, Ian McDowall, Eric Lorimer. Used by NASA, Boeing, Sandia. Tags: VR, Immersive Display, Head-Coupled Display.
  3. **Seiko RC-1000 Wrist Terminal (1984)** — First wrist-worn computer terminal. 2KB RAM, 12×2 LCD, RS-232C serial. Desktop-authored, wrist-read. Spawned WristMac flown on Space Shuttle Atlantis (1991). Tags: Wearable, Wrist-Worn, Mobile Computing.

## Promotion operations
- Downloaded local images for all three artifacts (7 images total)
- Fixed JSON syntax error in seiko-rc1000 info.json (trailing `]` instead of `}` in team array)
- Ran promote-potentials.ts (2 separate runs due to JSON fix)
- Manually added data.ts entries (known regex bug in promote script)
- Manually updated wiki ToC (entries #39-41) and intro count (35→38)
- Verified: `bun run typecheck` passed, `bun run build` → 41 exhibits, 47 pages

## Image assets
- fakespeare-boom: boom-3c.gif (Stanford CDR), andre-on-boom.jpg (VRArchitect/Fakespeare Inc.)
- buchla-lightning: lightning-1-system.jpg (MATRIXSYNTH), lightning-wands.gif + lightning-remote.gif (archived buchla.com)
- seiko-rc1000: rc1000-face.jpg (Old Crap Vintage Computing), rc1000-museum.jpg (Deutsches Uhrenmuseum)

## Notes for future
- Seiko RC-1000 primary image (seiko-rc1000-1.jpg) is 1.3MB — could be optimized later
- Buchla Lightning wands and remote images are GIFs from archive.org — usable but modest quality
- Three strong artifacts that fill distinct gaps: music HCI+gesture, mechanical immersive display, wrist-worn computing
