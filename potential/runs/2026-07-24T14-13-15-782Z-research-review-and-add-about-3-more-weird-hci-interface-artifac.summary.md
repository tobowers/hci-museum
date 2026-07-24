# Run Summary: 2026-07-24 (Run 2)

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

**Collection at start:** 119 exhibits
**Collection at end:** 121 exhibits

## What changed

### Added to collection (2)

1. **Roland TR-808 Rhythm Composer (1980)** — The 16-button step-sequencer grid that transformed rhythm programming into a physical act of button-toggling. Roland Corporation, Tadao Kikumoto lead engineer. Commercial failure (~12,000 units) that became the most influential drum machine in history, foundational to hip-hop and electronic music. 2 CC-licensed images from Wikimedia Commons (Musical Instrument Museum Phoenix, and generic studio shot). Fills gap: grid-based pattern programming interface — nothing else in the museum uses a step-grid paradigm.

2. **Logitech 3D Mouse / Fly Mouse (1990)** — First ultrasonic 6-DOF mouse. Three acoustic emitters on a handheld body triangulated position via receivers on a monitor-mounted frame. Distinct physical principle (ultrasonic acoustic triangulation) from Polhemus Isotrak (magnetic, 1987) and DLR Control Ball (isometric force, 1981). Part of Logitech's early VR efforts. 2 CC-licensed images from Musée Bolo (EPFL). Fills gap: acoustic spatial tracking as a pointing paradigm.

### Deferred (1)

3. **Gavilan SC (1984)** — First laptop with a touchpad, predating Apple PowerBook touchpad by 10 years. Manny Fernandez, Gavilan Computer Corporation. Info.json built and archived at potential/gavilan-sc/info.json.archived. DEFERRED: interaction model (touchpad = finger-on-surface = cursor) overlaps with existing touch-surface devices (KoalaPad 1984, HP-150 Touchscreen 1983). The touchpad form factor (small dedicated cursor control surface on a laptop) is historically important but the HCI paradigm is incremental vs. existing entries. Good Commons image available. Revisit if touchpad/pointing-device section gets a thematic refresh.

## Research approach

5 parallel subagent angles explored:
1. **Telephony HCI** — Returned mostly service-based candidates (Moviefone, IBM voicemail system) with no physical artifacts. Motorola MicroTAC flip phone interesting but interaction model too incremental. No promotions from this angle.
2. **Medical/clinical HCI** — Nellcor N-100 pulse oximeter (sonification, 1 CC0 image) was borderline. Arthrobot (voice-controlled surgery, 1983) had no Commons images. AutoSyringe (Dean Kamen's insulin pump) no images. No promotions from this angle.
3. **Industrial control HCI** — F-16 sidestick/HOTAS, Boeing 757/767 glass cockpit, AH-64 IHADSS. All excellent images but military aviation context and overlap with existing museum entries. No promotions from this angle.
4. **Unusual pointing devices** — Logitech 3D Mouse discovered here (strong). Xerox CAT touchpad (1979) historically significant but no Commons images. Gavilan SC (1984) first laptop touchpad — borderline. Hawley perpendicular wheel mouse too incremental.
5. **Electronic music interfaces** — Roland TR-808 discovered here (strong). Simmons SDSV electronic drums (interaction = hitting pads, same as acoustic drums, weak). Very Nervous System (already deferred). Biomuse (already in museum). Casio SK-1 sampler (interaction model too conventional).

## Files written

- `potential/roland-tr-808/info.json` (archived after promotion)
- `potential/logitech-3d-mouse/info.json` (archived after promotion)
- `potential/gavilan-sc/info.json` (archived as deferred)
- `assets/wiki/tr808-mim.jpg` (5.3 MB, CC-BY-SA, Bryan Pocius)
- `assets/wiki/tr808-large.jpg` (3.5 MB, CC-BY-SA 2.0)
- `assets/wiki/logitech-3d-gradient.jpg` (2.3 MB, CC-BY-SA, Musée Bolo)
- `assets/wiki/logitech-3d-black.jpg` (1.6 MB, CC-BY-SA, Musée Bolo)

## Files edited

- `docs/hci-wiki.md` — Added wiki sections for both exhibits, fixed image references to local paths, updated ToC (116→118 entries)
- `src/data.ts` — Added two exhibit entries (Roland TR-808, Logitech 3D Mouse)

## Verification

- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (121 exhibits + blog + about, 155 pages)

## Stale info.json cleanup

Archived 3 stale info.json files from prior promotions before running promote-potentials.ts:
- `potential/minitel/info.json` → `.archived` (promoted 2026-07-24)
- `potential/logitech-fotoman/info.json` → `.archived` (promoted 2026-07-24)
- `potential/gavilan-sc/info.json` → `.archived` (deferred this run)

## Promotion gotchas encountered

- Confirmed again: promote-potentials.ts does NOT handle image copying, data.ts updates, or wiki ToC. All three done manually.
- Confirmed: need to archive stale info.json from prior promotions before running the script.
- Wikimedia Commons API requires proper User-Agent header and 2-3 second delays between downloads to avoid rate-limiting.

## What still needs review

- No remaining stale info.json files (verified: only .archived remain active in potential/)
- Wiki ToC now at 118 entries (matches exhibit count + ToC entries from the Minitel/Dycam run)
- Gavilan SC info.json archived for future revisit
