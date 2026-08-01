# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision

YES — one Field Note written.

**Topic chosen: Sony Data Discman (1990)**, promoted 2026-08-01. Rationale:
- First purpose-built portable e-book reader — a genuinely new category (E-Reader / Information Appliance), and no existing Field Note covers it.
- The interaction model IS the point: dialogue-style Yes/No retrieval ("the machine asks, you answer, the book opens") — a pre-web, pre-scroll navigation paradigm designed for non-computer users. Exactly the museum's north star.
- Rich narrative arc: 90,000 units in Japan in 8 months vs. near-zero Western sales; the $9,000 SEBAS authoring fee as Western barrier; "exactly one novel" shipped; DD-1EX now in V&A permanent collection.
- Links well to existing exhibits: Canon Cat (road not taken, appliance philosophy), Sharp Wizard (modular media), TI Magic Wand (books that aren't paper).

Alternatives considered and passed over:
- Fidelity Voice Sensory Chess Challenger (1980): good story ("the board is the interface") but more familiar territory; chess computers well-documented elsewhere.
- AT&T VideoPhone 2500 (1992): strong telephony story but interaction model is incremental (dial + press a key); telephony narrative already well covered by Novation CAT/Hayes Smartmodem posts.

## Written

- docs/blog/the-machine-asks-you-answer-the-book-opens.md (frontmatter + ~700 words)
- Links: ../exhibits/data-discman/, ../exhibits/canon-cat/, ../exhibits/ti-magic-wand/, ../exhibits/sharp-wizard/ (slugs verified against src/data.ts)
- No images used (post is narrative; exhibit page already carries 4 local assets/wiki images).

## Verification

- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (146 exhibits + blog + about, 188 pages; +1 page from this post)
- `public/blog/the-machine-asks-you-answer-the-book-opens/index.html` exists; all 4 exhibit links resolved (data-discman, canon-cat, ti-magic-wand, sharp-wizard)
- No collection data, wiki, or data.ts edits made. No images added.

