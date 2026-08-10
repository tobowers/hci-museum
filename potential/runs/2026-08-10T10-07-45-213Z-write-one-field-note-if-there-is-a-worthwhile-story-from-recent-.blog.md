# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Progress log

- (start) Assessed recent collection activity. Most recent promotions: 2026-08-10 (00:35) TI Voyager + Pioneer LaserBarcode + Sony VIEW System; 2026-08-09 (12:28) Teddy Ruxpin + Apricot Portable; 2026-08-08/09 Novag Robot Adversary + Unimation PUMA Teach Pendant.
- Field Notes already written for: TB-303/TR-808 (`the-grid-shown-and-hidden`, 08-08), Strand Light Palette (`the-command-line-that-painted-broadway`, 08-07), Pfaff (`the-sewing-machine-that-counted`), Novag Robot Adversary (`the-chess-computer-that-grew-a-hand`, 08-09).
- Unwritten recent additions: TI Voyager (1988), Pioneer LaserBarcode (c.1985), Sony VIEW System (1984), Teddy Ruxpin (1985), Apricot Portable (1984), Unimation PUMA Teach Pendant (1980).
- Candidate selection: TI Voyager (1988) chosen. Rationale (per 08-02/08-05 memory lessons — pick by interaction-model distinctiveness plus overlap management):
  - Interaction model is uniquely distinct: a keyboardless Speak & Spell-family toy whose ENTIRE input channel is spoken yes/no/true/false answers through a Flex-PCB headset. The museum's speech family is synthesis-heavy (Speak & Spell, TRS-80 Voice Synth, Sega AI, Butler in a Box, DragonDictate) but no existing note covers recognition-as-the-only-input in a consumer toy.
  - No overlap with existing notes: `the-wand-that-made-books-speak` is barcode input; `shouting-at-the-future` is an amplitude-threshold voice trigger (not recognition) on an NES peripheral; `the-box-that-said-yes-boss` is wake-word home automation. The Voyager is the only note where the toy's complete interface is the child's voice.
  - Runners-up passed over: Sony VIEW System (software-out-of-video-frame angle overlaps `the-map-that-lived-on-a-laserdisc` conceptually), Pioneer LaserBarcode (barcode-as-input already anchored by Magic Wand note + Barcode Battler), Teddy Ruxpin (cassette-as-medium already anchored by Typecorder note and 2-XL; animatronic angle partially covered by Disklavier note `the-ghost-of-your-own-hands`), Apricot Portable (voice input already anchored by Butler/DragonDictate), PUMA teach pendant (strong, but deferred as future note — programming-by-manipulation; today's Voyager story is fresher and ties into the Little Professor machine-asks family arc).
  - Local images available: ti-voyager-1..4.jpg under assets/wiki (Datamath Calculator Museum preservation photos).
- Post written: docs/blog/a-computer-reduced-to-ears-and-a-mouth.md (~800 words). Subject: TI Voyager (1988). Links to speak-spell, ti-voyager, butler-in-a-box, dragondictate, sega-ai-computer, little-professor, trs80-voice-synthesizer. One local image (ti-voyager-4.jpg, the Flex-PCB headset — the defining interface).
- Running verification next: bun run typecheck, bun run build.

## Verification

- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (174 exhibits + blog + about, 225 pages)
- Post page generated at public/blog/a-computer-reduced-to-ears-and-a-mouth/index.html
- Exhibit links resolve: speak-spell, ti-voyager, butler-in-a-box, dragondictate, sega-ai-computer, little-professor, trs80-voice-synthesizer (all verified in public/exhibits/)
- Local image resolves: assets/wiki/ti-voyager-4.jpg (copied to public/assets/wiki/)
- Word count: 764 (within 500-900 requirement)

## Outcome

Field Note written: docs/blog/a-computer-reduced-to-ears-and-a-mouth.md — "A Computer Reduced to Ears and a Mouth" (2026-08-10).
Subject: TI Voyager (1988), the keyboardless Speak & Spell-family toy whose entire interface is a Flex-PCB headset and four spoken words (yes/no/true/false).
Angle: recognition-as-the-only-input — the museum's speech family is synthesis-heavy, and the Voyager is the moment a major company bet recognition belonged in the toy aisle; framed as the Little Professor's machine-asks contract carried out with nothing but sound. Honest about the failure (fragile recognition, four-word vocabulary, vanished without footprint).
