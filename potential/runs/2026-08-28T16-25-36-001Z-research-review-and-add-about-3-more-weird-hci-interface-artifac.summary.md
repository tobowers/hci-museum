# Summary — research/review/add ~3 weird HCI interface artifacts (1976–1992)

Run date: 2026-08-28T16:25:36Z (Beepy). Trace: `potential/runs/2026-08-28T16-25-36-001Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`.

## What changed & what was added to the collection

**2 exhibits added** (223 total, up from 221):

1. **Mattel Intellivision (1979)** — `mattel-intellivision`
   - Interaction: 12-button telephone-style keypad + free-spinning 16-direction disc; each cartridge ships two printed plastic overlays that slide over the keypad and relabel the buttons per game — the museum's only "printed paper reprograms a hardware keyboard" interface (mass-market cousin to HP-150 touch template / Sharp Wizard cards).
   - Images: 3 local (2 CC BY-SA 3.0 + 1 PD, Evan-Amos) → `assets/wiki/intellivision-controller.jpg`, `intellivision-console.jpg`, `intellivision-console-set.png`.

2. **Amana Touchmatic Radarange (1975; RR5-6 1978 in-window)** — `amana-touchmatic-radarange`
   - Interaction: first microprocessor-controlled digital control panel on a home appliance — keypad + display replace dials; cooking becomes keyed-in programming. Brackets the TNC 110 / Tektronix 7854 / Buick GCC "brains-replace-the-dial" family into the ordinary household.
   - Image: 1 local CC BY-SA 4.0 (representative Amana Radarange; the specific covered RR-6 panel has no free photo — honest captioning) → `assets/wiki/amana-radarange.jpg`.

## Files written
- `potential/mattel-intellivision/info.json` (archived → `info.json.archived`)
- `potential/amana-touchmatic-radarange/info.json` (archived)
- `docs/hci-wiki.md` — intro count (223), ToC (223 entries, +222/223), two `##` exhibit sections appended.
- `src/data.ts` — two `Exhibit` entries added before the closing `];`.
- `assets/wiki/` — 4 images added; removed orphan `intellivision-controller-closeup.jpg`.
- `docs/blog/the-paper-that-was-the-buttons.md` — Beepy Field Note (Intellivision overlay-keypad).
- `docs/beepy-memory.md` — durable lessons appended.
- `potential/runs/2026-08-28T16-25-36-001Z-*.md` and `*.summary.md` — trace + this summary.

## Verified
- `bun run typecheck` — PASS
- `bun run build` — PASS (223 exhibits + blog + about, 293 pages incl. new post)

## Image-blocked candidates documented for future image-resolution (not promoted)
- **Polar Sport Tester PE-2000 (1982)** + PE-3000 (1984): strongest novelty of the batch (wearable physiological sensor as live computer input during exercise), but ZERO freely-licensed images anywhere. Promote once a period photo/patent figure is secured.
- **Electronic keypad/combination safe locks** (La Gard 2200 ~1985, S&G 6120 1992): "keypad IS the whole security interface", unrepresented category, but security hardware is photographically invisible under free licenses.

## Still needs review
- Consider whether the museum wants to invest in image resolution for the Polar PE-2000 (strongest pending candidate) via Polar corporate/retail history or a museum holding.
- The Amana Touchmatic's featured image is a representative family photo, not the specific covered unit — flag for a future photo upgrade if one surfaces.
- Unwritten Field Notes pending: Amana Touchmatic (brains-replaced-the-dial), Polar (if promoted), plus prior-batch Fairchild Channel F, Invicta Master Mind, Meade LX200, Nissan Voice Warning, IBM 3614, Collins EFIS.