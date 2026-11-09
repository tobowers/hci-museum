# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

# Run trace: 2026-11-09 research / promote ~3 weird HCI artifacts

## Starting state
- 313 exhibits in src/data.ts (grep count of `    id: "..."`).
- No active potential/*/info.json (all archived).
- HEAD b249529 (merge of .agents/skills).

## Plan
- Saturated categories per memory: office dictation (IBM 6:5), novelty displays (Talaria/flip-dot/Solari/JumboTron), marine (Orca), pro-trade (TNC/CRTronic/Quotron), POS/retail (IBM 5265/3614/scanner), raw machine (IMSAI/KIM-1), keyboards, organizers.
- Chosen unexplored angles:
  A) Analog/digital musical + recording studio interaction hardware that is NOT a keyboard/synth pop (e.g. tape automation, mixing console automation, turntables/DJ).
  B) Retailing/warehouse/public-space specialty INPUT devices not yet covered (e.g. warehouse voice-pick, RF gun with headset).
  C) Clinical/dental/ophthalmic instrument-computer interfaces (body-machines outside the noted families).
- Launch 3 hci-research-subagents in parallel, 2 Octen each max.

## Subagent results
### A) Studio/DJ (audio)
- Neve NECAM (1977) flying-fader automation — PARTIAL IMAGE (only peripheral/VR-series photos).
- Technics SL-1200MK2 (1979) — turntable-as-instrument; FREE images (CC BY-SA 2.5 / PD).
- Studer A800 + autolocator (1978) — free images (autolocator ~ time-object).
- Harrison Speed Freak — blocked.
- NAB cart machine — ritual medium, weaker.
### B) Logistics/workplace input
- Symbol LRT 3800 (1992) — one-piece laser-scan gun; only brochure thumb + PD patent figs.
- Symbol Swartz gun scanner (1980 patent) — PD patent figures only.
- Telxon PTC-710 — CC BY 4.0, date soft.
- ATC Flight Progress Strips — PD images, body/paper/board interface (practice not product).
- Voice-directed picking REJECTED (Vocollect 1994).
### C) Clinical
- CEREC 1 (1985) — mouth-as-digitizing-volume; PD Commons but modern photos.
- Humphrey Field Analyzer (1983-84) — strong interaction, BLOCKED-IMAGE.
- Octopus perimeter — blocked. Autorefractor — weak.

## Assessment / promotion shortlist
Leading with: Technics SL-1200MK2 (image-strong, verified), plus checking CEREC and Symbol scan gun + ATC strips for a coherent batch.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (313 exhibits + blog + about, 445 pages)
$ bun scripts/build-site.ts
```
