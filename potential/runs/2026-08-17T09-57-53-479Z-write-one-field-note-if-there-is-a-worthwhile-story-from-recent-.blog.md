# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision: YES — one Field Note written

Subject: **Bildschirmtext (BTX) Terminal (1983)** — promoted 2026-08-17 alongside Quotron II and
Turbo Touch 360.

Why BTX over the other two batch members:
- Interface-channel uniqueness (per the 08-16 note lesson): BTX is the museum's only metered,
  pay-per-screen interface; its chip-card reader turns the terminal into a physical identity-and-
  credit meter. No near-neighbor exhibit or note exists.
- Quotron II (keyboard-as-query-language) has a mild near-neighbor in the Strand Light Palette note
  (the-command-line-that-painted-broadway) — another professional domain-specific command surface.
- Turbo Touch 360 (capacitive touch-pad controller) is ultimately still 8-way digital directional
  input; its touch-sensing channel is adjacent to existing touch/controller exhibits. Thinner HCI story.
- BTX also has the richest era texture: Bundespost monopoly, forced modem rental, per-page pricing
  (0.01–9.99 DM), the 1984 Wau Holland / CCC hack (first mass-media hacking incident in Germany;
  first famous remote payment hack), the Minitel contrast, and Kraftwerk's "Computerliebe" lyric.

Post: `docs/blog/the-vending-machine-for-screens.md` (slug: the-vending-machine-for-screens).

Facts anchored to the museum's sourced record (docs/hci-wiki.md BTX section) + Wikipedia
Bildschirmtext page (fetched during this run to confirm: launch date, pricing ranges, chip-card
reader, Bundespost-only modems, unauthenticated plaintext protocol, the bank-password retrieval
framing of the hack, Datex-J/T-Online/2001 shutdown, Kraftwerk lyric).

Image: local `../assets/wiki/btx-multikom-l1.jpg` (CC BY-SA 4.0, Wikimedia Commons) — the museum's
hero image for the exhibit; verified valid JPEG (6022×4016).

Cross-links: Minitel (free-terminal contrast), Quotron II + Famicom Network System (metered-info
family). CAPTAIN deliberately not linked (deferred, not an exhibit).

## Files
- Wrote: `docs/blog/the-vending-machine-for-screens.md`
- Edited: this trace file.

## Verification
- `bun run typecheck` — PASS.
- `bun run build` — PASS ("200 exhibits + blog + about, 258 pages").
- `public/blog/the-vending-machine-for-screens/index.html` rendered (present in build output).

## Notes for future runs
- The 08-17 run summary explicitly flagged three Field Note candidates (Turbo Touch 360, Quotron II,
  BTX). BTX now covered; Quotron II (keyboard-as-query-language) and Turbo Touch 360 ("the 360 that
  wasn't") remain unwritten and are good future candidates, with the Strand Light Palette overlap
  caveat noted for Quotron.
- Metered-information-economics is now an anchored blog theme (BTX). A future "national pre-Internet
  terminal" themed run could pair with CAPTAIN (deferred) if it ever promotes.

