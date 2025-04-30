---
title: Development Setup
description: A quick description what the ARME Project system is and how it is used.
---

## 1. Clone the repository

Similarily in setting up the demonstartion, use the following GIT Command if installed:

```
git clone git@github.com:arme-project/ARME-XR-Integration-ML2.git
```

If you do not have GIT Install then you can download the repository as a ZIP file:

![Downloading the Metronome](../../../assets/juce-plugin/downloading-metronome.gif)

## 2. Installing relevant packages in MLH 3

In Magic Leap Hub 3, under `Packages` on the right hand side, you will need to find and install the following packages:

1. ML C SDK
2. Unity Package (1.12.1)

![Downloading Packages](../../../assets/unity-ml2-project/downloading%20packages.gif)

You will be ask to download dependencies for these packages, accept this.

## 3. Configure MLH 3 to use custom Android Debug Bridge (ADB)

For the application to work with score-follower, you will need to configure Magic Leap Hub 3 to use a custom ADB we define which can be found where you store your Unity Editor version in. The typical pathway to the **adb.exe**, if you have Android Build Tool installed, would be: `./6000.0.14f1/Editor/Data/PlaybackEngines/AndroidPlayer/SDK/platform-tools`

![Configuring ADB](../../../assets/unity-ml2-project/abd%20configuring.gif)

## 4. Opening the Unity Project

Once you have configured MLH 3, you can then open the Unity Hub and add the `ARME-XL-Integration` as a project file by pressing `Add > Add project from disk`. Once you have done this, open it.

You can find the Main Scene of the ARME application, in the Project window, under `ARME > Scenes` called **MainTestScene**

![Opening main scene](../../../assets/unity-ml2-project/Opening%20Unity.gif)

From here, you can make changes as needed to the scene.

## 5. Setting up Magic Leap and building onto headset

Before we can build, we need to specify a path to the ML SDK package we installed in the Magic Leap Hub 3. In Unity, `Edit > Preferences > External Tools > Magic Leap`. Set the MLSDK to the path of where you have the ML SDK installed onto, which is typically where you have the hub installed and found under `.../MagicLeap/mlsdk/v1.4.0`.

When you are building onto the headset, there is a Build Profule already configured for the Magic Leap 2, you will only need to switch over to use it as the Active Profile to build on. Simply go to `File > Build Profiles` and you will be able to see the settings for exporting the project into an executable.

At the moment, it is defaulted to build on Windows. We want to switch this to either `Android` or further below under `Build Profiles` where it says `MagicLeap2FromWindows`. Press on either options and the select `Switch Platform`.

![Switching Build Platform](../../../assets/unity-ml2-project/switching%20platforms.gif)

Once you have switched over, you can then press `Build` to export onto the headset.
