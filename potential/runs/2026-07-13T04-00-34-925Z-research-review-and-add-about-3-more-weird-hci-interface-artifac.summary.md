# Run Summary: 2026-07-13T04-00-34-925Z

## What Changed
- Added 1 new exhibit to the collection: **LifeRower (1986)** — Bally/Life Fitness commercial rowing machine with built-in CRT and video games
- Archived 86 stale potential/ info.json files (renamed to info.json.archived) to prevent accidental re-promotion
- Built info.json for LifeRower (potential/liferower/) and SOUND=SPACE (potential/soundspace/)

## Collection State
- Before: ~100 exhibits in wiki ToC
- After: 101 exhibits in wiki ToC, 104 in data.ts (build reports 104 exhibits)
- New exhibit: LifeRower (1986) — exergaming, rowing, game console

## Files Written/Modified
- `potential/soundspace/info.json` — Research dossier for SOUND=SPACE (not yet promoted)
- `potential/liferower/info.json` — Research dossier for LifeRower
- `potential/runs/2026-07-13T04-00-34-925Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — Run trace
- `docs/hci-wiki.md` — Added LifeRower ToC entry (#101) and complete exhibit section at end
- `src/data.ts` — Added LifeRower exhibit entry
- `assets/wiki/liferower-1.png` — Downloaded from National Videogame Museum (95KB)
- `assets/wiki/liferower-2.png` — Downloaded from National Videogame Museum (379KB)
- `potential/*/info.json` → `potential/*/info.json.archived` — 86 stale files archived

## Artifacts Added to Collection
1. **LifeRower (1986)** — Bally Manufacturing / Life Fitness. Motorola 6809 CPU, TI TMS9918 VDP, magnetic particle brake. Two built-in games (Pacer racing + Shark Chase). Rowing mechanism as game controller with optical encoder speed sensing. Commercially released to gyms at ~$2,000–3,000. Preserved at National Videogame Museum UK.

## Verification
- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (104 exhibits + blog + about, 126 pages)

## Deferred / Still Needs Review
- **SOUND=SPACE (1984-85)** — Info.json built and in potential/. Strongest candidate found in this run but needs reliable images before promotion. Gehlhaar.org has Google Sites embedded images; YouTube documentary exists (Musicworks 1996). Key blocking issue: no CC-licensed or freely-accessible exhibition photos found. Candidate for next run with image extraction from YouTube or Centre Pompidou archives.
- **Atari Project Puffer (1983)** — Excellent research completed. Exercise bike game controller for Atari 5200. Rich AtariHQ documentation. Deferred due to Suncom Aerobics Joystick already covering bike-to-game-input paradigm. Revisit when exergaming section gets thematic refresh.
- **C-5 Laser Cane (1981)** — Excellent research completed. Nurion-Raycal three-laser mobility cane. Five APH Museum images. Deferred primarily because it's more assistive/mobility aid than general HCI artifact. Multimodal feedback (audio + Nitinol tactile pin) is interesting.
- **Coconuts Japan Pachinko Controller (c. 1987)** — Spring-loaded plunger Famicom controller. Simple but real physics interface. Deferred for future run.
- **Questron Electronic Answer Wand (1987)** — Optical pattern recognition in books. Overlaps with Barcode Battler already in collection.

## Lessons Learned
- Subagent research found many strong candidates across diverse modalities
- Image availability remains the primary bottleneck for promotion
- Google Sites-hosted images (gehlhaar.org) are difficult to extract for reuse
- National Videogame Museum UK is a reliable source for institutional-quality images of obscure gaming-adjacent hardware
- Archiving stale info.json files before promotion is critical (86 files archived this run)
- Adding just 1 well-sourced exhibit is acceptable when quality filtering eliminates others
