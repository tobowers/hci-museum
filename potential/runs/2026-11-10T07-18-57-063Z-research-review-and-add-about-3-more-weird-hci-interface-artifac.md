# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

# Run trace — 2026-11-10 — research/review/add ~3 weird HCI artifacts

## Start
- Read docs/beepy-memory.md, listed potential/.
- Collection count: 313 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned potential/*/info.json for ready candidates: found 2 ACTIVE (unpromoted):
  - `potential/atc-flight-progress-strips/info.json` — ATC flight progress strips (paper/plastic strip board). NOT in data.ts, NOT in wiki.
  - `potential/technics-sl-1200mk2/info.json` — Technics SL-1200MK2 (1979). NOT in data.ts, NOT in wiki.
- Plan: verify + promote these 2 (both are unusual, embodied, interaction-rich, era-appropriate), and scout ONE fresh angle in parallel for a 3rd.
- Research angle for fresh discover (1 subagent, 2 Octen max): "paper/analog information systems and non-screen physical state interfaces with computing-adjacent hardware."

## Verification of ready candidates
- Commons API: Flight_Progress_Strip.png = PD, 1980x708. Jakarta strip bay = PD, 1152x864. Technics_SL-1200MK2-2.jpg = CC BY-SA 2.5, 2114x1342. All usable.

## Fresh angle (1 subagent, "hci-research-subagent": physical-state / analog-adjacent interfaces)
- Subagent returned: (1) STRONG — Shizuo Ishiguro's Electronic Storm Surge Model (NIO Wormley, in service 1960-1983; North Sea wired as ~80-node RC grid; input via Commodore CBM 8032 + 2031 floppies, output on Advance Instruments OS-240 scope photographed). (2) Borderline — NOAA Tide-Predicting Machine No. 2 (operational life ends 1965, pre-window). (3) Backup — EAI 580 patch panel (generic analog computing, no specific in-window deployment).
- DECISION: promote the Ishiguro machine. Verified via Wikipedia + Science Museum Group record co8428222 (object 2015-15): confirms CBM 8032, Commodore 2031 5.25" drive, OS-240 scope, two mesh panels wired in a V formation, 80 nodes, 6 ft high.
- Images verified on Commons: `File:Electronic ocean model, built by Shizuo Ishiguro, 1960-1983 - Science Museum, London - DSC05546.jpg` = CC0 5472x3648 (hero); `File:Medium 2015 0015 0001.jpg` = CC BY 4.0 769x576. SMG's own coimages are CC BY-NC-SA — not used.
- Did NOT promote: Tide machine (out of window), EAI 580 (generic/weak).

## Selection: 3 exhibits
1. Technics SL-1200MK2 (1979) — hand-grabbed rotating medium as instrument.
2. ATC Flight Progress Strips (c.1970s-1990s board system; FAA codified) — physical arrangement as data.
3. Ishiguro Storm Surge Model (1960-1983 in service) — room-scale electrical analogue of a sea, digital front-end.

## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:453:38)\n    at async main (unknown)"
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (313 exhibits + blog + about, 445 pages)
$ bun scripts/build-site.ts
```
