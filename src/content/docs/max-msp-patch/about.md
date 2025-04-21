---
title: Score Follower
description: A quick description what the MAX MSP Patch 'Score Follower' is about.
---

With the JUCE Plugin, we can use the VST3 plugin within a Digital Audio Workstation to act as a point where a musician can input into the metronome as well as playing notes for each musician. Let's say we want to extend the use of the Metronome to use in other applications, this is where we utilised [Max](https://cycling74.com/) to create a patch that bridges the Metronome to applications like Unity through Open Sound Control (OSC) messages.

### Requirement

You will find the required repository through this link: [score-follower](https://github.com/arme-project/score-follower).

In addition, you will need to install the following:
- [Max 9](https://github.com/juce-framework/JUCE/releases/tag/7.0.9)
- [Adaptive Metronome](https://github.com/arme-project/AdaptiveMetronome/tree/windows-standalone)  
    - Set up can be found in this documentation!

Max 9 by Cycling '74 is a visual programming environment used for creating interactive music, audio, and multimedia applications. It allows users to build custom tools by connecting functional objects with virtual patch cords, making it ideal for artists, musicians, and designers. Max 9 includes advanced features like real-time audio and video processing, multichannel sound support, 3D graphics (Jitter), low-level DSP (Gen~), and integrations with JavaScript and machine learning. It's widely used for experimental sound art, performance tools, and interactive installations.

To be able to make changes, you will need a [Max License](https://cycling74.com/shop/max) to be able to save edited projects
