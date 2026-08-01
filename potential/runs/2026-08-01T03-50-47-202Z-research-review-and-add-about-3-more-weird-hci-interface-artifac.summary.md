# Run Summary — research, review, and add about 3 more weird HCI interface artifacts (1976–1992)

Run timestamp: 2026-08-01T03:50:47Z
Trace: `potential/runs/2026-08-01T03-50-47-202Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`

## What happened

Ran 3 parallel research subagents across fresh, previously unexplored angles:
1. Unusual-mechanism home game controllers (1976–1992)
2. Dedicated information appliances / early e-readers & electronic reference devices (1976–1992)
3. Computer-telephony hybrids: videophones, digital answering machines, phone-computer terminals (1976–1992)

Octen budget respected: 6 of 7 requests used (2 per subagent), 1 reserved and spent validating the Fidelity chess computer sensory board. Exa untouched. Candidates verified against Wikipedia, V&A/CHM collection records, schach-computer.info wiki, Commons API (license checks for every downloaded image), and one Octen validation query.

## Artifacts added to the collection (3)

1. **Sony Data Discman / Electronic Book Player (1990)** — the first purpose-built portable e-reader. QWERTY + Yes/No prompt-driven retrieval over CD-ROM "Electronic Book" discs; 90,000 units in Japan's first 8 months; DD-1EX in the V&A permanent collection. 4 local images.
2. **Fidelity Voice Sensory Chess Challenger (1980)** — the chess computer whose 64 pressure-sensing squares read your move (the board is the input, no coordinates) and which spoke its replies via a speech ROM; from the Chicago company that made the first commercial chess computer (1977). V&A + CHM provenance; MAME carries its ROM set. 2 local images.
3. **AT&T VideoPhone 2500 (1992)** — the first consumer videophone over ordinary POTS lines: fold-up color LCD, camera, privacy shutter, press-to-activate-video ritual; ~11.2 Kbps video at up to 10 fps; $1,500, ~30,000 units, a flop. Direct descendant of Bell Labs' Picturephone. 1 local image.

## Files written

- `potential/data-discman/info.json` + 4 downloaded images in `potential/data-discman/images/`
- `potential/fidelity-voice-chess/info.json` + 2 downloaded images in `potential/fidelity-voice-chess/images/`
- `potential/att-videophone-2500/info.json` + 1 downloaded image in `potential/att-videophone-2500/images/`
- `assets/wiki/data-discman-1..4.jpg`, `assets/wiki/fidelity-voice-chess-1..2.jpg`, `assets/wiki/att-videophone-2500-1.jpg` (7 files, all verified valid JPEGs)
- `docs/hci-wiki.md` — 3 new exhibit sections appended; ToC extended from 140 to 146 entries (3 new + 3 pre-existing orphan sections fixed: Flute Playing Machine, Johns Hopkins Serial Code Keyboard, MIDI Dance Floor)
- `src/data.ts` — 3 new Exhibit entries (data-discman, fidelity-voice-chess, att-videophone-2500)
- `docs/beepy-memory.md` — durable lessons appended (new additions, new deferred candidates, promotion gotchas)

## Verification

- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (146 exhibits + blog + about, 187 pages; no missing-wiki warnings)
- New exhibit pages built and image references confirmed in `public/`
- Wiki consistency: all 6 new ToC entries match their section headings exactly (anchors valid, GitHub-style slugify)

## Deferred / image-blocked (documented in memory)

- **Nintendo Super Scope (1992)** — verified ready-to-promote with PD Commons images, but deferred (third light-gun-ish entry in a crowded category; promote if game-controller section is refreshed).
- Franklin KJ-21 Electronic Bible (1989) and DBS-1 (1991) — strong interaction stories, zero CC images.
- Lexicon LK-3000 (1979) — first pocket translator with plug-in modules, patent-documented, zero Commons images.
- Colonial Data Technologies Call Identifier (1987) and AT&T 1337 (1990) — good stories, no images of the actual boxes.

## What still needs review

- The pre-existing wiki ToC/section gap was quantified (150 sections vs 146 exhibits; 4 orphan research sections incl. Appendix). Not fully reconciled — a future QA run could decide whether orphan sections should become exhibits or be removed.
- Fidelity exhibit uses images of the 1979 Voice model (Deutsches Museum) since no free-licensed photo of the specific 1980 Voice Sensory unit exists; captions are honest about this.
- Field Note blog posts were not drafted this run (optional, did not block promotion).
