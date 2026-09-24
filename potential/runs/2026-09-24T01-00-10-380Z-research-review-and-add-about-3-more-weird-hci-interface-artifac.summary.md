# Run summary: research-review-and-add-about-3-more-weird-hci-interface-artifac (2026-09-24)

## Outcome
Added **1** artifact to the collection: **Mufax Courier (1975)** — the museum's first telefacsimile artifact. Only one candidate met all promotion criteria (distinct interaction, freely-licensed images, not in collection, era). The other candidates were image-blocked or interaction-incremental; per museum discipline the collection was NOT padded to hit the "about 3" target.

## Artifact added to the collection
- **Mufax Courier (1975)** — Muirhead & Co. portable drum-based fax. Embodied ritual: wrap page around rotating drum, dial on an ordinary phone, seat handset in acoustic coupler. Notable HCI detail: the sending side's "1-bit instant feedback" lamp tells the operator mid-transmission that the far end is receiving a bad scan — a binary telemetry channel rendered as a light, decades before modem/network status lights. Belongs to the telephony family (Novation CAT, TI Silent 700, Hayes Smartmodem).
  - slug: `mufax-courier`, sortYear 1975
  - 3 local images: assets/wiki/mufax-sending-half.jpg (hero), mufax-receiving-half.jpg, mufax-controls-sending.jpg (CC BY-SA 2.0, resized to 1200px)

## Files written
- `potential/mufax-courier/info.json` → archived as `info.json.archived` after promotion
- `potential/mufax-courier/images/mufax-*.jpg` → copied/resized to `assets/wiki/`
- `src/data.ts` — added `mufax-courier` exhibit entry (272 exhibits)
- `docs/hci-wiki.md` — added ToC entry (272), updated intro count to "two hundred and seventy-two", appended wiki section with 3 media images + sources
- `potential/runs/2026-09-24T01-00-10-380Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-09-24T01-00-10-380Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Verification
- `bun run typecheck` — PASS
- `bun run build` — PASS (272 exhibits, 372 pages)
- Built page `public/exhibits/mufax-courier/index.html` verified with local `assets/wiki` image refs (no remote hotlinks)

## Candidates reviewed but NOT promoted
- **QWIP TWO / QWIP 401E (1980-82)** — most interaction-distinct fax (handset-into-acoustic-coupler + rotating drum + speed/contrast + test-sheet ritual; firmly in window; Powerhouse + Canada SciTech museum holdings). BLOCKED: zero freely-licensed images on Commons. Revisit if a period unit photo surfaces.
- **Ricoh PF-2 (1991)** — world's smallest fax, in-car adaptor. BLOCKED: only CC BY-NC-SA (non-commercial) image, not fully free.
- **HP 3820A / Geodimeter System 2000 / Wild DI1000+GRE / Sokkia SET** (surveying hand-controller instruments) — strong embodied field-computing interaction, ALL image-blocked on Commons. Revisit with unit-photo/brochure/manual-scan source.
- **Robertshaw Energy Manager program-card thermostat / Constructa Programmkarte washing machine** — image-blocked + need period-manual confirmation. Revisit if images surface.
- **Intermatic TN311 timer** — free image but interaction is a mechanical rotary timer, not distinctively computer HCI. Rejected.

## Still needs review
- Image resolution for the interaction-strong deferred candidates above is the primary expansion path. QWIP TWO is the highest-priority fax image-resolution target.
- A future themed run could pair a fax artifact with the telephony family; a Field Note on the Mufax Courier (the "one-bit feedback lamp" / drum ritual) is a candidate for a later blog run.
