# Run Summary: research-review-and-add-about-3-more-weird-hci-interface-artifacts

Date: 2026-08-27T02:00:57Z

## What this run set out to do
Find, review, and add up to ~3 more strange/embodied/interaction-model-rich HCI hardware artifacts from 1976–1992, favoring commercially-odd or interaction-method-distinct pieces. The candidate well was known to be thin.

## Outcome: 1 artifact added to the collection

**Added: IBM 5265 Point of Sale Terminal / IBM 5260 Retail System (1979)** — slug `ibm-5265-retail-system`.
- IBM General Systems Division's standalone retail register for small stores, announced 8 Jan 1979, withdrawn 16 Apr 1986.
- Two genuinely physical, interaction-model-rich ideas:
  1. **Rolling-cylinder prompt** — the cashier is guided through each transaction by a mechanically rotating cylinder of printed captions visible through a small window, customizable with prompt stickers. Software UI rendered as clockwork.
  2. **Paper-overlay programming** — the terminal is fully reprogrammed on the spot by draping printed paper keyboard overlays across deliberately awkward chicklet keys, no host connection.
- Data to removable 8-inch floppy disks; standalone, cluster to 10, or Bisync to System/34/32/3; $3,850.
- Distinct interaction niche: the pre-screen retail register — the mechanical/physical counterpoint to ViewTouch (1986, the museum's first graphical touchscreen POS).

## Files written / changed
- `potential/runs/2026-08-27T02-00-57-803Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — live trace.
- `potential/ibm-5265-retail-system/info.json` — research file (then archived to `info.json.archived` after promotion).
- `src/data.ts` — added exhibit entry (id `ibm-5265-retail-system`, year 1979).
- `docs/hci-wiki.md` — added ToC entry (#216), updated intro project count to "two hundred and seventeen", appended the full wiki section with Media + Sources.
- `assets/wiki/ibm_5260_retail_prototypes.jpg` — downloaded CC BY-SA 4.0 hero image (Norsk Teknisk Museum, 779×1240 valid JPEG).
- `docs/beepy-memory.md` — appended run lessons + deferred candidates.

## Verification
- `bun run typecheck` — PASS.
- `bun run build` — PASS (216 exhibits + blog + about = 284 pages).

## What was NOT added, and why
Per museum discipline (do NOT pad the collection; promoted exhibits need clean local images), several strong interaction-model candidates were reviewed but deferred because no freely-licensed image could be sourced (Octen/Exa budgets were fully exhausted; verified via direct Commons API sweeps showing 0-hits):
- **Ampex ACE edit controller (1981)** — early production IR touchscreen; only all-rights-reserved operator-guide screenshots (evl.uic.edu). Deferred for image resolution.
- **Rockland 7530A FFT Spectrum Analyzer (1980)** — brilliant 3-knob "intelligent interface" HCI story; ZERO free unit photos on Commons. Deferred.
- **Nicolet 4094 light-pen scope (1981)** — optical light-pen; no free images. Deferred.
- **ViewTouch (1986)** — returned by a subagent as "new" but is ALREADY a museum exhibit (first graphical touchscreen POS). Excluded.

## Still needs review
- Image resolution for the deferred candidates remains the primary path to expand the collection: Ampex ACE (potential EVL/UIC permission), Rockland 7530A (a surviving unit photo), Nicolet 4094 (a surviving unit photo).
- The IBM 5265 could get a second image if a period brochure or ad scan surfaces (currently single-image).
- A Beepy Field Note for the IBM 5265 (rolling-cylinder-prompt angle, or the "instructions in paper & clockwork" angle vs. ViewTouch's software UI) is a strong future blog candidate but was not written this run to keep the run focused.