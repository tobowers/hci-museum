# Beepy Run Summary — Research, review, add ~3 weird HCI artifacts (1976–1992)

Date: 2026-09-26
Collection at start: 272 exhibits → 275 exhibits after this run.

## What changed
Promoted **three** artifacts into the collection (manual promotion; `promote-potentials.ts` has known data.ts-regex, image-copy, and ToC bugs per memory and was not run):

1. **Buchla Touché** (c.1978) — Don Buchla's hybrid analog/digital polyphonic synthesizer programmed in the FOIL language through an external monitor, with a 61-key piano keyboard over a 3-way touch plate. *Ready candidate from prior run; image already staged.*
2. **Milton Bradley Dark Tower** (1981) — the motorized rotating tower game-master with a hidden-state mechanism revealed through spinning backlit film cels + hidden LED, a TMS-1400 secret-holder. *Ready candidate from prior run; image already staged.*
3. **Solari Split-Flap Display** (1976) — the Teleindicatore public information display whose update is a visible, audible cascade of flipping cards that latches with zero power; the museum's only split-flap / full-glyph bistable mechanical output (distinct from Ferranti-Packard flip-disc dot-matrix). *Fresh find this run, image-verified PD/CC on Commons.*

## Files written
- `potential/buchla-touche/info.json.archived` (prior run's info.json, archived)
- `potential/dark-tower/info.json.archived` (prior run's info.json, archived)
- `potential/solari-split-flap-display/info.json.archived` (new, written then archived after promotion)
- `assets/wiki/solari-split-flap-board.jpg` (1400x384, new download, PD)
- `assets/wiki/solari-split-flap-closeup.jpg` (900x675, new download, CC BY-SA 3.0)
- `assets/wiki/buchla-touche.jpg` (already present, used)
- `assets/wiki/dark-tower-assembled.jpg` (already present, used)
- `docs/hci-wiki.md` (3 sections appended + 3 ToC entries + intro count 272→275)
- `src/data.ts` (3 exhibit entries)
- `potential/runs/2026-09-26T13-05-38-158Z-...md` (trace)

## Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (275 exhibits, 378 pages)
- Exhibit pages `public/exhibits/buchla-touche`, `dark-tower`, `solari-split-flap-display` generated; each references local `assets/wiki/*` images (no remote hotlinks).
- Wiki sections + ToC confirmed in `public/research/hci-wiki.md`.

## Research note
Three research subagents ran (consumer-input, output/display, sensing-transducer angles). Most returns were duplicates already in the museum (Amiga Joyboard, Atari Mindlink, Soundbeam, Versatron Footmouse, Polhemus 3Space Isotrak) — subagents again failed exclusion lists. Only the Solari split-flap display was a genuinely new, image-verified candidate. The other two promotions came from ready `potential/` info.json files left by the prior run — reaffirming the "scan potential/ for ready, unpromoted candidates first" discipline.

## Still needs review
- **Field Notes (unwritten candidates):** Buchla Touché (`the-keyboard-the-builder-distrusted` — program-through-a-monitor + piano-over-touch-plate), Dark Tower (`the-tower-that-hid-a-state`), Solari split-flap (`the-sign-that-flipped-its-message`). Buchla Touché is the strongest future note candidate (no near-neighbor note).
- Long-pending unwritten candidates from memory remain: Amana Touchmatic, Ascom QuickFare, Caere OCR Wand, Fairchild Channel F, Honeywell Visicorder, Meade LX200, Nissan Voice Warning.
- Image-blocked candidates to resolve when an image path appears: The Game Handler (gyro), HP 8566A, Johns Hopkins Serial Code Keyboard, Touch-a-matic, Braille 'n Speak, Tomy Verbot, LEGO TC Logo.
