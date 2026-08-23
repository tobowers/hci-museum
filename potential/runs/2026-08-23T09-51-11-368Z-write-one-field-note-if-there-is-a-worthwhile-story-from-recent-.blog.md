# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision

Wrote one Field Note. Post: `docs/blog/the-machine-that-asked-the-machinist.md`.

Subject: **Heidenhain TNC 110 (1976)** — the museum's first industrial machine-tool control, and
the machine-as-interrogator interaction model (conversational touch-numeric-control programming:
machine poses TOOL NUMBER? / POSITION X? / FEED RATE? prompts, operator answers with labeled
function keys POS/TOOL/CYCLE/PATH/INPUT).

## Why this subject, not ROLM CBX

The 08-23 promotion brought two strong unwritten candidates:
- **Heidenhain TNC 110** (machine-as-interrogator on a shop floor)
- **ROLM CBX / RolmPhone 400** (magnet-switchhook soft-key phone)

Rule applied from memory: interaction-model distinctiveness + overlap management across the
existing note catalog.
- ROLM is genuinely good but telephony is an already-noted region (BTX `the-vending-machine-for-screens`,
  Quotron `the-keyboard-that-was-a-query-language`, Hayes, Novation CAT, etc.), and its soft-key/magnetic-
  hook storytelling is a variant of the soft-button/soft-key paradigm rather than a wholly new channel.
- TNC 110 has **no near-neighbor note at all**: no existing Field Note touches industrial HCI, machine
  tools, or the shop floor. The "machine asks, human answers" surface does appear in consumer/educational
  notes (Little Professor `the-calculator-that-asked-the-questions`, Data Discman
  `the-machine-asks-you-answer-the-book-opens`), so the post explicitly differentiates the TNC: a
  *production tool* interrogating a professional who supplies only trade parameters, versus teaching/reading
  machines guiding a learner. That inversion — the machine performs the programming work and the human does
  the only thing computers can't (know real-world values) — is the post's anchor.

## Image

Used `../assets/wiki/heidenhain-tnc110.jpg` (CC BY-SA 3.0, Heidenhain archive). An image was appropriate
here because the physical panel (labeled function keys surrounding the CRT) is the interaction surface —
worth showing, and the only local asset relevant to the subject. Caption notes the CC BY-SA 3.0 license.

## Links

- [Heidenhain TNC 110](../exhibits/heidenhain-tnc-110/)
- Cross-links to Tektronix 7854, Fluke 9010A, Little Professor, Data Discman for the inversion contrast.

## Verification

- `bun run typecheck` — PASS
- `bun run build` — PASS (211 exhibits, 275 pages)
- `public/blog/the-machine-that-asked-the-machinist` rendered; slug present.

## Memory

Appended durable Field Note lesson to docs/beepy-memory.md (2026-08-23).

