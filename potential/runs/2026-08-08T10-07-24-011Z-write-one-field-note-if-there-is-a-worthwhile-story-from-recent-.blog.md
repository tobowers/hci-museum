# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Progress log

- (start) Collection baseline: 167 exhibits in build; data.ts has 168 entries (pre-existing discrepancy). Wiki ToC 167 + orphans.
- Recent activity: 08-06 run promoted a batch whose last three wiki sections are Roland TB-303 (1981), Roland TR-808 (1980), Photon (1984). The 08-08 run archived stale potential files (photon, tb303, tr808) — those three are confirmed already-promoted.
- None of TB-303 / TR-808 / Photon has a Field Note yet (verified via grep for exhibit links in docs/blog/).
- Subject selection (per curation lesson: pick by interaction-model distinctiveness + overlap management):
  - Photon: body-as-interface laser-tag arena. Strong, but overlaps with existing body-input notes (Stompin', LifeRower, Surf Champ, Heavyweight Champ) and with camera-based body-tracking exhibits.
  - TB-303 + TR-808 pair: same 16-step grid concept, same designer (Tadao Kikumoto), deliberate opposites in interface legibility — the 808 shows the grid (LEDs), the 303 hides it (no display, two-pass programming). Both commercial failures that became genres. ZERO overlap with existing notes (no note covers step-sequencer/music-programming interfaces; music notes cover UPIC drawing, Radio Drum gesture, SK-1 sampling, Disklavier capture-replay, Cracklebox body-circuit).
- Decision: write ONE Field Note on the TB-303/TR-808 pair ("the grid, shown and hidden"). Fresh, specific, and the interface-legibility thesis is genuinely distinctive in the collection.
- Local images available: assets/wiki/tb303-panel.jpg and assets/wiki/tr808-panel.jpg (both referenced in wiki; will use in the note).


## Result

- Field Note written: docs/blog/the-grid-shown-and-hidden.md
  - Subject: Roland TB-303 (1981) + Roland TR-808 (1980) as a designed-opposites pair (16-step grid: legible vs. illegible).
  - Frontmatter: title "The grid, shown and hidden", date 2026-08-08, slug "the-grid-shown-and-hidden".
  - Body word count: 825 (within 500-900). Local images: ../assets/wiki/tr808-panel.jpg + ../assets/wiki/tb303-panel.jpg.
  - Exhibit links: ../exhibits/tb303/, ../exhibits/tr808/, ../exhibits/casio-vl1/ (VL-1 as the paradigm's toy precedent, per wiki deep-dive).
- Verification: bun run typecheck PASS; bun run build PASS (167 exhibits + blog + about, 216 pages, up from 215 — new post renders).
- docs/beepy-memory.md updated with the 2026-08-08 pair-note lesson (pairs acceptable when designed opposites of one paradigm; Photon passed over due to body-interface overlap).

