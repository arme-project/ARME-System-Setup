---
title: Adaptive Metronome
description: The Adapative Metronome (AM) serves as the backbone to ensemble syncrhonisation
---

The EPSRC-funded ARME project is proud to release a plug-in, the **Adaptive Metronome**, designed to simulate the harmonious synchronisation of musicians within a violin quartet playing a piece by Haydn. Such tool gives the ability to observe and analyse event times recorded during simulated ensemble performance. Virtual musicians perform their notes using a linear phase correction model, meticulously adjusting their timing to maintain a harmonious collective. The plug-in supports the configuration of the quartet's composition, accommodating any combination of virtual and human players Key to the virtual musicians' performances is the understanding of music cohesion which is reflected in various control parameters that empower the user to tailor their experience.

### Requirement

You will find the required repository through this link: [Adaptive Metronome (Window-Standalone)](https://github.com/arme-project/AdaptiveMetronome/tree/windows-standalone).

In addition, for the development environment, you will need to install the following:
1. [JUCE 7.0.9](https://github.com/juce-framework/JUCE/releases/tag/7.0.9)
2. [Visual Studio 2022](https://visualstudio.microsoft.com/vs/)

JUCE (short for Jules' Utility Class Extensions) is a widely used C++ framework for developing cross-platform software, especially audio applications and plugins. It is an open source C++ codebase that can be used to create standalone software on Windows, macOS, Linux, iOS and Android, as well as VST, VST3, AU, AUv3, AAX and LV2 plug-ins.