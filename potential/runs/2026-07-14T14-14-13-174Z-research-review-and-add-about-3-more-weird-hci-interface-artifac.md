# Run Trace: 2026-07-14T14-14-13-174Z

Goal: Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Initial State
- 105 exhibits currently in museum
- 95 potential/ directories (many with archived info.json)
- Memory warns: "candidate well is now genuinely thin"
- Strategy: search for underexplored modalities, accept fewer if quality is low

## Research Angles
Planning to launch parallel subagents with these search angles:
1. Underexplored physical modalities: thermal feedback, EMG muscle sensing, airflow/wind feedback, water/liquid interfaces
2. Truly unusual arcade controllers from the era not yet covered
3. Standalone assistive/accessibility devices with novel interaction models
4. Early wearable computing (non-Steve Mann)
5. Unusual musical/creative interfaces with strong physicality
6. Early portable electronic reading/book devices

## Started
Subagents launched. Research in progress.

## Subagent Results Received

### Subagent 1: Text-to-Speech Peripherals
Strong candidates found:
- TRS-80 Voice Synthesizer (1979) - video-memory phoneme mapping, verified image
- DECtalk DTC01 (1984) - standalone TTS with phone integration, singing, 9 voices, verified images
- Votrax Type-N-Talk (1980) - pure RS-232 "type and it talks" black box, verified image
- Phonic Mirror HandiVoice HC 110 (1978) - first AAC speech aid, self-contained keyboard - NO VERIFIABLE IMAGES
- Speech Plus CallText 5010 (1988) - Hawking's voice board, Science Museum images

### Subagent 2: Unusual Arcade Controllers
Strong candidates found:
- Bally Sente Stompin' (1986) - first dance pad arcade game (overlaps with NES Power Pad)
- Jaleco Arm Champs (1988) - robotic arm wrestling with force feedback
- Taito Sonic Blast Man (1990) - boxing glove punching (overlaps with Exciting Boxing/Heavyweight Champ)
- Kansai Seiki U-235 Meltdown / Mind Control (1987/1992) - pneumatic air-pressure tube game
- Turkey Shoot (1984) - feathers erupt inside cabinet (but light gun controller)
- Virtuality 1000CS (1991) - already in museum as Virtuality (1990)

### Subagent 3: EMG/Biofeedback
Most candidates overlap with existing collection (Synapse Relax, AtariLab, BioMuse, IBVA).
- Computerware Bio Detector (1984) - GSR for TRS-80 CoCo, too similar to existing
- Atari Project Puffer - already deferred
- Thought Technology CalmSet - standalone GSR, not clearly HCI
- Various DIY projects - not substantial enough

### Subagent 4: Unusual Wearable/Proximity/Kinetic
- Max Mathews' Radio Baton (1987-90) - capacitive gestural music baton, overlaps with Radio Drum
- Air & Liquid Display Sculpture (1982) - kinetic water/air display, more art installation
- Winnebiko II / BEHEMOTH (1986-92) - nomadic computing bicycle, interesting but systems integration
- Dallas iButton (1990) - token-based physical-digital interaction, simple but elegant
- Thermal feedback - confirmed very weak category for the era
- Color as input - no strong candidates in window

## Top Candidates for Deep Research
1. TRS-80 Voice Synthesizer (1979) - bizarre video-memory phoneme mapping
2. DECtalk DTC01 (1984) - speech synthesis as creative instrument
3. Kansai Seiki U-235 Meltdown (1987) - pneumatic air-pressure interface
4. Dallas iButton (1990) - physical token digital identity

Now doing targeted deep research on these four.

## Deep Research Results

### TRS-80 Voice Synthesizer (1979) — STRONG, PROMOTED
- Verified image: http://www.trs-80.org/img/trs80voice.jpg (200 OK, 25KB)
- Rich source material from trs-80.org, BYTE Magazine Oct 1979, VCFED forums
- Unique interaction model: video-memory phoneme mapping — write ASCII phoneme codes to screen, synthesizer reads them and speaks
- 60 phonemes mapped to arbitrary ASCII characters (6=UH1, $=TH, +=NG)
- $399 in 1979, discontinued 1983, no Model III version
- Built around Votrax SC-01-A chip in potted epoxy VSL module

### Dallas Semiconductor iButton (1990) — STRONG, PROMOTED
- Two verified CC-licensed images from Wikimedia Commons
- Good source material from Wikipedia, Analog Devices EZ Spotlight, JavaWorld
- Interaction model: physical token as digital identity — touch to authenticate
- 16mm stainless steel can, 64-bit unique serial number, 1-Wire protocol
- Used for access control, time clocks, Istanbul Akbil transit, Java Ring (1998)

### Kansai Seiki U-235 Meltdown / Mind Control (1987/1992) — DEFERRED
- Verified images from thetastates.com and blogspot CDN
- Pneumatic tube-and-ball mechanism is genuinely unique
- ~50 units of U-235 Meltdown made; Mind Control sold for ¥660,000
- Interaction model is more arcade novelty than general HCI
- Deferred: arcade novelty concern; image sources from blog, not institutional
- Built info.json but archived it before promotion

### DECtalk DTC01 (1984) — NOT PROMOTED
- Strong candidate but speech-heavy collection already
- Core interaction model (type text → hear speech) less novel than TRS-80 VS
- Deferred for future consideration

## Promotion
- Ran bun run scripts/promote-potentials.ts — promoted 2 artifacts
- Fixed wiki image URLs from remote to local (assets/wiki/)
- Added data.ts entries manually (script regex bug persists)
- Updated wiki Table of Contents (added entries 103 and 104)
- Updated wiki subtitle count from 105 to 107

## Verification
- bun run typecheck: PASSED (no errors)
- bun run build: SUCCESS (107 exhibits + blog + about, 131 pages)

