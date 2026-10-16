# Run trace — 2026-10-16T17-12-00-429Z

## Goal
Research, review, and add ~3 weird HCI interface artifacts (1976-1992).

## Starting state
- Collection: 295 exhibits (grep -cE '^\s{4}id: "' src/data.ts)
- Active (unpromoted) info.json found: `potential/scantron-888p/info.json` — READY candidate.
  - Scantron 888P+ OMR Reader (c.1985): paper-as-input-token, hand-marked bubble sheet read by
    reflected-light OMR. Images already in assets/wiki/ (CC0, verified JPEG/PNG valid).
  - NOT in src/data.ts, NOT in docs/hci-wiki.md. Fully sourced. Strong, unrepresented category.
- Memory review: many angles confirmed exhausted/image-blocked. Fresh angles chosen:
  (A) audience/classroom response & voting hardware
  (B) in-band TV/radio signaling consumer devices
  (C) unusual pointing/measurement digitizers

## Actions

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (295 exhibits + blog + about, 415 pages)
$ bun scripts/build-site.ts
No wiki entry found for Scantron 888P+ OMR Reader
```
