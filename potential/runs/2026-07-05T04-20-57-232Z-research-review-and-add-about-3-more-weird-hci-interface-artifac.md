# Run Trace: 2026-07-05T04-20-57-232Z

Goal: Research ~3 more weird HCI artifacts (1976-1992) and add strongest to collection.

## Phase 1: Understanding current state
- Read beepy-memory.md: 77 artifacts in collection, many deferred candidates and known gaps
- Known unfilled gaps: speech-to-visual biofeedback, body-worn vibrotactile (images pending)
- Deferred candidates to avoid re-scouting: Aesthedes (available for promotion), Hotz MIDI Translator, DataSoft Le Stick, many others

## Phase 2: Research subagents launched
- 5 parallel subagents: muscle/EMG, AAC/accessibility, tangible/physical, consumer oddities, output/display
- All completed. Many returned duplicates already in museum: GROPE-III, Soundbeam, Digital Desk, Microwriter, VersaBraille, Canon Communicator, Rutgers Master

## Phase 3: Filtering and candidate selection
Filtering out duplicates and overlaps:

**Disqualified (already in museum):** GROPE-III, Soundbeam, Digital Desk, Microwriter, VersaBraille
**Disqualified (already deferred):** Canon Communicator, Rutgers Master
**Disqualified (overlap):** Famicom 3D System (overlaps Vectrex 3D Imager), Zygo Model 100 (overlaps HeadMaster), Rosenboom EMG system (overlaps BioMuse), Thought Technology MyoTrac (overlaps Synapse Relax), Possum Commander (overlaps Nintendo Hands Free), MyoBuoy (simple threshold switch, not interaction-rich), Covox Voice Master (overlaps DragonDictate), LJN Video Art (not a novel interaction paradigm), Terebikko (edutainment toy, press-one-of-four-buttons), AARON (AI art, not HCI), SLA-1 (manufacturing, not HCI)

**Strong candidates remaining:**
1. **AtariLab (1983)** — Physical science probes→home computer via joystick port. REAL physical computing precursor. Well documented (Wikipedia, Atari archives, Antic magazine). Unique interaction model.
2. **SGI Dial and Button Box (c. 1985)** — Physical analog knobs + buttons for 3D workstation control. Dedicated physical controllers, two-handed interaction. Professional but distinct paradigm. Well documented (CHM, sgistuff.net).
3. **Marble Answering Machine (1992)** — Physical marbles as data tokens. Foundational TUI concept by Durrell Bishop. No screen/keyboard. Prototype at edge of era but canonical.
4. **Valiant Turtle (1983)** — Logo robot that physically draws. Educational robotics as physical output. Different from HERO 1/Hubot (companion robots).
5. **Covox Voice Master (1984)** — Consumer speech I/O on 8-bit computers. Some overlap with DragonDictate but different market/era.

## Phase 4: Deep research on top candidates
- AtariLab (1983): Deep research complete. Richly documented. 15-year-old programmer David Egolf, Priscilla Laws at Dickinson College, Leslie Wolf product manager. Joystick port repurposed as ADC. Atari collapse killed it; spawned Vernier's ULI (40K units sold). CC-licensed images on Wikimedia. STRONG.
- SGI Dial and Button Box (c. 1985): Deep research complete. 8 dials + 32 buttons, RS-232 serial, Danaher Controls OEM. Used in Alias/Wavefront/Softimage. Dedicated physical controls philosophy. CC-licensed images on Wikimedia. STRONG.
- Marble Answering Machine (1992): Deep research complete. Canonical TUI prototype by Durrell Bishop at RCA. Images locked behind MIT Press copyright (Moggridge's Designing Interactions). No freely-licensed images found. DEFER — create info.json but cannot promote without image licensing.

## Phase 5: Building info.json files
- Promoting: AtariLab, SGI Dial Box
- Deferring: Marble Answering Machine (image licensing)
- Also creating info.json for Marble Answering Machine for the record

## Phase 6: Collection promotion
- Created info.json for all 3 candidates in potential/
- Downloaded CC-licensed images to assets/wiki/:
  - atarilab-temperature.jpeg (CC BY-SA 2.5, Wikimedia)
  - atarilab-hardware.jpg (Antic Magazine, Oct 1984)
  - atarilab-display.jpg (Antic Magazine, Oct 1984)
  - sgi-dial-box-front.jpg (CC BY-SA 3.0, Wikimedia)
  - sgi-dial-box-back.jpg (CC BY-SA 3.0, Wikimedia)
  - sgi-dial-box-sn921.jpg (CC BY-SA 3.0, Wikimedia)
- Manually edited docs/hci-wiki.md: appended wiki sections + updated ToC (entries 78-79) + updated "seventy-nine projects"
- Manually edited src/data.ts: added 2 new exhibit entries before closing `];`
- Verifications:
  - Typecheck: PASSED
  - Build: PASSED (79 exhibits + blog + about, 93 pages)

## Added to collection
1. **AtariLab (1983)** — Home computer as scientific instrument. Joystick port repurposed as general-purpose ADC. Temperature and light probes. Software by a 15-year-old. Killed by Atari collapse; spawned Vernier's ULI (40K units). 
2. **SGI Dial and Button Box (1986)** — Dedicated physical controls for 3D workstations. Two-handed bimanual interaction. 8 dials + 32 buttons. "Instrument philosophy" of interface design.

## Deferred
- **Marble Answering Machine (1992)** — Foundational TUI prototype by Durrell Bishop at RCA. Image licensing issue: canonical photos in Moggridge's "Designing Interactions" (MIT Press, copyright-protected). No freely-licensed images found on Wikimedia Commons. info.json created in potential/marble-answering-machine/ for future reference.

