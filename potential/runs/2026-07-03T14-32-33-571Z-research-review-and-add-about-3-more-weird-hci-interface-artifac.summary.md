# Run Summary: 2026-07-03 — Research and Add ~3 Weird HCI Artifacts

## What changed

Added 2 new exhibits to the HCI Museum collection:
1. **Cauzin Softstrip Reader (1985)** — Paper-to-digital scanning wand that turned magazine pages into computer storage media. First commercial 2D barcode. Co-founded by Xerox PARC founder Jack Goldman.
2. **Reading Electropalatography (EPG) System (1978)** — Custom-molded acrylic palate with 62 gold electrodes worn inside the mouth, turning tongue contact into real-time visual biofeedback for speech therapy.

## Collection state

- Before: 71 exhibits
- After: 73 exhibits
- Build: PASSED (73 exhibits + blog + about, 86 pages)
- Typecheck: PASSED

## Research process

- Launched 8 total subagents (4 initial discovery, 4 deep-dive)
- Filtered ~30 candidates down to 2 promoted
- Rejected candidates for: already-in-museum (4), already-deferred (0 found but double-checked), modality overlap (Mind Mirror EEG, Suncom JoySensor), insufficient image availability (IBM SpeechViewer), military context + PDF image extraction burden (TSAS Vest)

## Candidates still worth revisiting

- IBM SpeechViewer (1988) — If screenshots surface (ASHA archives, IBM corporate archives, eBay manuals), this is a strong candidate with a rich interaction story
- TSAS Vibrotactile Vest (1991) — Images exist in DTIC PDFs; needs PDF extraction and curatorial discussion about military context
- Hunter Digital Footmouse (1990) — Foot-operated cursor control; modest documentation but photos exist

## Deferred candidates added to memory

None were deferred this run — all reviewed candidates were either promoted or already deferred.

## Bug note

The promote-potentials.ts regex bug (data.ts replacement fails because `export const exhibits` appears between `];` and `export const featured`) is now a two-time-confirmed issue. Data.ts entries were added manually.

## Verification results

- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (73 exhibits, 86 pages)
- Images: all 8 downloaded, verified 200 OK, copied to assets/wiki/
- Wiki ToC: manually updated with new entries #72 and #73
- Wiki intro count: updated from "seventy-one" to "seventy-three"
- data.ts: 2 new entries manually added
