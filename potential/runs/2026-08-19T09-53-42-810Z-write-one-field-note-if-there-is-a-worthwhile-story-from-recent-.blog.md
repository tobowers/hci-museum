# Field Note writing session — 2026-08-19

## Decision

Yes, I wrote one Field Note today.

## Candidate selection

Reviewed recent un-noted additions from the last few curation runs:

1. **Quotron II (1986)** — custom-keyboard market-data terminal, keyboard-as-query-language, green glass, Bloomberg ancestor, Wall Street film. No near-neighbor note.
2. **Turbo Touch 360 (1992)** — capacitive touch D-pad replacement. Interesting but a controller variant; the museum has several controller notes already. Weakest angle.
3. **KIM-1 (1976)** — hex keypad, Microchess, first commercial microcomputer game. Referenced in the existing IMSAI 8080 note (`the-front-panel-was-the-game`) as the paired counterpoint. A second note in the same "raw machine interface" space would dilute.

Winner: **Quotron II**. The keyboard-as-query-language angle is genuinely novel in the museum's blog collection. No existing note covers professional terminal keyboards as retrieval grammars. The museum has a small cluster of pre-Web information terminals (Minitel, BTX, Famicom Network System) and the Quotron note can cross-link to them, creating a thematic thread.

## Post written

- `docs/blog/the-keyboard-that-was-a-query-language.md`
- Title: "The keyboard that was a query language"
- Slug: `the-keyboard-that-was-a-query-language`
- 650 words
- Uses local image `../assets/wiki/quotron-ii-desk-unit.png`
- Links to: Quotron II, Minitel, BTX Terminal, Famicom Network System exhibits

## Verification

- `bun run typecheck` — PASS
- `bun run build` — PASS

## Durable lesson

When a batch of recent additions has no explicit Field Note, scan for the artifact whose interaction paradigm has the fewest near-neighbor notes. The Quotron II's keyboard-as-query-language has no existing note and connects a pre-Web terminal narrative that the museum's blog hasn't explored yet. The KIM-1 was the alternative — strong artifact but already referenced in the IMSAI note, and a second raw-machine-interface note would feel redundant.