# Blog Agent Trace

Topic: write one Field Note if there is a worthwhile story from recent collection activity

## Inventory check (2026-10-29)

- Collection stands at 308 exhibits. Latest scout run (2026-10-29T05-49-33-123Z) was partial; no promotions since Sega Hologram Time Traveler / Petrofsky FES Bicycle / Casio CMD-40 were added ahead of it.
- Grepped `docs/blog/*.md` for exhibit links and poetic slugs:
  - `hologram-time-traveler` appears only as a passing comparison inside `reaching-into-the-image.md` (Spacegraph note). No dedicated note.
  - `casio-*` covered: casio-dg-20, casio-pb1000, casio-vdb-1000 (`the-watch-you-typed-on`), casio-vl1, casio-cmd-40 absent.
  - `petrofsky-fes-bicycle` absent everywhere.
- Near-neighbor audit:
  - CMD-40: IR-remote / pointing-notch / universal-remote-code-learning channel is unoccupied. Sibling Seiko Data-2000 note is about data *loading*, not emitting. Precedent (2026-10-14 correction) says sibling watches are writable if the interaction lens is genuinely distinct.
  - Time Traveler: the "real image above an empty stage" claim is already the central argument of `reaching-into-the-image.md` (Spacegraph). Writing it would re-litigate a noted channel.
  - Petrofsky: body-*inward* channel fully noted (P300, IBVA, EGG, Synapse, Fehmi, Orca). But cochlear Nucleus 22 note (`the-machine-that-writes-into-the-nerve`) is anchored on *perceptual* stimulation with the brain completing the interface via neuroplasticity. Petrofsky's distinctive claim is joint-level motor actuation inside a closed control loop where the same limb is sensor and effector, with no brain in the correction loop. That is a distinct mechanism, not a re-tread.

## Decision

- Lowest marginal risk on a rarest-single-claim reading: Petrofsky. It is the only biological closed control loop here — the machine reads a joint it is simultaneously driving, using the patient's body as both transducer and motor. CMD-40 is strong but adjacent to a well-developed wearable/watch family (Seiko RC-1000, Seiko Data-2000, Casio VDB-1000); keep it for a future session where it can stand alone.
- Writing exactly one note: `docs/blog/the-leg-that-was-both-sensor-and-motor.md` (Petrofsky FES Bicycle Ergometer).
- Image: `assets/wiki/petrofsky-fes-fig2.jpg` (local, already used by the exhibit).

## Verification

(see below)
- `bun run typecheck` — clean.
- `bun run build` — 308 exhibits + blog + about, 433 pages; page emitted at `public/blog/the-leg-that-was-both-sensor-and-motor`.
- Prose-only check: one local image used, `../assets/wiki/petrofsky-fes-fig2.jpg`. No media repo. No `src/data.ts` or `docs/hci-wiki.md` edits.

## Memory

Appended one durable lesson to `docs/beepy-memory.md` (body-as-loop channel now occupied; CMD-40 held for a future session).
