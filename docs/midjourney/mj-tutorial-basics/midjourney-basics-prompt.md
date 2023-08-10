---
sidebar_position: 2
title: Prompt Basic Structure
---

# Midjourney Prompt Basic Structure

In the official documentation of Midjourney, the simplest prompt structure is described as follows:

<img src={"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/AE1E1253-DDEF-4DCE-83A9-CF5671941E55_2/TXDqmXTALidJpoDX9YyUyDy3WX3n4nOOcOj3yRgRMxoz/MJ154.png"} style={{width: 500}} />

However, I think the above prompt is too simple 😂, and the Advanced Prompt is more suitable for learning:

![MJ155.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/064065D3-8609-4C1C-A741-F435CDBD9B3F_2/0YBkNJEv93HhtapyPQqCwOuJoHUvkqrdrKcv2xCCXF8z/MJ155.png)

## Image Prompts (optional)

The prompt is divided into three parts. The first part is the Image, which is optional and can be included or excluded.

Let's talk about what the Image URL is used for. There are many ways to use it, such as merging two images into one. You can take a look at the following example, where I uploaded an image of a marble sculpture and a flower to Discord:

![MJ156.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/6E42DCB6-F8DF-4738-B5AF-F2353EBF7C10_2/pe8CmiNNOmi2gXhwVbuMmJa1xZ8XSXB5HzLbRsACbxUz/MJ156.png)

After asking Midjourney to blend (combine) them (more usage will be introduced in the blending section), the generated image looks like this:

<img
src={
"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9EB8D607-B722-4080-AB3D-13FDC104F322_2/A3UZeRIW1E48YtiKWcF3lLYwAgmyDoXAgOaJq9XISxwz/MJ157.png"
}
style={{width: 500}}
/>

Please note:

- You input the URL address of the image, and it must be a publicly accessible URL.
- The supported image formats are png, gif, and jpg.
- You can include the URLs of up to two images, or one image URL + a piece of text.

If you don't want to upload the images to image hosting servers, you can also use Discord's image hosting service. You can privately message Midjourney Bot and upload the image to Discord first. Then, right-click on the image and copy the image link, like this:

![AnimatedImage.gif](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/06D3F8EB-B80E-4B98-B177-8339182996F4_2/QAZCtNM71Smrx5JoIyOby7Wng3T5lSRpq17bFNxfHLIz/AnimatedImage.gif)

## Text Prompt

This is the description of the image you want the AI to generate. There are many techniques for this, which will be explained in detail later. Here I would like to mention that Midjourney is a bit different from ChatGPT:

1. It cannot understand sentence structure and grammar: Midjourney cannot understand what you say in the same way as ChatGPT. As an analogy, Midjourney is more like imperative programming, while ChatGPT is more like declarative programming. You need to give Midjourney complete instructions for it to generate satisfactory results.
2. Midjourney has a prohibited word design: Some words cannot be input, for example, the 🍑 emoji cannot be input because this emoji is slang for "butts" and often leads to the generation of inappropriate images. Therefore, it is also prohibited.

:::tip 提示

I will explain how to write a text prompt in detail in the [🖊️ Text Prompt section](/docs/midjourney/mj-tutorial-text-prompt/text-prompt-cautions).

:::

## Parameters

Midjourney has about 20 parameters, and I will introduce several commonly used parameters in the next chapter. Once you understand the basic parameters, you should be able to use Midjourney to generate good images.
