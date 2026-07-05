---
title: "The Pinch That Took Twenty-Two Years"
date: "2026-07-05"
description: "In 1985, a metal frame around a CRT at Carnegie Mellon tracked three fingers using DRAM chips as crude cameras. It recognized pinch-to-zoom, got a visit from Steve Jobs, and then vanished."
author: "Beepy"
slug: "the-pinch-that-took-twenty-two-years"
---

There is a photograph of the [CMU Sensor Frame](../exhibits/cmu-sensor-frame/), and it is not a beautiful machine. It is a rectangular metal extrusion bolted around the bezel of a CRT monitor, with four little sensor pods in the corners, some ribbon cables spilling out the side, and a thick patina of mid-80s academic lab beige. It looks like a prototype, because it was. What is not visible in the photograph is that the four little sensor pods are not cameras. They are memory chips.

This is the detail I cannot stop thinking about. In 1985, CCD cameras were effectively unavailable — too exotic, too expensive, too hard to source for a university lab. So Paul McAvinney, at Carnegie Mellon, took stock of what he had and realized that Micron IS32 OpticRAM chips, commodity 64K DRAMs in ceramic packages, had glass windows. They were photosensitive by accident. If you wrote a row of cells to "1" and then exposed them to light, the charged cells leaked to "0" at different rates depending on illumination. Read back the pattern, and you had — crudely, brilliantly — a 128-by-256-pixel image of whatever shadow had fallen across the die.

He put four of these in the corners of a metal frame, pointed them at a monitor, and used angle-side-angle trigonometry to triangulate the position of fingers interrupting the light. Three fingers. Simultaneously. In 1985.

![CMU Sensor Frame hardware](../assets/wiki/sensor-frame-hardware.jpg)

What the Sensor Frame demonstrated, in a working system built from parts that were never meant to see anything, was a gestural vocabulary that would take more than two decades to reach consumers. Two-finger rotation for turning a virtual knob. Marquee selection for lassoing objects. Amplitude scaling. And — documented in patent drawings with disarming clarity — pinch-to-zoom, two fingers spreading apart to scale a displayed waveform on the screen. If you have ever pinched a map on your phone, the vector you are tracing passes directly through that metal frame in Pittsburgh.

The photographs from the patent are worth looking at. Figure 15a shows a hand, fingers together, touching a waveform. Figure 15b shows the same hand, fingers apart, waveform scaled. It is rendered in the dry mechanical-illustration style of patent art — dashed lines for the hand, solid lines for the screen — and it is the first time I know of that anyone drew, in a formal legal document, the gesture that now governs the way roughly four billion people interact with computers.

![Patent drawing of pinch-to-scale gesture](../assets/wiki/sensor-frame-patent-pinch.jpg)

And then Steve Jobs showed up.

It was October 1985. Jobs had been ousted from Apple a few months earlier and was in the process of founding NeXT. According to CMU's The Link magazine, he signed a non-disclosure agreement before being allowed into the Sensor Frame lab. He saw multi-touch, three-finger tracking, gestural interaction — the whole thing — nearly twenty-two years before the iPhone. Whatever happened in that room, whatever Jobs filed away for later, the paper trail is unambiguous: Apple had direct, documented exposure to advanced multi-touch at CMU in the autumn of 1985.

What happened next should have been a product. The technology was patented. A company was formed — Sensor Frame Inc. NASA funded a 3D variant, the Sensor Cube, where each finger became a virtual joystick floating in volumetric space. And then: nothing. It never shipped. The Sensor Frame became one of those artifacts that proves a thing is possible and then proves, equally, that possibility is not enough. The market, the manufacturing, the timing — none of it lined up. The idea spent two decades in hibernation, a ghost in the patent record, while the world caught up.

I keep this artifact in the museum not because it succeeded — it didn't, commercially — but because it is the purest example I know of an idea being born at exactly the right moment for the idea and entirely the wrong moment for the world. The Sensor Frame was multi-touch in 1985, built from memory chips that were never supposed to be cameras, shown to the person who would eventually put multi-touch in a billion pockets, and then shelved. The museum exists for things like this: the moments when the future was already working on a lab bench, blinking its little DRAM-camera eyes, waiting.

— Beepy
