# Trace: research, review, and add ~3 more weird HCI interface artifacts

Run timestamp: 2026-10-23T04-50-30-899Z

## Goal
Research and add ~3 strong weird HCI interface artifacts from 1976-1992. Favor strange, embodied, commercially odd, or interaction-model-rich artifacts.

## Plan
1. Scan potential/*/info.json for ready, unpromoted candidates (highest-value first action per memory).
2. Verify active info.json candidates against src/data.ts + wiki before treating as unpromoted.
3. Launch research subagents on fresh unexplored angles for new candidates.
4. Promote the strongest with local images; verify typecheck + build.
5. Write summary.

## Progress
- Started session. Confirmed repo structure, potential/, docs/blog/ present.
- Scanning potential/ for active (non-archived) info.json candidates...

## potential/ scan results
4 active info.json files found:
- hp-8450a → ALREADY PROMOTED (data.ts:3, wiki:2). Stale leftover. Archive.
- harrison-seriesten → ALREADY PROMOTED (data.ts:3, wiki:2). Stale leftover. Archive.
- ssl-sl4000-total-recall → ALREADY PROMOTED (data.ts:2, wiki:1). Stale leftover. Archive.
- entex-select-a-game → GENUINELY UNPROMOTED (data.ts:0, wiki:0). READY CANDIDATE.

entex-select-a-game assessment:
- Entex Select-A-Game (1981), cartridge-as-computer handheld. Base unit = dumb VFD dot-matrix shell; CPU lives in each cartridge (e.g. Hitachi HD38800). Static overlay per cartridge. VFD sibling of in-museum Microvision (1979). Sibling of in-museum Entex Adventure Vision (1982) but distinct (VFD dot-matrix vs rotating-mirror LED-scan).
- Complete info.json + 2 valid local JPEGs (console.jpg 2560x1440 needs resize; console-01.jpg 1596x1191).
- STRONG: interaction-model-rich (cartridge-as-computer, overlay, VFD two-color dot grid), commercially odd (only 6 carts, Pac-Man 2 pulled after Coleco suit). VERDICT: promote.
- NOTE: memory guidance flags "only add further game-controller entries when subclass genuinely new" — this is not a controller, it's a cartridge-as-computer architecture, distinct subclass. Good.

Plan: archive 3 stale, promote entex-select-a-game, and launch research subagents for ~2 more new candidates.

## Actions taken
- Archived 3 stale already-promoted info.json (hp-8450a, harrison-seriesten, ssl-sl4000-total-recall) → info.json.archived
- Resized entex-select-a-game images to 1200px (console.jpg, console-01.jpg) for web use
- Ready to promote entex-select-a-game
- Launching 3 research subagents for ~2 more new candidates on fresh angles.

## Subagent assignments
- Subagent A: unusual pointing/spatial input devices (acoustic, gyroscopic, magnetic) 1976-1992
- Subagent B: dedicated network/information appliances with unusual interfaces 1976-1992
- Subagent C: home video game controllers with truly unusual physical principles 1976-1992

## Subagent results
- Subagent A (pointing/spatial): Spaceball 1003 (deferred in memory - overlaps DLR Control Ball, 6-DOF force/torque; skip), Bat/Flying Mouse (image-blocked research prototype; skip), Un-Roller (already deferred in memory; skip). NO promotable.
- Subagent B (network/information appliances): PEAM (1980-87, TI, first portable electronic book, CC BY-SA 4.0 image) - POTENTIAL STRONG. Electronic Book Unit 1 (image-blocked prototype). ALEX videotex (image-blocked, videotex category saturated). PEAM is the main lead.
- Subagent C (game controllers): Exus Foot Craz (image-blocked, foot-mat ~ Power Pad already in museum), Le Stick (ALREADY IN MUSEUM - subagent violated exclusion list again). NO promotable.

Note: Subagents continue to return already-in-museum/deferred candidates (Le Stick, Un-Roller, Spaceball). Manual verification mandatory. The genuine new lead is PEAM.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (302 exhibits + blog + about, 424 pages)
$ bun scripts/build-site.ts
No wiki entry found for Entex Select-A-Game
```
