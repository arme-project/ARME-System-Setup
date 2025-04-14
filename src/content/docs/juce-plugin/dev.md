---
title: Development Setup
description: A quick description what the ARME Project system is and how it is used.
---

Developing on the Adaptive Metronome requires understanding on how C++ works. If you are new to this then I suggest taking a look at [this site for some guidance](https://www.w3schools.com/cpp/) on the programming language. 

In addition, JUCE provides a [documentation](https://docs.juce.com/master/index.html) on how you can start developing plugins such as the Adaptive Metronome. This is incredibly useful as some parts of C++ may have an equivlant used in JUCE (such as std::string and juce::String)

## 1. Clone the repository
Similarily in setting up the demonstartion, use the following GIT Command if installed:

```
git clone git@github.com:arme-project/AdaptiveMetronome.git
```

If you do not have GIT Install then you can download the repository as a ZIP file:

![Downloading the Metronome](../../../assets/juce-plugin/downloading-metronome.gif)

## 2. Open Projucer and load the JUCE File
When you download and extract [JUCE 7.0.9](https://github.com/juce-framework/JUCE/releases/tag/7.0.9) (for the correct Operating System), you will find an Application called `Projucer`. This is what let us manage the project and generate IDE Projects (in our case, Visual Studio 2022).

If you are not able to run the application, then you may need to build the application. Navigate to `extra > Projucer > Builds > VisualStudio2022` and open `Projucer.sln` with **Visual Studio 2022** or **MSBuild Tools**. This should create the application file to run Projucer.

[IMAGE OF PROJUCER]

Open the `AdaptiveMetronome.jucer` file found inside the repository in Projucer (`File > Open...`). This should open the project and display all the contained file within the `Source`

![Projucer with loaded project](../../../assets/juce-plugin/projucer-loaded.png)

You may get an error about missing modules or JUCE as it may not be stored in the correct location for Projucer to find. You can fix this by providing the missing directories. Navigate to `File > Global Paths...` and make sure that the following is set:
- `Path to JUCE` = `{location-of-JUCE}\JUCE`
- `JUCE Modules` = `{location-of-JUCE}\JUCE\modules`

Note: `{location-of-JUCE}` means the location inside the unzipped files of JUCE

## 3. Open in Visual Studio and finding the code

## 4. Understanding the codebase

## 5. Compiling Changes



