# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start (2026-10-20 17:13 UTC)

- Collection at 299 exhibits (src/data.ts grep -cE '^\s{4}id: "' = 299).
- No stale active (non-archived) info.json in potential/ (scanned 305 dirs).
- The well is documented as very dry at this size. Plan: 3 parallel research subagents,
  each on a genuinely novel, likely-image-rich angle, with precise Octen queries.

### Angles chosen
1. Handheld/desktop electronic reference appliances (dictionaries, Bibles, encyclopedias,
   translators) with distinctive query/search interaction — beyond Franklin Spelling Ace,
   Lexicon LK-3000, Craig M100 already in collection.
2. Computer-controlled scientific/clinical sample-processing & measurement instruments
   with an embodied "physical program" interaction ritual (autosamplers, titrators,
   clinical analyzers) — genuinely unexplored category.
3. Weird home-robot / robotic-toy interfaces and hobby robotics controllers beyond the
   covered robots (HERO, Topo, RB5X, Big Trak, Armatron, Valiant Turtle).

### Tool budget (shared): 7 Octen, 2 Exa
- Subagents may each use at most 2 Octen / 1 Exa.
- Manager-side image/license verification via Wikimedia Commons API (free).

## Findings appended below as subagents report back.

## Subagent findings + verification

### Subagent A (electronic reference appliances)
- Sony Data Discman DD-1EX — DUPE: already in museum (promoted 2026-08-01; src/data.ts:1808).
- Langenscheidt alpha 8 (1983) — subagent reported ZERO images, which was WRONG. The file
  `File:Langenscheidt_Alpha8.jpg` EXISTS on Commons (CC BY-SA 3.0 de). PROMISING.

### Subagent B (lab automation instruments)
- Technicon AutoAnalyzer II (Sampler II program-cam) — embodied physical-program interaction,
  but debut 1970/1974 pre-window; images are pre-window AutoAnalyzer I. Marginal / image-blocked.

### Subagent C (hobby robotics)
- Fischertechnik Digitaltechnik logic modules — physical plug-in logic-gate programming, but a
  construction kit, not a discrete artifact. Weak fit.
- Tomy Rascal command-cards — unverifiable claims, discarded.

## Direct Commons verification
- `File:Langenscheidt_Alpha8.jpg` confirmed present (one hit) — CORRECTED subagent false negative.
- Langenscheidt not in src/data.ts or docs/hci-wiki.md (grep = 0).

## Secondary-angle probes (all returned nothing usable)
- Smithsonian / Science Museum Group API for an in-window Technicon AutoAnalyzer II image → 301/empty.
  AA II dropped (debut pre-window + no free in-window image).
- Commons dictation/voice-memo and Franklin electronic-dictionary probes → no new images.
- Sony Data Discman (subagent A) confirmed as existing exhibit — caught as a dupe.

## FINAL OUTCOME — 1 candidate promotable, 2 documented-but-not-promoted
The well is extremely dry (299+ exhibits; most supplementary categories yield dupes or image-blocks;
memory strongly cautions against padding and explicitly allows fewer than 3 when fewer are ready).
I add ONE strong, fully-verified artifact rather than padding with image-blocked or weak fits.

### Langenscheidt alpha 8 (1983) — PROMOTABLE
- Sharp-built for Langenscheidt; combined calculator + bilingual dictionary, 8,000 words (4,000/lang),
  five language editions (German paired with English/French/Italian/Spanish/Latin; Latin edition sold
  as "Elektronischer Vokabel-Trainer Latein").
- Interaction genuinely novel vs. the museum's QWERTY-translators (Craig M100) and phonetic-reference
  (Franklin Spelling Ace): NO keyboard. Lock first two letters with ABC1/ABC2 alphabet keys, scroll the
  alphabetized word list with up/down search arrows, press Übers. to reveal. Adds a Memo word list
  (16 entries) and an Üben spaced-practice quiz mode. No abstraction over the data structure.
- Image-verified: File:Langenscheidt_Alpha8.jpg (CC BY-SA 3.0 de, 421x743). Downloaded to
  potential/langenscheidt-alpha-8/images/langenscheidt-alpha8-1.jpg.
- Artifact: potential/langenscheidt-alpha-8/info.json.archived
- Blog draft: docs/blog/the-dictionary-you-scroll-by-hand.md
- NOT promoted to docs/hci-wiki.md or src/data.ts (requires explicit request).

### Documented but NOT promoted
- Technicon AutoAnalyzer II — distinctive physical-program-cam + pump-ratio sample processing, but
  debut pre-window and no free in-window image.
- Fischertechnik Digitaltechnik — physical plug-in logic-gate programming, but a construction kit.

## Run summary
- Subagents A/B/C ran; corrected a false negative (alpha 8 image) and caught a dupe (Data Discman).
- One genuinely strong, image-verified, interaction-distinct artifact found and packaged.
- Honest outcome: 1 promotable, not 3 — the well is dry and the memory explicitly allows fewer.
