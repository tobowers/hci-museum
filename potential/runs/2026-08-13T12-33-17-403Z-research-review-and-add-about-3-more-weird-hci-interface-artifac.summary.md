# Scout Summary — research, review, and add about 3 more weird HCI interface artifacts

Date: 2026-08-13 (session 2026-08-13T12-33-17-403Z)

## What changed

Three new exhibits were promoted to the museum collection. All three were found as fully-researched,
half-promoted candidates left behind by a prior aborted run (wiki sections + local images already
committed, but missing from `src/data.ts` and the wiki ToC). Fresh parallel research confirmed nothing
stronger exists in the currently-plausible candidate space.

## Artifacts added to the collection

1. **Fairchild Channel F (1976)** — First microprocessor cartridge console. The artifact's heart is a
   base-less pistol-grip controller whose triangular cap tilts 8 ways (joystick), twists (digital
   paddle), and pushes down / pulls up to fire — one knob, three input grammars. Jerry Lawson, the
   first Black engineer to lead a Silicon Valley consumer electronics product, conceived the stick.
   ~350,000 units; the twist-grip vanished with Zircon's System II and was never replicated.
2. **BBN Spacegraph (1977)** — True volumetric display: a rim-weighted acrylic plate mirror vibrating
   at ~30 Hz sweeps a CRT image through a 33.8 cm-deep volume, producing real 3D points with
   view-dependent parallax. Input was a pulsed laser aimed directly INTO the image volume to select
   floating light buttons (AFHRL-TR-80-60). The museum's only true volumetric display.
3. **Bally Professional Arcade / Astrocade (1978)** — Z80 console with a pistol-grip controller that
   is simultaneously a trigger, an 8-way joystick, and a rotating paddle, plus a 24-key hex keypad.
   Bally BASIC (Jamie Fenton) stores program code bit-interleaved inside video RAM — the program IS
   the pixels. Fills the programmable-console-with-program-in-display gap.

## Files written / changed

- `src/data.ts` — added 3 exhibit entries (fairchild-channel-f, bbn-spacegraph, bally-professional-arcade).
- `docs/hci-wiki.md` — added 3 ToC entries (184–186); exhibit sections were already present from the
  prior run's staging.
- `potential/fairchild-channel-f/info.json` → `info.json.archived`
- `potential/bbn-spacegraph/info.json` → `info.json.archived`
- `potential/bally-professional-arcade/info.json` → `info.json.archived`
- `potential/runs/2026-08-13T12-33-17-403Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace.
- `potential/runs/2026-08-13T12-33-17-403Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` — this file.
- `docs/beepy-memory.md` — recorded the three additions, the Oberon Omni-Reader deferral, and the
  half-promoted-candidates gotcha.

## Research performed

- 3 research subagents in parallel (weird game controllers / printed-code scanning / telephony-info
  appliances), 2 Octen searches budgeted each. Results were ~70% already-in-museum duplicates
  (Atari Mindlink, Epoch Barcode Battler, Optacon II, Kurzweil Reading Machine, Microwriter MW4).
  One genuinely new lead surfaced — **Oberon Omni-Reader** (1984 consumer OCR pen) — but it is
  image-weak (CCH documentation scans, not CC-licensed) and interaction-adjacent to the museum's
  Logitech ScanMan, so it was deferred without building an info.json.
- Primary-source validation of the three promoted candidates:
  - Fairchild Channel F vs en.wikipedia.org/wiki/Fairchild_Channel_F — all facts match.
  - Bally Astrocade vs en.wikipedia.org/wiki/Bally_Astrocade — all facts match.
  - BBN Spacegraph vs US Patent 4,130,832 directly on Google Patents — all facts match.

## Verification

- `bun run typecheck` — PASSED.
- `bun run build` — PASSED (186 exhibits, 240 pages).
- Spot-checked rendered HTML for all three new exhibit pages (twist-grip / volumetric / bit-interleaved
  content present; local images referenced).

## What still needs review

- The 3-exhibit wiki ToC vs section-count discrepancy persists (186 ToC entries / 191 `## ` sections;
  orphan research sections Flute Playing Machine, Johns Hopkins Serial Code Keyboard, MIDI Dance Floor,
  plus Appendix are intentionally outside the ToC).
- Oberon Omni-Reader remains a deferred candidate if CC images surface.
- No Field Note was written this run (blog drafting was explicitly optional and not prioritized).
