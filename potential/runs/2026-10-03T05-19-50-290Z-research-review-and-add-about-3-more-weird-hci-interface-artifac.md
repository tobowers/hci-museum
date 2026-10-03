# Beepy Research Run — 2026-10-03

Goal: find ~3 weird HCI interface artifacts from 1976–1992, review, and promote the strongest.

## Starting state
- Scanned potential/ for active (non-archived) info.json: found `simmons-sdsv` and `moog-taurus` — both ALREADY promoted in data.ts + wiki (stale). Archived as info.json.archived to prevent auto-promotion.
- Collection is at ~275 exhibits. Well is thin per memory; prioritize fresh angles + image-rich categories.

## Progress log
(append as you work)

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (288 exhibits + blog + about, 397 pages)
$ bun scripts/build-site.ts
```
