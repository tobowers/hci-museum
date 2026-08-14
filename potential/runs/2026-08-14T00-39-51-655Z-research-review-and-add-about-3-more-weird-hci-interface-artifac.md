# Run trace — 2026-08-14 research/review/add ~3 weird HCI artifacts

Goal: find ~3 strong new HCI hardware/interface artifacts 1976-1992, promote the best.

## State at start
- Collection: 187 exhibits in src/data.ts; 191 wiki sections; wiki ToC needs care.
- potential/: 186 dirs, 0 active info.json (all archived) — no stale auto-promotion risk.
- Octen budget: 7 total (6 for subagents = 2 each; 1 reserved for me). Exa: 2 max, use only if first Octen set fails.
- Memory notes: well is thin at 187; fresh unexplored angles still yield; image availability is the dominant bottleneck.

## Angles chosen (fresh, not recently exhausted)
1. **First consumer speech-recognition devices & games (1979-1984)** — TI Speak & Read (1980), MB OMNI (1980), Scott Instruments VET-2 (1982), others before Covox Voice Master (1984, in museum).
2. **Electronic tabletop board games where the board itself is the computer input (1976-1982)** — MB Computer Perfection (pressure matrix), MB Electronic Battleship (code grid), MB Comp IV, MB OMNI.
3. **Talking consumer appliances / voice-activated devices that change a physical ritual (1980-1988)** — Minolta Talker camera (1983), talking calculators, voice-activated recorders, etc.

## Log

### Subagent wave 1 (3 parallel, 6 Octen total)
1. **Speech-recognition angle** (ses_002454900ffe56GE1A0VDBuoh4): DISPROVEN Speak & Read (1980) = synthesis-only (TMS5100, keyboard input, no mic). DISPROVEN MB OMNI as recognition = 8-track quiz console ($119.99, keypads, data in inaudible tape channels — technically programmable). Confirmed MBX Expansion System (1983) = first consumer voice-recognizing game system (M6809 + GI SP1000, trainable template matching, headset mic) — BUT MBX is already in the museum. Scott Instruments VET-2 (1982) = partially verified, no images, prices unverified.
2. **Board-game-as-computer angle** (ses_0024527d6ffeg7vuwewMq4Tcvw): Computer Perfection is Lakeside (1979), NOT MB 1978, 10-button dome-lid device (lid = power switch, "computer as playmate" persona, Ralph Baer design) — no free images. Electronic Battleship (1977) = keypad coordinate entry, procedural sound — no free images. Comp IV = keyboard. None pass "board is the input"; sensory chess (in museum) owns that niche.
3. **Talking appliance angle** (ses_0024502f7ffeOB5DAUx0ZvdS21): **Minolta Talker / AF-Sv (1984) VERIFIED** — first talking camera. Three spoken phrases wired to meter/film sensor/rangefinder ("Load film", "Too dark, use flash", "Check distance"). $129.50 (1984 NYC ad). Voice module with on/off switch; Japan-market Talkman (Sept 1984). ONE CC BY 2.0 Commons image: `File:Minolta af s auto-focus v (51888995839).jpg` (Joost J. Bakker). Polaroid 636 Talking Camera = out of window (1995). Chrysler EVA (1983-88) = verified but not recommended as display artifact.

### Verdict so far
- **Minolta Talker**: STRONG, promotable (1 licensed image).
- Others: image-blocked or already in museum. Need 1-2 more promotable.

### Octen exhausted (7/7) — continue with Exa + direct fetches
- Octen budget error on my reserved 7th call (subagents consumed more than expected). Continued per rules.
- Exa (1/2 used) → found TSI Speech+ sources: vintagecalculators.com (development + production pages), CHM Revolution page + catalog 102628744, Sean Riddle teardown (die shots, ROM dumps, TMS1007 calculator chip).

### Candidate #2 VERIFIED: TSI Speech+ talking calculator (1976)
- First commercial hand-held talking calculator, by Telesensory Systems Inc. (Palo Alto; the Optacon company). Launched 1976, $395 (Popular Electronics May 1976).
- Interaction model: 8-digit red LED display + SPEECH as primary output channel. Every keypress spoken aloud; keypad deliberately arranged like a TELEPHONE (1 at top) since blind users know phones, not calculators. Power = pull knob that doubles as volume control. Loudspeaker-button speaks the display; mute switch silences all speech EXCEPT the speaker button (experienced-user mode). New speech interrupts current speech. Instruction manual on audio cassette. Johnny Carson demo unit never returned.
- Hardware: TI TMC1007NL (TMS1000-family 4-bit micro, custom-programmed by TSI "so that we could dictate the way the calculator works and design the keyboard") + TSI S14001A speech chip (Silicon Systems, Ed Bernard) running Forrest Mozer's compression algorithm (24 words in 4K ROM) + GI S14007 mask ROM.
- Distinct from TI-59 (silent programmable), Little Professor (silent teacher), TRS-80 Voice Synthesizer (peripheral). Same company as Optacon.
- Image: `File:TSI Speech+ Talking Calculator 01.jpg` — CC BY-SA 3.0 (MaltaGC), 2048x1301. URL: https://upload.wikimedia.org/wikipedia/commons/3/3b/TSI_Speech%2B_Talking_Calculator_01.jpg
- Also: MAME emulation of S14001A exists; German ROM version 1976-77; APH Student version (S1D).

### Third-candidate evaluation in progress
- Commons image-checked: OMNI (no images, dead), Tomy Omnibot (no images), Atari Portfolio + Tandy Model 100 (images but interaction-incremental laptops), Intellivision (images), Alphie (2 images, interaction weak), Electronic Battleship (no images), talking calculator siblings (TSI is the one).
- Checking Intellivision disc-controller story + Fidelity Chess Challenger 1 (1977, first commercial chess computer) images.
