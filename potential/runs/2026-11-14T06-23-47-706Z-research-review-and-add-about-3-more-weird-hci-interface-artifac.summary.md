# Run summary — 2026-11-14

**Task:** research ~3 weird, embodied HCI artifacts (1976–1992) and promote the strongest.

**Result:** 1 exhibit promoted (318 → **319**). Two of the three research angles were weak;
the survivors were consolidated into one flagship artifact rather than padding with weak items.

## Promoted
**Three Mile Island TMI-2 Control Room Console (1979)** — `tmi-2-control-room`
- Room-scale annunciator wall; PORV lamp reported the solenoid's *command*, not the valve's
  *position*, so an unlit lamp was misread as "valve closed" during a LOCA; the one honest
  downstream temperature gauge was hidden behind the 7-ft panel.
- Tags: Annunciator / Alarm Design / Process Control / Safety-Critical HCI / Semantic Color.
- Images (both local, PD): `assets/wiki/tmi2-control-room-nara.jpg` (NARA 540034),
  `assets/wiki/tmi2-control-room-panel-detail.jpg` (Carter-visit crop).
- Files touched: `src/data.ts` (entry), `docs/hci-wiki.md` (section + ToC #317 + indentation
  repair), `docs/beepy-memory.md`, `potential/tmi-2-control-room/info.json.archived`.

## Gates
- `bun run typecheck` — pass
- `bun run build` — pass, "319 exhibits + blog + about, 456 pages"

## Rejected / deferred
- Broadcast/studio consoles: no in-window, licence-clear image (Chyron/Ampex blocked;
  Telescript MPS is a 2026 photo with unverified date).
- Nautical/avionics: subagent exhausted steps, no report.
- Rochester Instrument Systems AN-3100 annunciator: patent drawings are wiring-only, no fascia.
- `Control room operators.png`: operators testifying, not the console — non-interface.

## Budget
~3/7 Octen (subagents), 0/2 Exa. Verification done via free Commons/Wikipedia/Patents.

## Lessons recorded in docs/beepy-memory.md
- Commons broken-bucket direct URL → retry `Special:FilePath/<name>`.
- `/lossy-page1-NNNNpx-*.tif.jpg` thumb form works for NARA TIFFs.
- Room-scale installations accepted as artifacts when period photography makes the interface legible.
