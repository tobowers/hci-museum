# Summary — Research / review / add ~3 more weird HCI artifacts

**Run:** 2026-11-18T21-02-56-383Z
**Outcome:** 2 new exhibits promoted (target was ~3). Collection 321 → 323.

## Promoted

### 1. AVL Eagle / ShowPro Multi-Image Controller (1980)
- First *non-dedicated* multi-image programming computer: a 4 MHz Z80A CP/M 2.2 machine with an A/V interface board.
- PROCALL language drove up to 30 Ektagraphic projectors, 5 film projectors, 20 aux points.
- Control signals went out as audio-frequency "PosiTrak" streams over RCA/XLR cables to "Dove" boxes (3 projectors each).
- Synchronised to proprietary "ClockTrak" biphase timecode from a multitrack tape's control track.
- Tray slot 80 held a shared alignment grid across all projectors.
- **Why the museum wanted it:** output medium is a room of physical machines, not a screen; the "programmer" was a real, now-erased profession; zero overlap with existing projector/output entries.
- Images: 2× CC BY-SA 3.0 (AVL Eagle II) + 1× PD (1987 Ford show programming stations).

### 2. Genigraphics 100 Presentation Graphics Console (1973)
- GE CISS division; NASA space-flight-simulation origins; first commercial system to Amoco, 1973.
- 100/100A: array of buttons, dials, knobs, joysticks + built-in keyboard. 100B–D+: on-screen menus + graphics tablet + pen; later mouse-like device.
- PDP-11/40, DECtape, Forox recorder at 2,000 lines (up to 8,000).
- 1988 Microsoft partnership: PowerPoint 2.0 designed for Genigraphics recorders; palettes, gradients, clip art, "Send to Genigraphics".
- **Why the museum wanted it:** a dedicated pre-WIMP physical control surface, and the rare case of a product family visibly abandoning knobs for screen menus; direct genealogical ancestor of the default corporate slide.
- Images: 3× public domain (GE promo stills, c. 1973).

## Process notes
- Three `hci-research-subagent` runs launched in parallel. Two returned no usable candidates (one returned deliberation text only). The third surfaced the AVL lead.
- All candidate verification, image sourcing and promotion done manager-side against free Commons/Wikipedia sources.
- `scripts/promote-potentials.ts` NOT used (known broken: no image copy, no data.ts edit, no ToC update). Promotion done manually.
- Both `info.json` files archived to `info.json.archived`; `potential/**/info.json` count is now 0.

## Verification
- `bun run typecheck` — clean.
- `bun run build` — 323 exhibits, 464 pages.
- No remote image hotlinks introduced; all 6 images live under `assets/wiki/` and were confirmed with `file`.

## Rejected this round
Pen plotters (CalComp/HP 7475), strip-chart/seismograph recorders, lighting consoles, IBM 2250 (1969, outside window), flip-dot displays (already referenced as the foil in the Solari entry), and music controllers (SynthAxe, Pencept, EWI, breath controllers — all already present or saturated).

## Follow-ups
- One more candidate would reach the ~3 target; the AVL→Genigraphics seam suggests "timecoded live show control" as a productive axis to scout (lighting consoles, show controllers, multi-projector replay).
- Wiki ToC absolute numbering now understates the true exhibit count by 3 (pre-existing drift, not introduced this run).
