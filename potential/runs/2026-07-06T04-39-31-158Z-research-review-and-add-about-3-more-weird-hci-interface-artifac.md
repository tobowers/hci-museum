# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Subagent results received (2026-07-06)

Six parallel research subagents returned results. Summary of promising candidates:

### From subagent 1 (obscure HCI):
- Polar PE 2000 (1982): Wireless HRM. Too fitness-device, overlaps with Synapse Relax/BioMuse. SKIP.
- Identimat 2000 (~1976): Hand geometry biometric. Pre-1976 core. SKIP.
- Sony Data Discman (1990/91): Pre-Kindle e-reader. Interesting but interaction is search-and-retrieve on tiny QWERTY — more form factor than interaction paradigm. DEFER.
- **Logitech ScanMan (1987)**: Human IS the scanning motor. Excellent HCI story. KEEP.
- **ThunderScan (1984)**: Printer-repurposed-as-scanner. Andy Hertzfeld hack. KEEP.

### From subagent 2 (body interfaces):
- Versatron Footmouse (1985): No images found. Weak. SKIP.
- NeuroCom Balance Master (1989): Clinical force platform. Wii Balance Board precursor. But clinical/medical. DEFER.
- Sip-and-Puff (~1980s): Overlaps with Hands Free Controller. SKIP.
- Lady's Glove (1991): Sensor glove, overlaps with DataGlove + music cluster. DEFER.
- HyperCello (1991): Augmented cello, overlaps with music cluster. DEFER.

### From subagent 3 (hypertext/CSCW/tangible):
- Guide (1982) / NoteCards (1984) / Intermedia (1985) / KMS (1983): All software-only hypertext. SKIP.
- Xerox Colab (1987): Meeting room, not discrete artifact. SKIP.
- Xerox LiveBoard (1992): Large interactive display. Interesting but close to SMART Board. DEFER.
- SMART Board (1991): Interactive whiteboard. Commercial hit, Wikimedia images. Good but somewhat obvious. DEFER.
- Marble Answering Machine (1992): Already deferred (copyright-locked images). SKIP.
- HyperCard (1987): Software. SKIP.
- Sculpt 3D (1987): Software. SKIP.

### From subagent 4 (consumer robots):
- **Big Trak (1979)**: Self-contained procedural programming + physical execution. Wikimedia images. KEEP.
- **Armatron (1984)**: Pure mechanical teleoperation, no computer. Wikimedia images. KEEP.
- Topo (1983): Androbot, Apple II peripheral robot. HERO 1 and Hubot already cover. DEFER.
- Teddy Ruxpin (1985): Animatronic bear. More toy/media format than HCI. DEFER.
- Omnibot (1984): Cassette-programmable robot. Overlaps with existing robot artifacts. DEFER.

### From subagent 5 (accessibility):
- Parastep FES (1990): Very medical. SKIP.
- Sonicguide (1976): Ultrasonic sensory substitution glasses. Interesting but niche. DEFER.
- Mowat Sensor (1977): Ultrasonic distance-to-vibration. Simple, but vibrotactile is underexplored. DEFER (revisit with more detail).
- Cyberlink (1991): Multi-biosignal headband. IBVA/BioMuse already cover. SKIP.
- Words+ Equalizer (1985): Hawking's system. Software-heavy. SKIP.

### From subagent 6 (experimental):
- **Aspen Movie Map (1978-1980)**: Hypermedia surrogate travel. Google Street View precursor. Touchscreen laserdisc navigation. KEEP.
- SMART Board (1991): Duplicate of above. SKIP.
- Blit / DMD 5620 (1982): Bell Labs mouse+window terminal before Mac. Wikimedia image. Good but Canon Cat covers alternative pre-Mac GUI. DEFER.
- EditDroid (1984): Lucasfilm NLE, 24 units. Images challenging. Overlaps with Quantel Paintbox as professional creative workstation. DEFER.
- MIT Holovideo Mark I (1989-1990): Holographic display. Radical but images academic/permission-required. DEFER.

## Selected for info.json creation:
1. Logitech ScanMan (1987)
2. ThunderScan (1984)  
3. Big Trak (1979)
4. Armatron (1984)
5. Aspen Movie Map (1978-1980)

Building info.json for top candidates...

## Final candidates selected (3):
1. Big Trak (1979) - Milton Bradley programmable toy tank. 17 Wikimedia images, Wikipedia article.
2. Armatron (1984) - Tomy/Radio Shack mechanical teleoperation arm. 7 Wikimedia images, Wikipedia article.
3. Logitech ScanMan (1987) - Handheld scanner, human IS the motor. 1 Wikimedia image (ScanMan Color, 1992, CC BY-SA).

## Image assessment:
- Big Trak: 17 Wikimedia Commons files. Key photos: white background tank, keypad close-up, motherboard, Soviet clones.
- Armatron: 7 Wikimedia Commons files. Key photos: arm in multiple angles, hand detail, Vintage Computer Festival exhibit.
- ScanMan: 1 Wikimedia Commons file (ScanMan Color, 1992, by Rama, CC BY-SA 2.0/3.0 FR). Musée Bolo collection.

## Candidates deferred (not promoted):
- Aspen Movie Map (1978-1980): No freely licensed images. YouTube stills only. Revisit if images surface.
- ThunderScan (1984): No Wikimedia images. Andy Hertzfeld story is great but can't promote without photos.
- SMART Board (1991): Good artifact but commercial/mainstream; less "weird" than current picks.
- Various others from subagent reports: HyperCard, NoteCards, Guide, etc. (software only), Sonicguide, Mowat Sensor (niche), Cyberlink (overlaps with IBVA/BioMuse).

Now promoting three selected candidates into collection...

## Promotion (2026-07-06)
- Ran `bun scripts/promote-potentials.ts`
- Script promoted 4 items: armatron, big-trak, marble-answering-machine, scanman
- Marble Answering Machine was accidentally promoted (old info.json in potential/ directory)
- Removed Marble section from wiki (lines 4272-4316) — deferred due to copyright-locked images
- Archived marble-answering-machine/info.json → info.json.archived to prevent future auto-promotion
- Manually added data.ts entries for armatron, big-trak, scanman (the script's regex bug drops them)
- Updated wiki ToC (items 82-84)
- Images downloaded to assets/wiki/:
  - assets/wiki/armatron-1.jpg (1.89 MB)
  - assets/wiki/big-trak-1.jpg (902 KB)
  - assets/wiki/scanman-1.jpg (2.65 MB)

## Verification
- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (84 exhibits, 99 pages)

## Lesson learned
- Always archive/rename old info.json files from deferred candidates in the potential directory BEFORE running the promote script, otherwise they will auto-promote.
- The promote-potentials.ts data.ts replacement regex bug is still unfixed. Manual data.ts editing required after each promotion.



