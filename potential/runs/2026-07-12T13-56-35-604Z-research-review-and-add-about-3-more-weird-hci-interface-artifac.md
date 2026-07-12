# Run Trace: 2026-07-12T13-56-35-604Z

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Steps

### 13:56 - Launched 6 parallel research subagents
- EMG muscle interfaces
- Unusual arcade controllers
- Computer vision interfaces
- Unusual wearable input devices
- Environmental sensor peripherals
- Unusual commercial HCI failures

### 14:02 - All subagents returned. Processing results.

Key findings across subagents:
- **EMG**: Scudder patent (1977, Atari-assigned, patent-only), SRI subvocal (pre-1976), BioMuse pre-commercial — all weak
- **Arcade**: Sega Heavyweight Champ (1976), "The Hot Seat" motion platform (1984), Atari Puffer (unreleased), Konami boxing (overlaps) 
- **Vision**: Interactive Video Kaleidoscope/Karl Sims (1987), Recollections/Tannenbaum (1981), Graphical Marionette (already in potential/), Cromemco Cyclops (pre-1976), ComputerEyes
- **Wearable**: Finger Palette (patent-only), Eudaemonic Shoe (already deferred), Winnebiko II chording handlebar, Head-Mounted Sights (1985, Trace Center)
- **Environmental**: VOTEM (1983), Science Toolkit (1985, similar to AtariLab), Vaisala HAWS (1983), HomeBrain (1983), Unilab BBC Micro Interface. All are science instruments, not paradigm-shifting HCI.
- **Failures**: Synapse Relax (already in museum), DataHand (already in museum), Suncom Aerobics Joystick (1983), Covox Voice Master (1984), Miracle Piano (already deferred)

Candidates requiring deeper vetting:
1. Sega Heavyweight Champ (1976) — check overlap with Exciting Boxing
2. Covox Voice Master (1984) — verify images/sources
3. Suncom Aerobics Joystick (1983) — verify images/sources
4. "The Hot Seat" (1984) — verify image availability, documentation depth
5. Interactive Video Kaleidoscope (1987) — art-installation vs HCI artifact

### 14:08 - Deep research results returned from 4 targeted subagents

**Sega Heavyweight Champ (1976)**: First fighting game, spring-loaded mechanical glove controllers with switch-based punch detection. ~620,000 JPY. No CPU — discrete TTL logic. Game is "lost" (no known surviving cabinet) but original schematics were rediscovered at Tilt Museum (Bologna) in September 2025. Distinct from Exciting Boxing (mechanical switches vs. pneumatic air pressure). Cabinet photo, flyer, and screenshots available. Sega Retro has CC-BY images. Weakness: no individual designers identified, "lost game" status.

**Covox Voice Master (1984)**: Trainable voice command recognition (up to 31 words) for Commodore 64. Template matching, per-user training required. $89.95. Integrated speech I/O: record, playback, AND recognize. Added commands (LEARN, SPEAK, TRAIN, RECOG) to C64 BASIC. Bundled Blackjack (voice-controlled card game) and Voice Harp Composer. Made by Covox (Larry Stewart, Brad Stewart, Eugene, OR). Good image availability: product photos, screenshots, box art. Distinct from DragonDictate (dictation) and Butler in a Box (home control). Fills the "consumer voice command recognition for interactive software" gap.

**Suncom Aerobics Joystick (1983)**: Exercise bike pedal-speed to Atari 2600 joystick fire button rate adapter. $39.95. Magnetic reed switch on flywheel → pulse frequency → variable fire button rate. Extremely obscure: only 1 known user account (ANTIC magazine Feb 1984). Images: product photo from AtariHQ Museum, ANTIC magazine listing photo, Atari Compendium photos. No individual designers identified. Weakness: extremely thin documentation, no known surviving units.

**"The Hot Seat" (1984)**: Universal arcade motion platform. Platform-agnostic haptic overlay — any game PCB could be installed in the moving seat. ~75 units by Balance Technology / Colorado Game Exchange (Rich Babich, Howard Letovsky). 2-3 surviving units, one functional. 20+ photos available (Arcade Heroes, RR Auction). YouTube video of working unit. Weakness: mostly collector/auction images, not institutional. Genuinely distinct concept but overlaps in category with Sega R360.

### Decision: Build info.json for top 3

1. Covox Voice Master (1984) — STRONG candidate
2. Sega Heavyweight Champ (1976) — GOOD candidate, though "lost game" status is unusual
3. Suncom Aerobics Joystick (1983) — ADEQUATE candidate, very obscure

### 14:12 - Built info.json files for all three candidates

### 14:14 - Ran promote-potentials.ts: promoted 3 (wiki updated, data.ts silently skipped per regex bug)

### 14:15 - Downloaded images to assets/wiki/ for all three artifacts. Updated wiki image refs from remote URLs to local paths. Manually added 3 data.ts entries. Updated wiki Table of Contents (entries 98-100).

### 14:16 - Typecheck: PASSED. Build: PASSED (103 exhibits + blog + about, 125 pages).

### All done. See summary file for details.



