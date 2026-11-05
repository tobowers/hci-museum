# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Run start — 2026-11-05
- Collection: 313 exhibits (`grep -cE '^\s{4}id: "' src/data.ts`).
- Scanned `potential/*/info.json`: ZERO active (all archived). The flagged stale dirs (`beocenter-9500`, `rca-selectavision-ced`, `vectrex-console`) are already archived and already in data.ts. No ready-candidate shortcut this run.
- Plan: 3 parallel research subagents on angles NOT yet noted in memory:
  1. Video-game arcade/consumer input with an unusual *analog/mechanical* transduction, incl. force-feedback, pedal, cabinet-embedded bodily input.
  2. Photographic/optical *input* devices (analog-to-digital image capture, camera-as-input) outside Dycam/Nikon/Sony Mavica.
  3. Office/clinical *dictation & document workflow* physical-token or multi-channel interfaces outside IBM 6:5 / Mufax / transcript.

## Subagent round 1
- **A — arcade analog/mechanical input**: partial. Hit step limit mid-investigation but surfaced a strong thread: *unusual mechanical arcade controls* — Star Wars yoke, Paperboy handlebars, Discs of Tron optical spinner, Battlezone dual sticks, Atari Football trackball, Sega Enduro Racer.
- **B — photo/optical input**: hit step limit. Only verified lead: **Konica Kanpai (voice/clap-activated 35mm camera)** — unverified year/mechanism; and **Nikon NT-1000 (1983)** field film-scanner-transmitter (unverified). Video-digitizer subsector confirmed crowded (ComputerEyes/Videoface).
- **C — office/document tokens**: reported NO viable candidate. Octen returned patents; Grok returned 6 fabrications with 404 archive.org URLs. Leads (Kardex Lektriever, Dictaphone Thought Tank, Kodak IMT-150 CAR terminal) all unverified.
- Proposing manager-side follow-up on the arcade-controls angle (A) and on Kanpai/NT-1000 (B). Note: subagents share the 7-Octen budget; ~4 used.

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
Built static site to /home/runner/work/hci-museum/hci-museum/public (313 exhibits + blog + about, 443 pages)
$ bun scripts/build-site.ts
```
