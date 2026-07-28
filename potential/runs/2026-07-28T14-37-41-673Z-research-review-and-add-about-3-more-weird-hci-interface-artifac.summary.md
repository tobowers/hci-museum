# Run Summary: 2026-07-28T14-37-41-673Z

## Outcome: 4 artifacts added to collection (132 total)

## What changed

### New collection exhibits (4)

1. **TI Silent 700 Model 745 (1975)**
   - Slug: `ti-silent-700`
   - Portable thermal terminal with built-in acoustic coupler. 13-pound briefcase where you place a telephone handset into rubber cups to go online. Thermal paper output, near-silent printing, 30 cps. $1,995 in 1976.
   - Images: 4 downloaded (ti-silent-700-open.jpg, closed, rear, switches) — Wikimedia Commons, PD + CC BY-SA 4.0
   - Distinct interaction: self-contained terminal with acoustic coupler — different from Novation CAT (modem only) and Minitel (videotex terminal). The physical ritual of dialing and placing the handset in rubber cups.

2. **Hayes Smartmodem 300 (1981)**
   - Slug: `hayes-smartmodem`
   - First software-controlled modem. AT command set, +++ escape sequence, internal speaker for audio feedback. $279, 140K units/year within two years. Created the BBS revolution.
   - Images: 3 downloaded (hero, rear, profile) — Wikimedia Commons, CC BY-SA 4.0 by Aeroid
   - Distinct interaction: software-controlled telephony — the paradigm shift from manual/acoustic modems to programmable modems. Complements Novation CAT (acoustic coupler era) in the collection.

3. **Commodore 1520 / Atari 1020 Printer Plotter (1983)**
   - Slug: `commodore-1520-plotter`
   - Miniature 4-color pen plotter using ALPS DPG1302 mechanism. Paper whips back and forth, 4-pen turret clicks between colors, solenoid hammers pen down. $199–$299. Rebadged by 8+ manufacturers.
   - Images: 4 downloaded (Commodore hero, Atari front, internals with cover off, example printout) — Wikimedia Commons, PD + CC BY-SA 4.0 + CC0
   - Distinct interaction: physical output as mechanical spectacle — nothing like it in the museum. Distinct from Big Trak/Topo (floor robots) and Aesthedes/Paintbox (screen-based workstations).

4. **Rainbow Sentinel Dongle (1984)**
   - Slug: `rainbow-sentinel`
   - Hardware copy-protection key for parallel port. Physical block with custom IC (part numbers ground off). No dongle = software won't run. Daisy-chainable. Pournelle's BYTE column captured user paranoia.
   - Images: 3 downloaded (front PCB, back PCB, daisy-chain) — Wikimedia Commons, CC BY-SA 4.0
   - Distinct interaction: physical key for software — completely new paradigm in the collection. Software as something you need a physical object to unlock.

## Files written

### Collection files (modified)
- `docs/hci-wiki.md` — Added 4 wiki sections (~400 lines) + updated ToC (entries 126–129) + updated header count (128→132)
- `src/data.ts` — Added 4 Exhibit entries (~80 lines)

### Image files (14 new)
- `assets/wiki/ti-silent-700-open.jpg`
- `assets/wiki/ti-silent-700-closed.jpg`
- `assets/wiki/ti-silent-700-rear.jpg`
- `assets/wiki/ti-silent-700-switches.jpg`
- `assets/wiki/hayes-smartmodem-hero.jpg`
- `assets/wiki/hayes-smartmodem-rear.jpg`
- `assets/wiki/hayes-smartmodem-profile.jpg`
- `assets/wiki/commodore-1520-hero.jpg`
- `assets/wiki/atari-1020-front.jpg`
- `assets/wiki/atari-1020-internals.jpg`
- `assets/wiki/atari-1020-printout.jpg`
- `assets/wiki/rainbow-sentinel-front.jpg`
- `assets/wiki/rainbow-sentinel-back.jpg`
- `assets/wiki/rainbow-sentinel-chain.jpg`

### Research files (new)
- `potential/commodore-1520-plotter/info.json`
- `potential/hayes-smartmodem/info.json`
- `potential/rainbow-sentinel/info.json`
- `potential/ti-silent-700/info.json`

### Trace files (new)
- `potential/runs/2026-07-28T14-37-41-673Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-07-28T14-37-41-673Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Verification results
- `bun run typecheck`: PASS (no errors)
- `bun run build`: PASS (132 exhibits + blog + about, 170 pages)

## Research angles used
7 parallel subagents:
- Angle A: scanning/OCR hardware — ThunderScan found (no CC images), others image-blocked
- Angle B: consumer GPS/navigation — ALL image-blocked (confirmed pattern)
- Angle C: unusual game controllers — BUST (returned already-in-museum items)
- Angle D: pen plotters/drawing machines — Commodore 1520 (EXCELLENT), HP 7470A (1 image), Roland DXY (unverified)
- Angle E: smart cards/token-based access — Rainbow Sentinel (EXCELLENT), Moreno Smart Card (1975 borderline), VingCard (weak images)
- Angle F: fax as computer peripheral — GammaFax (no images), Famicom Network System (already in museum), Panasonic KX-F90 (commodity fax)
- Angle G: telephone-based computer services — TI Silent 700 (EXCELLENT), Hayes Smartmodem (EXCELLENT), AT&T Sceptre (no images)

3 of 7 angles were productive; 4 of 7 were unproductive (image-blocked or duplicate returns). This is a normal yield rate at 128+ exhibits.

## Productive angles proven in this run
- **Physical output devices as mechanical performance**: pen plotters were a completely unexplored category. The Commodore 1520/Atari 1020 had excellent CC images.
- **Telephony/computer interface hardware**: both the TI Silent 700 (portable terminal) and Hayes Smartmodem (programmable modem) filled distinct gaps in the telephony narrative already started by Novation CAT, Famicom Network System, and Minitel.
- **Physical security tokens**: the Rainbow Sentinel dongle explores a completely new HCI paradigm — physical objects as software access keys.

## What still needs review
- HP 7470A (1982) — has 1 Commons image, strong interaction model. Could be a candidate for a future run.
- ThunderScan (1984) — great concept (printer cartridge IS scanner), but ZERO Commons images. Needs CHM image extraction.
- Roland Moreno Smart Card Prototype (1975) — borderline year, strong images. Revisit if smart card section develops.

## Promotion gotchas (this run)
- All promotion done manually (same as prior runs). promote-potentials.ts NOT run.
- No stale info.json files to worry about — all 4 slugs were new (not in potential/).
- 14 images total — biggest single-run image download. All verified with `file` command as valid JPEGs.
- Build count: 132 exhibits. Wiki ToC count: 129 (properly updated).
