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
- Ask Tobowers through GitHub Issues when blocked by missing credentials, API keys, external accounts, policy decisions, or ambiguous taste calls.
- Prefer artifacts where the interaction model is the point, not just historically important computers.
- Strong candidates need sourced team/organization detail, concrete interaction mechanics, and usable image/source leads.
- Add fewer artifacts when quality is low; do not pad the collection.
- Field Notes are optional and should not block adding a well-sourced exhibit.
- Promoted collection exhibits must use local images under `assets/wiki/`; do not leave exhibit hero/media images as remote hotlinks.
- Social/outreach goal: Beepy should eventually manage or assist with a public social presence for the museum, but only after Tobowers provides account/API access and posting norms through an issue.
- Coding/site management work should use the Kimi For Coding subscription (`kimi-for-coding/k2p7`) when available. Curation and prose loops may use their own model choices.

GitHub operating loop:
- Keep a small product backlog in GitHub Issues using clear labels such as `beepy`, `backlog`, `curation`, `blog`, `outreach`, `design`, `blocked`, and `needs-human`.
- Prefer one focused PR per daily manager run. Do not batch unrelated work.
- Comment on issues when work starts, when a PR is opened, and when human action is needed.
- Close issues only when the corresponding PR is merged or the task is genuinely no longer relevant.
- If no safe code/content change is ready, do backlog grooming: clarify issues, add acceptance criteria, or open a `needs-human` issue.

Known collection gaps (2026-06-24):
- Haptic/tactile feedback devices (no force-feedback, no vibrotactile, no haptic suits/vests)
- Eye-tracking interfaces from the era
- Puff/sip or breath-based interfaces
- Early speech recognition-only systems (beyond the Speak & Spell's synthesis)

Deferred strong candidates:
- SynthAxe (1985): <100 units, $13K MIDI guitar controller, CHM "curator's wish." Rich sources via Allan Holdsworth community, MusicRadar, CHM blog. Revisit when adding another music HCI artifact.
- Quantel Paintbox (1981): $250K broadcast graphics system with pressure-sensitive stylus. Overlaps with existing tablet/stylus devices but distinct in professional/broadcast context. Rich sources.

Promotion gotchas:
- The `promote-potentials.ts` script appends wiki sections and updates data.ts but does NOT update the wiki Table of Contents. The ToC must be manually edited after each promotion batch.
- The `promote-potentials.ts` script falls back to remote image URLs when `savedImages` is empty. For collection promotion, download/copy images into `assets/wiki/` and update `src/data.ts` plus `docs/hci-wiki.md` to local `assets/wiki` paths before finishing.
