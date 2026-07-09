# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Research

Launched 4 parallel research subagents:
1. **hci-research-subagent** — Accessibility & assistive tech
2. **hci-research-subagent** — Novel controllers & gaming
3. **hci-research-subagent** — Embodied & physical computing
4. **hci-research-subagent** — Specialist workstations & niche hardware

### Results summary

Accessibility subagent returned: Elinfa Digicassette (1976), Touch Talker (1984), Unicorn Expanded Keyboard (1984), Long-Range Light Pen (1985).
- Digicassette overlaps with VersaBraille (already in museum).
- Long-Range Light Pen overlaps with HeadMaster (already in museum).

Gaming subagent returned: Coleco Telstar Arcade (1977), Varie Top Rider (1988), Discs of Tron Environmental (1983), Atari Stunt Cycle (1976).
- **Coleco Telstar Arcade (1977)** — SELECTED. Triangular console, rotate to change controls.

Embodied subagent returned: Atari Puffer (1983), La Plume (1988), SOUND=SPACE (1985), Sonya Rapoport Biorhythm (1980-84).
- **Atari Puffer (1983)** — SELECTED. Exercise bike controller, first exertion interface. Never shipped.

Specialist subagent returned: Roland MC-8 (1977), Lucasfilm EditDroid (1984), Kurzweil K250 (1984), EPCOT WorldKey (1982).
- **Lucasfilm EditDroid (1984)** — SELECTED. Custom TouchPad controller, first NLE, 24 units.

## Phase 2: Deep Research

Launched 3 parallel deep-research subagents for selected candidates:
1. Coleco Telstar Arcade (1977) — Comprehensive research: Sanders Associates connection, Ralph Baer involvement, interaction mechanics, 4 cartridges, MPS-7600 chip analysis
2. Lucasfilm EditDroid (1984) — Comprehensive research: Lucasfilm Computer Division, TouchPad controller design, 24 units, Avid acquisition, Michael Rubin's Droidmaker
3. Atari Puffer (1983) — Comprehensive research: Alan Kay's Atari Research Group, Hall effect sensor, 4 games, 1984 Olympics tie-in, Jim Leiterman's first-person account

## Phase 3: Promotion

Created info.json files in potential/ for all three candidates.

Ran `bun scripts/promote-potentials.ts` — script updated wiki but data.ts entries were silently dropped (known bug).

### Manual fixes:
1. Added 3 entries to `src/data.ts` with ids, slugs, wikiTitles, years, subtitles, blurbs, tags, and local image references
2. Downloaded 6 images to `assets/wiki/`: telstar-arcade-paddle.jpg, telstar-arcade-overview.jpg, editdroid-team.jpg, editdroid-console.jpg, atari-puffer-controller.jpg, atari-puffer-tumbleweeds.png
3. Updated 6 remote image paths in `docs/hci-wiki.md` to local `assets/wiki/` paths
4. Added 3 entries to wiki Table of Contents (93, 94, 95)
5. Updated wiki intro text from "ninety" to "ninety-five"
6. Archived all 3 info.json files to info.json.archived

## Verification

- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (95 exhibits + blog + about, 113 pages)

## Artifacts Added to Collection

1. **Coleco Telstar Arcade (1977)** — Triangular dedicated console, rotate to change control surfaces, Sanders Associates design under Ralph Baer
2. **Lucasfilm EditDroid (1984)** — First NLE, custom TouchPad controller, 24 units, Lucasfilm Computer Division (later Pixar)
3. **Atari Puffer (1983)** — Unreleased exercise bike controller, first exergaming system, Alan Kay's Atari Research Group

All three are novel interaction models not represented in the collection.
