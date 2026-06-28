# Run Summary — 2026-06-28

**Goal:** Research, review, and add about 3 more weird HCI interface artifacts from 1976–1992

## Artifacts Added to Collection

### 1. Convolvotron (Crystal River Engineering / NASA Ames, 1988)
- First real-time 3D audio spatializer. Custom parallel ALU convolution engine with 128 16×16 ALUs performing HRTF convolution at 320M MAC/s
- Two-board PC set, $14,995 in 1989. Four simultaneous spatialized sound sources over stereo headphones
- NASA VIEW lab spin-off (alongside VPL Research, Fakespeare Labs). Acquired by Aureal → Creative Technology
- New modality: spatial audio as bidirectional HCI (head movement drives auditory world updates)
- Slug: `convolvotron`
- Images: 2 (SIGGRAPH 1991 Immersive Pavilion demo, CRE Audio Reality logo)

### 2. HeadMaster (Personics Corp / Prentke Romich, 1986)
- First commercially successful head-operated cursor controller. 40 kHz ultrasonic phase-comparison tracking at 1000 Hz
- Lightweight headset (3 oz) with 3 receivers, sip-and-puff click. $795 for Macintosh in 1986
- Included ScreenTyper: frequency-optimized on-screen keyboard, 1986 — a decade before soft keyboards became common
- Held by both Smithsonian NMAH and Computer History Museum. Survived ~20 years as a product line
- Slug: `headmaster`
- Images: 2 (US Patent 4,682,159 figures — system overview, headset placement)

### 3. VPL DataSuit (VPL Research, 1989)
- First full-body fiber-optic tracking suit. 30+ bend sensors across arms, legs, and trunk
- Part of the 'Reality Built for Two' (RB2) multi-user VR system. Appeared in *The Lawnmower Man* (1992)
- Completes the VPL triptych: DataGlove (hand), EyePhone (eyes), DataSuit (body)
- Slug: `vpl-datasuit`
- Images: 1 (Wikimedia Commons, Nissho Iwai Tokyo showroom display, by Dave Pape)

## Files Written

- `potential/convolvotron/info.json`
- `potential/headmaster/info.json`
- `potential/vpl-datasuit/info.json`
- `potential/convolvotron/images/siggraph-1991-demo.jpg`
- `potential/convolvotron/images/cre-logo.png`
- `potential/headmaster/images/patent-fig1-system.png`
- `potential/headmaster/images/patent-fig2-headset.png`
- `potential/vpl-datasuit/images/datasuit-nissho-iwai.jpg`
- `assets/wiki/convolvotron-1.jpg`
- `assets/wiki/convolvotron-2.png`
- `assets/wiki/headmaster-1.png`
- `assets/wiki/headmaster-2.png`
- `assets/wiki/vpl-datasuit-1.jpg`
- `potential/runs/2026-06-28T12-47-03-772Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md` (trace)
- `potential/runs/2026-06-28T12-47-03-772Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md` (this file)

## Files Modified

- `docs/hci-wiki.md` — appended 3 new wiki sections + updated ToC (entries 48–50) + intro count (38→50)
- `src/data.ts` — added 3 new exhibit entries

## Verification

- `bun run typecheck` — **passed** (zero errors)
- `bun run build` — **succeeded** (50 exhibits + blog + about, 57 pages)

## Known Issues

- The `promote-potentials.ts` data.ts replacement regex bug persists: `/\n\];\s*\n\nexport const featured/` does not match the file structure. Workaround: manual data.ts edit.
- The script also does not update the wiki Table of Contents. Workaround: manual ToC edit.
- VPL DataSuit has a duplicate image at `assets/wiki/vpl-datasuit.jpg` (from prior run's VPL EyePhone/DataGlove section). This is benign but should be cleaned up eventually.

## Collection Now At

- 50 exhibits (up from 47)
- New modalities added: spatial 3D audio (Convolvotron), ultrasonic head tracking for cursor control (HeadMaster), full-body fiber-optic tracking (VPL DataSuit)

## Research Methodology

- 5 parallel hci-research-subagent tasks across different HCI domains (head interfaces, 3D audio, interactive whiteboards, full-body suits, weird embodied controllers)
- Source verification via webfetch on SIGGRAPH History Archive, NASA Spinoff, Wikipedia, Google Patents
- Images downloaded via curl from SIGGRAPH, Wikimedia Commons, and Google Patent Images

## Candidates Evaluated but Not Added

- Head tracking: LROP / Long-Range Light Pen (1983–85) — interesting but thin on images, overlaps with EyeTyper
- Head tracking: FreeWheel / HeadMouse (1988) — weaker performance in 1991 comparison, thinner documentation
- 3D audio: Roland RSS System (1990–92) — interesting physical controller but Convolvotron is historically primary
- 3D audio: Focal Point 3D Audio (1991) — thin on sources and images
- Interactive whiteboards: SMART Board (1991) — massive commercial success but mundane for weird-collection museum
- Interactive whiteboards: Xerox LiveBoard (1988–92) — good CSCW story, overlaps with Digital Desk
- Full-body: Calvert Potentiometer Exoskeleton (1981–83) — academically foundational but hard to exhibit
- Full-body: MIT Graphical Marionette (1983) — conceptually important, no commercial artifact
- Weird: Atari Puffer (1983) — unreleased exercise bike controller, good docs but never shipped
- Weird: Soundbeam (1989) — ultrasonic MIDI controller, interesting but medium source quality
- Weird: Interactive Plant Growing (1992) — living plant as interface, more art installation than hardware artifact
- Weird: Yamaha Miburi (1992–95) — full-body musical jumpsuit, edge of era window
- Weird: Synapse Relax (1984) — EMG biofeedback game, overlaps with BioMuse and Atari Mindlink

## Subagents Used

- 5 initial research subagents (hci-research-subagent)
- Total: 5 subagent invocations
