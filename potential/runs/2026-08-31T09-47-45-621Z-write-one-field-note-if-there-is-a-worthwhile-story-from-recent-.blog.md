# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Progress notes

- **Decision**: Yes, write one Field Note. Reviewed the full collection snapshot and recent research runs.
- **Candidate analysis**: The 2026-08-31 research run added Psion Organiser I (1984) and Lexicon LK-3000 (1978); neither has a Field Note yet. Also considered unwritten candidates from earlier runs (Orca Edge, Odyssey 2, Polaroid Digital Palette, Amana Touchmatic).
- **Subject chosen**: **Lexicon LK-3000 (1978)** — slug `lexicon-lk3000`.
  - Why it wins: the museum's cleanest "the CPU travels in the cartridge" inversion. Every other era cartridge device (Channel F, Studio II, Microvision) keeps the processor in the console and stores code in the cartridge; the LK-3000 inverts it — all logic (CPU + ROM) lives inside the swappable cartridge, and the base is an inert shell (keyboard + LED + battery + slot). Consumer hot-swappable processors a decade before "software-defined." No near-neighbor note exists for this; the physical-token family notes (TI-59, Cauzin, iButton) are about data/identity in objects, not about the *brain* itself traveling.
  - Psion Organiser I was passed over: its write-once Datapak UV-erase ritual overlaps the physical-token/ritual theme and the organizer-friction thread already anchored in `the-memory-you-carried-in-your-pocket`.
  - Nice curatorial texture: the 08-01 memory note had deferred the LK-3000 citing "only unrelated Nixdorf LK-3000" — that Nixdorf-branded device IS the same LK-3000, now promoted (08-31 run) with a CC BY-SA 2.0 image.
- **File written**: `docs/blog/the-translator-that-traded-brains.md` (~800 words). Cross-links to lexicon-lk3000, fairchild-channel-f, rca-studio-ii, milton-bradley-microvision, ti-59, cauzin-softstrip, ibutton. No external images (text-only post).
- **Verification**:
  - Fixed a bad link: `cauzin-softstrip-reader` → correct slug `cauzin-softstrip`.
  - `bun run typecheck` — PASS.
  - `bun run build` — PASS, 306 pages (305 prior + new post). Post confirmed rendered at `public/blog/the-translator-that-traded-brains/`.
- **No collection changes**: only the new blog markdown was added; no src/data.ts or docs/hci-wiki.md edits.