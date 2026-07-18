# Run Summary: 2026-07-18T03-32-44-400Z

## What changed

### Added to collection (3 exhibits)

1. **Flute Playing Machine (1979–1982)** — Martin Riches, Berlin
   - Draw with felt-tip pens on a transparent music scroll; 15 photocells read the marks and drive 12 electromagnetic keys on a specially-made alto flute plus a compressed-air blower. Acquired by Berlinische Galerie museum. Drawing-to-acoustic-sound — distinct from UPIC's drawing-to-synthesizer already in the museum.
   - 4 local images: full machine, flute detail, Paris visitor drawing, score diagram
   - Image source: martinriches.de (artist's own site), photos by Hermann Kiesling (CC BY-NC-ND)

2. **Johns Hopkins Serial Code Keyboard (1983)** — Wolfger Schneider, JHU/APL
   - Frequency-encoded pseudo-Morse: dits and dahs are equal duration, differentiated by tone frequency (high vs low). Three-position spring-centered switch on Apple II game port. Published in Creative Computing Oct 1983. Evaluated in rehab centers across US and Canada.
   - 1 local image: Creative Computing magazine page scan (Internet Archive)
   - Fills: unconventional accessibility input paradigm

3. **EDP Wasp (1978)** — Chris Huggett and Adrian Wagner, Oxford UK
   - £199 synthesizer with flat capacitive touch keyboard — copper plates under silk-screened vinyl. One of the earliest consumer capacitive touch products. Sweat would trigger false notes; humidity caused runaway "droning." The Deluxe variant (~80 units) reverted to a mechanical keyboard. Design by Chris Huggett, who later designed the OSCar, Akai S1000 OS, and Novation synths.
   - 2 local images: Wasp main keyboard, Wasp Deluxe (Wikimedia Commons, CC BY-SA 3.0 / GFDL)
   - Fills: early capacitive touch in a consumer product

### Deferred (2 candidates)

- **MIDI Dance Floor (1989-1990)** — Info.json archived. Wiki entry removed. Weak GIF images from Columbia University site (501×329, 400×447). Deferred: continuous pressure FSR dance floor, but image quality insufficient for collection promotion. Interaction model is distinctive (continuous analog FSR vs binary switch mats already in museum). Revisit if better images surface.

- **Braille 'n Speak (1987)** — Researched but NO info.json built. ZERO publicly accessible images found. Smithsonian and AFB archives returned 403; Wikimedia Commons has no entry. Deferred pending image availability.

### Cleanup

- MIDI Dance Floor wiki section (lines 5560-5605) removed — had been auto-promoted in a prior script run despite being deferred
- MIDI Dance Floor info.json renamed to info.json.archived
- Image hotlinks fixed: JHU and EDP Wasp updated from remote URLs to local assets/wiki/ paths

## Files written

- `potential/runs/2026-07-18T03-32-44-400Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-07-18T03-32-44-400Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)
- `potential/edp-wasp/info.json` (new candidate research)
- `potential/midi-dance-floor/info.json.archived` (archived)
- `assets/wiki/edp-wasp-main.jpg` (new image)
- `assets/wiki/edp-wasp-deluxe.jpg` (new image)
- `assets/wiki/jhu-serial-code-keyboard-cc1983.jpg` (already existed, wiki path fixed)
- `assets/wiki/flute-playing-machine-*.jpg` (already existed)

## Verification

- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (111 exhibits + blog + about, 138 pages)

## Collection stats

- 111 exhibits total (+3)
- Build: 138 pages

## Notes for future runs

- The promotion script (`promote-potentials.ts`) has a confirmed bug: the regex `/\n\];\s*\n\nexport const featured/` doesn't match because `export const exhibits` sits between `];` and `export const featured`. Data.ts entries are silently dropped. Until fixed, always manually edit data.ts after running the script.
- Cleanup discipline: the prior run promoted MIDI Dance Floor to the wiki even though it should have been deferred. Always audit potential/ for stale info.json files before running promotion.
- Three info.json files were sitting in potential/ at run start (flute-playing-machine, jhu-serial-code-keyboard, midi-dance-floor) — these were from a prior run that set up the info.jsons, promoted wiki sections, and copied images, but never updated data.ts (regex bug). This run completed the promotion by adding data.ts entries and cleaning up the MIDI Dance Floor.
