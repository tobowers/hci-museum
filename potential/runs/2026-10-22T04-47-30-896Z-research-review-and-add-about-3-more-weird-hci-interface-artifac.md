# Run trace: research, review, and add ~3 more weird HCI interface artifacts (1976–1992)

Started 2026-10-22. Collection at 299 exhibits. Memory reports the well is dry for automated
discovery across most tried angles; recent runs (10-18, 10-19, 10-21) were zero-addition.
Key deferred image-blocked candidates (Game Handler gyro NES, Braille 'n Speak, Tomy Verbot,
Serial Code Keyboard, HP 8566A) still have no usable images.

Strategy this run: launch 3 research subagents on genuinely FRESH angles not exhausted in prior
runs, each angle chosen to avoid the collection's saturated categories. Verify every candidate
against src/data.ts manually (subagents do not honor exclusion lists).

## Angles chosen
1. Telecommunications operator / manual-switchboard-era computer interfaces that moved past Bell TSPS.
2. Self-service / unattended kiosks and transaction terminals beyond POS/ATM (post office, photo, parking, library, video rental).
3. Broadcast/studio audio-video routing and monitoring consoles with distinctive physical interfaces (beyond CMX / Strand / Synclavier).

Will document candidates, decisions, and blockers below as work proceeds.

## Outcome: 2 promotion-ready candidates built (both image-verified); blog draft written

The broadcast/studio angle produced two genuinely new, image-verified candidates; the
telecom-operator and self-service-kiosk angles were image-blocked (see blockers below). No
promotion to `src/data.ts` / `docs/hci-wiki.md` was performed — left for explicit approval per
guardrail. Candidate `info.json` files staged under `potential/`.

### Candidates built (image-verified, promotion-ready)

1. **SSL SL 4000 E — Total Recall (1979)** — `potential/ssl-sl4000-total-recall/`
   - Interaction model: the first mixing console to save & recall every control position (to a
     5¼-inch floppy), but recall is NOT automatic — a color-coded display guides the operator to
     physically re-turn each non-motorized pot to its stored value. **Human-as-actuator**: machine
     remembers, human hands restore the physical world.
   - Distinct: nothing like it in the collection (no mixing console at all); fills a new category.
   - Fully verified against primary sources: Wikipedia Solid State Logic + SL 4000 pages confirm
     the Total Recall mechanism verbatim; E series 1979, G series 1987, fader automation on the B
     (1976). Images: SSL SL4000G+ (Townhouse #1000) + Sonic Ranch SSL 4000 E/G ("G Series
     Computer, G+ Software and Total Recall").
   - Blog draft: `docs/blog/the-console-that-asked-you-to-remember-for-it.md`.

2. **Harrison SeriesTEN (1988)** — `potential/harrison-seriesten/`
   - Interaction model: the opposite pole of 1980s console automation — assignable controls. A
     small set of software-reassignable knobs per channel replace the wall of dedicated pots; a
     knob's meaning changes with the selected function. First digitally controlled analog console
     with automation (per its Commons image caption).
   - Distinct: complements the SSL candidate (machine-owns-few-controls vs. machine-guides-many-
     controls). Flagged as a judgement call whether to promote both, given family overlap.

### Verification & source-rot notes (for the future)
- Sound on Sound URLs now return HTTP 410 (Gone) after a CMS restructure. Both the SSL-4000
  review and the Harrison digitally-controlled-console article URLs are dead. The core Total
  Recall mechanism IS confirmed by the live Wikipedia SL 4000 article; the SOS quotes were
  corroborated at research time but their URLs are broken. Dead SOS URLs were removed/flagged in
  both info.json `sources` arrays. Re-find the current SOS URLs before promotion.
- Harrison's specific "five assignable knobs per channel" detail came from the (now dead) SOS
  Oracle article; general web search returned nothing authoritative (results polluted by George
  Harrison). The "world's first digitally controlled analog console with automation" claim IS
  confirmed by the image caption itself. Verify the assignable-knob count against a live source
  before promotion if you want the number on record.

### Blockers (image-blocked candidates this run)
- Telecom operator angle: several candidates (QuinType word processor, various operator work-
  stations) image-blocked; no freely-licensed images.
- Self-service kiosk angle: all candidates (ByVideo 1985 interactive video terminal, 3M SelfCheck
  library, Fuji/AFGA self-serve photo, post-office terminals) image-blocked; patent drawings
  depict architecture not the cabinet. No usable exhibition images.
- No mixing-console image beyond the two candidates; SSL/Harrison were the only image-productive
  broadcast candidates.

### Files changed (all staged, not committed)
- `potential/ssl-sl4000-total-recall/info.json` + `images/ssl-sl4000g.jpg` + `images/sonic-ranch-studio.jpg`
- `potential/harrison-seriesten/info.json` + `images/harrison-seriesten.jpg`
- `docs/blog/the-console-that-asked-you-to-remember-for-it.md` (Field Note draft)
- this run trace

### Open decision (needs human/manager)
Promote SSL Total Recall (recommended — strong, unique interaction model, fully verified) and
Harrison SeriesTEN (optional — pairs with SSL but shares the console-automation family)? Promotion
requires: copy images to `assets/wiki/`, add entries to `src/data.ts`, append wiki section +
Table of Contents in `docs/hci-wiki.md` — the `promote-potentials.ts` script does NOT handle any
of these three (per memory), so promotion is a manual step.
