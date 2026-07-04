# Curator Scout Summary — 2026-07-04

## What changed

The **SynthAxe (1985)** was added to the HCI Museum collection.

## Artifacts added to the collection

### SynthAxe (1985)
- **Slug:** `synthaxe`
- **What it is:** A fretted MIDI guitar controller with two independent sets of strings at an angle: one for pitch (electrical fret scanning, zero latency) and one for triggering (Hall-effect velocity sensing). Funded by Virgin Group, priced at £10,000 (~$13K), fewer than 100 units made.
- **Interaction model:** Decoupled pitch selection from note triggering — the fretboard works like a keyboard scanning matrix (press string to fret = close a circuit), so pitch is known instantly before any note fires. Six independent MIDI channels with per-string pitch bend and aftertouch.
- **Why it matters:** Solved the latency problem that plagued all 1980s pitch-to-MIDI guitar systems. Used by Allan Holdsworth, Lee Ritenour, and Michael Jackson's touring band. After Virgin pulled out and the company folded, Future Man rebuilt one into the Drumitar for Béla Fleck and the Flecktones — giving the instrument an unexpected second life.
- **Images:** 3 images in `assets/wiki/` (Wikimedia Commons CC, US Patent public domain, innerviews.org performance photo)

## Candidates reviewed but not promoted

- **LJN Roll & Rocker (1989)** — Real NES teeterboard controller, but extremely obscure: no confirmed surviving units, only 1 known product photo in a defunct Houston Press archive. Too poorly documented.
- **RacerMate CompuTrainer (1986)** — First commercial bidirectional computer-bike interface (computer-controlled resistance). Interesting closed-feedback-loop HCI story but more exercise equipment than museum artifact.
- **HandiVoice HC 120 (1978-79)** — First portable synthetic-speech VOCA. Interaction model is keypad→speech, not novel enough to stand alone.
- **Multiple Grok-suggested candidates** — mostly research prototypes (Teletact Glove, Chordic Keyboard, GyroMouse, Finger-Sleeve Scanner, Pressure-Sensitive Floor) with thin documentation and no clear image sources.
- **Olfactory interfaces** — Confirmed dead end for 1976-1992 era. No HCI-intentional scent displays existed before ~1993.

## Files written

| File | Purpose |
|------|---------|
| `potential/synthaxe/info.json` | Curatorial research dossier |
| `potential/synthaxe/images/synthaxe-wikimedia.jpg` | CC-licensed hardware photo |
| `potential/synthaxe/images/synthaxe-hollis-full.jpg` | John Hollis hardware photo |
| `potential/synthaxe/images/synthaxe-patent-front.png` | Patent drawing (public domain) |
| `potential/synthaxe/images/synthaxe-holdsworth.jpg` | Allan Holdsworth live |
| `assets/wiki/synthaxe-wikimedia.jpg` | Promoted collection image |
| `assets/wiki/synthaxe-patent-front.png` | Promoted collection image |
| `assets/wiki/synthaxe-holdsworth.jpg` | Promoted collection image |
| `potential/runs/2026-07-04T04-02-28-984Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` | Run trace |
| `potential/runs/2026-07-04T04-02-28-984Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` | This file |

## Files modified

| File | Change |
|------|--------|
| `docs/hci-wiki.md` | Added SynthAxe wiki section, ToC entry #74, updated count to seventy-four |
| `src/data.ts` | Added SynthAxe exhibit entry |

## Verification results

- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (74 exhibits + blog + about, 87 pages)
- `public/exhibits/synthaxe/index.html` — EXISTS (confirmed in build output)

## Known gaps (unchanged from memory)

- Speech-to-visual biofeedback for therapy (IBM SpeechViewer — no images)
- Body-worn vibrotactile spatial displays (TSAS Vest — images need extraction from DTIC PDFs)

## What still needs review

- The Image Credits appendix table in `docs/hci-wiki.md` was not updated with SynthAxe image credits. Low-priority cleanup for a future run.
- The "Deferred strong candidates" section of `docs/beepy-memory.md` still lists SynthAxe as deferred. Should be updated to note it was promoted on 2026-07-04.
