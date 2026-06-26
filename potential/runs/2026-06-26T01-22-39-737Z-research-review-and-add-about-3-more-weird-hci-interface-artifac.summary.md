# Scout Run Summary — 2026-06-26T01-22-39-737Z

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## What changed

### Three new artifacts added to the museum collection

1. **DLR Control Ball (SpaceMouse) (1981)**
   - Slug: `dlr-spacemouse`
   - First 6-DOF isometric force-sensing ball. German Aerospace Center (DLR). Used on Space Shuttle Columbia (ROTEX, 1993). Ancestor of the modern 3Dconnexion SpaceMouse. Still in production 40+ years later.
   - Novel interaction model: force-based spatial control — not tracking where something is (like Polhemus Isotrak), but reading the forces applied to a stationary ball.
   - Sources: DLR official history, spacemice.org, patent docs.

2. **DragonDictate (1989)**
   - Slug: `dragondictate`
   - First large-vocabulary speech-to-text dictation. Dragon Systems (James and Janet Baker). $9K ISA DSP board + Shure headset. 30K words, discrete-utterance, "Oops" correction. Defined the speech dictation interaction model for two decades.
   - Fills the speech recognition collection gap.
   - Sources: Eurospeech 1989 paper (Janet Baker), Seattle Times 1990, Deseret News 1990, MIT Technology Review, ACL Anthology.

3. **EyeTyper (1983)**
   - Slug: `eyetyper`
   - First commercial camera-based eye-typing device. Sentient Systems Technology (CMU spinoff, Mark Friedman). Camera pointed at one eyeball; physical display board with oversized characters; dwell-time selection. Became DynaVox → Tobii Dynavox.
   - Fills the eye-tracking collection gap.
   - Sources: UPI Archives 1984, patent US4648052A, Johns Hopkins APL Technical Digest 1982, Wikipedia, COGAIN Wiki.

## Files written/modified

### New files
- `potential/eyetyper/info.json` — full research dossier
- `potential/dragondictate/info.json` — full research dossier
- `potential/dlr-spacemouse/info.json` — full research dossier
- `potential/runs/2026-06-26T01-22-39-737Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

### Modified files
- `src/data.ts` — added 3 new exhibit entries (manual, due to known promote script regex bug)
- `docs/hci-wiki.md` — appended 3 new wiki sections + updated Table of Contents (manual ToC update)
- `assets/wiki/` — 6 new images copied:
  - `dlr-spacemouse-1.jpg`, `dlr-spacemouse-2.jpg`
  - `dragondictate-1.png`, `dragondictate-2.jpg`
  - `eyetyper-1.png`, `eyetyper-2.png`
- `docs/beepy-memory.md` — updated collection gap status and deferred candidates
- `potential/runs/2026-06-26T01-22-39-737Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace updated throughout

## Verification
- `bun run typecheck` — passed, no errors
- `bun run build` — succeeded, 35 exhibits + blog + about, 40 pages total

## Known issues
- The `promote-potentials.ts` script's data.ts regex bug persists: wiki sections and images are handled correctly, but data.ts entries must be manually inserted. The regex `/\n\];\s*\n\nexport const featured/` does not match the actual file structure which has `export const exhibits` between `];` and `export const featured`.
- DragonDictate has limited visual documentation (patent drawing + CHM Baker portrait). This is inherent to a software + DSP-board product. The interaction model matters more than visual distinctiveness.

## Deferred/considered candidates from this run

**From the weird devices research (not promoted):**
- Lyricon (1978) — first electronic wind controller. Breath + lip + finger transduction. ~200 units. Fascinating but very few units, limited sources. Defer until adding another music HCI artifact.
- Sayre Glove (1977) — first wired data glove. Overlaps with VPL DataGlove already in museum.
- Atari Puffer (1983) — unreleased exercise bike controller. Interesting but unreleased.
- Jim Henson's Waldo (1988) — puppet armature → CGI. Fits the era but not strictly an HCI input paradigm.
- Nintendo U-Force (1989) — touchless IR spatial tracking. Too close to existing consumer gaming peripherals.
- MBX Expansion System (1983) — voice + analog joystick. Overlaps with several existing artifacts.

**From the eye-tracking research (not promoted):**
- ERICA (1987, UVA/Thomas Hutchinson) — first general-purpose eye-gaze HCI. Foundational 1989 IEEE paper. Defer: EyeTyper is chronologically first and has a richer commercial story.
- LC Technologies Eyegaze (1988) — still in production today. Defer: EyeTyper was chronologically first.

**From the speech recognition research (not promoted):**
- Heuristics SpeechLab (1976) — first commercial PC speech recognition. 64 words, unreliable. Already deferred in memory.
- Voice Navigator (1989, Articulate Systems) — first voice control of GUI. Strong interaction model but DragonDictate is more significant for speech-as-primary-input.
- Covox Voice Master (1984) — consumer speech I/O. Already deferred in memory.
- Kurzweil VoiceReport (1987) — medical vertical speech. DragonDictate covers the general dictation story better.

## Collection status after this run
- **35 exhibits** total (was 32)
- Two open collection gaps now filled: eye-tracking and speech recognition
- Remaining open gaps from memory (2026-06-25): none of the original three
- Eye-tracking gap: FILLED (EyeTyper, 1983)
- Speech recognition gap: FILLED (DragonDictate, 1989)
- New modality added: 6-DOF isometric force input (DLR Control Ball, 1981)
