# Run Trace — 2026-09-05T12-32-03-344Z

Goal: research, review, and add ~3 more weird HCI interface artifacts from 1976–1992.

## Start state
- Build count: 241 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- All potential/*/info.json archived (0 active). 231 archived.
- Collection last grew 2026-09-04 (The Clapper, Caere OCR Wand).
- Memory: well is angle-dependent, not empty. Avoid exhausted angles (music HCI, scanning/OCR, biometric, game controllers, refreshable braille, foot controllers).

## Plan — 3 research subagents (parallel), fresh angles
Angle A: Early consumer/medical chart-recorder and analog-output instruments (physical pen plotting as output ritual).
Angle B: Early computerized home "intelligence" appliances where a physical ritual/token is the interface (beyond appliances already covered).
Angle C: Early computer-interfaced musical-instrument tuners / pitch-monitoring devices used as HCI (distinct from music controllers already covered).

Will refine based on subagent results. Octen budget shared = 7. Exa = 2.

## Subagent results
- **Angle A (chart recorders/medical output):** Strongest = Vitalograph Compact (c.1983), computerized spirometer whose paper printout is the ONLY output (no screen) and which prints a written interpretive verdict incl. "lung age." Great interaction story but ZERO freely-licensed images (only an unrelated 1969 Vitalograph). Also IBM 5880 ECG-over-telephone, HP 4700A — all image-blocked. Recommend only if image resolved.
- **Angle B (physical-ritual home appliances):** Strongest = HP-75C/D (1982/84) — handheld BASIC computer with BUILT-IN magnetic card reader (beside spacebar), module slots, barcode wand port (D), and appointment scheduler that can execute BASIC programs as a real-time-control appliance. Freely-licensed Commons images confirmed (HP-75D.jpg "Copyrighted free use", HP-75C). Also Honeywell Chronotherm pin-dial thermostat (no good image), TI-99/4A (cartridge console, familiar).
- **Angle C (tuners/pitch monitors):** Thin. Georgia Tech "Automatic ear training apparatus" US4321853 (1982, patent-only, no image). Korg quartz tuner pendants (1978, wearable but simple, no image). Peterson strobe tuners mostly pre-1976. Nothing promotable.

## Octen status
- Subagents consumed the full shared budget (7/7). Octen exhausted. Continue via direct webfetch, Wikipedia, Commons API (all free).

## Manager-side decision
- HP-75D = candidate 1 (physical software-token + scheduled-execution appliance; image-rich).
- Casio FX-7000G (1985, first graphing calculator) and HP-28C (1986, first symbolic-CAS calculator) both have excellent Commons images. Evaluating as candidates 2/3. Both distinct from TI-59 (numeric programmable).
- Vitalograph Compact strong interaction but image-blocked → deprioritized unless a usable representative free image is found.

## FINAL promotion decision
Promote 2 strong, distinct, image-solvable candidates (well is dry; fewer than 3 is acceptable):
1. **HP-75D (1982-86)** — handheld BASIC "personal intelligence appliance." Built-in magnetic card reader (cards insert beside spacebar, 2×650 bytes), 4 module slots, barcode-wand port (D), and appointment scheduler that can EXECUTE BASIC programs as real-time control (fires code on schedule). Interaction: physical tokens as software + a computer that wakes up on schedule. Distinct from TI-59 (external numeric card storage, no scheduler/computer). Images: HP-75D.jpg (Copyrighted free use) + HP-75C.jpg (CC BY 4.0).
2. **Casio FX-7000G (1985)** — the first graphing calculator. A 96×64 dot-matrix LCD turns the display into a plotting surface; the calculator draws user-defined and statistical graphs, bar/line/normal-distribution curves. Interaction: calculator-as-plotter — the shift from numeric readout to visual rendering. 422-byte tokenized programming. Distinct from all calculator exhibits. Images: FullLength.JPG (PD) + Box&Manual.JPG (PD).
- HP-28C (1986, first symbolic-CAS) deferred — strong but a third advanced handheld in one batch would saturate the category. Note as future candidate.
- Vitalograph Compact deferred (image-blocked) — strongest interaction story found but no freely-licensed image.

## Image downloads (all verified valid JPEGs)
- assets/wiki/hp-75d.jpg (1136×852)
- assets/wiki/hp-75c.jpg (2400×1250, CC BY 4.0)
- assets/wiki/casio-fx-7000g.jpg (1200×2300, PD)
- assets/wiki/casio-fx-7000g-box.jpg (2560×1920, PD)

## Promotion (manual, promote-potentials.ts NOT run — known bugs: no image copy, no data.ts update, no ToC update)
- Added 2 exhibits to src/data.ts (id, slug, wikiTitle, year, sortYear, title, subtitle, blurb, tags, image). Entries: hp-75d (sortYear 1982), casio-fx-7000g (sortYear 1985).
- Added 2 wiki sections to docs/hci-wiki.md (## HP-75C / HP-75D Portable Computer (1982), ## Casio FX-7000G Graphing Calculator (1985)) + 2 ToC entries (242, 243) + updated intro count "two hundred and forty-one" → "two hundred and forty-three".
- 4 images copied to assets/wiki/ and referenced via img() / ../assets/wiki paths (no remote hotlinks).
- info.json files archived as info.json.archived (0 active remain).

## Verification
- bun run typecheck: PASS (tsc --noEmit).
- bun run build: PASS — "Built static site ... (243 exhibits + blog + about, 322 pages)".
- Exhibit pages generated: public/exhibits/hp-75d/index.html, public/exhibits/casio-fx-7000g/index.html.
- data.ts true exhibit count via grep: 243 (matches build).
- wikiTitle matches parsed wiki heading character-for-character (build did not drop exhibits).

## Deferred this run (for memory)
- HP-28C (1986, first symbolic-CAS calculator) — strong, image-rich, but a third advanced handheld in one batch would saturate the calculator category. Future candidate.
- Vitalograph Compact (c.1983) — strongest interaction story found (paper-only output, machine prints its own "lung-age" verdict) but ZERO freely-licensed images. Revisit if image surfaces.
- Casio FX-7000GA (1990) is a successor, not separate.
- IBM 5880 / HP 4700A / Marquette MAC-1 interpretive ECG carts — image-blocked.
- Honeywell Chronotherm pin-dial thermostat — no good image; interaction is electromechanical not computerized.
- Georgia Tech ear-training apparatus US4321853 (1982) — patent-only, no image.
