# Trace: Research, review, and add ~3 weird HCI interface artifacts (1976-1992)

Session start: 2026-09-09T12:51:14Z
Collection at start: 253 exhibits.

## Plan
- Launch 3 hci-research-subagents on fresh, unexplored angles (each ≤2 Octen searches).
- Manual verification of every candidate against src/data.ts (subagents don't honor exclusion lists).
- Build info.json for strong candidates, promote, verify typecheck/build.
- Update docs/beepy-memory.md with durable lessons.

## Angles chosen
1. Computer-linked art/drawing input beyond covered (light tables, digitizer easels, etc.)
2. Electronic board games / sensory-board computers beyond Fidelity/Novag (electronic chess/backgammon)
3. Home/consumer devices with a distinctive physical ritual (weird output or interaction ritual)

## Log
- (started) launching 3 subagents in parallel.

## Subagent results (initial 3)
- Board-games subagent: STRONG candidate **Milton Bradley Grandmaster/Phantom (1983)** — invisible under-board X-Y plotter that senses player moves AND physically moves the computer's magnetic pieces "by magic"; can demonstrate legal moves. Distinct from Fidelity sensory board (senses only) and Novag Robot Adversary (visible arm). Free image: CHM group photo (CC BY-SA 2.0).
- Home-devices subagent: ALL candidates already in museum (Mindlink, PXL2000, Etch A Sketch Animator, Simon) — subagent ignored exclusion list. Angle is a write-off.
- Art/drawing subagent (first attempt): empty/failed. Relaunched.

## Relaunched subagents
- Art/drawing (retry): surfaced UPIC (1977) + Radio Drum — BOTH already in museum. De Bruyne acoustic radar (patent-only, overlaps GrafBar). Angle saturated.
- Unusual pointing/selection: surfaced SpaceBall 1003 (overlaps DLR SpaceMouse — deferred before), Polhemus (in museum), **Logitech 3D Mouse / "Fly Mouse" (1990)** — free-space 6-DOF ultrasonic mouse, distinct paradigm (no free-space 6-DOF pointer in museum).

## Candidate decisions
- **Milton Bradley Grandmaster/Phantom (1983)** — PROMOTE. Verified via chessprogramming.org, chesscomputeruk.com, ismenio.com. Genuinely distinct ghost-mover interaction. Image: CHM group photo (device in foreground), CC BY-SA 2.0.
- **Logitech 3D Mouse / Fly Mouse (1990)** — PROMOTE. Free-space isotonic 6-DOF ultrasonic mouse. Distinct from isometric balls (DLR SpaceMouse) and 2D mice. 2 CC BY-SA 3.0 fr images (Rama).
- Rejected: SpaceBall 1003 (near-dup of DLR SpaceMouse), UPIC/Radio Drum/Polhemus (in museum), de Bruyne (patent-only).

## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:445:38)\n    at async main (unknown)\n    at processTicksAndRejections (native:7:39)"
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (255 exhibits + blog + about, 340 pages)
$ bun scripts/build-site.ts
```
