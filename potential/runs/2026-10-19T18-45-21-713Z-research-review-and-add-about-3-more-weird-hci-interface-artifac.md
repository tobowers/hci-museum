# Run trace: 2026-10-19 (second) research / review / add ~3 weird HCI artifacts

## Run start
- Collection count: 296 exhibits (src/data.ts).
- Read memory: docs/beepy-memory.md. Prior run (04:48) was zero-addition at 296.
- Well is dry for automated discovery; expect 0-1 additions. Pivot to fresh angles.
- Goal: ~3 weird HCI artifacts 1976-1992, favor strange/embodied/commercially odd/interaction-model-rich.

## Angles chosen (fresh, per memory guidance)
1. Industrial / rugged field data-capture devices with unusual physical input (beyond existing Telxon-deferred, Zeiss REC-100, Scantron).
2. Photographic/imaging computing peripherals — computer-linked photo/imaging instruments beyond already-covered (Dycam, Videoface, Polaroid Palette, ScanMan).
3. Early non-linear / digital audio editing & sampling workstations with distinctive hardware consoles (beyond covered Fairlight, Synclavier, PPG, EWI).

## Subagents launched (max 3, parallel)
- Research subagent A: angle 1
- Research subagent B: angle 2
- Research subagent C: angle 3

## Subagent results
- Subagent A (rugged field data): **Ferranti MRT-100/200** (image-verified CC BY-SA 4.0, clipboard survey ritual) STRONG; Husky Hunter (conventional); DataMyte/Telxon/MSI (image-blocked).
- Subagent B (photo/imaging): Barneyscan (interaction-strong but image-blocked); **Nikon QV-1000C** (image-verified, disk→transmitter→acoustic-coupler photojournalism) STRONG; Canon RC-701 (Mavica-adjacent).
- Subagent C (audio editing): **AMS AudioFile** (image-verified CC BY-SA 4.0, jog/shuttle + non-destructive EDL console, museum-held) STRONG; Audio Kinetics XT-24 (weak image); DAR SoundStation (image-blocked).

## Verification step
Verify images + source detail for the 3 strong image-verified candidates via direct Commons API before building info.json.

## Candidate verification
- Confirmed none of Ferranti MRT-100, Nikon QV-1000C, AMS AudioFile present in src/data.ts or docs/hci-wiki.md (grep clean).
- Near-neighbor audit:
  - Ferranti MRT-100: no near neighbor in collection (no field data-capture clipboard device). CLEAN.
  - Nikon QV-1000C: adjacent to Sony Mavica (in collection, 1981 prototype, camera→disk→viewer). Distinct angle = full photojournalism transmission chain (QT-1000C transmitter + acoustic coupler + phone line); commercial 1988 press system vs. 1981 prototype. Frame the transmission ritual explicitly to differentiate. KEEP.
  - AMS AudioFile: adjacent to PPG Waveterm B, Fairlight CMI, NED Synclavier (all light-pen waveform drawing / synth sampling). Distinct = first dedicated non-destructive hard-disk audio EDITING workstation (DAW) with jog/shuttle wheel scrub + EDL; not a synth/sampler. KEEP.
- Images: all three verified CC BY-SA 4.0 via Commons API; downloaded to potential/<slug>/ (ferranti uses MRT100...jpg; ams uses AMS_AUDIOFILE_CONSOLE.jpg). File sizes: MRT 1564x2100, QV1000C 2400x1800, AudioFile 4288x2848.
- info.json written for all three.

## Promotion completed
- Added 3 exhibits to src/data.ts (inserted before closing `];`): ferranti-mrt-100 (1983), ams-audiofile (1984), nikon-qv-1000c (1988). Count 296 -> 299.
- Resized + placed images in assets/wiki/: mrt100.jpg (894x1200), audiofile-console.jpg (1200x797), qv1000c.jpg (1200x900); Pillow, max 1200px, quality 86.
- docs/hci-wiki.md: intro count updated 295 -> 299; ToC appended entries 295-297; three full wiki sections appended at EOF with verified GitHub anchors (ferranti-mrt-100--mrt-200-market-research-terminal-1983, ams-audiofile-1984, nikon-qv-1000c-still-video-camera-system-1988). Anchor algorithm confirmed by slugger replication.
- Archived all three info.json -> info.json.archived.
- Verification: bun run typecheck (pass), bun run build (pass, "299 exhibits + blog + about, 419 pages").
