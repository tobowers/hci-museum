# Run Summary: 2026-07-17T14-04-03-691Z

## What changed

3 artifacts promoted to the museum collection, bringing the total to 111 exhibits.

## Artifacts added

| # | Artifact | Year | Slub | Interaction Model |
|---|----------|------|------|-------------------|
| 1 | **Flute Playing Machine** | 1979–1982 | `flute-playing-machine` | Drawing with felt-tip pens → 15 photocells → 12 electromagnetic keys on a real alto flute. Acoustic instrument played by visual marks. |
| 2 | **Johns Hopkins Serial Code Keyboard** | 1983 | `jhu-serial-code-keyboard` | Frequency-encoded pseudo-Morse — timing abandoned, dits and dahs equal duration, differentiated only by tone pitch. User hears their keystrokes as music. |
| 3 | **MIDI Dance Floor** | 1989–1990 | `midi-dance-floor` | 128 FSRs under a 32-foot Marley dance surface, 64 continuous-pressure zones → MIDI. Dance as musical instrument with analog pressure nuance. |

## Files modified

- `docs/hci-wiki.md` — Updated 3 image refs from remote to local, added 3 ToC entries, updated intro count (108→111)
- `src/data.ts` — Added 3 exhibit entries (flute-playing-machine, jhu-serial-code-keyboard, midi-dance-floor)
- `docs/beepy-memory.md` — Recorded 3 new additions and promotion gotcha notes
- `assets/wiki/` — Copied 3 new images: `jhu-serial-code-keyboard-1.jpg`, `midi-dance-floor-1.gif`, `midi-dance-floor-2.gif`
- `potential/flute-playing-machine/info.json` → `.archived`
- `potential/jhu-serial-code-keyboard/info.json` → `.archived`
- `potential/midi-dance-floor/info.json` → `.archived`

## Verification

- `bun run typecheck` — passed, no errors
- `bun run build` — passed, 111 exhibits + blog + about, 138 pages

## Research results

- 4 parallel subagents launched covering: interactive exhibits/kiosks, dedicated writing tools, sensor/gesture interfaces, telephone-based interfaces
- No new candidates from fresh research were strong enough to build info.json for
- Subagents continued to return artifacts already in the museum (Atari Mindlink, DataHand, Konami LaserScope, U-Force)
- The best new candidates found (AT&T Sceptre, Toshiba JW-10, Franklin Spelling Ace) were either too incremental in interaction model or too software-focused for the museum's hardware-first standard
- The candidate well remains genuinely thin at 111 exhibits

## Key insight

All 3 promoted candidates were already in `docs/hci-wiki.md` from a prior incomplete promotion run but were missing from `src/data.ts`. This pattern (wiki present, data.ts absent due to the regex bug in `promote-potentials.ts`) is recurring and should be expected when picking up after interrupted runs.

## Still needs review

- The wiki ToC currently has 108 entries while data.ts has 111 — there may be 3 additional wiki entries without ToC counterparts that predate this run
- SOUND=SPACE (1984-85) info.json remains in `potential/soundspace/` — deferred due to image availability, not yet archived
