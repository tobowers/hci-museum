# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Broad ideation and candidate discovery
- Used Grok brainstorm (bun scripts/tools/grok.ts) — returned mostly already-in-museum items, not useful
- Launched 4 parallel hci-research-subagents:
  1. Weird commercial controllers / failed VR / odd accessibility devices
  2. Early BCI / neural / bioelectric interfaces 
  3. Unusual tactile displays / haptic output / non-screen feedback
  4. Whole-body / large-movement controllers

## Phase 2: Candidate evaluation
Key candidates surfaced:
- A (whole-body subagent): Exciting Boxing inflatable controller (1987), Top Rider inflatable motorcycle (1988), Sega AI Computer (1986), IBVA (1991), SegaScope 3-D glasses (1987)
- B (BCI subagent): Rosetronix Brainwave Control (1982), Mind Mirror I (1976), IBVA (1991), Wadsworth BCI (1991), PCBIO biofeedback (1988)
- C (tactile subagent): Collins Tactile Vision Vest (1977), ELINFA Digicassette (1976), BRAILLEX (1975), Tickle Talker (1985), JPL Force-Reflecting Hand Controllers (1981)
- D (whole-body subagent): Exus Foot Craz (1983), Atari Puffer (1982), SOUND=SPACE (1984), ExerVision Bicycle (1985), Autodesk HighCycle (1983)

Initial selection for deep research:
1. Collins Tactile Vision Vest (1977) — body-worn 1024-point vibrotactile array, camera-to-skin
2. Exciting Boxing Controller (1987) — inflatable Famicom punching bag
3. IBVA Interactive Brainwave Visual Analyzer (1991) — consumer wireless EEG-to-MIDI

## Phase 3: Deep research (3 parallel subagents)
- Collins Tactile Vision Vest: Thoroughly sourced. Extraordinary device. BUT: ZERO publicly available images found. No photos, no patent drawings, no paper figures. Blocked for promotion.
- Exciting Boxing Controller: Excellent source coverage (FamicomWorld, NintendoSegaJapan, MAME PR, NesCartDB). 7+ image URLs confirmed. Commercial product, ¥7,980, Japan-only, December 1987.
- IBVA: Excellent source coverage (psychiclab.net, New Scientist, BCI Wiki, ibva.com archive). 10+ image URLs confirmed. Commercial product, April 1991, Macintosh. Used by Mariko Mori at Venice Biennale.

## Phase 4: Promotion (2 artifacts)
- Created potential/exciting-boxing/info.json + images
- Created potential/ibva/info.json + images
- Downloaded 5 images for exciting-boxing, 5 for ibva
- Copied selected images to assets/wiki/
- Ran bun scripts/promote-potentials.ts — wiki updated, data.ts missed (known regex bug)
- Manually added exhibit entries to src/data.ts
- Manually added ToC entries 65-66 to docs/hci-wiki.md
- Fixed wiki header count: 64 → 66

## Phase 5: Verification
- bun run typecheck: PASSED
- bun run build: PASSED (66 exhibits + blog + about, 77 pages)

## Artifacts added to collection:
1. Exciting Boxing Controller (1987) — slug: exciting-boxing
2. Interactive Brainwave Visual Analyzer / IBVA (1991) — slug: ibva

## Artifacts deferred:
1. Collins Tactile Vision Vest (1977) — blocked by zero image availability; added to beepy-memory deferred list

