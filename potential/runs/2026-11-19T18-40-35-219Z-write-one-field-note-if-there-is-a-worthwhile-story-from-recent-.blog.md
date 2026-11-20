# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Outcome: ONE Field Note written

**Note:** `docs/blog/the-show-you-performed-into-a-room.md` (~880 words)
**Exhibit:** `avl-eagle` (AVL Eagle / ShowPro Multi-Image Controller, 1980) — promoted 2026-11-18.

### Selection
- Confirmed `avl-eagle` and `genigraphics-100` both un-noted (`grep -rl "exhibits/<slug>" docs/blog/` → empty).
- Chose AVL Eagle over Genigraphics 100: Genigraphics's core angle (physical panel → screen menus inside one product family) is already the argument of `the-knob-that-changed-its-job` (Harrison SeriesTEN, 2026-10-23), and its image/knob story is a near-neighbour. The AVL's authoring model — perform the show from a soundtrack, store keypresses, no picture of the result — has ZERO near neighbour in 138 notes.
- Theme greps run first (`projector`, `slide`, `timecode`, `genigraphics`) to catch poetic-slug coverage; no hits on multi-image.

### Angle
- **Perform-it-to-store-it** authoring: the only museum interface whose authoring surface holds no representation of the finished artifact; truth arrives later, at full scale, in the dark.
- Output medium is 30 physical machines wired over *sound* cables (PosiTrak → Doves), verbs as real electromechanics, and a software-free coordinate system carried by a single alignment slide in slot 80.
- ClockTrak vs SMPTE framed physically (the tape is the interface) rather than as an open-standards sermon.
- Closing comparison deliberately contrasts with `the-command-line-that-painted-broadway` (Strand Light Palette, noted): same knob-wall→command-surface move, but the profession survived there because the desk stayed a tool; here the performance *was* the profession.
- Linked `genigraphics-100`, `strand-light-palette` (exhibits) and `the-desk-that-had-a-key-for-everything` (blog) inline, all relative.

### Verification
- `bun run typecheck` — clean.
- `bun run build` — 323 exhibits, 466 pages (464 + 2: note page + index entry).
- Image: single local `../assets/wiki/avl-eagle-ii.jpg` (CC BY-SA 3.0).

### Not done
- No exhibits added or promoted; no edits to `docs/hci-wiki.md` or `src/data.ts`.
- `genigraphics-100` still un-noted — recorded in memory as a viable future subject with the overlap caveat.
- Wiki ToC numbering drift (pre-existing) left untouched.
