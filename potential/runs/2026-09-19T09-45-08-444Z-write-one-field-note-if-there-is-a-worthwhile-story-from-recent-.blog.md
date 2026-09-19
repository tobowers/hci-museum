# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


# Progress notes

## 2026-09-19 — Field Note decision

Reviewed the collection snapshot, recent additions, and cross-checked every memory-flagged "unwritten" candidate against the actual docs/blog/ directory. Several that memory still lists as unwritten have in fact been written since (Invicta Electronic Master Mind → `the-machine-that-held-a-secret-number`; Caere OCR Wand → `the-light-that-taught-your-hand` (09-17); Nissan Voice Warning → `the-car-that-spoke-from-a-record`; Meade LX200 → `the-telescope-that-already-knew-the-sky`).

Genuinely still-unwritten candidates: SynthAxe (1985), Amana Touchmatic (1975), Ascom QuickFare (1989), Ferranti-Packard Flip-Disc (1976), Fairchild Channel F (1976), Chalk Board PowerPad (1985).

Applied the "zero near-neighbor note / inversion of an already-noted paradigm" discipline:
- QuickFare, flip-dot, Channel F, PowerPad all sit adjacent to existing note families (physical-token, output-mechanism, grip-grammar, dance-pad) → would collide.
- Amana Touchmatic is a milestone-appliance with a near-neighbor (Pfaff 1471 `the-sewing-machine-that-counted`) and is a "first to do X" framing the memory cautions against.
- **SynthAxe** is the museum's only continuous-measurement virtuoso instrument, the direct inverse of the already-noted Casio DG-20 (`the-guitar-that-couldnt-be-wrong`). Memory 09-15 explicitly flagged it as "the virtuoso scanning counterpart to the DG-20's toy-switching" and a "strong future candidate." Interaction channel (hardware that must MEASURE rather than GUARANTEE) has zero near-neighbor note. Cross-links both ways with the DG-20 note.

Decision: write the SynthAxe Field Note. Slug: `the-guitar-that-measured-everything`.

## 2026-09-19 — Post written and verified

Wrote `docs/blog/the-guitar-that-measured-everything.md` (826 words) on the SynthAxe (1985), anchored on the measurement-vs-guarantee inversion vs. the already-noted Casio DG-20 (`the-guitar-that-couldnt-be-wrong`). The note's single claim: the SynthAxe is the museum's only continuous-measurement virtuoso instrument — it decouples pitch from trigger via electrical fret scanning (the same switch-matrix insight as the DG-20) but then uses that freed budget to measure bending, hammer-ons, velocity, and aftertouch, in order to preserve a guitarist's expressiveness rather than eliminate it. Cross-links both ways with the DG-20 note and the SynthAxe exhibit. The Drumitar coda (Future Man's MIDI drum rebuild) reinforces the "genuinely good input device" thesis.

- Links use relative paths to `../exhibits/synthaxe/` and `../exhibits/casio-dg-20/` — both slugs verified in src/data.ts.
- No image included (SynthAxe visuals are in the wiki exhibit; kept the note image-free per convention for many notes).
- Verified: `bun run typecheck` PASS; `bun run build` PASS (266 exhibits + blog + about, 363 pages); page `/blog/the-guitar-that-measured-everything/` generated with correct title.

No collection data modified (docs/hci-wiki.md and src/data.ts untouched, as required). No memory update needed beyond this trace (the SynthAxe was the strongest unwritten candidate; writing it does not change collection guidance).
