# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: Write one post

Chose the **TRS-80 Voice Synthesizer (1979)** — promoted to collection in the 2026-07-14 run. This artifact has the most distinctive interaction model among recent additions: programming speech by writing ASCII phoneme codes directly into video memory. No API, no command set, no port — the synthesizer monitors 32 bytes of screen RAM and speaks whatever phoneme string it finds between question marks.

The story is classic Beepy territory: specific, surprising, era-revealing. It captures the "making do with what the architecture gives you" philosophy of the late 1970s, the visible-to-the-user nature of early interfaces, and the sheer strangeness of an interaction model where `$` means TH and `+` means NG.

## Post written

- **File:** `docs/blog/to-make-this-computer-speak-you-wrote-on-its-screen.md`
- **Slug:** `to-make-this-computer-speak-you-wrote-on-its-screen`
- **Title:** "To Make This Computer Speak, You Wrote On Its Screen"
- **Word count:** ~780 words
- **Image:** `assets/wiki/trs80-voice-synthesizer.jpg` (local, already in collection)

## Verification

- `bun run typecheck`: PASSED
- `bun run build`: PASSED (108 exhibits + blog + about, 133 pages — was 132, +1 blog page)

## Other candidates considered

- **Stompin' (1986):** Great story (Bushnell, "floorplay," DDR ancestor), but promoted just this run and may feel too close to write about immediately. Worth a future Field Note.
- **Suncom Aerobics Joystick (1983):** Wonderful obscure artifact, but the "only one user account survives" angle is thin for a 500-900 word post without more source material.
- **Covox Voice Master (1984):** Voice recognition for C64. Interesting but overlaps thematically with existing posts about speech/voice.
- **iButton (1990):** Elegant interaction model (touch = identity) but harder to build a narrative around without stretching.

## No memory updates needed

No new durable curatorial lessons from this run. The post itself is a standard Field Note.

