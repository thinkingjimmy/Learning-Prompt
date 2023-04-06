---
sidebar_position: 2
---

# Midjourney Prompt 基本结构

在 Midjourney 的官方介绍文档里，介绍了最简单的 Prompt 结构是这样的：

<img src={"https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/AE1E1253-DDEF-4DCE-83A9-CF5671941E55_2/TXDqmXTALidJpoDX9YyUyDy3WX3n4nOOcOj3yRgRMxoz/MJ154.png"} style={{width: 500}} />


但我觉得上面那个 Prompt 过于简单了 😂 ，反而 Advanced Prompt 更适合学习：

![MJ155.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/064065D3-8609-4C1C-A741-F435CDBD9B3F_2/0YBkNJEv93HhtapyPQqCwOuJoHUvkqrdrKcv2xCCXF8z/MJ155.png)

## Image Prompts（选填）

Prompt 分成三个部分。第一个是 Image，这个属于选填，可以填也可以不填。

先说下这个 Image URL 是干什么用的，有很多玩法，比如将两张图合并为一张，大家可以看看下面这个例子，我就是将一个大理石雕像和花朵的图片上传到 Discord：

![MJ156.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/6E42DCB6-F8DF-4738-B5AF-F2353EBF7C10_2/pe8CmiNNOmi2gXhwVbuMmJa1xZ8XSXB5HzLbRsACbxUz/MJ156.png)

然后让 Midjourney blend （混合）一下（后续 blend 章节会介绍更多用法）后，就能生成下面这种图片：

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9EB8D607-B722-4080-AB3D-13FDC104F322_2/A3UZeRIW1E48YtiKWcF3lLYwAgmyDoXAgOaJq9XISxwz/MJ157.png"
    } 
    style={{width: 500}} 
/>

需要注意的是：

- 你输入的是图片的 URL 地址，而且必须是公开可访问的地址。
- 图片格式仅支持 png、gif 和 jpg。
- 你最多只能放两张图的 URL，或者一张图的 URL + 一段话。

如果你不想将图片上传到一些图床服务器，也可以使用 Discord 的图床，你可以私聊 Midjourney Bot 然后通过上传图片的方式，将图片先发到 Discord 上，然后右键复制图片链接，像这样：

![AnimatedImage.gif](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/06D3F8EB-B80E-4B98-B177-8339182996F4_2/QAZCtNM71Smrx5JoIyOby7Wng3T5lSRpq17bFNxfHLIz/AnimatedImage.gif)

## Text Prompt

这个就是你希望 AI 生成的图片的描述。这个有非常多的技巧，后续会详细介绍。这里我想说下，Midjourney 跟 ChatGPT 有点不一样：

1. 无法理解句子结构和语法：Midjourney 没法像 ChatGPT 那样懂你说的话。类比的话，Midjourney 更像是命令式编程，ChatGPT 更像是声明式编程，你需要给 Midjourney 完整的指令，它才有可能生成你满意的结果。
2. Midjourney 有违禁词的设计：有些词语无法输入，比如 🍑 emoji 就没法输入，因为这个 emoji 是 butts 的俚语，常常会导致模型生成一些不太好的图片，所以也被禁止了。


:::tip 提示

关于如何撰写 text prompt 我会在[🖊️ Text Prompt 篇](/docs/midjourney/mj-tutorial-text-prompt/text-prompt-cautions)介绍。

::: 

## Parameter（参数）

Midjourney 大约有 20 多个参数设置项，我会在下一章介绍几个常用参数。了解完基本参数后，你应该就能用 Midjourney 生成不错的图了。

