# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Initial research (parallel subagents)

Launched 4 research subagents:
1. Weird game controllers/peripherals (hci-research-subagent)
2. Early smart home automation devices (hci-research-subagent) 
3. Academic/research HCI prototypes (hci-research-subagent)
4. Novel music/art/exhibition interfaces (hci-research-subagent)

### Subagent 1 results (game controllers):
- Coleco Telstar Arcade (1977) — STRONG, 3-in-1 triangular console, CC images on Wikimedia
- Famicom 3D System (1987) — active shutter glasses, overlaps with Vectrex 3D Imager
- Miracle Piano (1990) — DEFERRED in memory, skip
- Vectrex Light Pen (1983) — light pen on vector display, clever hack
- Pachinko Controller (1991) — Japan-only, fair use images only
- NES Hot Seat (1990) — tilt-chair, very rare, limited documentation

### Subagent 2 results (smart home):
- HyperTek HomeBrain (1983), GE HomeMinder (1984), Unity Systems Home Manager (1985)
- CL9 CORE Remote (1987) — Steve Wozniak's universal remote
- TRON Intelligent House (1989), TRS-80 Plug 'n Power (1981)
- VERDICT: Smart home candidates are less aligned with museum's embodied-interaction focus

### Subagent 3 results (research prototypes):
- Blit Terminal (1982, Bell Labs), Rooms (1986, Xerox PARC, software-only)
- Colab/Cognoter (1987, Xerox PARC), NoteCards (1985, software-only)
- Multi-Touch 3D Tablet (1985, U Toronto/Buxton), Peridot (1986, software-only)
- VERDICT: Most are software-only or overlap with existing entries

### Subagent 4 results (music/art):
- Very Nervous System (1986) — DEFERRED in memory, skip
- Music Mouse (1986, software-only), Roland MC-8 (1977), SoundDroid (1981-87)
- Kyma (1986-90, software-only), MANDALA (1986) — ALREADY IN MUSEUM
- VERDICT: No fresh candidates from this angle

## Phase 2: Top candidates selected for verification research

1. Coleco Telstar Arcade (1977) — PRIMARY. 3-in-1 console-as-controller. CC images.
2. Vectrex Light Pen (1983) — SECONDARY. Bullseye-tracking hack on vector display.
3. CL9 CORE Remote (1987) — TERTIARY. Wozniak's universal remote.
4. Milton Bradley Dark Tower (1981) — TERTIARY. Electronic game-master tower.

## Phase 3: Verification research (parallel subagents)

Launched 3 verification subagents:
1. Coleco Telstar Arcade — comprehensive report with 14 sources, 22 CC images on Wikimedia
2. Vectrex Light Pen — comprehensive report with 14 sources, fair-use images from Vectrex Museum
3. CL9 CORE + Dark Tower — both researched, Dark Tower has good documentation but fair-use images

### Decision:
- **PROMOTE: Coleco Telstar Arcade (1977)** — excellent CC images, Baer connection, novel interaction model
- **PROMOTE: Vectrex Light Pen (1983)** — cleaver hack, good documentation, distinct from Vectrex 3D Imager
- **DEFER: CL9 CORE** — interesting but not weird enough
- **DEFER: Dark Tower** — good interaction model but fair-use images only, revisit later

## Phase 4: Promotion

### Surprise candidate:
The promote-potentials.ts script also promoted `sf1-pneumatic` (Street Fighter Pneumatic Controller, 1987), which had an existing info.json in potential/sf1-pneumatic/ that hadn't been previously promoted. This is a strong candidate — pneumatic force-sensing arcade pads that injured players and were recalled after ~1,000 units.

### Actions taken:
1. Downloaded CC and fair-use images for all three candidates
2. Created potential/<slug>/info.json for coleco-telstar-arcade and vectrex-light-pen
3. Ran promote-potentials.ts (appended wiki, failed to update data.ts due to known regex bug)
4. Manually added data.ts entries for all three artifacts
5. Copied images to assets/wiki/ with proper naming
6. Fixed wiki image references from remote URLs to local assets/wiki/ paths
7. Updated wiki Table of Contents (entries 95-97)
8. Verified typecheck passes
9. Verified build passes (100 exhibits)

## Phase 5: Verification

- Typecheck: PASS (tsc --noEmit, no errors)
- Build: PASS (100 exhibits + blog + about, 121 pages)
- data.ts: 101 slugs, all 3 new entries present
- wiki.md: Image references changed to local assets/wiki/ paths
- assets/wiki/: 11 new image files (4 Telstar + 3 SF1 + 4 Vectrex LP)

### Known issues (pre-existing, not introduced by this run):
- Wiki ToC was already incomplete (Surf Champ, Iwata Desktop Force Display, 2-XL promoted 2026-07-10 but ToC entries missing)
- promote-potentials.ts regex bug still unfixed (data.ts manual edit workaround used)
