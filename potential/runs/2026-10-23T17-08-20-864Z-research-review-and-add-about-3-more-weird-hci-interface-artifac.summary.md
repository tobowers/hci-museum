# Run summary: 2026-10-23T17-08-20-864Z

## Result
Promoted **1** exhibit to the collection (data.ts 302 → 303). Two further candidates were assessed but not promoted (below).

## Changed artifacts

### Promoted
- **Brother Punch-Card Knitting Machine (KH-860)** (1985) — domestic flatbed knitting machine programmed by hand-punched cards, one card row = one knitted row. New interaction channel (physical punched-card program producing fabric, not computation). Image-backed and verified.
  - `src/data.ts`: added `brother-punch-card-knitting-machine` entry (year-sorted after Pfaff Creative 1471).
  - `docs/hci-wiki.md`: added wiki section, ToC entry #301, updated intro count 299 → 301.
  - `assets/wiki/punch-card-kh-860.png`: CC BY-SA 3.0 image (File:Punch_card_kh_860.png on Wikimedia Commons), file-verified PNG 637×877.
  - `potential/brother-punch-card-knitting-machine/`: info.json → info.json.archived; image downloaded to `images/`.

## Candidates assessed but NOT promoted
- **Sharp IQ-3000 (1979)** — verified (JBMIA history) as a genuine first (handheld electronic dictionary with kana input), but **zero usable images on Wikimedia Commons** (API search returned 0 hits). Image-resolution bottleneck; deferred.
- **Sharp Talking Time CT-660E (1979)** — speech-synthesis clock; interaction novelty thin against the collection's crowded speech family (TRS-80 Voice Synthesizer, Votrax Type-N-Talk, Echo II, HERO 1, Topo II), and the specific-unit image was blocked. Skipped.
- **Votrax Type 'N Talk** — genuinely distinct standalone desktop TTS, but already thoroughly referenced inside the TRS-80 Voice Synthesizer wiki entry; would be a near-duplicate. Not promoted.

## Verification notes
- Punch-card knitting machine interaction model confirmed via Wikipedia ("Knitting machine"): cards switch needles between alternate cam paths (knit/slip/tuck), one card row per knitted row; Brother and Silver Reed the domestic makers. Jacquard lineage (1804 loom) and Hollerith (1890 census) confirmed.
- Confirmed no knitting machine previously in collection (`grep -i knit` only matched Exciting Boxing's knitted gloves); Pfaff is sewing, not knitting — distinct category.
- Image license checked: BrotherKX395.jpg rejected (GFDL + CC BY-NC-ND 3.0 — unsuitable); Punch_card_kh_860.png accepted (CC BY-SA 3.0).

## Budget / constraints honored
- No new Octen or Exa calls (both exhausted). Verification used free direct fetches only (Commons file pages + API, Wikipedia).
- Verified all candidates manually against src/data.ts exclusion before promoting.

## Remaining review items
- Sharp IQ-3000 electronic dictionary remains a strong candidate if a usable image surfaces (museum archive or later Commons upload); revisit when imagery available.
