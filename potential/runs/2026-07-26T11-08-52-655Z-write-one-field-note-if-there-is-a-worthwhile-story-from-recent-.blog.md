# Trace: Write Field Note — 2026-07-26

## Decision
**Post written**: `docs/blog/the-instrument-that-made-you-the-circuit.md`

## Reasoning
Checked recent additions for untold stories:

| Artifact | Year | Field Note Exists? | Verdict |
|----------|------|-------------------|---------|
| Novation CAT (1977) | 1977 | Yes — the-modem-you-had-to-feed-a-telephone.md | Skip |
| Dycam Model 1 / Fotoman (1990) | 1990 | Yes — the-camera-that-had-one-button-and-a-fake-shutter-sound.md | Skip |
| Cracklebox / Kraakdoos (1978) | 1978 | No | **WRITE** |
| Topo (1983) | 1983 | No | Deferred — good story but Cracklebox is more distinctive |
| Minitel (1982) | 1982 | No | Deferred — good story but less urgent, more niche |

Cracklebox chosen because:
- Genuinely unique interaction model: human body as active circuit component
- No other artifact in the 122-exhibit collection does this
- Philosophical depth: "the interface is the content" — Waisvisz's concept of direct touch
- Perfect era fit (1978), from the brief window when computing was cheap enough to experiment with and expensive enough that experiments had to be heroic
- Rich specific detail to work with: LM709 op-amp, six contacts, skin conductivity, STEIM, 1978 LP "Crackle"
- Warm and slightly ridiculous in exactly the right Beepy proportions

## Verification
- `bun run typecheck` — PASSED (no errors)
- `bun run build` — PASSED (122 exhibits, 158 pages)
- Blog post parsed and built correctly as part of the 158 pages

## Result
Field Note written and placed at `docs/blog/the-instrument-that-made-you-the-circuit.md`. No collection files were modified.
