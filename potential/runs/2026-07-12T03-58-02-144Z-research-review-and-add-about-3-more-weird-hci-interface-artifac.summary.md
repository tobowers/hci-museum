# Run Summary: 2026-07-12T03-58-02-144Z

## Goal
Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## What Changed

### New Collection Artifacts (3 added)

1. **Teddy Ruxpin (1985)** — First mass-market animatronic consumer toy. Ex-Disney Imagineer Ken Forsse miniaturized theme-park servo animation into a plush bear. Standard stereo cassette tapes carried story audio on the left channel and pulse-position modulation (PPM) servo control data on the right — a hidden robot control program embedded in a storybook tape. Sold 1M+ units in first 6 months. Held by V&A, Powerhouse Museum, and Computer History Museum.

2. **TRON Intelligent House (1989)** — Fully computer-controlled 333m² Tokyo residence. ~1,000 networked computers embedded in walls, windows, toilets, and kitchens. Health-monitoring toilet performed automatic urinalysis. Weather sensors opened/closed motorized windows. Motion detectors tracked occupants for lighting and HVAC. Real families lived there for 3 years providing HMI feedback. Led by Ken Sakamura and an 18-company consortium. Cost ~US$20 million. IEEE Milestone #263 (2024). Predates "ubiquitous computing" by 2 years.

3. **WISARD Pattern Recognition Machine (1981)** — 302 kg cabinet containing a RAM-based "weightless" neural network at Brunel University. Present your face to a TV camera and the machine decides if it recognizes you — face-as-interface in 1981. Processed at 30 fps using banks of RAM chips instead of floating-point weighted synapses. Evaluated by UK Home Office for covert surveillance. On display at the Science Museum, London (Mathematics: The Winton Gallery).

### Files Written/Modified

- `potential/tron-intelligent-house/info.json` — Created
- `potential/wisard/info.json` — Created
- `potential/teddy-ruxpin/info.json` — Created
- `potential/tron-intelligent-house/images/tron-house-exterior.jpg` — Downloaded
- `potential/tron-intelligent-house/images/tron-house-birds-eye.jpg` — Downloaded
- `potential/wisard/images/wisard-cabinet.jpg` — Downloaded (CC BY-NC-SA 4.0, Science Museum)
- `potential/wisard/images/wisard-detail.jpg` — Downloaded (CC BY-NC-SA 4.0, Science Museum)
- `potential/teddy-ruxpin/images/teddy-vam.jpg` — Downloaded (V&A Museum)
- `assets/wiki/tron-house-exterior.jpg` — Copied
- `assets/wiki/tron-house-birds-eye.jpg` — Copied
- `assets/wiki/wisard-cabinet.jpg` — Copied
- `assets/wiki/wisard-detail.jpg` — Copied
- `assets/wiki/teddy-ruxpin-vam.jpg` — Copied
- `src/data.ts` — 3 new exhibit entries added
- `docs/hci-wiki.md` — 3 new sections appended, image refs updated, ToC updated (also fixed missing ToC entries for 2-XL, Surf Champ, Iwata from 2026-07-10 run)
- `potential/runs/2026-07-12T03-58-02-144Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Run trace
- `potential/runs/2026-07-12T03-58-02-144Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — This file

## Verification

- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (103 exhibits + blog + about, 124 pages)

## Image Licensing Notes

- WISARD images: Science Museum Group, CC BY-NC-SA 4.0, photographer: The Board of Trustees of the Science Museum
- TRON Intelligent House images: TRON Forum copyright / ETHW public wiki, used for educational/research purposes
- Teddy Ruxpin images: V&A Museum (B.103-2012), used for educational/research purposes

## Known Issues Fixed

- Wiki Table of Contents was missing entries for 2-XL, Surf Champ, and Iwata Desktop Force Display (promoted 2026-07-10). These have been added.
- Known `promote-potentials.ts` bug (data.ts entries silently dropped) worked around with manual edits.
- Known `promote-potentials.ts` image copy bug (paths not resolving) worked around with manual copy.

## Candidates Considered But Not Added

- Interactive Plant Growing (1992) — Living plants as capacitive input; interesting but more art installation than HCI hardware
- Tickle Talker (1985-89) — Electrotactile speech aid; good interaction model but limited visual appeal
- Thermal Image Generator (1991-92) — Thermal Braille display; interesting but weak image sources
- Intel ETANN Neural Synthesizer (1992) — Neural network chip as musical instrument; very niche
- Varifocal Mirror 3D Display (1980-82) — UNC vibrating mirror volumetric display; display technology not interaction model
- Atari Puffer (1983) — Exercise bike controller; prototype only, overlaps with Amiga Joyboard
- Captain Power (1987) — Interactive TV toys; incremental interaction model
- HRD-1 Laser Display (1976) — Laser drawing on photochromic film; display technology focus

## Total Collection Size

103 exhibits
