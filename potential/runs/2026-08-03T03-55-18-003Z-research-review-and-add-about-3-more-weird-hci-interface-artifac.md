# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start (2026-08-03T03:55Z)

State check:
- 149 exhibits in src/data.ts (id: " count). Wiki ToC has 149 entries.
- `potential/id3d-hand-geometry/info.json` is COMPLETE (fully researched in the aborted 2026-08-02 14:26 run) but NEVER PROMOTED: no images downloaded, no data.ts entry, no wiki section. This is a ready-to-promote candidate (Recognition Systems ID-3D Hand Geometry Verifier, 1986).
- `potential/microvision/` has 4 images but no info.json and no research — ignore unless a subagent surfaces it as a strong candidate.
- No other active info.json files found (only id3d-hand-geometry).
- promote-potentials.ts still has known bugs (data.ts regex, image copy path, no ToC update). Plan: manual promotion as in prior runs.

Budget: 7 Octen total (3 subagents x 2 = 6, reserve 1 for validation). 2 Exa fallbacks (use only if needed for a final candidate validation).

## Progress log

### Carry-over candidate (from aborted 2026-08-02 14:26 run)

- `potential/id3d-hand-geometry/info.json` fully researched and vetted: Recognition Systems ID-3D Hand Geometry Verifier (1986, David Sidlauskas, San Jose). Body-as-credential biometrics — platen choreography printed on device, retro-reflective platen, Micron IS-32 DRAM-as-camera, 45° mirror for side view. Fills biometrics gap. NO overlap with existing collection.
- Commons image verified + downloaded: File:Hand_Geometry_Reading_Device.jpg -> potential/id3d-hand-geometry/images/id3d-hand-geometry-1.jpg (817x1049 JPEG, valid).

### Subagent launches (3 parallel, 2 Octen each = 6 used, 1 reserved)

ANGLE 1 — First-generation handheld electronic games (1976-1981):
- **Mattel Auto Race (1976)**: FIRST handheld electronic game. No buttons at all — two mechanical slide switches: 4-position gear-shift (sets speed, higher gear also speeds traffic) + 3-position lane-change lever. Hidden internal speed-trimmer potentiometer behind triangle screws. Rockwell B6000 calculator chip, 511 bytes of assembly by Mark Lesser, George J. Klose design. $24.99. Commons: MAutoRace.jpg (PD) + CC BY-SA photo. DISTINCTIVENESS 8/10.
- **Milton Bradley Microvision (1979)**: FIRST cartridge-based handheld console. CPU in cartridge (TI TMS1100 / Intel 8021), console = controls + LCD only. Analog rotary paddle + 12-button keypad under press-through game cartridge overlays (each cartridge relabels buttons by cutouts). Overlays tore; some games registered on release not press; up to 60% ESD-return rate (John Elder Robison memoir). $49.99, $15M year one. Jay Smith (Vectrex designer). Inspired Game Boy. Commons: 10+ PD teardown set + CC0. DISTINCTIVENESS 8/10.
- Missile Attack (1976): zero Commons images -> REJECT. Mattel Football: conventional button grid -> 6/10 backup. Entex Select-A-Game: overlaps Microvision.

ANGLE 2 — Electronic learning aids / talking toys (1978-1990):
- **All image-blocked.** TI Super Speak & Read (1988, finger-on-printed-word position-sensitive keyboard, distinctiveness 9/10 but ZERO Commons images). VTech Talking Whiz Kid (1986/87, optical program-card reader, distinctiveness 7/10, ZERO Commons images). TI Speak & Read 1980 (keyboard, not wand — not distinct, overlaps Magic Wand). Muppet Learning Keys (0 images). Chalk Board PowerPad (0 images). BLOCKED across the board -> discard angle.

ANGLE 3 — Electronic still-video cameras (1981-1991):
- **Sony Mavica (1981 prototype)**: World's first electronic still camera. Press shutter -> one analog NTSC field FM-recorded to 2" Mavipak floppy (50 images). To view: remove disk, insert in SEPARATE TV playback unit. No onboard screen, no film. The floppy is the film. CCD 570x490. Morita unveiling Aug 1981. Commons: 2 CC BY-SA photos of actual surviving 1981 prototype. DISTINCTIVENESS 8.5/10.
- **Kodak DCS-100 (1991)**: First commercial DSLR. Camera-computer split: Nikon F3 body + tethered shoulder-worn Digital Storage Unit (200MB SCSI drive + A/D + batteries). Histogram feedback, viewfinder crop templates, keyboard captioning on DSU. 987 units, $20-25K. Commons: 2 CC images. DISTINCTIVENESS 9.5/10.
- Canon RC-701 (1986): first to sell, less interactionally odd -> fallback.

### Decisions

PROMOTE (4):
1. Recognition Systems ID-3D Hand Geometry Verifier (1986) — carry-over, biometrics gap.
2. Mattel Auto Race (1976) — first handheld electronic game; two-lever slide-switch interaction; no buttons at all.
3. Milton Bradley Microvision (1979) — first cartridge handheld; CPU-in-cartridge; press-through overlays; analog paddle.
4. Sony Mavica (1981) — first electronic still camera; analog floppy capture; two-device capture/display loop.

DEFER (1):
- Kodak DCS-100 (1991) — strong interaction story (camera-computer split) but would make THIRD camera artifact (Dycam 1990, Mavica 1981) in collection. Document as deferred candidate in memory.

Image verification: all 6 target Commons files resolved via Commons API (with proper URL encoding + User-Agent). Download pending.

(End of log so far)
