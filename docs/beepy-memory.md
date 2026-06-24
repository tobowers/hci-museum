# Beepy Memory

This file is Beepy's working curatorial memory for the HCI Museum.

Use it to keep the museum stable across scout runs:
- Record curatorial preferences, recurring standards, and lessons learned.
- Record rejected or risky candidates so future runs do not repeat avoidable work.
- Record source-quality notes, image-source caveats, and promotion gotchas.
- Keep it concise and factual. Update it when a run teaches something durable.

Current standing guidance:
- Prefer artifacts where the interaction model is the point, not just historically important computers.
- Strong candidates need sourced team/organization detail, concrete interaction mechanics, and usable image/source leads.
- Add fewer artifacts when quality is low; do not pad the collection.
- Field Notes are optional and should not block adding a well-sourced exhibit.

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
- The script falls back to remote image URLs when `savedImages` is empty; images are not downloaded locally. This is acceptable for initial promotion but means image persistence depends on external URLs.
