# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Manager start — 2026-09-16 (second run today)

- Collection start state: 262 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Read docs/beepy-memory.md (durable guidance + run lessons through 2026-09-16 zero-add run).
- Prior zero-add run (2026-09-16T01-00) exhausted game-controller / output-mechanism / embodied-home angles; flagged IMN "The Game Handler" (gyro controller) as image-blocked + documented at potential/the-game-handler/info.json.archived.
- Launching 3 research subagents on FRESH angles (not re-trying yesterday's exhausted angles). Chosen for likely Commons image richness:
  - SA1: electronic sensory-board strategy games (non-chess) — e.g., electronic Othello/Reversi boards with piece-sensing as input.
  - SA2: wrist-worn / pocket computers with full keyboards or keyboard-input computing (Seiko UC-2000 watch keyboard, Casio DataBank, etc.) — distinct from Seiko RC-1000.
  - SA3: early electronic music/workstation devices where an unusual physical interaction IS the instrument — targeting non-saturated subclasses (analog sequencers, drum machines with grid programming beyond TB-303/TR-808, light/conductive instruments).

## Subagent results (3 parallel, shared Octen)

### SA1 — non-chess sensory-board games
- **Electronic Stratego (1982, Milton Bradley)** — piece-as-input: each piece has a unique binary pattern of bumps molded into its base; board reads bump contacts to identify piece + position in one action; enforces hidden state (only reveals ranks on combat), LED+sound feedback. Strong interaction (hidden-information referee, no coordinate keypad). IMAGE availability uncertain (mostly auction/all-rights-reserved). Candidate.
- Dark Tower (1981, MB) — membrane keypad central tower, NOT sensory board → reject for this brief.
- Electronic Battleship (1977) — pegs+LEDs, no piece sensing → reject.
- No electronic Othello/Reversi sensory board found.

### SA2 — wrist/pocket computers w/ keyboard
- **Casio VDB-1000 touchscreen watch (1991, Casio)** — whole watch face is a capacitive/graphic touchscreen you finger-type on for text/menu; CC BY-SA 4.0 image verified on Commons (File:VDB-1000.jpg). NOT in museum, NOT in memory deferrals. STRONG.
- HP-01 (1977) — 28 recessed keys pressed with a stylus stored in the watch band; multiple free images. BUT memory (2026-07-24) deferred it as incremental wrist calculator. Lean against re-promote.
- Casio TC500 (1983) — capacitive touch calculator watch; already deferred in memory (2026-07-25). Skip.
- Seiko UC-2000 (1984) — typing is on a dock QWERTY, not the watch; zero free images. Skip.

### SA3 — music devices w/ unusual physical interaction
- **Linn LM-1 Drum Computer (1980, Linn Electronics / Roger Linn)** — 12 hard-plastic pads are BOTH trigger pads to play AND the tap-to-program step grid (channel+step select); introduced quantization+swing; $4,995-5,500, only 525 built; PD + CC BY-SA 3.0 images on Commons (File:Linn LM-1 Drum Computer.jpg PD, File:Linn LM-1 Drum Computer large.jpg CC BY-SA 3.0). Distinct from TR-808 (one shared pad row vs 16 parallel button rows); ancestor of MPC pad paradigm. STRONG.
- Serge TKB (~1976) — touch-plate grid sequencer, pressure/position sensing; interaction novel but Commons has NO TKB close-up → image-weak.
- Roland System-100 Model 104 — knob-per-step sequencer; CC BY 2.0; conceptually similar to other knob sequencers → moderate.
- EMS Synthi 100 (1971) — pre-window + related to excluded Synthi AKS → reject.

## Manager decision
Promote the two strongest image-verified + distinct + in-window + not-in-museum candidates:
1. **Linn LM-1** (1980)
2. **Casio VDB-1000** (1991)
Third: investigate Electronic Stratego (1982) image availability via Commons API + direct fetch; promote if a usable CC/PD image exists, else accept 2 additions this run.

## Manager image verification (Commons API, free channel)
- Linn LM-1: File:Linn_LM-1_Drum_Computer.jpg = PD (verified), File:Linn_LM-1_Drum_Computer_large.jpg = CC BY-SA 3.0 (Forat/GFDL). Both valid JPEGs. NOT in collection (grep confirmed).
- Casio VDB-1000: File:VDB-1000.jpg = CC BY-SA 4.0 (Stollenbaeck). Verified JPEG via Special:FilePath. NOT in collection.
- Electronic Stratego: Commons search returns ZERO usable images (only unrelated logistics PDFs) → image-blocked. Documented as deferred candidate (potential/electronic-stratego/info.json.archived).

## Decision
Promote TWO image-verified, distinct, in-window, not-in-museum artifacts:
1. Linn LM-1 (1980)
2. Casio VDB-1000 (1991)
Electronic Stratego (1982) deferred for image resolution. This is an honest 2-addition run at 262 exhibits.
Images downloaded to potential/*/images and resized+copied to assets/wiki/ (linn-lm-1.jpg, linn-lm-1-large.jpg, casio-vdb-1000.jpg).

## Promotion & verification (manual, promote-potentials.ts NOT run per known bugs)
- Added 2 exhibits to src/data.ts (linn-lm-1, casio-vdb-1000) with id/slug/wikiTitle/year/sortYear/title/subtitle/blurb/tags/image, using img() helper → assets/wiki paths.
- Added 2 ToC entries (263, 264) + 2 wiki sections to docs/hci-wiki.md; updated intro count to "two hundred and sixty-four".
- Images: resized+copied to assets/wiki/ (linn-lm-1.jpg, linn-lm-1-large.jpg, casio-vdb-1000.jpg), all verified valid JPEGs.
- Archived both info.json → info.json.archived (prevent auto-promotion).
- VERIFICATION: `bun run typecheck` PASS; `bun run build` PASS (264 exhibits, 358 pages). Built pages public/exhibits/linn-lm-1 and casio-vdb-1000 exist with correct /assets/wiki image refs.
