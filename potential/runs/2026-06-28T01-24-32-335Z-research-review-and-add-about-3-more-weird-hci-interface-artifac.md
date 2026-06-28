# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Ideation and research angles

Modalities already well-covered: camera/vision body tracking (3), game controllers (many), HMDs (several), tablets/stylus (several), robots (2), speech, eye tracking, haptics, music controllers, wearable wrist, chord keyboard, bio-signals, OCR, isometric force, handheld computing, navigation.

Seeking: novel interaction paradigms not yet in the museum. Candidate directions:
- Sign language / gesture recognition gloves (different use case from VR DataGlove)
- Tangible/physical token interfaces
- Facial expression / facial gesture input
- Ultrasonic/acoustic interaction
- Tactile texture displays (skin-level, distinct from GROPE force feedback)
- Walking platforms / locomotion interfaces
- Ambient/spatial audio displays
- Early ubiquitous computing hardware prototypes
- Barcode/token-based game or data input
- Deformable/pressure-sensitive surface interfaces
- Any commercial oddity with genuinely weird input

## Phase 2: Launched 6 parallel research subagents

- ses_0f42ae84effe99fQHs94n27FAZ: Sign language recognition gloves
- ses_0f42ad9bbffe1DCqaR75CF0hRE: Tangible token/block interfaces
- ses_0f42ac8caffeEubKj7jtQpm14u: Weird unusual computer peripherals
- ses_0f42ab931ffen71Co3RwbKge44: Facial expression/muscle interfaces
- ses_0f42aaa57ffejDYspmrBj3QdXE: Foot/walking/locomotion interfaces
- ses_0f42a9aa8ffeu977QBPEDTM4Me: Tactile displays (skin-level)

## Phase 3: Review and selection

### Top candidates identified:

1. **Kramer's Talking Glove (Stanford, 1988-1991)**
   - ASL-to-speech glove. 14 strain gauge flex sensors, DECtalk speech synthesis, Motorola 68HC11
   - Commercial path: Virtual Technologies → CyberGlove → Immersion Corp
   - Distinct from VPL DataGlove (accessibility/communication vs VR)
   - Strong sources: patent US5047952A, Stanford RRD page, 1998 Wired interview

2. **Williams Performance-Driven Facial Animation (SIGGRAPH 1990, Apple)**
   - Reflective dots on face → real-time 3D character animation
   - Novel paradigm: facial expression as direct real-time computer input
   - Landmark SIGGRAPH 1990 paper, Lance Williams solo author
   - Strong source: SIGGRAPH History Archive

3. **Barcode Battler (Epoch, 1991)**
   - Handheld game using real product barcodes as game input
   - Swipe any product barcode → generated RPG characters and stats
   - Massive hit in Japan; commercial failure in West
   - Novel paradigm: ambient physical-world barcodes as game input

### Other candidates evaluated but not selected:
- VersaBraille (1979): Strong tactile display but primarily output; Kurzweil Reading Machine covers accessibility reading
- TORTIS (1974-76): Important but thin documentation, era-edge
- Synapse Relax (1984): BioMuse covers biofeedback territory
- Atari Puffer (1982-84): Unreleased prototype, limited documentation
- Stompin' (1986): NES Power Pad covers foot-pad territory
- Marble Answering Machine (1992): Concept design, not a hardware artifact
- Petajan Automatic Lipreading (1984-88): CV system, not user-facing HCI paradigm

## Phase 4: Deep research on selected candidates

Launched 3 parallel deep-research subagents:
- ses_0f4263edbffeHRCM80eDbq1kj3: Kramer's Talking Glove deep research
- ses_0f42628a4ffeBUl4EYFPFe0sfJ: Williams Facial Animation deep research
- ses_0f42611beffexrM62YDPamp7Vh: Barcode Battler deep research

All returned comprehensive reports with full sourcing, image URLs, and team details.

## Phase 5: Created info.json files

- potential/kramers-talking-glove/info.json
- potential/williams-facial-animation/info.json
- potential/barcode-battler/info.json

## Phase 6: Image download

Downloaded images for all three candidates:
- Talking Glove: 3 patent drawings (patentimages.storage.googleapis.com)
- Williams: SIGGRAPH 1990 title card (history.siggraph.org) — had typo in first attempt ("Annotation"), fixed to "Animation"
- Barcode Battler: 2 Wikimedia Commons images

## Phase 7: Promotion

- Ran `bun scripts/promote-potentials.ts` — wiki updated, data.ts silently dropped (known regex bug)
- Manually added 3 data.ts entries with local image paths
- Replaced remote image URLs in wiki with local `../assets/wiki/` paths
- Updated wiki Table of Contents (entries 45-47)
- Copied images to assets/wiki/ manually

## Phase 8: Verification

- `bun run typecheck` — passed
- `bun run build` — success: 47 exhibits + blog + about, 54 pages

## Artifacts added to collection:
1. **Barcode Battler** (Epoch Co., 1991) — barcode-scanning handheld RPG
2. **Talking Glove** (Kramer/Stanford, 1988-1991) — ASL-to-speech wearable
3. **Performance-Driven Facial Animation** (Williams/Apple ATG, 1990) — facial performance capture origin

## Known issues:
- Promotion script data.ts regex bug confirmed again; manual workaround used
- SIGGRAPH History Archive image URL had typo in first download attempt
- Remote URLs in wiki needed manual replacement to local paths
