# AI App Design Principles

Source: [How to apply professional design principles in AI app development](https://expo.dev/blog/how-to-apply-professional-design-principles-in-ai-app-development), Expo Blog, Nicolas Solerieu, June 23, 2026.

## Core idea

AI can assemble interfaces quickly, but the default output often looks generic, sterile, or over-utilitarian. The gap between a generated app and a professionally designed app is not just polish for polish's sake. It is the deliberate application of design principles: contrast, hierarchy, alignment, proximity, repetition, balance, white space, and unity.

The useful takeaway is not "make a design skill file and hope." AI still needs art direction. These principles give the human and the model a shared critique vocabulary for screenshot review, iteration, and revision.

## Why AI output looks unfinished

Agents are good at producing common layout patterns, especially from templates or existing code. They are weaker at visual judgment because design is not only code. A generated implementation can satisfy the requested feature while still feeling visually unresolved: everything may be technically present, but the eye has no clear path, the brand has no atmosphere, and the screen has no point of view.

Treat first-pass AI output as a base layer, not the final design.

## The eight principles

### Contrast

Contrast makes elements distinguishable. Differences in size, color, weight, shape, brightness, or texture create emphasis and direct attention. Without contrast, every element competes at the same volume.

Use it to ask: what is the one thing the user should notice first?

### Hierarchy

Hierarchy orders information by importance. Headlines, primary actions, metadata, body text, and supporting elements should not all speak with the same weight.

Use it to ask: does the screen guide the eye in the order the product needs?

### Alignment

Alignment creates order and intentional relationships. Shared edges and axes make elements feel connected. Misalignment is one of the fastest ways for a UI to feel accidental.

Use it to ask: do related elements share a clear edge, centerline, or grid?

### Proximity

Proximity groups related information and separates unrelated information. Space can communicate structure without adding boxes, borders, or labels.

Use it to ask: are related items close enough, and are distinct modes far enough apart?

### Repetition

Repetition creates cohesion. Reused type scales, colors, spacing, shapes, and interaction patterns help a screen feel like a system instead of independent decisions.

Use it to ask: which visual decisions are repeated deliberately, and which are accidental one-offs?

### Balance

Balance distributes visual weight across the composition. Symmetry can feel stable; asymmetry can feel dynamic. Both can work, but unresolved weight makes a screen feel lopsided.

Use it to ask: does one area dominate for a reason, or is the layout accidentally heavy?

### White Space

White space, or negative space, is active design material. It gives content room to breathe and strongly affects whether a screen feels premium, calm, dense, frantic, or cheap.

Use it to ask: where should the interface pause?

### Unity

Unity is the sense that everything belongs. It emerges when the other principles agree with each other. A unified design has no arbitrary colors, shapes, spacing, or interaction behaviors.

Use it to ask: does every choice reinforce the same product and brand idea?

## How to use this with AI

1. Generate or implement the first version.
2. Capture a screenshot, not just the code.
3. Critique the screenshot against the eight principles.
4. Name the most important visual failure before asking for changes.
5. Revise with specific direction: "increase hierarchy between title and metadata," "reduce competing accent colors," "separate browsing content from hero content," or "make the CTA the only high-contrast clickable element."
6. Repeat until the screen has a clear focal point, readable structure, and a coherent visual system.

## Prompt pattern

Use this when reviewing a generated interface:

```text
Review this screenshot using these principles: contrast, hierarchy, alignment,
proximity, repetition, balance, white space, and unity.

Identify the top three visual problems that make the screen feel generic or
unprofessional. For each problem, explain what principle is failing and propose
a concrete revision. Prioritize changes that improve the user's eye path and
make the design feel more intentional.
```

## Museum-specific application

For HCI Museum work, this means AI-generated UI should not stop at functional dark-mode panels. The museum's design promise is archival, luminous, and tactile. Use the principles this way:

- Contrast: phosphor green, amber, image treatment, and black layers should create a clear focal point, not a uniform terminal wash.
- Hierarchy: artifact imagery comes first; context and metadata support it.
- Alignment: panels should feel like calibrated exhibition hardware.
- Proximity: captions, source notes, metadata, and exhibit copy should form clear reading groups.
- Repetition: scanlines, hairline rules, square controls, and mono type should behave like a system.
- Balance: dense archival information needs visual counterweight from imagery, void space, or controlled glow.
- White space: darkness is not empty; it is the museum room around the artifact.
- Unity: every visual choice should reinforce the alternate-1986 science-center exhibition, not generic cyberpunk or SaaS polish.
