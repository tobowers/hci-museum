# Run Summary — 2026-09-09 research/review/add ~3 weird HCI artifacts

## What changed
One artifact was added to the museum collection this run: the **Coleco Super Action Controller (1983)**.

The run launched 3 research subagents in parallel plus direct manager-side discovery. The well at 252 exhibits is genuinely thin: subagents returned mostly already-in-museum duplicates, image-blocked candidates, or artifacts redundant with existing exhibits. Only the Coleco Super Action Controller met all promotion criteria (distinct interaction, verified freely-licensed image, in window, not in collection).

## Artifact added to the collection

### Coleco Super Action Controller (1983)
- **Interaction:** A pair of oversized ColecoVision controllers stacking four input grammars in one grip — ball-top joystick, four finger-triggered action buttons, 12-button numeric keypad, and a thumb-driven **analog "speed roller"** (a continuously-rotating roller for proportional speed input). The museum's only continuously-rotating analog speed-input controller.
- **Why it qualifies:** Distinct interaction model (analog scroll/speed surface amid a sea of digital switches, a decade before the mainstream scroll wheel). Verified CC BY-SA 3.0 Commons image.
- **Bundled/required by:** Super Action Baseball (bundled), Super Action Football, Rocky, Super Action Boxing, Front Line.

## Candidates considered and rejected
- **Sega Menacer (1992):** Genuinely distinct wireless-IR + scan-line-counting sensing with verified CC images, but fundamentally a light gun; museum already has LaserScope + Vectrex Light Pen point/aim devices, and memory guidance warns a third light-gun-ish entry dilutes the category. Not promoted.
- **Roll & Rocker (1989):** Embodied teeterboard, but no freely-licensed images (extremely obscure). Rejected.
- **VPL DataGlove / Nintendo Power Glove:** Already in museum (subagent missed exclusion list).
- **Cincinnati Milacron T³ pendant:** No Commons image, and redundant with the Unimation PUMA teach pendant already in museum.
- **Mazatrol T-1:** No Commons image.
- **Bell TSPS operator keyshelf:** Confirmed PD image but telecom infrastructure, era-boundary (1969 core), weak computer-HCI fit.
- **Soundbeam, Speak & Spell:** Already in museum (subagent missed exclusion list).

## Files written
- `potential/super-action-controller/info.json` — candidate research file (archived to `info.json.archived` after manual promotion).
- `potential/super-action-controller/images/coleco-super-action-controller-1.jpg` — source image.
- `assets/wiki/coleco-super-action-controller-1.jpg` — local hero image (downloaded from Commons, resized to 1200px).
- `src/data.ts` — added `coleco-super-action-controller` exhibit entry.
- `docs/hci-wiki.md` — added ToC entry #253 + wiki section; intro count updated 252→253.
- `docs/beepy-memory.md` — added 2026-09-09 addition + promotion gotchas + Field Note candidate.
- Trace: `potential/runs/2026-09-09T01-30-58-537Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`

## Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (253 exhibits, 337 pages)
- Exhibit count via `grep -cE '^\s{4}id: "' src/data.ts` = 253; wiki ToC = 253 entries.

## Tools used
- 3 hci-research-subagents (Octen budget shared: 6/7 by subagents + 1 manager call = 7/7 exhausted).
- 1 Exa fallback call (1/2; returned only the museum's own site, not useful).
- Direct Wikimedia Commons API + curl with browser UA for image verification/download.
- Pillow for image resizing.

## Still needs review
- The run yielded fewer than 3 additions. The well at 253 exhibits is confirmed thin for automated discovery; image resolution for deferred candidates (Serial Code Keyboard, Touch-a-matic, Braille 'n Speak, HP 8566A) remains the primary expansion path.
- The Coleco Super Action Controller is unwritten as a Field Note; a future blog run could cover the analog speed roller (`the-controller-with-a-thumb-wheel`).
