# Agent Scout Summary

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

Trace: potential/runs/2026-09-04T12-37-14-713Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md

## What changed

Added **2 new exhibits** to the HCI Museum collection (238 → 240). Promoted **The Clapper** and the **Caere Hand-held OCR Wand with Visual Aligner**.

## Artifacts added to the collection

### 1. The Clapper (1984)
- **Interaction:** The purest embodiment of gesture-as-command before Kinect — two sharp handclaps toggle a mains appliance. The body is the entire interface; no remote, no switch, no keyboard. Sound-pattern recognition tuned to reject single claps.
- **Maker:** Joseph Enterprises, San Francisco (Carl Joseph, William Morrell)
- **Why it fits:** Museum's only sound-pattern-recognition command device; no near-neighbor. Iconic, commercially ubiquitous, pop-culture fixture. Fills gesture-command + consumer-home-automation threads.
- **Image:** PD-self Commons photo (File:Clapper.png, 640×480).

### 2. Caere Hand-held OCR Wand with Visual Aligner (1980)
- **Interaction:** Hand-swept OCR wand that projects a trapezoidal light pattern onto the paper. The operator must hold the wand geometrically perfect (height/angle/skew) or the pattern visibly distorts — reading only succeeds when aligned. A continuous visual-to-motor calibration loop. Museum's first "read-by-light-guidance" physical-feedback device.
- **Maker:** Caere Corporation, Los Gatos CA (Serge L. Blanc, William R. Smith); US Patent 4,240,748 (filed 1978).
- **Why it fits:** Distinct embodied physical-interaction ritual, unlike in-museum ScanMan (rolling scanner) and Cauzin Softstrip (barcode). Patent-figure promotion (Stompin'/Fehmi precedent).
- **Images:** 2 public-domain full-resolution patent figures (2320×3408) via Google Patents.

## Files written
- `potential/the-clapper/info.json` (archived after promotion → info.json.archived)
- `potential/caere-ocr-wand/info.json` (archived after promotion → info.json.archived)
- `assets/wiki/the-clapper.png`
- `assets/wiki/caere-ocr-wand-fig1.png`
- `assets/wiki/caere-ocr-wand-alignment.png`
- `docs/hci-wiki.md` (ToC entries 239-240, intro count 238→240, two new wiki sections)
- `src/data.ts` (two new exhibit entries)

## Verification
- PASS: `bun run typecheck`
- PASS: `bun run build` → "Built static site ... (240 exhibits ...)"
- data.ts exhibit count (grep -cE '^\s{4}id: "') = 240
- Wiki ToC max entry = 240
- Clapper + Caere both present in data.ts and wiki

## Still needs review
- **REI Hand Operated OCR Wand (1976, US3947817A):** Deferred. Foundational hand-swept OCR wand but patent-figure-only and overlaps the promoted Caere wand's category. Revisit if a physical unit/photo surfaces.
- **Symbol LS-7000 (1983):** Gun-shaped handheld laser scanner. Deferred — patent-figure-only; Science Museum physical-artifact photo is CC BY-NC (not freely licensed). Revisit if a CC/PD photo surfaces.
- **The Clapper Field Note:** The `clap-on-clap-off` angle (body-as-command, gesture-recognition pipeline in consumer hardware) is a strong future blog candidate — no near-neighbor note.
- **Caere OCR Wand Field Note:** The "read-by-light-guidance" visual-to-motor calibration loop angle is novel and note-worthy.

## Method notes
- 3 research subagents (OCR/barcode, body-driven instruments, physical-ritual appliances) each used ≤2 Octen.
- Angle B (musical instruments) returned only near-duplicates of in-museum items (Buchla 700 ~ Lightning, Lyricon ~ EWI) — skipped.
- Angle C's TI Speak & Spell proposal was rejected (already in museum).
- Image licensing verified via Wikimedia Commons API + Google Patents meta `itemprop="full"` URLs; downloads `file`-verified. Browser UA needed for upload.wikimedia.org file host.
