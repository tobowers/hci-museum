# Trace: research, review, add ~3 weird HCI artifacts (2026-09-03)

## Goal
Find ~3 strange, embodied, interaction-model-rich HCI artifacts from 1976-1992, review, and promote the strongest into the collection. Do not duplicate the 236 already-in-museum exhibits.

## Current state
- Collection: 236 exhibits (grep -cE '^\s{4}id: "' src/data.ts)
- Candidate well is thin at this size; expect 0-3 additions. Image availability is the dominant bottleneck.
- Memory guidance: prefer ready info.json candidates in potential/, fresh-angle hunting, and image resolution. Subagents return ~70-80% already-in-museum candidates — manual verification against src/data.ts is mandatory.

## Run plan
1. Scan potential/ for ready, unpromoted info.json files.
2. Launch up to 3 research subagents in parallel on fresh angles.
3. Manually verify every candidate against src/data.ts.
4. Create info.json for strong candidates, promote best via script + manual edits.
5. Verify with typecheck + build.

## Trace log
(append as you work)

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (236 exhibits + blog + about, 312 pages)
$ bun scripts/build-site.ts
```
