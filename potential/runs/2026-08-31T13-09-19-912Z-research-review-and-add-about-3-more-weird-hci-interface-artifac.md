# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Run start (13:09 UTC-ish)

- Collection currently at 232 exhibits (grep -cE '^\s{4}id: "' src/data.ts = 232).
- Scanned potential/*/info.json: 0 active (unarchived) info.json files. No ready candidates survive from prior aborted runs this time.
- Well is genuinely thin at 232 exhibits. Per prior memory, expect 0-2 additions.
- Plan: launch 3 research subagents (hci-research-subagent) on fresh, high-image-yield angles. All verification + image licensing done via direct Wikimedia Commons API (does not consume Octen). Octen budget 7, Exa budget 2 shared across all subagents.

## Angles for this run
1. Early consumer handheld/portable global-navigation & field instruments with unusual interfaces (image-rich device class, marine/field gear).
2. Early "smart appliance"/IoT-precursor consumer computer-interface devices not yet covered (programmable home electronics).
3. Early handheld electronic games/toys with genuinely unusual non-button input mechanisms.

(To be filled as subagents report.)
## Subagent reports (all 3 completed)

1. MARINE angle: Only JRC JNA-757 loran receiver has a confirmed CC BY-SA 3.0 Commons image; other marine units (Magellan NAV 1000, Furuno, Trimble, Navstar XR4-G) all image-blocked. JNA-757 interaction docs thin, year unverified.

2. HOME AUTOMATION angle: Massachusetts Microcomputers "Programmable Appliance Controller" (filed 1978, granted 1981, Intel 8049) = STRONG interaction story (keypad schedule-programming language, bit-map automation, lock+secret-code security). Image path = public-domain US4279012 patent figures. Retail identity uncertain. Emerson thermostat + Honeywell Chronotherm III weaker/image-risky.

3. HANDHELD GAMES angle: Tomy Digital Derby (1978) = analog rotary steering wheel/throttle knobs + LED track, continuous wheel input (not buttons), confirmed CC Commons image. Also Tomy Hit and Missile / Digital Diamond (kinetic lever). Nintendo Kousenjuu light-gun = best conceptual fit but image-blocked.

## Next: verify images via Commons API; assess distinctiveness against collection; decide promotion.

## Image verification (Commons API)
- Tomy Digital Derby: CC BY-SA 2.0 (Joe Haupt), 1860x2324. CONFIRMED printable image.
- JRC JNA-757 loran: CC BY-SA 3.0 (Templa daisuki), 800x600. Image exists.
- MA Microcomputers controller: no CC device photo; patent figures US4279012 are PD path.

## Distinctiveness check in progress
- Tomy Digital Derby (1978): need to confirm the rotary steering/throttle interaction; museum already has Mattel Auto Race (1976). Must differentiate.
- JRC JNA-757 loran: weak interaction distinctiveness (generic keypad-loran); likely pass.
- MA Microcomputers appliance controller: strong interaction but retail identity murky; patent-figure promotion path.
