# Run Summary: 2026-07-14T14-14-13-174Z

## Goal
Research, review, and add about 3 weird HCI interface artifacts from 1976-1992.

## Artifacts Added to Collection
2 artifacts promoted:

1. **Dallas Semiconductor iButton (1990)** — A 16mm stainless steel microchip token that turned physical touch into digital identity. Contains a unique 64-bit serial number; touch it to a reader and the computer knows who you are. Uses 1-Wire protocol (data + power over a single conductor). Fills the physical-token-as-digital-identity gap. 2 CC-licensed Wikimedia images.

2. **TRS-80 Voice Synthesizer (1979)** — Radio Shack speech synthesis peripheral for TRS-80 Model I with an extraordinary interaction model: you programmed speech by writing ASCII phoneme codes directly into video memory. The synthesizer read the screen and spoke whatever phoneme string it found. No text-to-speech — pure phoneme-to-speech via screen memory mapping. $399, discontinued 1983. Fills standalone speech synthesis peripheral gap.

## Artifacts Deferred
1. **Kansai Seiki U-235 Meltdown / Mind Control (1987/1992)** — Pneumatic tube-and-ball arcade game. Deferred: arcade novelty rather than general HCI; blog-sourced images.
2. **DECtalk DTC01 (1984)** — Iconic 16-lb standalone TTS with 9 voices and phone integration. Deferred: less distinctive interaction model; speech-heavy collection.

## Files Written/Modified
- `potential/trs80-voice-synthesizer/info.json` — new candidate research file
- `potential/ibutton/info.json` — new candidate research file
- `potential/u235-meltdown/info.json` — new candidate research file (then archived)
- `potential/u235-meltdown/info.json.archived-2026-07-14` — deferred, archived
- `docs/hci-wiki.md` — added 2 exhibits, updated ToC (entries 103-104), updated count to 107
- `src/data.ts` — added 2 exhibit data entries
- `assets/wiki/trs80-voice-synthesizer.jpg` — downloaded local image (25KB)
- `assets/wiki/ibutton-token.jpg` — downloaded local image (316KB)
- `assets/wiki/ibutton-java-ring.jpg` — downloaded local image (643KB)
- `docs/beepy-memory.md` — added new additions + deferred candidates for 2026-07-14
- `potential/runs/2026-07-14T14-14-13-174Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — full trace

## Verification
- `bun run typecheck`: PASSED (no errors)
- `bun run build`: SUCCESS (107 exhibits + blog + about, 131 pages)

## Archival
- All other stale info.json files in potential/ were archived as `info.json.archived-2026-07-14`

## Collection State
- 107 exhibits total (was 105)
- Wiki ToC now has 104 entries (was 102) — discrepancy persists from earlier unrecorded ToC entries
- Candidate well remains thin; future runs should expect 0-1 strong candidates
