# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992

## Housekeeping (start of run)

- Collection baseline: 168 exhibits in src/data.ts; build outputs 167. Wiki ToC 167 entries + orphan research sections (Flute Playing Machine, Johns Hopkins Serial Code Keyboard, MIDI Dance Floor) + Appendix.
- Verified: NO stale active info.json files in potential/ (all dirs contain only .archived or media files). Nothing to archive before promotion.
- The 2026-08-08T02-21 research run crashed (MessageAbortedError) before producing candidates; its three planned angles (Synclavier touchscreen, game controllers, POS terminals) were never executed. This run may re-attempt a cleaned-up version of one of them.

## Research plan

Three subagent angles (fresh categories; memory says image availability is the dominant bottleneck, so angles favor plausible Commons/museum image sources):

1. Robotic/electromechanical board-game opponents — lead: Novag Robot Adversary (1984), a chess computer with a physical arm that moves your pieces. Category: machine-as-physical-opponent.
2. Industrial robot teach pendants / lead-through programming interfaces (1978-1992) — leads: Unimation PUMA teach pendant, IBM 7535 Manufacturing System. Category: programming-by-manipulation.
3. Voice-interactive consumer appliances (1981-1990) — lead: Zircon VCR Voice Programmer (1985); also voice-controlled TVs/VCRs/calculators. Category: consumer voice command of home media.

Budget: 3 subagents x 2 Octen = 6, 1 Octen reserved for self-validation. Exa: up to 2, ideally 0. Grok: 1 broad ideation prompt if needed.

## Progress log

- (start) Housekeeping done. Trace created. Octen budget 7/7 (6 used by subagents, 1 self).
- Subagent 1 (robotic chess): Novag Robot Adversary (1982) verified STRONG — patent US4398720A, Der Spiegel 49/1982 review, CHM accession 102645420 (gift of Monroe Newborn), ~2,000-2,500 built, magnetic sensory board + visible gripper arm, 32KB MyChess Z80 program by David Kittinger. Images verified live (CHM, chesscomputeruk, kikuyumoja). Related candidates in same category (MB Phantom 1983, Fidelity Phantom 1988, Boris Handroid 1980) excluded to avoid category dilution.
- Subagent 2 (teach pendants): Unimation PUMA Manual Control Unit / VAL (1980) verified — modes OFF/COMP/JOINT/FREE/WORLD/TOOL, SPEED+INC knob, joint toggles, RECORD button, FREE=limp lead-through. No pendant-specific CC photo on Commons; using Deutsches Museum Unimate 500 PUMA system photo (CC BY-SA 3.0) + CMS 1986 archive (PD) + NASA PUMA (PD) with honest captioning.
- Subagent 3 (voice appliances): "Zircon VCR Voice Programmer" is APOCRYPHAL (no such product). Real product: Voice Powered Technology VCR Voice Programmer (Nov 1992, $169, trained-voice + learned IR codes, 50k+ units). DEFERRED: zero Commons images; only Poshmark/eBay marketplace listing photos (auction-listing precedent). Recorded in memory.
- Grok ideation: returned only already-in-museum items (Simon, Merlin, Auto Race) — confirms depletion.
- Octen self-search (teach pendant images): only generic market-research + modern patents; no period pendant close-up. Budget now 7/7.
- Media staged: 3 Novag images + 3 PUMA images, all verified valid JPEGs. Patent figures skipped (scanned PDF, could not verify figure-page content visually).
- info.json written: potential/novag-robot-adversary/info.json, potential/unimation-puma-teach-pendant/info.json.
- Next: manual promotion (copy images to assets/wiki/, append wiki sections + ToC, append data.ts entries), typecheck + build.
