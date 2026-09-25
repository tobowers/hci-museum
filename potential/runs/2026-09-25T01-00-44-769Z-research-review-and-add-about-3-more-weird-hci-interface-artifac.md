# Run trace: research, review, and add about 3 more weird HCI interface artifacts

Date: 2026-09-25
Collection size at start: 272 exhibits

## Plan
- Goal: find ~3 weird HCI/interface artifacts from 1976–1992 with distinctive interaction models.
- Favor strange/embodied/commercially-odd/interaction-model-rich. No duplicates.
- Special attention to unexplored angles flagged in memory: gyroscopic game controllers (Game Handler blocked), industrial process-control (Allen-Bradley T3 blocked), surveying/geodetic, fax (QWIP blocked), electronic-stratego sensory boards, touchscreen wrist text entry.

## Steps
1. Scan potential/ for ready active info.json candidates.
2. Launch up to 3 research subagents on fresh, image-rich angles.
3. Verify against data.ts + memory + Commons.
4. Build info.json, promote, typecheck+build.
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (272 exhibits + blog + about, 373 pages)
$ bun scripts/build-site.ts
```
