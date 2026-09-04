# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Initial state
- Collection at 238 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 238).
- No active (non-archived) info.json files in potential/ — no ready candidates waiting.
- Recent runs (09-01 through 09-04) have been low-yield.

## Research subagents launched (3 parallel)
- A: Early OCR / barcode scanning hardware with distinctive physical interaction ritual
- B: Musical instruments where body is a novel circuit element / unusual embodied interaction
- C: Dedicated info appliances where physical ritual of use is the HCI innovation

## Results

### Subagent A (OCR/barcode)
- REI Hand Operated OCR Wand (1976, US3947817A): First commercial hand-swept OCR wand. Hand-swept across printed chars, circuitry compensates for human sweep inconsistency. Patent figures only.
- **Caere Hand-held OCR Wand with Visual Aligner (1980, US4240748A)**: OCR wand that projects a trapezoidal light pattern onto the paper surface. Operator must hold the wand at precise height/angle/skew — the pattern visibly distorts if misaligned, creating a physical feedback loop. Read-only-when-aligned. Patent figures confirmed usable (2320×3408 full-resolution).
- Symbol LS-7000 (1983): Gun-shaped handheld laser scanner. Patent figures only. Science Museum photo is NC.

### Subagent B (body-driven instruments)
- Buchla 700 (1987): Force/pressure+positional keyboard. Too close to existing Buchla Lightning in museum. Skip.
- Lyricon (1978): Overlaps EWI already in museum. Skip.
- Synergy/360 Systems (1981): Body-gesture chord striking. Images not locked. Skip.

### Subagent C (physical-ritual info appliances)
- **The Clapper (1984, Joseph Enterprises)**: Clap-on/clap-off sound-activated switch. Pure embodied gesture command. Yes, it's a switch — but it's the most iconic consumer gesture-recognition device, predating Kinect by 25 years. PD image confirmed on Commons (File:Clapper.png, 640×480, PD-self).
- Kodak EK6 instant camera (1976): Hand-crank ejection. Not a computer interface. Skip.
- TI Speak & Spell (1978): Already in museum. Skip.

## Decisions
- PROMOTE: The Clapper (1984) — sound-activated gesture command, PD image, iconic, no near-neighbor
- PROMOTE: Caere Hand-held OCR Wand with Visual Aligner (1980) — visual-alignment sweep ritual, patent figures, distinct from ScanMan
- DEFER: REI Hand OCR Wand (1976) — foundational but patent-only, overlaps Caere's category
- SKIP: Buchla 700, Lyricon, Symbol LS-7000, Kodak EK6, Speak & Spell (already in museum)

## Image verification
- Clapper.png: verified PD-self via Commons API, 640×480 PNG, download confirmed
- Caere patent figures: US4240748A meta itemprop="full" URLs verified, 2320×3408 full-resolution PNGs, download confirmed
- Both images are valid, usable, freely-licensed

## Promotion
- Build info.json files for both candidates
- Download images to assets/wiki/
- Manually promote (promote-potentials.ts NOT run due to known bugs)
- Update docs/hci-wiki.md (ToC + wiki sections)
- Update src/data.ts
- typecheck + build verify

## Promotion (completed 2026-09-04)
- Downloaded 3 images to assets/wiki/: the-clapper.png (PD, 640×480), caere-ocr-wand-fig1.png + caere-ocr-wand-alignment.png (PD patent figures, 2320×3408).
- Appended 2 wiki sections to docs/hci-wiki.md (The Clapper, Caere OCR Wand).
- Updated wiki ToC entries 239-240 + intro count 238→240.
- Added 2 entries to src/data.ts (the-clapper, caere-ocr-wand).
- Archived both info.json files as info.json.archived.
- typecheck PASS. build PASS (240 exhibits).
