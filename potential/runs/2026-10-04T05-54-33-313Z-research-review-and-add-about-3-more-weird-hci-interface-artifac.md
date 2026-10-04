# Run trace — 2026-10-04 research/review/add ~3 weird HCI artifacts

Session start: collection at 288 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 288).
No stale active potential/*/info.json files found at start (clean).

## Angles chosen (3 fresh, image-productive)
1. Electronic reference/information appliances with unusual interaction (non-QWERTY, thumbwheel, dedicated keyboard).
2. Computer-linked home/scientific measurement instruments with distinctive display/input.
3. Electronic musical instruments with non-keyboard novel sensing (ribbon/touchplate/breath/continuous).

Launching 3 hci-research-subagents in parallel, each with ≤2 focused Octen searches.

## First subagent round results
- Subagent 1 (reference appliances): FAILED (URL/quote mangling in its Octen loop; no report).
- Subagent 2 (measurement instruments): Tektronix 492 Spectrum Analyzer (1978) — CC BY-SA 2.0 image (surplus "sad shape" shot), distinct instrument class from existing Tektronix oscilloscopes. Marginal (4th lab instrument). Also flagged Heathkit ID-4001 (image-blocked).
- Subagent 3 (music instruments): returned Cracklebox (ALREADY IN MUSEUM — dup), Moog Liberation (1980) — confirmed CC images, strap-on keytar + ribbon controller + aftertouch, genuinely new; Yamaha WX7 (redundant wind controller).

Relaunching subagent 1 (reference appliances) + one fresh angle (consumer physical-ritual electronics). Capping each at 2 Octen.

## Second subagent round results
- Subagent 4 (reference appliances retry): returned TI Speak & Learn Magic Wand, Sony Data Discman, TI Speak & Spell — ALL ALREADY IN MUSEUM (duplicates, subagent exclusion list incomplete). Not useful.
- Subagent 5 (consumer physical ritual): TI Dataman (1977, magnetic-stripe data card slide-through), Kodak Disc camera (1982), Nintendo Power Glove (1989 — already in museum).

## Review decisions
- Nintendo Power Glove: ALREADY IN MUSEUM — dup, reject.
- TI Dataman (1977): REJECTED. Near-duplicate of TI Little Professor (same company, same educational-math category, successor product) + the distinctive magnetic-card feature is UNVERIFIED (not in Wikipedia; datamath.org and NMAH fetches blocked; no wayback snapshot). Could not confirm the card slot. Per memory's fabricated-detail warning, dropped.
- Kodak Disc camera (1982): REJECTED. Flat rotating film disc mechanism is moderate; not really a computer/HCI interface.
- Tektronix 492 Spectrum Analyzer (1978): ACCEPTED as 2nd addition. First spectrum analyzer in museum (new instrument class vs existing oscilloscopes/logic analyzer). Marker-cursor frequency-domain display + IEEE-488 GPIB computer linkage. Image CC BY-SA 2.0 (surplus "sad shape" shot) — honest caption. Verified via Commons API.
- Moog Liberation (1980): ACCEPTED as primary addition. Strap-on body-worn keytar, spring-loaded ribbon controller for continuous pitch/portamento, aftertouch. Distinct embodied music-interaction form; no keytar in museum. CC images verified (CC BY 2.0 hero + CC BY-SA 3.0 neck).

Promoting 2 artifacts: moog-liberation, tektronix-492.
