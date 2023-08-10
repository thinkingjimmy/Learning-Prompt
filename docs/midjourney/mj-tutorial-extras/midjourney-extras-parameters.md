---
sidebar_position: 1
---

# Midjourney Prompt Advanced Parameters

## Quality

Image quality is another attribute that I frequently use. First and foremost, it is important to note that this parameter does not affect the resolution. Let me emphasize again that it does not change the resolution, not even once.

Instead, it alters the level of detail in the image. Take a look at the example below. The first image on the bottom has a quality of 0.25. You can clearly see that the image on the far right has significantly more details than the first image.

However, low quality is not without its benefits. One advantage is that it reduces the time it takes to generate an image. In other words, you can save GPU time by using this parameter. I usually use it for exploratory image generation when the overall direction is fine, but I want the model to enrich the details.

![MJ61.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A021D1BD-049B-411E-92AE-83B5A5EEF86C_2/pII20DRpt5ZI4ukp3g6NZZVr0aHO64xKepAPyex33Rgz/MJ61.png)

Apart from entering the parameter in the prompt, you can also adjust the default version in the settings. For more information, please refer to the Midjourney Basic Settings tutorial.

| **Command**                                                                                                     | **Example**                  | **Notes**                                                                                                                                      | **V5** | **V4** | **V3** | **niji** |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ | -------- |
| Append the parameter after the keyword with a space:<ul><li>--q 或者 —q</li><li>--quality or —quality</li></ul> | woodcut birch forest --q .25 | <ul><li>Default value is 1</li><li>Only supports .25, .5, 1, and 2. If a value greater than 2 is entered, it will be downgraded to 2</li></ul> | ✅     | ✅     | ✅     | ✅       |

## Seed

When using Midjourney, you may have noticed that even with the same prompt, the generated images are different each time. This is because Midjourney assigns a seed number to each generated image. You can include this seed parameter in your prompt to generate consistent images. Here's an official example:

![MJ026.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E0261A5A-AAA7-4836-B8FB-CACD9E70449F_2/AYWYIqo2hRdREXyboPmPwwdNayCkNi8HC8pMLIB19rYz/MJ026.png)

The method of invocation is quite simple:

| **Command**                                                                                                            | **Example**                     | **Notes**                                                                                                                                                                                                                                  | **V5** | **V4** | **V3**                         | **niji** |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------ | ------------------------------ | -------- |
| Append the parameter after the keyword with a space: <ul><li>--seed or —seed</li><li>--sameseed or —sameseed</li></ul> | woodcut birch forest --seed 123 | <ul><li>Input the exact same textual prompt with the seed parameter to generate the same image.</li><li>Even with the use of seed, versions V1, V2, V3, test, and testp cannot generate identical images, only approximate ones.</li></ul> | ✅     | ✅     | ✅, but only approximate image | ✅       |

Now, how can you obtain this seed?

Find the image for which you want to get the seed. Then, in the upper-right corner of the message, there is an emoji button. Clicking on it will display an emoji menu. In this menu, type "envelope" and finally click on the ✉️ emoji. An envelope emoji will appear below the image. Eventually, you will receive a direct message push from Midjourney Bot, and the seed number will be included in that message.

![AnimatedImage.gif](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/0ECFAB84-AF4C-4341-B60A-5084DCD4D04E_2/lUQZFixPHuw6sb9OpQnxPLdnZPGWEsKkrXxeegLVNrEz/AnimatedImage.gif)

## Image Weight

The term "Image Weight" is used to describe this parameter.

When using both an image prompt and a text prompt, you can use this parameter to determine whether the generated image should resemble the original image more or the text description more. A higher value for this parameter makes the AI-generated image resemble the original image, while a lower value makes it resemble the text description more.

Here's an official example from Midjourney that shows how the image becomes more similar to the original as the value increases:

![MJ141.jpeg](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A2A360FB-E94A-47E5-9FEB-AE2FB49FAD8D_2/MsiDjcQZLvZxF6qsdfobkel5NkZIzew28GyfzFx2nREz/MJ141.jpeg)

| **Command**                                                                       | **Example**                       | **Notes**                                                                     | **V5**                          | **V4** | **V3**                                    | **niji** |
| --------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------- | ------------------------------- | ------ | ----------------------------------------- | -------- |
| Append the parameter after the keyword with a space:<ul><li>--iw or —iw</li></ul> | flowers.jpg birthday cake --iw .5 | This parameter has different default values in different versions and ranges. | ✅ Default is 1, range is 0.5-2 | ❌     | ✅ Default is 0.25, range is -10000-10000 | ❌       |

## Stop

Similar to the "stop" in ChatGPT, this parameter allows you to forcefully pause the model.

| **Command**                                                                           | **Example**                               | **Notes**                                                                    | **V5** | **V4** | **V3** | **niji** |
| ------------------------------------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------- | ------ | ------ | ------ | -------- |
| Append the parameter after the keyword with a space:<ul><li>--stop or —stop</li></ul> | splatter art painting of acorns --stop 90 | <ul><li>Default value is 100</li><li>Accepts values from 10 to 100</li></ul> | ✅     | ✅     | ✅     | ✅       |

## Style

This parameter is primarily used to switch between different branch models in the V4 model.

Since the introduction of the V5 model, and with most users switching to V5, I believe this parameter will be phased out in the future (my guess is that it was released earlier to collect data). Therefore, I won't provide further information about it.

## Uplight

After the image generation is complete by the Midjourney Bot, there will be a row of "U" buttons below the image. These buttons perform the same function as the Uplight parameter. It is more common for people to use these buttons by clicking on them rather than adding this parameter in the prompt.

And now in V5 version, the U button no longer affects the resolution, it is only used as a function to crop images. So this parameter is also one that I believe will be eliminated. No need to worry about it.

## Upbeta

Another button that I believe will be eliminated.

## Video

I find this parameter quite interesting, as it is actually a parameter similar to recording gif. Adding this parameter in the prompt not only converts it into an image but also records the conversion process. Unfortunately, this parameter is only supported until V3, and I guess the official will abandon it in the future, mainly because it is not very useful, just for fun.
