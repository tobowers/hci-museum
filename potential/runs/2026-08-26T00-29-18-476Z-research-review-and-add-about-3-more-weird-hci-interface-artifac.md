# Trace — 2026-08-26 research/review/add run

Goal: add ~3 more weird HCI interface artifacts from 1976-1992.

## Setup
- Read docs/beepy-memory.md. Collection at 213+ exhibits (data.ts shows 215 slug entries).
- Scanned potential/*/info.json for ready candidates: found `potential/le-stick/info.json` 
  freshly written but Le Stick (1981) is ALREADY an exhibit in src/data.ts. This is a stale
  auto-promotion trap. ARCHIVED it to potential/le-stick/info.json.archived to prevent
  promote-potentials.ts from re-adding it.

## Research subagents (in progress)
- Launching 3 parallel hci-research-subagents on fresh angles.

## To do
- Review candidates, build info.json files, promote strongest, verify typecheck+build.
## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:445:38)\n    at async main (/home/runner/work/hci-museum/hci-museum/scripts/agent-scout.ts:194:26)\n    at processTicksAndRejections (native:7:39)"
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (214 exhibits + blog + about, 281 pages)
$ bun scripts/build-site.ts
```
