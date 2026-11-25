# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (resumed)
- Collection at **329** exhibits (`grep -cE '^\s{4}id: "' src/data.ts`), HEAD `6db4224`.
- No active `potential/*/info.json`.
- Wiki ToC has 326 numbered lines (known gap vs 329 exhibits, indices end at 325 = SAL-MAR; last 4 sections — Genigraphics 100, Wrigley, Addressograph, DASA, Komstar, SAL-MAR + Suncom — are partially mismatched/stale vs section headings. Will repair on promotion.)
- Prior run left STOP on Linn 9000 / Oberheim Prommer / Drumulator (music family = saturated). Choosing 3 fresh non-music angles.

## Subagent round 1 (3 parallel, ≤2 Octen + ≤1 Exa each)

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (329 exhibits + blog + about, 474 pages)
$ bun scripts/build-site.ts
```
