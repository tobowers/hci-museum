# Scout Run Summary — 2026-07-13T15:12 UTC

## What changed
- 1 exhibit added to the collection: **Sega AI Computer (1986)**
- Build count: 104 → 105 exhibits, 128 pages

## The artifact
**Sega AI Computer (1986)** — A rare Japanese children's educational computer combining a touch surface with swappable physical overlay sheets, speech recognition via microphone, ADPCM speech synthesis, and a Prolog-based natural language AI engine. Built by Yamaha for Sega with software by CSK Research Institute. 26+ software titles preserved by the SMS Power community; MAME emulation since 2024. Images sourced from SMS Power community preservation archive.

## How the research was done
- Archived 2 stale info.json files (liferower, soundspace) before running promote-potentials
- Launched 4 parallel hci-research-subagents:
  1. Obscure 1980s computer input devices
  2. Experimental CHI/SIGGRAPH HCI demos
  3. Weird electronic toy-computer bridges
  4. Japanese/European HCI rarities
- Performed targeted follow-up searches with Exa for piezo interfaces, deformable input, environmental sensors, early touchpads, voice-controlled arcade, and pen computers
- Most subagent findings were either software-only (not hardware artifacts), already in museum, already deferred, or had interaction models too standard

## Files written/modified
- `potential/runs/2026-07-13T15-12-04-010Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace
- `potential/runs/2026-07-13T15-12-04-010Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this summary
- `potential/sega-ai-computer/info.json` — research dossier
- `potential/sega-ai-computer/images/sega-ai-computer-unit.jpg` — main photo (324 KB)
- `potential/sega-ai-computer/images/sega-ai-computer-boot.png` — boot screen (8 KB)
- `potential/sega-ai-computer/images/sega-ai-computer-board.jpg` — board photo (14 KB)
- `docs/hci-wiki.md` — appended exhibit entry, updated ToC (#102), updated intro count, fixed image refs to local
- `src/data.ts` — manually added exhibit entry (script bug bypassed)
- `assets/wiki/sega-ai-computer-unit.jpg` — copied from potential
- `assets/wiki/sega-ai-computer-boot.png` — copied from potential
- `docs/beepy-memory.md` — updated new additions, deferred candidates, promotion gotchas
- `potential/liferower/info.json` → `info.json.archived`
- `potential/soundspace/info.json` → `info.json.archived`

## Verification
- `bun run typecheck`: PASSED (no errors)
- `bun run build`: PASSED (105 exhibits + blog + about, 128 pages)

## Deferred this run
- Captain Power Interactive Toys (1987) — borderline HCI, TV broadcast as "computer"
- All subagent software-only candidates
- All already-deferred candidates (respected previous deferrals)

## What still needs review
- Yamaha Breath Controller BC1/BC2 (1982) — long-deferred, could be viable for a future music/breath HCI batch
- SOUND=SPACE — deferred for images, revisit if extraction improves
- The candidate well is genuinely thin at 105 exhibits; future runs should expect 0-1 strong additions per session
