# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Run log

- Candidates (all three promoted 2026-11-11): `technics-sl-1200mk2`, `atc-flight-progress-strips`, `ishiguro-storm-surge-model`.
- Audit: `grep -rl "exhibits/<slug>" docs/blog/` returned zero for all three — none has a Field Note under any slug.
- Also re-checked collision risk: no existing note owns a "pitch slider / beatmatching / grabbed medium" claim. Nearest neighbors are `the-lever-that-had-no-undo` (performed, live, irreversible control), `the-instrument-you-played-with-your-feet` (non-hand pitch input), `the-command-line-that-painted-broadway` (faders replaced by a command line). None overlap.
- Decision: wrote `docs/blog/the-deck-that-let-you-grab-the-data.md` on the SL-1200MK2.
  - Angle: the medium is *grabbable* — a quartz servo stable enough to survive a hand on the platter, so the data itself is the input surface ("direct manipulation" in the physical, not cursor, sense), plus the MK2's linear pitch slider as an ear-judged, glance-free control (feedback never through the visual system). Braking-as-symmetry framed as a latency spec with the hand as the deadline.
  - Foil: every other exhibit is a device you *address* through a representation; here there is no representation.
  - Closer gestures forward to the other two new exhibits' shared thread (physical medium carrying data in arrangement) without writing a second note — "at most one" respected.
  - One local image: `../assets/wiki/technics-sl-1200mk2.jpg`. No exhibits, `src/data.ts`, or `docs/hci-wiki.md` touched.
- Verification: `bun run typecheck` clean; `bun run build` → "316 exhibits + blog + about, 450 pages" (up one page from 449).
