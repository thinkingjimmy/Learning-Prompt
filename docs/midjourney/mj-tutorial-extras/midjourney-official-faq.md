---
sidebar_position: 3
---

# Midjourney 官方 FAQ

本章节，主要是翻译官方的 Discord FAQ 文章，我只挑了一些大家常见的问题进行翻译，各位可以在官方 Discord prompt-faqs 找到这些原稿。


## 4K、HD 等所谓的 Rendering 词有用吗？

[官方解释](https://discord.com/channels/662267976984297473/1029786943141191700) Rendering 词包括：

> Rendering words include `4k, 6k, 8k, 16k, ultra 4k, octane, unreal, v-ray, lumion, renderman, hd, hdr, hdmi, high-resolution, dp, dpi, ppi, 1080p`.

有用吗？官方的解释是：

> Rendering words do ***something*** to your image. They may also be what's ***breaking*** your prompt. So, as part of troubleshooting, we recommend removing them. Removing them often fixes issues with blurring, focus, clarity, and coherence.

意思就是会影响，有一定作用，但弊大于利。加入这些词，反而会破坏你的 prompt，特别是一些摄影场景，比如你需要用到诸如背景虚化等效果，再加上 4K 可能就会破坏背景虚化。

所以官方建议去掉这些词。

## Prompt 里的词语顺序会影响结果吗？

[官方解释](https://discord.com/channels/662267976984297473/1020572050898813029)：
> Word order matters. Early words are generally more influential.

顺序会影响结果，越早出现的词，对结果影响越大。所以我设计的模版才会将「类型」放在最前面。因为这是我的最重要的目标。官方还建议：

1. 避免列举词语：例举的意思是在 prompt 里写多个同一个意思的词。
2. 使用具体的相关词语：越具体生成的图片越符合 prompt。
3. 用句子片段：就是不要像写雅思作文那样，写定语从句、长难句，而是将这些词切开。
4. 避免使用4K、8K、16K等安慰剂词汇。

## 为何 Seed 不生效？

[官方对 Seed 的评价](https://discord.com/channels/662267976984297473/1017917091606712430/threads/1022698154170253363)是：

> - Seeds can not transfer the style or appearance of images across jobs.
> - Seeds can not be used to 'bookmark' styles or appearance. (i.e. "Use seed XYZ for that!")
> - Seeds are the weakest force in Midjourney. In --v 5 they may not work as expected at all.

简单总结，就是这个功能在 V5 版本下非常不稳定，你不要预期它能跨图片传输 prompt。

