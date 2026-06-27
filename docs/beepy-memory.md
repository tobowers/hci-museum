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

Known collection gaps (updated 2026-06-26):
- ~~Haptic/tactile feedback devices~~ — Filled: GROPE-III (1990), 6-DOF force-feedback molecular docking
- ~~Eye-tracking interfaces from the era~~ — Filled: EyeTyper (1983), first commercial camera-based eye-typing device
- ~~Puff/sip or breath-based interfaces~~ — Filled: Nintendo Hands Free Controller (1989), chin joystick + sip-and-puff
- ~~Early speech recognition-only systems~~ — Filled: DragonDictate (1989), first large-vocabulary speech-to-text dictation
- New modality: 6-DOF isometric force input — Filled: DLR Control Ball (1981), force-sensing ball from German Aerospace Center

Deferred strong candidates:
- SynthAxe (1985): <100 units, $13K MIDI guitar controller, CHM "curator's wish." Rich sources via Allan Holdsworth community, MusicRadar, CHM blog. Revisit when adding another music HCI artifact.
- Quantel Paintbox (1981): $250K broadcast graphics system with pressure-sensitive stylus. Overlaps with existing tablet/stylus devices but distinct in professional/broadcast context. Rich sources.
- ~~EyeTyper (1983)~~ — Promoted to collection 2026-06-26
- Minsky Sandpaper (1990): Computational haptics origin. 2-DOF force-feedback joystick synthesizing surface textures. MIT/UNC. Rich intellectual lineage.
- ~~DragonDictate (1989-90)~~ — Promoted to collection 2026-06-26
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

Promotion gotchas:
- The `promote-potentials.ts` script appends wiki sections and updates data.ts but does NOT update the wiki Table of Contents. The ToC must be manually edited after each promotion batch.
- The `promote-potentials.ts` script falls back to remote image URLs when `savedImages` is empty. For collection promotion, download/copy images into `assets/wiki/` and update `src/data.ts` plus `docs/hci-wiki.md` to local `assets/wiki` paths before finishing.
- BUG (2026-06-25, confirmed 2026-06-26): The `promote-potentials.ts` data.ts replacement regex (`/\n\];\s*\n\nexport const featured/`) does not match the actual file structure, which has `export const exhibits` between `];` and `export const featured`. Wiki gets updated but data.ts entries are silently dropped. Workaround: manually edit data.ts until the script is fixed.
- Software-centric products (DragonDictate, etc.) inherently have sparse visual documentation compared to physical hardware devices. Patent drawings, press photos of founders, and academic paper figures are acceptable primary images. Do not block promotion waiting for a perfect hardware photo that may not exist.
- Wiki parser in parse-wiki.ts extracts titles from `## Title / Alternate Name (Year)` headings — slashes and parentheticals in the heading survive into the parsed title, but `+?` laziness means the LAST `(year)` parenthetical is captured. The wikiTitle in data.ts must match the parsed title character-for-character. Using "/" in the heading vs "(" in wikiTitle caused a silent drop (2026-06-27).
- Wikimedia thumbnail URLs (e.g., `/thumb/.../800px-filename.jpg`) can return HTML error pages. Use the full direct file URL (e.g., `/commons/f/filename.jpg`) for reliable downloads (2026-06-27).
