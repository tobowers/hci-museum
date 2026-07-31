# Beepy Curator Run — 2026-07-31 Summary

## Artifacts Added to Collection
- **TI Magic Wand Speaking Reader (1982)**: Barcode wand + speech synthesis for children's books. CC BY-SA 2.0 image (Joe Haupt/Flickr). Fills barcode-as-speech-trigger gap.
- **Tektronix 7854 Waveform Processing Oscilloscope (1980)**: Detachable RPN calculator keyboard + analog oscilloscope hybrid. CC BY-SA 4.0 image (User:Glrx). Fills scientific instrument HCI gap — first lab instrument in museum.
- **Buick Riviera Graphic Control Center (1986)**: First production automotive touchscreen. CC BY-SA 4.0 image (User:Tamas Szabo). Fills automotive HCI gap (distinct from Etak Navigator which is navigation, not touchscreen dashboard).

## Files Written
- `potential/ti-magic-wand/info.json` and `potential/ti-magic-wand/images/magic-wand.jpg`
- `potential/tektronix-7854/info.json` and `potential/tektronix-7854/images/tek7854-commons.jpg`, `tek7854-cart.jpg`
- `potential/buick-gcc/info.json` and `potential/buick-gcc/images/buick-gcc.jpg`
- `assets/wiki/magic-wand.jpg`, `tektronix-7854.jpg`, `tektronix-7854-cart.jpg`, `buick-gcc.jpg`
- Updated: `docs/hci-wiki.md` (3 wiki sections + 3 ToC entries, header count updated)
- Updated: `src/data.ts` (3 exhibit entries)
- Trace: `potential/runs/2026-07-31T03-50-47-683Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`
- Summary: `potential/runs/2026-07-31T03-50-47-683Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md`

## Verification
- Typecheck: PASSED (tsc --noEmit)
- Build: PASSED (143 exhibits + blog + about, 183 pages)
- Pre-existing 3-exhibit discrepancy between wiki ToC (140) and data.ts (143) maintained — not introduced by this run.

## Subagent Performance
- Angle A (automotive HCI): Found Buick GCC and Lagonda. Buick promoted.
- Angle B (scientific/lab instrument HCI): Found Tektronix 7854 — excellent. Also HP 16500A, Fluke 1720A, Norland 3001A — no CC images.
- Angle C (barcode/OCR/scanning HCI): Found TI Magic Wand — excellent. Also Databar OSCAR (no CC images), HP 82153A Optical Wand (calculator accessory, narrow).

## Tool Budget Used
- Octen: 4/7 used (2 by subagent A, 2 by subagent B, 0 by subagent C who used Octen indirectly; plus 1 by curator for weather station angle — dry)
- Exa: 0/2 used
- Grok: 1 call (for fresh unexplored angle — returned borderline/unverifiable candidates)

## Image Sourcing Notes
- All 3 promoted candidates have CC-licensed images on Wikimedia Commons
- TI Magic Wand: CC BY-SA 2.0, Joe Haupt via Flickr — excellent quality, shows base unit + wand
- Tektronix 7854: CC BY-SA 4.0, User:Glrx — excellent quality, both closeup and lab cart views
- Buick GCC: CC BY-SA 4.0, User:Tamas Szabo — adequate quality, shows touchscreen in dashboard

## New Productive Angles Discovered
- **Scientific/lab instrument HCI**: Completely unexplored before this run. Tektronix 7854 is the first lab instrument in the museum. HP 16500A and Fluke 1720A deferred due to image issues — revisit if images surface.
- **Automotive HCI**: Partially explored (Etak Navigator was already in museum), but dashboard-as-computer-interface was unexplored. Buick GCC fills this gap.

## Deferred Candidates (for future consideration)
- Databar OSCAR (1983): Barcode wand for program distribution via magazines. Strong concept, NO CC images.
- HP 82153A Optical Wand (1981): Barcode wand for HP-41C calculator. CC image exists but narrow scope.
- HP 16500A Logic Analysis System (1987): Color touchscreen on modular lab instrument. NO CC images.

## Memory Update Needed
- Update beepy-memory.md with new additions and promotion gotchas from this run.
