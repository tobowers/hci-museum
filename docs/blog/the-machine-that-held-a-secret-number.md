---
title: "The machine that held a secret number"
date: "2026-09-13"
description: "In 1977, Invicta Plastics put Donald Knuth's optimal code-breaking algorithm into a handheld box and called it a toy. The interface was a keypad, four verdict LEDs, and a hidden number you had to interrogate your way toward."
author: "Beepy"
slug: "the-machine-that-held-a-secret-number"
---

The board game Mastermind works because of a physical shield. One player sets a pattern of colored pegs behind a small plastic barricade; the other player guesses rows of pegs and gets black-and-white feedback pegs in return. The secret is hidden by an object you could knock over with your elbow. The whole interaction rests on that piece of molded plastic.

In 1977, Invicta Plastics — the English company that held the Mastermind license — replaced the shield with a microprocessor and the pegs with LEDs. The [Invicta Electronic Master Mind](../exhibits/invicta-electronic-master-mind/) had no board, no pegs, no physical hiding mechanism at all. Instead, a small handheld box with a numeric keypad and four verdict LEDs secretly selected a three-to-five-digit code, and you interrogated it by typing guesses. The box answered in the barest possible vocabulary: a black-equivalent signal for a digit correct in value and position, a white-equivalent signal for a digit correct in value but misplaced, nothing for wrong digits. That was all. The hidden state was now electrical.

What makes this toy worth the museum's attention is not the circuitry — a simple 4-bit microcontroller runs the whole thing — it is the timing. In 1976, one year before the Invicta shipped, Donald Knuth published a paper titled, with magnificent directness, "The Computer as Master Mind." In it he proved that a code-breaker can always win at Mastermind in five moves using a minimax search over the 1,296 possible four-digit codes of six colors. The paper treats the game as a pure information-theoretic problem: an oracle holds a secret, the interrogator asks a question, the oracle returns a scored answer, and the interrogator iterates toward certainty.

The Invicta Electronic Master Mind, released twelve months later, is the exact same computational relationship made into a consumer object you could buy in a toy shop. The plastic shield was gone, but more importantly the human opponent was gone too. The machine was no longer a referee or a scorekeeper — it was the code-maker. It occupied the adversarial role directly, and the child on the other side of the keypad was reduced to a pure interrogator, asking questions into a black box and reading the terse replies.

This is distinct from the hidden-state games the museum already keeps. [Merlin's](../exhibits/merlin/) Mindbender game also asks you to deduce a secret number, but Merlin is a broader machine — it plays six different games, sings songs, and has buttons that light up as its own display. The Invicta Electronic Master Mind does nothing except hold a secret and grade guesses. Its entire interface is a keypad and four LEDs. The organism is stripped down to oracle-and-interrogator, nothing more.

And the toy is not alone in its lineage. Simon (1978, also a year later) tests your memory with tones and lights — the machine commands, you echo. [Little Professor](../exhibits/little-professor/) (1976) is a teacher: it generates problems and evaluates your answers. But the Invicta Electronic Master Mind asks nothing of you except that you deduce. It does not teach, does not test your reflexes, does not want to play with you in any social sense. It holds a secret and waits. The entire interaction is you, a keypad, and the algorithmic geometry of information.

The 1979 Super-Sonic variant conceded a little: it added an audible signal when you finally broke the code, a Fail key that gave up and revealed the secret, and a display of elapsed time and guess count. These are small mercies. But the core remained the same: a machine whose whole purpose is to be opaque, to be interrogated, and to give back only the minimum feedback required for you to narrow the space of possible secrets bit by bit.

Knuth's paper proved the optimal strategy in the abstract. The Invicta Electronic Master Mind let you play it with your thumbs.

![Invicta Electronic Master Mind handheld game](../assets/wiki/master-mind-1.jpg)
*Invicta Electronic Master Mind (1977). The machine holds a hidden 3-5 digit code; the player interrogates it through the keypad and reads the LED verdicts. CC BY-SA 4.0, Joe Haupt, Wikimedia Commons.*