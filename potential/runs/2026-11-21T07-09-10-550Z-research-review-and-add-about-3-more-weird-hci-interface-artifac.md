# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

# Run trace — 2026-11-21 (research + promote ~3 weird HCI artifacts)

## Start: backlog scan
- `git log` HEAD = 274e222 (blog merge). data.ts exhibit count = **326**.
- Found 3 ACTIVE (non-archived) info.json in potential/:
  - `fingerworks-touchstream` (2001) — OUT OF WINDOW
  - `von-kempelen-speaking-machine` (1791) — OUT OF WINDOW
  - `dectalk-dct01` (1984) — previously deferred 2026-07-18, image is Commons "DECTalk DCT01 and Tink"
- Decision: archived all three as `info.json.archived` (none promotable). 0 active info.json remain.
- Next: launch 3 parallel research subagents on fresh angles (≤2 Octen each).

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (326 exhibits + blog + about, 470 pages)
$ bun scripts/build-site.ts
```
