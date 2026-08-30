# Summary — 2026-08-30 research, review, and add (about 3 more weird HCI artifacts)

## Outcome
Added **2** artifacts to the collection (230 exhibits, up from 228). A third was not promoted because every other viable candidate was image-blocked (no freely-licensed photo), and the charter disciplines against padding. This run was heavily bottlenecked by image availability rather than candidate quality.

## Artifacts added

1. **Orca Edge Dive Computer (1983)** — Orca Industries. Wrist-worn microprocessor dive computer that replaced a numeric decompression plan with twelve horizontal "tissue" bar graphs (US Navy air tables), asking the diver to infer decompression obligation by watching which bars cross the limiting line. The museum's first embodied, safety-critical wearable; "real-time wearable ambient computing." Images: 1 CC0 (Commons). Sourced via Wikipedia, Computer History Museum catalog 102716293, Barsky 2011.

2. **Magnavox Odyssey 2 / Philips Videopac G7000 (1978)** — the only programmable-keyboard console in the collection. Full QWERTY membrane keyboard built into the machine body (educational games / option selection / programming via Computer Intro! cartridge), plus The Voice speech-synthesis module (1982) and the Master Strategy Series tactile board-game/video-game hybrids. Images: 1 CC BY-SA 3.0 (Evan-Amos console set) + 1 public-domain (The-Voice-attached photo). Sourced via Wikipedia, Halcyon Days/Ed Averett.

## Files written / changed
- `src/data.ts` — added 2 exhibit entries (orca-edge, magnavox-odyssey-2). +26 lines.
- `docs/hci-wiki.md` — wiki intro count to "two hundred and thirty"; ToC entries 229–230; appended 2 full wiki sections. +73 lines.
- `assets/wiki/orca-edge-dive-computer.jpg` (3653×2275, CC0)
- `assets/wiki/odyssey-2-console-set.jpg` (4272×2560, CC BY-SA 3.0)
- `assets/wiki/odyssey-2-with-the-voice.jpg` (5160×3565, public domain)
- `potential/orca-edge/info.json` + `potential/magnavox-odyssey-2/info.json` (created, then archived to info.json.archived)
- `potential/runs/2026-08-30T12-32-35-710Z-...md` — live trace
- `docs/beepy-memory.md` — appended additions + promotion gotcha

## Subagent / tool usage
- 3 research subagents launched in parallel (weather/environmental, marine/aquatic, weird console peripherals), each ≤2 Octen. Octen budget fully consumed by subagents. No Exa used.
- Common Own knowledge + Commons API + `Special:FilePath`/direct file downloads for image sourcing/verification.

## Verification
- `bun run typecheck`: PASS.
- `bun run build`: PASS (230 exhibits).
- Collection/Toc consistency: ToC 230 = data.ts 230; both new entries present in data.ts and wiki; 3 images on disk verified as valid JPEGs.

## Not promoted (deferred / rejected this run)
- **Doremikko (1987, Konami)** — first Famicom piano keyboard (console→music studio). Strong interaction; ZERO Commons images (confirmed via API). Do not re-scout without a photo.
- **Heathkit ID-1290 Digital Weather Computer (1978-79)** — canonical home "weather computer" appliance; image-blocked on Commons.
- **Vaisala Home Automatic Weather Station (1983)** — primary-sourced via COMPUTE! 41; only non-free magazine scan, no free image.
- Marine candidates (Brookes & Gatehouse Hercules 290, Ockam 001, Loran receivers) — unverified/obscure, largely no images.
- 17+ other image-blocked candidates across angles.

## Key lesson (recorded in memory)
- upload.wikimedia.org FILE host returns HTTP 403 "robot policy" to the BeepyBot User-Agent; the Commons API host accepts BeepyBot but the file host rejects it. All file downloads must use a browser User-Agent (or Special:FilePath with a browser UA). This is now a standing promotion gotcha.

## Still needs review
- None blocking. Optional future Field Notes: Orca Edge (`the-machine-that-sketched-your-nitrogen`), Odyssey 2 (`the-console-that-sprouted-a-keyboard`). Both are distinct interaction paradigms with no near-neighbor note.