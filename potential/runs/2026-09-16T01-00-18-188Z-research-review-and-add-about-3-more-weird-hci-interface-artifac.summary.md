# Run Summary — 2026-09-16T01-00-18-188Z

**Topic:** research, review, and add about 3 more weird HCI interface artifacts from 1976–1992
**Outcome:** Zero-artifact promotion run (normal at 262 exhibits per Beepy memory).

## What happened

1. **Collection start state:** 262 exhibits (via `grep -cE '^\s{4}id: "' src/data.ts`). No ready-unpromoted `info.json` candidates existed in `potential/` (all active info.json slugs already matched data.ts).

2. **Research (3 parallel hci-research-subagents, shared 7 Octen budget — fully exhausted):**
   - **SA1 — unusual-sensing game controllers:** LJN Roll & Rocker (REJECT: already deferred 2026-07-04), IMN Control "The Game Handler" (1992, gyroscopic one-hand tilt controller).
   - **SA2 — novel output mechanisms:** IBM 3290 plasma terminal, professional computer film recorders, Planar EL, VFD modules.
   - **SA3 — embodied home/scientific devices:** incomplete (Octen exhausted); weak candidates only (Korg crank tuner, spirometers).

3. **Manager-side verification (free channels — Commons API + direct webfetch, no Octen):**
   - **Game Handler confirmed real** via Wayback Retrogaming Art (EGM March 1992 ad): one-handed gyroscopic tilt controller, "changes pre-existing software" claim (make Mario run backwards). Genuinely distinct — the museum's first gyroscopic game controller candidate. **IMAGE-BLOCKED**: zero CC/PD images on Commons; only rights-managed magazine ad + blogger VHS stills.
   - IBM 3290: has a Commons photo but interaction (keyboard+screen) not distinctive → reject.
   - Computer film recorders: no clean in-period Commons image; near-duplicate of Polaroid Digital Palette → reject.
   - Atari Touch Tablet: near-duplicate of KoalaPad → reject.
   - LJN Roll & Rocker: already deferred → reject.

## Decision

No candidate met all four promotion criteria (distinct interaction + CC/PD local image + not in museum + in-era). Per memory guidance ("Add fewer artifacts when quality is low; do not pad the collection"), this is a **zero-addition run** — an acceptable, expected outcome at 262 exhibits.

The strongest interaction candidate (IMN "The Game Handler") was **documented and deferred** as `potential/the-game-handler/info.json.archived` — fully researched with period sources, preserved for image-resolution effort.

## Files written

- `potential/runs/2026-09-16T01-00-18-188Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace.
- `potential/the-game-handler/info.json.archived` — deferred candidate (gyroscopic NES controller, image-blocked).
- `docs/beepy-memory.md` — appended durable run lessons + flagged the Game Handler as the priority image-resolution target for the gyroscopic-input gap.

## Verification

- No edits made to `src/data.ts` or `docs/hci-wiki.md` (zero promotions).
- `bun run typecheck` passes.

## What still needs review

- **Image resolution for the Game Handler** — the museum's gyroscopic-input gap can be filled if a period unit photo surfaces (museum collection, auction, or collector). Priority.
- **Pending unwritten Field Notes** from prior batches remain available for a future blog run (e.g., Amana Touchmatic, Ascom QuickFare, Ferranti-Packard flip-dot, Caere OCR Wand, Invicta Electronic Master Mind, Nissan Voice Warning).
