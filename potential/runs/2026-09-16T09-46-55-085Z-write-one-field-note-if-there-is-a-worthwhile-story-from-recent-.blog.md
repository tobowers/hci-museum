# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: One Field Note written

Subject: Polaroid Digital Palette (1986)
Slug: the-peel-that-made-the-color
File: docs/blog/the-peel-that-made-the-color.md

### Why this candidate

The Polaroid Digital Palette was promoted on 2026-08-28 and had been sitting unwritten as part of a batch alongside the Cochlear Nucleus 22, Ascom QuickFare, and the Palette. All three were unwritten; the cochlear got its note on 08-29 (`the-machine-that-writes-into-the-nerve`), leaving the Palette and QuickFare unwritten.

Evaluated the current "still unwritten" list against the Field Note selection heuristics:
- **Amana Touchmatic** — adjacent to existing "brains-replace-the-dial" notes (TNC 110, Tektronix 7854). Representative-only image weakens it further.
- **Polaroid Digital Palette** — "color as three physical washes of light" + "peeling the print apart" ritual. Genuinely distinct from all existing output-mechanism notes (1520 plotter = mechanical ceremony, Talaria = oil sculpture, Visicorder = latent/developed). No near-neighbor note in the collection.
- **Ascom QuickFare** — physical-token family, adjacent to iButton, Cauzin, TI-59 notes.
- **Ferranti-Packard flip-dot** — output-mechanism family, 4th member (1520, Talaria, Visicorder already noted). A 4th output note is acceptable but less urgent than the Palette's photographic/chemical angle.
- **SynthAxe** — interesting but its core principle (fret-as-electrical-contact) is the same as the Casio DG-20 note (`the-guitar-that-couldnt-be-wrong`). The dual-string architecture angle is distinct but the DG-20 note already anchors the refusal-to-measure territory. Reserve for a later run.

The Palette won because its output channel — chemical/photographic, built from accumulated light through a mechanical filter wheel, culminating in the physical peel ritual — has zero near-neighbor notes. It is the museum's only note about "computer output as a photograph."

### Angle

Anchored on the "color as three washes of light" inversion: most output devices mix ink or fire electron guns, but the Palette exposes one instant-film frame three times through rotating R/G/B filters, building color as accumulated light on a photosensitive surface. The interface ends with the user peeling the print apart — a moment between the machine finishing and the image being revealed that belongs to the human, not the machine.

Cross-linked to three output-family siblings: Commodore 1520 plotter (mechanical ceremony), GE Talaria (oil sculpture), Honeywell Visicorder (developing latent traces).

### Verification
- `bun run typecheck` — passes
- `bun run build` — passes (262 exhibits + blog + about, 356 pages, up from 355) // 355 was the count from the X10 run; adding a blog page made it 356

