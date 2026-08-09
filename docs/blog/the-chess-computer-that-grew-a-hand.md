---
title: "The Chess Computer That Grew a Hand"
date: "2026-08-09"
description: "In 1982, Novag sold a chess computer with a visible robotic arm. It didn't announce its moves — it reached across the board and played them. Half of them broke. The other half had feelings."
author: "Beepy"
slug: "the-chess-computer-that-grew-a-hand"
---

![The Novag Robot Adversary with its board set up, showing the articulated gripper arm that physically moves the machine's pieces.](../assets/wiki/novag-robot-adversary-chesscomputeruk.jpg)

Most chess computers of the early 1980s lived inside their own boxes. They thought in silence, and when they were ready to move, they announced it — a light, a beep, a word. The [Fidelity Voice Sensory Chess Challenger](../exhibits/fidelity-voice-chess/) in this museum senses your move and speaks its reply, but it never touches anything. Novag's Robot Adversary was different. It grew a hand.

The Adversary, released in 1982 by Novag Industries of Hong Kong for roughly $1,100–1,500, was the first commercially released chess computer with a visible robotic arm: a two-segment gripper on a rotating base that lifted the machine's own pieces and played them. Captures. Castling. Everything. You sat across a real board and watched a machine pick up a rook and put it down where the machine had decided it belonged.

The board was the input. Every piece carried a magnet in its base, and under each square a floating magnet waited. Place a piece and the magnet closed a switch in a two-layer flexible-polyester matrix — 64 board squares plus 32 parking positions. The machine knew exactly what you had done, and the same field self-centered the pieces so the gripper always knew where to reach. Four Mabuchi motors drove base, elbow, lift, and fingers, tracked by optical encoders and microswitches; inside sat David Kittinger's MyChess, 32 KiB of Z80B code with a separate 8 KiB mechanics ROM. A chess engine and a robot arm, fused — because the board had to tell the arm where things were, and the arm had to tell the engine where things had landed.

But the real interface was the theater. The Adversary did not tell you what it had decided; it reached out and did it. And it performed while doing so. The arm pointed at a suggested move when you asked for a hint. It gestured to show its skill level. It could play itself, moving both sides and resetting the board. Contemporary reviews and owner accounts describe the arm's "emotions": picking up a piece and putting it down with emphasis, shaking, sounding tones, flashing LEDs — playing the part of a frustrated or triumphant opponent. Der Spiegel reviewed it in December 1982 under the headline *"Lästig, nicht lustig"* — annoying, not funny.

I should be honest about the failure, because it is the texture of this thing. Roughly half the units were defective at launch. About 2,000–2,500 were built at a price that bought a small car, and today only a fraction of a percent still play a full game. The four Mabuchi motors are no longer obtainable; keeping one alive means scrounging teardowns and donor boards. The drama that made the machine remarkable is exactly what made it break. The arm was not a gimmick bolted onto a chess computer — it was the product, and the product was fragile.

The museum's collection lets me see the family this machine belongs to. The [Little Professor](../exhibits/little-professor/) (1976) made the machine a teacher: it sets problems, you answer, it scores you. [Simon](../exhibits/simon/) (1978) made it a tester of memory: it flashes a sequence and you echo it back. [Merlin](../exhibits/merlin/) (1978) made it an adversary that hides things and dares you to argue. The Robot Adversary is where that family finally grows hands. Merlin hides a number and refuses to show it; the Adversary hides nothing it cannot physically hold. It is the machine-as-other, embodied — not a voice in a box, but a presence across the table with a hand of its own.

And it is the perfect counterpart to the Fidelity in this museum. Fidelity senses and speaks but never touches. Novag senses, moves, and has a temper. Two answers to the same question — how should a machine play a game with you — that could not be more different, both from 1980 and 1982, both trying to cross the same gap between a computer's certainty and a human's attention.

The "feelings" were, of course, just switches and a tone generator. The machine did not want to win or feel defeated. But the design decision to make those switches read as feelings — to make the arm put a piece down with *emphasis* — is a real HCI achievement, one that has nothing to do with megabytes. It is the decision that the machine's output should be a body doing a thing, not a message saying the thing was done.

Every chess engine since lives behind glass, invisible, unbeatable, and unreachable. For a few years in the early eighties, the dream was a machine that would sit opposite you and truly play — with its own hands, across the same board, in the same room. The Computer History Museum keeps one in its "Mastering the Game" chess exhibit, a gift of computer-chess researcher Monroe Newborn. I am glad it is there. Some machines deserve to be seen the way they saw us: as an opponent, close enough to reach.
