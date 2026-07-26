# Run summary: 2026-07-26T03-55-57-034Z

## What happened

Research, review, and add weird HCI interface artifacts from 1976-1992.

## Collection changes

Added 2 new exhibits to the museum:

### 1. ThunderScan (1984)
- **By:** Thunderware Inc. (Tom Petrie, Victor Bull, Andy Hertzfeld)
- **What:** $200 optical sensor cartridge that replaced the ribbon in an Apple ImageWriter printer, temporarily turning the printer into a grayscale scanner. Purely analog hardware (optical sensor → op-amp → voltage-to-frequency converter → single wire to serial port clock pin). All intelligence in software, written by Andy Hertzfeld. 100,000 units sold.
- **HCI significance:** Output device repurposed as input device. The physical ritual is inverted: feed printed paper IN, get digital image OUT on screen. The V-to-F converter + serial port clock pin is a breathtakingly clever hardware hack.
- **Images:** 3 images from beefchicken.com reverse-engineering project (cartridge in printer, adapter box, internal PCB showing analog-only components)
- **Sources:** Folklore.org (Hertzfeld's account), Hackaday, beefchicken.com teardown, CHM catalog #102673216

### 2. VOTEM (VOltage TEMperature) (1982)
- **By:** Down East Computers (Ray Mills, Alger Salt)
- **What:** $59.95 sensor interface for Timex/Sinclair computers. Used an Analog Devices AD537 voltage-to-frequency converter to encode DC voltages as audible tones, piped into the computer through its cassette tape port. DIP switch selected between internal temperature, external probe, and voltage input.
- **HCI significance:** The cassette port as general-purpose ADC. No additional interface hardware needed — just encode a voltage as frequency and let the computer count zero-crossings. Flew on Space Shuttle, used in kidney reprocessing systems. Both stories are documented.
- **Images:** 3 CC-BY-SA 4.0 images from timexsinclair.com (main PCB, front, back)
- **Sources:** timexsinclair.com product page and articles (CC-BY-SA 4.0 licensed)

## Files changed
- `potential/thunderscan/info.json` — new candidate file
- `potential/votem/info.json` — new candidate file
- `potential/thunderscan/images/*.jpg` — 3 downloaded images
- `potential/votem/images/*.jpg` — 3 downloaded images
- `docs/hci-wiki.md` — added ThunderScan and VOTEM sections, updated ToC
- `src/data.ts` — added 2 new exhibit entries
- `assets/wiki/thunderscan-*.jpg` — 3 images
- `assets/wiki/votem-*.jpg` — 3 images
- `potential/cracklebox/info.json` → archived as `.archived`
- `potential/novation-cat/info.json` → archived as `.archived`
- `potential/topo/info.json` → archived as `.archived`
- `potential/runs/2026-07-26T03-55-57-034Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — run trace
- `potential/runs/2026-07-26T03-55-57-034Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

## Verification
- `bun run typecheck` — passed (no errors)
- `bun run build` — passed (124 exhibits + blog + about, 159 pages)

## Research method
8 parallel hci-research-subagents covering: unusual music interfaces, scanning/OCR/image capture, pressure/force input, unusual game controllers, telephony HCI, education/CAI hardware, analog/physical-to-digital, and terminal/kiosk hardware. Grok was attempted but timed out. Exa out of credits (confirmed across multiple runs).

Two candidates promoted from approximately 40 candidates returned by subagents. Most candidates were: already in museum, already deferred, image-blocked, outside the era window, or had insufficiently novel interaction models.

## Candidates deferred (this run)
- None built to info.json stage. These were noted but not pursued:
  - TI Touch & Tell (1981): DataMath images not CC-licensed
  - GeoSafari (1987): Wikipedia CC-BY-SA but interaction model too simple (type a number)
  - Databar OSCAR (1983): CC BY-NC from Tangible Media Collection, overlaps with Cauzin Softstrip
  - Mouse Systems PageBrush (1990): Cool wiping metaphor but no CC images
  - Caere Typist (1990): "Scanning as typing" but no CC images
  - BTX Colani Terminal (1986): Museum images but interaction is basic keyboard videotex
  - WorldKey Kiosks (1982): Great story but only blog images

## Lessons learned
- New productive angle: printer peripherals as interactive devices (ThunderScan). No prior artifact in museum uses printer hardware as input.
- The timexsinclair.com site is CC-BY-SA 4.0 and a viable image source for Timex/Sinclair peripherals.
- The beefchicken.com reverse-engineering site has quality technical photos usable with attribution.
- Grok continues to time out on complex queries (2 attempts, both timed out). Consider shorter prompts or skip.
- Exa remains out of credits (confirmed again).
- The candidate well at 124 exhibits is very thin. Subagents returned ~80% already-in-museum or already-deferred candidates. 2 additions this run is good.

## Still to review
- Image resolution for any remaining deferred candidates (Braille 'n Speak, Tomy Verbot, LEGO TC Logo, SOUND=SPACE, etc.)
- Potential for a ThunderScan Field Note (Hertzfeld story is excellent blog material)
- Potential for a VOTEM Field Note (Space Shuttle + kidney reprocessing stories)
