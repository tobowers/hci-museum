# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Decision: Field Note on the Supermarket Checkout Laser Scanner (1974)

Recent run 2026-09-08T01-00-47 promoted 2 exhibits (collection 249 -> 251):
1. Supermarket Checkout Laser Scanner (1974) - slug `supermarket-laser-scanner`
2. Casio DG-20 Digital Guitar (1987) - slug `casio-dg-20`

Subject selection per Beepy memory's field-note rules (least-coverage-overlap / no-near-neighbor-channel wins):
- Casio DG-20 is music HCI, a category memory explicitly flags as saturated with notes (~8 music notes already). Passed over.
- Supermarket scanner is the museum's only object-as-input-over-a-fixed-surface artifact and, more importantly, the labor-transformation artifact: the moment HCI stopped the cashier from typing prices and made them an alignment operator. The retail register family has notes (IBM 5265 `the-register-with-the-paper-drum`, Barcode Battler `the-day-the-grocery-store-became-a-game-cartridge`) but none covers the scanning-window checkout or the worker-side interface reduction to a single tone.

Note slug: the-checkout-that-stopped-asking (parallel to the-register-with-the-paper-drum).

## Written: docs/blog/the-checkout-that-stopped-asking.md
Post about the Supermarket Checkout Laser Scanner (1974), slug `the-checkout-that-stopped-asking`.
Angle: object-as-input over a fixed glass surface + the labor-transformation of the cashier's job
(register stopped asking; cashier became alignment operator; transaction collapsed to a single beep).
Cross-linked to IBM 5265 (`the-register-with-the-paper-drum`), ViewTouch, Barcode Battler.

Verification:
- bun run typecheck: PASS
- bun run build: PASS (251 exhibits + blog + about, 335 pages; +1 page from this note)
- Word count: 851 incl. frontmatter (~810 body), within 500-900 range.
