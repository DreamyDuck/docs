---
icon: code-branch
---

# Setup Instruction

<mark style="color:red;">**Step 1:**</mark> Ensure that your **1PC** and **2PC** are powered on.

<mark style="color:red;">**Step 2:**</mark> Connect the **DC 12V power supply**.

If you press the **red Power button** without connecting any other video cables, the fusion device will display the following indicator lights as normal:

* **LP red light** is ON.
* **L3 and L4 blue lights** are flashing.

***

<mark style="color:red;">**Step 3:**</mark> Connect the three HDMI video interfaces:

* **HDMI**: Output interface connects to your main display (**1PC Monitor**).
* **HDMI2**: Secondary interface connects to your secondary machine/radar machine (**2PC Graphics Card**).
* **HDMI1**: Main interface connects to your main machine/game console (**1PC Graphics Card**).

After all, three video interfaces are connected:

* Under normal use, the **LP red light** stays ON, and **L1, L2, L3, and L4 blue lights** remain ON.
* The screen should display properly, adapting automatically to your main screen's brand and model.

***

#### <mark style="color:red;">**Indicator Light Meanings:**</mark>

* **LP**: Power indicator light.
* **L1**: Main machine signal light.
* **L2**: Secondary machine signal light.
* **L3**: Main/secondary machine signal switching light.
* **L4**: Fusion state switching signal light.

***

#### <mark style="color:red;">**Button Instructions:**</mark>

* **K1**: Switches between main and secondary machine displays (**short press**).
* **K2**: Switches the fusion state (**short press**). Long press to adjust chroma key intensity.

***

#### <mark style="color:red;">**Type-C Upgrade Interface:**</mark>

The **Type-C interface** is used for firmware updates to the fusion device. It allows for custom internal fusion sequences to enhance security. (**This step is performed by the manufacturer and is not open to users.**)

***

#### <mark style="color:red;">**Common Issues and Solutions:**</mark>

1.  **Why doesn’t the screen display even after all connections are completed?**

    * **LP red light** stays ON.
    * **L3 and L4 blue lights** are flashing.

    **Solution:**

    * Check if the main display's power is connected.
    * Ensure the HDMI1 interface is connected to the main display.\
      &#xNAN;_(The issue lies with the main display.)_
2.  **Why doesn’t the screen display even after all connections are completed?**

    * **LP red light** stays ON.
    * **L1 and L2 green lights** stay ON.
    * **L3 is flashing.**
    * **L4 is OFF.**

    **Solution:**

    * Use a third computer to remotely connect to the secondary machine (**2PC**) and adjust its refresh rate to **60Hz**, then increase it incrementally:
      * _(For 1K resolution: 60-120-144-240)_
      * _(For 2K resolution: 60-120-144)_
3.  **Why doesn’t the screen display even after all connections are completed?**\
    &#xNAN;_(My secondary machine uses AMD integrated or discrete graphics.)_

    **Solution:**

    *   Use a third computer to remotely connect to the secondary machine (**2PC**) and access the AMD driver program. Change the color depth to **8-bit**.\


        <figure><img src="../../../.gitbook/assets/image (101).png" alt=""><figcaption></figcaption></figure>
