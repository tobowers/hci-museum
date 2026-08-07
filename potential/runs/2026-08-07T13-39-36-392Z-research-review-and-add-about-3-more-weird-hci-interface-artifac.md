# Beepy Scout Run — 2026-08-07

Goal: research, review, and add ~3 more weird HCI interface artifacts from 1976-1992.

## Initial state
- Collection: 164 exhibits in src/data.ts, 164 entries in wiki ToC (consistent).
- Memory read (docs/beepy-memory.md). Key signals:
  - Well is dry for exhausted angles; fresh angles are the only reliable source of yield.
  - Image availability (CC-licensed) is the dominant bottleneck.
  - Octen shared budget: 7 total for run incl. subagents; Exa: 2.
  - Confirmed promotion gotchas: promote-potentials.ts does NOT copy images, does NOT update
    src/data.ts (regex bug), does NOT update ToC. All must be done manually.

## Research plan (3 parallel angles, 2 Octen searches each = 6 of 7 budget)
- A: Music step-sequencer programming interfaces — Roland TB-303 (1982) / TR-808 (1980). Angle:
  "programming music as a grid of buttons" as a distinct HCI paradigm vs MC-8 (serial data entry)
  and VL-1 (toy sequencer).
- B: Broadcast/film post-production HCI — Lucasfilm EditDroid (1983-84): touchscreen + Shuttlepod
  physical scrubber, laserdisc-based nonlinear editing.
- C: Embodied appliance/arcade interfaces — voice-recognition microwave (Panasonic "Genius",
  c.1986) and laser-tag arenas (Photon, 1986).

## Trace

### 13:45 — Research launched (3 parallel hci-research-subagents)
- Subagent A (music step-sequencers): returned TB-303 (1981/82) and TR-808 (1980) as top picks.
  Both verified against Wikipedia/primary sources (E&MM Apr 1982 review, Fact, New Yorker).
  Commons verified: TB-303 137 files, TR-808 150 files. TB-303 hero = File:Roland TB-303
  Panel.jpg (CC0); TR-808 = File:Roland TR-808 (large).jpg (CC BY-SA 2.0) + SMEM museum shot.
- Subagent B (post-production HCI): EditDroid (1984) is the standout HCI story (shuttle knob +
  trackball + relegendable LED soft keys + touchscreen timeline + laserdisc random access;
  $93,000; 24 units; Droid Works → Avid 1993) BUT ZERO CC images on Commons (verified).
  "Shuttlepod" name debunked — controller is "TouchPad"/ShuttleKnob. DEFER on image grounds.
- Subagent C (embodied appliances/arcade): the "voice microwave" (Panasonic Genius / Sharp
  R-AV20) premise is a MYTH — both fail verification; only a 2007 Daewoo voice microwave
  exists. Real findings: Photon laser-tag arena (opened 28 Mar 1984, Garland TX, George
  Carter III) — full-body IR vest+helmet+gun, computer-scored, 45 arenas by 1987, CC images
  on Commons (File:Photon Gun.jpg CC BY-SA 3.0; ID badge CC BY-SA 4.0; 2× CGW 1984 arena
  scans PD). Julie doll (1987 WoW, first consumer voice-recognition device) — ZERO CC images.
  Lazer Tag (1986) — ZERO CC images.

### 13:55 — Candidate decision
- PROMOTE: Roland TB-303 (1981/82), Roland TR-808 (1980), Photon (1984). All three: distinct
  interaction models, in-window, verified primary sources, verified CC images.
- DEFER (image-blocked): EditDroid (no CC images anywhere; only © Lucasfilm blog/auction
  photos), Julie doll, Lazer Tag, SoundDroid, Montage Picture Processor.
- RECORD: "voice microwave" confirmed as myth — do not re-scout.

### 13:58 — Images
Downloaded + verified with `file` (all valid JPEGs):
- potential/tb303/images: tb303-panel.jpg (CC0), tb303-closeup.jpg (PD), tb303-museum.jpg (CC BY 2.0, Tekniska Museet)
- potential/tr808/images: tr808-panel.jpg (CC BY-SA 2.0), tr808-museum.jpg (CC BY 4.0, SMEM)
- potential/photon/images: photon-gun.jpg (CC BY-SA 3.0), photon-id-badge.jpg (CC BY-SA 4.0),
  photon-arena-1984.jpg (PD), photon-arena2-1984.jpg (PD)

(append as work proceeds)
