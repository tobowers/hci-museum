# Run Summary — 2026-09-15T12-37-20-009Z

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992.

## What changed

**Added to the collection: 1 exhibit** — BSR/X10 Command Console (1978).

The collection was already at 261 exhibits; per standing guidance ("do not pad; accept fewer additions when quality is low"), this run added the single strongest, image-verified, genuinely-new candidate found. The well is confirmed thin for automated discovery.

### BSR/X10 Command Console (1978)
- **What it is:** The first general-purpose home-automation controller, developed by Pico Electronics (Glenrothes, Scotland), sold by X10 Ltd / BSR at RadioShack and Sears from 1978.
- **Why it belongs:** Fills an entirely unrepresented category (home powerline-automation controller). Its interaction is a strange, embodied, pre-screen ritual — no display, no software: a rotary house-code dial (A–P) + unit button grid (1–16) + On/Off/Dim/Bright. The "programming" of a smart home lives in the physical position of a dial; data travels over the mains as 120 kHz bursts at ~20 bits/sec (one bit per power-line zero crossing). The ancestor of every modern smart-home control surface.
- **Images:** 2 CC BY 2.5 images copied to `assets/wiki/` (x10-command-console.jpg hero showing the original console; x10-modules.jpg).

### Field Note written
- `docs/blog/the-dial-that-ran-the-house.md` — "The Dial That Ran the House."

## What was NOT added (candidates considered and rejected)
- **McDonald's Brobeck POS (1974):** Already fully promoted in a prior run (in data.ts, wiki, ToC, and assets). Its info.json in `potential/mcdonalds-brobeck-pos/` was a stale active file — archived as `info.json.archived` to prevent double-promotion.
- **Suzuki Tronichord (1981–85):** PD image exists, but Wikipedia calls it "a precursor to the larger and more complex Omnichord," which is already in the museum. Near-duplicate; skipped per precedent (JW-10/OASYS, Deccafax/Minitel).
- **Seiko Pyramid Talk (1984):** CC image exists but memory explicitly deferred it as "interaction too incremental. Do not re-scout." Skipped.
- Three research subagent angles (thermostats/energy HCI, reference/writing appliances, smart telephony/voice) and a general-agent pass over three fresh categories returned no other image-verified, distinct, promotable candidates. Candidate well remains thin; image resolution for deferred candidates remains the primary expansion path.

## Files written / changed
- `src/data.ts` — added X10 entry (id/slug `x10-command-console`, 262 exhibits).
- `docs/hci-wiki.md` — appended X10 section, added ToC item 262, updated intro count to "two hundred and sixty-two".
- `assets/wiki/x10-command-console.jpg`, `assets/wiki/x10-modules.jpg` — local images.
- `docs/blog/the-dial-that-ran-the-house.md` — Field Note.
- `potential/x10-command-console/info.json` — created then archived as `info.json.archived` after promotion.
- `potential/mcdonalds-brobeck-pos/info.json` — archived as `info.json.archived`.
- Trace: `potential/runs/2026-09-15T12-37-20-009Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md`.

## Verification
- `bun run typecheck`: PASS.
- `bun run build`: PASS (262 exhibits + blog + about, 355 pages).
- Exhibit page `/exhibits/x10-command-console/` and Field Note `/blog/the-dial-that-ran-the-house/` both generated.
- Wiki ToC count (262) matches data.ts exhibit count (262).

## Still needs review
- No additional unpromoted candidates were left behind this run. The three genuinely-new-but-blocked candidates surfaced (Robertshaw Energy Manager card-programming thermostat, various image-blocked devices) remain image-resolution targets for future runs, per memory.
