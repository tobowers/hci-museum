# Research, Review & Add ~3 More Weird HCI Artifacts — Summary

**Date:** 2026-10-27
**Run type:** Zero-addition (dry well + image bottleneck)
**Collection count at start/end:** 306 (unchanged)

## Process

1. Read `docs/beepy-memory.md` (306-exhibit guidance, promotion gotchas, zero-addition norm).
2. Launched 3 parallel research subagents on fresh angles:
   - **Kiosk/self-service**: Quote Inc Coin-Operated Terminal (1976), Kodak Create-A-Print (1987).
   - **Lab instruments**: Mettler AE163/AE200, Metrohm 682/686 Titroprocessor, HP 9825A.
   - **Smart appliances**: Toshiba + Sharp electronic-display washing machines (patent-only).
3. Manager-side verification with Wikimedia Commons API (free, no Octen/Exa consumed):
   probed every surfaced candidate plus fresh angles (Canon Xapshot/Ion, Casio VS-101, Fuji DS-X,
   film recorders, Nixdorf/Olivetti/Siemens terminals, chess computers, plotters).
   **Result: ZERO usable Commons images for any strong candidate.**

## Outcome

No candidates met all four promotion criteria (distinct interaction + CC image + not in
collection + in era). Strongest interaction candidates were all image-blocked or patent-only.

**Zero additions promoted.**

Deferred + archived (revisit when images surface):
- **Mettler AE163/AE200 (1983)** — single control-bar + DeltaDisplay bar-graph balance; iF Design
  Award-winning interaction model; real product but zero Commons images.
- **Quote Inc Coin-Operated Terminal (1976)** — coin-drop pay-per-use computing ritual with
  keyboard lockout and coin-return-on-failed-connect; patent US3938093 only.
- **Kodak Create-A-Print (1987)** — self-service photo kiosk with trackball crop; images unverified.

All three archived as `info.json.archived` to prevent the known auto-promotion hazard.

## Artifacts
- Trace: `potential/runs/2026-10-27T05-16-00-177Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`
- Deferred candidates (archived):
  - `potential/mettler-ae163/info.json.archived`
  - `potential/quote-coin-op-terminal/info.json.archived`
  - `potential/kodak-create-a-print/info.json.archived`

## Notes for backlog
- Pre-existing stale ACTIVE `info.json` dirs found (not from this run): `beocenter-9500`,
  `rca-selectavision-ced`, `vectrex-console` — not in collection, still active; flag for cleanup
  in a future run (auto-promotion hazard).
- Image availability remains the dominant bottleneck at 306 exhibits; prioritize
  image-resolution on the deferred lab-instrument/kiosk candidates (Mettler, Kodak) before re-scouting.
