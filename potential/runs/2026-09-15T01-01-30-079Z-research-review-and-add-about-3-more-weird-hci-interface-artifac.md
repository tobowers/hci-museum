# Run Trace: 2026-09-15 — Research, Review, and Add ~3 Weird HCI Interface Artifacts

**Start:** 2026-09-15
**Collection at start:** 260 exhibits (data.ts), wiki ToC 260 entries.
**Goal:** Research, review, and add ~3 strange embodied / novel-interaction HCI hardware artifacts from 1976-1992.

## Context
- Recent runs (09-13, 09-14) found the well thin; 09-13 added NED Synclavier, 09-14 second run had mixed results.
- No active (unpromoted) info.json in potential/ at start — scanning confirmed zero ready candidates.
- Standard promotion gotchas apply: promote-potentials.ts has known bugs (data.ts regex, image-copy, ToC). Will do manual promotion.

## Angle decisions
Picking 3 fresh angles, prioritizing image-rich categories per memory guidance:
1. **Bar/restaurant & hospitality POS / order-entry terminals with unusual interfaces** (e.g., touch memory pads, keypads with physical menu overlays) — unexplored.
2. **Electronic games/toys with physical-light / IR beam sensing** (beyond light guns already covered) — e.g., Mattel's "electronic cribbage"/beam toys.
3. **Personal/consumer medical or health monitoring devices with novel body interfaces from the era** (e.g., early digital thermometers, glucometers, fitness monitors with distinctive physical interaction).

## Phase 1: Launch research subagents
Launching 3 hci-research-subagents in parallel, each with 1 focused Octen query (2 allowed), authoring precise queries.

## Phase 2: Review candidates, build info.json for the strongest.

## Phase 3: Promote manually (promote-potentials.ts known-broken), copy local images to assets/wiki/.

## Phase 4: Verify typecheck + build, update memory, write summary.

## Phase 1: Research subagents (complete)

3 subagents launched on angles: (1) hospitality POS terminals, (2) IR/light-beam toys, (3) early consumer health monitors.

Results:
- **Angle 1 (POS)**: Returned McDonald's Brobeck POS (1974, Intel 8008, button-per-menu-item) — STRONG, CC BY-SA image on Commons confirmed. Also IBM 4683 (image-poor), Singer MDTS, Pitney Bowes SPICE (image-blocked).
- **Angle 2 (IR toys)**: Lazer Tag (1986, WoW, point-to-point IR) — novel interaction but ZERO CC product image. Big Trak already in museum. Photon home units image-weak.
- **Angle 3 (health monitors)**: Glucometer II (1981, Ames/Miles) — embodied strip+beep ritual, Smithsonian holds unit, but only PD metadata-page brochure as visual (no device photo). Accu-Chek/Reflocheck image-blocked.

## Phase 1b: Manager-side verification
- Octen exhausted (7/7) by subagents. One manager Octen query on greeting-card/voice-recorder angle returned nothing period-appropriate — dead end, confirmed not re-scouting.
- Verified McDonald's keyboard image CC BY-SA 3.0 + downloadable (3024×4032, resized to 900×1200).
- Verified Glucometer II: only PD composite brochure PDF (metadata page), no device photo on Commons.
- Verified Lazer Tag: only non-free logo on Wikipedia, no CC product image on Commons.

## Decision
Promote **McDonald's Brobeck POS** as the single strong addition (full criteria met: distinct interaction, CC image, not in collection, in era). 
Defer Glucometer II (borderline HCI fit + no device image) and Lazer Tag (image-blocked). Honest call per charter — do not pad collection with image-blocked/borderline candidates.
