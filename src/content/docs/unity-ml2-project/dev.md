---
title: Development Setup
description: A quick description what the ARME Project system is and how it is used.
---

1. Download and set-up **Magic Leab Hub 3** as above.  
Clone the repo and install **Unity 6000.0.14f1** via **Unity Hub**. Make sure to include the **Android Build Tools**. 
2. In the **Magic Leab Hub 3** **Packages** manager, install:
   - **ML C SDK 1.4**  
   - **Unity Package 1.12.1** - *This is now **Optional*** as this is included in the **Unity** project under the `..\Packages` folder instead.
3. In the **Magic Leab Hub 3** **Settings** go to **Use custom ADB** and browse to the **adb.exe** file included with the Unity installation. This is typically installed at: `{ProgramFiles}\Unity\Hub\Editor\6000.0.14f1\Editor\Data\PlaybackEngines\AndroidPlayer\SDK\platform-tools\adb.exe`
4. Open the Unity project and load the `MainTestScene` scene to make changes.
5. Under `Edit -> Preferences -> External Tools -> Magic Leap` menu, specify the path to the installed `MLSDK` folder. 
6. The `..\Settings\BuildProfiles` folder includes a `MagicLeap2FromWindows` build profile. This can be built to an `.apk`, or deployed directly to a connected **ML2** Device from **Unity**.
