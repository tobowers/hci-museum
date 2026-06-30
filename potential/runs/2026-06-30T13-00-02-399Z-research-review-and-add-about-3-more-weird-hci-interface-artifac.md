# Run 2026-06-30T13-00: Research + Add ~3 HCI Artifacts

## Setup
- Memory loaded: 77 lines, latest gaps filled through 2026-06-29
- Current collection: ~55 exhibits (1976-1992)
- Deferred candidates: ~20 (see memory)
- Goal: find ~3 genuinely new, weird, interaction-model-rich artifacts

## Strategy
- Launch parallel research subagents exploring different modality gaps:
  1. Interactive videodisc / pre-web hypermedia interfaces
  2. Early wearable computers (full systems, not just displays like Private Eye)
  3. Electro-tactile / vibrotactile displays (not force-feedback haptics)
  4. Speech-output assistive computing (blind programmer terminals, etc.)
  5. Open-ended: "strange 1980s computer interfaces"

## Progress

### Subagent results (5 parallel, all returned)
1. Interactive videodisc — ~10 candidates (Aspen Movie Map, SDMS Dataland, DVI, BBC Domesday, etc.). Most are installation/room-scale, not artifact-scale.
2. Wearable computers — 7 candidates (Steve Mann WearComp2, BEHEMOTH, Half-QWERTY, etc.). Most post-1992 or already represented.
3. Electrotactile displays — 8 candidates (Optacon II, TVSS, Tickle Talker, Mowat Sensor, etc.). Most pre-window foundation (1969-1971) or thin on visual sources.
4. Speech-output terminals — 8 candidates (Total Talk, VERT, Braille 'n Speak, Vocal-Eyes, etc.). Important history but VersaBraille/Kurzweil already cover assistive computing.
5. Open-ended strange HCI — 15 candidates (Eudaemonic Shoe Computer, Drawing Prism, MBX, EXOS Hand Master, Spaceball, DataHand, etc.). Richest set.

### Selected for promotion: 3
- MBX Expansion System (1983) — Voice recognition gaming, doomed, well-documented
- The Drawing Prism (1985) — FTIR optical direct-drawing, SIGGRAPH paper, unique
- DataHand Keyboard (1990) — Radical finger-well keyboard, 1989 prototype, commercial 1990

### Image downloads
- DataHand: Wikimedia Commons (2 images, CC BY-SA 3.0) ✓
- Drawing Prism: SIGGRAPH History Archive (1 image) ✓
- MBX: videogamehouse.net images 404; used vintagecomputing.com flyer scans (2 images) ✓

### Collection integration
- promote-potentials.ts: Ran successfully (wiki sections added), data.ts entries silently dropped (known regex bug)
- data.ts: Manually added 3 entries with local image paths
- wiki.md: Fixed all image paths from remote to local, updated ToC (+3 entries)
- Typecheck: PASS
- Build: PASS (62 exhibits, 72 pages)
- New exhibit pages verified in public/exhibits/

### Outcome
- 3 artifacts added to collection (now 62 total)
- All images local under assets/wiki/
- Summary written to potential/runs/...summary.md
