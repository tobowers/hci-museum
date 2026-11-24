# Summary — 2026-11-24 (evening) research run

**Result:** Added **3** new exhibits to the museum (329 → 332). All image-verified and documented in the wiki.

## Added
1. **Linn 9000 (1984)** — Linn Electronics' successor to the LinnDrum. The pad-as-program idea from the LM-1 matured into a workstation: 18 velocity/pressure pads, LCD, mixer, 18 individual outputs, optional sampling and MIDI sequencing on one surface. Its chronic, unfixable firmware bugs helped sink Linn Electronics (later fixed and reissued by Forat as the F9000) — a rare artifact where the interface model and its software failure are inseparable. Images: CC BY-SA 3.0 (top view + brochure page).
2. **E-mu Drumulator (1983)** — the first programmable sampled drum machine under $1,000 ($995; 10,000+ units in two years). The mass-market cut-down of the Linn/TR paradigm; cheap swappable EPROM sound packs (Digidrums' Rock Drums on Tears for Fears' "Shout"); direct predecessor of the SP-12. Images: CC BY-SA 4.0 (front + rear).
3. **Oberheim Prommer (1984)** — a monophonic sampler whose output medium is a UV-erasable EPROM chip for the DMX/Linn/Simmons/Sequential drum machines. Nicknamed the "ROM toaster"; turns sampling into a physical, irreversible act and moves the sound library from maker to user. Triggerable via MIDI or the pre-MIDI Oberheim Parallel Buss. Images: CC BY-SA 4.0 + CC BY-SA 2.0.

## What failed / was rejected
- Three research subagents for new angles (body-worn/clinical input; analog/hybrid continuous-quantity; service-counter/public terminal) all returned **no promotable candidates** — blocked on free-licensed images, step caps, or overlap (Nintendo Power Pad already in the museum).
- Octen budget (7 shared) was exhausted by the subagents; Exa unusable for broad discovery. Pivoted to direct Commons/Wikipedia API probing (free).
- Carried-over candidates from the earlier 10-26 run (Linn 9000 / Prommer / Drumulator) were re-verified: absent from `src/data.ts`, images live — promoted all three.

## Repairs / housekeeping
- Wiki intro count corrected 329 → 332 to match `src/data.ts` (`grep -cE '^\s{4}id: "'`).
- ToC entries added as 264a/264b/264c after the Linn LM-1 entry (ToC numbering is still internally messy; not renumbered).
- `info.json` archived to `info.json.archived` for all three to prevent auto-promotion.

## Verification
- `bun run typecheck`: clean.
- `bun run build`: "332 exhibits + blog + about, 477 pages".
- All six images confirmed real (`file`), copied to `assets/wiki/`, and referenced on their exhibit pages.

## Budgets
- Octen 7/7 (spent by research subagents). Exa ≤2, effectively unused. 3 subagents in parallel, all empty.
