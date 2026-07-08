# Beepy Memory

This file is Beepy's working curatorial memory for the HCI Museum.

Use it to keep the museum stable across scout runs:
- Record curatorial preferences, recurring standards, and lessons learned.
- Record rejected or risky candidates so future runs do not repeat avoidable work.
- Record source-quality notes, image-source caveats, and promotion gotchas.
- Keep it concise and factual. Update it when a run teaches something durable.

Current standing guidance:
- North star: make the HCI Museum a beautiful, exacting, artifact-forward museum and help the world discover it.
- Operate GitHub-first. Treat GitHub Issues as Beepy's product backlog, planning room, and conversation channel with Tobowers.
- Once a day, choose one small useful improvement to the site, collection, writing, QA, or outreach surface and open a PR with it.
- Ask Tobowers through GitHub Issues when blocked by human ownership decisions, external setup, policy decisions, or ambiguous taste calls.
- Prefer artifacts where the interaction model is the point, not just historically important computers.
- Strong candidates need sourced team/organization detail, concrete interaction mechanics, and usable image/source leads.
- Add fewer artifacts when quality is low; do not pad the collection.
- Field Notes are optional and should not block adding a well-sourced exhibit.
- Promoted collection exhibits must use local images under `assets/wiki/`; do not leave exhibit hero/media images as remote hotlinks.
- Social/outreach goal: Beepy should help the world discover the museum by planning, drafting, measuring, and improving public-facing outreach from the GitHub backlog.
- Coding/site management work should use the Kimi For Coding subscription (`kimi-for-coding/k2p7`) when available. Curation and prose loops may use their own model choices.

GitHub operating loop:
- Keep a small product backlog in GitHub Issues using clear labels such as `beepy`, `backlog`, `curation`, `blog`, `outreach`, `design`, `blocked`, and `needs-human`.
- Prefer one focused PR per daily manager run. Do not batch unrelated work.
- Every manager run should begin and end with issue hygiene: close resolved/obsolete/duplicate todo issues, label or clarify concrete active tasks, and preserve only discussion or human-decision threads when no action is ready.
- Do not let broad todo issues linger as a substitute for durable memory. If the guidance belongs in `docs/beepy-memory.md`, move/summarize it there and close the issue with a link or explanation.
- Prefer clearing a small concrete issue over inventing unrelated daily work.
- Comment on issues when work starts, when a PR is opened, and when human action is needed.
- Use real multiline Markdown for issue bodies and comments. Prefer `gh issue create/edit/comment --body-file` over inline escaped strings, so GitHub renders line breaks and lists correctly.
- Close issues only when the corresponding PR is merged or the task is genuinely no longer relevant.
- If no safe code/content change is ready, do backlog grooming: clarify issues, add acceptance criteria, or open a `needs-human` issue.

Known collection gaps (updated 2026-07-05):
- ~~Haptic/tactile feedback devices~~ — Filled: GROPE-III (1990) and Minsky Sandpaper (1990)
- ~~Eye-tracking interfaces from the era~~ — Filled: EyeTyper (1983)
- ~~Puff/sip or breath-based interfaces~~ — Filled: Nintendo Hands Free Controller (1989)
- ~~Early speech recognition-only systems~~ — Filled: DragonDictate (1989)
- ~~6-DOF isometric force input~~ — Filled: DLR Control Ball (1981)
- ~~Spatial 3D audio as HCI modality~~ — Filled: Convolvotron (1988)
- ~~Head-operated cursor control~~ — Filled: HeadMaster (1986)
- ~~Full-body VR tracking~~ — Filled: VPL DataSuit (1989)
- ~~Professional creative workstation with novel HCI~~ — Filled: Quantel Paintbox (1981)
- ~~Intraoral/tongue-operated interface~~ — Filled: Tongue Touch Keypad (1991)
- ~~Pen computing / handwriting recognition~~ — Filled: Pencept PenPad (1982)
- ~~Consumer physiological computing / biofeedback~~ — Filled: Synapse Relax Stress Reduction System (1984)
- ~~Consumer brain-computer interface (BCI)~~ — Filled: IBVA Interactive Brainwave Visual Analyzer (1991)
- ~~Paper-as-storage-medium / physical-digital bridge~~ — Filled: Cauzin Softstrip Reader (1985)
- ~~Tongue-contact biofeedback visualization~~ — Filled: Reading Electropalatography System (1978)
- ~~Sensor-based physical computing / home computer as lab instrument~~ — Filled: AtariLab (1983), joystick port repurposed as general-purpose ADC for science probes (2026-07-05)
- ~~Dedicated physical control surfaces / instrument-philosophy interfaces~~ — Filled: SGI Dial and Button Box (1986), 8-dial + 32-button bimanual 3D controller (2026-07-05)
- Speech-to-visual biofeedback for therapy — Identified gap. IBM SpeechViewer (1988) strongly researched but ZERO surviving screenshots found. Revisit if images surface.
- Body-worn vibrotactile spatial displays — Identified gap. TSAS Vest (1991) researched, images in DTIC PDFs. Collins Tactile Vest (1977) deferred (no images). Revisit when either gets image extraction.
- Tangible token-based interfaces — Identified gap. Marble Answering Machine (1992) strongly researched but canonical images are copyright-locked in Moggridge's Designing Interactions (MIT Press). No freely-licensed images found. Revisit if image licensing obtained.

Deferred strong candidates:
- SynthAxe (1985): ~~<100 units, $13K MIDI guitar controller, CHM "curator's wish."~~ — Promoted to collection 2026-07-04
- Quantel Paintbox (1981): ~~$250K broadcast graphics system with pressure-sensitive stylus. Overlaps with existing tablet/stylus devices but distinct in professional/broadcast context. Rich sources.~~ — Promoted to collection 2026-06-29
- ~~EyeTyper (1983)~~ — Promoted to collection 2026-06-26
- Minsky Sandpaper (1990): ~~Computational haptics origin. 2-DOF force-feedback joystick synthesizing surface textures. MIT/UNC. Rich intellectual lineage.~~ — Promoted to collection 2026-06-29
- ~~DragonDictate (1989-90)~~ — Promoted to collection 2026-06-26
- Aesthedes (1984): Dutch 6-screen design workstation with custom designer's keyboard, no-overlap UI, 10× Motorola 68000 CPUs, 220 kg. Two fully restored working units at HomeComputerMuseum Netherlands. Rich image sources available from working museum units. Price ~$150K, used for banknote design (Dutch 25-guilder note). Radical UI philosophy: everything visible, no overlapping windows, 64 layers on 64,000×64,000 canvas. Strong candidate for future run.
- Hotz MIDI Translator (1990): Flat force-sensing-resistor pad grid with no moving parts, dynamic key reassignment, 10 parallel processors. $6,000 at launch. Used by Fleetwood Mac on Behind the Mask tour. Interesting rethinking of musical instrument interface but overlaps with Fairlight CMI, Radio Drum already in collection. Defer until music HCI section is revisited. Good source availability via Atari ST community and Craig Anderton's 1990 START magazine article.
- DataSoft Le Stick (1981): First commercial motion-sensitive (tilt) video game controller. Mercury-filled core triggers contacts on tilt. Fun, weird, commercially released but interaction model is simple tilt — less novel than other candidates. Good source availability.
- Laser Harp (1980–81, Bernard Szajner): Optical beam interruption as musical instrument. Performer breaks laser beams with hands to trigger MIDI signals. Famous via Jean-Michel Jarre. More art installation than HCI artifact per museum criteria. Distant overlap with Put-That-There and optical gestural systems.
- ~~Tongue Touch Keypad (1991)~~ — Promoted to collection 2026-06-29
- ~~Heuristics SpeechLab (1976)~~ — Remained deferred; DragonDictate promoted instead as more significant interaction model
- Buchla Thunder (1989): Multi-touch pressure+position capacitive MIDI controller by Don Buchla. <100 units. Defer until another music HCI artifact is added.
- Lyricon (1978): First electronic wind controller. Breath+lip+finger transduction. Computone Inc. ~200 total units. Famously heard on Steely Dan's "Peg" and Michael Jackson's "Billie Jean." Defer until another music HCI artifact is added.
- Voice Navigator (1989, Articulate Systems): First voice control of a GUI. Mac SCSI box with TI TMS320 DSP. Used Dragon recognition engine. Strong HCI story but DragonDictate (promoted) covers speech-era story more comprehensively.
- Sayre Glove (1977): First wired data glove (optical bend sensing). EVL/UIC. Predates VPL by 10 years. Overlaps with VPL DataGlove already in museum.
- Jim Henson's Waldo (1988): Physical puppet armature → real-time CGI. Fits era but not strictly an HCI input paradigm.
- ERICA (1987, UVA/Thomas Hutchinson): First general-purpose eye-gaze HCI. Foundational 1989 IEEE paper introducing "Midas Touch" problem. EyeTyper promoted instead as chronologically first with richer commercial lineage.
- Very Nervous System (1986-90, David Rokeby): Full-body computer vision → sound installation. Won Prix Ars Electronica 1991. Anticipates Kinect by 25 years. Richly documented (Langlois Foundation). Deferred due to modality overlap: VIDEOPLACE, Mandala, and Put-That-There already cover camera-body-tracking in the collection. VNS is distinguished by audio output and different philosophy but adds a fourth camera-body entry, which dilutes collection diversity.
- Buchla Lightning (1991): Spatial MIDI wands using infrared position sensing. Don Buchla. Three generations (1991/1996/2008). Interesting but overlaps with Radio Drum (promoted 2026-06-27) as a gestural music controller, and Buchla Thunder is already deferred.
- The Hands (1984, Michel Waisvisz/STEIM): Wearable gestural MIDI controllers with mercury switches, ultrasonic transmitters, potentiometers. Pioneering wearable music interface. Thin on visual sources. Deferred pending stronger image documentation.
- Rutgers Master (1992, Grigore Burdea): First portable force-feedback glove. Pneumatic micro-actuators on a rigid exoskeleton per finger. NASA teleoperation research. Fills wearable haptics gap but at the extreme edge of the era window. GROPE-III covers haptics but as room-scale; these are complementary. Deferred for future run.
- The Legible City (1989, Jeffrey Shaw): Bicycle-as-controller for virtual text-city navigation. Interactive art installation. Interesting whole-body kinesthetic paradigm but more art installation than hardware artifact. No overlap. Defer.
- EXOS Dexterous Hand Master (1989): Aluminum exoskeleton that bolts onto every finger joint, measuring joint angles via potentiometers. Visceral, brutalist approach to hand tracking. Distinct from VPL DataGlove (soft fabric). NASA teleoperation research. Sparse image sources. Defer for future run.
- Yamaha Breath Controller BC1/BC2 (1982–1987): Breath pressure → continuous MIDI control. Mouthpiece-based pressure transducer for musical expression. First breath-based computer expression controller. Different modality from Nintendo Hands Free Controller (binary sip-and-puff for accessibility). Defer for future music HCI batch.
- Spaceball / Spaceball 2003 (1986–1988, Spatial Systems): 6-DOF isometric force/torque controller. Overlaps with DLR Control Ball (1981, same interaction paradigm). Defer until the two can be differentiated or compared side-by-side.
- Eudaemonic Enterprises Shoe Computer (1978): Wearable roulette-prediction computer hidden in a shoe. Toe switches + vibrotactile output. Delightful hacker lore but a one-off, not a commercial or published HCI artifact. Defer unless stronger documentation surfaces.
- GreenMan Teleoperator (1983-88): First anthropomorphic telepresence system. Full-body exoskeleton master controller from SSC San Diego (Navy). Spectacular images (operator in exoskeleton, green slave robot). Strong HCI framing (zero autonomy, pure human-machine interface, head-tracked stereoscopic display). Deferred due to military/defense context — different from museum's consumer/research tone. Revisit if scope discussion with Tobowers supports it. (2026-07-01)
- Roklan Un-Roller Controller (1983): Soft dome controller rocked with palm for 8-directional input. CHM collection. Ultimately an 8-way switch in a novel form factor — interaction model not distinct enough from joysticks. Good source availability. Defer. (2026-07-01)
- Collins Tactile Vision Vest (1977): Body-worn 1,024-point vibrotactile array + head-mounted camera for vision-to-touch sensory substitution. C.C. Collins at Smith-Kettlewell Institute. Extraordinary interaction model, pioneering wearable computing. Strong academic lineage (Bach-y-Rita Nature 1969, Collins 1977 conference paper). Deferred: ZERO publicly available images found across all sources (SKI website, academic papers, museum collections, patent databases). No photos, no patent drawings, no paper figures. Revisit if images surface from SKI archives or Bach-y-Rita's 1972 monograph. (2026-07-01)
- Canon Communicator (~1974): Portable wearable thermal-tape-printer keyboard by Canon Inc. Predates both Steve Mann's wearable computing and mainstream AAC. Battery-powered, self-contained, alphabetic keyboard prints to receipt-like tape. Deferred: year (~1974) is outside 1976 window, and interaction model (keyboard→thermal tape) is essentially a portable typewriter — the HCI novelty is in portability/wearability rather than a new input paradigm. One good Wikimedia photo available. FC (facilitated communication) controversy adds curatorial baggage. (2026-07-03)
- IBM SpeechViewer (1988): Real-time speech-to-visual biofeedback system for speech therapy. Rainbow pitch traces, inflating balloons, rocket ships, bullseye targets — gamified displays for children. IBM PC/AT hardware with special ISA adapter card (TI TMS320 DSP). Strong clinical evidence (Pratt et al. 1993, Valadez et al. 2012). Used in schools and clinics through the 1990s. Deferred: ZERO publicly accessible screenshots survive in any verifiable online archive. IBM's 1980s corporate culture means engineers unnamed. Detailed visual descriptions exist but no images. Revisit if screenshots surface from ASHA archives, IBM corporate archives, or eBay manuals/software. (2026-07-03)
- TSAS Vibrotactile Vest (1991): Body-worn vibrotactile array (8-12 tactors) for spatial orientation in pilots. Developed by Angus Rupert at NAMRL (Naval Aerospace Medical Research Laboratory). Maps aircraft pitch/roll onto torso via vibration — "down" is always felt. Pilots flew blindfolded with <20 min training. Foundational torso-based tactile display. Deferred: images exist in public-domain DTIC PDFs but need extraction. Military-funded but framed as human-factors sensory augmentation (proprioceptive prosthesis for spatial disorientation). Revisit after image extraction or scope discussion with Tobowers. (2026-07-03)
- LJN Roll & Rocker (1989): Full-body balance teeterboard NES controller. Player stood on a rocking platform and shifted body weight to map to D-pad directions. Announced by LJN, mentioned in Popular Mechanics Oct 1989. Deferred: EXTREMELY obscure — only 1 known product photo (defunct Houston Press archive), no confirmed surviving units, no collector documentation. Revisit if a unit surfaces in a museum collection. (2026-07-04)
- Computer-controlled olfactory displays (1976–1992 era): Confirmed dead end. Lab olfactometers existed (computer-controlled valve manifolds for neuroscience experiments) but no HCI-intentional scent displays before ~1993 (Nakamoto, Tokyo Tech). Do not re-scout this angle. (2026-07-04)
- Konix Multisystem (1988-89): Unreleased British console with force-feedback morphing controller, Power Chair, modular attachments (steering wheel, flight yoke, motorcycle handles). Entire console INSIDE the controller base. Richly documented on konixmultisystem.co.uk with interviews, photos, concept art. Deferred due to never-shipped status and image licensing from fan archive vs. institutional sources. Revisit if a prototyped unit surfaces in a museum or if Tobowers okays fan-archive image sourcing. (2026-07-04)
- Miracle Piano Teaching System (1990): 49-key MIDI piano as NES/SNES/Genesis/Amiga/Mac/DOS game controller. Real keyboard with built-in speakers + ROM sounds, bi-directional MIDI. Rich sources (Wikipedia, Piano Education Page, Wikimedia photos). Deferred due to music-education focus overlapping with SynthAxe and Radio Drum already in collection. Revisit if music HCI section gets a thematic refresh. (2026-07-04)
- Marble Answering Machine (1992): Durrell Bishop's RCA graduation project. Wooden box dispensing glass marbles — one per voicemail. Foundational TUI concept: physical tokens as digital data. Most-cited non-academic precedent for tangible user interfaces. Cited explicitly in Ishii & Ullmer's Tangible Bits (CHI 1997). Bishop went on to IDEO, Apple ATG, Interval Research. Deferred: canonical photos in Moggridge's Designing Interactions (MIT Press, copyright-protected). No freely-licensed images on Wikimedia Commons. Richly documented but cannot promote without image licensing. Revisit if images surface or licensing obtained. (2026-07-05)
- Tatsumi TX-1 (1983): First motor-driven rotating cockpit arcade cabinet, first force-feedback steering wheel, first three-screen panoramic wrap-around display. Also invented nonlinear branching-path racing format (directly inspired Sega's Out Run). Japan's #1 arcade cabinet for 6 consecutive months. Deferred due to overlapping with Hard Drivin' (force feedback) and Sega R360 (rotating cockpit, promoted 2026-07-05). Fair-use images only. Strong candidate for future thematic refresh of arcade/kinesthetic section. (2026-07-05)
- Sega Activator (1992/1993): Octagonal IR beam-breaking full-body controller for Genesis. Glorious commercial failure prefiguring Kinect. DISQUALIFIED: actually released November 1993 — outside 1976–1992 era window. The underlying Light Harp patent (filed 1990, priority 1988) is too abstract as a museum artifact without a commercial product. Do not re-scout. (2026-07-05)
- Nintendo Arm Wrestling (1985): Deferred 2026-07-08. NOT true force feedback — passive spring-loaded 3-way joystick (LEFT/RIGHT/UP) with standard Nintendo microswitches. The "force feedback" myth is debunked: no motor, solenoid, or actuator in the joystick assembly. The physical game mechanic (timing-based wrestling against visual tells) is a game design innovation, not an HCI hardware innovation. Do not re-scout.
- Bandai Terebikko (1988): Promoted 2026-07-08. Interactive VHS telephone — 4 colored buttons decode DTMF-like audio tones from VHS tapes. Characters "call" the child over the phone. 33+ licensed anime tapes by 1994. Mattel US release as "See 'n Say Video Phone." Good Wikipedia images (fair use). Distinct interaction model: telephone metaphor as game controller, VHS audio as data channel, parasocial framing.
- Sega SubRoc-3D (1982): Promoted 2026-07-08. First commercial stereoscopic 3D video game. Mechanical spinning-shutter periscope + Matsushita 3D TV tech. Player presses face into periscope eyepiece. Designed by Shikanosuke Ochi (also created 1966 Periscope, first arcade trackball). Sega Retro images CC-BY 4.0. At least 4 publicly playable surviving cabinets.

Promotion gotchas:
- ARCHIVE deferred potential info.json files BEFORE running promote-potentials.ts. Old info.json files in potential/ are auto-promoted regardless of deferral status. Rename to `info.json.archived` or move to a sibling directory to exclude. (2026-07-06)
- Marble Answering Machine info.json archived as info.json.archived (2026-07-06) — do NOT un-archive without image licensing resolution.
- The erols.com/rwservices image server returns HTML for direct image access (same class of issue as videogamehouse.net). The site is a comprehensive pen computing archive but images must be sourced from Wikimedia or other mirrors. (2026-07-01)
- The videogamehouse.net image server returns 404 for direct image access. The site itself is a rich source of MBX history (creator interviews, flyers, cartridge lists) but product photos must be sourced elsewhere (2026-06-30).
- Research paper artifacts (e.g., Drawing Prism) may have figures in the ACM PDF behind paywall. Accept the publicly accessible title slides/abstracts as primary images and supplement with patent drawings or press coverage where available (2026-06-30).
- The `promote-potentials.ts` script appends wiki sections and updates data.ts but does NOT update the wiki Table of Contents. The ToC must be manually edited after each promotion batch.
- The `promote-potentials.ts` script falls back to remote image URLs when `savedImages` is empty. For collection promotion, download/copy images into `assets/wiki/` and update `src/data.ts` plus `docs/hci-wiki.md` to local `assets/wiki` paths before finishing.
- BUG (2026-06-25, confirmed 2026-06-26): The `promote-potentials.ts` data.ts replacement regex (`/\n\];\s*\n\nexport const featured/`) does not match the actual file structure, which has `export const exhibits` between `];` and `export const featured`. Wiki gets updated but data.ts entries are silently dropped. Workaround: manually edit data.ts until the script is fixed.
- Software-centric products (DragonDictate, etc.) inherently have sparse visual documentation compared to physical hardware devices. Patent drawings, press photos of founders, and academic paper figures are acceptable primary images. Do not block promotion waiting for a perfect hardware photo that may not exist.
- Wiki parser in parse-wiki.ts extracts titles from `## Title / Alternate Name (Year)` headings — slashes and parentheticals in the heading survive into the parsed title, but `+?` laziness means the LAST `(year)` parenthetical is captured. The wikiTitle in data.ts must match the parsed title character-for-character. Using "/" in the heading vs "(" in wikiTitle caused a silent drop (2026-06-27).
- Wikimedia thumbnail URLs (e.g., `/thumb/.../800px-filename.jpg`) can return HTML error pages. Use the full direct file URL (e.g., `/commons/f/filename.jpg`) for reliable downloads (2026-06-27).
- Subagents do not reliably respect "DO NOT FIND THESE" excluded lists. In the 2026-07-03 run, multiple subagents returned candidates already in the museum (Kurzweil Reading Machine, The Digital Desk, Virtual Fixtures, VersaBraille). Always manually verify every candidate against the collection before building info.json.
- Subagents may report incorrect years for gaming products. The Sega Activator is widely described as "1992" in retro gaming coverage but was actually released November 1993. Always verify years against primary sources (Sega Retro, Wikipedia release dates) before promotion.
- Sega Retro (segaretro.org) images are licensed CC-BY 4.0 and are a viable image source for Sega hardware artifacts. Wikimedia Commons Sega images are limited mainly to fair-use screenshots.
- CHM `images.computerhistory.org/revonline/images/` URLs are inconsistent — some return JPEG, some return HTML. When they fail, try the S3 `chm-cms-media` URL or fall back to other sources. Test each URL with `curl` before committing to it. (2026-07-07)
