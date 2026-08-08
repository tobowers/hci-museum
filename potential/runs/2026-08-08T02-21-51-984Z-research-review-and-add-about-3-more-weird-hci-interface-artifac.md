# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Housekeeping (start of run)

- Collection baseline: 168 exhibits in src/data.ts; wiki has 167 ToC entries + ~5 non-exhibit headings (ToC, intro, orphan research sections: Flute Playing Machine, Johns Hopkins Serial Code Keyboard, MIDI Dance Floor, Appendix).
- Archived 3 stale active info.json files in potential/ (already-in-museum candidates that would be auto-promoted by promote-potentials.ts):
  - potential/photon/info.json → info.json.archived
  - potential/tb303/info.json → info.json.archived
  - potential/tr808/info.json → info.json.archived

## Research plan

Three subagent angles (fresh categories per Beepy memory — image availability is the dominant bottleneck, so angles chosen to be Commons-friendly):

1. Pro-audio music workstations with touchscreen/pointing interfaces (1979-1988) — lead: New England Digital Synclavier II touchscreen terminal. Other: Ensoniq, Kurzweil K250.
2. Unusual home/consumer game controllers — motion-sensing and trackball (1981-1988) — leads: Epyx 2000 "Bird's-Eye View" (1984), Coleco Roller Controller (1983), Atari Trak-Ball (1983).
3. Retail/POS and barcode-scanning hardware with physical interaction (1979-1992) — leads: Symbol Technologies handheld laser scanners, touchscreen POS terminals.

Budget: 3 subagents × 2 Octen = 6, 1 Octen reserved for self. Exa: up to 2, ideally 0-1. Grok: 1 broad ideation prompt.

## Progress log

- (to be appended)

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (167 exhibits + blog + about, 215 pages)
$ bun scripts/build-site.ts
```
