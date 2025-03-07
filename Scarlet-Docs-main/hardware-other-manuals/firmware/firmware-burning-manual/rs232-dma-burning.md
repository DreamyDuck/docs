---
icon: asterisk
---

# RS232 DMA Burning

{% hint style="danger" %}
Please plug the type-C data cable into the second interface of the DMA board (if there is only one, it means your interface is either a two-in-one or does not support JTAG). The end of the data cable is connected to the 2PC (Radar PC).
{% endhint %}

{% hint style="danger" %}
If you are using DMA for Valorant/Faceit. Make sure your <mark style="color:red;">**VALORANT**</mark> and <mark style="color:red;">**VANGUARD**</mark> both are not installed!! Uninstall both before inserting your DMA into your pc / firmware burning.
{% endhint %}

{% hint style="info" %}
Make sure both PC have all VC runtime environments installed.
{% endhint %}

***

## Download Tools below & Extract it

{% hint style="success" %}
Firmware Flasher Tools Pack\
-> [**\[Click to Download\]**](https://alist.scarlet.technology/d/Users/Tools/DMA_Flasher.zip)
{% endhint %}

***

## Burn Firmware

### Install Driver

1. Download the tools above and extract. Open <mark style="color:blue;">**`Drivers`**</mark> folder -> Run <mark style="color:red;">**`zadiag.exe`**</mark>
2. Click **Options** -> **List All Devices**

<figure><img src="../../../.gitbook/assets/image (41).png" alt=""><figcaption></figcaption></figure>

3. On USB Device, Choose <mark style="color:red;">**`Quad RS232-HS(Interface 0)`**</mark>

{% hint style="danger" %}
You must select “Interface 0", otherwise it is likely to cause DMA damage.
{% endhint %}

{% hint style="info" %}
Can't find the device? Double check your dma is plugged to JTAG port or try [ch347-dma-burning.md](ch347-dma-burning.md "mention")
{% endhint %}

<figure><img src="../../../.gitbook/assets/image (42).png" alt=""><figcaption></figcaption></figure>

4. Press **"Replace Driver"** or **"Install Driver"** and wait until the driver installed, installation take up to 5 minutes.

<figure><img src="../../../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/zadiag4.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
After successfully, close the zadiag and goto next step.
{% endhint %}

***

### Firmware Burning

1. Move / Paste the firmware you received from us into <mark style="color:blue;">**`Flash Tools`**</mark> folder.
2. Rename the firmware file to <mark style="color:red;">**`scarlet.bin`**</mark>.
3. Run <mark style="color:red;">**`#####flash_rs232_35t#####.bat`**</mark> if your DMA board using **35T**.\
   Run <mark style="color:red;">**`#####flash_rs232_75t#####.bat`**</mark> if your DMA board using **75T**.
4. Firmware burning takes up to 5 minutes. It may stuck at **sector 21** or **23** for while.

<figure><img src="../../../.gitbook/assets/image (49).png" alt=""><figcaption></figcaption></figure>

5. Wait until firmware burning complete.
6. Make a complete restart loop on <mark style="color:red;">**`Main PC`**</mark>:
   1. Shutdown the PC. (Not Restart)
   2. Fully cut off the power for 30s. (Unplug from socket)
   3. Power On the PC.
7. Once **Step 6** is complete, make a speed test ([speed-test.md](../../dma-board/speed-test.md "mention")) on <mark style="color:red;">**`Second PC`**</mark> .
8. All done once speed appear. Double check device manager on Main PC, make sure the driver appeared in device manager.

{% hint style="danger" %}
Some devices can achieve read speeds on a <mark style="color:red;">**`Second PC`**</mark> even without having the drivers installed, while others cannot.&#x20;

Therefore, the safest approach is to check the <mark style="color:blue;">**`device manager`**</mark> on the <mark style="color:red;">**`Main PC`**</mark> to ensure that the drivers are properly installed.
{% endhint %}

