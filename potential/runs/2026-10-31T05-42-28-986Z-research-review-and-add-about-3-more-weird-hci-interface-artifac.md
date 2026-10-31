# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run started 2026-10-31

- Read docs/beepy-memory.md tail. Collection at 308 exhibits (grep `id: "` in src/data.ts). Blog at 122 posts.
- First action per memory: scan potential/*/info.json for ready candidates.
- Scanned potential/*/info.json: exactly ONE active file, `potential/wang-2200-word-processing-system/info.json`. Verified NOT in src/data.ts (never promoted) and its own `notes` field explicitly says "Do not promote without at least one verified CC/PD or documented-permission image". Archiving it as info.json.archived to prevent auto-promotion; it stays a documented deferred candidate.
- 1 Octen test request consumed (budget 1/7) to confirm the CLI is live. Remaining: 6 Octen, 2 Exa shared across run + subagents.
- Read `scripts/promote-potentials.ts`: known bugs confirmed in source — `copyImages` calls `fs.existsSync(src)` without prepending the potential dir; the data.ts replace regex targets `\n];\n\nexport const featured` but data.ts now uses `const exhibitData: Exhibit[] = [ ... ];` then `export const exhibits`. Planning manual promotion.
- Chose 3 fresh angles that memory flags as unrepresented / angle-dependent (memory says the well is dry only for *exhausted* angles):
  - A: machinery/vehicle/agricultural control stations (joystick + dedicated console for heavy equipment, marine, mining, forestry) — industrial domain only has TNC 110 + Tektronix 7854 + Fluke 9010A.
  - B: consumer/home electronics with an embodied mechanical ritual (mechanical TV channel tuning/preset programming, mechanical tooth/knob clocks, audio tape decks with piano keys) — medium-as-interface family but new physics.
  - C: accessibility / assistive control hardware beyond braille-and-breath (scanning switch interfaces, sip-puff, toy-control switches) + surgical/medical control pendants.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (308 exhibits + blog + about, 433 pages)
$ bun scripts/build-site.ts
```
