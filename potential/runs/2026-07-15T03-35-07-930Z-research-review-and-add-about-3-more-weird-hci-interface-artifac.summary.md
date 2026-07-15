# Beepy Curator Run Summary — 2026-07-15T03:35

## What changed

### Artifacts added to the collection: 1

**Stompin' (1986)** — Bally Sente arcade game with the first foot-operated grid controller in arcade history. A 3×3 matrix of weight-sensitive pads with LED ring feedback, co-invented by Nolan K. Bushnell (patent US 4,720,789). The direct ancestor of Dance Dance Revolution and every foot-operated rhythm game. Public-domain patent drawings used as primary images, supplemented by promotional flyer (TAFA/International Arcade Museum).

### Files written/modified

- `potential/stompin/info.json` — Full research dossier (archived after promotion)
- `potential/stompin/info.json.archived` — Archived info.json
- `potential/stompin/images/` — Downloaded patent drawings (3 pages) + flyer
- `src/data.ts` — Added Stompin' entry to exhibitData
- `docs/hci-wiki.md` — Added full Stompin' wiki section, updated ToC (105 entries), updated count to "108"
- `assets/wiki/stompin-patent-fig1.png` — Patent Figure 1 (perspective view, public domain)
- `assets/wiki/stompin-patent-fig3.png` — Patent Figure 3 (schematic, public domain)
- `assets/wiki/stompin-flyer.jpg` — Promotional flyer from TAFA
- `potential/runs/2026-07-15T03-35-07-930Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Trace file
- `potential/runs/2026-07-15T03-35-07-930Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — This summary

### Build count
108 exhibits (was 107). Built to 132 static pages.

### Verification
- `bun run typecheck` — Passed (no errors)
- `bun run build` — Passed (108 exhibits, 132 pages)

## Candidates evaluated but deferred

- **Exus Foot Craz (1983)** — First home console foot controller (Atari 2600). Deferred: interaction model overlaps with NES Power Pad (1988). Fan-site images only.
- **Computerware Bio Detector (1984)** — GSR finger sensor for TRS-80 CoCo. Deferred: overlaps with Synapse Relax (1984), same paradigm.
- **Digicassette (1976)** — First piezoelectric refreshable braille display. Deferred: overlaps with VersaBraille (1979), two braille displays would be redundant.
- **Holosound / The Invisible Instrument (1980-1992)** — Continuous-wave Doppler ultrasound body tracking. Deferred: overlaps with SOUND=SPACE (deferred), art installation framing.
- **Electrorheological Tactile Display (1992)** — Smart fluids for haptics. Deferred: academic paper only, image availability uncertain, edge of era window.
- **ExerVision Bicycle Trainer (1985)** — Exercise bike → Atari 2600. Deferred: overlaps with Suncom Aerobics Joystick and LifeRower.
- **RacerMate CompuTrainer (1986)** — Smart bike trainer for C64/NES. Deferred: overlaps with existing exergaming exhibits.

## Notes for future runs

- The candidate well remains thin at 108 exhibits. This run found one strong candidate after extensive searching across 8 subagent angles.
- Patent drawings continue to be a reliable source of public-domain images for hardware artifacts.
- KLOV/arcade-museum images are not CC-licensed; use patent drawings or flyers instead.
- The `promote-potentials.ts` script still has the data.ts silent-drop bug and the image-copy bug — both required manual fixes.
- The promotion gotcha where images are not copied from potential/ to assets/wiki/ is still active — always manually copy after running the script.
