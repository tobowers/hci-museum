# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Progress notes

- 2026-08-12: Run start. Read memory; collection at ~183 exhibits. Candidate well for automated discovery is dry per memory (08-21 through 08-23 were zero-addition runs), but fresh topical angles have yielded since. Chose 3 unexplored angles and launched 3 research subagents in parallel (2 Octen calls each = 6 of the 7 shared Octen budget):
  - Subagent A: Light-scanning / optomechanical "cameras" and digitizers — Cyclops (Datasoft 1981), ThunderScan, ComputerEyes.
  - Subagent B: First-wave console/controller oddities — Fairchild Channel F (1976) twist-grip controller, Intellivision disc+overlays, Bally.
  - Subagent C: Volumetric / "reach-into-the-image" 3D displays — BBN Spacegraph, FELIX (TI 1991).
- Planned verification: check every candidate against the 183-exhibit list manually (subagents known to ignore excluded lists), verify CC image availability via Commons API, build info.json files, promote manually (promote-potentials.ts has known bugs: no image copy, no data.ts update, no ToC update).

## Candidates under review

### Fairchild Channel F (1976) — Angle B
- First cartridge-based console; Jerry Lawson lead hardware engineer; pistol-grip controller rotates (paddle-like) + buttons; games steered by twisting.
- Image lead: Evan-Amos PD photos on Wikimedia Commons (several in his Vanamo set).
- Status: research in progress.

### Cyclops (Datasoft, 1981) — Angle A
- "Solid state digital camera" for Apple II; actually a lamp + rotating-slit drum + phototransistor light-scanning digitizer; no lens.
- Status: research in progress.

### Spacegraph (BBN) / FELIX (TI 1991) — Angle C
- True volumetric displays; museum has zero in this category (only Sega Time Traveler "hologram").
- Status: research in progress.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (183 exhibits + blog + about, 236 pages)
$ bun scripts/build-site.ts
```
