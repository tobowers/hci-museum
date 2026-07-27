# Run Trace: 2026-07-27 Research Run

## Setup
- Archived 3 stale info.json files from previous run: cracklebox, novation-cat, topo
- 122 exhibits currently in collection
- Memory guidance: try new topical angles, image availability is dominant bottleneck

## Research Angles Launched (7 parallel subagents)

1. **Game Controllers** (ses_05bdb55faffe) — 2 new candidates found, most were already-in-museum or deferred
2. **Telephony HCI** (ses_05bdb3610ffe) — Famicom Network System found (9+ PD images), also Deccafax VP1 (CC BY-SA 4.0)
3. **Music HCI** (ses_05bdb18e5ffe) — All 5 candidates already-in-museum, deferred, or image-blocked
4. **Environmental Sensing** (ses_05bdafe5bffe) — Broderbund Science Toolkit, HotBits, Vaisala HAWS, X10 CP290 found but no CC images
5. **Education** (ses_05bdae51cffe) — TI Little Professor found (CC-BY-SA), also VTech Whiz Kid, GeoSafari, VideoSmarts (no images)
6. **Haptics** (ses_05bdac396ffe) — All candidates already-in-museum (Virtual Fixtures, TELESAR I)
7. **Weird Home Computer Peripherals** (ses_05bda9724ffe) — Videoface found (CC), also Penman, Magic Voice (overlapping)

## Filtering Results

37 raw candidates across 7 subagents. After filtering out:
- Already in museum: Atari Mindlink, BioMuse, Virtual Fixtures, AtariLab, MBX, Miracle Piano, Very Nervous System
- Already deferred: Miracle Piano, Very Nervous System
- Wrong era: Canon Communicator
- Image-blocked: Broderbund Science Toolkit, HotBits, Vaisala HAWS, Sony PCT-15, GammaFax, Telstar, Airdrums, Steiner EVI, Dynacord, VTech Whiz Kid, GeoSafari, VideoSmarts, JPL FRHC, Multi-Modal Mouse, Penman

## Final 3 Candidates Promoted

1. **Famicom Network System (1988)** — 3 CC0/PD images from Commons. Game console as network terminal.
2. **Videoface Digitizer (1986)** — 1 CC-BY-SA image from Commons. Real-time video frame capture.
3. **TI Little Professor (1976)** — 2 CC images from Commons. Backwards calculator, first electronic educational toy.

## Promotion Steps (Manual)
- Created info.json files in potential/famicom-network-system, potential/videoface, potential/little-professor
- Downloaded 6 Commons images to potential/*/images/
- Copied 6 images to assets/wiki/
- Added 3 wiki entries to docs/hci-wiki.md
- Added 3 ToC entries (120-122)
- Updated intro count from "122" to "125"
- Added 3 entries to src/data.ts with id, wikiTitle, year, slug, sortYear, title, subtitle, blurb, tags, image
- Typecheck: PASS
- Build: SUCCESS (125 exhibits, 161 pages)

## Image Sources
- Famicom: PD/CC0 on Commons (Evan-Amos set)
- Videoface: CC-BY-SA 4.0 on Commons
- Little Professor: CC-BY-SA 3.0 and CC BY 2.0 on Commons

## Notes
- This run proved productive in previously unexplored angles: telephony/network HCI and video capture peripherals
- Image availability was NOT a bottleneck this run — 3 strong candidates all had CC images
- The 7 subagent approach with distinct topical angles worked well
- Music HCI angle is thoroughly exhausted; haptics similarly saturated
- Education and environmental sensing have good candidates but need image work
