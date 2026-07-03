# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Phase 1: Initial Research

Launched 4 parallel hci-research-subagents:
- Subagent A: Unusual HCI devices across multiple novel modalities
- Subagent B: Accessibility/assistive technology devices
- Subagent C: Force-feedback, haptic, tactile displays
- Subagent D: Speech visualization, biofeedback, unusual gaming

### Results filtered (removing already-in-museum and already-deferred):

**Strong candidates identified:**
1. Cauzin Softstrip Reader (1985) — paper-to-digital scanning wand
2. IBM SpeechViewer (1986/1988) — real-time voice-to-graphic biofeedback
3. Reading Electropalatography (EPG) System (1978) — tongue-contact visualization
4. TSAS Vibrotactile Vest (1991) — body-worn spatial haptic display
5. Hunter Digital Footmouse (1990) — foot-operated pointing device

**Rejected (already in museum or deferred):**
Kurzweil Reading Machine, The Digital Desk, Virtual Fixtures, VersaBraille, Mind Mirror EEG (modality overlap with IBVA/Mindlink/Synapse Relax), Minspeak/Express III (linguistic innovation, not hardware HCI), Adaptive Firmware Card (system-level, not HCI paradigm), HandiVoice (overlap with Speak & Spell), Tetra-Scan II (switch-access variant), Magic Wand Keyboard (conductive keyboard variant), Salisbury Hand Controller (overlap with DLR Control Ball/EXOS), Sarcos Exoskeleton Master (military context, overlap with EXOS/GreenMan), Suncom JoySensor (overlap with U-Force), GE HomeMinder (TV+remote, not novel paradigm).

## Phase 2: Deep dives

Launched 4 parallel deep-dive subagents:
- **Cauzin Softstrip:** OUTSTANDING. 16+ sources: Wikipedia, NYT (Sandberg-Diment, Oct 1985), Byte Magazine, academic paper (Reimsbach & Aycock 2021, Archival Science, CC BY 4.0), ANTIC podcast (2016), Personal Computer World (Tebbutt, Jan 1987), US Patents, BBC Tomorrow's World, Internet Archive. 6+ verified images (Wikimedia CC BY-SA, PubMed Central CC BY, Internet Archive). Company/team well-documented (Jack Goldman of Xerox PARC, Bob Brass, patent inventors). Unique interaction: manual paper-to-digital scanning, dibit encoding, magazine-as-storage-medium.
- **IBM SpeechViewer:** MODERATE. Rich interaction model (speech-to-graphic biofeedback with gamified displays). Detailed clinical evidence (Pratt et al. 1993, Valadez et al. 2012). BUT: ZERO surviving screenshots in any verifiable online archive. IBM's 1980s corporate culture means engineers unnamed. Product pages and manuals not archived on Archive.org. Detailed visual descriptions exist but no actual images. Rejected for now pending image discovery.
- **Reading EPG:** OUTSTANDING. 7 verified image URLs: 2 on Wikimedia Commons (Peter Roach, CC BY-SA 4.0, 1978), 5 from icSpeech (current commercial descendant). Unique intimate HCI — computer worn inside the body (custom-molded palate with 62 electrodes). Rich academic lineage from 1970s to present. Team well-documented (Hardcastle, Roach, Jones, Gibbon, Wrench). 8 solid sources including Wikipedia, Articulate Instruments history, icSpeech.
- **TSAS Vest:** MODERATE. Images exist in DTIC PDFs (public-domain US government docs) but need PDF extraction. Military-funded but framed as human-factors sensory augmentation (proprioceptive prosthesis). 1991-1992 concept phase confirmed. Deferred for now — image extraction burden plus military-adjacent context warrants discussion.

## Phase 3: Selection and promotion

**Promoted to collection:**
1. Cauzin Softstrip Reader (1985) — slug: cauzin-softstrip
2. Reading Electropalatography (EPG) System (1978) — slug: reading-epg

**Deliberately not promoted (2 of 3 is sufficient per museum guidance):**
- IBM SpeechViewer — zero images found, despite good interaction story
- TSAS Vest — images in PDFs need extraction, military context

## Phase 4: Verification

- Images downloaded: 4 for cauzin-softstrip, 4 for reading-epg (all 200 OK)
- Images copied to assets/wiki/ (auto by promote script)
- Wiki sections appended to docs/hci-wiki.md (auto by promote script)
- ToC updated manually (entries #72 and #73)
- Wiki intro updated from "seventy-one" to "seventy-three"
- data.ts entries added manually (promote script regex bug: `\n\];\s*\n\nexport const featured` doesn't match actual structure which has `export const exhibits` between)
- Typecheck: PASSED
- Build: 73 exhibits + blog + about, 86 pages

## Files written

- potential/cauzin-softstrip/info.json
- potential/cauzin-softstrip/images/reader.jpeg
- potential/cauzin-softstrip/images/softstrip-example.jpg
- potential/cauzin-softstrip/images/softstrip-in-reader.jpg
- potential/cauzin-softstrip/images/dibit-diagram.jpg
- potential/reading-epg/info.json
- potential/reading-epg/images/electropalate-1978.jpg
- potential/reading-epg/images/epg-frames-catkin.jpg
- potential/reading-epg/images/modern-palate.jpg
- potential/reading-epg/images/epg-tdn-pattern.jpg
- potential/runs/2026-07-03T14-32-33-571Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.md (this trace)
- potential/runs/2026-07-03T14-32-33-571Z-research-review-and-add-about-3-more-weird-hci-interface-artifac.summary.md (summary)

## Files modified

- docs/hci-wiki.md (appended two new exhibit sections, updated ToC, updated intro count)
- src/data.ts (added two new exhibit entries)
- assets/wiki/cauzin-softstrip-{1..4}.{jpeg,jpg} (new files via promote script)
- assets/wiki/reading-epg-{1..4}.jpg (new files via promote script)
