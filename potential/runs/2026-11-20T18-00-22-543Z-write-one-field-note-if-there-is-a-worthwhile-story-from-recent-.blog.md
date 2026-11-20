# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Decision

Grepped all three exhibits from the 2026-11-20 batch (`wrigley-hand-turned-scoreboard`, `addressograph-cassette-system`, `dasa-mark-18-reader-printer`) — all three un-noted, all three exhibiting. Picked **Wrigley** for one note; did not write a second.

Why Wrigley over Addressograph: Addressograph's "paper/steel *is* the state machine" angle is close to the existing `the-board-that-was-the-airspace` (data living in physical arrangement) and `the-register-with-the-paper-drum` (paper as the substrate that holds the record). Wrigley's angle is different in kind — it's not about where state is stored but **who is the output stage**. No existing note makes a human body the display actuator.

DASA dropped: weakest of the three; "ancestor of the document viewer" is a thin claim and the retrieval-by-mechanism framing is already partly covered by `the-board-that-was-the-airspace` / `the-tower-that-kept-its-secret-in-plastic`.

## What was written

`docs/blog/the-scoreboard-with-a-person-in-it.md`, 888 words, date 2026-11-20, one image (`wrigley-hand-turned-scoreboard-operation.jpg`, CC0), links to `wrigley-hand-turned-scoreboard`, `solari-split-flap-display`, `ferranti-packard-flipdot`, `sony-jumbotron-jts1`.

Angle (three strands):
1. **The refresh is an arm.** Solari/flip-disc change state when a pulse convinces the mechanism; Wrigley has no mechanism in the display layer — steel numerals in slots, swapped by a person who walks the panel. The data path is modern right up to the monitor upstairs, then terminates in a body.
2. **The frozen schema.** The board still carries the 1969–76 twelve-game layout, so with 15 teams a day, some games literally cannot be posted; landmark status forbids widening it. A data-layout decision from the early 1970s is permanently shipped. This is the one claim I'm confident no other note in the collection makes.
3. **"Human-in-the-loop" made literal.** The person is the output stage, not its supervisor — the transferable line: a display's design is a choice about which side of the screen you put the body on.

Deliberately *not* used: the "counterpoint to the computed scoreboard" line as the thesis (it's the wiki's own framing and is weaker than the frozen-schema strand); no epilogue-style moralising section, cut one `## Why this earns a case` heading that restated the wiki's "Where it sits in the museum".

## Verification

- `bun run typecheck` clean; `bun run build` clean: "326 exhibits + blog + about, 470 pages".
- All four exhibit slugs confirmed present in `src/data.ts` (`solari-split-flap-display`, `ferranti-packard-flipdot`, `sony-jumbotron-jts1` were the ones worth checking — the older note `the-sign-that-flipped-its-message` links all three correctly).
- Image referenced as `../assets/wiki/...` from source; built HTML resolves to `assets/wiki/wrigley-hand-turned-scoreboard-operation.jpg`, present.
- Word count checked per draft (started 991 → 907 → 888).

## Durable lesson

New display-family axis for future notes: **what moves when the display updates** — a phosphor (electronic), a motor-driven latch (Solari, flip-disc), or a person. Wrigley is the only museum artifact in the third category at display scale, and that question frames a note better than the exhibit's technology genealogy.
