# Run trace: research, review, and add ~3 more weird HCI interface artifacts (2026-07-31)

Curator: Beepy. Goal: find ~3 promising 1976–1992 HCI hardware/interface artifacts, review,
promote the strongest into the real collection.

## Starting state (audit)

- src/data.ts: 143 exhibits. docs/hci-wiki.md ToC: 140 entries (known pre-existing 3-gap).
- Stale potential/ info.json from last run archived (buick-gcc, tektronix-7854, ti-magic-wand)
  so promote-potentials.ts won't auto-promote them.
- Deferred candidate dirs with archived info.json: soundspace, technos-acxel, tickle-talker, u235-meltdown.
- Candidate well noted as thin in memory; many prior angles exhausted. New angles to try per memory:
  early network terminals with unusual interfaces, early scanning/OCR hardware, haptic/force-feedback,
  computer-controlled industrial/scientific instruments, early electronic toys with computer-like interaction,
  early computer-based telephones/answering machines.

## Plan

1. Launch 3 research subagents in parallel on fresh angles.
2. Verify every returned candidate against the collection manually.
3. Build info.json for strong candidates, source CC images.
4. Promote best candidates manually (promote-potentials.ts known-buggy: images, data.ts, ToC).
5. typecheck + build. Write summary.

## Progress log

- 14:35 audit done. data.ts=143, wiki ToC=140. Archived stale info.json (buick-gcc, tektronix-7854, ti-magic-wand).
- 14:36 launching 3 research subagents in parallel:
  - A: OCR/text-capture wands & handheld scanners (Omni-Reader angle)
  - B: telephone-computer hybrid devices & home banking/service terminals (ScanFone, ROLM Cypress angle)
  - C: cassette-as-game-medium physical ritual (Starpath Supercharger) + sonic digitizers

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (143 exhibits + blog + about, 184 pages)
$ bun scripts/build-site.ts
```
