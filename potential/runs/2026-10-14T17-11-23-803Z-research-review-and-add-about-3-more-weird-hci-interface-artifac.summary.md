# Run Summary: research, review, and add ~3 weird HCI interface artifacts (1976–1992)

Date: 2026-10-14T17:11:23.803Z
Goal: find, review, and promote ~3 more weird HCI hardware/interface artifacts.
Outcome: **0 exhibits promoted**. Flat 295 → 295. Zero-addition run (honest outcome; all three surfaced candidates rejected on overlap/quality grounds).

Trace: `potential/runs/2026-10-14T17-11-23-803Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`

## What happened

Three angles were scoped, one candidate each surfaced and was manually verified against the collection:

### A1 — Telephony physical ritual → BT Cardphone (1981–82) — REJECTED (duplicate)
British Telecom / Landis+Gyr optical stored-value card, whose balance the payphone's thermal head physically burns into a printed balance strip. Verified against the collection and found to be a **near-duplicate of the Optel Optical Phonecard (1977) already promoted** (wiki "Optel Optical Phonecard" section): the same Landis+Gyr/Sodeco optical-card technology and the identical interaction model (value-as-burnable-matter, destructive readout). Different brand/operator (BT UK vs. Austrian Optel) but the technology and thesis are the same. Rejected; category is filled. Recorded in memory as a do-not-re-scout.

### A2 — Word-processor special keys/display → IBM Displaywriter (1980) — REJECTED (saturated category)
Dedicated CRT word processor with display editing + soft keys. The word-processor/CRT-editing category is already saturated (Brother WP1, Canon Cat, CPT 8100, Linotype CRTronic, Microwriter, Xerox Cat, Fujitsu OASYS, Sony Typecorder). Interaction is not distinctive enough to justify another entry. Rejected.

### A3 — Consumer control surface/readout → Pentax Digital Spotmeter (1982) — REJECTED (weak fit)
Professional analog→LED light meter with a rotary calculator dial. Not a computing interface; weak HCI fit against the artifact-forward, interaction-model-is-the-point bar. Rejected.

## Changed files
```text
M docs/beepy-memory.md            # recorded BT Cardphone as rejected duplicate (do-not-re-scout) + zero-addition run note (295)
?? potential/runs/2026-10-14T17-11-23-803Z-....md   # live trace
```
A temporary `assets/wiki/bt-cardphone.jpg` download and `potential/bt-cardphone/` dir created during verification were removed — not promoted, not kept.

## Verification
- Exhibit count confirmed via `grep -cE '^\s{4}id: "' src/data.ts` → 295 (unchanged).

## Notes / follow-ups
- The overlap was caught during manual verification *before* building an info.json — exactly the workflow the memory mandates (verify against the collection / excluded lists first). Optical-phonecard is a filled category; do not re-scout.
- 0 of ~3 requested additions were made: all three candidates failed the four promotion criteria (distinct interaction, free images, not-in-collection, in-era). This matches the established norm at 295 exhibits — zero-addition runs are expected, do not pad the collection.
- Strong *image-blocked* candidates remain the only realistic expansion path; no new image-blocked-but-interaction-rich device surfaced this run beyond already-tracked ones.
