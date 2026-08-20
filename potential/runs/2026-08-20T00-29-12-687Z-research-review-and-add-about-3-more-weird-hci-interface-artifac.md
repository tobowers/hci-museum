# Beepy Curator Run — 2026-08-20

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Strategy
- Launch 3 parallel research subagents with fresh, unexplored angles
- Review candidates, verify against collection
- Build info.json for strong candidates
- Promote manually (promote-potentials.ts has known bugs)
- Verify build

## Research Subagents Launched

### Subagent 1: Network terminals / information appliances
- Octen: 2 calls
- Found: AT&T Sceptre (1983), NABU Network PC (1982), CAPTAIN Terminal (1984), BBC Teletext Adapter (1981)
- CAPTAIN NTX-5000 was already fully researched in a prior run (info.json.archived, images in potential/)

### Subagent 2: Early video game peripherals with unusual physical principles
- Octen: 2 calls
- Found: NES Hot Seat (1990, mercury tilt chair), Roll 'n Rocker (1989, balance board), Access LipStik (1987, sound-activated)
- BioMuse already in collection

### Subagent 3: Electronic toys with computer-like interaction
- Octen: 2 calls → Octen exhausted
- Found: Capsela Voice Command (1987-90), The Robotic Workshop (1987), VTech CreatiVision (1981), View-Master Interactive Vision (1988)
- View-Master Interactive Vision was previously deferred (2026-07-10) as "too similar to Terebikko" but has different mechanism (sprite overlay vs. audio tones)

**Octen budget: 6 of 7 used by subagents. 1 reserved but unused. Exa: 0 of 2 used.**

## Candidate Evaluation

### Strong Candidates

1. **CAPTAIN NTX-5000 (1984)** — Already fully researched with info.json.archived, local images in assets/wiki/ and potential/. The fax-raster videotex mechanism is genuinely unique. No other artifact in the collection transmits pages as images painted into the screen. **PROMOTE.**

2. **View-Master Interactive Vision (1988/1989)** — Has CC-licensed images on Commons. Console generates 8-bit sprite overlays over VHS video with dual audio tracks for branching. Different mechanism from Terebikko (audio tones) and Action Max (light gun). Completes the VHS-interaction triptych. Was previously deferred but revisiting now: the mechanism is genuinely distinct. **PROMOTE.**

3. **NES Hot Seat (1990)** — Mercury tilt-switch chair controller. Very weird. But NO CC-licensed images. The Gaming Historian and Nintendo Life images are copyrighted. **DEFER for image resolution.**

4. **Access LipStik (1987)** — Sound-threshold game controller. Interesting but simple. No CC-licensed images. **DEFER.**

5. **VTech CreatiVision (1981)** — Transforming joystick/keyboard. Has CC images. But the interaction model is fundamentally joystick + membrane keypad — same as ColecoVision. The "transforming" is about storage, not a different interaction paradigm. The museum already has Coleco Telstar Arcade, Fairchild Channel F, Bally Astrocade — second-gen consoles are well-covered. **DEFER.**

### Deferred Candidates (from subagents)
- AT&T Sceptre (1983) — Overlaps with Minitel/BTX as videotex terminal
- NABU Network PC (1982) — Cable-TV thin client, interesting but no CC images readily available
- BBC Teletext Adapter (1981) — Broadcast-only teletext, interesting but narrow
- Capsela Voice Command (1987-90) — Voice-controlled construction toy, no CC images
- The Robotic Workshop (1987) — C64-programmable robotics kit, no CC images
- Roll 'n Rocker (1989) — Balance board, LJN, overlaps with Amiga Joyboard

## Promotion Plan

### CAPTAIN NTX-5000
- Reactivate info.json (rename from .archived)
- Copy images from potential/ to assets/wiki/ (already done)
- Add wiki section to docs/hci-wiki.md
- Add entry to src/data.ts
- Add ToC entry

### View-Master Interactive Vision
- Create new info.json in potential/view-master-interactive-vision/
- Download Commons images
- Copy images to assets/wiki/
- Add wiki section to docs/hci-wiki.md
- Add entry to src/data.ts
- Add ToC entry

## Verification
- Run `bun run typecheck`
- Run `bun run build`

## Files Changed
- docs/hci-wiki.md (2 new sections + ToC updates)
- src/data.ts (2 new entries)
- assets/wiki/ (3 new images for CAPTAIN, 3 for View-Master)
- potential/captain-ntx5000/info.json (reactivated)
- potential/view-master-interactive-vision/info.json (new)