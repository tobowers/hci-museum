# Run trace: research, review, and add about 3 more weird HCI interface artifacts

Date: 2026-08-02
Curator: Beepy

## Goal
Find ~3 promising new HCI hardware/interface artifacts from 1976-1992, review them,
and add the strongest ones to the real collection. Favor strange, embodied,
commercially odd, or interaction-model-rich artifacts.

## Plan
1. Read memory + repo state. (done)
2. Choose 3 fresh angles that past runs haven't exhausted.
3. Launch up to 3 research subagents in parallel, each with 1 angle + max 2 Octen searches.
4. Verify candidates against the collection (146 exhibits — must not duplicate).
5. Check image availability (Commons API).
6. Build info.json for the strongest candidates.
7. Promote (likely manual: data.ts + hci-wiki.md + assets/wiki images).
8. Verify: typecheck + build. Write summary.

## Trace

### 2026-08-02 — Setup
- Read docs/beepy-memory.md (durable guidance), checked repo state: 147 wikiTitle entries in data.ts,
  151 `## ` sections in hci-wiki.md, 3 active info.json in potential/ (data-discman,
  att-videophone-2500, fidelity-voice-chess — all already promoted). ARCHIVED all 3 to
  info.json.archived to prevent auto-re-promotion. Confirmed promote-potentials.ts bugs
  (data.ts regex + image-copy + no ToC) → manual promotion planned.
- Launched 3 research subagents in parallel (each 2 Octen max):
  - Angle A: Early electronic handheld games / computerized board games (Merlin, Electronic
    MasterMind, Stop Thief, Electronic Battleship, Comp IV)
  - Angle B: Physical-ritual creative devices (Etch A Sketch Animator family, LJN Video Art)
  - Angle C: Portable text-capture appliances with unusual I/O (Sony Typecorder)

### Subagent results
- **Merlin (1978, Parker Bros)** — STRONG. 11-LED dual-use keys as display+input, machine-opponent
  games incl. "Mindbender" mind-reading game. Bob Doyle (ex-NASA). TMS1000/1100 4-bit. >5M sold,
  best-selling US toy SKU 1980. 6+ CC images on Commons.
- **Etch A Sketch Animator (1986, Ohio Art)** — STRONG. Two blue knobs = IR rotary encoders
  (quadrature) digitizing the analog Etch A Sketch ritual; 30×40 LCD; 12 frames, 96-slot playback
  sequence; pen-up/pen-down editing. US 4,764,763 (Wickstead & Selden). NO keyframe tweening
  (manual frame-by-frame — correct the brief). PD Commons image by Tim Morgan.
- **Sony Typecorder (1980/81, OA-S1100)** — STRONG. Announced Dec 1980, ~$1,400. QWERTY +
  40-char single-line LCD (NOT display-less — correct the brief). Text stored on standard
  microcassette ("120 pages"), transferable via thermal print, telex tape, or acoustic coupler.
  CHM holds a 1980 unit. 3 CC images on Commons.
- Electronic MasterMind (1977) — STRONG but second handheld game; will note as deferred.
- Stop Thief (1979) — conceptually amazing (audio-as-information) but ZERO free images → defer.
- Comp IV (1977) — BORDERLINE, 1 CC image. Defer.
- Electronic Battleship (1977) — BORDERLINE, no free image. Defer.
- Animator 2000 (1987-88) — BORDERLINE (touchpad pivot, overlaps tablets). Defer.
- LJN Video Art (1987) — WEAK (joystick drawing, bad reviews). Drop.
- Sharp Memowriter — WEAK/unverified. Drop.

### Decision: promote 3 candidates
1. merlin (1978) — first "computer that plays games with you" mass-market, mind-reading interaction
2. etch-a-sketch-animator (1986) — knob→IR-encoder digitization + frame-based animation authoring
3. sony-typecorder (1980) — microcassette-as-text-storage ritual, acoustic coupler transfer

Next: verify Commons images (direct URLs), download, build info.json, promote manually, verify build.

## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:354:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:192:26)\n    at processTicksAndRejections (native:7:39)"
}
```

## Recovery Check: bun run typecheck

Result: PASS

```text
$ tsc --noEmit
```

## Recovery Check: bun run build

Result: PASS

```text
Built static site to /home/runner/work/hci-museum/hci-museum/public (149 exhibits + blog + about, 191 pages)
$ bun scripts/build-site.ts
```
