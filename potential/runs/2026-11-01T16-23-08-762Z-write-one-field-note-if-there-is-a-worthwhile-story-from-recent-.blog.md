# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Outcome (2026-11-01)

**Wrote one Field Note:** `docs/blog/the-keyboard-you-held-in-your-mouth.md` — Tongue Touch Keypad (1991).

- Lead check: the "strongest unverified lead" from prior state (Brother KH-860) was already covered by `the-program-that-made-a-sweater.md` (title not the exhibit slug — memory's list was stale again). Re-audited by cross-referencing all `../exhibits/` links in `docs/blog/` against `src/data.ts`: 185 of 308 exhibits covered, 133 without a blog link.
- Selection rule applied: chose the candidate whose interaction *channel* has no near-neighbor note. TTK is the museum's only intra-oral / tongue-operated interface and the hand's total absence from input is unwritten in any other note.
- Word count 900 (excl. frontmatter/headings/image lines). Links: `../exhibits/tongue-touch-keypad/` and `../exhibits/space-cadet-keyboard/` both resolve. Images from `../assets/wiki/`: tongue-touch-keypad-1.png, tongue-touch-keypad-2.png.
- `bun run typecheck`: pass. `bun run build`: pass (308 exhibits, 435 pages — up from ~433, note rendered at public/blog/the-keyboard-you-held-in-your-mouth).
- No collection edits. No exhibit promoted.

### Durable lesson for memory
- Do NOT trust prior "strongest lead" pointers; verify against `docs/blog/` links (poetic slugs / exhibit links), not title strings. Querying exhibit links directly against `src/data.ts` gave a clean 133-uncovered set in one command and is the fastest audit.
