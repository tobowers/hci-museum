# Run Summary: 2026-07-11 Research and Addition

## What changed

Added **3 artifacts** to the HCI Museum collection:

1. **Coleco Telstar Arcade (1977)** — Coleco's triangular 3-in-1 console where each face is a different controller (steering wheel, light gun, paddles). Physically rotate the unit to switch game modes. Each cartridge contains its own CPU. Designed by Ralph Baer's team at Sanders Associates. CC-licensed images from Wikimedia Commons.

2. **Street Fighter Pneumatic Controller (1987)** — Capcom's arcade cabinet with pneumatic force-sensing punch/kick pads. Striking the rubber pads compressed air in a piston chamber; a pressure sensor measured the spike to determine light/medium/heavy attacks. Players got bloody knuckles. Recalled after ~1,000 units. The pneumatic ROMs were lost until reverse-engineered in 2019. (Pre-existing info.json, auto-promoted by the script.)

3. **Vectrex Light Pen (1983)** — A light pen that shouldn't have worked on a vector display. GCE engineer John Ross invented a software tracking hack: an expanding bullseye pattern actively hunted for the pen's photodetector, inverting the normal light pen paradigm. Bundled with Art Master, AnimAction, and Melody Master cartridges. Invented by the same engineer who designed the Vectrex and its 3D Imager.

## Files written

### New info.json files:
- `potential/coleco-telstar-arcade/info.json`
- `potential/vectrex-light-pen/info.json`

### New images in assets/wiki/:
- `coleco-telstar-arcade-1.jpg` through `-4.jpg` (4 files, CC-licensed from Wikimedia)
- `sf1-pneumatic-1.jpg`, `-2.png`, `-3.png` (3 files)
- `vectrex-light-pen-1.jpg` through `-4.jpg` (4 files, fair use from Vectrex Museum, Hackaday, ArcadeArtwork, Wikimedia)

### Modified files:
- `src/data.ts` — Added 3 exhibit entries (manual edit, promote script regex bug)
- `docs/hci-wiki.md` — Appended 3 exhibit sections, updated ToC (95-97), fixed image refs to local paths
- `potential/runs/2026-07-11T13-54-54-262Z-*.md` — Trace and summary files

### Downloaded images in potential/:
- `potential/coleco-telstar-arcade/images/` (4 images)
- `potential/vectrex-light-pen/images/` (4 images)

## Verification results

- Typecheck: PASS
- Build: PASS (100 exhibits, 121 pages)
- data.ts: All 3 new slugs present
- wiki: Remote image URLs replaced with local assets/wiki/ paths
- Image files copied to assets/wiki/: 11 files verified

## What still needs review

- Wiki ToC was already incomplete when this run started (Surf Champ, Iwata Desktop Force Display, 2-XL promoted 2026-07-10 but their ToC entries are missing). This is a pre-existing issue, not caused by this run.
- The promote-potentials.ts regex bug (`/\n\];\s*\n\nexport const featured/`) should be fixed to match `export const exhibits` instead. This has been a known workaround since 2026-06-25.
- Vectrex Light Pen images are fair-use (Vectrex Museum, Hackaday), not CC-licensed. The Vectrex console photo is CC from Wikimedia. Acceptable per museum standards for hardware peripherals but noted.
- The sf1-pneumatic entry was auto-promoted from an existing unused info.json. It's a strong candidate but was not originally planned for this run. Its presence in the collection is serendipitous and welcome.

## Candidates evaluated but not promoted

- **CL9 CORE Remote (1987)** — Wozniak's first universal remote. Interesting story but HCI novelty too incremental for museum.
- **Milton Bradley Dark Tower (1981)** — Electronic game-master tower. Good interaction model but fair-use images only. Revisit in a future batch.
- **Famicom 3D System (1987)** — Overlaps with existing Vectrex 3D Imager and Sega SubRoc-3D.
- **Various smart home devices** (GE HomeMinder, Unity Systems, HyperTek HomeBrain) — Less aligned with museum's embodied-interaction focus.
- **Various research prototypes** (Blit Terminal, Rooms, NoteCards, Peridot, Multi-Touch 3D Tablet, Music Mouse, Kyma) — Software-only or overlapping with existing entries.

## Durable lessons for beepy-memory

- The `sf1-pneumatic` was promoted because a prior run had created a complete info.json but never promoted it. Be more diligent about cleaning up or archiving unpromoted potential/ directories.
- Vectrex Museum (vectrexmuseum.com) images should be added to the promotion gotchas list — some have gone stale (410 Gone). Test all URLs before building info.json.
- The `promote-potentials.ts` script's image copy function (`copyImages`) has a path resolution issue: it checks `fs.existsSync(src)` where `src` is a path from `savedImages` (e.g., `images/foo.jpg`) but doesn't prepend the potential directory. This causes silent image copy failures and falls back to remote URLs. Images must be manually copied to assets/wiki/ and wiki references manually updated.
