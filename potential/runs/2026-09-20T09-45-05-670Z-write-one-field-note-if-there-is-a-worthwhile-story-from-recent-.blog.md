# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Candidate review

Recent promotions that still lack Field Notes (from scanning docs/hci-wiki.md recent additions + docs/blog/ for existing notes):

- **Linn LM-1 Drum Computer (1980)** — NO NOTE. Pad-as-grid interaction, the instrument IS the programming surface. Strong angle: inverts the TR-808's parallel-button-row grid. Distinguishes it from the "grid, shown and hidden" note (808/303 step-sequencer family). Good wiki writeup and 2 local images.
- **Casio VDB-1000 Touchscreen Watch (1991)** — HAS NOTE (the-watch-you-typed-on)
- **Commodore CHESSmate (1978)** — NO NOTE. Blind chess machine with coordinate entry (no board). Strong but its angle (you must hold the state in your head) overlaps the "you are the rendering engine" thread from the D&D Computer Labyrinth note (the-player-was-the-map).
- **KAT MalletKAT (1985)** — NO NOTE. Chromatic force-sensing-pad percussion controller. Interesting but its angle (full-arm mallet performance) sits adjacent to drum-machine notes already written.
- **PPG Waveterm B (1984)** — NO NOTE. Light-pen waveform editor. Interesting but overlaps Tektronix 7854 (who-shows-you-the-shape drawing notes) and Fairlight CMI light-pen territory.
- **Kurzweil K250 (1984)** — NO NOTE. Sampled-piano workstation with Braille accessibility prototype. Strong angle (accessible instrument design, Stevie Wonder connection) but accessibility angle overlaps Talking Glove and Optacon notes.
- **Questron Electronic Answer Wand (1984)** — NO NOTE. Hidden-ink optical sensing. Weird and strong, but the museum's "machine that knows what the eye cannot see" thread is already covered by multiple reading-wand notes.
- **McDonald's Brobeck POS (1974)** — NO NOTE. Button-per-menu-item register. Strong but its angle (software-as-hardware-buttons) would intersect the IBM 5265 note (the-register-with-the-paper-drum).

**Decision: Linn LM-1 Drum Computer.** It has the cleanest distinction from existing notes: the "grid, shown and hidden" note covers the 808/303 as a pair, but the LM-1's pad-as-grid philosophy (play it to program it) is a genuinely different interaction direction — the 808 separates your hands from the sounds via parallel button rows; the LM-1 puts your finger on the drum voice itself. The LM-1's interface is the museum's only "the instrument you play is the surface you program" artifact, and it has 2 clean local images.

## Writing

- Created `docs/blog/the-drum-machine-you-played-to-program.md`
- Angle: pad-as-grid interaction, Roger Linn's counterpoint to the 808's parallel-row grid, the instrument IS the programming surface
- Links: TR-808 (the grid shown and hidden note), TB-303 (same), Movement MCS (British QWERTY oddity)
- Images: linn-lm-1.jpg (PD) and linn-lm-1-large.jpg (CC BY-SA 3.0)
- Word count: 902 words (within 500-900 target, slightly above but fine)

## Verification

- `bun run typecheck` — PASS
- `bun run build` — PASS (268 exhibits + blog + about, 366 pages)
- Blog page generated at public/blog/the-drum-machine-you-played-to-program/
- All links verified: TR-808, TB-303, Movement MCS all in collection

## Memory update (appended to beepy-memory.md if needed)

New Field Note lesson (2026-09-20): From the recent promotions, the Linn LM-1 (1980) got its note `the-drum-machine-you-played-to-program` — the museum's only "instrument you program by striking the instrument" note. Angle anchored on the pad-as-grid inversion: the 808 separates hands from sounds via parallel button rows (time on one axis, instrument rows on the other), while the LM-1 uses a shared pad row and step/channel selection so programming is a physical tap-per-hit workflow. The note explicitly distinguishes itself from the earlier `the-grid-shown-and-hidden` note (808/303) by anchoring on the direction of the reach — the 808 asks you to think in parallel rows; the LM-1 asks you to think in hits. Cross-links: TR-808 (as sibling), TB-303 (hidden-grid sibling), Movement MCS (QWERTY-programmed British drum computer). Rule of thumb: when a recently-promoted artifact is the exact interactive counterpoint of an already-noted exhibit for the same domain (both drum machines, 1980, step sequencers), the contrast IS the note — and the note must explicitly distinguish itself from the existing note's thesis rather than repeating it.

