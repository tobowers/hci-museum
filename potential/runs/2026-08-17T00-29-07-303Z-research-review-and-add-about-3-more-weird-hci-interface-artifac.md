# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run state at start (2026-08-17 ~00:30Z)

- Collection: 197 exhibits in src/data.ts; wiki ToC 197-ish entries; wiki intro says "one hundred and ninety-seven projects".
- Three fully-researched candidates already sitting in potential/ from a prior (aborted?) run, all with local images:
  - potential/btx-terminal (Bildschirmtext BTX, 1983, West German pay-per-page videotex, chip-card reader meter)
  - potential/captain-ntx5000 (CAPTAIN System / NEC NTX-5000, 1984, Japanese fax-raster videotex, kana multi-tap keypad)
  - potential/quotron-ii (Quotron II, 1986, Wall Street custom-keyboard market-data terminal)
  All 3 are terminal-family artifacts; museum already has Minitel (1982) as videotex. Decision pending on how many of these to promote (category saturation risk) vs fresh diverse finds.
- Octen budget: 7 total. Already used 1 (btx-terminal validation search, requests=1/7). Plan: 2+2+1 for 3 research subagents, 1 reserved for my own validation.
- No Exa unless Octen fails to name plausible candidates or for final validation (max 2 Exa, at most 1 per subagent).

## Stale info.json audit

- Grepped wiki + data.ts for btx/captain/quotron: NONE of the three are in the collection. Safe to promote (no duplicates).
- They were created today at 00:28, right before this run — treat as prior-run survivors. Archive-after-promotion discipline still applies.

## Research subagents (3 launched in parallel)

- Subagent A (electronic toys/learning aids): returned Barcode Battler (IN COLLECTION — caught), Captain Power XT-7 (deferred family per memory 07-13), Omega Virus (1992, image-poor, near-neighbor to D&D Labyrinth), LJN Video Art (1987, PD patent drawings only). None selected.
- Subagent B (unusual game controllers): returned Atari Mindlink (IN COLLECTION), Covox Voice Master (IN COLLECTION), Atari Voice Controller (unreleased prototype, image-poor, voice input saturated), TURBO TOUCH 360 (1992, Triax, capacitive touch-pad D-pad replacement) — SELECTED.
- Subagent C (dedicated appliances): returned Optacon II (IN COLLECTION — subagent failed manual verification), Touch-a-matic 16 (1976, image-poor, incremental), Kurzweil (IN COLLECTION), Speak & Spell (IN COLLECTION). None selected.

## Octen budget note

- Budget hit 7/7 before my final validation query — subagents consumed more than planned. Turbo Touch 360 validated instead via Sega Retro API + full page fetch (primary print citations: Electronic Games #1 Oct 1992 p95, GamePro #39 Oct 1992 p16 → US release 1992, $34.95) + Wikipedia + Google Patents (US5367199, priority 1992-05-01). No Exa used.

## FINAL SELECTION (3 artifacts)

1. BTX Terminal (1983) — from stale set, promote. Pay-per-page videotex, chip-card reader as meter, CCC 1984 hack.
2. Quotron II (1986) — from stale set, promote. Custom field-key market-data keyboard, green glass, Bloomberg ancestor.
3. Turbo Touch 360 (1992) — fresh find, promote. Eight capacitive touch sensors replace D-pad; zero-force thumb sliding; "numb thumb" cure marketing; IGN 9th-worst controller. Images: Sega Retro CC-BY 4.0 (2 photos) + PD patent drawings.

## NOT promoted

- CAPTAIN / NEC NTX-5000 (1984): fully researched, fax-raster videotex, kana keypad. ARCHIVING (defer) — batch already has 2 terminal-family artifacts; 3 videotex/terminal additions would saturate the category. Info.json → info.json.archived. Revisit for a future "national pre-Internet online terminals" themed run.

## Promotion (all manual — promote-potentials.ts NOT run, known broken)

- Copied 7 local images to assets/wiki/ (btx ×3, quotron ×4) from potential dirs; downloaded 3 Sega Retro CC-BY-4.0 images (ttx360-md.jpg, ttx360-md-alt.jpg, ttx360-box-front.jpg) using BeepyBot User-Agent. All verified with `file`.
- Sega Retro image note: direct image URLs at segaretro.org/images/... return 200 with BeepyBot UA (contrary to some older memory notes about 403 — the page HTML 403s, images may still work; use the Sega Retro API to resolve exact image paths).
- Patent drawing tiles for US5367199 are only 82×120 px (tiles, not full pages) — NOT usable. Skipped patent images; Sega Retro photos suffice.
- wiki: added 3 sections (Bildschirmtext (BTX) Terminal 1983, Quotron II 1986, Turbo Touch 360 1992), 3 ToC entries (198-200), intro count "one hundred and ninety-seven" → "two hundred".
- data.ts: added 3 Exhibit entries (btx-terminal, quotron-ii, turbo-touch-360).
- Archived info.json → info.json.archived for all 4 candidates (btx, quotron, captain=deferred, turbo-touch-360) to prevent future auto-promotion.
- Build count: 200 exhibits. Wiki ToC: 200 entries. typecheck ✓, build ✓ (200 exhibits, 257 pages). Public pages generated and verified (deep-dive content + local images present).
- CAPTAIN / NTX-5000 archived as deferred with this note: fully researched, fax-raster interaction model is unique, but 3 terminals in one batch would saturate the videotex category. Promote in a future themed run.

## Subagent quality note

- Two of three subagents returned already-in-museum candidates (Barcode Battler, Atari Mindlink, Covox, Optacon II, Kurzweil, Speak & Spell) despite explicit excluded lists. Manual verification against src/data.ts remains mandatory. However, one subagent correctly self-flagged RDI Halcyon as in-collection. Turbo Touch 360 find was the standout.
