# Everything You need to know about DMA

## What's DMA

Direct Memory Access (DMA) cheating is a high-level cheating method used in video games, particularly difficult to detect. Here's a simpler explanation of how it works:

#### **Understanding DMA**

> DMA is a feature that lets dma hardware access the system's memory directly, bypassing the CPU.&#x20;
>
> Since the cheating device operates at the hardware level and outside the operating system's standard operations, it can manipulate the game’s data without being detected by traditional anti-cheat systems. These anti-cheat systems typically monitor software behavior, not hardware-level memory access.

How it works

> DMA is essentially a small board about the size of a palm that fits into a PCIe slot, just like the slot your graphics card uses, although it can also use other available PCIe slots. It is then connected via a data cable to a second computer.

Credits to Ufrisk \[[https://github.com/ufrisk/](https://github.com/ufrisk/pcileech)] (Original Creator of PciLeech)

<figure><img src=".gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>

Here is what DMA looks like, It's very thin, so it will generally fit as long as you have an extra PCIE slot. ↓↓↓

<figure><img src=".gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
If the graphics card is too large and blocks the remaining PCIe slots, you may need to purchase a PCIe extender.
{% endhint %}

***

## Requirements for Using DMA + Can it be used on a laptop?

First of All, How to determine whether your motherboard supports DMA or not (Including laptops)

> Press <mark style="color:purple;">**`WIN+R`**</mark> on your computer keyboard, type <mark style="color:purple;">**`msinfo32.exe`**</mark>, and call up a list.&#x20;
>
> In the list, if Kernel DMA Protection is shown as **`OFF`**, it means your motherboard supports DMA !&#x20;
>
> ![](<.gitbook/assets/image (25).png>)

{% hint style="info" %}
If it shows <mark style="color:red;">**`ON`**</mark>, please search for how to disable **Kernel DMA Protection** in the BIOS of your own brand of motherboard.

Note that some brands, such as specific Gigabyte motherboard models, do not have the option to forcibly disable this feature. Therefore, these motherboards do not support the use of DMA at all.
{% endhint %}

#### Requirements of Main PC

You need <mark style="color:red;">**two computers**</mark> in order to use DMA. **First Computers (Game PC):**

**Desktop**

> You need have extra PCIe slot (x16, x4, x1 is supported)\
> If the slot is blocked by your GPU, you might need a extender.
>
> Performance - As long as it can run the game smoothly

**Laptop (It's not recommended to use on Laptop)**

> Performance - As long as it can run the game smoothly
>
> For laptop, you need meet one of requirement below:
>
> * Extra M.2 Slot. Using M.2 to PCIE converter, plug your DMA on the PCIE. (An external psu may be needed to provide power to the dma.)
> * Extra M.2 Slot. Purchase M.2 version DMA.
> * Thunderbolt 3 port. Using Thunderbolt 3 -> PCIE converter.

#### Second Computers: Either Desktop Or Laptop

Minimum Specification:

> CPU – i5-4th gen or above
>
> GPU – Intergrated or Any

Recommended Specification:

> CPU – i5-9th gen / Ryzen 5600G or above\
> GPU – Intergrated or Any

{% hint style="danger" %}
If you want to use fuser, then the CPU/GPU of your second computer should support output and have the same resolution performance as the main screen. If you're unsure how to ensure this compatibility, you can consult with a Discord group for guidance.
{% endhint %}

***

