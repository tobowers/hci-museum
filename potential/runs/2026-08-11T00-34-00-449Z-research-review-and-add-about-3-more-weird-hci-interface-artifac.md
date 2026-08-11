# Run trace — 2026-08-11T00-34-00-449Z

**Goal:** research, review, and add ~3 more weird HCI interface artifacts from 1976–1992.

**Starting state:** 146 exhibits in data.ts / wiki ToC. Collection ~150 wiki sections incl. orphan research sections.

## Initial setup
- Read docs/beepy-memory.md (422 lines, up to date through 2026-08-08 blog lessons).
- Inspected src/data.ts (Exhibit type, img() helper, exhibitData array, featured).
- Inspected docs/hci-wiki.md ToC (177 ToC entries incl. orphans; sections use `## Title (Year)`).
- Decided NOT to run promote-potentials.ts (known bugs: no image copy, data.ts regex fails, no ToC update). Will edit manually.

## Planned research angles (3 subagents, 2 Octen each = 6; 1 Octen reserved for me)
1. **Educational/children's computers with tablet/stylus/voice input** — VTech Socrates, IntelliKeys, talking toys.
2. **Hybrid voice/physical game controllers** — Konami HyperShot, Sega Menacer, other weird game peripherals.
3. **Sonic/acoustic/ultrasonic position-sensing digitizers** — GRAF/PEN, Science Accessories, acoustic digitizers.

## Log
(append as work proceeds)

## Subagent results (all 3 completed, 2 Octen each = 6 total; 1 Octen reserved for me)

### Angle 1 — Educational/children's computers (subagent)
- **TI Touch & Tell (1981)**: toddler speech-synthesis toy; NO keyboard/screen; child points a fingertip at pictures on a swappable overlay sitting on a "position sensitive keyboard" (membrane touch pad). TMS1100 + TMS5110A. 7 overlay libraries. HIGH confidence. NO Commons images; DATAMATH (datamath.org) has photos + manuals.
- **VTech Socrates (1988)**: educational console, PRIMARY input = wireless IR keyboard + 2 IR game controllers (Z80A); accessories also IR: Touch Pad (stylus writing/drawing for kids), Mouse tablet, voice cartridge. CORRECTION to my premise: keyboard does NOT double as tablet. 11 Commons images in Category:VTech_Socrates. HIGH confidence.
- **Tomy Verbot (c.1984)**: voice-trained robot toy. No Commons images (already deferred in memory). Rejected again.
- IntelliKeys (1992): overlay keyboard, no Commons images. Noted.

### Angle 2 — Hybrid game controllers (subagent)
- **Bandai Hyper Shot (1989)**: Japan-only Famicom machine-gun light gun WITH haptic "Body Vibration System" recoil + built-in speaker; works as full controller for any Famicom game; bundled Space Shadow uses expansion-port input. NO Commons images. Interesting but image-blocked.
- **Sega Menacer (1992, Oct)**: wireless IR light gun for Genesis. Has Commons images, but light-gun category is saturated (Super Scope was already deferred for this). Reject for consistency.
- **Konami Hyper Shot (1984)**: MSX/Famicom two-button mashing controller, NO directional input, for Hyper Olympic only. 1 Commons image. Single-game scope = too narrow (same reason Atari 720° was rejected).
- Also noted: Atari CX-42 RF wireless joysticks (1983) — incremental joystick, skip.

### Angle 3 — Sonic/acoustic digitizers (subagent)
- **Science Accessories Corp. GRAF/PEN GrafBar GP-7 (1983-84, Mark II 1989)**: spark-gap sonic digitizer. Pen emits ultrasonic click/spark; two linear microphones in a top "instrumentation bar" time the click's arrival; triangulated X/Y streamed via serial. The tablet surface is acoustically transparent — you can draw on paper laid loose on the table. John Walker (Autodesk) memoir: sparks created ozone, "handy for chasing away pesky cats." 70 kHz Mark II spec. No Commons images, but US Patent 3,626,483 "Spark Pen" (1971) has public-domain drawings. GP-8-3D (1984) large-format/3D variant. Paradigm genuinely absent from museum.
- de Bruyne patent (1982): patent artifact only, skip.
- Corrections: no "Mictouch"/"SoundPads" acoustic digitizers exist (ghosts); Summagraphics spark-table rumor debunked.

## Verification plan (me)
- Check Commons for VTech Socrates files + verify Socrates facts (Wikipedia).
- Check DATAMATH Touch & Tell page for facts + image URLs.
- Check GRAF/PEN patent drawings availability + John Walker memoir source.
- Decide final 3 to promote; use 1 remaining Octen only if needed for validation.

## Verification & promotion decision
- Verified personally: VTech Socrates (Wikipedia), TI Touch & Tell (DATAMATH), GrafBar (John Walker Autodesk File footnote + Wikipedia Acoustic tablet + US 3,626,483 patent PDF rendered via pymupdf).
- Downloaded 8 images to assets/wiki/ (all verified with `file`): 4 PD VTech Socrates photos (Commons API URLs), 2 patent drawing PNGs (grafbar-patent-fig1/2.png), 2 DATAMATH Touch & Tell photos.
- Decided NOT to run promote-potentials.ts (known bugs). Manual edits:
  - src/data.ts: +3 exhibit entries (vtech-socrates, grafbar-sonic-digitizer, ti-touch-tell)
  - docs/hci-wiki.md: +3 ToC entries (178-180) and +3 sections appended after TI-59
- ToC anchors computed with GitHub slugger: vtech-socrates-1988, grafpen-grafbar-sonic-digitizer-198384, ti-touch--tell-1981.
- Rejected: Sega Menacer (light-gun category saturation, same reason Super Scope was deferred), Konami Hyper Shot 1984 (single-game controller, narrow — Atari 720 precedent), Bandai Hyper Shot 1989 (no CC images), Tomy Verbot (no images, again), IntelliKeys (no images).
- Field Note: skipping blog drafting this run; the GrafBar "pen that made sparks" story is noted as a strong future Field Note candidate.
