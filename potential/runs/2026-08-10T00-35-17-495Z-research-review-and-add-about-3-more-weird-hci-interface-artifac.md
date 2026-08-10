# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Preflight (2026-08-10)
- Repo state: data.ts has 172 exhibits (`wikiTitle:` count). Wiki has 176 `## ` sections incl. ToC/appendices.
- potential/: archived 2 stale active info.json files (`apricot-portable`, `teddy-ruxpin`) to `info.json.archived` — both already in the collection and would have been auto-promoted by the script.
- Remaining active info.json in potential/: none.
- Plan: 3 research subagents in parallel, each ≤2 Octen searches (shared run budget = 7 Octen, 2 Exa).
- Angles chosen (fresh, previously-unexplored categories):
  1. Consumer voice-recognition toys/devices 1976-1992 (MB Omni, Mattel Einstein, Scott Instruments VET-2...)
  2. Barcode/touch-controlled interactive videodisc players & training kiosks (Pioneer PR-7820/CLD-V1000, IBM InfoWindow, Sony VIEW...)
  3. Unusual physical-principle game/consumer input devices not already in the collection (tilt/sound/light/squeeze/breath-based).

## Research round 1 (3 parallel subagents; Octen budget: 7 used, 0 left; Exa: 1 used)
- Subagent A (consumer voice-recognition toys): TI Voyager (1988) STRONG new find — keyboardless toy, speak-only input, 4-word recognition, 8 speech-ROM modules. MB Omni debunked (it's an 8-track quiz console). Mattel Einstein unverifiable. Scott Instruments VET-2 overlaps Covox. Tomy Verbot re-confirmed image-blocked.
- Subagent B (interactive videodisc): Pioneer LaserBarcode (CLD-V1000 era, c.1985) barcode-wand video control; Sony VIEW System (1984-85, EIDS) PC-with-laserdisc; IBM InfoWindow (touchscreen kiosk, interaction covered by HP-150 — rejected); PR-7820 (external computer control — not interaction-distinctive).
- Subagent C (unusual game input): all returns were already-in-museum (Barcode Battler, RDI Halcyon) or in-museum-adjacent (Fidelity Voice Chess 1979 = dup of in-museum 1980 Voice Sensory). Discs of Tron turbo dial marginal + no images. No new candidates from this angle.
- Octen #7 (last, mine): Quicktionary pen OCR — mostly mid-90s product, rejected.

## Candidate selection
- TI Voyager (1988) — ACCEPTED. Verified via datamath.org (specs, chips TSP50C41/TSP60C19, Flex-PCB headset, 8 modules, manuals).
- Pioneer LaserBarcode (c.1985) — ACCEPTED. Verified via geodatasys.com (UC-V109BC pen wand, UC-V108BC, BarKoder/Bar 'n Coder software, LaserBarcode standards).
- Sony VIEW System (1984-85) — ACCEPTED. Verified via vintagecomputer.ca (VIW-5000A photos) + goodoldbits.wordpress.com (EIDS RFQ, single-media boot, still-frame audio, 4KB/frame, LDP-2000 expansion board, IEEE-488). NOTE: in EIDS config MS-DOS booted from built-in ROM disk while courseware loaded from the videodisc (not full OS-from-disc); described accurately.
- Images: 12 downloaded & file-verified (4 Voyager, 3 LaserBarcode, 5 VIEW). All HTTP 200. Sources: Datamath, GeoDataSys, VintageComputer.ca — non-CC, attributed captions (per Tachi Lab / SMS Power precedent).
- info.json written for all three.

## Promotion plan
- promote-potentials.ts is known-broken (data.ts regex, no image copy, no ToC update) — do manual edits:
  1. Copy images to assets/wiki/
  2. Add 3 entries to src/data.ts
  3. Add 3 wiki sections + 3 ToC entries in docs/hci-wiki.md
  4. typecheck + build
