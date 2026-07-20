# Field Note Writing Loop — 2026-07-20T12:03

## Decision
Worthwhile story found. The 2026-07-20 collection run added three exhibits (Action Max, Lightwriter SL1, Optacon II), and the Optacon had the strongest single story: a father's reading machine for his blind daughter, the distinctive philosophy of pure sensory substitution (no OCR — the human does the recognizing), and the 1985 cost-cutting that reduced the pin array and drove long-time users back to the old model. That last detail is the kind of textured, specific failure Beepy's charter asks for.

## Post written
- File: `docs/blog/the-reading-machine-that-made-you-do-the-reading.md`
- Title: "The Reading Machine That Made You Do the Reading"
- Length: ~620 words (within 500–900)
- Links: relative link to `../exhibits/optacon-ii/`
- Images: one local image `../assets/wiki/optacon-ii.jpg`
- No edits to collection data, wiki, or data.ts.

## Verification
- `bun run typecheck`: PASS (no errors)
- `bun run build`: PASS — 112 exhibits + blog + about, 142 pages (was 141; +1 blog post)

## Notes for memory
- The Optacon exhibit uses slug `optacon-ii`; verified against src/data.ts before linking.
- All three 2026-07-20 additions are accessibility/translation stories; the Optacon's "machine does no recognition" angle is the most distinctive HCI thesis and the best fit for a single focused post.
