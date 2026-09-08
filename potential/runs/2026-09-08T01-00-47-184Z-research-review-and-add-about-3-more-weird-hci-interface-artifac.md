# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start
- Collection at 249 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 249).
- All potential/*/info.json archived (no active unpromoted candidates).
- Octen budget: 7 shared. Exa budget: 2 shared.

## Angles chosen (2026-09-08)
1. Retail/supermarket fixed-position barcode checkout scanning + early POS scanning hardware.
2. Public-information/library/directory computer kiosks & terminals with unusual navigation input.
3. Home/mass-market body-as-interface devices (tilt/gesture/body-position) beyond covered games.

## Subagent results
- Subagent 1 (POS scanning): Returned Symbol MS-1/MS-2 (image-blocked), IBM 3687 (image-blocked), Metrologic MS-2 (image-blocked), and FLAGGED the fixed-position Spectra-Physics Model A supermarket scanner which HAS a freely-licensed Commons image ("An old price scanner at a supermarket.jpg") + patent image. Fixed scanner interaction: cashier swipes items over a glass window.
- Subagent 2 (public kiosks): Returned "The Interactive Image" (Knowlton, 1988, trackball+stereoscopic 3D; image-blocked, no surviving artifact), PLATO V IR touch terminal (ALREADY IN MUSEUM - excluded), Murray Lappe 1977 Krannert kiosk (image-blocked), NLM catalog terminal (ordinary).
- Subagent 3 (body-as-interface): FAILED - fell into infinite deliberation loop (same failure pattern noted in memory for vague/music angles). No usable report.

## Next steps
- Verify fixed-position supermarket scanner image + distinctness; likely promote it.
- Seek 1-2 more strong, image-verified candidates via direct Commons/Octen since subagent 3 failed.

## Manager-side work (Octen exhausted by subagents 7/7)
- Octen budget fully consumed by the 3 subagents. Continued with direct Commons API + Wikipedia + direct curl (no Octen cost).
- Verified fixed supermarket checkout scanner images on Commons: "An old price scanner at a supermarket.jpg" (PD) + "U.S. Patent - Supermarket Scanner.jpg" (PD). Downloaded both to assets/wiki/, verified valid JPEGs.
- Discovered Casio DG-20 Digital Guitar (1987) now has CC-licensed images on Commons (was deferred 2026-07-30 as image-blocked): CASIO_DG-20_front_view.png (CC BY 4.0) + Lennart_with_Casio_Digital_Guitar.jpg (CC BY-SA 2.0). Downloaded, resized via PIL to web-usable 900px, saved to assets/wiki/.
- Checked Mattel Talk 'n Play (tape-driven interactive book reader) - image-blocked, and overlaps 2-XL/Terebikko tape-interactive family. NOT promoted.
- Checked handheld barcode "gun" scanners (Symbol MS-1/MS-2, IBM 3687) - all image-blocked. NOT promoted.

## Candidates selected for promotion (2)
1. Supermarket Checkout Laser Scanner (1974) - potential/supermarket-laser-scanner/info.json. Object-as-input over fixed glass window, the iconic checkout beep. Distinct from all handheld wand/barcode exhibits.
2. Casio DG-20 Digital Guitar (1987) - potential/casio-dg-20/info.json. Rubber-string + membrane-fretboard switch matrix hardwiring fret-to-pitch, no tracking. Consumer end distinct from SynthAxe.

## Next: promote both into collection (manual, per memory bugs in promote-potentials.ts)
