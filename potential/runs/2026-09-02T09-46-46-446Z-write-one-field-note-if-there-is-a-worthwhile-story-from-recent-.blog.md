# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision

Yes — a Field Note is warranted. Several recent additions (08-28 through 08-31 promotions) are strong, distinct interaction artifacts that have no Field Note yet. I selected the **Magnavox Odyssey 2 / Philips Videopac G7000 (1978)** as the subject.

Rationale (per the standing Field Note lessons in memory):
- **No near-neighbor note.** The Odyssey 2 is the museum's only *full-keyboard console* (QWERTY membrane keyboard built into the machine body) and its only *physical-board-game/CRT hybrid* (Master Strategy Series cardboard + plastic pieces played alongside the screen). No existing note covers a keyboard-programmable console or tangible tabletop-plus-CRT hybrid.
- **Ruled out the other unwritten candidates:**
  - **Psion Organiser I** — write-once EPROM zap + UV-erase ritual. Genuinely good story, but memory explicitly flags it as overlapping the organizer-friction thread already anchored by `the-memory-you-carried-in-your-pocket`. Would collide.
  - **Amana Touchmatic** — "brains-replace-the-dial / first keypad appliance." The 08-28 lesson flagged "first to do X" milestone claims as weaker than a copyable interface paradigm; also adjacent to `the-sewing-machine-that-counted` (Pfaff = brains-in-home-appliance). Skipped.
  - Orca Edge, Lexicon LK-3000, Intellivision, IBM 6:5, Cochlear, VCR Plus+, IBM 3614, Nissan, Meade — all already noted in prior runs.
- The Odyssey 2's two interlocking bets (keyboard = "this is a computer", Master Strategy Series = "the tabletop is part of the game") are distinct, image-verified, and era-rich. Rich texture: programming cartridge, two-million-unit commercial run, 1984 withdrawal, and the Cross-linked Channel F / Bally keyboard-console siblings.

## Files written
- `docs/blog/the-console-that-wanted-to-be-a-computer.md` — the Field Note.
- This trace file appended with progress.

## Verification
- `bun run typecheck` — PASS (tsc --noEmit, no errors).
- `bun run build` — PASS: "Built static site to .../public (236 exhibits + blog + about, 312 pages)".
- Confirmed `public/blog/the-console-that-wanted-to-be-a-computer/` was generated.
- Post references only local assets (`../assets/wiki/odyssey-2-console-set.jpg`) and relative exhibit links (`../exhibits/magnavox-odyssey-2/`, `../exhibits/fairchild-channel-f/`, `../exhibits/bally-professional-arcade/`, `../exhibits/mattel-intellivision/`) — no remote hotlinks. Within the 500–900 word target.

## Durable lesson (for memory update consideration)
Ruled-out candidates for today's note reinforce the existing guidance: skip "first to do X" appliance milestones (Amana) and organizer-family members whose ritual overlaps an existing note (Psion vs the-memory-you-carried-in-your-pocket). The Odyssey 2's "keyboard console + tabletop/CRT hybrid" angle had no near neighbor and was image-verified, so it won cleanly. This is consistent with the "last-of-the-batch / no-near-neighbor" discipline.

