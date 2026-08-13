# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Progress notes

- 2026-08-13: Run start. Read docs/beepy-memory.md (442 lines). Collection at 183 exhibits in
  src/data.ts; docs/hci-wiki.md has 191 sections including orphan research sections + Appendix.
- DISCOVERY: A prior aborted run left three FULLY-RESEARCHED candidates with complete info.json
  files in potential/, local images staged in assets/wiki/, and wiki sections ALREADY appended to
  docs/hci-wiki.md (lines ~9030-9175) — but they are MISSING from src/data.ts and the wiki ToC:
  - Fairchild Channel F (1976): first microprocessor cartridge console; twist-grip pistol controller
    (joystick + twist paddle + push/pull fire in one grip). Jerry Lawson (first Black console engineer).
    Images: fairchild-channel-f-1/2/3.jpg (valid JPEGs). STRONG.
  - BBN Spacegraph (1977): true volumetric varifocal-mirror display; laser-pointer selection aimed
    INTO the image volume. Images: spacegraph-photo-*.jpg (AFHRL figures, public domain). STRONG.
  - Bally Professional Arcade / Astrocade (1978): pistol-grip trigger+joystick+rotary-paddle
    controller, 24-key hex keypad, and Bally BASIC whose program code is bit-interleaved INSIDE video
    RAM ("your program IS the pixels"). Images: bally-arcade-1/con-sole/motherboard.jpg. STRONG.
- Plan: (1) run up to 3 research subagents on fresh angles to hunt for anything that beats or
  complements these three; (2) validate the three staged candidates against primary sources;
  (3) complete the promotion manually (data.ts entries + wiki ToC + verify images; promote-potentials.ts
  has known bugs: no image copy, no data.ts update, no ToC update).

## Research subagents (3 launched in parallel, Octen budget respected)

- Subagent A (weird home game controllers): returned Atari Mindlink (ALREADY in museum, id atari-mindlink)
  and Epoch Barcode Battler (ALREADY in museum, id barcode-battler). Both disqualified. Yield: 0 new.
- Subagent B (printed-code/scanning): returned Optacon II (ALREADY in museum), Kurzweil Reading Machine
  (ALREADY in museum), and Oberon Omni-Reader (1984) — genuinely NEW but image-weak: only Centre for
  Computing History documentation scans (© CCH, not CC), interaction (drag pen along a line) adjacent
  to Logitech ScanMan already in museum. Deferred, no info.json built.
- Subagent C (telephony/info-appliances): returned Microwriter MW4 (ALREADY in museum, id microwriter)
  and Microwriter AgendA (sibling of Microwriter; overlaps chording keyboard already represented).
  Both disqualified. Yield: 0 new.
- CONFIRMED: subagent structural duplication problem continues (~70% already-in-museum returns),
  consistent with 2026-07-21..07-23 memory notes. The three staged candidates remain the strongest.

## Validation of staged candidates (against primary sources)

- Fairchild Channel F: verified against en.wikipedia.org/wiki/Fairchild_Channel_F — Nov 1976, $169.95,
  first microprocessor console, first ROM cartridges, F8 CPU, 64 bytes scratchpad + 2KB video buffer,
  controller by Lawson/Talesfore (push/twist/pull grammar), ~350,000 units, Zircon System II. All match
  info.json and wiki section. STRONG, promoted.
- Bally Astrocade: verified against en.wikipedia.org/wiki/Bally_Astrocade — April 1978, $299, Z80, 4KB RAM,
  Dave Nutting Associates/Midway, pistol-grip trigger + 8-way joystick + rotating paddle, 24-key hex pad,
  Bally BASIC by Jamie Fenton with program bit-interleaved in video RAM (1,760 bytes, 4 colored shift keys
  + overlay). All match. STRONG, promoted.
- BBN Spacegraph: verified US Patent 4,130,832 (Sher, BBN, filed 1977-07-11, granted 1978-12-19) directly
  on Google Patents — rim-weighted acrylic plate mirror, ~30 Hz resonant oscillation, 50 rim segments,
  Traub geometry correction, "images written during both halves" — all match. AFHRL-TR-80-60 images
  already local (spacegraph-photo-*.jpg, valid JPEGs). STRONG, promoted.

## Promotion (manual, per known script bugs)

- Added 3 entries to src/data.ts (fairchild-channel-f, bbn-spacegraph, bally-professional-arcade) after
  meade-lx200. Used wikiTitle exactly matching parser output: "Fairchild Channel F", "BBN Spacegraph",
  "Bally Professional Arcade / Astrocade".
- Added 3 ToC entries (184-186) to docs/hci-wiki.md with GitHub-style anchors; ` / ` -> `--` for Bally.
- Archived the three info.json files as info.json.archived (prevent auto-promotion in future runs).
- Wiki sections and local images (assets/wiki/) were already committed by the prior run; no remote hotlinks.
- Verification: `bun run typecheck` PASSED; `bun run build` PASSED (186 exhibits, 240 pages);
  spot-checked all three exhibit pages render wiki content.
