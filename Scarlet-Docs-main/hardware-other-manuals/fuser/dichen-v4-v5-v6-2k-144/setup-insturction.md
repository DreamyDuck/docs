---
icon: code-branch
---

# Setup Insturction

{% hint style="info" %}
Toolset Download Link

[https://alist.scarlet.technology/Fuser](https://alist.scarlet.technology/Fuser)
{% endhint %}

***

## » What to prepare

* A <mark style="color:red;">**Main PC**</mark> with an HDMI port, capable of outputting the required resolution and refresh rate.
* A <mark style="color:red;">**Second PC**</mark> with an HDMI port, capable of outputting the required resolution and refresh rate.
* 3 HDMI cables, capable of outputting the required resolution and refresh rate.

{% hint style="danger" %}
**Before diving into the official installation tutorial, there are some essential information that you need to be aware of.**

1. The resolution inputted in the fuser must be same. (The refresh rate can be different.)
   * For example, if the main PC inputs 1080p 240Hz and the second PC inputs 1080p 60Hz, the output result will cause the ESP rendering overlay to run at only 60fps. As a result, the ESP rendering overlay will appear laggy.
{% endhint %}

***

## » Setup Instruction

### ① **Get EDID File**

1. The board doesn't light up after being plugged in
2. Plug In

{% hint style="danger" %}
<mark style="color:red;">**`All actions here to be done on Main PC !!!`**</mark>
{% endhint %}

2. Use an HDMI cable to connect the Main PC and the Main Monitor.
3. Right Click on your desktop and click "Display Settings".

&#x20;                                            <img src="../../../.gitbook/assets/fuser1 (1).png" alt="" data-size="original">

4. Change to your desired resolution. For example, I want 1080p.

&#x20;                                             ![](../../../.gitbook/assets/fuser2.png)



5. Change to your desired refresh rate. For example, I want 240hz.

&#x20;                                              ![](../../../.gitbook/assets/fuser3.png)

6. Extracting .bin (EDID File).

{% hint style="info" %}
<mark style="color:red;">**`All actions here to be done on Main PC !!!`**</mark>



* Download Monitor Asset Manager Setup.EXE [**HERE**](https://alist.scarlet.technology/Fuser) and save it wherever you'd like.
* Run the Monitor Asset Manager Setup.EXE and go through the install
*   If it doesn't auto-launch after install then search for "Moninfo" in your Windows Search Bar and run it as administrator\
    \


    <figure><img src="../../../.gitbook/assets/fuser4.png" alt="" width="563"><figcaption></figcaption></figure>
* Make sure "Real-time" is selected.

&#x20;                                              ![](../../../.gitbook/assets/fuser5.png)\
\


*   Click "File" and then "Save as..."&#x20;

    <figure><img src="../../../.gitbook/assets/fuser6.png" alt=""><figcaption></figcaption></figure>
* Save wherever you want named whatever you want. Desktop is usually easiest.
{% endhint %}

### Inject EDID into Fuser

7. Download Monitor Asset Manager Setup.EXE [**HERE**](https://alist.scarlet.technology/Fuser) and save it wherever you'd like.
8. Run the Monitor Asset Manager Setup.EXE and go through the install
9. If it doesn't auto-launch after install then search for "Moninfo" in your Windows Search Bar and run it as administrator

<figure><img src="../../../.gitbook/assets/fuser4.png" alt="" width="563"><figcaption></figcaption></figure>

10. Make sure "Real-time" is selected.

<figure><img src="../../../.gitbook/assets/fuser5 (5).png" alt="" width="563"><figcaption></figcaption></figure>

11. Click "File" and then "Save as..."&#x20;

<figure><img src="../../../.gitbook/assets/fuser6.png" alt="" width="350"><figcaption></figcaption></figure>

12. Save wherever you want named whatever you want. Desktop is usually easiest.

***

### ➁ Inject EDID into Fuser

1. Setup Fuser

* Connect the power cable provided with the box to the fuser and turn on the power.[\
  ](http://77.37.62.144:8111/assets/fuser/fuser7.png)

<figure><img src="../../../.gitbook/assets/fuser7 (1).png" alt=""><figcaption></figcaption></figure>

* You should see the first light "D1" turn on (if it doesn't turn on press the big red power button)

<figure><img src="../../../.gitbook/assets/fuser8 (1).png" alt=""><figcaption></figcaption></figure>

2. Connect data cable & Driver Install

{% hint style="danger" %}
<mark style="color:red;">All actions here are complete on Main PC !!!</mark>
{% endhint %}

3. Grab your USB-C to USB-A cable.
4. Plug in USB-C end to your fuser; USB-A end into your Main PC

<figure><img src="../../../.gitbook/assets/fuser9 (4).png" alt=""><figcaption></figcaption></figure>

5. Search "Device Manager" in your windows search bar and open it.

<figure><img src="../../../.gitbook/assets/image (96).png" alt="" width="396"><figcaption></figcaption></figure>

6. It should looks like this under "Ports (COM & LPT)". If it does, skip and goto Step 3.

<figure><img src="../../../.gitbook/assets/image (97).png" alt="" width="246"><figcaption></figcaption></figure>

7. If it doesn't and show as "USB Serial", complete "Driver Install":

<figure><img src="../../../.gitbook/assets/image (81).png" alt="" width="190"><figcaption></figcaption></figure>

8. Install Driver

* Download the CH340 driver zip [**HERE**](https://alist.scarlet.technology/Fuser) and save it wherever you'd like.
* Extract the folder and open the extracted folder
* Right click the "CH341SER.EXE" and click "Run as administrator".

<figure><img src="../../../.gitbook/assets/image (82).png" alt="" width="404"><figcaption></figcaption></figure>

* Click "INSTALL" and then "OK"

<figure><img src="../../../.gitbook/assets/image (83).png" alt="" width="491"><figcaption></figcaption></figure>

* Now go back to "Device Manager" and you should see your fuser show up under Ports (COM & LPT)
* Take note of the COM port it's on. For example, mine's on COM3 (if you have multiple COM ports showing, just unplug your fuser and see which one dissapears, then re-plug it in)

<figure><img src="../../../.gitbook/assets/image (84).png" alt="" width="252"><figcaption></figcaption></figure>

***

### ➂ Inject EDID

1. Download the EDID program [HERE](http://77.37.62.144:8111/hardware-other-instruction/fuser-instruction/)
2. Save it wherever you'd like and right click it and click "Run as administrator"[\
   ](http://77.37.62.144:8111/assets/fuser/fuser16.png)

<figure><img src="../../../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

3. Select the correct COM port.
4. Select your desired resolution. For example, I want 1920x1080.
5. Click that button (it's the automatic easier injection).
6. Click that button to browse your files and select the .bin you saved earlier.
7. Click that button to inject.

<figure><img src="../../../.gitbook/assets/image (86).png" alt=""><figcaption></figcaption></figure>

8. You'll see some random characters pop up, that's fine. Close the dialog boxes and you can close all previously used applications and windows
9. Unplug your USB-C to USB-A cable from the Main PC.

***

## » Configuration

### ➀ Configure on Operating System

On both PC's: - Like we did before, navigate to "Display settings" and change your resolution / refresh rate to the same desired value (If you see one PC can be set to 240hz and the other PC can only be set to 239.97hz, don't worry.)

### ➁ Configure Fuser

There are 3 Ports on the fuser. Grab your 3 HDMI cables and plug them in as follows:

* \[HDMI] goes to the main monitor.
* \[HDMI1] goes to main PC.
* \[HDMI2] goes to second PC.

<figure><img src="../../../.gitbook/assets/image (87).png" alt=""><figcaption></figcaption></figure>

Once everything is plugged in, all lights should be on.

{% hint style="info" %}
**Meaning of each indicators**

* D1 = Power indicator. If the light is on it has power
* D2 = Fusing/Overlay status. If the light is on it means the fuser is overlaying the second PC's output
* H2 = Second PC input status. If the light is on then it means the fuser is getting a signal from the second PC.
* H1 = Main PC input status. If the light is on then it means the fuser is getting a signal from the main PC.
*

    <figure><img src="../../../.gitbook/assets/Microsoft Edge 2024-10-04 11.52.02.png" alt=""><figcaption></figcaption></figure>

    **Each button has a function:**

    * K1 = Press it once: cycle through resolutions. It should default on 1080p. Press the button to cycle until you reach your desired resolution.\
      Press and hold: Show current input information like resolution and refresh rate.
    * K2 = Increase the fusing strength/tolerance. The higher it goes, the more of the gray it will delete during fusing.
    * K3 = Resets the fusing strength/tolerance to default. This is what I use. It works nicely for every cheat I've tried.
    * K4 = Toggle fusing/overlay.
    *

        <figure><img src="../../../.gitbook/assets/image (89).png" alt=""><figcaption></figcaption></figure>
{% endhint %}

***

## » Run your DMA Cheats

1. This is pretty straightforward. I just press K4 turn off overlay, then when you're ready to cheat press K4 again to access your second PC's display.
2. Run your cheat
3. Find "Fuser Mode" or similar in your cheats menu and enable it (some automatically have it enabled)

***

## » NOTES

### ➀ Multiple Monitors

If you want, you can plug in multiple monitors to your second PC. For the easiest usage:

* Make sure your main display is the fuser
* Make sure the display mode is "Extended"
* Then when you cheat, just make sure you drag your fuser ESP window to your fuser

### ➁ Reset the Fuser

If you want to reset the fuser back to factory setting (you might do this if your EDID isn't working and you've exhausted all options), just plug the fuser back in via the USB-C to USB-A cable and do this:

1. Select the correct COM port.
2. Select the desired resolution.
3. Click the third button.

<figure><img src="../../../.gitbook/assets/image (90).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
<mark style="color:red;">**`All actions here to be done on Main PC !!!`**</mark>
{% endhint %}

* Grab your USB-C to USB-A cable.
* Plug in USB-C end to your fuser; USB-A end into your Main PC.

<figure><img src="../../../.gitbook/assets/fuser9 (1).png" alt=""><figcaption></figcaption></figure>

* Search "Device Manager" in your windows search bar and open it

<figure><img src="../../../.gitbook/assets/fuser10 (1).png" alt=""><figcaption></figcaption></figure>

* It should looks like this under "Ports (COM & LPT)". If it does, skip and goto Step 3

<figure><img src="../../../.gitbook/assets/fuser11 (1).png" alt=""><figcaption></figcaption></figure>

* If it doesn't and show as "USB Serial", complete "Driver Install":

<figure><img src="../../../.gitbook/assets/fuser12 (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
<mark style="color:red;">**`Driver Installation`**</mark>&#x20;

1. Download the CH340 driver zip [**HERE**](https://alist.scarlet.technology/Fuser) and save it wherever you'd like.
2. Extract the folder and open the extracted folder
3. Right click the "CH341SER.EXE" and click "Run as administrator"

&#x20;                                          ![](../../../.gitbook/assets/fuser13.png)

4. Click "INSTALL" and then "OK"

&#x20;                                          ![](../../../.gitbook/assets/fuser14.png)\


5. Now go back to "Device Manager" and you should see your fuser show up under Ports (COM & LPT)
6. Take note of the COM port it's on. For example, mine's on COM3 (if you have multiple COM ports showing, just unplug your fuser and see which one dissapears, then re-plug it in)

&#x20;                                           ![](../../../.gitbook/assets/fuser15.png)
{% endhint %}

***

### Inject EDID

* Download the EDID program [HERE](http://77.37.62.144:8111/hardware-other-instruction/fuser-instruction/)
* Save it wherever you'd like and right click it and click "Run as administrator"

<figure><img src="../../../.gitbook/assets/fuser16.png" alt=""><figcaption></figcaption></figure>

1. Select the correct COM port.
2. Select your desired resolution. For example, I want 1920x1080.
3. Click that button (it's the automatic easier injection).
4. Click that button to browse your files and select the .bin you saved earlier.
5. Click that button to inject.

<figure><img src="../../../.gitbook/assets/fuser17.png" alt=""><figcaption></figcaption></figure>

* You'll see some random characters pop up, that's fine. Close the dialog boxes and you can close all previously used applications and windows
* Unplug your USB-C to USB-A cable from the Main PC.

***

## » Configuration

### Configure Fuser

There are 3 Ports on the fuser. Grab your 3 HDMI cables and plug them in as follows:

* \[HDMI] goes to the main monitor.
* \[HDMI1] goes to main PC.
* \[HDMI2] goes to second PC.

<figure><img src="../../../.gitbook/assets/fuser18.png" alt=""><figcaption></figcaption></figure>

Once everything is plugged in, all lights should be on.

{% hint style="info" %}
**`Meaning of each indicators`**



* D1 = Power indicator. If the light is on it has power
* D2 = Fusing/Overlay status. If the light is on it means the fuser is overlaying the second PC's output
* H2 = Second PC input status. If the light is on then it means the fuser is getting a signal from the second PC.
* H1 = Main PC input status. If the light is on then it means the fuser is getting a signal from the main PC.\


&#x20;                                          ![](<../../../.gitbook/assets/fuser19 (1).png>)\


Each button has a function:

* K1 = Press it once: cycle through resolutions. It should default on 1080p. Press the button to cycle until you reach your desired resolution.\
  Press and hold: Show current input information like resolution and refresh rate.
* K2 = Increase the fusing strength/tolerance. The higher it goes, the more of the gray it will delete during fusing.
* K3 = Resets the fusing strength/tolerance to default. This is what I use. It works nicely for every cheat I've tried.
* K4 = Toggle fusing/overlay

&#x20;                                           ![](../../../.gitbook/assets/fuser20.png)
{% endhint %}

### Configure on Operating System <a href="#configure-on-operating-systemm" id="configure-on-operating-systemm"></a>

On both PC's: - Like we did before, navigate to "Display settings" and change your resolution / refresh rate to the same desired value (If you see one PC can be set to 240hz and the other PC can only be set to 239.97hz, don't worry.)

***

## » Run your DMA Cheats <a href="#run-your-dma-cheats" id="run-your-dma-cheats"></a>

1. This is pretty straightforward. I just press K4 turn off overlay, then when you're ready to cheat press K4 again to access your second PC's display.
2. Run your cheat
3. Find "Fuser Mode" or similar in your cheats menu and enable it (some automatically have it enabled)

***

## » NOTES: <a href="#run-your-dma-cheats" id="run-your-dma-cheats"></a>

### Multiple Monitors <a href="#multiple-monitors" id="multiple-monitors"></a>

If you want, you can plug in multiple monitors to your second PC. For the easiest usage:

* Make sure your main display is the fuser
* Make sure the display mode is "Extended"
* Then when you cheat, just make sure you drag your fuser ESP window to your fuser

### Reset the Fuser <a href="#reset-the-fuser" id="reset-the-fuser"></a>

If you want to reset the fuser back to factory setting (you might do this if your EDID isn't working and you've exhausted all options), just plug the fuser back in via the USB-C to USB-A cable and do this:

1. Select the correct COM port.
2. Select the desired resolution.
3. Click the third button.

<figure><img src="../../../.gitbook/assets/fuser21.png" alt=""><figcaption></figcaption></figure>
