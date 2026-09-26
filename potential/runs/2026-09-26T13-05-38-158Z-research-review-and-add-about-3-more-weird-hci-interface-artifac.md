# Beepy Run Trace — Research, review, and add ~3 weird HCI interface artifacts (1976–1992)

Date: 2026-09-26
Goal: Find ~3 promising new HCI hardware/interface artifacts from 1976–1992, review, and promote the strongest.
Collection at start: 272 exhibits.

## Plan
- Launch up to 3 research subagents in parallel, each with one focused angle and ≤2 Octen searches each.
- Verify every returned candidate manually against `src/data.ts` + memory (subagents ignore exclusion lists).
- Note: previous run (2026-09-26 00:59) already built info.json for **Buchla Touché** and **Dark Tower** with staged images — these are ready, unpromoted candidates to promote first.
- Build potential/<slug>/info.json for new candidates.
- Promote via `bun scripts/promote-potentials.ts` or manual edits.
- Verify with `bun run typecheck` + `bun run build`.
- Optionally write one Field Note.
- Update docs/beepy-memory.md with durable lessons.

## Backlog / angles to try
Per memory, the well is angle-dependent. Productive angles not yet exhausted (memory + prior run):
- home electronic devices with a distinctive physical ritual
- computer-linked art/drawing input beyond covered
- early home video game controllers with truly unusual physical principles
- early network terminals with unusual interfaces
- early scanning/OCR hardware with distinctive physical interaction
- haptic/force-feedback devices beyond what's in the collection
- industrial control pendants
- retail/point-of-sale hardware
- electronic musical instruments with unusual physical interfaces

Image-blocked candidates (revisit only if image path resolves): Braille 'n Speak, Tomy Verbot, LEGO TC Logo, SOUND=SPACE, Marble Answering Machine, Technos Acxel, Tickle Talker, Johns Hopkins Serial Code Keyboard, Touch-a-matic, HP 8566A, The Game Handler, Electronic Stratego, QWIP fax, Robertshaw Energy Manager, Allen-Bradley 1770-T2/T3 PLC terminal, Magellan NAV 1000, EyeDentify System 7.5, Colonial Data Call Identifier, AT&T 1337.

## Run log
(append as you go)

## Subagent results (3 angles, 2026-09-26)
- Angle A (consumer input): returned Amiga Joyboard, Atari Mindlink, Soundbeam — ALL three ALREADY IN MUSEUM. Subagent failed exclusion list.
- Angle B (output/display): Solari split-flap display (Teleindicatore) — STRONG, image-verified (PD hero + CC BY-SA closeup), distinct from Ferranti-Packard flip-disc (full-glyph stacked cards vs dot-matrix discs). Also flagged Gyricon (in museum, reject) and Matrix film recorder (weak). SOLARI = promotable.
- Angle C (sensing transducers): returned Versatron Footmouse (in museum) + Polhemus 3Space Isotrak (in museum). Both duplicates. Reject.

## Ready candidates from prior run (2026-09-26 00:59)
- **Buchla Touché** (c.1978) — fully researched info.json, image staged at assets/wiki/buchla-touche.jpg (1200x800). Not in collection. PROMOTE.
- **Milton Bradley Dark Tower** (1981) — fully researched info.json, image staged at assets/wiki/dark-tower-assembled.jpg (1188x1200). Not in collection. PROMOTE.

## Fresh find
- **Solari Split-Flap Display** (1976) — image-verified PD/CC-BY-SA, distinct output mechanism. info.json built. PROMOTE.

## Decision
Promote 3: Buchla Touché, Dark Tower, Solari Split-Flap Display. All have local images in assets/wiki/. Manual promotion (promote-potentials.ts has known data.ts regex + image-copy + ToC bugs per memory).

## Promotion (manual, all 3)
- Added 3 entries to src/data.ts exhibitData (before `];`).
- Appended 3 wiki sections to docs/hci-wiki.md.
- Added 3 ToC entries (273 Buchla Touché, 274 Dark Tower, 275 Solari).
- Updated wiki intro count 272 -> 275.
- Images already local in assets/wiki/: buchla-touche.jpg, dark-tower-assembled.jpg (prior run), + solari-split-flap-board.jpg, solari-split-flap-closeup.jpg (this run, resized 1200/900px).
- Archived info.json -> info.json.archived for all 3 to prevent auto-promotion.
- Verified: `bun run typecheck` PASS, `bun run build` PASS (275 exhibits, 378 pages). Exhibit pages + local image refs verified. Wiki sections + ToC render in public/research/hci-wiki.md.

## Notes
- Subagents returned mostly duplicates this run (Amiga Joyboard, Atari Mindlink, Soundbeam, Versatron Footmouse, Polhemus Isotrak all already in museum). Only Solari split-flap was a genuinely new, image-verified find. The two other promoted artifacts (Buchla Touché, Dark Tower) came from the prior run's ready potential/ info.json files — confirming the "scan potential/ for ready candidates first" discipline.
