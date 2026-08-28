# Summary — 2026-08-28 Beepy scout run

## What changed
Researched, reviewed, and added **3 new HCI artifacts** to the museum collection (target was ~3). This was a productive run: two of three research angles yielded strong, image-verified candidates, and one angle (embodied input) was a failed planning loop with overlapping candidates and was discarded.

## Artifacts added to the collection
1. **Cochlear Nucleus 22 / Mini Speech Processor (1989)** — the museum's only *output-to-nervous-system* prosthetic. A DSP speech processor maps sound onto a 22-electrode cochlear array and fires coded pulse trains directly into the auditory nerve (transcutaneous RF link, no speaker). Reverses the direction of every clinical input device in the collection — the machine becomes a sense organ. 2 CC BY 4.0 images (Meg Lomax MSP 1989 + Spectra 22 1994).
2. **Ascom B8050 QuickFare (1989)** — self-service railway ticket kiosk whose continuous-roll cardstock ticket carries fare data as physical punched *notches* (no magnetic stripe). New member of the physical-token-as-data family and the collection's kiosk-side counterpoint to the IBM 3614 ATM. PD + CC0 images.
3. **Polaroid Digital Palette (1986)** — desktop computer-to-photographic-film output device whose interaction is a mechanical color-separation ritual: exposes one instant-film frame three times through a rotating R/G/B filter wheel, then peel apart. The museum's only computer-to-film output. CC BY-SA 4.0 image.

## Files written
- `potential/cochlear-nucleus-22/info.json` (archived after promotion → `info.json.archived`)
- `potential/ascom-quickfare-b8050/info.json` (archived)
- `potential/polaroid-digital-palette/info.json` (archived)
- `src/data.ts` — +3 exhibit entries
- `docs/hci-wiki.md` — ToC entries 219/220/221, intro count → "two hundred and twenty-one", +3 wiki sections
- `assets/wiki/` — 5 local images (2 cochlear, 2 quickfare, 1 palette)
- `docs/beepy-memory.md` — durable lessons + new additions
- `potential/runs/2026-08-28T03-55-01-067Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace

## Verification results
- `bun run typecheck`: **PASS**
- `bun run build`: **PASS** — "221 exhibits + blog + about, 290 pages"
- Confirmed all 3 new exhibit pages built in `public/exhibits/` and reference local `assets/wiki/` images — **no remote image hotlinks**.
- Exhibit count via `grep -cE '^\s{4}id: "' src/data.ts` = **221**.

## Candidates reviewed but rejected
- **Spaceball 2003** (overlaps DLR SpaceMouse already in museum)
- **Videotouch / VPL** (overlaps Mandala + VIDEOPLACE)
- **Cyberman** (no verified Commons image; speculative facts)
- **WearComp / Steve Mann** (overlaps EyeTap)
- **Utah Arm** (myoelectric paradigm adjaciguous to EMG family; weak distinctness)
- **Soundbeam** (already in museum — flagged during manual verification)

## What still needs review
- **Field Notes**: The three new artifacts are all strong future Field Note subjects. The cochlear "reverse-boundary" (machine writes into the nerve / you retrain your brain to hear spikes) and the Polaroid Palette's "color as three washes of light / the whir of the filter wheel" angles are the strongest. Drafting deferred to a blog run per guidance.
- **Still-unwritten pending Field Notes** from prior batches: Fairchild Channel F (twist-grip grammar), Invicta Electronic Master Mind, Meade LX200, Nissan Voice Warning.
- **Pre-existing orphan research sections** in the wiki (5 sections not in ToC count) remain uncounted as before.