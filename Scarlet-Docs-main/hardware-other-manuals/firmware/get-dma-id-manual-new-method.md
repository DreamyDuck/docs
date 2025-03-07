---
icon: arrow-turn-down-right
---

# Get DMA ID Manual (New Method)

{% hint style="success" %}
Download & Extract Toolset

[https://alist.scarlet.technology/d/Tools/DNA\_ID.zip?sign=vuf3WnCBzIxn6lB9pEeAf8n4A1mycZEHfnsIMCzrm\_U=:0](https://alist.scarlet.technology/d/Tools/DNA_ID.zip?sign=vuf3WnCBzIxn6lB9pEeAf8n4A1mycZEHfnsIMCzrm_U=:0)
{% endhint %}

{% hint style="danger" %}
Reminder

* Please completely uninstall the anti-cheat software running at startup before dumping the device list. (Vanguard, Faceit, ACE, 5E, Wanmei, etc.)
* All operations are performed on the **Second PC**.
{% endhint %}

***

## 1. Switch the port on DMA to JTAG <a href="#id-1-switch-the-port-on-dma-to-jtag" id="id-1-switch-the-port-on-dma-to-jtag"></a>

{% hint style="info" %}
The port closest to the gold finger is the **JTAG** port, while the one farthest from it is the **DATA** port.
{% endhint %}

<figure><img src="../../.gitbook/assets/dma-port.png" alt=""><figcaption></figcaption></figure>

***

## 2. Download & Install driver for JTAG

{% hint style="success" %}
Firmware Flasher Tools Pack\
-> [**\[Click to Download\]**](https://alist.scarlet.technology/d/Users/Tools/DMA_Flasher.zip)
{% endhint %}

{% hint style="danger" %}
Your DMA are either [#i.-rs232-dma-driver-leetdma-captaindma-others](get-dma-id-manual-new-method.md#i.-rs232-dma-driver-leetdma-captaindma-others "mention") or [#ii.-ch347-dma-driver-scartletdma-captaindma-peeperdma-hackdma-and-others](get-dma-id-manual-new-method.md#ii.-ch347-dma-driver-scartletdma-captaindma-peeperdma-hackdma-and-others "mention").

Try both if you don't know which one you are.
{% endhint %}

### I. RS232 DMA Driver (LeetDMA, CaptainDMA, Others)

1. Download the tools above and extract. Open <mark style="color:blue;">**`Drivers`**</mark> folder -> Run <mark style="color:red;">**`zadiag.exe`**</mark>
2. Click **Options** -> **List All Devices**

<figure><img src="../../.gitbook/assets/image (41).png" alt=""><figcaption></figcaption></figure>

3. On USB Device, Choose <mark style="color:red;">**`Quad RS232-HS(Interface 0)`**</mark>

{% hint style="danger" %}
You must select “Interface 0", otherwise it is likely to cause DMA damage.
{% endhint %}

{% hint style="info" %}
Can't find the device? Double check your dma is plugged to JTAG port or try [ch347-dma-burning.md](firmware-burning-manual/ch347-dma-burning.md "mention")
{% endhint %}

<figure><img src="../../.gitbook/assets/image (42).png" alt=""><figcaption></figcaption></figure>

4. Press **"Replace Driver"** or **"Install Driver"** and wait until the driver installed, installation take up to 5 minutes.

<figure><img src="../../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/image (48).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/zadiag4.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
After successfully, close the zadiag and goto next step.
{% endhint %}

***

### II. CH347 DMA Driver (ScartletDMA, CaptainDMA, PeeperDMA, Hackdma and Others)

1. Download the tools above and extract. Open <mark style="color:blue;">**`Drivers`**</mark> folder -> Open <mark style="color:blue;">**`CH341PAR`**</mark> -> Open <mark style="color:blue;">**CH341PAR**</mark> -> Run & Install <mark style="color:red;">**`SETUP.exe`**</mark>

{% hint style="info" %}
Can't find the device? Double check your dma is plugged to JTAG port or try [#i.-rs232-dma-driver](get-dma-id-manual-new-method.md#i.-rs232-dma-driver "mention")
{% endhint %}

***

## 3. Get DNA / DMA ID

1. Based on your DMA board type (35T / 75T), run the corresponding .bat file

{% hint style="info" %}
If you're unsure whether to choose <mark style="color:red;">**`CH347`**</mark> or <mark style="color:red;">**`RS232`**</mark>, just run both; one of them will display the ID.
{% endhint %}

<figure><img src="../../.gitbook/assets/get-dna (1).png" alt=""><figcaption></figcaption></figure>

2. This is how the correct results looks like ⬇️

<figure><img src="../../.gitbook/assets/get-dna2.png" alt=""><figcaption></figcaption></figure>

3. Copy the ID and send in your ticket. After that tag Scarletlab for firmware produce.
