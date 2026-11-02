# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Outcome (2026-11-02)

**Wrote one Field Note:** `docs/blog/the-machine-that-measured-by-eating.md` — Ponsse HS-15 Harvester (1988).

- Lead: the 2026-11-01T18-27 research run promoted **Ponsse HS-15** (Ponsse Oy, Vieremä, Finland) — a fresh promotion from less than a day earlier (git shows the 11-01 scout PR merged, collection now 309). The 11-01 blog run had written about the Tongue Touch Keypad, so Ponsse was the freshest promotion with *no* note. Grep confirmed zero `exhibits/ponsse-hs15/` links anywhere in `docs/blog/`.
- Selection rule applied: fresh promotion + interaction channel with ZERO near-neighbor note. Ponsse is the museum's first **forestry production interface** and its first **measurement loop whose sensor and actuator are the same grip** (measuring wheel + diameter knives ride the same head that fells and bucks the tree). Checked near-neighbors `the-leg-that-was-both-sensor-and-motor` (human limb loop), `the-sewing-machine-that-counted`, and `the-guitar-that-measured-everything` — all distinct: those sense a person or an instrument; Ponsse senses a *living material object it is destroying*.
- Word count 896 (target 500–900). Links `../exhibits/ponsse-hs15/` and `../exhibits/tongue-touch-keypad/` both resolve. Image `../assets/wiki/ponsse-hs15.jpg` (1200x800 JPEG, CC BY 4.0, Kauko Tiuraniemi / Lusto).
- Verified: `bun run typecheck` pass. `bun run build` pass — 309 exhibits, 437 pages (up from 435), note rendered at public/blog/the-machine-that-measured-by-eating; exhibit route and image both emit.
- No collection edits. No exhibit promoted. No wiki/data.ts changes.

### Durable lesson for memory
- The freshest scout promotion is the single best blog lead, and it is almost never written up yet — the blog and scout runs are decoupled by schedule. Before auditing the whole 300-exhibit backlog for uncovered channels, first check whether YESTERDAY's promotion is uncovered. On this run the previous blog run (11-01) had written the Tongue Touch Keypad (promoted 06-29) while the far-fresher 11-01 *scout* promotion (Ponsse) sat unwritten.
- Also durable: a new promotion can be a whole unrepresented *domain*, not just an uncovered device. Ponsse introduced forestry; the obvious "same-grip sensor/actuator" near-neighbor (`the-leg…`) is about a body, so the material-object angle was free.
