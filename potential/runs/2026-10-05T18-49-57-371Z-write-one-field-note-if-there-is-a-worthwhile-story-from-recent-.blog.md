# Beepy Field Note Run — 2026-10-05

Goal: decide whether there is one worthwhile Field Note to write today, and write it if so.

## Starting state
- Reviewed recent collection activity. Collection at 289 exhibits.
- Recent additions and their Field Note status:
  - Moog Taurus I — noted (`the-instrument-you-played-with-your-feet`, 10-03)
  - Simmons SDSV — noted (`the-drum-that-gave-up-its-sound`, 10-04)
  - Brunswick Karate (1974) — NEWEST addition, UNWRITTEN
  - Solari Split-Flap (2026-09-26) — unwritten but collides with the noted output-mechanism family
  - Scanset XL — unwritten but collides with the saturated telephony/terminal family
- Long-pending unwritten candidates from memory (Amana Touchmatic, Caere OCR Wand, Nissan Voice Warning, Invicta Electronic Master Mind, Meade LX200, Ferranti-Packard flip-dot) — all repeatedly deferred because they collide with existing note families.

## Decision
Chose the **Brunswick "Karate" (1974)** as today's Field Note subject.
- Interaction-model distinctness: the museum's only reflex-testing arcade machine whose input target is a life-size human figure — you physically strike a printed karate combatant at lit target points. NO near-neighbor note: Heavyweight Champ (`the-lost-arcade-game-that-had-no-software`) shares the no-CPU/TTL property but anchors on "the game with no software, lost and rediscovered as schematics"; Street Fighter (`the-arcade-machine-that-fought-back`) is a pneumatic force-sensing punch pad in a real fighting game. Neither covers the "strike a picture of a person as a reflex meter" inversion, nor the pre-video-arcade (1974) coin-op reflex-tester framing.
- Single-claim thesis: the whole interaction is reaction time — the machine isn't a game with a winner, it's a reflex meter that asks you to hit a person where it lights up. The body is the interface and the score is how fast you are.
- Cross-links: Heavyweight Champ (no-CPU sibling, but a game), Street Fighter pneumatic (the force-sensing descendant / a "punch pad" lineage), Stompin' (physical striking grid), Supermarket Scanner (object-as-input over a fixed surface).
- The 1974 boundary year noted honestly (pre-video-arcade, electromechanical borderland).

## Progress
- 2026-10-05: wrote `docs/blog/the-reflex-machine-that-wanted-you-to-hit-a-person.md`.

## Post written
- `docs/blog/the-reflex-machine-that-wanted-you-to-hit-a-person.md`
- Angle: a coin-op reflex meter whose entire interface is a life-size printed combatant you physically strike at lit target points; the pre-video-arcade borderland; no CPU (TTL); the museum's only "strike the picture of a person" input.
- Links: Brunswick Karate, Heavyweight Champ, Street Fighter pneumatic, Stompin'.
- No inline image (hero image is the exhibit page's; kept the post text-focused per recent discipline).

## Verification
- (typecheck + build logged below)

## Notes for future
- Brunswick Karate now noted. The "reflex meter / strike-the-human-figure" channel is now anchored.
- Still unwritten recent additions: Solari Split-Flap (output-mechanism family), Scanset XL (telephony/terminal family) — both valid only if their families get a themed revisit.
- Long-pending unwritten candidates remain open from memory: Amana Touchmatic, Ascom QuickFare (wait—noted 09-30), Caere OCR Wand, Ferranti-Packard flip-dot, Invicta Electronic Master Mind, Nissan Voice Warning.

## Verification (final)
- `bun run typecheck` — PASS (exit 0)
- `bun run build` — PASS (289 exhibits, 401 pages, +1 blog page)
- Built page `public/blog/the-reflex-machine-that-wanted-you-to-hit-a-person/index.html` exists and is listed in `public/blog/index.html`.
- Post is 711 words (within 500-900 target).
- Exhibit slugs verified against src/data.ts: `brunswick-karate`, `heavyweight-champ`, `sf1-pneumatic`, `stompin` all present.
- No collection data modified (no src/data.ts, no docs/hci-wiki.md changes).
