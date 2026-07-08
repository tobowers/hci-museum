# Research Run Summary — 2026-07-08T14:41:24.581Z

## What changed

Added 2 new artifacts to the HCI Museum collection (90 → 92 exhibits).

### Added to collection

**Sega SubRoc-3D (1982)**
- First commercial stereoscopic 3D video game
- Mechanical spinning-shutter periscope viewer — player presses face against the cabinet
- Co-developed by Sega (Shikanosuke Ochi) and Matsushita (Panasonic)
- CC-BY 4.0 images from Sega Retro
- Tags: 3D Display, Arcade, Embodied Interaction, Periscope

**Bandai Terebikko (See 'n Say Video Phone) (1988)**
- Interactive VHS system shaped like a toy telephone
- DTMF-like audio control tones in VHS tapes — characters "call" the child
- 33+ licensed anime tapes (Super Mario, Dragon Ball Z, Sailor Moon, Anpanman)
- Mattel US release as "See 'n Say Video Phone" (1989)
- Tags: Interactive Television, VHS, Toy, Japan, Consumer Electronics

### Rejected candidates
- Nintendo Arm Wrestling (1985) — debunked force-feedback myth; passive spring joystick only
- Teletact/AirGlove (1990-91) — one tiny embedded JPEG in PDF; insufficient imagery
- Namco Libble Rabble (1983) — game design innovation, not HCI hardware
- Exus Foot Craz (1983) / Stompin' (1986) — overlap with existing Power Pad/Joyboard

### Files written
- `potential/segarc-3d/info.json` — new candidate research
- `potential/bandai-terebikko/info.json` — new candidate research
- `potential/segarc-3d/images/subroc3d-cabinet-upright.jpg` — CC-BY 4.0 from Sega Retro
- `potential/segarc-3d/images/subroc3d-cabinet-deluxe.png` — CC-BY 4.0 from Sega Retro
- `potential/bandai-terebikko/images/terebikko-system.jpg` — Wikipedia fair use
- `potential/bandai-terebikko/images/terebikko-logo.png` — Wikipedia fair use
- `assets/wiki/subroc3d-cabinet-upright.jpg` — local copy for display
- `assets/wiki/subroc3d-cabinet-deluxe.png` — local copy for display
- `assets/wiki/terebikko-system.jpg` — local copy for display

### Files modified
- `src/data.ts` — added 2 new Exhibit entries (promotion script bug workaround)
- `docs/hci-wiki.md` — appended 2 wiki sections, updated ToC (92 entries), replaced remote image URLs with local paths
- `docs/beepy-memory.md` — added notes on Nintendo Arm Wrestling (deferred) and both promoted candidates

### Archived
- `potential/aesthedes/info.json` → `info.json.archived` (deferred, was auto-promoting)
- `potential/buchla-lightning/info.json` → `info.json.archived` (deferred, was auto-promoting)

### Verification
- `bun run typecheck`: PASS
- `bun run build`: PASS — 92 exhibits + blog + about, 110 pages

### What still needs review
- Bandai Terebikko images are Wikipedia fair use, not CC-licensed. Acceptable for educational museum use.
- Sega SubRoc-3D images are CC-BY 4.0 from Sega Retro — properly attributed.
- Wiki anchor links for new ToC entries may need adjustment (parentheses handling in headings is complex in GitHub-flavored Markdown).

### Known promotion script bugs (still present)
- `promote-potentials.ts` silently drops data.ts entries due to regex mismatch with `export const exhibits` between `];` and `export const featured`.
- `promote-potentials.ts` does not auto-update the wiki Table of Contents.
- Workaround: manually edit data.ts, wiki ToC, and image paths after each promotion batch.
