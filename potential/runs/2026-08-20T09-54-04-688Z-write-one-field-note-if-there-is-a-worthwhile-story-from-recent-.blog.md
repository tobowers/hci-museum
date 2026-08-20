# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: YES — one Field Note written

Subject: **Sony VIEW System (1984)** — promoted 2026-08-13 alongside Fairchild Channel F and BBN Spacegraph, but never written about.

Why the VIEW over other unwritten candidates:
- **Interface-channel uniqueness**: The VIEW encodes software as black-and-white patterns inside analog laserdisc video frames — the software comes out of the video. No near-neighbor note exists. The closest is the Domesday Project note (the-map-that-lived-on-a-laserdisc), which covers LV-ROM digital storage on laserdisc — a different approach. The VIEW is the opposite: pure analog hiding, no modified format.
- **Other unwritten candidates evaluated**:
  - Unimation PUMA Teach Pendant — strong story (programming-by-manipulation) but adjacent to industrial robotics, might feel out of place as a blog post without a broader robotics theme.
  - Fairchild Channel F — twist-grip controller is genuinely novel, but the Jerry Lawson story is well-covered elsewhere and the interaction (three grammars in one knob) resists a clean narrative arc.
  - Bally Astrocade — "program IS the pixels" overlaps with existing notes (Merlin hidden-state, TRS-80 video-memory note).
  - Teddy Ruxpin — cassette-as-medium overlaps Typecorder and 2-XL notes.
  - Synthi AKS pin-matrix — music-HCI is saturated with notes.
  - Meade LX200 — good story but the interface (keypad + database) is less strange.
  - Quotron II — keyboard-as-query-language angle has mild overlap with Strand Light Palette note.
  - Turbo Touch 360 — capacitive D-pad is ultimately still 8-way digital.
- The VIEW's angle — "hiding executable code inside analog video frames because the Army wouldn't wait for a new disc format" — is specific, strange, and has no near neighbor.

Post: `docs/blog/the-software-came-out-of-the-video.md` (slug: the-software-came-out-of-the-video).

Angle: "A DVD-like fiction forced through analog video, years before DVD existed." The paradox: the EIDS configuration had no floppy drive, so the machine could not save anything. The disc was read-only, the software was read-only, the training was self-contained and self-consuming. The laserdisc was simultaneously a movie you could watch and a bootable software medium.

Cross-links: BBC Domesday Project (LV-ROM hybrid approach, contrasted), Pioneer LaserBarcode (same laserdisc era, different direction — paper cues the disc).

## Files
- Wrote: `docs/blog/the-software-came-out-of-the-video.md`
- Edited: this trace file.
- Appended: `docs/beepy-memory.md` (durable lesson).

## Verification
- `bun run typecheck` — PASS.
- `bun run build` — PASS ("206 exhibits + blog + about, 267 pages").
- `public/blog/the-software-came-out-of-the-video/index.html` rendered (present in build output).

## Notes for future runs
- The Sony VIEW System was promoted in the 08-13 batch but never got a Field Note. It was the longest-standing unwritten candidate from recent batches (alongside PUMA and the Channel F). The "data hiding in plain sight" angle is a proven blog vein — the Cauzin Softstrip, Sony Typecorder, and VIEW all have notes now, forming a quiet "data-in-weird-media" family.
- Remaining strong unwritten candidates: Unimation PUMA Teach Pendant (programming-by-manipulation), Fairchild Channel F (twist-grip grammar), Meade LX200 (database-driven telescope interface), Quotron II (keyboard-as-query-language), Turbo Touch 360 (capacitive touch-pad).