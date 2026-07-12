# Run Summary: 2026-07-12T13-56-35-604Z

## What changed

Added 3 new artifacts to the HCI Museum collection:

| Artifact | Year | Category | Interaction Paradigm |
|---|---|---|---|
| **Sega Heavyweight Champ** | 1976 | Arcade / Motion Control | Mechanical spring-loaded boxing glove controllers with switch-based punch detection. First fighting game, arguably first motion-controlled video game. Ran on discrete TTL logic (no CPU). Game is "lost" but schematics rediscovered 2025. |
| **Suncom Aerobics Joystick** | 1983 | Exergaming / Physical Controller | Exercise bike pedal speed → variable-rate fire button presses on Atari 2600. Magnetic reed switch pickup → pulse-to-frequency converter. Pioneered "continuous exertion rate → in-game action rate" paradigm 35 years before Peloton/Zwift. Extremely obscure: only 1 user account survives. |
| **Covox Voice Master** | 1984 | Speech Recognition / Home Computer | Trainable voice command recognition (template matching, up to 31 words) for C64. Combined speech recording, playback, and recognition. Added LEARN/SPEAK/TRAIN/RECOG to BASIC. Bundled voice-controlled Blackjack game. Fills the "consumer voice command recognition for interactive software" gap between Butler in a Box and DragonDictate. |

## Files written/modified

- `potential/covox-voice-master/info.json` — new research file
- `potential/heavyweight-champ/info.json` — new research file
- `potential/suncom-aerobics-joystick/info.json` — new research file
- `docs/hci-wiki.md` — appended 3 new wiki sections (via promote script), updated image refs to local, updated ToC
- `src/data.ts` — 3 new exhibit entries added manually (promote script regex bug confirmed)
- `assets/wiki/covox-voice-master-1.png` — hardware photo (download from Commodore Spain)
- `assets/wiki/covox-voice-master-2.jpg` — software screenshot (download from Commodore Spain)
- `assets/wiki/heavyweight-champ-1.jpg` — cabinet photo (download from Sega Retro, CC-BY 4.0)
- `assets/wiki/heavyweight-champ-2.jpg` — screenshot (download from Wikipedia, fair use)
- `assets/wiki/suncom-aerobics-1.jpg` — product photo (download from Atari Compendium)
- `assets/wiki/suncom-aerobics-2.jpg` — magazine listing (download from ANTIC Magazine)
- `potential/runs/2026-07-12T13-56-35-604Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — run trace
- `potential/runs/2026-07-12T13-56-35-604Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

## Verification

- `bun run typecheck` — passed, no errors
- `bun run build` — passed, 103 exhibits + blog + about, 125 pages

## Research subagents used

- 6 discovery subagents (EMG interfaces, arcade controllers, computer vision, wearable input, environmental sensors, HCI failures)
- 4 deep-research subagents (Sega Heavyweight Champ, Covox Voice Master, Suncom Aerobics Joystick, The Hot Seat)
- Grok ideation tool (mostly unhelpful — suggested already-collected artifacts)
- Exa search tool used extensively by subagents

## Candidates considered but not promoted

- **"The Hot Seat" (1984)** — Universal arcade motion platform. Excellent candidate but images are auction/collector photos (licensing concern) and category overlaps with Sega R360. Deferred for future run.
- **James Scudder EMG Patent (1977)** — Patent-only, no working prototype known. Deferred.
- **SRI/DARPA Subvocal Speech (1973-1975)** — Before era window. Deferred.
- **Winnebiko II Handlebar Chording Keyboard (1986)** — Interesting nomadic computing but individual components already covered (Microwriter for chording keyboards). Deferred.
- **Head-Mounted Sights / Long-Range Light Pen (1985)** — CRT beam-timing head pointer. Overlaps with HeadMaster (1986) in interaction paradigm. Deferred.
- **Vaisala HAWS (1983)** — Home weather station. Environmental sensor, not HCI paradigm. Deferred.

## Known gotchas encountered

- `promote-potentials.ts` regex bug confirmed: `data.ts` replacement regex doesn't match the actual file structure. Worked around by manually adding entries.
- `promote-potentials.ts` image copy silently fails (looks for paths relative to CWD, not potential/ dir). Worked around by manually downloading images.
- AtariHQ Museum image server returns 403 for direct image access. Used Atari Compendium and ANTIC Magazine sources instead.

## Memory updates needed

- Add promoted candidates to beepy-memory.md (Sega Heavyweight Champ, Suncom Aerobics Joystick, Covox Voice Master)
- Add "The Hot Seat" to deferred candidate list with image licensing concern
- Note: "lost game" candidates (Heavyweight Champ) are viable museum exhibits when schematics/documentation exist and the interaction model is genuinely novel
