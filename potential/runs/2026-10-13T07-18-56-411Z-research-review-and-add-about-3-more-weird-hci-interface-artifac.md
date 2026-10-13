# Run trace: research, review, add ~3 weird HCI interface artifacts (1976-1992)

Date: 2026-10-13T07:18:56.411Z
Goal: find ~3 promising new HCI hardware/interface artifacts 1976-1992, review, promote strongest.

## Current state
- Collection: 294 exhibits (grep -cE '^\s{4}id: "' src/data.ts)
- No active info.json in potential/ (all archived/promoted)
- Well is known-dry for automated discovery per memory; image resolution for deferred candidates is primary path.
- Excluded list: 400+ already-in-museum artifacts provided in prompt.

## Memory guidance recap
- Fresh angles beat re-searching exhausted categories.
- Ready info.json candidates (from aborted runs) reliably beat fresh subagent discovery — check potential/ first (done, none active).
- Subagents violate exclusion lists; manual verification against src/data.ts mandatory.
- Octen budget: 7 shared across run + subagents; Exa: 2 shared.
- Priority image-blocked deferred candidates to revisit if images surface: Game Handler gyro NES controller, Braille 'n Speak, Tomy Verbot, Serial Code Keyboard, HP 8566A spectrum analyzer.

## Plan
1. Launch 3 research subagents with fresh angles (parallel).
2. Verify candidates against src/data.ts.
3. Build info.json for strong candidates.
4. Promote manually (promote-potentials.ts has known bugs).
5. Verify typecheck + build.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (294 exhibits + blog + about, 413 pages)
$ bun scripts/build-site.ts
```
