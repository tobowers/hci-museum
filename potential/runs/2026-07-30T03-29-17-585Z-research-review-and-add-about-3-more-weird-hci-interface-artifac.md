# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Research (2026-07-30T03:29)

Launched 7 parallel research subagents covering:
1. Early pointing devices / mouse alternatives
2. Early scanning/OCR hardware
3. Bizarre game controllers
4. Early information appliances
5. Unusual text input devices
6. Measurement/scientific HCI
7. Unusual music/touch/haptics

### Top candidates identified (after filtering out already-in-museum):
- Casio VL-1 / VL-Tone (1981) — calculator/synth hybrid, 29 CC images
- Sony Data Discman DD-1EX (1991) — first e-book reader, 22 CC images
- TI CC-40 with Hex-Bus Barcode Wand (1983) — barcode as general-purpose input
- Rockwell AIM-65 (1978) — single-board computer with thermal printer, CC0
- Maltron Keyboard (1977) — first ergonomic split keyboard, CC0

Now verifying images and building info.json for top candidates.

## Phase 2: Verification Results

### Confirmed strong:
- **Casio VL-1 (1981)**: 3 excellent CC images (CC BY-SA 3.0, CC BY 2.0, CC0 from Vienna Technical Museum). Wikipedia article. Distinctive mode-dependent UI.

### Confirmed with issues:
- **Sony Data Discman DD-1EX (1991)**: No CC images of DD-1EX specifically. DD-10EX (1992) has PD image (200x259px, V&A). DD-85 (1996) has CC-BY 4.0 high-res image but out of era window. Marginal image situation.
- **Rockwell AIM-65 (1978)**: 4 CC images including CC0 (4274x2405). Single-board computer with thermal printer as primary output. Concern: overlap with TI Silent 700 (thermal terminal).

### Dead:
- **TI CC-40 Barcode Wand**: Wand was never prototyped. Candidate withdrawn.

### Fresh-angle subagent: 3/4 already in museum or deferred. Net new: 0.

Now building info.json for Casio VL-1 and searching for a third candidate.

## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:354:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:182:26)\n    at processTicksAndRejections (native:7:39)"
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (138 exhibits + blog + about, 177 pages)
$ bun scripts/build-site.ts
```
