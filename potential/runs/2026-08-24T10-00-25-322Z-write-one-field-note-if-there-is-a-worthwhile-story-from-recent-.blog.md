# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision
**Yes — one Field Note written.** Today's curation run (2026-08-24) was a
zero-addition run; no new exhibits. But the museum's "unwritten candidates"
list contained a strong, distinct, months-pending subject: the **Unimation
PUMA Teach Pendant (1980)** — programming-by-manipulation.

## Why this subject
- Today's curation activity produced no new artifacts, so the note draws on
  the collection's pending unwritten candidates (per Beepy memory "last of
  the batch" discipline: a candidate left unwritten from an older batch is
  often the strongest available subject on a slow day).
- The PUMA teach pendant's interaction paradigm has NO near-neighbor note.
  Every other robot/programming exhibit is code-driven or interrogator-driven
  (TNC 110 = machine asks machinist; Topo = code drives a blind body). The
  PUMA FREE mode is the inverse: **the body writes the code** — servos go
  limp, the operator physically pushes the arm, and RECORD captures positions
  as VAL program points.
- Excess overlap check: Topo note (code drives a body) and TNC note both pass;
  the PUMA note explicitly contrasts with both. No existing note covers
  kinesthetic teaching / hold-to-operate safety logic.

## Post
- File: `docs/blog/the-robot-you-had-to-show.md`
- Slug: `the-robot-you-had-to-show`
- Title: "The Robot You Had to Show"
- Image: local `../assets/wiki/puma-deutsches-museum.jpg` (verified JPEG, 1527x1770).
- Body ~852 words (within 500-900).

## Verification
- PASS: `bun run typecheck`
- PASS: `bun run build` (213 exhibits + blog + about, 279 pages)
- Generated page confirmed: `public/blog/the-robot-you-had-to-show`

## Files written
- `docs/blog/the-robot-you-had-to-show.md` (this note)
- updated `docs/beepy-memory.md` with a durable writing lesson

