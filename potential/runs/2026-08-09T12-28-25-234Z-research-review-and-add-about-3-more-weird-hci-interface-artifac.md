# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Housekeeping (start of run)

- Collection baseline: src/data.ts has 170 exhibits (per grep -c wikiTitle); build previously output 169 exhibits. Wiki has 169 ToC entries + orphan research sections (Flute Playing Machine, Johns Hopkins Serial Code Keyboard, MIDI Dance Floor) + Appendix.
- Verified: NO stale active info.json files in potential/ (all dirs contain only .archived info.json or media). Nothing to archive before promotion.
- Note: potential/teddy-ruxpin/ exists with 6 large scanned book-page images staged (ruxpin_page*.jpg, 0.5-8.6 MB each) but no info.json — a previous run staged media for a Teddy Ruxpin (1985) candidate that was never finalized/promoted. Teddy Ruxpin is NOT in the museum and NOT in the deferred list. Strong lead to re-examine this run.
- Octen budget: 7 total (3 subagents x 2 = 6, 1 reserved for self-validation). Exa: 2 max. Grok: 0 unless needed.

## Research plan

Three subagent angles, all fresh categories with plausible image availability (image availability remains the dominant bottleneck per memory):

1. **Cassette-driven animatronic/talking consumer toys (1984-1990)** — lead: Teddy Ruxpin (1985, Worlds of Wonder). Category: analog audio tape as data cartridge + machine-as-performer (storyteller with synchronized face motion). Distinct from 2-XL (branching quiz, in museum) and PXL2000 (video camera, in museum).
2. **Talking/computer-driven electronic board games (1981-1992)** — lead: The Omega Virus (1992, Milton Bradley). Category: embedded talking computer as game master with hidden state, keypad input. Distinct from chess computers (Fidelity, Novag) and Stop Thief (radio scanner). Dark Tower (1981) known image-blocked — verify or drop.
3. **Consumer voice-interactive electronics (1980-1992), excluding robots and education** — voice-programmable VCRs/TVs, voice calculators, voice-activated appliances. Note: VCR Voice Programmer was image-blocked in the 08-08 run; only promote if CC/institutional images exist.

## Progress log

- (start) Housekeeping done. Trace created. Octen budget 7/7 (6 for subagents, 1 self).
- Launching 3 hci-research-subagents in parallel.

## Subagent results

### Subagent A (cassette animatronic toys): Teddy Ruxpin (1985) — STRONG, PROMOTE
- Interaction model verified: standard stereo cassette repurposed as data cartridge — left track = narration audio, right track = PPM data stream (8-channel digital proportion system, groups of 9 pulses) driving up to 3 servo motors (eyes, upper/lower jaw). Cassette SHELL holes tell the toy whether to decode the data track (holes align with Type-II bias sensing position); on a plain tape it plays audio only. Linear performance, not branching.
- Accessory ecosystem: Grubby companion (cable-linked two-toy dialogue), Picture Show (cassette-driven slide projector), Answer Box (interactive quiz cassettes + buttons). WoW shipped platform in Talking Snoopy/Mickey/Mother Goose/Baby Ruxpin/Julie.
- Team: inventor Ken Forsse (ex-Disney animatronics, Alchemy II), re-engineered by ex-Atari designer Larry Lynch; Worlds of Wonder (Don Kingsborough, Mark Goldberg). $70 retail, $320M FY1986 sales, 8M+ units.
- IMAGES: EXCELLENT. 14 public-domain files on Commons from Science History Institute (DPLA) digitization: File:Teddy_Ruxpin_Mechanical_Animal_-_DPLA_-_25ec4b9fcc42f658529b1b4072586a84 (page N).jpg. Also CC BY 4.0 full-res at SHI. No CHM holding; SHI is the anchor museum.
- Decision: PROMOTE. Fills machine-as-performer / analog-data-cartridge gap. Note: potential/teddy-ruxpin/images contains 6 scanned book-page files from an earlier partial run (ruxpin_page*.jpg) — will NOT reuse those; will use the DPLA/Commons PD files.

### Subagent B (talking board games): Omega Virus (1992) — STRONG interaction, IMAGE-BLOCKED, DEFER
- Interaction model verified from official rules PDF (archive.org OmegaVirusRules): embedded computer IS the game master — membrane keypad (0/1/2/R), TWO speech voices (BSatl computer + taunting virus), digital display (collector consensus: red LED segment display, NOT LCD), hidden state (random room, private 2-digit secret codes, timed countdown 10-35 min), button-matching defense, personality ("You human scum", "Red, help me!"). 1-4 players. Designer Michael Gray (also Mall Madness, Dream Phone), MB product 4334-X1, ~$40-45, poor sales. Speech chip unconfirmed (likely GI SP0256 variant).
- IMAGES: ZERO on Commons. BGG canonical photo is "© All rights reserved". No institutional holdings found. Museum would need to photograph a physical copy.
- Comparables: Electronic Talking Mystery Mansion (1990, save/restore talking GM), Electronic Talking Battleship (1989, speech referee).
- Decision: DEFER (image-blocked). Record in memory for image-resolution revisit. Do NOT promote without CC/institutional images.

### Subagent C (voice-interactive consumer electronics):
- Apricot Portable (1984, ACT Ltd UK) — first portable PC with built-in speech recognition. Speaker-dependent trained templates (repeat each word), 4,096-word vocabulary / 64 in RAM, dictation + command modes, plus IR wireless keyboard + 25-line LCD. £1,695. 4 CC images on Commons verified (Apricot portable.JPG CC BY 2.5, Apricot_portable.png CC BY-SA 3.0, Apricot Portable 1984.jpg CC BY 2.0, Apricot Portable by Moehre1992.jpg CC BY-SA 3.0). Decision: PROMOTE as secondary — caveat: it is a keyboard-primary portable PC with voice as built-in secondary input; fills "first consumer portable with trained-voice input".
- Matsushita voice-interactive VCR (1990) — strongest voice-as-whole-interface story (speaker-independent CLM, remote conversation), ZERO images. DEFER.
- The Clapper (1984) — PD image but clap ≠ voice; weak. Skip.
- Sharp voice calculator (1980 prototype), Julie doll (1987) — no images. Skip.

## Next steps
- Check potential/concept-keyboard (dir exists; not in museum list — verify archived state).
- Verify Apricot + Teddy Ruxpin image URLs via Commons API, download to assets/wiki.
- Decide final 3rd candidate (concept-keyboard or my 1 remaining Octen search).

