# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start (2026-11-22)
- Repo HEAD `805c8eb` (merge .agents/skills), src/data.ts exhibits = 327.
- Active potential info.json at start: only `suncom-joy-sensor` — already promoted in the 11-21 run (stale leftover). Archived to info.json.archived.
- Memory reviewed. Saturated/blocked angles per memory: kiosk/POS (done), lab instruments (image-blocked), industrial PLC (image-blocked), music/expressional (saturated), digitizers (Summag rebadge trap), braille tactile (image-blocked), home automation (done), scanning/OCR (done), answering machines (done), fax (done), marine/nautical (weak), drafting instruments (patent-only), time & attendance (no in-window image).
- Chosen fresh angles (left-field, not yet searched):
  A. **Paper/mail/office sorting machinery + postal automation** — letter sorters, mail-coding desks, OCR zip readers, microfilm/microfiche retrieval machines (not data entry).
  B. **Courtroom/legislative/meeting-room electronic voting + audience-response consoles** (beyond Microvote MV-464 already in museum) — delegate voting terminals, keypad-overlay meeting control.
  C. **Printing/prepress plate & typesetting output hardware + phototypesetter terminals** not covered (CRTronic done) — plus **checkout/library circulation desk hardware**.
- Octen: 7 shared. 2 per subagent (6), 1 reserved for manager validation.

## Subagent round 1 (3 parallel)
- Angle A (paper/mail/document handling): partial. Best find **Kodak Recordak Miracode microfilm retrieval system** — CODE-ENTRY keyboard station + interrogation console, photosensors scan an optical code track on the film and auto-stop at matching documents. Free CC BY-SA 4.0 images by Yves Tessier (Université Laval) of the actual keyboard and console. PROBLEM: origin 1968; needs 1980s in-use evidence. Also flagged MPLSM multi-position letter sorting machine keyboard (20 keys, 60 letters/min) but image is USPS all-rights-reserved.
- Angle B (group/shared-room input): EMPTY result. No candidates returned.
- Angle C (prepress/phototypesetting): **Linotron 202 / 202E** (Mergenthaler/Linotype-Paul, 1978) — separate typesetting keyboard+VDU composing machine feeding a remote CRT film engine; PDP-8 controller; scalable 4.5-72pt digital glyphs. VERIFIED CC BY-SA 4.0 Commons photo `File:High-Speed CRT Computer Phototypesetter Linotron-202E.jpg`. Distinct from CRTronic (direct-entry desktop) in the museum.

## Follow-ups queued
- Verify Miracode in-use dates + Commons metadata.
- Verify Linotron 202 Commons file license/dimensions + whether 202 or 202E is the better artifact.
- Launch a fresh angle D (since B was empty).

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (327 exhibits + blog + about, 472 pages)
$ bun scripts/build-site.ts
```
