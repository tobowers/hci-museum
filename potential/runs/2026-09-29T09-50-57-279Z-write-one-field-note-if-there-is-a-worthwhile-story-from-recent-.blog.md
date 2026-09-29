# Blog Agent Trace — 2026-09-29

Topic: write one Field Note if there is a worthwhile story from recent collection activity.

## Progress

### Survey of unwritten in-collection candidates
Freshest promoted-but-unwritten candidates are **Solari Split-Flap Display** and **Dark Tower**, both from the 09-26 curation run. Verified via blog dir + src/data.ts:
- The output-mechanism family is already saturated with notes: Ferranti-Packard flip-dot (`the-display-that-remembered-itself`), GE Talaria (`the-picture-sculpted-from-oil`), Honeywell Visicorder (`the-light-that-developed-in-the-dark`), Commodore 1520 (`the-printer-that-put-on-a-show`). Read the flip-dot and Talaria notes in full:
  - **Solari split-flap would collide** with `the-display-that-remembered-itself`, which already covers the bistable/zero-power persistence, the mechanical-reveal-as-performance sound, departure-board/transit-signage context, and "the output mechanism is the point." The only Solari difference (full-glyph cards vs dot-matrix discs) is a mechanism detail, not a fresh interaction channel. REJECTED per "zero near-neighbor note" discipline.
- Read the hidden-state notes (`the-machine-that-wanted-to-play-with-you` / Merlin, `the-player-was-the-map` / D&D Labyrinth, `the-machine-that-held-a-secret-number` / Invicta Master Mind):
  - They cover electrons-hidden state: keys-as-display (Merlin), audio-only map (D&D), oracle-and-interrogator LED verdicts (Invicta).
  - **None cover Dark Tower's core**: a *rotating physical tower* as game-master whose conceal-and-reveal is *performed* through a swivel-to-face-you housing, tinted plastic concealment, and an internal rotating carousel of backlit film cels. State hidden in a visible, turning object, not in signal. This is a genuinely fresh, no-near-neighbor angle.

### Decision
Chose **Dark Tower (1981)** as today's Field Note. Rationale: it is the freshest (09-26) promotion with zero note; its distinct claim — hidden state physically *housed* as a rotating tinted-plastic theater rather than concealed in electrons — has no near-neighbor note among the three existing hidden-state notes. The memory's earlier note-decision (Touché over Dark Tower, 09-27) was correct *within that batch* (Touché opened a wholly-unrepresented "program-through-a-monitor" channel), but does not foreclose Dark Tower on a day when the alternative (Solari) directly collides.

## Result
Wrote ONE Field Note: `docs/blog/the-tower-that-kept-its-secret-in-plastic.md` — Milton Bradley Dark Tower (1981), the museum's "hidden state housed in a physical rotating object" note. Anchored on the conceal-and-reveal theater (tinted plastic visor, rotating carousel of backlit film cels, swivel-to-face interaction), contrasted with the three electrical hidden-state notes (Merlin, D&D Labyrinth, Invicta). Ties in Erato's Big Trak lineage. Uses the local image `../assets/wiki/dark-tower-assembled.jpg`.

Post: ~820 words; 6 internal exhibit links, all verified present in src/data.ts (invicta-electronic-master-mind, merlin, dnd-computer-labyrinth, dark-tower, little-professor, big-trak). frontmatter present (title/date/description/author/slug).

## Verification
Run below.
- `bun run typecheck` — PASS
- `bun run build` — PASS (283 exhibits, 389 pages)
- Built page `public/blog/the-tower-that-kept-its-secret-in-plastic/index.html` verified:
  - Image served from local `../../assets/wiki/dark-tower-assembled.jpg` (no remote hotlink for content).
  - All 6 exhibit links render as relative `../../exhibits/<slug>/` — no 404s.
  - The only `http` URLs in the shell are fonts (Google Fonts) + feed/favicon links, not content.
