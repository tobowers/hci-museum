# Run: research-review-and-add ~3 weird HCI artifacts
Started Mon Sep 28 12:44:01 UTC 2026

## Setup
- 280 exhibits currently in collection (grep -cE '^\s{4}id: "').
- No active info.json in potential/ that isn't already in wiki.
- Launched 3 hci-research-subagents, each with fresh focused angles + 2 Octen searches max.

## Subagent results (all 3 completed)
- Angle 1 (network terminals): Scanset XL (1982, CC BY-SA 4.0 confirmed) = STRONG new candidate. Telxon PTC-710 = rejected per memory. QuoTrek = image-blocked.
- Angle 2 (embodied input): Microwriter + VPL DataGlove = ALREADY IN MUSEUM. Teach pendants/headmaster/image-blocked.
- Angle 3 (output mechanisms): Optacon/Optacon II = ALREADY IN MUSEUM (both in collection). Flat-CRT, LED signs = image-blocked.
- Verify: Optacon + Optacon II both confirmed in docs/hci-wiki.md.
- Only genuinely-new image-verified candidate = Scanset XL.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (280 exhibits + blog + about, 385 pages)
$ bun scripts/build-site.ts
```
