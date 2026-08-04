# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Initial state (2026-08-04 afternoon run)
- src/data.ts: 156 exhibit entries. Wiki ToC: 159 entries, 164 `## ` sections.
- Pre-existing gap: morning run (2026-08-04T03:37) added wiki sections + assets/wiki images for
  Craig M100, Nortel Displayphone, Franklin Spelling Ace but NOT data.ts entries (known promote-potentials.ts bug).
  Must add those 3 data.ts entries during promotion.
- Baseline: `bun run typecheck` PASS, `bun run build` PASS (156 exhibits, 201 pages).
- Octen budget: 7 total (3 subagents × 2 = 6, reserve 1). Exa: 2 fallback max.

## Research plan (3 parallel subagents)
- Angle A: Consumer video/image capture devices with unusual physical media (1976-1992).
  Primary: Fisher-Price PXL2000 Pixelvision (video onto audio cassette). Fallbacks: Canon Xapshot (still video onto floppy).
- Angle B: Dedicated information terminals with unusual input for non-computer users.
  Primary: Quotron Q1000 touchscreen financial terminal (1982). Fallbacks: Reuters Monitor terminal.
- Angle C: Computer-controlled acoustic/performance instruments where traditional instruments become I/O devices.
  Primary: Yamaha Disklavier (1987, optical sensors + solenoids, records/plays from floppy).

## Subagent results (3 parallel, 6 Octen used, 1 reserved)
- Angle A (PXL2000) — STRONG, fully verified. Fisher-Price PXL2000 "Pixelvision" (1987, Toy Fair), ~400K units. Video recorded as FM signal onto LEFT channel of standard audio cassette at ~16.875 ips (~9x audio speed), ~11 min/tape, audio commentary on right channel. 90x120 CCD @ 15 fps. Patent US 4875107 (James C. Wickstead, filed 12/1986). Also a playback deck outputting via RF modulator to TV ch 3/4. Artist afterlife: Sadie Benning, Peggy Ahwesh, Richard Linklater (Slacker), PXL THIS festival (Gerry Fialka, since 1990). Science Museum Group holds object 2016-5004 (on display NSMM Bradford). 4+ CC-licensed Commons images incl. actual 1994 camera footage. IMAGES: excellent.
- Angle B (Quotron Q1000) — MODERATE, weak fit. Touchscreen/voice/Ecco Design/Douglas Ball/1982-83 claims ALL UNVERIFIABLE (touchscreen not in any source; Ecco Design founded 1997; date ~1984-85 per LA Times). The broad "dedicated financial quote terminal" story (Quotron 800/809, 1971) is real with PD images but interaction model (green CRT + dedicated keys) too incremental vs Minitel/Displayphone. REJECT for this run.
- Angle C (Disklavier) — STRONG, fully verified. Yamaha Disklavier MX100A (1987 NA launch). Real acoustic upright with fiber-optic sensors on keys/hammers/pedals + solenoid actuators physically driving keys. Records to 3.5" DD floppy (Yamaha E-SEQ MIDI variant), playback reproduces human touch. 9+ years dev with Okayama University. NOT first (Bösendorfer SE, Stahnke, 1984-87, 32 units, ~$100K) but first mass-market factory-installed MIDI reproducing piano. Risset's real-time algorithmic Duet For One Pianist (1989). Smithsonian NMAH holds Disklavier PRO 2000 (CC0). 3+ PD/CC Commons images incl. internals. IMAGES: excellent.
- Decisions: promote PXL2000 + Disklavier. Quotron rejected (unverifiable distinctive claims, incremental interaction). Need a possible 3rd candidate — using 1 reserved Octen call next.
