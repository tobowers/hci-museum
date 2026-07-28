# Run Summary: 2026-07-28 — Three Palmtop Artifacts

## What changed

Added 3 new exhibits to the HCI Museum collection:

### 1. Sharp Wizard OZ-7000 (1989)
- **Interaction model:** Transparent touch panel (4×5 matrix of 20 zones) over swappable physical IC cards. Each card has a printed template visible through the glass — swapping cards physically changes the input surface.
- **2 CC images** (public domain) from Wikimedia Commons
- **Cultural note:** Immortalized in the 1998 Seinfeld episode "The Wizard"

### 2. Cambridge Z88 (1987)
- **Interaction model:** Clive Sinclair's final computer — A4-sized, 20mm thin, silent membrane keyboard (no click), all-solid-state (no disk drives), preemptive multitasking OS that suspended/resumed instantly
- **Designer:** Rick Dickinson (ZX Spectrum, Sinclair QL)
- **2 CC images** (CC BY-SA) from Wikimedia Commons
- ~100,000 units sold at £230

### 3. Casio PB-1000 (1987)
- **Interaction model:** One of the earliest touch-sensitive handheld displays — a resistive glass-glass digitizer atop the LCD with 16 fixed touch zones that changed function contextually. Folding clamshell with lift-up display.
- **2 device CC images** (+ 4 CPU die shots) from Wikimedia Commons
- Programmable in BASIC and assembly; strong enthusiast community

## Files Written

- `potential/sharp-wizard/info.json`
- `potential/cambridge-z88/info.json`
- `potential/casio-pb1000/info.json`
- `potential/runs/2026-07-28T03-36-06-096Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)

## Files Modified

- `src/data.ts`: Added 3 exhibit entries
- `docs/hci-wiki.md`: Updated intro count (125→128), added ToC entries 123-125, added 3 full wiki sections
- `docs/beepy-memory.md`: Updated with new additions, deferred candidates, and promotion gotchas

## Images Downloaded

6 images from Wikimedia Commons to `assets/wiki/`:
- `sharp-wizard-OZ-7000.png`, `sharp-wizard-OZ-7000-open.jpg`
- `cambridge-z88-open.jpg`, `cambridge-z88-top.jpg`
- `casio-pb1000.jpg`, `casio-pb1000-angle.jpg`

## Verification

- `bun run typecheck` — PASS (no errors)
- `bun run build` — PASS (128 exhibits, 165 pages)

## Research Stats

- 6 parallel subagent angles run
- 48+ candidates identified across all angles
- Only 3 angles (C, plus partial A/D) returned candidates with CC images
- The image bottleneck remains: excellent candidates in biometrics (EyeDentify, colonial call identifier), answering machines (AT&T 1337), whiteboards (OKI Kawaraban), and early touchscreens were all blocked by image availability
- Palmtop/organizer angle was uniquely productive — the only angle where ALL candidates had CC images

## Key Lessons

- **Productive angle confirmed:** Palmtop/electronic organizers was new and all 5 candidates had CC images
- **Image bottleneck persists:** Most other angles (biometrics, telephony, whiteboards, early touchscreens) returned excellent candidates with zero CC images
- **Category saturation note:** Adding 3 palmtop exhibits means this category is now well-covered (Sharp Wizard, Cambridge Z88, Casio PB-1000, Psion Organiser II, Poqet PC, Seiko RC-1000)
- **Future unexplored angles per memory:** early home video game controllers with truly unusual physical principles, early network terminals with unusual interfaces, early scanning/OCR hardware with distinctive physical interaction, haptic/force-feedback devices beyond what's in collection
