# Run Summary — 2026-09-06T01-36-37-863Z

## Goal
Research, review, and add ~3 more weird HCI interface artifacts from 1976–1992.

## What changed
The collection grew from **243 to 245 exhibits** with **2 promoted additions** (fewer than 3 accepted — the well is thin and only 2 of this run's candidates had freely-licensed images).

### Added to the collection
1. **GE Talaria Light-Valve Video Projector (1983)** — slug `ge-talaria`. General Electric's oil-film light-valve video projector: no CRT, no LCD, no pixels. A rotating glass disc is continuously re-coated with viscous oil; an electron beam sweeps a raster across the oil, physically deforming it into a diffraction grating; Xenon arc light is diffracted through Schlieren optics (undisturbed oil = black). Color via dichroic filters, each writing its own oil film. The image is literally sculpted from oil — the museum's only output-mechanism display, no near neighbor. PD Commons image.
2. **Ferranti-Packard Flip-Disc Display (1976)** — slug `ferranti-packard-flipdot`. Purely electromechanical bistable dot-matrix display: each pixel is a two-sided metal disc flipped by a solenoid pulse and latched with zero power. Kenyon Taylor patent (1961); mass use in stock-exchange boards, transit signs, and the iconic Family Feud answer board (1976). PD Family Feud board photo + CC BY-SA 3.0 close-up.

### Files written
- `potential/ge-talaria/info.json` (then archived → `info.json.archived`)
- `potential/ferranti-packard-flipdot/info.json` (then archived → `info.json.archived`)
- `src/data.ts` — 2 exhibit entries added.
- `docs/hci-wiki.md` — 2 wiki sections, 2 ToC entries (#244, #245), intro count 243→245.
- `assets/wiki/` — 3 images copied (ge-talaria.png, ferranti-packard-family-feud.jpg, flipdot-closeup.jpg), all local paths.
- `docs/beepy-memory.md` — durable lessons added.
- `potential/runs/2026-09-06T01-36-37-863Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-09-06T01-36-37-863Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Research process
- 3 parallel `hci-research-subagent` runs on fresh angles (shared Octen budget of 7; subagents used 6):
  - **Oddball pointing devices** → Tektronix Inertial Mouse (patent-only), Field-Coupled Pointing Device (patent-only), Orientational Mouse (patent-only). All weak on the artifact criterion.
  - **Home/environmental automation** → Unity Systems Home Manager 1985 (STRONG interaction, zero free images), Honeywell Chronotherm III (electromechanical analog, weak), Magic Stat (needs validation).
  - **Novel commercial displays/output mechanisms** → GE Talaria (1983, PD image), Ferranti-Packard flip-dot (free images), IBM 3290 plasma (weaker image lead).
- Manager verified all images via free Commons API + curl (no Octen consumed). Chose the 2 image-verified, genuinely weird, in-window artifacts from the display angle.

## Verification results
- `bun run typecheck` — **PASS**.
- `bun run build` — **PASS** (245 exhibits + blog + about, 324 pages).
- data.ts exhibit count via `grep -cE '^\s{4}id: "'` = 245 (matches build).
- Both new exhibit pages generated (public/exhibits/ge-talaria, public/exhibits/ferranti-packard-flipdot), reference local assets.
- info.json files archived (0 active remain), no auto-promotion risk.

## What still needs review
- **Unity Systems "Home Manager" (1985)** — the strongest interaction story of the run (whole-house touchscreen floor-plan automation + DTMF phone control, 1985) but zero freely-licensed images. Highest-value image-resolution target for a future home-automation run.
- **Tektronix "Inertial Mouse" (1988)** — first accelerometer/inertial mouse concept, patent-only. Revisit if a physical unit/prototype surfaces.
- **Field Note candidates** (unwritten): GE Talaria (`the-picture-sculpted-from-oil`), Ferranti-Packard flip-dot (`the-display-that-flipped-latches`). Both genuinely novel note angles.
