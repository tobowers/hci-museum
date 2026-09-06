# Run summary: 2026-09-06T12-32-30-067Z — research/review/add ~3 weird HCI artifacts

## What changed
Two interaction-distinct, image-verified artifacts were added to the museum collection (1976–1992 era). A third was not promoted because all remaining candidates were either image-blocked or weak (cancelled prototypes with thin interaction).

## Artifacts added to the collection
1. **Linotype CRTronic (1979)** — id/slug `linotype-crtronic`. Mergenthaler Linotype all-in-one digital phototypesetter. Novel HCI: interactive CRT composition on a tiltable 9-inch CRT, movable keyboard with 14 programmable memory keys (3 levels), foreground/background hyphenation/justification, and an **analog line-length-remainder light bar** (remaining column space shown as a gauge, not a number). Images: 3 CC BY 2.0 Commons photos (CRTronic 360).
2. **Space-Cadet Keyboard (1978)** — id/slug `space-cadet-keyboard`. John L. Kulp's MIT Lisp-machine keyboard (CADR / Symbolics LM-2). Seven modifiers (bucky bits Control/Meta/Super/Hyper + Shift/Top/Front-Greek) in stacked rows for one-handed chording → up to 4,000 distinct inputs; three-symbol keys; shaped Emacs' M- prefix. Images: 4 CC BY-SA 3.0 Commons photos.

Plus a Field Note: `docs/blog/the-keyboard-that-gave-you-four-thousand-keys.md` (space-cadet keyboard).

## Files written
- `potential/linotype-crtronic/info.json` (+ `info.json.archived`)
- `potential/space-cadet-keyboard/info.json` (+ `info.json.archived`)
- `potential/runs/2026-09-06T12-32-30-067Z-*.md` (trace, this summary)
- `docs/blog/the-keyboard-that-gave-you-four-thousand-keys.md` (Field Note)
- Edited: `src/data.ts` (2 exhibits), `docs/hci-wiki.md` (2 wiki sections + 2 ToC entries + intro count), `docs/beepy-memory.md` (durable lessons)
- Images copied to `assets/wiki/`: crtronic-360.jpg, crtronic-360-pt2.jpg, crtronic-360-pt3.jpg, space-cadet.jpg, space-cadet-modifiers.jpg, space-cadet-closeup.jpg, symbolics-keyboard.jpg

## Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (247 exhibits, 328 pages including blog)
- data.ts exhibit count (grep -cE '^\s{4}id: "'): 247
- Wiki ToC: 247 entries (added 246 Linotype CRTronic, 247 Space-Cadet Keyboard)

## Candidates reviewed but not promoted
- Home weather stations / environmental sensor consoles (Heathkit ID-4001/ID-5001, RainWise light-pen, Vaisala C64) — all image-blocked on Commons (zero freely-licensed device photos).
- Atari Cosmos (1981) — cancelled prototype, ~6 units, weak interaction (gameplay criticized), no direct Commons device photos.
- Compugraphic EditWriter (1977) — radical 100+-key proprietary keyboard but no Commons images.
- Merlin (1978), laser/game-controller near-duplicates — already in collection.

## What still needs review
- A third strong candidate for the collection was not found this run; the well remains thin and angle-dependent. Future runs could target: image-resolution for long-deferred candidates (Braille 'n Speak, Tomy Verbot, LEGO TC Logo, SOUND=SPACE, Unity Home Manager, Johns Hopkins Serial Code Keyboard), or new image-rich categories (professional trade HCI like the CRTronic thread).
- Linotype CRTronic remains a strong unwritten Field Note candidate (analog light-bar in a text editor).
