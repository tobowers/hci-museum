# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## Start
- Read Beepy memory. Collection currently ~261 exhibits.
- Found ready candidate in potential/: **McDonald's Brobeck POS** (1974) — full info.json, valid CC BY-SA 3.0 image downloaded. Intel 8008 register where every menu item is a physical button. Fills POS narrative (complements IBM 5265 paper-drum, ViewTouch touchscreen). Strong promotion candidate.
- Launching 3 research subagents on fresh angles.


## Subagent research results (3 angles)
- **Angle A (thermostats/energy HCI)**: No image-verified promotable candidate. Best lead = Robertshaw 300-400 "Energy Manager" thermostat (~1979-85) with pre-punched plastic programming-card-as-schedule interaction — genuinely weird but image availability UNVERIFIED (no known Commons images). PSG Accustat mechanical tab-lock thermostat (no microprocessor) rejected.
- **Angle B (electronic reference/writing appliances)**: Category sparse; candidates all used standard keyboards or are children's toys (TI Speak & Read, Magic Wand). No promotable candidates.
- **Angle C (smart telephony/voice appliances)**: No candidate meets all four criteria. Tomy Verbot (already deferred, image-blocked) reconfirmed. PhoneMate endless-loop overlaps existing National Easa-Phone exhibit.

## Decision
- McDonald's Brobeck POS (1974) is READY and STRONG — promoting.
- Researching Robertshaw "Energy Manager" card-programming thermostat directly (1 remaining Octen call). If image-solvable, strong second candidate for the "brains-replace-the-dial" theme.

## Correction: McDonald's Brobeck POS already promoted
- The active info.json in potential/mcdonalds-brobeck-pos was actually a PRIOR half-completed promotion that is already complete: it exists in src/data.ts (line 3250), wiki ToC item 261, wiki section, and image assets/wiki/mcdonalds-brobeck-keyboard.jpg. NOT a new addition.
- Archived its info.json as info.json.archived to prevent auto-promotion.
- The run therefore starts with ZERO ready unpromoted candidates. Need fresh research.

## Research status
- Octen budget exhausted (7/7 used by the 3 subagents). Exa unused.
- 3 subagent angles returned no image-verified promotable candidates.
- Direct Commons API searches for several artifact classes surfaced nothing new and image-rich.
- Launching a focused general-agent research pass (free web/Commons tools) on fresh image-rich categories.

## Second candidate research (general agent, free Commons tools)
- **BSR/X10 Command Console (1978)** — VERIFIED IMAGE (CC BY 2.5, X10_2.jpg + X10_1.jpg), genuinely new category (home powerline automation controller), distinctive physical ritual (rotary house-code dial + unit button grid, no screen, 20 bit/s over mains). STRONG. Building info.json + promoting.
- **Suzuki Tronichord (1981-85)** — PD image exists, but Wikipedia calls it "a precursor to the larger Omnichord" (already in museum). NEAR-DUPLICATE of Omnichord. Skipped per near-duplicate precedent (JW-10/OASYS, Deccafax/Minitel).
- **Seiko Pyramid Talk (1984)** — CC image exists but memory explicitly deferred it as "interaction too incremental. Do not re-scout." Skipped.
- **McDonald's Brobeck POS** — confirmed already promoted in a prior run; info.json archived.

## Decision
- Promote **BSR/X10 Command Console (1978)** as the single strong new addition. Collection at 261; per memory, do not pad with near-duplicates or image-blocked candidates. One strong, image-verified, category-filling artifact is the honest outcome this run.

## Promotion complete
- Promoted **BSR/X10 Command Console (1978)**:
  - data.ts entry added (id/slug x10-command-console), 262 exhibits.
  - Wiki section appended + ToC item 262 + intro count updated to "two hundred and sixty-two".
  - 2 images copied to assets/wiki/ (x10-command-console.jpg hero, x10-modules.jpg).
  - info.json archived.
- Wrote Field Note: docs/blog/the-dial-that-ran-the-house.md.
- typecheck passes. Running build to verify blog inclusion.

## Verification
- bun run typecheck: PASS.
- bun run build: PASS (262 exhibits + blog + about, 355 pages).
- Exhibit page /exhibits/x10-command-console/ generated.
- Field Note /blog/the-dial-that-ran-the-house/ generated.
- Wiki ToC count (262) matches data.ts exhibit count (262).
