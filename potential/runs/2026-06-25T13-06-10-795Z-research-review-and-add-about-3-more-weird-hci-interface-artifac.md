# Run Trace: 2026-06-25 Research and add ~3 weird HCI artifacts

## Goal
Find ~3 new HCI hardware/interface artifacts from 1976-1992, review, and add the strongest to the collection.

## Existing collection (29 artifacts): reviewed, confirmed not to duplicate.

## Known Gaps
- Haptic/tactile feedback devices
- Eye-tracking interfaces
- Puff/sip or breath-based interfaces
- Early speech recognition systems

## Deferred candidates (not to re-scout)
- SynthAxe (1985)
- Quantel Paintbox (1981)

## Research Angles
1. Haptic/force-feedback: early force-feedback joysticks, tactors, vibration devices
2. Eye-tracking: early eye-gaze systems
3. Puff/sip: breath-controlled interfaces
4. Speech recognition: early standalone speech recognition hardware
5. Weird game controllers: obscure console/arcade peripherals
6. Unusual wearable computing: beyond EyeTap and VPL

## Subagent results received

### Haptic/force-feedback (ses_1011c22daffeMSdD097H6Ok08x)
- GROPE-III (1988-90) - UNC nuclear manipulator arm for feeling molecular forces
- Hard Drivin' (1989) - Atari force-feedback arcade steering wheel
- Minsky Sandpaper (1990) - computational haptic texture rendering
- Rutgers Master I/II (1991-92) - pneumatic force-feedback glove
- Optacon (1971-96) - 24x6 vibratory tactile pin array reading device

### Eye-tracking (ses_1011c0d97ffeaTLivT83v585Yg)
- EyeTyper (1983) - Sentient Systems/CMU; first commercial camera eye-typer
- Eyegaze Communication System (1988) - LC Technologies; first dedicated AAC eye-gaze
- Gaze-Orchestrated Dynamic Windows (1981) - Richard Bolt/MIT; first eye-tracking HCI demo
- Erica (1987-89) - UVA; low-cost eye-gaze communication
- Honeywell Remote Oculometer (1966-74) - ancestral PCCR hardware

### Obscure/weird input devices (ses_1011be6aeffeT04f4zDKpe7e6K)
- Amiga Joyboard (1983) - balance board for Atari 2600; full-body lean input
- Nintendo Hands Free (1989) - chin joystick + sip-and-puff for quadriplegic NES players
- U-Force (1989) - Brøderbund; IR touchless gesture controller for NES
- Buchla Thunder (1989) - multi-touch pressure+position MIDI controller
- Buchla Lightning (1991) - spatial IR wand MIDI controller
- HeadMaster (c. 1986) - PRC; head-mounted mouse with sip/puff click
- BodySynth (early 1990s) - EMG muscle-signal MIDI controller
- Covox Voice Master (c. 1987) - consumer speech I/O box

### Speech recognition (ses_1011bcc31ffe0HX180vpbKFvV6)
- Heuristics SpeechLab (1976) - first commercial SR for personal computers; S-100 board
- Scott Instruments VET-232 (1984) - voice data entry for industrial/accessibility
- Covox Voice Master (1984) - complete consumer voice I/O
- Voice Navigator (1989) - first GUI voice control; Articulate Systems
- DragonDictate (1989-90) - first large-vocabulary speech-to-text; $9K DSP board

## Selected candidates for promotion (3)
1. **Amiga Joyboard (1983)** - weird, embodied balance board; full-body lean input; 23 years before Wii Balance Board; Guru Meditation origin story; fills the full-body exertion angle differently from NES Power Pad
2. **GROPE-III (1988-90)** - fills haptic/force-feedback gap dramatically; UNC nuclear manipulator arm for feeling molecular forces; Brooks/Ouh-Young; landmark SIGGRAPH 1990 paper
3. **Nintendo Hands Free (1989)** - fills puff/sip and accessibility gaps; chin joystick + breath tubes; first accessibility controller from major gaming company; under 1000 units; sold only via mail order

## Deferred for future
- EyeTyper (1983) - very strong, deferred for next batch (fills eye-tracking gap)
- Minsky Sandpaper (1990) - strong but overlaps with GROPE-III in haptics
- DragonDictate (1989-90) - strong but somewhat less embodied than the selected three
- Buchla Thunder (1989) - excellent but SynthAxe already deferred for music
- Heuristics SpeechLab (1976) - very early, fascinating, but less documentary richness

## Promotion results

### Amiga Joyboard (1983)
- Slug: amiga-joyboard
- Added to wiki: docs/hci-wiki.md (line 1435)
- Added to data.ts
- Images: 4 local images in assets/wiki/amiga-joyboard-{1,2,3,4}.jpg
- Sources: 12 verified sources

### GROPE-III (1990)
- Slug: grope-iii
- Added to wiki: docs/hci-wiki.md (line 1493)
- Added to data.ts
- Images: 2 local images in assets/wiki/grope-iii-{1.png,2.gif}
- Sources: 8 verified sources

### Nintendo Hands Free Controller (1989)
- Slug: nintendo-hands-free
- Added to wiki: docs/hci-wiki.md (line 1555)
- Added to data.ts
- Images: 3 local images in assets/wiki/nintendo-hands-free-{1,2,3}.jpg
- Sources: 7 verified sources

## Verification
- Typecheck: passed (tsc --noEmit, no errors)
- Build: passed (32 exhibits + blog + about, 36 pages)

## Bugs found
- promote-potentials.ts regex bug: the data.ts replacement pattern looks for `\n];\n\nexport const featured` but the actual data.ts has `export const exhibits` between `];` and `export const featured`. The wiki gets updated but data.ts doesn't. Workaround: manually added the entries. To fix: change the regex to match `\n];\n\nexport const exhibits`.

## Gaps addressed
- Haptic/tactile feedback: GROPE-III fills this gap with force-feedback molecular docking
- Puff/sip interfaces: Nintendo Hands Free fills this gap with sip-and-puff game controller
- Full-body input: Amiga Joyboard adds a distinct full-body lean/balance interaction different from the NES Power Pad's stomping

## Gaps remaining
- Eye-tracking interfaces: strong candidates identified (EyeTyper 1983, Eyegaze 1988, Erica 1987) but deferred
- Early speech recognition: strong candidates identified (Heuristics SpeechLab 1976, DragonDictate 1989, Covox Voice Master 1984) but deferred
- Vibrotactile/tactile arrays: Optacon identified but slightly outside date window

## Deferred strong candidates (for future runs)
- EyeTyper (1983)
- Minsky Sandpaper (1990)
- DragonDictate (1989-90)
- Heuristics SpeechLab (1976)
- Buchla Thunder (1989)
- Hard Drivin' (1989)

---
