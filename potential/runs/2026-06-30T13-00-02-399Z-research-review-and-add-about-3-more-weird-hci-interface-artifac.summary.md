# Run Summary: 2026-06-30T13:00 — Research + Add ~3 HCI Artifacts

## What happened
5 parallel research subagents explored interactive videodisc systems, early wearable computers, electrotactile displays, blind speech-output terminals, and open-ended strange 1980s HCI. From ~40 candidates across all subagent reports, 3 were selected for promotion.

## Artifacts added to collection (3)

### 1. MBX Expansion System (1983)
- **What:** Consumer voice-recognition gaming peripheral for TI-99/4A. Headset trained on user's voice to recognize spoken game commands. Paired with 360° analog joystick with twist knob and 64-key membrane overlay keypad. Built-in speech synthesis better than TI's own.
- **Why:** Voice-recognition gaming in 1983 — a decade ahead of the market. Originally designed as Milton Bradley's own game console to compete with Atari, killed when ColecoVision entered, repurposed as TI-99/4A add-on, discontinued within months during the 1984 crash. Peak doomed ambition.
- **Sources:** videogamehouse.net (creator Mike Langieri interview), ninerpedia.org, vintagecomputing.com (Benj Edwards), Rob Patton's MBX page, AtariHQ.

### 2. The Drawing Prism (1985)
- **What:** Optical direct-drawing device using frustrated total internal reflection (FTIR). Transparent glass prism with video camera underneath — artists paint with real brushes, fingers, or any light-colored object directly into a computer's frame buffer in real time.
- **Why:** Anticipated FTIR multi-touch screens by ~20 years. Let artists bridge traditional and digital media physically. Unique among museum's input devices — no stylus, no tablet, just real brushwork on glass. Well-documented in ACM SIGGRAPH paper.
- **Sources:** ACM Digital Library (SIGGRAPH 1985), SIGGRAPH History Archive, U.S. Patent #3,846,826 (Mueller, 1974 prior art).

### 3. DataHand Keyboard (1990)
- **What:** Radical keyboard redesign where each finger rests in a padded well with five magnetic switches (N/S/E/W + center press). No wrist movement, sub-millimeter finger twitches. Magnets for key return, optical sensors for detection. Invented by Dale Retter to solve his own RSI.
- **Why:** Most extreme keyboard redesign ever commercially produced. Prototyped by 1989 (HFES paper), sold from 1990. Appeared in films Contact and Stormbreaker. Still inspires open-source recreations (DodoHand, lalboard, Svalboard).
- **Sources:** Wikipedia, octopup.org (detailed owner review with historical photos), HFES 1989 paper, Ferrill 1992 evaluation, Microsoft Buxton Collection.

## New image assets downloaded
- `assets/wiki/mbx-expansion-system-1.jpg` (1983 flyer scan, Benj Edwards)
- `assets/wiki/mbx-expansion-system-2.jpg` (1983 flyer scan, Benj Edwards)
- `assets/wiki/drawing-prism-1.jpg` (SIGGRAPH 1985 paper title, ACM SIGGRAPH History Archive)
- `assets/wiki/datahand-keyboard-1.jpg` (overhead view, CC BY-SA 3.0, via Wikimedia Commons)
- `assets/wiki/datahand-keyboard-2.jpg` (Professional II right hand, via Wikimedia Commons)

## Files modified
- `src/data.ts` — Added 3 new exhibit entries (manual — known regex bug in promote script)
- `docs/hci-wiki.md` — Added 3 new wiki sections + updated ToC + fixed all image paths to local
- `potential/mbx-expansion-system/info.json` — Created
- `potential/drawing-prism/info.json` — Created
- `potential/datahand-keyboard/info.json` — Created
- `potential/runs/2026-06-30T13-00-02-399Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Trace
- `potential/runs/2026-06-30T13-00-02-399Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — This file

## Verification
- Typecheck: PASS (tsc --noEmit, zero errors)
- Build: PASS (62 exhibits + blog + about, 72 pages)
- New exhibit pages: All 3 generated in public/exhibits/

## Known issues / gotchas
- MBX hardware images from videogamehouse.net are 404; used vintagecomputing.com flyer scans instead. Acceptable but not ideal — the flyers don't show the hardware as clearly as product photos would.
- Drawing Prism has only the paper title slide image; the paper itself likely contains figures showing the device, but the ACM PDF requires subscription access.
- The promote-potentials.ts regex bug in data.ts replacement persists — entries were manually added.

## Deferred candidates from this run (not promoted)
- EXOS Dexterous Hand Master (1989) — Metal exoskeleton hand tracker. Distinct from VPL DataGlove (soft), but harder to find good images. Defer for future.
- Yamaha Breath Controller BC1 (1982) — Breath as continuous MIDI expression. Interesting but we already have Nintendo Hands Free Controller (sip-and-puff, different modality but both breath-based).
- Spaceball / Spaceball 2003 (1986-1988) — 6-DOF isometric controller. Overlaps with DLR Control Ball (1981) already in museum.
- Eudaemonic Shoe Computer (1978) — Delightfully weird wearable in a shoe for roulette prediction. One-off, thin sources, more hacker lore than commercial HCI artifact.
- VOTEM (1983) — $40 analog-to-digital interface kit. Clever but more of a general I/O peripheral than a distinctive HCI interface.
- Optacon II (1985) — Important but original Optacon (1971) is pre-window, and Optacon II is a refresh.
- Braille 'n Speak (1987) — Important portable notetaker but we have VersaBraille (1979).
- Various interactive videodisc systems — Too installation/room-scale to fit the museum's artifact-centric model.

## Collection now
62 exhibits covering the 1976-1992 HCI window.
