# Beepy Curator Run Summary — 2026-07-26

## What Happened
This run added 3 new HCI artifacts to the museum: two from the computer-telephony angle and one from the scanning/document-capture angle. Both angles were previously unexplored and returned strong candidates with CC-licensed images.

## Artifacts Added to Collection

### 1. ICL One Per Desk / BT Merlin Tonto (1984)
- **Category:** Computer-telephone hybrid
- **Why it matters:** A personal computer with a built-in telephone handset in a cradle molded into the case. The computer literally IS a telephone. Motorola 68008 CPU, TMS5220 speech synthesis for auto-answering. Built by ICL, Sinclair Research, and British Telecom. Sold as Merlin Tonto ("The Outstanding New Telecoms Opportunity").
- **Images:** 3 CC images from Wikimedia Commons (CC BY-SA 4.0)
- **Files:** potential/icl-one-per-desk/info.json, assets/wiki/icl-one-per-desk-{1,2,3}.{webp,jpg}

### 2. AT&T VideoPhone 2500 (1992)
- **Category:** Consumer video telephone
- **Why it matters:** First mass-market consumer video telephone. Integrated 3.3-inch color LCD + camera + handset in one $1,499 device. Worked over ordinary POTS lines at 2-10 fps. Culmination of AT&T's 65-year video telephone quest. Commercial failure.
- **Images:** 1 CC image from Wikimedia Commons (CC BY 2.0, Marcin Wichary/Flickr)
- **Files:** potential/att-videophone-2500/info.json, assets/wiki/att-videophone-2500-1.jpg

### 3. Datacopy Model 700 (1985)
- **Category:** First PC flatbed scanner
- **Why it matters:** Defined the physical interaction model of desktop flatbed scanning: lift lid, place document face-down, close lid, click scan. This ritual, billions of iterations later, was born here. Datacopy Corporation (Palo Alto), Ricoh hardware, acquired by Xerox in 1988.
- **Images:** 2 CC images from Wikimedia Commons
- **Files:** potential/datacopy-model-700/info.json, assets/wiki/datacopy-model-700-{1,2}.{png,jpg}

## Files Written
- `potential/icl-one-per-desk/info.json`
- `potential/att-videophone-2500/info.json`
- `potential/datacopy-model-700/info.json`
- `assets/wiki/icl-one-per-desk-1.webp`
- `assets/wiki/icl-one-per-desk-2.jpg`
- `assets/wiki/icl-one-per-desk-3.jpg`
- `assets/wiki/att-videophone-2500-1.jpg`
- `assets/wiki/datacopy-model-700-1.png`
- `assets/wiki/datacopy-model-700-2.jpg`

## Files Modified
- `docs/hci-wiki.md` — 3 new exhibit entries + ToC update + image path fixes
- `src/data.ts` — 3 new exhibit entries
- `docs/beepy-memory.md` — run notes and lessons
- `potential/runs/2026-07-26T13-56-57-982Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` — trace

## Verification
- `bun run typecheck`: passed (0 errors)
- `bun run build`: passed (125 exhibits, 161 pages)

## Strong Candidates Deferred
- **Beeb Video Digitiser (1983):** Frame grabber for BBC Micro. CC images available but interaction model overlaps with existing vision/scanning entries.
- **BodyLink System (1986):** Multi-sensor biofeedback for C64. Amazing HCI story but NO CC images.
- **Identix TouchPrint (1985):** First commercial fingerprint reader. Body-as-password paradigm but NO CC images.
- **ThunderScan (1984):** Printer→scanner hardware hack. Incredible story but NO CC images.

## Key Learnings
1. Computer-telephony hybrids and scanning/document-capture are productive new angles — both were completely unexplored before this run.
2. Image availability remains the dominant bottleneck: ~80% of strong candidates across all angles lack CC images on Wikimedia Commons.
3. The AT&T VideoPhone sits at the extreme edge of the era (1992) but is acceptable because it crystallizes a 65-year AT&T video telephone lineage.
4. Six parallel subagent angles returned 3 viable CC-image candidates — roughly the expected hit rate for this stage of collection maturity.
5. The `promote-potentials.ts` script still has the data.ts regex bug and image copy bug — both must be done manually.

## Next Steps
- Resolve image licensing for deferred strong candidates (BodyLink, Identix, ThunderScan, Braille 'n Speak, Tomy Verbot)
- Explore future angles: CAD input hardware, digital typography hardware, programmable home appliances
- Build count: 125 exhibits (from 122)
