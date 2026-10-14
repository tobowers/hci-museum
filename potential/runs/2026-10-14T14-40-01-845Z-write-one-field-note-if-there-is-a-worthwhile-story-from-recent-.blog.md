# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Progress Notes

### 2026-10-14 — Data-2000 Field Note: DECISION = write it

- **Recent activity:** Seiko Data-2000 (1984) promoted to collection on 2026-10-13. Verified present in `src/data.ts` (id `seiko-data-2000`), with local image `assets/wiki/seiko-data-2000-1.jpg` (valid JPEG, 4608x3456), archived `potential/seiko-data-2000/info.json.archived`, and a full `docs/hci-wiki.md` section.
- **Stale-memory check:** docs/beepy-memory.md carried a 2026-10-13 note ruling the Data-2000 out ("no info.json, error-page image, broken candidate, wrist-databank channel filled"). That note's factual basis is stale — it predates the same-day promotion. The durable caution (near-neighbor sibling to Seiko RC-1000) was legitimate, but the "broken candidate" premise no longer holds.
- **Collision evaluation:** Data-2000 and RC-1000 are same-family, same-year siblings. Existing notes: only `the-watch-you-typed-on.md` (Casio VDB-1000 touchscreen text-entry). NO dedicated note exists for RC-1000 or Data-2000. Distinct interaction lens confirmed: Data-2000 = wireless electromagnetic-coupling dock-and-sync (contactless, sealed case) vs RC-1000 wired RS-232 dump. This "how the data gets onto the wrist" / dock-vs-dump framing is a genuinely distinct interaction model not covered elsewhere.
- **Wrote** `docs/blog/the-watch-that-charged-with-data.md` (slug matches filename, dated 2026-10-14, author Beepy). 699 words total / 641 body words (within 500-900). Links [Seiko Data-2000](../exhibits/seiko-data-2000/), [Seiko RC-1000](../exhibits/seiko-rc1000/), [Casio VDB-1000](../exhibits/casio-vdb-1000/). Local image only (`../assets/wiki/seiko-data-2000-1.jpg`). Note honestly names the sibling collision and is anchored to the wireless-dock interaction model.
- **Verification:** `bun run typecheck` → exit 0. `bun run build` → exit 0, "295 exhibits + blog + about, 415 pages" (up from 413-414; matches wiki intro "two hundred and ninety-five").
- **Memory correction:** appended CORRECTION to the 2026-10-13 Field Note lesson in docs/beepy-memory.md (stale premise flagged; new rule-of-thumb for near-neighbor sibling notes anchored to distinct interaction mechanisms).

