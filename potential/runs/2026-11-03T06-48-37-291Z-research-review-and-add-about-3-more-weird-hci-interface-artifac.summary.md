# Run Summary — research, review, and add ~3 weird HCI artifacts

**Run ID:** `2026-11-03T06-48-37-291Z`
**Outcome:** **Zero-addition run.** Collection remains at **309 exhibits**. No promotions, no `src/data.ts` / `docs/hci-wiki.md` edits, no images copied.

## What we did

Scouted three fresh angles for strange/embodied HCI artifacts (1976–1992):

1. **Drafting / measurement input**
2. **Odd consumer entertainment peripherals**
3. **Professional / industrial control surfaces**

Plus a follow-up wave on **body / non-hand control**.

## Findings — all dead ends

| Candidate | Verdict | Reason |
|---|---|---|
| Polhemus 3SPACE | Rejected | Already in museum as `polhemus-isotrak` |
| Gerber large-format digitizing station | **Rejected** | Rebadged Summagraphics magnetostriction tablet (Wikipedia: "A large-format graphic tablet by manufacturer Summagraphics (OEM'd to Gerber)"). Same interaction model as existing `summagraphics-bit-pad`. Image `File:Tablet gerber.jpg` has no machine-readable model/date and a dead source. |
| HP 9874A digitizer | **Rejected** | Another Summagraphics private-label rebadge (HP is listed as an OEM customer). Not distinct. |
| Consumer-entertainment peripherals (wave 1) | No candidate | Returned only in-museum items (R.O.B., Sega R360, Big Trak, Fidelity Voice Chess, Simon, Merlin) |
| Body / non-hand control (wave 2) | No candidate | No verified promotable candidate; `active-badge` already in museum |
| Honeywell TDC 2000 / Foxboro VIDEOSPEC | Blocked | No usable images |

## Key lesson (recorded in `docs/beepy-memory.md`)

**The rebadge trap.** Summagraphics sold its magnetostriction digitizing tablets rebadged to HP, Tektronix, Apple, Evans & Sutherland, and Gerber. A "new" brand-name digitizer from the 1977–1985 era is very likely the same analog tablet under a different badge. The digitizer/tablet category is effectively saturated (summagraphics-bit-pad, koalapad, pencept-penpad, grafbar-sonic-digitizer, Quantel Paintbox). Verify the underlying OEM technology before treating a brand-name device as a distinct candidate.

## Budgets / process
- Octen: 7/7 exhausted (consumed by subagents) — no further focused web search.
- Exa: 0/2 used.
- Free channels only after exhaustion: Wikipedia, Wikimedia Commons, Google Patents.

## Verifications
- `potential/` swept: **zero active `info.json`** files (nothing to promote).
- Confirmed `gerber` / `9874` / new `summagraphics` entries absent from `src/data.ts`.
- No code changes made, so no typecheck/build required.

## Rationale
Per standing guidance — *"Add fewer artifacts when quality is low; do not pad the collection"* — all three chosen angles resolving to either already-in-museum artifacts or OEM rebadges of an existing exhibit correctly yields a zero-addition outcome.

## Files touched
- `potential/runs/2026-11-03T06-48-37-291Z-....md` (live trace, appended)
- `potential/runs/2026-11-03T06-48-37-291Z-....summary.md` (this file)
- `docs/beepy-memory.md` (durable lesson appended)
