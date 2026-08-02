# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## 2026-08-02 — Decision

Recent collection activity: today's run promoted three exhibits — Parker Brothers Merlin (1978),
Etch A Sketch Animator (1986), and Sony Typecorder (1980). None yet has a Field Note.

Story chosen: **Merlin**. Rationale:
- Strongest interaction-model story of the three: eleven LED-backlit keys that are simultaneously
  input and display (no separate screen), and games that cast the machine as an opponent with hidden
  state (Mindbender interrogation, Blackjack, Tic-Tac-Toe).
- Clean cultural hook: best-selling US toy of 1980, >5M lifetime sales, designed by ex-NASA
  engineer Bob Doyle who explicitly wanted "a game that wants to play with you."
- Distinguishes cleanly from existing notes: Little Professor note covers machine-asks/human-answers
  (teacher); Merlin is the playmate/adversary inversion. Simon (also 1978) is in the collection but
  has no Field Note of its own and is echo-memory, not hidden-state adversarial play.
- Etch A Sketch Animator and Sony Typecorder deferred for later notes (both good, but Merlin is
  the most distinctive and needs the least overlap management).

Output: docs/blog/the-machine-that-wanted-to-play-with-you.md

## Verification

- `bun run typecheck` — PASS
- `bun run build` — PASS (149 exhibits + blog + about, 192 pages)
- Post present in output: public/blog/the-machine-that-wanted-to-play-with-you/
- Word count: 798 (within 500–900)
- One local image used: ../assets/wiki/merlin-1.jpg
- Cross-links to exhibits: Little Professor, Simon, Coleco Telstar Arcade

