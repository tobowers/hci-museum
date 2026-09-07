# Run summary: research, review, and add ~3 more weird HCI artifacts

Date: 2026-09-07T01:36:02-08:00

## Outcome
**ZERO additions to the collection.** This was a zero-addition run. Three genuinely fresh research angles each returned exactly one candidate, and all three failed the museum's promotion bar (see Decisions below). Per Beepy memory guidance ("accept zero-addition runs as the norm; do not pad the collection"), no weak or duplicative candidate was forced in.

## What was evaluated

| Candidate | Angle | Verdict | Reason |
|---|---|---|---|
| TI Magic Wand Speaking Reader (1982) | A: rotary/scroll reference devices | REJECTED | Already in museum (duplicate) |
| HP 8566A/B Spectrum Analyzer (1979-80) | B: embodied lab instruments | REJECTED | Distinctive "active function" soft-key UI, but ZERO freely-licensed images anywhere (verified via Commons API) — fails local-image policy |
| Sip-and-Puff Wheelchair Breath Controller | C: embodied consumer/vehicle | REJECTED | Breath-input modality already saturated (Nintendo Hands Free Controller + HeadMaster both in collection; memory marks gap "filled"); only free image is an out-of-window 1960s POSM device |

Also checked directly: Telxon PTC-710 (has CC BY 4.0 image but early-1990s, Czech Railways context, weak interaction — rejected), Datalogic portable terminal (no Commons image).

## Research process
- Scanned potential/ for ready, unpromoted candidates — none active (all info.json archived).
- Launched 3 parallel hci-research-subagents, each with one focused fresh angle:
  - Angle A: dedicated electronic reference appliances with rotary/scroll/page-flip interfaces
  - Angle B: embodied lab/measurement instruments with novel interface feedback
  - Angle C: embodied consumer/vehicle interfaces (whole-body/novel sensing input)
- Octen budget fully consumed (7/7) by the subagents. All manager-side verification done via direct Wikimedia Commons API, Wikipedia, and curl (does not consume Octen/Exa).
- Verified image availability for every candidate via Commons API before any promotion decision.

## Blockers / notes for future runs
- The HP 8566A/B "active function" + CRT soft-key interface is the strongest interaction-model candidate found in this run and is a genuine early HCI milestone (archetypal context-sensitive soft-keys in lab instrumentation). It is promotable IF a freely-licensed photo of a period unit surfaces (HP Computer Museum images are unlicensed; consider museum acquisitions or auction photos).
- The rotary/scroll-alphabet reference-device category appears essentially undocumented for 1976-1992 — subagents found no verifiable example, so that angle is likely a dead end.
- The breath/mouth-controlled input family is now well-covered (Nintendo Hands Free Controller, HeadMaster) — do not re-add breath devices without a strongly distinct interaction model.
- The well at 247+ exhibits remains dry for automated discovery. Image resolution for existing deferred candidates remains the primary path to expansion.

## Files written
- `potential/runs/2026-09-07T01-36-02-824Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-09-07T01-36-02-824Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

No `potential/<slug>/info.json` files were created (no candidate passed review). No changes to `docs/hci-wiki.md` or `src/data.ts`.

## Verification
No collection edits were made, so no typecheck/build changes expected. Collection remains at 247 exhibits (unchanged).

## What still needs review
- HP 8566A/B spectrum analyzer: resolve a freely-licensed image, then it is a strong promotion candidate.
- Sip-and-puff wheelchair breath controller: canonical but duplicative; only worth revisiting with a distinct in-window proportional-mobility device.
