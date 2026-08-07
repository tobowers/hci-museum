# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start (2026-08-06, afternoon session)

State check:
- 164 entries with `id:` in src/data.ts (exhibits + research sections).
- 169 `## ` sections in docs/hci-wiki.md (incl. ToC + Appendix).
- Archived 3 stale active info.json files before any promotion: yamaha-cx5m, strand-light-palette, pfaff-creative-1471 (all promoted this morning, 2026-08-06 03:37 run). `find potential -name info.json` now returns 0.
- Octen budget: 7 shared (6 for 3 subagents × 2 each, 1 reserved for Beepy validation). Exa: 2 shared (use only if needed).

Commons availability pre-check (curl + Commons API, no Octen cost):
- "Milton Bradley Omni": ZERO CC images on Commons.
- "Aspen Movie Map": ZERO CC images on Commons.
- "Cirque GlidePoint": ZERO CC images on Commons.
- "TI Touch and Tell": ZERO CC images on Commons.
- "Fairchild Channel F": 5 CC images (incl. CHM photo) — fallback only.
- "Sony View System": ZERO CC images.

## Research angles chosen (3 parallel subagents, each max 2 Octen)

A. Consumer speech-recognition toys/devices (1978-1984) — primary target Milton Bradley Omni (1980), first consumer product with speech recognition. Check TI Touch & Tell (1978) and other voice-interactive consumer toys. Never searched this angle.

B. Interactive videodisc/hypermedia pioneers (1978-1990) — primary target Aspen Movie Map (1978-80, MIT Architecture Machine Group), the "grandfather of Google Street View." Touchscreen + joystick spatial navigation through filmed streets. Adjacent but distinct from BBC Domesday (in museum).

C. Paradigm-creating pointing/positioning input devices (1985-1992) — primary target Cirque GlidePoint (1992), first capacitive trackpad (patent US 4,814,552, George Gerpheide). Museum's pointing devices are all mechanical/force-based; a capacitance-sensing surface would add a new physical principle.

All three are likely image-thin on Commons; acceptable image precedents: patent drawings (Stompin'), academic-lab diagrams (TELESAR I, Iwata), representative-photo + honest captioning (Lightwriter SL1/SL35, Kay Visi-Pitch).

## Subagent results

(pending)

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (164 exhibits + blog + about, 211 pages)
$ bun scripts/build-site.ts
```
