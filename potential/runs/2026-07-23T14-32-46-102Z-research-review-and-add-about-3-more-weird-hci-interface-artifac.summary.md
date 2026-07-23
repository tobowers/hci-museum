# Summary: Research run 2026-07-23 (afternoon)

## Result: 1 artifact added (Identimat Hand Geometry Reader)

After three consecutive zero-addition runs, this run broke the drought with one new exhibit.

### What changed

**Added to collection:**
- **Identimat Hand Geometry Reader (c. 1974)** — the first commercial biometric system. Five metal pegs physically constrain the user's hand into a machine-readable posture; an optical system measures finger lengths against a magstripe card template. Deployed at Shearson Hamill on Wall Street for attendance tracking. Manufactured by Identimation Corporation through 1987.

**Files modified:**
- `src/data.ts` — added 1 exhibit entry
- `docs/hci-wiki.md` — added wiki section (by script), Toc entry #115, updated count 114→115
- `assets/wiki/` — added 2 images (Hand_Geometry_Reading_Device.jpg, Hand_Geometry_and_Measurements.jpg)

**Files created:**
- `potential/identimat/info.json`
- `potential/identimat/images/` (2 images)
- `potential/runs/2026-07-23T14-32-46-102Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-07-23T14-32-46-102Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

### Verification
- `bun run typecheck` — PASSED (no errors)
- `bun run build` — SUCCESS (118 exhibits, 151 pages)

### Key decisions
- Only 1 of ~30 candidates survived image verification and overlap checks
- Image caveat: primary photo is a modern HandKey device (CC BY-SA 3.0) demonstrating the same peg-guided paradigm — honest captioning per museum precedent
- EyeDentify retinal scanner deferred: no era-appropriate CC images (patent drawings exist but no photo available)
- Remaining candidates from all 5 subagent angles rejected for: overlap with existing exhibits, lack of CC images, too-narrow interaction models, or medical-prosthesis framing (cochlear implants/FES)

### What still needs review
- EyeDentify retinal scanner — could be promoted with patent drawings as images if revisit desired
- Audio digitizers (dk'tronics, Sonic Blaster, Perfect Sound) — interaction model is "capture real-world sound as data" but image-blocked. Revisit if retro computing community photos become available
- Continue to accept that the well is dry — 118 exhibits is remarkable coverage for the era
