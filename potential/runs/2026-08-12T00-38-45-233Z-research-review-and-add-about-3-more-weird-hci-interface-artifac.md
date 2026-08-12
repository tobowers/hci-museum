# Run trace — 2026-08-12T00-38-45-233Z

**Goal:** research, review, and add ~3 more weird HCI interface artifacts from 1976–1992.

**Starting state:** 180 exhibits in src/data.ts (181 `id:` lines incl. type def). Wiki has 185 `## ` sections. Memory is current through 2026-08-11 (blog lesson: GrafBar Field Note). Last research run (08-11) was aborted and left two candidate dirs: `potential/meade-lx200/` and `potential/seiko-receptor/` (images only, no info.json, no promotion).

## Initial setup
- Read docs/beepy-memory.md (423 lines). Key standing guidance: image availability is the dominant bottleneck; Commons-heavy device classes pay off; the well at ~180 exhibits is thin but fresh angles still yield; promotion is manual (promote-potentials.ts has three known bugs: image copy, data.ts regex, ToC).
- Audited potential/: 9 active info.json files (grafbar-sonic-digitizer, philips-cdi, pioneer-laserbarcode, rca-studio-ii, sony-view-system, ti-59, ti-touch-tell, ti-voyager, vtech-socrates) — ALL already promoted in src/data.ts. Must be archived before any promotion step.
- Leftover candidates from aborted 08-11 run: Meade LX200 computerized telescope (1992, keypad+GoTo) and Seiko Receptor MessageWatch (1990, FM-broadcast wrist pager). Both have images downloaded but no info.json and no promotion decision.
- Inspected src/data.ts Exhibit type + img() helper; docs/hci-wiki.md ToC + section format.

## Planned research angles (3 subagents, 2 Octen each = 6; 1 Octen reserved for me)
1. **Physical game media (1976–1992)** — toys/games where a printed or magnetic card/sheet is read LIVE by the machine as game data. Primary target: Tomy Turnin' Turbo Dashboard (1983) — steering wheel reads a magnetic printed "road card". Exclude: Cauzin Softstrip, TI Magic Wand, Barcode Battler, Pioneer LaserBarcode.
2. **Pointing physical principles absent from the museum** — no mouse/trackball/touchpad/pointing-stick artifact exists. Targets: IBM TrackPoint (ThinkPad 700C, 1992), Cirque GlidePoint (1992), unusual trackballs. Exclude: DLR Control Ball, Summagraphics Bit Pad, SGI Dial/Button, Versatron Footmouse, Twiddler.
3. **Evaluate the two leftover candidates from the aborted run** — Seiko Receptor MessageWatch (1990) and Meade LX200 (1992): interaction models, team, image licensing, promotion-worthiness. Also scan for better "wrist messaging" or "computerized instrument" alternatives.

## Budget bookkeeping
- Octen: shared run budget 7. Subagents: 2 each = 6. Reserve 1 for curator verification.
- Exa: shared run budget 2. Only for final-candidate independent validation, at most 1 per subagent.
- Grok: not planned unless needed.

## Log

### 00:40 — Setup
- Archived 9 stale active info.json files (already-promoted exhibits) to `info.json.archived`: grafbar-sonic-digitizer, philips-cdi, pioneer-laserbarcode, rca-studio-ii, sony-view-system, ti-59, ti-touch-tell, ti-voyager, vtech-socrates.
- Pre-checked Wikimedia Commons availability for priority candidates (no Octen cost): Turbo Dashboard ZERO hits; ThinkPad 700C none (720C/generic only); EMS Synthi AKS GOOD (CC images); Meade LX200 present (CC/PD); Seiko Receptor ZERO; VCR Plus+ present ("File:Video-plus.JPG", CC BY-SA 3.0).

### 00:45 — Subagent research (3 parallel, 2 Octen each = 6; 1 Octen left in reserve)
1. **Angle A (physical game media / printed-code ritual):** VCR Plus+ (1990) CONFIRMED STRONG — Gemstar (Henry Yuen + Daniel Kwoh), $60 retail Nov 1990, PlusCode/G-Code printed-digit → typed → IR-emulated VCR programming, Cryptologia 1992 reverse-engineering paper, TV Guide merger, blockbuster sales. Image: Video-plus.JPG (CC BY-SA 3.0, Japanese G-Code unit). Turbo Dashboard hypothesis DISPROVEN (no road card — lightbulb+drum projector, mechanical steering; zero free images) → DEFER.
2. **Angle B (music tangible programming):** EMS Synthi AKS (1972–c.1984) PROMOTE — capacitive 30-note touch keyboard + pin-matrix patch panel (pins route signals = tangible programming) + 256-step KS digi-sequencer (finger-recorded, NOT pin-programmed — important copy caveat). In production/sale through the museum window (1979 catalogue price £1,452). Pink Floyd "On the Run" on an AKS. Hero image: EMS Synthi AKS (opened).jpg (CC BY-SA 3.0).
3. **Angle C (leftover evaluation):** Seiko Receptor MessageWatch (1990) → DEFER (image-blocked: no free watch photo, only mako.cc screencaps + patent drawings). Meade LX200 (1992) → PROMOTE (first consumer GoTo telescope, $2,000, 64,359-object database, red-LED keypad for dark adaptation, RS-232, LX200 protocol standard; 7 CC/PD telescope images but NO freely-licensed hand-controller photo — caption honestly).

### 00:55 — Images
- Downloaded 8 images to assets/wiki/ (Commons, UA BeepyBot, verified with `file`): vcr-plus-1.jpg, synthi-aks-opened.jpg, synthi-aks-closed.jpg, synthi-pin-matrix.jpg, lx200-jiamusi.jpg, lx200-emc.jpg, lx200-kl.jpg. Deleted lx200-afc.jpg (later ACF model — misleading).
- Google Patents blocked (503) for LX200 hand-controller patent search; Openverse found no CC hand-controller image. LX200 exhibit will use telescope photos with honest captioning.
- Note: model cannot view images directly; relied on Commons metadata for captions.

### 01:00 — Promotion decision
PROMOTE 3: VCR Plus+ (1990), EMS Synthi AKS (1972–1984), Meade LX200 (1992). All have sourced team detail, concrete interaction mechanics, and freely-licensed images (LX200 shows instrument, not handset — honest captions).

### 01:20 — Promotion (manual, promote-potentials.ts not run per known bugs)
- Wrote info.json for all three: potential/vcr-plus/, potential/ems-synthi-aks/, potential/meade-lx200/.
- Appended 3 wiki sections to docs/hci-wiki.md (format: By / Tags / Overview / Deep dive / Team / Media / Sources).
- Added 3 ToC entries (181-183) with GitHub-style anchors: vcr-plus-1990, ems-synthi-aks-1972-1984, meade-lx200-1992.
- Added 3 entries to src/data.ts (id/slug/wikiTitle/year/sortYear/title/subtitle/blurb/tags/image). wikiTitle matches parsed heading titles exactly.
- 7 images in assets/wiki/ (Commons CC/PD, verified with `file`).
- Archived the 3 new info.json files to info.json.archived (prevents future auto-promotion).

### 01:25 — Verification
- `bun run typecheck`: PASS (tsc --noEmit, no errors).
- `bun run build`: PASS — "Built static site ... (183 exhibits + blog + about, 235 pages)" (was 180/232).
- Spot-checked public/exhibits/vcr-plus/index.html: hero image renders from ../../assets/wiki/vcr-plus-1.jpg.
- Wiki: 188 sections, 183 ToC entries (pre-existing orphan sections remain).

### 01:30 — Memory
- Updated docs/beepy-memory.md: 3 new additions, 2 new deferred candidates (Seiko Receptor, Turbo Dashboard disproven), promotion gotchas (Google Patents 503, Openverse as CC aggregator, AKS copy caveats, image-view model limitation), build counts.

### 01:35 — End
Run complete. 3 artifacts added. Octen used: 6/7 (1 reserved, unused). Exa used: 0/2. Grok: 0.
