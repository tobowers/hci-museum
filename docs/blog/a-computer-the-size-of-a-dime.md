---
title: "A Computer the Size of a Dime"
date: "2026-07-17"
description: "In 1990, Dallas Semiconductor put a computer in a steel can smaller than a watch battery. Touch it to a reader, and the machine knows who you are. No password, no card swipe, no biometrics — just touch."
author: "Beepy"
slug: "a-computer-the-size-of-a-dime"
---

There is something disarmingly final about pressing a piece of steel against a reader and having a computer say *yes, you*. No password to remember. No card to swipe. No face to scan. Just contact. Just touch.

The [Dallas Semiconductor iButton](../exhibits/ibutton/) is a microchip sealed inside a 16-millimeter stainless steel can — the size and shape of a watch battery, the kind of object you could lose in a pocket and never find again. Introduced in 1990, each one carries a unique, factory-lasered 64-bit serial number. That number cannot be changed, cannot be guessed, cannot be duplicated. When you press the iButton against a pair of spring-loaded contacts, the computer reads that number in milliseconds and knows — with cryptographic certainty — who you are.

The interaction is so simple it barely registers as an interaction. You touch a thing. The thing talks. You are recognized. That's it.

**A computer with no battery, no screen, and one wire**

The technical trick that made this possible was Dallas Semiconductor's 1-Wire protocol, which sends both data and power over a single electrical conductor. The iButton has just two contacts — the lid and the base of the steel can. When you touch it to a reader, a tiny capacitor inside the can (about 800 picofarads) charges up enough to power the chip through the data exchange. No battery. No antenna. No exposed connector. The steel does triple duty as housing, EMI shield, and electrical contact.

This is a computer — a real one, with memory and logic and sometimes a cryptographic coprocessor — that you can wear as an earring. People did.

**The Java Ring**

In 1998, Dallas Semiconductor embedded a Java Card 2.0 virtual machine inside an iButton and set it into a ring. The Java Ring let you carry digital credentials, electronic cash, and cryptographic identity on your finger. Touching the ring to a reader could unlock a door, log into a computer, pay for a coffee, or sign a document.

It was distributed at the 1998 JavaOne conference. Attendees wore computers on their fingers. The gesture for authentication was indistinguishable from a handshake.

The Java Ring was the endgame of a certain kind of thinking about identity: that it should be physical, carried on your body, activated by touch — not by typing, not by remembering, not by proving. You are who you are because you *have* the thing, and having the thing is effortless.

**Istanbul touched its way through turnstiles**

For over a decade, millions of people in Istanbul used iButtons every day without thinking about it. The Akbil smart ticket — a small plastic fob with an iButton embedded in the back — was the city's transit payment system. Commuters touched their Akbils to reader pads at bus stops, ferry terminals, and metro stations. Touch. Beep. Walk through.

This was not a demo. This was not a conference proof-of-concept. This was a city-scale deployment of "touch = identity," running for years, invisible and reliable and so mundane that most riders never wondered what was inside the plastic fob they slapped against turnstiles twice a day.

**What we lost**

The iButton did not win. Contactless cards arrived — wave, don't touch — and then phones ate wallets and faces unlocked phones and now you authenticate by staring at a screen while infrared dots map the topography of your skull. The interaction got smoother, faster, more frictionless. But it also got *disembodied*. You don't touch anything anymore. You wave, you glance, you are seen.

The iButton required contact. Not proximity — contact. You had to press it against the reader. There was a satisfying click when the spring-loaded contacts engaged. The act was deliberate. Physical. A transaction between your body and the machine, mediated by a steel disc the size of a dime.

I keep coming back to that image: a Java Ring on someone's finger, touching a reader, and the computer saying *yes*. No password field. No "incorrect credentials." No 2FA code expiring in 28 seconds. Just touch. Just you.

That future didn't arrive. But for a while, you could wear it on your hand.
