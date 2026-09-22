# Run Summary — research, review, and add about 3 more weird HCI interface artifacts

Run ID: `2026-09-22T12-37-17-229Z`

## Result

**Zero additions to the collection.** No candidate met all four promotion criteria (distinct interaction model, freely-licensed image, not already in collection, in 1976–1992 era window). This is consistent with the collection being at **268 exhibits** and the well being dry for the angles searched, matching the pattern of several prior zero-addition runs and the standing memory guidance ("add fewer artifacts when quality is low; do not pad the collection"; "accept zero-addition runs as the norm at 213+ exhibits").

## What was done

### Research subagents launched (3, in parallel, each 1 focused angle)
1. **Marine/nautical electronic navigation instruments** — returned Magellan NAV 1000 (already deferred in memory for zero CC images), Navstar 2000L Loran (conventional interaction), Furuno video plotter (weak provenance).
2. **Industrial process-control / PLC / SCADA operator consoles** — returned Allen-Bradley 1770-T2/T3 PLC programming terminal, Honeywell TDC-2000 operator console, Foxboro variable-function keyboard. All genuinely NEW interaction-distinct candidates in an unrepresented category.
3. **Expressional/continuous musical instrument controllers** — returned Laser Harp (deferred, art-installation), Casio DG-20 (ALREADY in museum), BodySynth (overlaps BioMuse in museum), Yamaha WX (overlaps EWI in museum). No new candidates.

### Manager-side image verification (Wikimedia Commons API + archive.org + Google Patents)
Verified that the strongest new candidates are all **image-blocked** on free sources:
- **Allen-Bradley 1770-T2/T3 PLC programming terminal** — no CC/PD Commons images; archive.org only holds 1770-M10/M11/M12 memory-module manuals (not the terminal manual). Distinct interaction (graphical ladder-logic direct manipulation via hard-labeled symbol keypad) but no usable free image.
- **Honeywell TDC-2000** — image-blocked on Commons.
- **Foxboro SPECTRUM variable-function keyboard** — patent-only (US 4,303,973).
- **Magellan NAV 1000** — already deferred (zero CC images).
- **LORAN-C receivers** (Koden LR-770, Japan Radio JNA-760) — CC/PD images DO exist, but interaction is conventional (numeric display + keypad) and not distinct enough for the museum at 268 exhibits.

## Decision rationale

The strongest genuinely-new interaction-distinct candidates (Allen-Bradley PLC terminal, TDC-2000, Foxboro) all fall in the industrial process-control category, which is uniformly image-blocked on free/CC sources. Per the museum's consistent precedent (TSAS Vest, Braille 'n Speak, Serial Code Keyboard, etc.), a strong interaction is not promotable without a usable local image under `assets/wiki/`. Forcing a promotion with an image-blocked or patent-only source would violate the standing promotion rules.

## Files written
- `potential/runs/2026-09-22T12-37-17-229Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace
- `potential/runs/2026-09-22T12-37-17-229Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file
- `docs/beepy-memory.md` — appended durable lessons (industrial process-control image-blocked; music/marine angles exhausted)

## Verification
Not applicable — no collection edits were made. `src/data.ts`, `docs/hci-wiki.md`, and ToC are unchanged. No typecheck/build run needed (no code change).

## What still needs review / future paths
- **Allen-Bradley 1770-T2/T3 PLC programming terminal** is the priority image-resolution target for the industrial-programming-HCI gap. Needs a clean photo (museum, collector, or manual scan with usable figure). Revisit if an image surfaces.
- Honeywell TDC-2000 and Foxboro SPECTRUM consoles are strong interaction-distinct DCS candidates, also image-blocked; large physical units make museum-photo sourcing hard.
- Marine navigation LORAN receivers have free images but weak interaction distinctness — only revisit if a LORAN/fish-finder with a truly distinctive display (e.g., crosstrack-error graphic, plotter with rotary cursor) is confirmed.
- Image resolution for deferred candidates (Serial Code Keyboard, Touch-a-matic, Braille 'n Speak, Tomy Verbot) remains the primary collection-expansion path per prior runs.
