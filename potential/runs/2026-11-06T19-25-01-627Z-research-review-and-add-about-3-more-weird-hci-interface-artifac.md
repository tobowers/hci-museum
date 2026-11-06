# Run trace — 2026-11-06 research/review/add ~3 weird HCI artifacts (1976–1992)

Goal: find about 3 new, strange/embodied/interaction-model-rich HCI artifacts 1976–1992,
review them, promote the strongest. Collection currently at 313 exhibits.

## Start state
- Build count (grep -cE '^\s{4}id: "' src/data.ts): 313.
- potential/ has NO active (non-archived) info.json files at run start — verified by loop.
- Memory notes: well is dry for automated discovery; strongest recent finds pattern
  is "unexplored angles" (marine instrumentation, output mechanisms, telephony devices,
  industrial trade HCI). Held-open items: Casio CMD-40 (IR code-learning, watch-family),
  VideoHarp (1988-90, image unverified).
- Memory's recent successful angles to extend: embodied/dialectic instrument interfaces,
  professional trade HCI, self-service/kiosk, telephony devices, physical-token UX.

## Plan
1. Launch up to 3 hci-research-subagents in parallel with fresh, focused angles,
   2 Octen searches each max:
   - Angle A: unusual physical-dial/rotary/mechanical input instruments used with
     computers (dial-based controllers, shuttle/jog wheels, ticker wheels).
   - Angle B: 1976–1992 "body-as-interface" oddities NOT already in museum
     (gait, balance, breath beyond sip/puff, head tilt, tongue).
   - Angle C: professional trade / industrial HCI artifacts (broadcast audio,
     photographic/post-production hardware, command surfaces for trade workflows).
2. Manager-side: direct Wikipedia/Commons API verification (free, no Octen).
3. Build info.json files for good candidates in potential/<slug>/.
4. Promote the strongest via manual edits (promote-potentials.ts known-broken).
5. typecheck + build. Optional Field Note.

## Progress
(append as you go)