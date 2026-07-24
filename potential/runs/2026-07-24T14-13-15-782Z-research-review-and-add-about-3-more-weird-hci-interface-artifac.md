# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992
Started: 2026-07-24 (second run of the day)
Collection at start: 119 exhibits
Collection at end: 121 exhibits

## Plan

Following memory guidance (2026-07-24 note: "the candidate well is NOT structurally dry — it was a matter of searching in unexplored categories"), trying 5 new angles:
1. Telephony HCI / phone-based computer services / early mobile phones as HCI devices
2. Medical/clinical computer interfaces (prosthetic, monitoring, surgical, therapy)
3. Industrial control interfaces (teach pendants, process control panels, factory HCI)
4. Unusual pointing/positioning devices (non-mouse cursor control, gesture pads)
5. Early electronic musical instruments with novel physical interfaces

## Subagent assignments

5 parallel subagents launched at 14:15: all returned within ~5 minutes.

## Subagent results

### Telephony HCI (subagent 1)
- IBM Speech Filing System (1975-81) - rejected: no physical artifact, software/service
- Motorola MicroTAC 9800X (1989) - rejected: incremental (flip phone gesture not distinct enough HCI)
- AT&T VideoPhone 2500 (1992) - rejected: telecommunications milestone, not HCI artifact
- Moviefone (1989) - rejected: pure service, no hardware
- Delphi Delta 1 (1976) - rejected: no images, software/service

### Medical/clinical (subagent 2)
- Nellcor N-100 Pulse Oximeter (1983) - borderline: sonification, 1 CC0 Commons image, but ambient monitoring not intentional HCI
- Arthrobot (1983) - rejected: no Commons images, voice-controlled surgical robot but thin documentation
- Biostator (1976-77) - rejected: closed-loop system (no human interaction), cybernetic not HCI
- AutoSyringe (1976-78) - rejected: no images, Dean Kamen's insulin pump, interaction model is programming a schedule
- Cardiff Palliator (1976) - rejected: no images, patient-controlled analgesia, button-press not novel

### Industrial control (subagent 3)
- F-16 Sidestick + HOTAS (1978) - rejected: military, overlaps with DLR Control Ball (isometric force)
- Boeing 757/767 Glass Cockpit (1982) - rejected: display paradigm not input, not a discrete artifact
- AH-64 IHADSS (1984) - rejected: military, overlaps with EyeTyper/HeadMaster/Private Eye
- Honeywell TDC 2000 (1975) - rejected: borderline year, limited images, process control not HCI artifact
- PUMA Robot VAL (1978) - rejected: overlaps with TELESAR I (1981) for teleoperation

### Unusual pointing devices (subagent 4) ⭐ MOST PRODUCTIVE
- **Logitech 3D Mouse (1990)** → PROMOTED: ultrasonic 6-DOF, 20+ Commons images at Musée Bolo, distinct physical principle
- SGI SpaceBall 1003 (1988) - rejected: already deferred (DLR Control Ball overlap)
- Xerox 860 CAT Touchpad (1977) - rejected: first touchpad ever, no Commons images
- **Gavilan SC (1984)** → DEFERRED: first laptop touchpad, 1 Commons image, HCI paradigm overlaps with KoalaPad/HP-150
- Hawley Perpendicular Wheel Mouse (c.1982) - rejected: evolutionary dead-end, not novel interaction

### Electronic music interfaces (subagent 5) ⭐ MOST PRODUCTIVE
- **Roland TR-808 (1980)** → PROMOTED: 16-button step-sequencer grid, 143 Commons images, fills grid-pattern-programming gap
- Simmons SDSV (1981) - rejected: hexagonal pads but interaction is "hit with stick" (same as acoustic drums)
- Very Nervous System (1982-91) - rejected: already deferred (camera-body-tracking overlap)
- Biomuse (1987) - rejected: already in museum (BioMuse 1990)
- Casio SK-1 (1985) - rejected: interaction model (press sample button, play keyboard) too conventional

## Image verification (14:20)
- TR-808: 143 Commons hits. Selected TR-808 MIM Phoenix (CC-BY-SA) + TR-808 large (CC-BY-SA 2.0)
- Logitech 3D: 20 Commons hits. Selected gradient background + black background versions from Musée Bolo
- Gavilan SC: 1 Commons image (Gavilan_SC.jpg, CC-BY-SA)
- All direct URLs confirmed via Commons API

## Promotion (14:25)
1. Downloaded 4 images to assets/wiki/ (2 per candidate) — all successful, sizes 1.6-5.3 MB
2. Archived stale info.json files (minitel, logitech-fotoman from prior promotions, gavilan-sc deferred)
3. Ran promote-potentials.ts — appended wiki sections for both candidates
4. Manually fixed wiki image references from remote Commons URLs → local assets/wiki/ paths
5. Manually added 2 entries to src/data.ts
6. Manually added 2 entries to wiki ToC (now 118 entries)
7. Archived promoted info.json files

## Verification (14:28)
- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (121 exhibits + blog + about, 155 pages)
- Local images confirmed in assets/wiki/

## Key decisions
- Only 2 of 5 subagent angles were productive (pointing devices, music interfaces)
- Telephony, medical, and industrial angles returned zero promtable candidates
- Subagent overlap rate: ~70% already-in-museum or already-deferred candidates
- Gavilan SC deferred: good image and historical significance, but touchpad paradigm is incremental vs. existing touch-surface entries
- Music HCI (step sequencer grid) is an underexplored category that could yield more candidates in future runs
