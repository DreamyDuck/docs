---
icon: question
---

# DMA Troubleshooting

{% hint style="danger" %}
This document is only for solving various troubleshooting problems that occur during the first installation of DMA or when replacing a new PC for the first time. It does not apply to problem-solving during the use process. If problems occur, please communicate more with the seller. We will try our best to help you deal with the issues\~
{% endhint %}

## ① The board doesn't light up after being plugged in

**Steps to resolve (follow in sequential order, proceed to the next step only if the previous one fails; skip subsequent steps once the issue is resolved):**

1. Check if the protective film on the DMA's golden fingers has been removed.
2. After shutting down the Main PC and cutting off power, reinstall the DMA or switch it to a different PCIE slot.

***

## ② Blue Screen, Get Stuck at Startup Screen, Mouse Freeze, PC Freeze after installed DMA boards

**Steps to resolve (follow in sequential order, proceed to the next step only if the previous one fails; skip subsequent steps once the issue is resolved):**

1. Update the motherboard BIOS. Visit the support center on your motherboard's official website, locate your motherboard model, and find detailed instructions for updating BIOS along with the latest BIOS file.
2. Switch to another available PCIe slot for installation.
3. Reinstall windows (you can skip this step if your system has important files).
4. Install the DMA into the graphics card slot, then place the graphics card into a different slot. (This step usually succeeds, but it might affect the performance of high-end graphics cards.)
5. Flash another firmware. **(That's mostly what causes it. Firmware Incompatible)**

***

## ③ Error when SpeedTest on Second PC as image below or Main PC crashes once SpeedTest on Second PC

<figure><img src="https://afd6fz0f5ed.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=MzhkNzRkYTYyMjlhYmFhZmIwNjA4ODk3NzFlMzlkNmNfM1lPUXhDQUhDb0xyTmtLQlJRRGN2bHcxSHdpUlpEdVdfVG9rZW46WFhSWmJudTR6b3BUQTB4ZEtxUGx6eExOZ3M2XzE3MDc4NTcyOTU6MTcwNzg2MDg5NV9WNA" alt=""><figcaption></figcaption></figure>

**This issue is usually related to the settings of the Main PC Motherboard BIOS Settings.**

1. Disable Virtualization.
2. Disable VT-X / VT-D (intel) & Iommu (AMD)
3. Disable TPM & Secureboot.

The turn off methods for each brand's motherboard vary. Please search directly on Google for the detailed guidelines to fully disable all settings above. (Customer service may not always be available, so it's better to search first.)

***

## ④ DMA Speed Test Results Error, Initialization Failed

**We need to confirm the issue based on the corresponding test feedback. Please compare your test results with the problem here and handle it according to the corresponding solution.**

#### Issue ①

<figure><img src="https://afd6fz0f5ed.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=ZmJhMTJjNzNjNjAwYjQxZDViYTUzMWU0ZWFhMDg5YzBfY1ZPVHZBYUY3Z296TFhvWG9kRVJ0Y3hnQTEyZUFNTnlfVG9rZW46QkVSUmI0c0dZb0VadEZ4SjBPcWxGMWZEZ3ZnXzE3MDc4NTczMzk6MTcwNzg2MDkzOV9WNA" alt=""><figcaption></figcaption></figure>

* **Issue Analysis**\
  This error typically occurs due to the incompatibility of the current DMA inserted into this motherboard slot.
* **Troubleshooting**\
  Replace the DMA and install it in a different slot.



#### Issue ②

![](https://afd6fz0f5ed.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=NDk4NmE5OWNlMzkxZGM4MjgwNTgwMWVlYjkwYTk2NzlfbWFDT0pjTThJdXA0YTA3OHFBaEdicTRVRHFHUDJVU0dfVG9rZW46Vk13aGIwVXZjb1JZRU54WEs4MGw2N0ZuZ2tmXzE3MDc4NTczMzk6MTcwNzg2MDkzOV9WNA)

* **Issue Analysis**\
  The cause of this problem is the Main PC motherboard's restriction on DMA memory reading.
* **Troubleshooting**\
  The motherboard's restriction can be disabled by adjusting BIOS settings (disabling virtualization, VT-D/IOMMU, secure boot). Detailed instructions for settings can be found in the tutorial provided above.

However, for some laptops, Gigabyte motherboards, Lenovo Alienware HP, and other branded complete machines, restrictions cannot be disabled by setting the BIOS. The only option is to replace the motherboard or the entire computer. &#x20;

\[This is also why we do not recommend buying DMA for laptops with Gigabyte motherboards and branded complete PC. Currently, the best compatibility is with ASUS and MSI motherboards.]



#### Issue ③

<figure><img src="https://afd6fz0f5ed.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=ODVjMDAwNjQxNmI1MzJjYTE0ZDZhMzIwNmJlNzc0YWFfQ3dnblZybEdZbjRQakVPOGlKQlFESXQzWXZhd0tTR0RfVG9rZW46WkZVVWJpSWt1b3Bvc2V4MDJsWWxQWnF1ZzdmXzE3MDc4NTc0NDQ6MTcwNzg2MTA0NF9WNA" alt=""><figcaption></figcaption></figure>

* **Issue Analysis**\
  The main issue here is that the secondary machine isn't connecting to the board, or the corresponding driver hasn't been installed, or the board isn't powered.
* **Troubleshooting**
  * Confirm that the Main PC is powered on and the DMA light is lit. (If the Main PC is on but the DMA light isn't lit, refer to the issue ① or double check the kill switch isn't turned on. If the issue persists after handling it, please contact customer support via ticket)
  * If the DMA light is on, verify whether the driver for the Second PC installed or if it can recognize the DMA USB driver. (If the driver hasn't been installed, refer to the Installation Manual: [DMA Installation User Manual](https://afd6fz0f5ed.sg.larksuite.com/docx/BvUZdTf3VoBnd0xaO2slaNKGgwZ) )



Confirm if only one software is running, DMA only allows one software to use it. So if a software is currently occupying the DMA, all subsequent software that needs to use the DMA will fail to run successfully. Therefore, when opening DMA software, testing cannot be run at the same time, or when running a test, new DMA software or speedtest files cannot be opened at the same time.



#### Issue ④

![](https://afd6fz0f5ed.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=OTdhOTcyMjQyODgxN2E0MDIzMmEzNWZmNTg1YjY1MGFfOWRqTVJnVVVORFhyQmR3VlBxdkh3ZTlDbGpVR1ljNHhfVG9rZW46VkF0U2I3YW04b0JrUHZ4a1JVeGx2ZmdmZ3ZyXzE3MDc4NTc0NTQ6MTcwNzg2MTA1NF9WNA)

* **Issue Analysis**\
  This usually indicates that something is **missing** in the Windows system of the **Second PC**.
*   **Troubleshooting**

    Reinstall the Second PC Windows. It is recommended to install the original version from microsoft and not modded windows.

\


#### Issue ⑤

![](https://afd6fz0f5ed.sg.larksuite.com/space/api/box/stream/download/asynccode/?code=MTgyMjUyOTEwYTBmZDEzOWUxMjIyOWY1YWYzNzZmODBfeHQ1MnFJYUVLTTB3S2o2TVRXZVNPbjVGUTZjNUNqS2lfVG9rZW46SnllQmJLSkV1b3JWc0h4S2RseWxobzd0Z2VkXzE3MDc4NTc0NTQ6MTcwNzg2MTA1NF9WNA)

* **Issue Analysis**\
  This problem may be due to DMA damage or a Firmware Incompatible.
* **Troubleshooting**\
  Please power off and reinstall the DMA, then confirm the status of the DMA indicator lights. If one light is constantly on and another light keeps flashing, it indicates a firmware problem. Contact the seller to obtain a new firmware. If burning the new firmware still results in this error, please contact the seller for the next step of troubleshooting.
