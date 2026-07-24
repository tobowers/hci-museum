# Run Summary — 2026-07-24

## What changed
- **2 new exhibits added** to the HCI Museum collection
- Collection grows from 117 to 119 exhibits
- Two new categories introduced: public-access kiosks and digital cameras

## Artifacts added

### 1. Minitel (1982)
- **Category**: Public Kiosk, Videotex, Telecommunications, Network Terminal
- **By**: France Télécom / PTT
- **Key stats**: 9 million terminals distributed free, 25 million users, 30-year run (1982–2012)
- **Interaction model**: Dedicated keyboard+CRT+modem terminal. Numeric access codes (3615), text-based Videotex menus, built-in billing via phone bill. First mass-market chat (messageries roses).
- **Images**: 3 CC-licensed images from Wikimedia Commons (Tieum, Philafrenzy, DMontagne en résidence)
- **Slug**: minitel

### 2. Dycam Model 1 / Logitech Fotoman (1990)
- **Category**: Digital Camera, Computer Peripheral, Image Capture, Input Device
- **By**: Dycam Inc.; Logitech (Fotoman FM-1)
- **Key stats**: $995, first US consumer digital camera, one button, no LCD, volatile DRAM, fake shutter sound
- **Interaction model**: Camera as pure computer peripheral. Single shutter button; all settings (flash, exposure) controlled via PC software. Images held in volatile memory — dead battery = lost photos. Skeuomorphic fake shutter sound via speaker.
- **Images**: 3 CC-licensed images from Wikimedia Commons (Rama, Musée Bolo / EPFL)
- **Slug**: dycam-model-1

## Files written
- `potential/minitel/info.json` — complete research dossier
- `potential/logitech-fotoman/info.json` — complete research dossier
- `assets/wiki/minitel1.jpg` — Minitel 1 terminal photo (Tieum, GFDL/CC BY-SA 3.0)
- `assets/wiki/minitel-b1.jpg` — Minitel 1B powered on (Philafrenzy, CC BY-SA 4.0)
- `assets/wiki/minitel-radiotechnique.jpg` — Minitel NFZ 300 (DMontagne, CC BY 4.0)
- `assets/wiki/fotoman-black.jpg` — Fotoman 1st gen (Rama, CC BY-SA 3.0)
- `assets/wiki/fotoman-white.jpg` — Fotoman 2nd gen (Rama, CC BY-SA 3.0)
- `assets/wiki/fotoman-crop.jpg` — Fotoman detail (Rama, CC BY-SA 3.0)
- `potential/runs/2026-07-24T03-44-35-229Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — run trace
- `potential/runs/2026-07-24T03-44-35-229Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file

## Files edited
- `docs/hci-wiki.md` — Added 2 exhibit sections, 2 ToC entries, updated intro count (114→116)
- `src/data.ts` — Added 2 exhibit entries (minitel, dycam-model-1)

## Verification
- `bun run typecheck`: PASS (clean, no errors)
- `bun run build`: PASS (119 exhibits, 152 pages)

## Candidates considered but not promoted
- **Magellan NAV 1000 (1989)**: Strong HCI story (first consumer GPS, Desert Storm), but ZERO CC-licensed images on Wikimedia Commons. Smithsonian and CHM reportedly hold units.
- **QUBE (1977)**: Interactive TV with 18-button remote. Good images, but interaction model (buttons on a remote) is not distinctive enough for museum.
- **HP-01 Calculator Watch (1977)**: Stylus-on-wrist computing. Good images, but interaction model is incremental (calculator on a wrist).
- **Atari Skydiver (1978)**: Ripcord controller. Novel mechanical principle, but images from arcade-museum.com (not CC).
- **Hall Effect Keyboard (1970s-80s)**: Novel physics under the hood, but the interaction model (typing on a keyboard) is the same as any keyboard.

## Key lessons
- The museum now covers two entirely new categories: public-access kiosks (Minitel) and digital cameras as computer peripherals (Dycam/Fotoman)
- Both candidates were reachable through standard research angles that hadn't been pursued in prior dry-well runs
- The candidate well is not structurally dry — it was a matter of asking different questions. Categories like "early consumer digital cameras" and "public-access terminals" were simply never searched.
- Image availability remains the dominant bottleneck. Magellan NAV 1000 was the third-strongest candidate but has no open-licensed images.
