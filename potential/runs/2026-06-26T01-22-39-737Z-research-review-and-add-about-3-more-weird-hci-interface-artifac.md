# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Launching parallel research subagents

Targeting three open collection gaps + broad weird-devices search:
1. Eye-tracking interfaces from the era (open gap: Eyegaze, Erica, etc.)
2. Early speech recognition systems (open gap: Heuristics SpeechLab, DragonDictate, Covox Voice Master, etc.)
3. Weird/obscure embodied input devices (broad search for anything I've missed)

Also trying Grok for broad ideation.

## Phase 1 results

All four subagents returned rich research. Summary of discoveries:

**Eye-tracking (top candidates):**
- EyeTyper (1983, Sentient Systems/CMU) — first commercial camera-based eye-typing. Physical display board + IR camera + dwell-time. Became DynaVox lineage.
- ERICA (1987, UVA/Thomas Hutchinson) — first general-purpose eye-gaze HCI. Foundational 1989 IEEE paper. Coined "Midas Touch" problem.
- Eyegaze (1988, LC Technologies) — lasting commercial product, NASA miniaturization, still in production.

**Speech recognition (top candidates):**
- Heuristics SpeechLab (1976) — first commercial PC speech rec. S-100 board. 64 words.
- DragonDictate (1989-90, Dragon Systems) — first large-vocabulary speech-to-text. $9K DSP board. 30K words. Defined dictation interaction model.
- Voice Navigator (1989, Articulate Systems) — first voice control of GUI. Mac SCSI box with TI DSP. Used Dragon engine.
- Covox Voice Master (1984) — cross-platform consumer speech I/O for C64/Apple/Atari.
- Kurzweil VoiceReport (1987) — 5K-word commercial dictation, medical vertical applications.

**Weird embodied devices (top candidates):**
- DLR Control Ball/SpaceMouse (1981-93, DLR German Aerospace) — first 6-DOF force/torque sensor ball. Isometric spatial control. Used on Space Shuttle. Became modern 3Dconnexion SpaceMouse.
- Sayre Glove (1977, EVL/UIC) — first wired data glove. Optical bend sensing. Predates VPL by 10 years.
- Lyricon (1974-80, Computone) — first electronic wind controller. Breath + lip + finger transduction. ~200 units.
- Atari Puffer (1983, unreleased) — exercise bike controller for Atari 5200.
- Jim Henson's Waldo (1988) — physical puppet armature → real-time CGI.
- MBX Expansion System (1983) — voice + analog joystick + keypad for TI-99/4A.
- Nintendo U-Force (1989) — touchless IR spatial hand tracking.

Grok also surfaced: TongueTouch Keypad (1992, intraoral), BioMuse EMG/EEG (1992), HeadMaster ultrasonic (1986), PowerPad educational tablet (1982).

## Phase 2: Selection

Selected three candidates based on: interaction-model distinctiveness, source quality, collection-gap closure, and story strength.

1. **EyeTyper (1983)** — fills eye-tracking gap. From deferred list. Camera-based eye-typing, dwell-time selection. CMU → Sentient Systems → DynaVox → Tobii Dynavox. Strong sources: UPI 1984 article, patent US4648052A, APL Technical Digest 1982.

2. **DragonDictate (1989-1990)** — fills speech recognition gap. From deferred list. First large-vocabulary (30K words) speech-to-text dictation. $9K DSP board + Shure headset. Defined discrete-word dictation with "Oops" correction. Baker husband-wife team from CMU/IBM/Verbex → Dragon Systems. Strong sources: Eurospeech 1989 paper, Seattle Times 1990, Deseret News 1990, ACL Anthology.

3. **DLR Control Ball / SpaceMouse (1981)** — novel 6-DOF isometric force input. Not in deferred list. German Aerospace Center (DLR) developed first 6-axis force/torque sensor ball. Patents 1981-83. Used on Space Shuttle Columbia ROTEX mission (1993). Became Logitech/3Dconnexion SpaceMouse — still in production 40+ years later. Distinct from Polhemus Isotrak (position tracking vs. force input). Strong sources: DLR official history, spacemice.org, patent docs.

Runners-up considered but deferred:
- Lyricon — fascinating but 1974 origin barely in window, very few units, limited sources beyond enthusiast sites.
- Voice Navigator — strong interaction model (first GUI voice control) but DragonDictate is more significant for speech-as-primary-input.
- Sayre Glove — historically important but overlaps with VPL DataGlove already in museum.
- ERICA/Eyegaze — strong candidates but EyeTyper is chronologically first and has the most vivid story.

Now creating info.json files for the three selected candidates.

## Phase 3: Image collection

- EyeTyper: Downloaded 2 patent images from USPTO (good quality, public domain)
- DragonDictate: Downloaded 1 patent image + 1 CHM portrait of James Baker (software-centric product, inherently limited visual documentation)
- DLR SpaceMouse: Downloaded 2 images (DLR prototype + Dimension 6 commercial version)

## Phase 4: Promotion

- Ran `bun scripts/promote-potentials.ts` — wiki sections appended, images copied to assets/wiki/, but data.ts NOT updated (confirmed known regex bug)
- Manually added 3 new Exhibit entries to src/data.ts
- Manually updated wiki Table of Contents (entries 33-35)
- Verified images copied to assets/wiki/ (6 files, all correct)
- Typecheck passed
- Build succeeded: 35 exhibits, 40 pages

## Phase 5: Cleanup

- Updated docs/beepy-memory.md: marked eye-tracking and speech recognition gaps as filled, moved promoted candidates out of deferred list, added new deferred candidates discovered this run
- Wrote summary at potential/runs/2026-06-26T01-22-39-737Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md

All done. Three artifacts promoted, verified, collection at 35.
