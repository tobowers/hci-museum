# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Decision

Wrote ONE Field Note: `docs/blog/the-keyboard-that-felt-how-hard-you-held-it.md`

## Subject selection

Recent collection activity since the last field note (09-12, the Fly Mouse note) added:
- **NED Synclavier (1977)** — promoted 2026-09-13, no Field Note yet (explicitly flagged in memory as needing one)
- Mephisto Modular (09-11) — already noted (`the-board-that-outlived-its-brains`)
- 09-13/09-14 were otherwise zero-addition research runs

Chose the Synclavier as subject, anchored on the **Velocity/Pressure Keyboard (VPK) continuous aftertouch** angle.

### Why this angle (not the light pen)
- The Synclavier's two novel interactions: (a) light-pen waveform drawing on a CRT, (b) VPK continuous key-pressure aftertouch.
- The light-pen-drawing angle has near-neighbor notes: `drawing-sound.md` (UPIC, stylus-on-tablet) and a passing light-pen reference in `the-one-button-sampler.md` (Fairlight CMI). Would risk collision.
- The VPK aftertouch angle has ZERO near-neighbor notes. Grep confirmed no existing blog post covers aftertouch, continuous key pressure, or velocity/pressure keyboards.
- Per memory discipline: "anchor on the rarest single claim with no near-neighbor note." Continuous aftertouch is the rarest sensing primitive in the Synclavier.

### Interaction-model distinctness check
- No exhibit in the museum has a continuous-aftertouch keyboard. BAT/DataHand = chording; space-cadet = modifiers; Velotype = syllable-chording; OASYS = thumb-shift; all are discrete press->get-one-thing. VPK is continuous: a held key is a proportional living input. Clean, no collision.

### Images
- Used local hero `../assets/wiki/synclavier1-jb.jpg` (Synclavier I with HOP box, 512x653, 101KB, public domain). The VPK-specific images (synclavier-psmt/vpk-closeup/vpk-display) are 2-6MB at 5184x3456 — too heavy for the site. Since the blog agent only writes the markdown (no asset resizing per separation of duties), chose the small hero image with honest captioning (it shows the 1977 instrument the note leads with). The VPK story is text-carried.

## Verification
- `bun run typecheck` — will run
- `bun run build` — will run

## Verification results
- `bun run typecheck` — PASS
- `bun run build` — PASS (260 exhibits, 351 pages; up from 349 with new post)
- Post renders: public/blog/the-keyboard-that-felt-how-hard-you-held-it/index.html (10KB)
- Word count: 763 (within 500-900)
- All 8 internal exhibit links resolve (synclavier, bat-keyboard, datahand-keyboard, space-cadet-keyboard, upic, fairlight-cmi, oasys-thumbshift-keyboard, velotype)
- Image path valid: assets/wiki/synclavier1-jb.jpg
