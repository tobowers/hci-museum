# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Setup
- Read Beepy memory (125 exhibits, well not structurally dry — new angles found productive last two runs)
- Archived 3 stale info.json files: famicom-network-system, little-professor, videoface
- Launching 6 parallel subagents across fresh angles

## Phase 2: Subagent Angles
- A: Early biometric/security HCI — 9 candidates. Strongest: EyeDentify (retinal, 1984), Identix (fingerprint, 1982-85). ALL image-blocked except Identix prototype (2 CC images)
- B: Early answering machines + caller ID — 10 candidates. Strongest: Colonial Data Call Identifier (1988), AT&T 1337 (1990 frog design), GTE ActionStation XT300 (1985). ALL image-blocked (no CC images)
- C: Early palmtop/electronic organizers — 5 candidates. ALL with CC images! Sharp Wizard OZ-7000 (13 files), Cambridge Z88 (14 files), Casio PB-1000 (6 files), HP 95LX (7 files), Psion Series 3 (12 files)
- D: Unusual controllers — 9 candidates but 4 already in museum, 2 already deferred. New: Fairchild Channel F controller (1976, 3-axis), Sea Wolf (1976, optical combiner). 
- E: Electronic whiteboards — 9 candidates. Strongest: OKI Kawaraban (1983, first copyboard), Xerox Colab (1987), VideoDraw (1990). ALL image-blocked (no CC images)
- F: Early touchscreens — 7 candidates. Strongest: Elographics (1977 resistive), 1982 World's Fair kiosks, ISI Public Access Terminal (1980). ALL image-blocked (OEM components or deployments, no CC images of specific products)

## Phase 3: Top Candidate Selection
- Sharp Wizard OZ-7000 (1989): transparent touch panel over swappable physical IC cards. GENUINELY UNIQUE paradigm. 13 CC images. ★★★★★
- Cambridge Z88 (1987): Clive Sinclair, ultra-slim silent membrane notebook. 14 CC images. ★★★★★
- Casio PB-1000 (1987): embedded on-screen touch keys in folding pocket computer. 6 CC images. ★★★★
- Verifying Commons images and building info.json for all three

## Phase 4: Deep Research (parallel subagents)
- Sharp Wizard: OZ-7000 confirmed. 2 unique device images. Wikipedia article exists. ~$299-399. Launched 1989. Seinfeld episode (1998). No named designer found. IC card ecosystem detailed.
- Cambridge Z88: September 1987 launch, £230. ~100,000 units. Clive Sinclair + Rick Dickinson. Pandora project predecessor. PipeDream integrated app. Silent membrane keyboard. Strong community (Z88 Forever since 1996). 5+ CC images.
- Casio PB-1000: 1986 Japan / 1987 international. Hitachi HD61700 CPU. 2 device photos + 4 die shots. Price unknown (~$200 estimate). Niche product. Strong enthusiast community with emulator and ROM disassembly.

## Phase 5: Info.json + Image Downloads
- Created potential/sharp-wizard/info.json
- Created potential/cambridge-z88/info.json
- Created potential/casio-pb1000/info.json
- Downloaded 6 images from Commons to assets/wiki/ (all verified as valid image files)
- Archived stale info.json files in potential/ (3 files from previous run)

## Phase 6: Collection Edits (manual)
- Updated src/data.ts: added 3 exhibit entries (sharp-wizard, cambridge-z88, casio-pb1000)
- Updated docs/hci-wiki.md:
  - Updated intro line: "125 projects" → "128 projects"
  - Added ToC entries 123, 124, 125
  - Added 3 full wiki sections with media and sources
- promote-potentials.ts NOT run (known bugs: doesn't copy images, doesn't update data.ts, doesn't update ToC)

## Phase 7: Verification
- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (128 exhibits, 165 pages)

## Results Summary
- 3 new artifacts promoted to collection: Sharp Wizard OZ-7000 (1989), Cambridge Z88 (1987), Casio PB-1000 (1987)
- Build count: 128 exhibits (was 125)
- Wiki ToC count: 125 (properly updated)
- All 6 CC-licensed images stored locally in assets/wiki/
- All 3 candidates from palmtop/organizer angle — but each with genuinely distinct interaction models (transparent touch+cards, silent membrane, embedded resistive touch)
