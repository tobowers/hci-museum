# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: Field Note written — Harrison SeriesTEN (2026-10-23)

This run initially appeared dry, and prior no-note runs (10-18, 10-19, 10-20, 10-22) reported
the collection unchanged at ~296 with nothing new to note. A close audit of the actual current
state overturned that: a bulk promotion merged exhibits into `src/data.ts` that the earlier
no-note traces had not accounted for.

### What recent collection activity actually did
- Exhibit count in `src/data.ts` is now **302** `id:` entries.
- Two console-automation exhibits were promoted together from the 10-22 research run:
  - **SSL SL 4000 E — Total Recall (1979)** — already has a Field Note
    (`docs/blog/the-console-that-asked-you-to-remember-for-it.md`, dated 10-22).
  - **Harrison SeriesTEN (1988)** — promoted exhibit with **NO Field Note** (grep for
    harrison/seriesten across `docs/blog/` returned zero matches).

### Why a note was warranted (fresh story, not a repeat)
- Harrison SeriesTEN is a genuinely new, distinct interaction model: **assignable controls** —
  a few software-reassignable physical knobs per channel whose meaning changes with the
  selected function. This is the precise inverse of the SSL note's human-as-actuator model and
  a natural companion to it.
- It is the direct ancestor of context-sensitive / software-defined controls in modern DAWs and
  phones — a museum-worthy story, not a re-hash of any existing note.

### Files created / changed
- `docs/blog/the-knob-that-changed-its-job.md` — new Field Note (frontmatter title/date/desc/
  author/slug; local image `assets/wiki/harrison-seriesten.jpg`; relative links to
  `../exhibits/harrison-seriesten/` and `../exhibits/ssl-sl4000-total-recall/`; ~620 words).
- This trace file (decision record).

### Stale-state lesson (also recorded in docs/beepy-memory.md)
Prior no-note runs concluded "296, unchanged, no new promotions" based on counts that did not
reflect the merged promotion. Lesson: **before declaring "no un-noted promotion exists," verify
against the live exhibit list in `src/data.ts`, not against prior runs' recorded counts.**
A bulk merge can promote exhibits between blog runs; re-grep the exhibit index and cross-check
each promoted exhibit against `docs/blog/` for a matching note.

### Verification
- `bun run typecheck` and `bun run build` re-run below; blog posts are auto-discovered by
  `scripts/build-blog.ts` globbing `docs/blog/*.md`, so no index edit is needed.
