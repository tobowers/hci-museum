# Run trace: 2026-08-23 research-review-add (late session)

Goal: add ~3 weird HCI interface artifacts 1976-1992.

## Follow-up on 2026-08-23 morning run
The morning run (09-51) promoted Heidenhain TNC 110 + ROLM CBX (both from ready
info.json in potential/). This is a fresh second session on the same day.

## Plan
1. Scan potential/*/info.json for ready unpromoted candidates (fastest win).
2. Launch 3 research subagents on fresh angles.
3. Review, build info.json, promote, verify.

## Completed

### Step 1 — Ready-candidate scan
Scanned potential/*/info.json and info.json.archived. All remaining info.json
files belong to already-promoted (archived) or previously-deferred candidates
(captain-ntx5000, fehmi, the-hands, toshiba-lc836mn, view-master). No new ready
unpromoted candidates. Well of ready info.json is empty.

### Step 2 — Research subagents (3 launched, 3 returned)
1. **Chording text-entry** → **Velotype** (1982, NL). Two-hand syllable-chording
   keyboard, "butterfly" layout, ~200 wpm, commercially sold. CC BY-SA 3.0 images
   incl. dated 1985 production photo (confirmed via Commons API).
2. **Refreshable tactile/braille displays** → **DigiCassette (1976, Paris)** but
   ZERO freely-licensed images anywhere. Image-blocked, not promotable. Fallback
   Braillex also image-blocked. Angle returned nothing promotable.
3. **Japanese/East-Asian word processors** → **Fujitsu OASYS 100 Thumb-Shift
   Keyboard (1980)**. Thumb-operated dual-shift keys, 3 chars per key, word-by-word
   kana-kanji conversion. CC BY-SA 3.0 images (physical keyboard photo + layout
   diagram) confirmed via Commons API. Also surfaced Toshiba JW-10 (1978) but its
   interaction (kana-kanji word conversion) is the same core as OASYS — redundant
   for a single run.

### Decision
Promoted 2 strong candidates (Velotype + OASYS Thumb-Shift). Did NOT add a third
to pad the collection — the only viable third (JW-10) is a near-duplicate of the
OASYS interaction in the same angle, and the tactile/braille angle was
image-blocked. Per museum guidance: fewer but higher-quality additions.

### Step 3 — Promotion (manual, promote-potentials.ts NOT run due to known bugs)
- Understood Exhibit type (id/slug/wikiTitle/year/sortYear/title/subtitle/blurb/tags/image).
- Downloaded 4 images (2 per candidate) to assets/wiki/ and verified with `file`.
- Added 2 ToC entries (212, 213) to docs/hci-wiki.md.
- Appended 2 wiki sections to docs/hci-wiki.md (Velotype Synthetic Keyboard 1982,
  Fujitsu OASYS 100 Thumb-Shift Keyboard 1980).
- Updated intro count ("two hundred and eleven" → "two hundred and thirteen").
- Added 2 entries to src/data.ts before closing `];`.
- Archived info.json → info.json.archived for both new candidates.

### Step 4 — Verification
- `bun run typecheck` → PASS
- `bun run build` → PASS (213 exhibits, 278 pages)
- Rendered pages confirmed: public/exhibits/velotype, public/exhibits/oasys-thumbshift-keyboard.

### Step 5 — Field Note
- Wrote `the-keyboard-that-types-words-you-only-think.md` for the Velotype
  (the machine-does-the-spelling angle). Build renders it.