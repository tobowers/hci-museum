# Run Trace — 2026-10-27 research: add ~3 weird HCI artifacts (1976-1992)

Collection at run start: **306 exhibits** (`grep -cE '^\s{4}id: "' src/data.ts`).

Per memory: the well is confirmed dry at 300+ exhibits across many angles. Image resolution
for deferred candidates is the only reliable expansion path; zero-addition runs are the norm.
This run will still launch 3 fresh-angle research subagents on genuinely unexplored categories,
then promote only well-sourced, image-verified candidates (expect 0-2).

Plan:
1. Launch 3 research subagents on fresh angles (below), 2 Octen searches each.
2. Verify any surfaced candidates against src/data.ts + memory exclusion lists.
3. Build info.json for strong candidates; check Commons images.
4. Promote via manual edits (promote-potentials.ts known-broken).
5. typecheck + build.

Fresh angles to try (not explicitly exhausted in memory):
- A) Early "conversational/transactional" self-service and kiosk devices (beyond IBM 3614/QuickFare)
- B) Early electronic scales/analytical instruments with computer readout HCI
- C) Early "smart" consumer appliances/clock radios with distinctive display interaction

Trace log begins below.

## Subagent results

3 parallel research subagents (kiosk/self-service, lab instruments, smart appliances) each used 2 Octen.
Returns:
- A (kiosks): Quote Inc Coin-Operated Terminal (US3938093, 1976) — patent-only; Kodak Create-A-Print (1987) — museum-holding unverified.
- B (instruments): Mettler AE163/AE200 (1983, control-bar + DeltaDisplay); Metrohm 682/686 Titroprocessor (single rotary knob); HP 9825A (secondary).
- C (appliances): Toshiba electronic-display washer (US47633493); Sharp progress-indicator washer (US4803854) — both patent-only, no verified retail model.

## Manager verification

Direct Wikimedia Commons API probes (free, no Octen consumed) returned ZERO usable images for:
Mettler AE163/AE200, Metrohm 682, Kodak Create-A-Print, Quote coin-op terminal, HP 9825A,
Toshiba/Sharp washers. Also probed: Canon Xapshot, Canon Ion, Casio VS-101, Fuji DS-X,
film recorders, Nixdorf/Olivetti/Siemens terminals, electronic chess computers, plotters — all empty.

## Decision

None of the candidates meet all four promotion criteria (distinct interaction + CC image + not in
collection + in era). Strongest interaction candidates (Quote coin-op, Mettler AE, Kodak Create-A-Print)
are all image-blocked or patent-only. Per memory discipline at 306 exhibits, do NOT promote weak or
image-blocked candidates; do not pad. This is a zero-addition run.

Documenting the strongest deferred candidates in potential/ info.json + archive for future
image-resolution, consistent with the deferred-candidate workflow.

## Deferred candidates documented this run (image-blocked / patent-only)
- Mettler AE163/AE200 (1983) — control-bar + DeltaDisplay lab balance; real product, ZERO Commons images.
- Quote Inc Coin-Operated Terminal (1976) — coin-inserted pay-per-use computing ritual; patent-only.
- Kodak Create-A-Print (1987) — self-service photo kiosk with trackball crop; images unverified.

## Verification + archiving (manager)

- Confirmed 306 exhibits (`grep -cE '^\s{4}id: "'`). None of the three deferred candidates
  (Mettler AE163, Quote coin-op terminal, Kodak Create-A-Print) appear in src/data.ts.
- Created and then ARCHIVED info.json for each as `info.json.archived` to prevent the
  known auto-promotion hazard (memory lines 106-107, 124).

## Conclusion: zero-addition run

Consistent with memory discipline at 300+ exhibits and the explicit instruction to prefer
zero additions over weak/poorly-sourced promotions. All three strongest candidates are
image-blocked (no Commons images) or patent-only, so none meet the four promotion criteria.

Deferred (documented + archived, revisit when images surface):
- Mettler AE163/AE200 (1983) — control-bar + DeltaDisplay; real product, zero Commons images.
- Quote Inc Coin-Operated Terminal (1976) — coin-drop pay-per-use ritual; patent-only.
- Kodak Create-A-Print (1987) — trackball-crop self-service photo kiosk; images unverified.
