# Run summary: 2026-08-23T12-27-44-196Z

## What changed
Added **2 artifacts** to the museum collection (a second run on 2026-08-23; the
morning run added Heidenhain TNC 110 + ROLM CBX). The candidate well is dry for
a third distinct artifact — per museum guidance, 2 strong additions beat padding.

## Artifacts added to the collection
1. **Velotype Synthetic Keyboard (1982)** — Dutch two-hand chorded keyboard that
   types whole *syllables* per stroke. Machine's orthographic rules expand each
   multi-key chord to spelled text ("butterfly" layout, ~200 wpm, commercially
   sold). Museum's only full-syllable chording keyboard.
2. **Fujitsu OASYS 100 Thumb-Shift Keyboard (1980)** — Japanese word-processor
   keyboard that moved shift keys to the thumbs, giving each key **three**
   characters and enabling fast word-by-word kana-kanji conversion on ~30
   home-row keys. An anatomy-driven input relocation; became JIS X 4064.

Both had verified CC BY-SA 3.0 images from Wikimedia Commons (confirmed via the
Commons API, downloads verified with `file`).

## Files written
- `potential/velotype/info.json` (archived → `info.json.archived` after promotion)
- `potential/oasys-thumbshift-keyboard/info.json` (archived after promotion)
- `docs/hci-wiki.md` — 2 ToC entries, 2 wiki sections, taxonomy intro count
  updated to "two hundred and thirteen"
- `src/data.ts` — 2 Exhibit entries
- `assets/wiki/velotype1985.jpg`, `assets/wiki/velotypestop.gif`,
  `assets/wiki/thumbshift.jpg`, `assets/wiki/oasys100.png`
- `docs/blog/the-keyboard-that-types-words-you-only-think.md` (Field Note, Velotype)
- `docs/beepy-memory.md` — durable lessons + notes

## Verification
- `bun run typecheck` → PASS
- `bun run build` → PASS (213 exhibits, 278 pages)
- Rendered pages confirmed: `public/exhibits/velotype`,
  `public/exhibits/oasys-thumbshift-keyboard`,
  `public/blog/the-keyboard-that-types-words-you-only-think`

## Process notes
- Scanned `potential/*/info.json` + archived files: no ready unpromoted candidates
  existed — all remaining belonged to promoted/deferred exhibits.
- Launched 3 research subagents. Two returned strong, image-verified candidates
  (Velotype, OASYS Thumb-Shift). The tactile/braille angle (DigiCassette, Braillex)
  returned historically strong but image-blocked candidates — not promotable.
- Toshiba JW-10 (1978) from the Japanese angle was considered but rejected as a
  third — its kana-kanji conversion interaction is the same core as the OASYS
  entry, so adding it would pad the collection.
- Promotion done manually (promote-potentials.ts NOT run — documented bugs: no
  image copy, no data.ts update, no ToC update). Image files copied to
  assets/wiki/, wiki + data.ts edited by hand.
- info.json files archived after promotion to prevent auto-promotion in future runs.

## Still needs review
- Toshiba JW-10 (1978) — first Japanese word processor with CC images. Deferred
  only for interaction redundancy with the new OASYS entry; reconsider if the
  "first-ever" historical framing matters more in a later run.
- Refreshable braille/tactile displays of the era remain image-blocked; revisit
  only if a museum-unit photo or patent scan surfaces.
- The text-entry family (~8 exhibits) is saturating; future keyboard additions
  should require a genuinely new interaction subclass.