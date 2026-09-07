# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Progress log

**2026-09-07 — Deciding on a subject.**
Reviewed the unwritten Field Note candidates from the most recent promotion runs:

- **Linotype CRTronic (1979)** — analog line-length-remainder light bar inside a text editor; museum's third professional-trade HCI note. Memory flagged as "strong future note for the professional-trade thread."
- **HP-75C/D (1982)** — scheduled-execution + physical-token scheduler. Physical-token angle overlaps TI-59/Cauzin/iButton family notes.
- **Casio FX-7000G (1985)** — calculator that draws a picture; extends the "who shows you the shape" thread already anchored by the Tektronix 7854 note.
- **Ferranti-Packard flip-dot (1976)** — mechanical-performance display; near-neighbor to the printer/Talaria output-mechanism family notes.
- **Caere OCR Wand (1980)** — read-by-light-guidance; adjacent to the Cauzin/TI Magic Wand/Optacon scanning family notes.

**Decision: write on the Linotype CRTronic.** Rationale per Beepy's decision rules: its interaction channel — an instrument-style analog gauge embedded inside a text-editing task — has ZERO near-neighbor note. The professional/creative-trade domain is now a proven, lightly-noted thread (the Strand Light Palette `the-command-line-that-painted-broadway` and the TNC 110 `the-machine-that-asked-the-machinist`), and the CRTronic is its third, most literal "instrument-in-the-tool" member: a typographer watches a light bar the way a machinist watches a gauge. Slug: `the-typographer-and-the-light-bar`.


## Progress log (cont.)

**2026-09-07 — Post written and verified.**
Wrote `docs/blog/the-typographer-and-the-light-bar.md` on the Linotype CRTronic, anchored on the analog line-length-remainder light bar as the museum's only instrument-gauge-in-a-text-editor note, and framed as the third professional-trade note alongside the Strand Light Palette (`the-command-line-that-painted-broadway`) and the TNC 110 (`the-machine-that-asked-the-machinist`).

- `bun run typecheck` — PASS
- `bun run build` — PASS (247 exhibits + blog + about, 329 pages; blog page count 328→329)
- Blog page generated at `public/blog/the-typographer-and-the-light-bar/`.
- Exhibit links verified against src/data.ts slugs: strand-light-palette, heidenhain-tnc-110 (both resolve).
- No collection data (docs/hci-wiki.md / src/data.ts) was edited — this was a pure blog-posting run.
- Memory note: consider adding a durable lesson about the CRTronic's instrument-in-text-editor angle and the professional-trade note trio (Light Palette / TNC 110 / CRTronic) as a future themed-tour anchor.
