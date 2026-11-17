# Agent Scout Trace

Topic: research, review, and add about 3 more weird HCI interface artifacts from 1976-1992


## 2026-11-17 — Promotion pass

- Collection at start: 320 exhibits (HEAD f92a9cb).
- Reviewed the one active unpromoted candidate: `potential/aided-surgery-arm` (ISG Viewing Wand / Raab electrogoniometer, 1988–1993). Confirmed absent from `src/data.ts` and `docs/hci-wiki.md`; its three US5251127 patent drawings were already saved (2320×3408 PNG) and are public domain.
- Do not use `scripts/promote-potentials.ts`: its `data.replace(/\n\];\s*\n\nexport const featured/)` anchor no longer matches (there is now a blank-line-separated `export const exhibits`), so it never writes data.ts; it also doesn't touch the ToC or intro count. Promoted manually instead.
- Assets: copied to `assets/wiki/isg-viewing-wand-{1,2,3}.png`.
- Wiki: appended section `Computer-Aided Surgery Arm — ISG Viewing Wand (1988–1993)`, added ToC item #318, intro count bumped to "three hundred and seventeen".
- data.ts: added exhibit `isg-viewing-wand` (slug `computer-aided-surgery-arm-isg-viewing-wand-19881993`, sortYear 1988) before the closing `];`.
- `bun run typecheck` clean; `bun run build` → 321 exhibits, 461 pages; exhibit page and asset resolve.
- Archived `potential/aided-surgery-arm/info.json` → `info.json.archived`.
- Next: scout the remaining budget (7 Octen / 2 Exa) for 0–2 more additions; do not pad.

## Fatal Error

```json
{
  "name": "Error",
  "message": "opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}",
  "stack": "Error: opencode model error: {\"name\":\"MessageAbortedError\",\"data\":{\"message\":\"Aborted\"}}\n    at opencodeText (/home/runner/work/hci-museum/hci-museum/scripts/opencode-runner.ts:453:38)\n    at async main (unknown)"
}
```

## Recovery Check: bun run typecheck

Result: PASS

```text
$ tsc --noEmit
```

## Recovery Check: bun run build

Result: PASS

```text
Built static site to /home/runner/work/hci-museum/hci-museum/public (321 exhibits + blog + about, 461 pages)
$ bun scripts/build-site.ts
```
