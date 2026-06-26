# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: Write one Field Note

After reviewing the 9 artifacts added across the last 3 curation runs (2026-06-24, 2026-06-25, 2026-06-26), I identified the Nintendo Hands Free Controller (1989) as the strongest story for a Field Note.

### Candidates considered

- **GROPE-III** — Dramatic physically (nuclear teleoperator arm + molecular forces), founded haptic rendering. Would make a vivid post, but the Hands Free has a richer narrative arc.
- **DLR Control Ball** — Incredible longevity (space shuttle → CAD desks, 40+ years). Strong "surprise" factor but a thinner human story.
- **EyeTyper → DynaVox → Tobii Dynavox** — Great lineage story. Worth revisiting in future.
- **DragonDictate** — "Oops" command and husband-wife team. Close runner-up.
- **Nintendo Hands Free Controller** — SELECTED. Richest narrative: mother's letter → hospital co-design → shipped product → zero marketing → institutional forgetting → 29-year gap before Xbox Adaptive Controller.

### Why Hands Free won

- Complete narrative arc with a beginning (letter), middle (co-design), and end (obscurity + legacy)
- Strong human element (mother, disabled children as "self-advocates")
- Connects to a contemporary reference point (Xbox Adaptive Controller, 2018)
- Distinct from existing Field Notes: welcome (introductory/Hubot), LaserScope (glorious failure), Hands Free (quiet success then institutional forgetting)
- Three good local images already in assets/wiki/
- The interaction model (chin joystick + sip-and-puff) is specific and vivid

### Post written

- File: `docs/blog/the-controller-nobody-knew-about.md`
- Slug: `the-controller-nobody-knew-about`
- ~700 words
- Image: `../assets/wiki/nintendo-hands-free-1.jpg` and `../assets/wiki/nintendo-hands-free-3.jpg`
- Links: exhibit page (`../exhibits/nintendo-hands-free/`)

## Verification

- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (35 exhibits + blog + about, 41 pages)

Blog count went from 2 → 3 posts. Total pages from 40 → 41.

## Notes for future

- EyeTyper/DragonDictate/GROPE-III all remain strong candidates for future Field Notes
- The "institutional forgetting" theme could be revisited — several artifacts share this pattern
- No edits made to collection data, wiki, or data.ts (this is blog-only per charter)
