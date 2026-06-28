# Trace — 2026-06-28

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Phase 1: Ideation

Reviewed existing collection (47 exhibits) and deferred list. Identifying missing HCI modalities:

Missing from museum:
- 3D spatial audio / auralization as interaction
- Head-operated pointer/controller (accessibility)
- Large interactive surfaces / smart whiteboards
- Full-body VR suits (VPL DataSuit distinct from DataGlove/EyePhone)
- Olfactory / smell interfaces
- Temperature / thermal haptic interfaces
- Tangible programming widgets

## Phase 2: Parallel Subagent Research

Launched 5 research subagents:
1. Head-operated interfaces / accessibility → HeadMaster (1986), LROP (1983-85), FreeWheel (1988)
2. 3D audio / spatial sound interfaces → Convolvotron (1988), Roland RSS (1990-92), Focal Point (1991)
3. Interactive whiteboards / large displays → SMART Board (1991), Xerox LiveBoard (1988-92), VIDEOPLACE (already in museum!)
4. Full-body suits / VR bodysuits → VPL DataSuit (1989), Calvert Exoskeleton (1981-83), MIT Graphical Marionette (1983)
5. Weird embodied controllers → Atari Puffer (1983), Soundbeam (1989), Interactive Plant Growing (1992), Yamaha Miburi (1992-95), Synapse Relax (1984)

## Phase 3: Candidate Selection

Top 3 selected for promotion:
1. **Convolvotron (1988)** — First real-time 3D audio spatializer. NASA VIEW lab → Crystal River Engineering. New modality entirely (spatial audio). Rich sources: NASA Spinoff, SIGGRAPH, academic papers, Stanford CDR. Image leads: board photo, SIGGRAPH demo photo.
2. **HeadMaster (1986)** — Ultrasonic head-tracking cursor controller. Personics Corp → Prentke Romich. Smithsonian & CHM hold units. Head-as-mouse interaction paradigm. Good patent/manual/brochure docs.
3. **VPL DataSuit (1989)** — Full-body fiber-optic VR suit. Completes VPL triptych (DataGlove, EyePhone already in museum). 30+ joint sensors. Appeared in The Lawnmower Man. Good documentation.

## Phase 4: Source Verification & info.json Creation

Verified key sources via webfetch:
- SIGGRAPH History Archive — Convolvotron demo details (SIGGRAPH 1991 Immersive Pavilion)
- NASA Spinoff 1992 — Convolvotron as 3D Audio System
- Wikipedia — Crystal River Engineering + VPL Research articles
- US Patent 4,682,159 (HeadMaster) — full patent text and drawings confirmed

Built info.json files for all three candidates with research sections, team details, media, and sources.

## Phase 5: Image Download

Downloaded 5 images:
- convolvotron: SIGGRAPH 1991 demo photo (865KB), CRE Audio Reality logo (2KB)
- headmaster: Patent Fig 1 (system overview, 3KB), Patent Fig 2 (headset placement, 2KB)
- vpl-datasuit: Wikimedia Commons photo at Nissho Iwai showroom (284KB)

## Phase 6: Promotion

Ran `bun scripts/promote-potentials.ts` — wiki updated, images copied to assets/wiki/.
Manually fixed: data.ts (3 new entries), wiki ToC (entries 48-50), wiki intro count (38→50).

## Phase 7: Verification

- `bun run typecheck` — passed (zero errors)
- `bun run build` — succeeded (50 exhibits + blog + about, 57 pages)

