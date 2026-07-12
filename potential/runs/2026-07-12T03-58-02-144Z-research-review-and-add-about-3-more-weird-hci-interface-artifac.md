# Run Trace: 2026-07-12T03-58-02-144Z

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## Phase 1: Planning

Read memory file. Collection is large (90+ artifacts). Known gaps still open:
- Thermal/temperature feedback — unexplored angle
- Electrotactile stimulation — unexplored angle
- Non-glove gesture recognition systems
- Interactive furniture / smart environments
- Non-musical tangible computing
- Early neural network accelerator hardware
- Pneumatic muscle / McKibben artificial muscle
- Computer-controlled slide projectors

## Phase 2: Research

Launching parallel subagents to scout multiple angles simultaneously.


## Phase 2 Results: Subagent Findings

6 subagents returned. Summary of promising candidates:

### Strong candidates for deeper review:
1. **TRON Intelligent House (1989)** — Ken Sakamura, ~1,000 networked computers controlling an entire house
2. **WISARD Pattern Recognition Machine (1981)** — Igor Aleksander, Brunel, 302kg neural network face recognizer at Science Museum London
3. **Teddy Ruxpin (1985)** — Ken Forsse / Worlds of Wonder, animatronic bear with servo data encoded on stereo cassette track

### Interesting but need scrutiny:
4. **Interactive Plant Growing (1992)** — Sommerer & Mignonneau, living plants as capacitive input
5. **Tickle Talker (1985-89)** — Graeme Clark, Melbourne, electrotactile speech aid on fingertips
6. **Thermal Image Generator (1991-92)** — Ghent, thermal Braille display
7. **Intel ETANN Neural Synthesizer (1992)** — David Tudor + Intel chip, neural network as musical instrument

### Already excluded (deferred in memory):
- Laser Harp, The Legible City

### Too incremental or weak:
- ANZA neurocomputer (ISA card, not direct HCI)
- Action Max (overlaps with Terebikko)
- Gyricon (display tech, not interactive system)
- Atari Puffer (prototype only, overlaps with Amiga Joyboard)
- Captain Power (interesting but incremental light-sensing)

## Phase 3: Deeper Verification

Launching deeper research on top 3 candidates: TRON Intelligent House, WISARD, Teddy Ruxpin.

## Phase 3: Deeper Verification Results

### TRON Intelligent House (1989)
- EXCELLENT. IEEE Milestone #263 (2024). Full exterior photos, schematics, and YouTube walkthrough available.
- 18-company consortium, Ken Sakamura, 333m², ~1,000 computers, $20M.
- Images accessible from ETHW (AWS S3) and TRON Forum (tron.org).
- Health-monitoring toilet, weather-responsive windows, automated storage, BTRON GUI.
- Pre-dates "ubiquitous computing" (Weiser, 1991) with HFDS concept (1987).
- Image licensing: TRON Forum copyright; ETHW public wiki. Used for educational/research purposes.

### WISARD (1981)
- STRONG. At Science Museum London (Mathematics: The Winton Gallery).
- 302 kg cabinet, 1840×1110×584 mm. RAM-based weightless neural network.
- Face recognition at 30 fps in 1981. UK Home Office evaluated it for surveillance.
- Science Museum images accessible via coimages CDN with proper User-Agent header.
- CC BY-NC-SA 4.0 licensed images from the Board of Trustees of the Science Museum.
- Team: Igor Aleksander, John Stonham, Bruce Wilkie, Eric Conant.

### Teddy Ruxpin (1985)
- STRONG. First mass-market animatronic toy. Ken Forsse (ex-Disney Imagineer).
- Servo data encoded in PPM on right stereo channel of standard cassette tapes.
- In V&A, Powerhouse Museum, and Computer History Museum collections.
- V&A image accessible, Powerhouse Museum images accessible.
- Sold 1M+ units in first 6 months, $93M first-year revenue.

## Phase 4: Promotion

All three candidates promoted:
- Created potential/<slug>/info.json for all three
- Downloaded local images to potential/<slug>/images/
- Ran `bun scripts/promote-potentials.ts` — wiki updated, data.ts entries NOT added (known bug)
- Manually added 3 entries to src/data.ts
- Manually updated wiki image references from remote URLs to assets/wiki/ paths
- Manually updated wiki Table of Contents (also fixed missing entries for 2-XL, Surf Champ, Iwata from 2026-07-10 run)

## Phase 5: Verification

- `bun run typecheck`: PASSED
- `bun run build`: PASSED (103 exhibits + blog + about, 124 pages)

## Artifacts Added

1. Teddy Ruxpin (1985) — wiki title: "Teddy Ruxpin"
2. TRON Intelligent House (1989) — wiki title: "TRON Intelligent House"
3. WISARD Pattern Recognition Machine (1981) — wiki title: "WISARD Pattern Recognition Machine"

Total exhibits: 103
