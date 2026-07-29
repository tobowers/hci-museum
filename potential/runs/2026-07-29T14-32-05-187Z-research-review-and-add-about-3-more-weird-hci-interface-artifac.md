# Trace: 2026-07-29 Add ~3 Weird HCI Artifacts

## Plan
- Fresh angles: scanning/OCR hardware, unusual game controllers, biometric readers with CC images, electronic notepads/pens, barcode readers, unusual music interfaces, medical HCI
- Launch 7 parallel subagents
- Verify CC images on Commons before building info.json
- Promote manually (script known broken)
- Build count at start: 132 exhibits, 129 ToC

## Log

### Subagents launched (7 parallel)
1. Scanning/OCR hardware - returned Datacopy 700 (CC images), ThunderScan (no CC), DigiView (no CC), Caere Typist (no CC)
2. Unusual game controllers - mostly already-in-museum/deferred; Miracle Piano (deferred), Intellivision ECS (possible)
3. Biometric/barcode - Cauzin Softstrip (already in museum); biometrics all image-blocked
4. Electronic notepads/pens - Linus Write-Top (CC image), Compaq Concerto (1993), Apple Graphics Tablet (CC0, overlaps with KoalaPad)
5. Unusual music interfaces - Roland MC-8 (CC images), Omnichord (CC images), EDP Wasp (CC images), Linn 9000, Simmons SDSV
6. Medical HCI - NeuroCom EquiTest (diagram only, no photo); everything else image-blocked
7. Network terminals - Quotron II (CC images), Bloomberg Terminal 1982 (CC images), IBM 3279 (CC images), MUPID (CC images), NABU Network PC (CC images)

### Top candidates selected for verification
1. Roland MC-8 MicroComposer (1977) - calculator-keypad music programming, ~200 units, CC images
2. Suzuki Omnichord (1981) - electronic strum plate + chord buttons, mass-market, CC images
3. Linus Write-Top (1988) - first pen computer with handwriting recognition, ~1,500 units, CC image
Also watching: Bloomberg Terminal 1982, NABU Network PC 1982

### Verifying CC images
- Roland MC-8: 2 CC images confirmed (CC BY-SA 2.5, CC BY 2.0)
- Suzuki Omnichord: 2 CC images confirmed (CC BY 2.0, CC BY-SA 4.0)
- Linus Write-Top: 1 PD image confirmed (PD US no notice 1978-1989)
- Bloomberg Terminal: CC images exist but modern (2012 era, not 1982 hardware)

### Info.json built
- potential/roland-mc8/info.json
- potential/omnichord/info.json
- potential/linus-writetop/info.json

### Images downloaded
- 5 images downloaded and verified as valid JPEGs via `file` command
- Copied to assets/wiki/ for promotion

### Promotion (manual, script not run)
- 3 entries added to src/data.ts
- 3 wiki sections appended to docs/hci-wiki.md
- ToC updated (entries 130-132)
- Wiki intro count updated: 132 -> 135

### Verification
- bun run typecheck: PASSED (no errors)
- bun run build: PASSED (135 exhibits + blog + about, 174 pages)

### Summary
- 3 new artifacts added: Roland MC-8 (1977), Suzuki Omnichord (1981), Linus Write-Top (1988)
- All have CC/PD images from Wikimedia Commons
- All have Wikipedia articles
- New total: 135 exhibits (+3 from 132)
- Productive discovery angles this run: music HCI (MC-8, Omnichord), pen computing (Write-Top)
- Unproductive: scanning/OCR (no new CC images), biometric (confirmed all image-blocked), medical (image-blocked), network terminals (good candidates but not selected this run)
