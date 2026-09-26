# Beepy Run Trace — Research, review, and add ~3 weird HCI interface artifacts (1976–1992)

Date: 2026-09-26
Goal: Find ~3 promising new HCI hardware/interface artifacts from 1976–1992, review, and promote the strongest.
Collection at start: 272 exhibits.

## Plan
- Launch up to 3 research subagents in parallel, each with one focused angle and ≤2 Octen searches each.
- Verify every returned candidate manually against `src/data.ts` + memory (subagents ignore exclusion lists).
- Build potential/<slug>/info.json for good candidates.
- Promote via `bun scripts/promote-potentials.ts` or manual edits.
- Verify with `bun run typecheck` + `bun run build`.
- Optionally write one Field Note.
- Update docs/beepy-memory.md with durable lessons.

## Backlog / angles to try
Per memory, the well is angle-dependent. Productive angles not yet exhausted:
- home electronic devices with a distinctive physical ritual
- computer-linked art/drawing input beyond covered
- early home video game controllers with truly unusual physical principles
- early network terminals with unusual interfaces
- early scanning/OCR hardware with distinctive physical interaction
- haptic/force-feedback devices beyond what's in the collection
- intallation/industrial control pendants

Candidates blocked by image to revisit (only if image path resolves): Braille 'n Speak, Tomy Verbot, LEGO TC Logo, SOUND=SPACE, Marble Answering Machine, Technos Acxel, Tickle Talker, Johns Hopkins Serial Code Keyboard, Touch-a-matic, HP 8566A, The Game Handler, Electronic Stratego, QWIP fax, Robertshaw Energy Manager, Allen-Bradley 1770-T2/T3 PLC terminal.

## Run log
(append as you go)
## Subagent results (3 angles, 2026-09-26)
- Angle A (portable input): Canon Communicator (1986) — new, has Commons image, but one-hand chord = near-duplicate of Microwriter; audit chording family. DatamEight (1983) chord keyboard — image-blocked. Most else duplicates.
- Angle B (home toys/games): Dark Tower (1981) — strong interaction, image-blocked on Commons (reconfirms 2026-07-11 deferral). Electronic Battleship (1977 MB) — NOT in museum, hidden-state duel, weak images. Lazer Tag (1986) — image-poor.
- Angle C (creative): Chalk Board PowerPad (1983) — good whole-hand membrane interaction, weak Commons images. Buchla Touché (1978) — distinctive, image-blocked.

## Actions
- Verify Commons image availability for the strongest new candidates: Electronic Battleship, PowerPad, Canon Communicator, Dark Tower.

## Commons verification (2026-09-26)
- Buchla Touché (1978): File:Touché front.jpg — CC BY-SA 4.0, 5472×3648, usable hero. Distinctive ceramic-plate touch synthesis + FOIL language. STRONG candidate.
- Canon Communicator: File:Canon communicator.jpg — CC BY-SA 3.0, 500×325 (small). Interaction = one-hand chord → thermal tape; near-duplicate of Microwriter chording family; weak distinctiveness. Likely skip.
- Electronic Battleship (1977 MB): NO Commons image. Image-blocked.
- Dark Tower (1981): NO Commons image (reconfirms 2026-07-11 deferral). Still image-blocked.
- Chalk Board PowerPad: NO Commons image. Image-poor.

## Decisions
- Promotable with reliable images this run:
  1. Buchla Touché (c.1978) — hybrid analog/digital performance synth programmed in FOIL; clean CC BY-SA Commons photo. info.json built.
  2. Milton Bradley Dark Tower (1981) — motorized rotating tower game master, film-cel carousel + hidden LED, membrane keypad; primary-source manual-scanned 'completely assembled game' illustration (VersaWriter precedent). info.json built.
- Rejected/held: Electronic Battleship (1977) — distinct hidden-state-duel interaction BUT mirrored/muddy manual scan, weak image; kept as deferred candidate. Canon Communicator — weak interaction (chord near-duplicate), deferred. Chalk Board PowerPad — image-poor. Buchla Touché's keyboard noted (NOT keyboardless as subagent implied — it has a 61-key piano keyboard + 3-way touch controller).
- Images staged to assets/wiki/: buchla-touche.jpg (1200x800), dark-tower-assembled.jpg (1188x1200).
