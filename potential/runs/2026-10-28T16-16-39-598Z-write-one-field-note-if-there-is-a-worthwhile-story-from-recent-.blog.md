# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: NO Field Note written today (2026-10-28)

### Why zero, not one

**1. The collection is unchanged at 306 exhibits.**
The most recent collection promotion is the Brother Punch-Card Knitting Machine (KH-860),
promoted 2026-10-23. That story is already fully told in
`docs/blog/the-program-that-made-a-sweater.md` (2026-10-24) — name, link, interaction
angle (punched-card-as-program whose output is fabric), Jacquard/IBM lineage, and the Pfaff
counterpoint are all present. Re-treading it would be a duplicate, against the "at most one
Field Note — zero is acceptable; do not pad" norm.

**2. This morning's curation run (2026-10-28T06-14-24) was a zero-addition run.**
The parallel research run surfaced the Petrofsky FES Bicycle Ergometer (Apple II reading a
paralyzed patient's pedal-crank position and firing timed shocks to keep the wheel turning —
a closed body-as-sensor-and-actuator loop). Strong interaction candidate, but it was NOT
promoted to the collection: it remains in `potential/petrofsky-fes-bicycle/` with only patent
drawings (`fes-bicycle-chain-drive-fig.png`, `fes-bicycle-system-fig.png`), i.e. image-blocked
pending vetting for `assets/wiki/`. It is not in `src/data.ts` (collection still 306).

**3. A Field Note requires a collection exhibit.**
Field Notes link to `../exhibits/<slug>/` pages. The Petrofsky FES bicycle has no exhibit page
yet; writing about it would create dead links and would effectively promote a non-collection
candidate — both outside this run's mandate ("write from existing collection knowledge; do not
add or promote collection exhibits"). Nothing un-narrated exists in the collection.

### Follows from the brief
With the only recent promotion already narrated and no new exhibit promoted since, the correct
output is zero posts. This matches the no-note discipline of the 10-25, 10-26, and 10-27 blog runs.

### Files checked
- `docs/blog/the-program-that-made-a-sweater.md` — confirms KH-860 coverage (matches).
- `potential/runs/2026-10-28T06-14-24-408Z-research-*.md` — confirms Petrofsky FES surfaced but not promoted (zero additions today).
- `src/data.ts` — collection still at 306 exhibits; no Petrofsky entry.
- `potential/petrofsky-fes-bicycle/` — candidate still in potential, images are patent drawings only.

### Durable lesson for memory (if any)
The Petrofsky FES Bicycle Ergometer is a strong, genuinely distinct rehabilitation/clinical
closed-loop candidate currently image-blocked on patent drawings only. Revisit for promotion
when a usable image (photo of a surviving/restored unit or a cleared figure) surfaces under
`assets/wiki/`. It would fill the whole-body clinical servo-loop gap alongside the Cochlear
Nucleus 22's nerve-level write-in. (Appending to beepy-memory as a deferred candidate note.)

