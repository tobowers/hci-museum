# Beepy Curator Run — 2026-07-26

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.
Target count: 122 → ~125 exhibits.

## Strategy
Per memory guidance, focus on UNEXPLORED angles:
- Early home video game controllers with unusual physical principles
- Early scanning/OCR hardware with distinctive physical interaction  
- Haptic/force-feedback devices beyond what's in collection
- Early electronic musical instruments with novel body interfaces
- Early computer telephony / phone-computer bridges
- Early consumer biometric/physiological interfaces
- Tangible/physical computing beyond what's already covered
- Early wearable computer interfaces
- Early network terminal hardware with unusual interfaces

## Progress Log

### 13:57 - Launched 6 parallel research subagents
- Unusual arcade/console controllers (1976-1992)
- Computer telephony interfaces
- Unusual electronic music interfaces
- Early scanning/OCR/document interfaces
- Consumer biometric/physiological interfaces
- Haptic/force-feedback beyond collection

### 14:02 - All subagents completed. Filtering results
Key findings across all agents:
- Many already-in-museum returns (RDI Halcyon, Virtuality, Famicom 3D System)
- Many already-deferred returns (SOUND=SPACE, Miracle Piano, TX-1, etc.)
- Many image-blocked strong candidates (BodyLink, Identix, ThunderScan, DigiView)

**Candidates with CC images to investigate further:**
1. ICL One Per Desk (1984) - Computer+phone hybrid, 3 CC images on Commons
2. AT&T VideoPhone 2500 (1992) - Video telephone, 1 CC image on Commons
3. Hayes Smartmodem (1981) - AT commands, multiple CC images
4. Datacopy Model 700 (1985) - First PC flatbed scanner, CC images
5. Beeb Video Digitiser (1983) - Camera frame grabber for BBC Micro, CC images
6. SpectraSCAN (1985) - First color flatbed, CC image

**Top picks based on HCI novelty + image availability:**
1. ICL One Per Desk - weird, embodied, phone+computer hybrid. Perfect fit.
2. AT&T VideoPhone 2500 - consumer video phone paradigm.
3. Datacopy Model 700 - defined the flatbed scanner interaction model.

### 14:15 - Built info.json files for all 3 candidates
- potential/icl-one-per-desk/info.json
- potential/att-videophone-2500/info.json
- potential/datacopy-model-700/info.json

### 14:16 - Proceeding to promotion
Need to: check for stale info.json files, download images, promote, manually fix data.ts + wiki ToC.

### 14:17 - Archived stale info.json files from prior runs
Archived: topo/info.json, novation-cat/info.json, cracklebox/info.json → .archived

### 14:18 - Downloaded all 6 images to assets/wiki/
- icl-one-per-desk-1.webp, icl-one-per-desk-2.jpg, icl-one-per-desk-3.jpg
- att-videophone-2500-1.jpg (2.7MB)
- datacopy-model-700-1.png, datacopy-model-700-2.jpg

### 14:20 - Ran promote-potentials.ts (3 promoted)
Wiki updated, data.ts NOT updated (script bug persists)

### 14:22 - Manual fixes completed
- Fixed wiki image paths (6 remote URLs → local assets/wiki/ paths)
- Added 3 data.ts entries
- Updated wiki ToC (entries 120-122)

### 14:25 - Verification
- Typecheck: passed (0 errors)
- Build: 125 exhibits (was 122), 161 pages, passed

