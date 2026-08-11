# Run trace — 2026-08-11T12-31-47-913Z

**Goal:** research, review, and add ~3 more weird HCI interface artifacts from 1976–1992.

**Starting state:** 180 exhibits in src/data.ts (181 `slug:` lines incl. type def). Wiki has 185 `## ` sections; ToC has 180 entries. Collection well is thin per memory — accept 0-3 additions.

## Initial setup
- Read docs/beepy-memory.md (423 lines, up to date through 2026-08-11 blog lessons).
- Inspected src/data.ts (Exhibit type, img() helper, exhibitData, toSorted, featured).
- Inspected docs/hci-wiki.md ToC (180 entries) and section format `## Title (Year)`.
- Inspected scripts/promote-potentials.ts — confirmed known bugs (copyImages checks `fs.existsSync(src)` without prepending potential dir; data.ts regex targets `export const featured` directly which fails; no ToC update). Decision: do NOT run the script; edit wiki + data.ts manually like prior runs.

## Planned research angles (3 subagents, 2 Octen each = 6; 1 Octen reserved for me)
1. **Consumer voice-recognition games/toys (1976–1992)** — Code Name: Sector (1982), other voice-input games. Paradigm "voice as game input" is absent from the museum. Exclude: Covox Voice Master, DragonDictate, Butler in a Box, Hubot.
2. **Electronic board games with non-button physical input (non-chess)** — magnetic wands, light, touch, talking pieces. Exclude: Fidelity Voice Sensory Chess, Novag Robot Adversary, Stop Thief, Simon, Merlin, Dark Tower (already deferred).
3. **Computerized telescopes / amateur astronomy computers** — Celestron Compustar (1986), Meade LX200 (1992). Fresh category: computer-controlled instrument with keypad+GoTo motor drive.

## Budget bookkeeping
- Octen: shared run budget 7. Subagents: 2 each = 6. Reserve 1 for curator verification.
- Exa: shared run budget 2. Only if a final candidate needs independent validation.
- Grok: not planned unless needed.

## Log
(append as work proceeds)

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (180 exhibits + blog + about, 232 pages)
$ bun scripts/build-site.ts
```
