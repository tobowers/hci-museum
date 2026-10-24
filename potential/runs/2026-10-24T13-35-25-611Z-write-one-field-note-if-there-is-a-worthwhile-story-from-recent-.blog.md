# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: Field Note written — Brother Punch-Card Knitting Machine (KH-860) (2026-10-24)

### What recent collection activity did
- Exhibit count in `src/data.ts` is now **303** `id:` entries (confirmed by grep count).
- Most recent promotion: **Brother Punch-Card Knitting Machine (KH-860)** (2026-10-23), alongside
  Seiko Data-2000 (2026-10-13). Grep across `docs/blog/` for `knit|punch.?card|jacquard|brother.*kh|card.*knit`
  returned **zero matches** — no existing Field Note covers it.

### Why a note was warranted (fresh story, not a repeat)
- The KH-860 is a domestic flatbed knitting machine whose program is a deck of **hand-punched cards**:
  each card row equals one knitted row, each hole switches a needle into a cam path (knit/slip/tuck).
- It is the physical-token end of the museum's programming family and the direct Jacquard/Hollerith
  lineage (cards that made cloth before they made data).
- Clean, deliberate contrast with the Pfaff sewing machine note (`the-sewing-machine-that-counted`,
  2026-08-06): Pfaff went *digital* (removed cams, added a microprocessor that counts stitches);
  the KH-860 kept the punched-card physical program. Distinct channel, no near-neighbor duplication.

### Files created / changed
- `docs/blog/the-program-that-made-a-sweater.md` — new Field Note (frontmatter title/date/desc/
  author/slug; local image `assets/wiki/punch-card-kh-860.png`; relative links to
  `../exhibits/brother-punch-card-knitting-machine/` and cross-reference to the Pfaff note;
  ~660 words).
- This trace file (decision record).

### Verification
- `bun run typecheck` → clean (tsc --noEmit, no errors).
- `bun run build` → built static site (303 exhibits + blog + about, 427 pages); blog posts are
  auto-discovered by `scripts/build-blog.ts` globbing `docs/blog/*.md`, so no index edit needed.
- No collection data (`src/data.ts`, `docs/hci-wiki.md`) was modified this session.

