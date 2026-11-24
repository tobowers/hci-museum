# Summary — 2026-11-24 research run

**Result:** Added **2** new exhibits to the museum (327 → 329). Both image-verified and documented in the wiki.

## Added
1. **Kodak Komstar (1977)** — computer-output-microfilm recorder. A mainframe's line-printer stream was written by laser onto dry-process microfiche/microfilm at ~120,000 char/s. Chosen as the deliberate *writing* counterpart to the museum's existing DASA Mark 18 *reader*-printer. Image: CERN PhotoLab 1981, CC BY 4.0.
2. **SAL-MAR Construction (1969–72, performed into the 1980s)** — Salvatore Martirano's touch-plate synth in which human and machine share the same switch bus, so the performer negotiates with a semi-autonomous sequencer rather than playing notes. Image: Sousa Archives, CC BY 2.0.

## What failed / was rejected
- **Aspen Movie Map** — proposed by a subagent but already in the museum. Verified and rejected.
- **Philips CD-i** — images fine but 1991 late-edge and weak information-retrieval framing.
- **Musée d'Orsay DEC system (1986)** — no free image.
- **Nicolas Collins trombone, STEIM Big Eye** — no artifact photo / overlaps excluded family.
- **DatagraphiX, Kodak IMT, Dymo/embossers** — no free machine images.
- Third slot deliberately left empty: Octen budget was exhausted mid-run; no padding with a weak candidate.

## Repairs made along the way
- `year` field had to be a string (build failed on a numeric year).
- The wiki intro count was stale by 5 (said 322 while data.ts held 327); corrected to 329. Flag: ToC/intro manual sync has drifted — future quiet-run task.

## Verification
- `bun run typecheck`: clean.
- `bun run build`: "329 exhibits + blog + about, 474 pages".
- Both images verified as real JPEGs, copied to `public/assets/wiki/`, and referenced on their exhibit pages.

## Budgets
- Octen 7/7 (used by research subagents; not retried after exhaustion). Exa ≤2. 3 subagents in parallel; one re-run after an empty return.
