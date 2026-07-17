# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Research Phase

### Step 1: Audit
- Found 3 active info.json files in potential/: midi-dance-floor, flute-playing-machine, jhu-serial-code-keyboard
- All three are pre-built candidates with savedImages present
- No other stale info.json files — safe to run promote-potentials

### Step 2: Research Subagents (4 launched in parallel)
- **Biometric HCI**: Found 12 candidates across retinal, hand geometry, fingerprint, voice, signature. Strongest: EyeDentify 7.5 (1982-83, first commercial retinal scanner) but image availability uncertain.
- **Telepresence/Remote Manipulation**: Found 19 candidates. Most military/industrial. Consumer standouts: TOMY Verbot (1984), Microbot TeachMover (1982).
- **Consumer Robot Programming Toys**: Identified Big Trak, Omnibot, Verbot, Topo, Teddy Ruxpin, Capsela, HERO Jr. But Big Trak and HERO 1 already in museum.
- **Interactive Floor/Multi-Touch**: Found VIDEOPLACE, CMU Sensor Frame, CERN multi-touch, Active Badge, Put-That-There — many already in museum.

### Step 3: Candidate Evaluation

**Pre-built candidates evaluated:**

1. **Flute Playing Machine** (1979-1982) — Martin Riches
   - Drawing-to-acoustic-flute; photocells read felt-tip marks; 12 electromagnetic flute keys
   - 4 images confirmed working (martinriches.de, 200 OK)
   - Institutional home: Berlinische Galerie
   - Distinct from UPIC (which drives synthesizer — this drives a real acoustic flute)
   - Image rights: CC BY-NC-ND (restrictive but museum is non-commercial)
   - VERDICT: PROMOTE ✅

2. **MIDI Dance Floor** (1989-1990) — Russell Pinkston, UT Austin
   - 128 FSRs under Marley dance floor; continuous pressure → MIDI → music/video
   - 2 images confirmed working (columbia.edu, 200 OK)
   - Used with Merce Cunningham dancers; JASA 1990 publication
   - Distinct from NES Power Pad (binary) and Stompin' (3×3 arcade grid)
   - Images are small GIFs but usable
   - VERDICT: PROMOTE ✅

3. **JHU Serial Code Keyboard** (1983) — Wolfger Schneider, JHU APL
   - Frequency-encoded pseudo-Morse with 3-position switch
   - 1 image (Creative Computing magazine scan)
   - Overlaps with existing text input devices (Microwriter, BAT, DataHand, Twiddler)
   - Weakest visual documentation
   - VERDICT: DEFER — archive info.json

**Research agent candidates considered:**
- EyeDentify 7.5 (1982-83): Strong biometric angle but image availability uncertain. Could be 3rd candidate if images surface.
- Teddy Ruxpin (1985): Strong interaction model but overlaps with Terebikko/2-XL cassette-based interaction.
- TOMY Verbot (1984): Voice-controlled remote manipulation. Voice heavily covered in collection.
- Capsela Robotic Workshop (1987): Overlaps with AtariLab physical computing.


## Promotion Phase

### Step 4: Pre-built Candidate Evaluation
Three pre-built info.json files were found:

1. **Flute Playing Machine** (1979-1982, Martin Riches) — ✅ PROMOTE
   - Already in wiki body (line 5470), local images in assets/wiki/
   - Missing from ToC and data.ts — half-promoted from prior run
   - Images: 4 photos from martinriches.de, all HTTP 200

2. **MIDI Dance Floor** (1989-1990, Russell Pinkston) — ✅ PROMOTE
   - Already in wiki body (line 5561) but with REMOTE image URLs
   - Missing from ToC and data.ts — half-promoted from prior run
   - Images: 2 GIFs from columbia.edu, already copied to assets/wiki/

3. **JHU Serial Code Keyboard** (1983) — ❌ DEFER
   - Only 1 magazine scan image, overlaps with existing text input devices
   - info.json archived to .archived

### Step 5: Promotion (manual — script detected wiki presence and skipped)

Wiki edits:
- Updated intro from "one hundred and eight" to "one hundred and ten"
- Added ToC entries #106 (Flute Playing Machine) and #107 (MIDI Dance Floor)
- Fixed MIDI Dance Floor remote image URLs → local assets/wiki/ paths

Data.ts edits:
- Added Flute Playing Machine entry (id: flute-playing-machine, sortYear: 1980)
- Added MIDI Dance Floor entry (id: midi-dance-floor, sortYear: 1989)

### Step 6: Verification
- `bun run typecheck` → passed (no errors)
- `bun run build` → built successfully (110 exhibits, 136 pages)
- Both exhibit pages generated: public/exhibits/flute-playing-machine/ and public/exhibits/midi-dance-floor/
- Info.json files archived to .archived for both promoted candidates

