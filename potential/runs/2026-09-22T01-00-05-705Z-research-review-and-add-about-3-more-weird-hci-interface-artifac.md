# Scout Run Trace: 2026-09-22

## Start: Research, review, and add about 3 weird HCI interface artifacts (1976-1992)

### Fresh angles chosen:
1. **Audience response / electronic polling keypads (1976-1992)** — Consensor, Fleetwood Responder, etc.
2. **Early magnetic stripe/credit card swipe terminals (1976-1992)** — Verifone Tranz 330, Hypercom T7
3. **Early portable data terminals with integral printer** — Epson HX-20, MSI Data, Sharp PC-1500+CE-150

### Subagent 1 (Audience response) findings:
- **Consensor** (Applied Futures, 1972-1976): Confidence-weighted voting dials. **NO** Commons images.
- **Fleetwood Responder** (1980s): Wireless RF classroom keypads. **NO** Commons images.
- **ASI Preview House** (1976 digital upgrade): Theater audience measurement. **NO** Commons images.
→ All image-blocked. Skip this angle.

### Subagent 2 (Credit card swipe terminals) findings:
- **Verifone Tranz 330** (1985): Iconic beige wedge with swipe slot, Z80 CPU, VFD display, audible modem handshake. **NO** Commons images of the specific vintage unit (British Museum holds one but not freely photo'd). 
- **Hypercom T7** (late 1980s): Integrated printer+swipe unit — out of window (T7P 1994). **NO** Commons images.
→ Verifone Tranz 330 is a strong candidate but image-blocked. Hold for image resolution.

### Subagent 3 (Portable data terminals with printers) findings:
- **Epson HX-20** (1981/1982): First notebook-sized portable. Dual Hitachi 6301 CPUs, A4 footprint, full-transit keyboard, 120×32 LCD, **built-in dot-matrix microprinter**. The printer company's first computer. YES — verified CC images on Commons. NOT in museum.
- **MSI Data 2100 + printer** (1976): Route accounting handheld + companion printer. Image-blocked.
- **Sharp PC-1500 + CE-150** (1981): Pocket computer + plotter in travel case. Has Commons images but interaction model is incremental (pocket computer with docked plotter).

### Primary candidate status:
1. **Epson HX-20** (1981) — STRONG candidate, images available ✅
2. **Verifone Tranz 330** (1985) — STRONG concept, NO Commons images ❌. Document and defer.
3. Need to search more angles for a third candidate.

### Searching additional angles:
- Trying: early computer-based lock/keypad entry systems with a twist
- Trying: early computer terminal/telephone hybrids beyond Minitel
- Trying: the Grok tool for broad ideation
## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:445:38)\n    at async main (unknown)\n    at processTicksAndRejections (native:7:39)"
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
Built static site to /home/runner/work/hci-museum/hci-museum/public (268 exhibits + blog + about, 366 pages)
$ bun scripts/build-site.ts
```
