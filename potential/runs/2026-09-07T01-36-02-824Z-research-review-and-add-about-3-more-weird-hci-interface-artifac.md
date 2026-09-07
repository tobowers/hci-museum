# Run trace: research, review, and add ~3 more weird HCI artifacts

Date: 2026-09-07T01:36:02-08:00

## Goal
Find ~3 promising weird HCI hardware/interface artifacts from 1976-1992, review, and promote the strongest to the real collection.

## Collection state
- Build count via `grep -cE '^\s{4}id: "' src/data.ts` = 247 exhibits.
- potential/ is clean: no active (unarchived) info.json files. All archived.
- Candidate well is thin at 247+ exhibits; expect 0-3 additions. Image availability is the dominant bottleneck.

## Plan
1. Scan potential/ for ready candidates (done — none active).
2. Launch up to 3 research subagents with focused, fresh angles.
3. Review candidates, build info.json for strong ones.
4. Promote manually or via script; verify typecheck + build.
5. Write trace + summary; update beepy-memory.md.

## Angles (chosen from memory's "future unexplored angles" + fresh categories)
Three parallel research subagents, each with one focused angle and at most 2 Octen searches:

- **Angle A: Dedicated electronic reference appliances with physical page-flip / scroll / rotary interfaces** (dictionaries, Bibles, encyclopedias, translators 1976-1992 whose input is a scroll wheel, dial, page-turn button, or rotary selector — NOT keyboard). Franklin/Lexicon covered; looking for a distinct rotary/scroll mechanic.
- **Angle B: Embodied lab/measurement/industrial instruments with novel analog-digital interface feedback** (beyond Tektronix 7854, Fluke 9010A, Heidenhain TNC) — e.g., light-pen on CRT, touch-CRT instruments, spectrum/network analyzers where the interface is the interaction.
- **Angle C: Odd embodied consumer/vehicle interfaces** — 1976-1992 where whole-body or a novel sensing principle is the input (talking-car features beyond Nissan, gesture vehicle controls, voice radios, seat memory, novel hand controls).

Backup angle if yields are poor: barcode/OCR scanning hardware with distinctive physical interaction (ThunderScan category).

## Progress log
- Started 2026-09-07T01:36. potential/ clean (no active info.json). Build=247.

### Subagent results (3 launched in parallel)
- **Angle A (electronic reference appliances with rotary/scroll/page-flip)**: Subagent returned the TI Magic Wand Speaking Reader (1982). REJECTED — already in museum. Subagent also reported it could find NO genuine rotary-dial/thumbwheel-alphabet dictionary/thesaurus from 1976-1992 despite targeted searching; that category appears essentially undocumented.
- **Angle B (embodied lab/measurement instruments)**: Subagent returned HP 8566A/B Spectrum Analyzer (1979-80). "Active function" + CRT-labeled soft-key UI is a genuinely distinctive HCI milestone (archetypal early context-sensitive soft-keys). REJECTED on image: ZERO freely-licensed images on Commons (verified via Commons API — HP 8566/8568 searches return no usable files). No patent drawings (commercial instrument), no representative image. Fails local-image policy.
- **Angle C (embodied consumer/vehicle interfaces)**: Subagent returned Sip-and-Puff Wheelchair Breath Controller. Strong canonical embodied device, PD image exists (POSM). REJECTED on two grounds: (1) breath-input modality is already well-covered — Nintendo Hands Free Controller (sip-and-puff + chin joystick) AND HeadMaster (sip-and-puff mouth switch for clicks) are both in the collection; memory explicitly marks this gap "filled." (2) The only freely-licensed image (File:Patient Operated Selector Mechanism.jpg, POSM/POSSUM) is an EARLY 1960s device (out of 1976-1992 window), not an in-window wheelchair control.

### Direct verification (Octen exhausted 7/7 by subagents; Exa 0/2 used)
- Octen fully consumed by the 3 research subagents. All further research via direct Commons API + Wikipedia + curl (does not consume Octen/Exa).
- Verified PD image for sip-and-puff: File:Patient Operated Selector Mechanism.jpg (PD-author, Possum Ltd, VRTS confirmed). Date: early 1960s — OUT OF WINDOW.
- Confirmed breath-input already in collection (grep data.ts): nintendo-hands-free (sip-and-puff + chin joystick), headmaster (sip-and-puff mouth switch).
- Telxon PTC-710 portable data terminal: has a Commons CC BY 4.0 image (File:Telxon PTC-710 with MP 830-42.jpg) but is "early 1990s" (out of/borderline window), interaction is a one-hand route/warehouse scanning terminal (not distinctive enough), image is a Czech Railways ticket machine (1990s context). REJECTED.
- Datalogic portable terminal: no Commons image (confirmed). 
- HP 8566/8568: no Commons image (confirmed). HP Computer Museum route unlicensed.

### Outcome
ZERO additions. Three genuinely fresh angles (rotary reference devices, embodied lab instruments, embodied consumer/vehicle) each returned exactly one candidate, and all failed the museum's bar:
1. Magic Wand = duplicate.
2. HP 8566A = distinctive interaction but image-blocked.
3. Sip-and-puff wheelchair = breath-modality overlap + out-of-window primary image.

No candidate met all four promotion criteria (distinct interaction, freely-licensed local image, not in collection, in 1976-1992 window). Per Beepy memory ("accept zero-addition runs as the norm; do not pad the collection"), no weak/duplicative candidate was forced into the collection.

## Deferred/next-step notes
- HP 8566A/B "active function" soft-key lab instrument is the strongest interaction candidate found; image-blocked. If a freely-licensed photo of a period unit surfaces (HP Computer Museum is unlicensed; try museum acquisitions, auction photos), it is promotable.
- Sip-and-puff wheelchair breath controller: canonical but breath-input is saturated (2 in-museum devices). Only re-promote if a distinct in-window proportional-mobility device with a free image is found, and even then the modality overlap argues against it.
- No new productive angle proven this run; the well at 247+ exhibits remains dry for automated discovery.
