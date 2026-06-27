# Run Summary — 2026-06-27T12-46-45-071Z

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## What changed

### 3 artifacts added to the collection

| # | Artifact | Year | Tags | Slug |
|---|----------|------|------|------|
| 1 | **Buchla Lightning** | 1991 | Music HCI, Gesture, Optical Tracking | `buchla-lightning` |
| 2 | **Fakespeare BOOM** | 1989 | VR, Immersive Display, Head-Coupled Display | `fakespeare-boom` |
| 3 | **Seiko RC-1000 Wrist Terminal** | 1984 | Wearable, Wrist-Worn, Mobile Computing | `seiko-rc1000` |

### Files written or modified

**New files:**
- `potential/fakespeare-boom/info.json` — complete research dossier
- `potential/buchla-lightning/info.json` — complete research dossier  
- `potential/seiko-rc1000/info.json` — complete research dossier
- `potential/fakespeare-boom/images/boom-3c.gif`, `andre-on-boom.jpg`
- `potential/buchla-lightning/images/lightning-1-system.jpg`, `lightning-wands.gif`, `lightning-remote.gif`
- `potential/seiko-rc1000/images/rc1000-face.jpg`, `rc1000-museum.jpg`

**Modified files:**
- `src/data.ts` — added 3 new exhibit entries
- `docs/hci-wiki.md` — appended 3 new wiki sections + updated ToC + updated intro count (35→38)
- `assets/wiki/` — 7 new local images copied

**Trace:**
- `potential/runs/2026-06-27T12-46-45-071Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`
- `potential/runs/2026-06-27T12-46-45-071Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Research methodology

- Launched 3 parallel `hci-research-subagent` tasks for candidate research
- Used Exa search (`bun scripts/tools/exa.ts`) and web fetching for source verification
- Compiled info.json files for all candidates; fixed one JSON syntax error in seiko-rc1000 before promotion
- Downloaded local images via curl; promoted using `bun scripts/promote-potentials.ts` with manual data.ts/wiki ToC fixes

## Candidate quality notes

All three are strong, well-sourced artifacts with good image coverage:

- **Buchla Lightning**: 20 sources including Wikipedia, archived Buchla.com pages, MATRIXSYNTH, MIDI.org, IRCAM, YouTube demos. 3 local images (system, wands, remote). Fills music HCI gap.
- **Fakespeare BOOM**: 8 sources including Stanford CDR, VRArchitect, Wikipedia (Mark Bolas, Ian McDowall), AWE Hall of Fame, US Patent 5,253,832, IEEE paper. 2 local images (product shot, user photo). Fills immersive display beyond HMD gap.
- **Seiko RC-1000**: 10 sources including detail teardowns, reverse-engineered protocol docs, museum catalog (Deutsches Uhrenmuseum), original Sinclair User review, NASA mission coverage. 2 local images (face closeup, museum photo). Fills wrist-worn computing gap.

## Verification results

- `bun run typecheck` — passed (tsc --noEmit, no errors)
- `bun run build` — passed (41 exhibits + blog + about, 47 pages)

## What still needs review

- Images could be optimized (seiko-rc1000-1.jpg is 1.3MB)
- No Field Notes blog posts were drafted for this batch
- The promote-potentials.ts regex bug (data.ts entries silently dropped) remains unfixed — workaround of manual editing still required
