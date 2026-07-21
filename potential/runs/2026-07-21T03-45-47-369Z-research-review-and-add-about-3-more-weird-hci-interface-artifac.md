# Run Trace: 2026-07-21T03-45-47-369Z (continued)

## Phase 3: Candidate Selection

After reviewing all subagent results and doing additional targeted research, selected 2 candidates:

1. **Aspen Movie Map (1978)** — MIT Architecture Machine Group. CC BY-SA 3.0 image (QADAS.jpg from Walter Bender via Wikimedia Commons). Strong: landmark surrogate-travel hypermedia system, touch-driven spatial navigation through laserdisc video, touch-to-enter-buildings interaction. Team well-documented.

2. **Suzuki Omnichord (1981)** — Suzuki Musical Instrument Corp. Public domain + CC BY images from Wikimedia Commons. Strong: Sonic Strings strum plate always in-key with chord buttons, impossible to play wrong note. Mass-market consumer product with lasting cultural impact.

Rejected/not pursued:
- Taito Front Line (1982) — rotary dial joystick is incremental (joystick + twist), fair-use images only
- Interactive Plant Growing (1992) — at era boundary, sparse documentation, more art installation
- VideoHarp (1988) — no Wikipedia page, no freely-licensed images found
- Thought Technology ProComp (1986) — overlaps with BioMuse/Synapse Relax in same modality
- Aspen Movie Map almost had image issues — only QADAS.jpg (3D model, not actual interface) found on Commons, but it's CC BY-SA 3.0 and sufficient

## Phase 4: Promotion

1. Ran `bun scripts/promote-potentials.ts` — promoted 2 artifacts, appended wiki sections
2. Downloaded 3 images to assets/wiki/:
   - qadas-aspen-movie-map.jpg (QADAS, 256KB)
   - omnichord-om150.jpg (OM-150 front, 12KB)
   - omnichord-om27.jpg (OM-27 brown, 1.4MB)
3. Manually added 2 entries to src/data.ts (known script bug: data.ts regex doesn't match)
4. Updated wiki image references from remote URLs to local assets/wiki/ paths
5. Updated wiki ToC: added entries 114-115
6. Updated wiki count from "one hundred and eight" to "one hundred and fifteen"

## Phase 5: Verification

- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (118 exhibits, 148 pages)
- Both exhibit pages exist in public/exhibits/aspen-movie-map/ and public/exhibits/omnichord/

## Post-run cleanup

- Archived info.json files for both promoted candidates
