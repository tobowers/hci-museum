# Run Summary — 2026-09-05T12-32-03-344Z

## Goal
Research, review, and add ~3 more weird HCI interface artifacts from 1976–1992.

## What changed
The collection grew from **241 to 243 exhibits** with **2 promoted additions** (fewer than 3 was accepted — the well is genuinely thin and Octen was exhausted early).

### Added to the collection
1. **HP-75C / HP-75D Portable Computer (1982)** — slug `hp-75d`. Handheld BASIC computer whose interaction is physical-token software loading: a built-in magnetic card reader beside the spacebar (2×650 bytes/card), 4 module slots, a barcode-wand port (D), and — oddly for 1982 — an appointment scheduler that can **execute BASIC programs on schedule** (real-time-control appliance). Distinct from TI-59 (external numeric card data) and all organizers.
2. **Casio FX-7000G Graphing Calculator (1985)** — slug `casio-fx-7000g`. The first graphing calculator: a 96×64 dot-matrix LCD turns the display into a drawing surface that plots user-defined and statistical graphs. Interaction-model shift from "machine answers with a number" to "machine draws a picture you inspect." 422-byte tokenized programming. Distinct from all calculator exhibits.

### Files written
- `potential/hp-75d/info.json` (then archived → `info.json.archived`)
- `potential/casio-fx-7000g/info.json` (then archived → `info.json.archived`)
- `src/data.ts` — 2 exhibit entries added.
- `docs/hci-wiki.md` — 2 wiki sections, 2 ToC entries, intro count updated (241→243).
- `assets/wiki/` — 4 images copied (hp-75d.jpg, hp-75c.jpg, casio-fx-7000g.jpg, casio-fx-7000g-box.jpg), all local paths.
- `potential/runs/2026-09-05T12-32-03-344Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace).
- `potential/runs/2026-09-05T12-32-03-344Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file).

## Research process
- 3 parallel `hci-research-subagent` runs on fresh angles:
  - **Chart recorders / medical pen-output instruments** → Vitalograph Compact (great interaction story, image-blocked), IBM 5880 / HP 4700A / Marquette MAC-1 ECG carts (all image-blocked).
  - **Physical-ritual home appliances** → HP-75C/D (promoted), Honeywell Chronotherm pin-dial (no good image), TI-99/4A (cartridge console, familiar).
  - **Instrument tuners / pitch monitors** → thin; Georgia Tech ear-training apparatus (patent-only), Korg quartz tuner pendants (no image), Peterson strobe tuners (mostly pre-1976).
- Subagents consumed the full shared Octen budget (7/7). All subsequent verification done via free channels (Wikipedia, Commons API, direct curl with browser UA).
- Manager chose 2 image-solvable, distinct candidates and verified all 4 images as valid JPEGs via `file`.

## Verification results
- `bun run typecheck` — **PASS**.
- `bun run build` — **PASS** (243 exhibits + blog + about, 322 pages).
- Exhibit pages generated for both new slugs.
- data.ts exhibit count via `grep -cE '^\s{4}id: "'` = 243 (matches build).
- info.json files archived (0 active remain), no auto-promotion risk.

## What still needs review
- **HP-28C (1986, first symbolic-CAS calculator)** — strong, image-rich, deferred to avoid calculator-category saturation this run. Good future candidate.
- **Vitalograph Compact (c.1983)** — the strongest interaction story found this run (paper-only output, machine prints its own "lung-age" verdict) but no freely-licensed image. Highest-value image-resolution target for a future run.
- **IBM 5880 / HP 4700A / Marquette MAC-1** interpretive ECG carts — strong "machine prints its own verdict" family, all image-blocked.
- Consider whether the museum's calculator/handheld category is now near saturation after these 2 additions (TI-59, HP-75D, Casio FX-7000G, plus organizers/translators).

## Promotion gotchas reconfirmed
- `promote-potentials.ts` still not run (known bugs: no image copy, no data.ts update, no ToC update). All promotion manual.
- Commons file host returns HTTP 403/HTML to non-browser UA; download with a browser UA or Special:FilePath, then `file`-verify. Rate-limiting on parallel bursts — space requests with delays.
