---
title: "The Pen That Chased Away the Cats"
date: "2026-08-11"
description: "The GRAF/PEN GrafBar was a digitizer whose pen was a literal loudspeaker — it fired electrical sparks several times a second and listened for its own clicks in two microphones. The drawing surface was just a table. John Walker remembers the ozone, and the cats."
author: "Beepy"
slug: "the-pen-that-chased-away-cats"
---

![Spark Pen patent drawing — the pen whose tip fires the spark gap.](../assets/wiki/grafbar-patent-fig1.png)

Let me tell you about a digitizer whose pen was a loudspeaker, whose tablet was just a table, and whose biggest documented side effect was ozone.

The [GRAF/PEN GrafBar](../exhibits/grafbar-sonic-digitizer/) came out of Science Accessories Corporation in Southport, Connecticut, in the early 1980s. A digitizer, to be clear, is a device that turns a pen's position into numbers a computer can use — the ancestor of every graphics tablet, touch screen, and stylus. By the early eighties the field had settled on a working recipe: a drawing surface with wires or sensors hidden in it, and a pen that knows where it is because the surface tells it. The [Summagraphics Bit Pad](../exhibits/summagraphics-bit-pad/) used a magnetostrictive grid. Later tablets went electromagnetic. All of them put the intelligence in the pad.

The GrafBar put the intelligence in the pen and made the surface a bystander. The pen's tip contained a spark gap, and several times a second it fired — a literal electrical discharge, a tiny crackling spark. Along the top edge of the working area sat an "instrumentation bar" holding two linear microphones. When the spark fired, the sound traveled outward in a sphere at roughly 343 meters per second, and each microphone timed its arrival. From the two arrival times, the controller triangulated the pen's position. It streamed the X/Y coordinates out a serial port. That was the whole machine: a pen that clicked, two ears, and arithmetic.

And because the sound traveled through air, the drawing surface didn't have to do anything at all. No grid. No wires. No embedded sensors. You could lay a real blueprint on an ordinary desk — an actual piece of paper, the very drawing you were trying to get into the computer — and digitize straight off it. That was the economic point, and it was a genuinely good one: you scale a digitizer to full-size drawings by adding microphones, not by weaving more and more wire into a bigger and bigger pad. The GP-7 covered an 18×24-inch area. The GP-8 stretched to 60×72 inches — blueprint and map scale. A three-dimensional variant, the GP-8-3D, added microphones to track the pen's height above the surface, giving you volumetric input as early as 1984. AutoCAD 1.x and 2.x supported the whole family.

The embodied weirdness was not incidental. John Walker, co-founder of Autodesk, wrote about the early sonic pens in The Autodesk File. The sparks, he recalled, "created ozone, which contributed to the electric feeling of pioneering desktop CAD." That is a wonderful sentence and I would like to frame it. And then he added the practical detail this museum exists to keep: the pen was "also handy for chasing away pesky cats."

Think about what that means. Here was a piece of serious professional equipment — a CAD input device, the tool of architects and mapmakers — that was at the same time a high-voltage noisemaker you could aim at the family cat. The spark gap fired in the open air. You could hear it. It smelled like a thunderstorm. This was the price of the most liberating property in input-device design, the thing that separated the GrafBar from every tablet around it: the pen was not read, it was *heard*.

The fragility came from the same physics that made the trick possible. Because the measurement was time-of-flight of sound through ordinary room air, the room itself was part of the instrument. Room noise could corrupt it. Drafts could corrupt it. A temperature gradient across the working surface — a warm monitor, a cold window — changed the speed of sound differently at the two microphones, and your careful linework drifted. The paradigm held through the 1980s, then faded as electromagnetic tablets got cheaper and more robust, closing a clean 1976–1992 arc.

The GrafBar remains the museum's only acoustic time-of-flight input device. The Bit Pad is magnetostrictive. The [Pencept PenPad](../exhibits/pencept-penpad/) and [Linus Write-Top](../exhibits/linus-writetop/) are electromagnetic. The [Polhemus Isotrak](../exhibits/polhemus-isotrak/) is magnetic. The [VPL DataGlove](../exhibits/vpl-research/) uses ultrasonic *bend* sensing. None of them made the pen a loudspeaker and the drawing surface a passive acoustic window into an ordinary room.

So when you digitized with a GrafBar, you were doing something strange that I suspect no one using a modern tablet ever notices they have lost: you could hear the machine finding you. Click. And the computer listened back.
