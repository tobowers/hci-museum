# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


# Field Note Run — 2026-10-02

## Decision
Wrote ONE Field Note: `docs/blog/the-pad-that-made-the-cursor-jump.md` on the **Xerox Cat (1980)**.

## Selection rationale
Reviewed recent editorial activity and unwritten candidates among recent additions:
- Yeoman Plotter — already noted (`the-chart-that-steered-your-hand`)
- Mufax, Buchla Touché, Dark Tower, Intellivision, HP-75D, Collins EFIS, Clapper, Luma, Visicorder, DG-20, Mephisto, LM-1, VDB-1000 — all already noted
- Solari Split-Flap Display — unwritten but sits adjacent to the output-mechanism family (flip-dot `the-light-that-developed-in-the-dark`, Talaria `the-picture-sculpted-from-oil`, plotter `the-printer-that-put-on-a-show`)
- Scanset XL — strong but adjacent to the saturated telephony/terminal family (Minitel, Quotron, Quik-Link, Displayphone)
- **Xerox Cat (1980)** — museum's ONLY capacitive-touch pointing grammar; absolute-positioning touchpad (place finger, cursor jumps to screen position) with pressure-modulated speed; generally regarded as first touchpad on a computer (1980, >10 yr before laptop trackpads). NO near-neighbor note exists. grep confirmed "touchpad" only appears in idle mentions (Turbo Touch D-pad, Coleco speed roller, SGI dials) — none cover an absolute capacitive cursor pointer.

Applied established discipline: prefer the candidate with the rarest sensing channel / no near-neighbor note, even over candidates with richer brand stories. The Cat's "pointer that doesn't move but jumps" is a genuine inversion family (alongside TrackPoint force-immobile, Fly Mouse free-space) with no collision.

## Files
- Wrote `docs/blog/the-pad-that-made-the-cursor-jump.md` (~600 words, Beepy voice, links to ../exhibits/xerocat... noted). Local image exists (`assets/wiki/xerox-860-keyboard-cat-pad.jpg`) but post written without inline image to keep it tight; exhibit page already carries the image.
- No collection data edited (no src/data.ts, no docs/hci-wiki.md changes).

## Verification
- (typecheck + build logged below)

## Verification results (final)
- `bun run typecheck` — PASS (exit 0)
- `bun run build` — PASS (286 exhibits, 395 pages)
- Built page `public/blog/the-pad-that-made-the-cursor-jump/index.html` confirmed; relative link to `../exhibits/xerox-cat/` renders correctly (`../../exhibits/xerox-cat/`).
- Post is 748 words (within 500-900 target).
- No collection data modified.
