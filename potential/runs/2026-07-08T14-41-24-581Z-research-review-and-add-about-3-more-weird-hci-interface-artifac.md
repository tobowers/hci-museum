# Research Run — 2026-07-08T14:41:24.581Z

Goal: Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Phase 1: Initial setup
- Read beepy-memory.md — current on all deferred/rejected candidates
- Noted active info.json files in potential/ for aesthedes and buchla-lightning (both deferred, not promoted) — will archive before running promote-potentials.ts
- Marble Answering Machine already archived

## Phase 2: Launching research subagents
- Launching 4 parallel subagents with different search angles
- Targetting gaps: vibrotactile displays, tangible interfaces, unusual physical controllers, novel display tech

## Phase 3: Reviewing subagent results
Filtering out already-in-museum returns:
- Synapse Relax (1984) — already in museum ❌
- DigitalDesk (1991) — already in museum ❌  
- BigTrak (1979) — already in museum ❌
- VersaBraille (1979) — already in museum ❌
- AtariLab (1983) — already in museum ❌

Promising new candidates to investigate deeper:
1. **Sega SubRoc-3D (1982)** — Face-in-periscope mechanical 3D arcade
2. **Nintendo Arm Wrestling (1985)** — Force-feedback pull joystick
3. **Stompin' (1986)** — Foot pad grid (DDR precursor), but overlaps with Power Pad
4. **Exus Foot Craz (1983)** — Jogging pad, overlaps with Power Pad
5. **Teletact / AirGlove (1990-1991)** — Pneumatic tactile feedback glove
6. **TORTIS Button Box (1974-76)** — Tangible programming for kids (year is edge case)
7. **Noobie (1987)** — Huggable soft-sculpture interface, thin on detail
8. **MIT Holographic Video Mark-I (1989-90)** — Real-time holographic display (output-only?)
9. **64-Solenoid Fingertip Search Display (1987)** — Graded-height tactile array

Top 3 for deeper investigation:
1. Sega SubRoc-3D — weird, embodied, good image sources (Sega Retro CC-BY)
2. Nintendo Arm Wrestling — physical force-feedback wrestling joystick
3. Teletact/AirGlove — novel pneumatic haptic modality, but image concerns

## Phase 4: Deep research results

### Sega SubRoc-3D — CONFIRMED STRONG
- First commercial stereoscopic 3D game (March 1982 Japan, August 1982 NA)
- Mechanical spinning shutter disks in periscope viewer + Matsushita 3D TV tech
- Player presses face into submarine periscope, grips controls below
- Designed by Shikanosuke Ochi (Sega's legendary engineer — also made 1966 Periscope, first trackball)
- At least 4 publicly playable surviving cabinets (Galloping Ghost, etc.)
- **Sega Retro images are CC-BY 4.0** — cabinet photos available
- Patent US4393400 for the 3D shutter mechanism
- Appeared in WarGames (1983 film)

### Nintendo Arm Wrestling — WEAKER THAN EXPECTED
- NOT active force feedback — passive spring-loaded joystick with microswitches
- The "force feedback" myth is debunked: no motor, no solenoid, no actuator
- The interaction is: push LEFT (attack), RIGHT (counter), UP (pull, for specials)
- 3-way spring-loaded joystick — mechanism identical to other Nintendo arcade sticks
- Still historically interesting (Nintendo's last arcade game, Miyamoto/Kondo involved)
- But HCI novelty is low — it's a spring-loaded 3-way joystick
- DECISION: Pass for now. Not weird enough.

### Teletact/AirGlove — THIN IMAGES
- First pneumatic tactile feedback glove (14-20 air bladders on fingertips/palm)
- Bob Stone + Jim Hennequin (Airmuscle Ltd, ex-Spitting Image puppeteer)
- One verified image exists: 259x188 JPEG embedded in Stone's PDF paper
- No museum holds a Teletact; original was in Stone's garage until 2014
- DECISION: Pass for now due to thin image documentation.

## Phase 5: Fresh search results

### Japanese candidates:
- Bandai Terebikko (1988) — Interactive VHS phone, 33+ anime tapes, DTMF-like audio tones
- Namco Libble Rabble (1983) — Twin-stick bimanual with elastic string, Toru Iwatani
- Yamaha CX5M (1984) — Music computer with FM synth, too standard
- Famicom 3D System (1987) — Redundant with Vectrex 3D Imager and SubRoc-3D
- Sega AS-1 (1993) — Outside era window

### Multi-touch/sensor candidates:
- Chalk Board PowerPad (1983) — Too similar to KoalaPad (already in museum)
- The Hands (1984) — Already in deferred list
- Buchla Thunder (1989) — Already in deferred list
- TI Touch & Tell (1978) — Similar to Speak & Spell (already in museum)
- Herot & Weinzapfel Force-Sensing Screen (1978) — Research only, no images

## Phase 6: Final candidate selection

SELECTED for promotion:
1. **Sega SubRoc-3D (1982)** — CONFIRMED
2. **Bandai Terebikko (1988)** — CONFIRMED

REJECTED:
- Namco Libble Rabble (1983) — Game design innovation, not HCI hardware. Standard twin-stick.
- Nintendo Arm Wrestling (1985) — NOT force feedback; passive spring joystick. HCI novelty too low.
- Teletact/AirGlove (1990-91) — Only one tiny image (259x188 JPEG embedded in PDF).
- Exus Foot Craz (1983) / Stompin' (1986) — Overlap with Power Pad and Joyboard.

## Phase 7: Promotion
- Archived aesthedes and buchla-lightning info.json files before running promote-potentials.ts
- Created info.json for segarc-3d and bandai-terebikko
- Downloaded images: subroc3d upright cabinet (jpg, 319x600), deluxe cabinet (png, 1355x1756), terebikko system (jpg, 338x295)
- Ran bun scripts/promote-potentials.ts — wiki updated, data.ts REJECTED (regex bug)
- Manually added entries to src/data.ts
- Manually updated wiki ToC (entries 91 and 92)
- Replaced remote image URLs with local ../assets/wiki/ paths in wiki
- Copied images to assets/wiki/

## Phase 8: Verification
- bun run typecheck: PASS
- bun run build: PASS (92 exhibits, 110 pages)
- New collection count: 92 (was 90)
