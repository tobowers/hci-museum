---
name: HCI Museum
description: A digital museum of cutting-edge HCI research from the late 1970s through the early 1990s, rendered as an archival CRT exhibition.
colors:
  tube-black: "oklch(0.045 0 0)"
  void-black: "oklch(0.025 0 0)"
  control-black: "oklch(0.035 0 0)"
  panel-black: "oklch(0.09 0.012 151 / 0.94)"
  phosphor-green: "oklch(0.82 0.21 151)"
  phosphor-bright: "oklch(0.91 0.14 151)"
  phosphor-text: "oklch(0.88 0.07 151)"
  phosphor-muted: "oklch(0.64 0.06 151)"
  line-green: "oklch(0.74 0.19 151 / 0.42)"
  line-green-weak: "oklch(0.74 0.19 151 / 0.18)"
  amber: "oklch(0.74 0.18 80)"
  amber-bright: "oklch(0.86 0.14 80)"
  overload-red: "oklch(0.64 0.238 28)"
  white-hot: "oklch(0.98 0 0)"
typography:
  display:
    fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', monospace"
    fontSize: "clamp(2rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', monospace"
    fontSize: "clamp(1.25rem, 2.5vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', monospace"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.04em"
  body:
    fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  hairline: "1px"
  tag-x: "0.45rem"
  control-x: "0.875rem"
  panel: "0.875rem"
  gutter: "1rem"
  control-height: "2.5rem"
components:
  button-mode:
    backgroundColor: "transparent"
    textColor: "{colors.phosphor-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0.875rem"
    height: "2.5rem"
  button-mode-active:
    backgroundColor: "{colors.phosphor-green}"
    textColor: "{colors.tube-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0.875rem"
    height: "2.5rem"
  link-primary:
    backgroundColor: "{colors.phosphor-green}"
    textColor: "{colors.tube-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 0.65rem"
    height: "2rem"
  panel:
    border: "1px solid {colors.line-green-weak}"
    backgroundColor: "{colors.panel-black}"
    rounded: "{rounded.none}"
    padding: "0.875rem"
---

# Design System: HCI Museum

## 1. Overview

**Creative North Star: "A science-museum exhibition from an alternate 1986."**

The HCI Museum is a brand-forward digital museum. The design IS the experience: every page should feel like walking through a dimly lit archive where each exhibit panel glows with the slow pulse of a CRT. The visual language borrows from terminal hardware, archival science museums, and the stacked HUD compositions of early computer-interface mockups — but it is executed with contemporary precision. It is not a generic "dark mode" site, not a cyberpunk pastiche, and not a nostalgic parody.

**Key characteristics:**
- CRT void as the canvas: near-black backgrounds with layered green-black surfaces and subtle radial glows.
- Phosphor green carries the brand; amber appears only as a rare accent for special states.
- Monospace-forward typography with dramatic weight/size contrast and occasional wide-tracking uppercase labels.
- Square, hairline hardware UI: zero radius, 1px rules, no drop shadows.
- Stacked panel compositions: translucent layers, inner borders, grid overlays, and HUD-style metadata.
- Archival imagery treated as artifact: slightly desaturated, with weak phosphor borders.
- Motion is stateful and subtle: scanlines, slow pulses, cursor-tracked glimmers, and gentle grid drift.

## 2. Color Strategy

**Committed.** Phosphor green carries 30–60% of the visible surface through wireframes, rules, active controls, text, and glow. If green is only an accent, the museum has become generic dark UI.

### Primary
- **Phosphor Green** (`--green`): active material for buttons, links, wireframes, rules, and online/boot state.
- **Phosphor Bright** (`--green-bright`): high-energy text, focus states, hover, labels.

### Secondary / Accent
- **Amber** (`--amber`): rare accent for "featured" or "special collection" markers. Use sparingly so it feels like a different phosphor tube has been swapped in.
- **Amber Bright** (`--amber-bright`): hover/focus on amber elements.

### Neutral
- **Tube Black** (`--bg`): root background.
- **Void Black**: deepest well behind canvases and viewports.
- **Control Black**: header/footer rail backgrounds.
- **Panel Green-Black**: translucent surface for panels and cards.
- **Phosphor Text** (`--text`): default readable foreground.
- **Phosphor Muted** (`--muted`): secondary labels, source text, scaffolding.
- **Line Green** / **Line Green Weak**: one-pixel rules, borders, separators.
- **White Hot**: reserved for text on danger red or maximum-contrast moments.

### Named Rules
- **The Green Owns The Tube Rule.** Green must carry 30–60% of visible surface.
- **The Red Means Overload Rule.** Red appears only for overload, unsafe, hostile, or explicitly dangerous states.
- **The Amber Is Special Rule.** Amber marks rare featured/special states; do not spread it across ordinary UI.
- **The Black Has Layers Rule.** Use tube, void, control, and panel blacks as distinct materials.

## 3. Typography

**Display/Body Font:** JetBrains Mono (with Fira Code and system mono fallbacks). Chosen for its technical character, clear distinction from IBM Plex Mono / Space Mono, and excellent weight range.

The system is intentionally mono-forward, but hierarchy comes from dramatic scale and weight contrast rather than from mixing font families. Think "museum caption burned into a CRT" rather than "developer blog."

### Hierarchy
- **Display** (800, clamp(2rem, 5vw, 4.5rem), 1.05): homepage hero title. Tight but legible letter-spacing.
- **Headline** (700, clamp(1.25rem, 2.5vw, 2rem), 1.15): exhibit titles, section headings.
- **Title** (600, 0.8125rem, 1.4): panel subtitles, metadata.
- **Body** (400, 0.875rem, 1.65): exhibit prose. Slightly taller line-height for dark-background readability.
- **Label** (600, 0.6875rem, 1, 0.06em): uppercase tags, buttons, nav, source labels.

### Named Rules
- **The Firmware Mono Rule.** One terminal stack consistently; no decorative display sans or novelty pixel font.
- **The Short Labels Rule.** Uppercase and tracking reserved for short labels. Body and headlines stay sentence case.
- **Light-On-Dark Breathing Rule.** Body line-height increased to 1.65 for readability on dark backgrounds.

## 4. Elevation

Flat at the DOM layer. Depth comes from translucent panels, one-pixel phosphor rules, WebGL/Canvas atmosphere, scanline overlays, and stateful glow. No drop shadows on normal UI.

## 5. Components

### Site Header
- Fixed top rail, control-black background, 1px bottom rule.
- Square controls, monospace label typography.
- Brand mark: a small pulsing green square (the "online indicator").

### Hero Viewport
- Large canvas/WebGL scene on the left (or full-width on mobile).
- Right-side information panel with exhibit title, stats, and CTA.
- Panel is translucent green-black with 1px weak border.

### Exhibit Card
- Square card with 1px weak border, panel-black background.
- Year tag as small bordered chip.
- Title in headline weight.
- Tags as small uppercase chips.
- Hover: green-bright outline, subtle lift via background tint (no shadow).

### Primary Link / Button
- 2rem high, phosphor-green fill, tube-black text.
- Hover: bright-green fill, 1px outline offset 2px.

### Panel
- Translucent green-black surface.
- 1px weak green border.
- 16:9 images inside with weak border, desaturated/darkened.

## 6. Do's and Don'ts

### Do:
- Treat the museum as an interface; every page is an exhibition space.
- Use actual OKLCH tokens; do not approximate greens with arbitrary hex.
- Keep UI square, thin-lined, and hardware-like.
- Preserve state-driven behavior: boot, online, listen, overload, pointer response.
- Use archival imagery as the hero content.
- Respect reduced-motion settings.

### Don't:
- Use generic cyberpunk neon (purple/blue gradients, chrome, rain).
- Use SaaS polish (rounded cards, soft shadows, gradient blobs).
- Use hacker-terminal parody (matrix rain, unreadable green-on-black).
- Use rounded corners on cards, panels, or rails.
- Use red except for overload/danger states.
- Use amber except for featured/special markers.
- Let glitch run constantly at the same intensity.
