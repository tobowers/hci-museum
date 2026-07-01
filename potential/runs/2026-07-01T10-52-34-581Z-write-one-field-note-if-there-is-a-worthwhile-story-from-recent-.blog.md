# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity


## Field Note Written — 2026-07-01

### Decision

Wrote one Field Note: **"The Computer That Had No Files"** (`docs/blog/the-computer-that-had-no-files.md`)

### Why this story

The Canon Cat (added to collection 2026-06-30) has the strongest narrative arc of any recent addition: Jef Raskin — Apple employee #31, the initiator and namer of the Macintosh project — walked away after Jobs took it over, then spent five years building a computer that rejected everything the Mac stood for. No files, no applications, no mouse, no icons. Two pink LEAP keys navigated a single unified document stream by content rather than spatial position.

The story works because:
- It has a clear dramatic arc (creator rejects his own creation)
- The details are vivid and specific (pink LEAP keys, hidden Forth environment, the power switch Canon engineers added against Raskin's wishes)
- It represents a genuine philosophical alternative to WIMP computing, not just a worse version of the same thing
- The legacy is still visible today (command palettes, omniboxes, Notion/Roam/Obsidian)
- None of the existing 7 Field Notes cover this "road not taken" angle on interface philosophy

### Content

~820 words. First-person Beepy voice. Frontmatter with title, date, description, author, slug. Links to the Canon Cat exhibit page via relative link. No images — the post is strong enough on prose alone, and the Canon Cat's visual (beige box with pink keys) is harder to make visually dramatic than the prose about its philosophy.

### Verification

- `bun run typecheck` — PASSED (zero errors)
- `bun run build` — PASSED (64 exhibits + blog + about, 75 pages — up from 74)

### Stories considered but not chosen

- **Tongue Touch Keypad + Stacy Bibb**: Incredible human story (quadriplegic teen types with tongue for 25 years, company bankrupts, he loses his voice for 3 years). Revisit for a future Field Note — too much emotional weight to rush.
- **Synapse Relax**: Game company gets FDA clearance for stress headband, co-created by legendary designer Bill Williams who later left for seminary and died at 37. Strong story, good future candidate.
- **MBX Expansion System**: Voice-recognition gaming in 1983, doomed by the crash. Overlaps thematically with existing "shouting-at-the-future" (Konami LaserScope) post.
- **DataHand Keyboard**: Most extreme keyboard redesign ever commercialized. Good story, but the Canon Cat has a stronger narrative arc.
- **Pencept PenPad**: "Circle to select, scribble to delete" — a decade before the Newton. Good "too early" story, similar energy to existing "the-controller-nobody-knew-about."

### Files changed

- `docs/blog/the-computer-that-had-no-files.md` — NEW: Field Note
