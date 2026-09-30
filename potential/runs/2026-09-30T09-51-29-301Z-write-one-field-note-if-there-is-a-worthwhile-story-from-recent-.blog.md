# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Assessment (2026-09-30)

Reviewed the recent run summaries and the current note inventory to find a
worthwhile, genuinely-unwritten story from recent collection activity.

Confirmed already annotated (cross-referenced docs/blog/):
- Amana Touchmatic -> the-oven-that-taught-the-kitchen-to-program
- Nissan Voice Warning -> the-car-that-spoke-from-a-record
- Honeywell Visicorder -> the-light-that-developed-in-the-dark
- Ferranti-Packard flip-disc -> the-display-that-remembered-itself
- Meade LX200 -> the-telescope-that-already-knew-the-sky
- Milton Bradley Dark Tower -> the-tower-that-kept-its-secret-in-plastic
- Buchla Touche -> the-keyboard-the-builder-distrusted
- SynthAxe -> the-guitar-that-measured-everything
- Casio DG-20 -> the-guitar-that-couldnt-be-wrong
- Quotron II -> the-keyboard-that-was-a-query-language
- Polaroid Palette -> the-peel-that-made-the-color
- Caere OCR Wand -> the-light-that-taught-your-hand
- Yeoman Navigator -> the-chart-that-steered-your-hand
- IBM 3614 ATM -> the-machine-that-closes-its-own-face
- Mufax Courier -> the-lamp-that-told-you-the-far-end-was-listening

Genuinely unwritten candidates considered:
- Solari Split-Flap (1976): output-mechanism theater, but sits adjacent to the
  noted output family (the-display-that-remembered-itself flip-disc thesis).
  Risk of collision per 09-26 lesson.
- Scanset XL (1982): telephone-computer soft-key terminal; telephony family
  is heavily noted already. Weaker-differentiation.
- Ascom B8050 QuickFare (1989): physical-token ticket where the fare data is
  punched as eye-readable notches in the cardstock. The token family is noted
  (iButton, Cauzin, IBM 6:5) but the "data readable by a human with no
  machine" inversion is a clean, no-near-neighbor angle.

DECISION: write a note on the Ascom B8050 QuickFare —
slug `the-ticket-that-carried-its-own-data`.

## Post written

- File: docs/blog/the-ticket-that-carried-its-own-data.md
- Subject: Ascom B8050 QuickFare (1989), promoted 2026-08-28
- Angle: data punched as eye-readable geometry in the cardstock — a
  physical-token variant where the machine hands the passenger fare data a
  human can read with no reader. Unique in the token family (iButton = hashed
  steel, Cauzin = printed ink for a wand, IBM 6:5 = voice on a disc): the
  QuickFare inverts the family because its data needs no machine to be read.
- Cross-linked: Cauzin Softstrip, iButton, IBM 6:5, Barcode Battler, Dycam
  Model 1, Supermarket Scanner, IBM 3614. All slugs verified present in
  src/data.ts.
- Length: 815 words (within 500-900).

## Verification
- bun run typecheck: PASS
- bun run build: PASS (283 exhibits, 390 pages)
- Built page public/blog/the-ticket-that-carried-its-own-data/index.html
  confirmed; blog index updated.
