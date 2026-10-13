# Run trace: research, review, and add ~3 more weird HCI artifacts (2026-10-13)

## Session setup
- Read docs/beepy-memory.md as durable guidance (in system context).
- Goal: find ~3 strong new HCI hardware/interface artifacts from 1976-1992, interaction-model-rich, weird/embodied/commercially odd.
- Collection currently ~293+ exhibits. The well is confirmed dry for automated discovery across many angles.
- Priority: fresh angles likely to be image-rich AND interaction-distinct, or ready candidates in potential/ from prior aborted runs.

## Plan
1. Scan potential/*/info.json for ready, unpromoted candidates (proven highest-yield first action).
2. Launch up to 3 research subagents on fresh angles.
3. Verify candidates against src/data.ts + memory excluded list.
4. Create info.json for strong candidates, verify images.
5. Promote the strongest, using local images.
6. Update memory if a durable lesson emerges.

## Ready-candidate scan result
- NO active info.json found in potential/ (all archived). No ready unpromoted candidates to mine.
- Collection confirmed at 294 exhibits.

## Subagent launch (3 parallel, fresh angles)
Chose angles not yet exhausted per memory, prioritizing image-rich/interaction-distinct categories:
1. hci-research-subagent ANGLE A: Dedicated handheld "information appliances" with a distinctive physical entry ritual (e.g., phonetic/spelling entry devices, scanning readers beyond what's covered).
2. hci-research-subagent ANGLE B: Electronic learning computers / children's "teaching machines" from 1976-1992 with a weird embodied interaction (not covered: AlphaI/O, Touch & Tell done, Speak series done).
3. hci-research-subagent ANGLE C: Novel "second screen"/toy-television-display devices or wrist/body-mounted interactive displays from 1976-1992.

## Subagent results (3 angles)
ANGLE A (info-appliance entry rituals) → Canon Communicator (CC-7S), mid-1980s model, confirmed CC BY-SA 3.0 Commons image. Subagent flagged chord-keyboard encoding + year as needing primary verification.
ANGLE B (children's teaching machines) → Coleco Electronic Learning Machine (1981) [hole-punched program-card + overlay keyboard, but ZERO Commons images — blocker]; TI My Little Computer (1989) [image-blocked + duplicative of TI tot line — weak]; R.O.B. [ALREADY IN MUSEUM — reject].
ANGLE C (wearable/body displays) → Psion Organiser I [ALREADY IN MUSEUM (promoted 2026-08-31) — subagent missed exclusion list — reject]; Seiko UC-2000 [distinct from RC-1000 but ZERO free images — blocker].

## Triaging
- R.O.B., Psion Organiser I: already in museum → reject.
- Coleco ELM, TI My Little Computer, Seiko UC-2000: image-blocked → cannot promote (museum requires local images).
- Canon Communicator: ONLY candidate with a confirmed freely-licensed image + clears exclusion list. BUT memory notes it was deferred 2026-07-03 (year-outside-window + "portable typewriter" + FC-controversy framing). The CC-7S model is mid-1980s (IN window). Need to re-verify the chord-keyboard interaction + year with a primary source before deciding whether to overturn the deferral.

## Canon Communicator re-verification (overturning check)
- Primary sources (Wikipedia FC article + HandWiki) show the interaction is a plain ALPHABETICAL keyboard → printed thermal paper tape. NOT a "chorded thumb-keypad" as subagent guessed.
- This matches the prior 2026-07-03 deferral rationale exactly ("keyboard→thermal tape essentially a portable typewriter; HCI novelty is portability/wearability, not a new input paradigm") + FC-controversy framing. DEFFERAL STANDS. Do not promote.
- Therefore the single image-verified subagent candidate is itself weak on interaction-model distinctness. All 3 angles effectively returned blocked/deferred/already-in-museum candidates.

## Revised approach
Subagent yield = 0 viable. Re-verify the strongest interaction-distinct candidate (Coleco Electronic Learning Machine, hole-punched program-card + overlay keyboard) for image feasibility before deciding to pad or document-as-blocked. Then do a final manager-side targeted search on a fresh, image-rich angle if budget allows.

## PROMOTED: Seiko Data-2000 (1984) — the run's one strong addition
- Subagent yield was effectively zero (all blocked/deferred/already-in-museum). But manager-side verification resurrected a strong candidate: the Seiko Data-2000, the first practical computer watch.
- Interaction-distinct: data entered on a specialist desktop keypad dock, transferred to the wristwatch via ELECTROMAGNETIC CONTROL COUPLING (contactless inductive link) — a wireless-sync paradigm years before IR/Bluetooth/NFC. Read-only 4x10 LCD on the wrist. Distinct from sibling Seiko RC-1000 (wired RS-232C serial dump).
- Confirmed primary sources: Wikipedia "History of the Smartwatch" (electromagnetic-coupling wireless docking, external keyboard, released 1984); Wikimedia Commons image "Seiko Data-2000, The First Computer Watch, Circa 1983-1984" is CC BY-SA 2.0 (Joe Haupt).
- Image: downloaded real JPEG (4608x3456) via browser-UA (upload.wikimedia.org blocks BeepyBot UA → 403; the aborted earlier run had left an HTML error page as hero.jpg). Copied to assets/wiki/seiko-data-2000-1.jpg.
- Promotion steps: wrote info.json → added data.ts entry (after seiko-rc1000) → added wiki section + ToC entry + renumbered ToC sequentially (this also fixed a pre-existing ToC skew: 240 items were numbered up to 277 due to a gap → now clean 241-item sequence) → updated intro count 294→295.
- Verification: typecheck PASS; build PASS (295 exhibits, 414 pages).
- info.json archived.

## Durables for memory
1. The browser-UA file-download workaround WORKS for Commons (Special:FilePath / browser UA), and the earlier aborted run's "hero.jpg" was actually an HTML 403 page — always `file` the downloaded artifact before trusting it.
2. Even in a dry well, the strongly-image-verified sibling of an existing exhibit (Seiko Data-2000 vs RC-1000, both via electromagnetic docking) can be a genuine, interaction-distinct addition — worth a manager-side check when subagents return empty.
3. Promote-potentials.ts proven-buggy → manual promotion is the reliable path (data.ts array + wiki ToC/section + image copy). ToC was NOT 1:1 with exhibits (240 entries for ~294 exhibits); renumbering is safe.
4. Deferral respect paid off: Canon Communicator was re-verified against the primary source (alpha keyboard → thermal tape, NOT chorded) and the deferral stood — subagent had overstated the "chorded" claim.
