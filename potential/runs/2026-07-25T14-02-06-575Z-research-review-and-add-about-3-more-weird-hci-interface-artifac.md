# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Archive stale files
- Archived potential/topo/info.json -> info.json.archived
- Archived potential/cracklebox/info.json -> info.json.archived  
- Archived potential/novation-cat/info.json -> info.json.archived

## Phase 2: Subagent research (8 parallel)
8 subagents launched with diverse angles:
1. Unusual TV/video game controllers
2. Medical/clinical computer interfaces
3. Electronic musical interfaces
4. Telephony/network terminal interfaces
5. Industrial/professional input devices
6. Educational/children's computer interfaces
7. Haptic and force-feedback devices
8. Home automation and environmental control

## Phase 3: Review results

All 8 subagents returned ~40 total candidates. Only 2 were viable:
1. **Linn LM-1 Drum Computer (1980)**: Found by subagent 5 (industrial/professional). PD images on Commons.
2. **Suzuki Omnichord (1981)**: Found by subagents 3 and 6. CC images on Commons.

Grok was useless (hallucinations, already-in-museum items). Key rejects:
- Famicom Controller II Mic: too narrow (feature of standard controller)
- SegaScope 3-D: stereoscopic category saturated
- All medical: ALL image-blocked
- All home automation: image-blocked or redundant
- Most music: already-deferred or no CC images
- Most gaming: already-in-museum or too incremental

## Phase 4: Built info.json files
- potential/linn-lm1/info.json
- potential/omnichord/info.json

## Phase 5: Promotion
- Ran `bun scripts/promote-potentials.ts` — script appended wiki sections
- Manually copied 3 images to assets/wiki/
- Manually added 2 entries to src/data.ts
- Manually added 2 entries to wiki ToC
- Updated intro paragraph count (122 -> 124)

## Phase 6: Verification
- bun run typecheck: passed
- bun run build: 124 exhibits, 159 pages built

## Final state
- 124 exhibits in collection
- 121 entries in wiki ToC
- 3 CC-licensed images added to assets/wiki/
- 2 new info.json files in potential/ (archived after promotion)
