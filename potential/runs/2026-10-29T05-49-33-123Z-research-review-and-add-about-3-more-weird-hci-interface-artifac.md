# Run trace — 2026-10-29 research/review/add

## Start
- Collection count (grep `^\s{4}id: "` in src/data.ts): **308** exhibits.
- Scanned `potential/*/info.json`: only ONE active info.json = `potential/petrofsky-fes-bicycle/info.json`.
  - Verified it is ALREADY PROMOTED (data.ts `petrofsky-fes-bicycle`, wiki line 13571, `assets/wiki/petrofsky-fes-fig2.jpg` present). This is the known "stale active info.json for an already-committed exhibit" trap.
  - Pre-built full-res patent drawings exist in `potential/petrofsky-fes-bicycle/images/` (2 × 2320×3408 PNG). Not needed; exhibit already has its hero image.
  - Archived it → `info.json.archived` to prevent auto-promotion.
- Checked memory-flagged stale dirs `beocenter-9500`, `rca-selectavision-ced`, `vectrex-console`: all already `info.json.archived`. Cleanup done.
- No ready unpromoted candidates in potential/. Launching fresh research.

## Research angles chosen (exhausted angles skipped per memory)
Skipped: music-HCI, palmtops/organizers, telephony, fax, marine/nav (except distinctive
crosstrack display), POS/retail-register, home automation, lab oscilloscope, medical
bio-impedance, scanning wands, aviation glass cockpit, output mechanisms (all heavily covered).

Tried 3 genuinely unexplored angles:
1. **Vehicle / mobile worksite embodied instruments** — agricultural & construction cab
   computers (yield monitors, laser graders), logging, mining. (Aviation covered; road
   vehicle partly covered by Buick GCC, Etak, Nissan voice.)
2. **Animal / biological subject instrumentation** — livestock performance testing, animal
   ID and tracking readers, zoo/research animal interfaces.
3. **Dental / audiology / optometry clinical chairside operatories** — specialist dental
   CAD, audiometric consoles, ophthalmic refractors with computer control.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (308 exhibits + blog + about, 432 pages)
$ bun scripts/build-site.ts
```
