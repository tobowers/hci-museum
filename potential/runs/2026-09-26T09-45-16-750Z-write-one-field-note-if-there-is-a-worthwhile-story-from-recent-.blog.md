# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Progress

- (start) Collection = 272 exhibits. This is a blog-only run; two prior curation runs (09-24T13, 09-25T01) were aborted by Actions timeout after staging the Yeoman Navigator candidate in potential/ but NOT promoting it.
- I am the blog-posting agent only. I must NOT promote the Yeoman (that's the curation loop's job). Since the Yeoman is not in the collection, a blog note linking to `../exhibits/yeoman-plotter/` would 404 — so it is out of scope for a Field Note.
- Surveyed unwritten in-collection candidates from memory's persistent list. Confirmed noted vs unwritten:
  - Invicta Electronic Master Mind → `the-machine-that-held-a-secret-number` (noted)
  - Ferranti-Packard flip-dot → `the-display-that-remembered-itself` (noted 09-25)
  - Honeywell Visicorder → `the-light-that-developed-in-the-dark` (noted)
  - Caere OCR Wand → `the-light-that-taught-your-hand` (noted)
  - Nissan Voice Warning → `the-car-that-spoke-from-a-record` (noted)
  - Chalk Board PowerPad → NOT in collection (ineligible)
  - **Amana Touchmatic Radarange → UNWRITTEN, in collection** (eligible)
  - **Ascom QuickFare → UNWRITTEN, in collection** (eligible)
- Chose **Amana Touchmatic Radarange (1975)** as today's Field Note subject. Rationale: it is the museum's ur-example of "brains replace the dial" — the boundary-crossing story (computer's brains entered a machine that does physical work) extended to the most ordinary household surface (the kitchen). The claim is clean, self-contained, and has no near-neighbor note. The Ascom QuickFare, though strong, sits in the already-anchored physical-token family (iButton, TI-59, IBM 6:5, LaserBarcode) and would collide with those notes. Per my Field Note lessons, the rarest single claim with zero near-neighbor wins — and no note covers computing's arrival in the home kitchen.

## Result

Wrote ONE Field Note: `docs/blog/the-oven-that-taught-the-kitchen-to-program.md` — the Amana Touchmatic Radarange (1975), the museum's ur-example of "brains replace the dial" and its only "computing enters the kitchen" note. Anchored on the rarest single claim (a microwave as a miniature command line to a heat engine / cooking-as-keyed-in-programming), threaded into the existing boundary-crossing trio (TNC 110, Tektronix 7854, Buick GCC). No image included — the note stands as narrative; the exhibit already carries the honestly-captioned representative photo.

Post: 729 words, valid exhibit links only (verified all 6 slugs in src/data.ts and built pages). frontmatter present (title/date/description/author/slug).

Verification: `bun run typecheck` PASS; `bun run build` PASS (272 exhibits, 375 pages). Built page at public/blog/the-oven-that-taught-the-kitchen-to-program/index.html confirmed.

Out of scope (noted, not acted on): the staged-but-unpromoted Yeoman Navigator in potential/yeoman-plotter/ from two aborted curation runs. Promoting it is the curation loop's job, not the blog agent's; and a note linking to a non-existent exhibit page would 404. Flagged here for the next curation run to pick up.
