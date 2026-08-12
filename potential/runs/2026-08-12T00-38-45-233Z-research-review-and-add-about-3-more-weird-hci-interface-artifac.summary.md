# Run Summary — 2026-08-12T00-38-45-233Z

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## What changed

Three artifacts were researched, reviewed, and promoted into the real museum collection. All promotion was done manually (per standing guidance, `promote-potentials.ts` has three known bugs: image-copy, data.ts regex, ToC).

## Artifacts added to the collection (3)

1. **VCR Plus+ (1990)** — Gemstar's $60 box that programmed a VCR when you typed the printed PlusCode digits from TV listings; the number encodes channel/date/time/duration via a secret algorithm (reverse-engineered and published in *Cryptologia* 1992), and the box emulates the household VCR's IR codes. Interaction model: printed decimal digits as a human-typed compressed machine command — the museum's first non-barcode printed-media command ritual.
2. **EMS Synthi AKS (1972–1984)** — EMS London's portable studio in a briefcase. Two weird interfaces: a pin-matrix patch panel where pins pushed into sockets are the routing "program" (tangible plugboard programming), and a 30-note flat capacitive touchplate keyboard with no moving keys. On sale and in active use throughout the museum's window (1979 catalogue price £1,452). Pink Floyd's "On the Run" was finger-recorded on one.
3. **Meade LX200 (1992)** — the first consumer GoTo telescope: a 16-key red-LED hand controller with a 2-line LCD and a 64,359-object database; type a catalog number, press GO TO, and the mount slews to the object. The LX200 RS-232 protocol became the amateur astronomy standard.

## Files written

- `potential/vcr-plus/info.json.archived` (promoted candidate record)
- `potential/ems-synthi-aks/info.json.archived`
- `potential/meade-lx200/info.json.archived`
- `docs/hci-wiki.md` — 3 new wiki sections + 3 ToC entries (now 188 sections / 183 ToC entries)
- `src/data.ts` — 3 new Exhibit entries (183 exhibits total)
- `assets/wiki/` — 7 local images (vcr-plus-1.jpg, synthi-aks-opened.jpg, synthi-aks-closed.jpg, synthi-pin-matrix.jpg, lx200-jiamusi.jpg, lx200-emc.jpg, lx200-kl.jpg), all CC BY/CC BY-SA/PD from Wikimedia Commons
- `docs/beepy-memory.md` — durable lessons, new additions, deferred candidates, gotchas
- `potential/runs/2026-08-12T00-38-45-233Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace

## Research process

- 3 parallel `hci-research-subagent`s, each capped at 2 Octen calls (6/7 shared budget used; 1 reserved and unused). Exa: 0/2. Grok: 0.
- Angles: (a) printed-code/physical-media command ritual → VCR Plus+; (b) tangible pin programming / touch keyboards → EMS Synthi AKS; (c) leftover-candidate evaluation from the aborted 08-11 run → Seiko Receptor (deferred) and Meade LX200 (promoted).
- 9 stale active info.json files (already-promoted exhibits) archived before any promotion step.
- Commons API used to verify licenses and download images; Google Patents returned 503; Openverse used as a CC image aggregator fallback.

## Verification results

- `bun run typecheck` — PASS (`tsc --noEmit`, no errors)
- `bun run build` — PASS ("Built static site ... 183 exhibits + blog + about, 235 pages", was 180/232)
- Spot-checked `public/exhibits/vcr-plus/index.html` — hero image renders from local `../../assets/wiki/vcr-plus-1.jpg`

## What still needs review

- **Meade LX200 images** show the instrument, not the hand controller (no freely-licensed keypad photo exists anywhere). A future run could contact the Commons uploader or find a patent drawing to add an interface-relevant image.
- **Seiko Receptor MessageWatch (1990)** remains a strong deferred candidate — interaction story (strap-as-antenna, one-way FM broadcast to the wrist) passes review; only the image situation blocks it. Revisit if Anthony Kable (Plus9Time) grants photo permission or a Commons upload appears.
- **Tomy Turnin' Turbo Dashboard (1983)** is now disqualified-by-evidence: the "printed road card" mechanism is disproven (it is a lightbulb + rotating drum projector with mechanical steering) and no freely-licensed images exist.
- Pre-existing ToC/section mismatch (188 sections vs 183 ToC entries incl. orphan research sections) was left untouched; build does not validate ToC.
