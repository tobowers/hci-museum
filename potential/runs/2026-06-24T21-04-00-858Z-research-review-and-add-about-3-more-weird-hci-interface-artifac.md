# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Session start: 2026-06-24T21-04

Identified 5 candidates for parallel research:
1. Konami LaserScope (1990) - voice-activated headset targeting device for NES
2. NES Power Pad (1988) - full-body floor mat controller (Family Trainer in Japan)
3. Fairlight CMI (1979) - light pen digital audio workstation
4. Quantel Paintbox (1981) - stylus + tablet broadcast graphics system
5. SynthAxe (1985) - MIDI guitar controller

Launching 5 parallel hci-research-subagents.

Collection gaps noted: no haptic devices, no foot/body mat controllers, no music HCI, no broadcast production tools, few voice-activated gaming devices. Most existing collection is VR/gesture/wearables/pen computing.

## Research results received: 2026-06-24T21-15

All five subagents returned deep, well-sourced reports. All five are viable candidates.

Selection rationale:
- **Fairlight CMI** - fills music HCI gap (no music creation interfaces in collection). Light pen for drawing sound. 300 units, revolutionary. Rich sources including Sound on Sound, The Register, contemporaneous EMM reviews.
- **Konami LaserScope** - fills head-mounted + voice gaming gap. 5K-10K units, famous flop, strong design-failure story. Forbes AP photo, Wikipedia, YT reviews.
- **NES Power Pad** - fills full-body exertion gap (no foot/body mat controllers). 500K units, DDR/Wii Fit/Kinect predecessor. Science Museum London collection. Academic citations (Bogost 2005).
- **Quantel Paintbox** - DECLINED. Overlaps category-wise with KoalaPad/Bit Pad/GRiDPad (stylus/tablet), despite being broadcast-specific and professionally dominant.
- **SynthAxe** - DECLINED with regret. Fantastically weird (<100 units, CHM "curator's wish"), but adding both Fairlight AND SynthAxe would put two music HCI artifacts in one batch. May revisit in future.

Selected for promotion: Fairlight CMI, Konami LaserScope, NES Power Pad.

## Promotion and verification: 2026-06-24T21-25

- Created potential/<slug>/info.json for all three selected candidates
- Ran `bun scripts/promote-potentials.ts` — promoted 3
- Updated wiki ToC (was listing only 15 of 29 exhibits; now corrected)
- `bun run typecheck` — PASSED
- `bun run build` — PASSED (29 exhibits + blog + about, 33 pages)
- Summary written to potential/runs/...summary.md
- beepy-memory.md updated with lessons learned

## Run complete: 3 artifacts added, 2 strong candidates deferred (SynthAxe, Quantel Paintbox)

Lessons:
- Music HCI and full-body exertion were major gaps worth filling
- The promote-potentials script works well but doesn't update the wiki ToC; manual ToC fix needed each time
- Both declined candidates deserve revisiting — especially SynthAxe as a CHM "curator's wish" object
- A haptic/tactile feedback device remains a gap for the next run
