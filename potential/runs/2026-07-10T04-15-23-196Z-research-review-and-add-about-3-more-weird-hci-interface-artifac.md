# Trace: 2026-07-10T04-15-23-196Z — Research, review, and add ~3 more weird HCI interface artifacts

## Setup
- Read docs/beepy-memory.md for current collection state and deferred list
- Collection now has 80+ artifacts, covering many modalities
- Key remaining gaps: tangible token interfaces (image-locked), body-worn vibrotactile (image-locked), speech-to-visual biofeedback (no images)

## Research plan
Using parallel task subagents (hci-research-subagent) for candidate discovery.
Angles:
1. Unusual interactive installations / public art 1976-1992
2. Unique computer form factors with novel HCI
3. Early force feedback / robotics interfaces (non-arcade)
4. Unconventional sensing modalities (beyond EMG/EEG)
5. Consumer devices with unusual physical interfaces

## Candidate evaluation

### Strong candidates (selected for info.json):
1. **2-XL (1978)** — Mego talking robot toy. 8-track tape track-switching as interactive branching. Commercial, great images (Wikimedia Commons), distinctive analog-digital hybrid HCI. No overlap with existing collection.
2. **Surf Champ (1985)** — ZX Spectrum game with miniature plastic surfboard overlay. Weight-shifting on hands translates to surfing physics. 3,000 units sold. BBC feature with photos. Proprioceptive embodied interaction — unique in collection.
3. **Iwata Desktop Force Display (1990)** — SIGGRAPH 1990. Parallel pantograph compact haptic device. "Blind exploration" paradigm — finding invisible objects by touch only. Distinct from GROPE-III (room-scale) and Minsky Sandpaper (texture). Strong academic sources.

### Considered but not selected:
- Atari Project Puffer (1983) — unreleased prototype; never commercially shipped
- Exus Foot Craz (1983) — foot pad overlaps with NES Power Pad in collection
- Stompin' (1986) — foot grid, overlaps with Power Pad
- Atari Video Music (1976) — audio visualizer, interaction is knob-turning; music section already well-populated
- Mind Mirror EEG (1976) — overlaps with IBVA (1991) and Synapse Relax (1984) in collection
- Nose Gesture Interface (1991) — research prototype, thin visual documentation
- Hole-in-Space (1980) — public installation, no physical artifact
- The Erl King (1982-1985) — interactive cinema installation, art more than HCI hardware
- Walk-Through Computer (1990) — museum exhibit, not a product
- Interactive Plant Growing (1992) — art installation, no discrete hardware artifact
- Liquid Views (1992) — art installation
- SPIDAR (1991) — string-based haptics, overlaps with existing haptics entries
- JPL FRHC (1980) — overlaps with DLR Control Ball (already in museum)
- 64-Solenoid Display (1987) — research prototype, thin on non-paywalled images
- Sarcos Dextrous Arm Master (1988-91) — overlaps with EXOS (deferred)
- Seiko UC-2000 (1984) — overlaps with Seiko RC-1000 (already in museum)
- PXL-2000 (1987) — camcorder innovation, not HCI interaction innovation
- Sony Data Discman (1990) — e-reader, interaction model is search+read, not novel
- View-Master Interactive Vision (1988) — strong alternate; VHS+graphics compositing; similarity to Terebikko but different mechanisms

## Promotion results

### Promoted to collection (3 artifacts):
1. **2-XL (1978)** — Mego talking robot toy. Wikimedia Commons image (CC-licensed). Added to data.ts and wiki.
2. **Surf Champ (1985)** — ZX Spectrum game with physical surfboard controller. Images from Spectrum Computing archive (community preservation). Added to data.ts and wiki.
3. **Iwata Desktop Force Display (1990)** — SIGGRAPH desktop haptic device. Image from SIGGRAPH History Archives. Added to data.ts and wiki.

### Verification:
- Typecheck: PASS (tsc --noEmit)
- Build: PASS (95 exhibits + blog + about, 114 pages)

### Images downloaded:
- assets/wiki/2-XL_Educational_Toy_Robot_Mego_Corporation_1978.jpg (Wikimedia Commons, 2279x3014)
- assets/wiki/surf-champ-surfboard-1.jpg (Spectrum Computing, 624x350)
- assets/wiki/surf-champ-front.jpg (Spectrum Computing, 2918x1900)
- assets/wiki/iwata-desktop-force-display-1.jpg (SIGGRAPH History Archives, 716x1080)

### Deferred:
- View-Master Interactive Vision (1988): strong candidate, VHS+8-bit graphics compositing. Interesting hybrid media interaction. Deferred for future run — museum already has Terebikko covering VHS-based interaction, though mechanisms differ.

### Source quality notes:
- 2-XL: Excellent. Wikipedia, Wikimedia Commons, Boing Boing, enthusiast sites. Strong museum collection at The Strong.
- Surf Champ: Good but image quality is modest. BBC article is the primary source. Spectrum Computing provides archival images. No freely-licensed photos of the surfboard in use exist.
- Iwata Desktop Force Display: Strong. Published SIGGRAPH 1990 paper with ACM DOI. SIGGRAPH History Archives provides description and image.

