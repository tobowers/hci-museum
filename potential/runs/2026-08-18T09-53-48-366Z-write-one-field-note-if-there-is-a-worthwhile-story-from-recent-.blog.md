# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: YES — one Field Note written

Subject: **Nissan/Datsun Voice Warning System (1981)** — promoted 2026-08-15 alongside IMSAI 8080 and KIM-1.

Why this over other unwritten candidates (Fairchild Channel F, Bally Astrocade, KIM-1, Quotron II, Turbo Touch 360, Synthi AKS):

- **Interface-channel uniqueness**: The Nissan Voice Warning is the museum's only parallel-groove phonograph record as a computer interface. The 2-XL and TI Magic Wand notes cover different analog mechanisms (8-track track-switching, barcode wand). The parallel-groove phonograph — where a needle drops onto one of six grooves, each carrying a different message — has no near-neighbor note in the collection.
- **No existing note covers this**: Per the 08-15 memory note "analog speech coverage already anchored by 2-XL / TI Magic Wand notes" — but those are meaningfully different mechanisms. The Voice Warning is a literal record player inside a car, with zero digital processing between sensor and sound. That's an entirely different HCI story.
- **Texture**: The "bocking brake" pronunciation is genuinely delightful. The box labeled "Audible Warning – Don't Drop" is a perfect detail. The parallel-groove record as a tiny family (Mattel Monday Night Football 1977, Japanese appliances) gives depth. The analog/digital contrast with Chrysler's Electronic Voice Alert (TMS5110A LPC chip, 1983) is a clean framing device.
- **Pairing**: The note pairs naturally with the Buick Riviera Graphic Control Center (the museum's other automotive dashboard interface) — Buick touched, Nissan spoke; Buick was digital, Nissan was analog.
- **Passed over**: Fairchild Channel F (twist-grip controller — a strong candidate but the "one knob, three grammars" angle is close to the Bally grip which is also unwritten; would collide). Synthi AKS (pin matrix — strong but music HCI is saturated with notes per the 08-12 lesson). Quotron II (keyboard-as-query-language — near-neighbor to Strand Light Palette note). Turbo Touch 360 (capacitive touch D-pad — ultimately still 8-way digital input, thinner story).

Post: `docs/blog/the-car-that-spoke-from-a-record.md` (slug: the-car-that-spoke-from-a-record).

Facts anchored to the museum's sourced record (docs/hci-wiki.md Nissan section) — parallel grooves, 3-inch record, rubber belt, relay coil, patent US 4,426,691, "bocking brake," Murilee Martin documentation, 1981-84 model years, the analog/digital contrast with Chrysler EVA.

Image: local patent figures (../assets/wiki/nissan-voice-warning-patent-1.png and ../assets/wiki/nissan-voice-warning-patent-2.png) — both are public domain US patent drawings. The museum has no freely-licensed photo of the actual hardware unit, but the patent figures are historically appropriate for a device that's nearly impossible to photograph in situ (under the dash, removed from the car).

Cross-links: Buick Riviera GCC (pairing), Minolta Talker, TSI Speech+, TRS-80 Voice Synthesizer (synthesized speech contrast).

## Files
- Wrote: `docs/blog/the-car-that-spoke-from-a-record.md`
- Edited: this trace file.

## Verification
- `bun run typecheck` — PASS.
- `bun run build` — PASS ("200 exhibits + blog + about, 259 pages").
- `public/blog/the-car-that-spoke-from-a-record/index.html` rendered (present in build output).

## Notes for future runs
- The 08-15 memory explicitly flagged Nissan Voice Warning as a "strong future candidate" — the research run's own flags are reliable signals for the blog loop.
- Unwritten candidates remaining: Fairchild Channel F (twist-grip grammar), Bally Astrocade (program IS the pixels), KIM-1 (hex keypad + Microchess), Quotron II (keyboard-as-query-language), Turbo Touch 360 (the "360 that wasn't"), Synthi AKS (pin-matrix angle), Unimation PUMA Teach Pendant, Sony VIEW System, Teddy Ruxpin, Pioneer LaserBarcode.
- The parallel-groove phonograph family (Mattel Monday Night Football 1977, Japanese appliances late-1970s) is a small but real HCI lineage. No near-term plans to add more — the Nissan Voice Warning represents the category well on its own.