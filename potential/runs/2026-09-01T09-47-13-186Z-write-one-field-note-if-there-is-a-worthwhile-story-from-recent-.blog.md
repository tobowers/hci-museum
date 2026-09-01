# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Progress notes

- **Decision**: Yes, write one Field Note. Reviewed the collection snapshot, recent run summaries, and the memory's pending-unwritten-candidates list.
- **Candidate analysis**: The 08-31 morning batch (Psion Organiser I + Lexicon LK-3000) already got its note (`the-translator-that-traded-brains`). The 08-31 afternoon research run did NOT complete (no promotions, collection still at 232). So the freshest unwritten candidates come from the 08-28→08-30 batches: Amana Touchmatic, Polaroid Digital Palette, Ascom QuickFare, Collins EFIS, Orca Edge, Odyssey 2, plus older Fairchild Channel F and Invicta Electronic Master Mind.
- **Subject chosen**: **Orca Edge Dive Computer (1983)** — slug `orca-edge`.
  - Why it wins: the museum's only safety-critical wearable and its only "ambient display you reason about" artifact. Every display note in the collection hands you numbers, symbols, or a finished picture; the Orca Edge hands you twelve tissue bar graphs and asks the diver to infer decompression obligation by watching which bars cross a limiting line. Reading the instrument means reasoning about your own physiology from an abstract metaphor, not looking up a number. No near-neighbor note exists.
  - Rival analysis: Odyssey 2 (console sprouted a keyboard — overlaps the paper-that-was-the-buttons / keyboard-adjacent territory), Amana Touchmatic (brains-replaced-the-dial, milestone-appliance, less strange interaction), Polaroid Palette (physical-output spectacle, near-neighbor `the-printer-that-put-on-a-show`), Ascom QuickFare (physical-token family, near-neighbor iButton/TI-59 notes), Collins EFIS (color-is-state, aviation, no free photo). The Orca Edge's interaction channel (body-state visualization requiring human reasoning) is the rarest.
  - Nice era texture: one unit produced per day, 9V lithium cell, DEMA show Jan 1983, CHM accession 102716293, EdgeSimulator project, US Navy air tables as the hidden model.
- **File to write**: `docs/blog/the-machine-that-sketched-your-nitrogen.md` (~700-800 words). Links to orca-edge, plus near-neighbor cross-links (relax-stress-reduction, ibva, orca as contrast). Local image `../assets/wiki/orca-edge-dive-computer.jpg` (CC0, verified JPEG 3653x2275).

## Completion

- **File written**: `docs/blog/the-machine-that-sketched-your-nitrogen.md` (~700 words). Slug `the-machine-that-sketched-your-nitrogen`. Cross-links to orca-edge, p300-speller, ibva, relax-stress-reduction. One local image (`../assets/wiki/orca-edge-dive-computer.jpg`, CC0, verified JPEG).
- **Verification**:
  - `bun run typecheck` — PASS.
  - `bun run build` — PASS, 307 pages (306 prior + new post). Post confirmed rendered at `public/blog/the-machine-that-sketched-your-nitrogen/` with the local orca-edge image referenced (no remote hotlinks).
- **No collection changes**: only the new blog markdown was added; no src/data.ts or docs/hci-wiki.md edits.
