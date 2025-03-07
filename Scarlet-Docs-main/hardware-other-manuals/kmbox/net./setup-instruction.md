---
icon: '1'
---

# Setup Instruction

{% hint style="danger" %}
<mark style="color:red;">**Do not upgrade**</mark> your firmware if your box was <mark style="color:yellow;">**not activated before 2024.8.31**</mark>;

Normal upgrading is supported if your box was <mark style="color:yellow;">**activated before 2024.8.31**</mark>.
{% endhint %}

## » Preparation

1. Setup your Kmbox B+ as image below:

<figure><img src="../../../.gitbook/assets/image (73).png" alt=""><figcaption></figcaption></figure>

* **Note: if you are gaming on a single PC, cables plugged to "port serial" and "controlled PC" should both be connected to the gaming PC.**

***

## » Install Network Adapter Driver

After plugging the cable to the Net port, a disk will appear as shown in the picture below.

Double-click the disk and run the exe file inside.

If no disk to be found, download the driver mannually.

#### » [\[Click me to download Driver\]](https://alist.scarlet.technology/d/Users/Tools/kmboxNet_Driver.zip)

<figure><img src="../../../.gitbook/assets/image (74).png" alt=""><figcaption></figcaption></figure>

***

## » Change your Network Adapter IP Address

1. Open Control Panel -> Network and Sharing Center

<figure><img src="../../../.gitbook/assets/image (75).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (76).png" alt=""><figcaption></figcaption></figure>

2. Change IP Address

<figure><img src="../../../.gitbook/assets/image (77).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/image (78).png" alt=""><figcaption></figcaption></figure>

***

## » Check if ping is Successful

1. Run **cmd.exe**

<figure><img src="../../../.gitbook/assets/image (79).png" alt="" width="327"><figcaption></figcaption></figure>

2. Check if the IP on the kmbox could be successfully pigged

```
ping 192.168.x.x(IP on your kmbox)
```

<figure><img src="../../../.gitbook/assets/image (80).png" alt=""><figcaption></figcaption></figure>

3. If the above is shown, the box is ready. Now you can refer to your dma software for further instructions.
