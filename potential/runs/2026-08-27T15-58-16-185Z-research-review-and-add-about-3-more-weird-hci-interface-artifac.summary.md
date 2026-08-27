# Run Summary: research-review-and-add-about-3-more-weird-hci-interface-artifacts

Date: 2026-08-27T15:58:16Z

## What this run set out to do
Find, review, and add up to ~3 more strange/embodied/interaction-model-rich HCI hardware artifacts from 1976–1992, favoring commercially-odd or interaction-method-distinct pieces. The candidate well was known to be thin.

## Outcome: 2 artifacts added to the collection

**Added 1: IBM 3614 Consumer Transaction Facility (1973–1981)** — slug `ibm-3614-atm`.
- IBM Systems Communications Division self-service banking terminal, announced Aug 1973, withdrawn Mar 1981 (spans the museum window).
- Extraordinarily embodied interaction model:
  1. **Self-closing face shutter** — a powered safety-clutch window covers the machine's face, opens only when a card is inserted, and closes itself 25 seconds after the last transaction. The machine shuts its own face on you.
  2. **Stripe-up card insertion** — the reverse of every modern ATM.
  3. **Card retention** — could physically seize a suspected-stolen card and raise a tamper alarm.
- Full banking (balance/deposit/bill-pay/check-cashing) on a 40-char prompt display with transaction chaining; receipt and deposit modules.
- Deployed inside the Smithsonian (visitors used a simulated bank card to fetch a pre-Civil War dollar bill) and an oak-panelled Pentagon enclosure.
- Fills the entire ATM / automated-self-service-banking gap in the collection.

**Added 2: Rockwell Collins EFIS / Boeing 757 Glass Cockpit (1982–1983)** — slug `collins-efis-glass-cockpit`.
- Boeing 757 (first flight Feb 1982, service Jan 1983) — first commercial airliner with a fully CRT color glass cockpit that removed the flight engineer.
- Genuinely novel embodied human-factors interaction:
  1. **Color as a semantic state machine** — armed captions blue, captured green; deviation scales white→amber→flash.
  2. **Automatic declutter** by flight condition.
  3. **Rising-runway symbol** that grows up the screen over the final 200 ft of radio altitude.
  4. **EFIS Control Panel** — rack-mounted keyshow mode/range/radar/DH switches per pilot.
- Fills the aviation / glass-cockpit gap; the museum's first aircraft HCI.

## Files written / changed
- `potential/runs/2026-08-27T15-58-16-185Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace.
- `potential/ibm-3614-atm/info.json` — research file (archived to `info.json.archived` after promotion).
- `potential/collins-efis/info.json` — research file (archived to `info.json.archived` after promotion).
- `src/data.ts` — added 2 exhibit entries (id `ibm-3614-atm` year 1973, id `collins-efis-glass-cockpit` year 1982).
- `docs/hci-wiki.md` — added ToC entries (#217, #218), updated intro project count to "two hundred and nineteen", appended both full wiki sections (Overview/Deep dive/Media/Sources).
- `assets/wiki/ibm-3614-atm.jpg` — downloaded public-domain hero (Informatyka 1976, 384×347 valid JPEG).
- `assets/wiki/b747-400-pfd-nd.jpg` — downloaded public-domain 747-400 PFD/ND display photo (2048×1536 valid JPEG).

## Verification
- `bun run typecheck` — PASS.
- `bun run build` — PASS (218 exhibits + blog + about, 287 pages).

## What was NOT added, and why
Per museum discipline (do NOT pad the collection; promoted exhibits need clean local images), the portable-data-terminal candidates (Telxon PTC-912, MSI Data pocket terminal, Datalogic ND2-8120) were reviewed and are interaction-model-rich but have ZERO freely-licensed images on Wikimedia Commons — image-blocked. Skipped rather than padded. Octen (7/7) and Exa (2/2) budgets for the run were fully consumed by the three research subagents; all remaining image validation was done via the Commons API directly.

## Still needs review
- Image resolution for the portable data terminals (a surviving Telxon PTC-9xx, an MSI Data pocket terminal, or the Datalogic ND2-8120, whose corporate history page hosts a viewable-but-unlicenced photo) would unlock that gap.
- Both added exhibits are single-image; a period brochure/ad for the IBM 3614 or a better Collins EADI/EHSI unit photo would strengthen them.
- Both are strong future Beepy Field Note subjects (the ATM that closes its own face; the color-is-state glass cockpit).