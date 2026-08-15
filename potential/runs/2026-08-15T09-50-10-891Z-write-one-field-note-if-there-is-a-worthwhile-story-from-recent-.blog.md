# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Progress

### Decision
Yes — one Field Note written today.

**Subject:** IMSAI 8080 (1976), angle: "front panel as game controller / you-are-the-boot-loader."

**Rationale** (per Field Note lessons in Beepy memory):
- The 08-15 run note explicitly flagged the IMSAI front-panel-as-game-controller angle as having *no near-neighbor note* — the strongest signal available.
- Batch alternatives and why they lost:
  - **Nissan Voice Warning (1981)** — needle-in-a-groove analog voice is delightful ("bocking brake"), but the note candidate pool already covers analog/toy speech (2-XL, TI Magic Wand) and the Nissan story is more about the medium than a new interaction paradigm. Kept as a strong future candidate.
  - **KIM-1 (1976)** — hex keypad + TIM monitor + Microchess. Overlaps thematically with the IMSAI note (both are "raw machine interaction"); the IMSAI's game-in-the-manual inversion is the more surprising single story and the museum's only front-panel artifact. KIM-1 is referenced within the IMSAI note as the paired counterpoint.
- Interaction-model distinctiveness check: no existing Field Note covers a raw binary interface, front-panel bootstrapping, or an interface that doubles as a game with no simulated content. Closest neighbors (the-tank-with-no-screen = Big Trak's command/consequence gap; the-machine-that-wanted-to-play-with-you = Merlin's hidden state) are both consumer toys with keypads — distinct from the IMSAI's panel-as-registers story.

### Files
- `docs/blog/the-front-panel-was-the-game.md` — written (frontmatter per spec; 2 local images from `../assets/wiki/`: imsai-8080-wargames.jpg, imsai-8080-front-panel.jpg; links to `../exhibits/imsai-8080/` and `../exhibits/kim-1/`).
- No collection data edited (no wiki, no data.ts).

### Verification
- `bun run typecheck` — pending
- `bun run build` — pending

### Verification results
- `bun run typecheck` — PASS (tsc --noEmit, no errors).
- `bun run build` — PASS ("191 exhibits + blog + about, 247 pages").
- Rendered page `public/blog/the-front-panel-was-the-game/index.html` references only local `../../assets/wiki/imsai-8080-wargames.jpg` and `../../assets/wiki/imsai-8080-front-panel.jpg` (no remote hotlinks).
- `docs/beepy-memory.md` — appended durable Field Note lesson (2026-08-15) and refreshed pending-candidate list.

### Final
One Field Note written: `docs/blog/the-front-panel-was-the-game.md`. No collection data touched.
