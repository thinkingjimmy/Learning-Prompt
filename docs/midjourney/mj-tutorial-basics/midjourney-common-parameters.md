---
sidebar_position: 3
hide_table_of_contents: true
title: Prompt Common Parameters
---

# Midjourney Prompt Common Parameters

In simple terms, you can think of these parameters as official fixed prompt templates, which include special characters that ensure 100% consistency of the output results of the model and improve the accuracy and efficiency of the prompt.

If you have used ChatGPT, you may have encountered a situation where you used the same prompt template as others, but could not generate the same content with ChatGPT.

Because Midjourney is a category for images, it is relatively specific. Therefore, they have created templates for many generic prompt statements for images, such as aspect ratios like 1:1, 2:3, 4:7, and so on. If you want to use ChatGPT in the same way, you need to repeatedly state the aspect ratios like "Aspect Ratios 1:1" in the prompt. Moreover, everyone expresses aspect ratios differently, and it can be cumbersome for the model to understand what people are saying.

Therefore, Midjourney has designed some parameters that allow you to quickly call them. For example, for the Aspect Ratio parameter, you only need to input "--ar 1:1". At the same time, because the expression method is fixed, everyone will use this method to modify aspect ratios, and Midjourney adjusts the model accordingly to ensure the consistency of the output images.

Because of its stability and necessity, that's why I will first teach you about these parameters.

## Version

Currently, Midjourney supports multiple versions, with the latest version being V5. Compared to ChatGPT, my feeling about Midjourney is that a higher version does not necessarily mean it is more powerful, but it is good at different things. Please refer to Midjourney's version differences for more information.

The usage of the Version parameter is shown in the table below. You can also adjust the default version in the settings. Please refer to Midjourney's basic settings tutorial for more information.

| **Method**                                                                                                                    | **Example**                      | **Notes**                         |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| Add a space after the keyword and include the version parameter: <ul><li> --v or —v </li> <li>--version or —version</li></ul> | vibrant california poppies --v 5 | Versions supported: 1, 2, 3, 4, 5 |

Since you can directly add the version parameter in the prompt and also set the default version in the settings, you may encounter a situation like the one shown in the image below (I want to generate an image from version 1, but the setting is set to version 5. What should I do?):

<img src={"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/7DD5C76B-0DCD-44EC-B6D1-07BCA89EE201_2/91noyMlT5yLudnp9ySF73dX4kUW0NxBt8QIQxc7b7U8z/MJ015.jpeg"} style={{width: 500}} />

In this case, the model will run these parameters from left to right. In the example above, it actually generates the image from version V1, which can be compared to the V5 version below:

<img src={"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/736DE8B9-D8F1-41A2-8FCA-8EB3641BAF8F_2/h7ufgPUePkMqIZY7pEd02Ur8iz20jTz93g4OM43yuuUz/MJ016.jpeg"} style={{width: 500}} />

## Aspect Ratios

The first parameter is the aspect ratio of the image, and the usage is as follows, along with the version differences:

| Method                                                                                                                            | Example                             | Notes                                                                                                                                                                                                                                                                                                                                                                                              | V5                                                                                                                        | V4                 | V3                 | niji               |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
| Add a space after the keyword and include the aspect ratio parameter: <ul><li> --ar or —ar</li><li> --aspect or —aspect</li></ul> | vibrant california poppies --ar 5:4 | <ul><li>The default aspect ratio is 1:1.</li><li>The aspect ratio must be a whole number, for example, 1.3:1 is not allowed, but 13:10 is.</li><li> The aspect ratio will affect the shape and composition of the generated image. When scaling the image, some aspect ratios may undergo slight changes. For example, with --ar 16:9(1.75), the final generated image may be 7:4(1.74).</li></ul> | ✅ Supports any aspect ratio. However, aspect ratios above 2:1 are experimental and may result in unpredictable outcomes. | ✅ From 1:2 to 2:1 | ✅ From 5:2 to 2:5 | ✅ From 1:2 to 2:1 |

Additionally, there are some best practices for aspect ratios in the industry:

- 5:4 is commonly used for traditional printing
- 3:2 is often used for photo printing
- 7:4 is a ratio similar to HD TV or smartphone screens

![MJ017.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F3D78AEA-6A12-478D-81D8-AF6F70281400_2/LDU0zaOYxQx9phJy5CTtKBosekuI5K9eq8biJfQBQg0z/MJ017.png)

## No

This parameter means to exclude something. If you don't want the AI-generated images to include trees, you can input "plants":

| **Command**                                                                                        | **Example** | **Notes** | **V5** | **V4** | **V3** | **niji** |
| -------------------------------------------------------------------------------------------------- | ----------- | --------- | ------ | ------ | ------ | -------- |
| Add --no or --no followed by what you don't want the AI to generate: <ul><li>--no or —no</li></ul> | —no plants  | None      | ✅     | ✅     | ✅     | ✅       |

## Chaos

This parameter is similar to Top P in ChatGPT and controls the randomness of the model. A higher value is more likely to produce unexpected results, while a lower value increases consistency. Let's look at the official examples with the prompt "watermelon owl hybrid".

When Chaos is set to 0, the consistency is higher, with similar fusion styles between the four outputs. Additionally, the style similarity is also high within a single output:

![MJ158.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/4662C399-08A2-4409-8E09-7EA2222E2441_2/eTJUesykFLMMYVCc1wo9fPqvXNphYHj56yPEzsJjzQ4z/MJ158.png)

At Chaos level 100, you will notice that the fusion styles of multiple outputs are quite different. Even within a single output, there are significant differences in the style of the four images. If you want AI to do some exploratory work, I recommend setting Chaos higher initially to allow for more divergent results.

![MJ159.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/CC0853CB-481C-46D2-9B87-33C2BB5AB7C7_2/9zmrjxy918XlvZoKkDbbXG5pt0pWNkzfRnGwfjKxpNUz/MJ159.png)

| **Command**                                                                                               | **Example** | **Notes**                       | **V5** | **V4** | **V3** | **niji** |
| --------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------- | ------ | ------ | ------ | -------- |
| Add a space after the keyword, followed by a number:<ul><li>--c or —c</li><li>--chaos or —chaos</li></ul> | —c 10       | Can input 0 - 100, default is 0 | ✅     | ✅     | ✅     | ✅       |

## Stylize

This parameter is similar to ChatGPT's Temperature and controls the degree of stylization in the generated images. In simple terms, a lower value aligns more with the description of the prompt, while a higher value increases artistic elements but reduces the correlation with the prompt.

Let's take a look at the official examples with the prompt "colorful risograph of a fig". Risograph is a digital printing machine that uses templates and specialized inks to produce prints. It is often used for low-cost printing of posters, brochures, and other materials. This printing machine can create special color and texture effects. The first three images in the prompt showcase the risograph style, but the four images in the bottom right are quite different, as the model added some creativity. 😂

![MJ160.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3FA13D77-EA69-469D-AD37-F501F91478B3_2/64RVPjjI2dYrjzq5LdFoanWxyC48CGKgdpUoCeNUL3Az/MJ160.png)

Apart from including it in the prompt, you can also adjust the default version in the settings. Refer to Midjourney's basic settings tutorials for more information.

| **Command**                                                                                                   | **Example** | **Notes**      | **V5** | **V4** | **V3** | **niji** |
| ------------------------------------------------------------------------------------------------------------- | ----------- | -------------- | ------ | ------ | ------ | -------- |
| Add a space after the keyword, followed by a number:<ul><li>--s or —s</li><li>--stylize or —stylize</li></ul> | —s 50       | Default is 100 | ✅     | ✅     | ✅     | ✅       |

## Niji

The Niji model was developed by Midjourney in collaboration with [Spellbrush](https://spellbrush.com/) . "Niji" means "rainbow" or "2D" in Japanese.

Niji excels in generating anime-style images. For example, with the prompt "fancy peacock", the left image is from the v5 model, while the right image is from the niji v5 model, showcasing a more comic-style aesthetic.

![MJ127.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/43A09173-474B-44D9-B4E5-A0F590835D02_2/nGi0CEcjBjAyyw1EQ8jMVHIDUyVR7msxLSPkpKlPWxcz/MJ127.png)

To use the Niji model, similar to specifying a version, you just need to add --niji at the end of the text prompt.

| **Command**                                                                                        | **Example**                       | **Notes**                                                                                                                  |
| -------------------------------------------------------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Add a space after the keyword, followed by the version parameter:<ul><li>--niji or —niji</li></ul> | vibrant california poppies --niji | Some parameters are ineffective for Niji. Refer to the full list of parameters to see which ones are ineffective for Niji. |
