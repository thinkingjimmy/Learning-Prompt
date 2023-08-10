---
sidebar_position: 1
---

# 撰写 Text Prompt 注意事项

Midjourney 跟 ChatGPT 在 prompt 的使用上有很多不一样的地方，本章会详细介绍下 Midjourney 的 text prompt 区别。

## 语法

首先 Midjourney 基本上是不懂语法的，所以即使你语法错了，只要词对了，也能生成图片。。

另外，不懂语法也导致了另一个问题：prompt 不是越长越好。特别是各种定语从句，它根本就不懂，还不如把指令用逗号隔开，一个个输入。以下是[官方推荐](https://docs.google.com/document/d/e/2PACX-1vRHOxyEb-ERGi-BdZM8Z_piEP54m4HwO0z8scjmEurEp2UZVA6rFxvyKd15elYVHUWfP1oSA4CQFwxr/pub?utm_source=docs.google.com&utm_medium=tutorial&utm_campaign=midjourney)的语法建议：

- 使用形容词+名词的词序来替换介词短语。
   - hair flowing in the wind 应该改为 flowing hair
   - a carrot for a nose 应该改为 carrot nose
- 使用非常具体的动词来替换介词短语。
   - a girl with a flashlight 应该改为 a girl using a flashlight
   - a girl with a big smile on her face 应该改为 smiling girl

最后， Midjourney 是不会区分大小写的。

## 单词

在单词的部分，Midjourney 跟 ChatGPT 有点类似，它对同义词的理解也不是很好。比如举两个例子：

1. big （大）这个词，到底指多大？越具象的大，对于 Midjourney 来说，效果越好，比如用 gigantic 就比用通用的 big 好。
2. cats（猫）这个词是个复数，但到底是多少只？对于 Midjourney 来说，two cats（两只猫）比 cats 更明确。

另外，Midjourney 还能用 emoji 代替单词（我觉得本质上 emoji 也是单词），算是一个比较有意思的特性。

## 与其说不要什么，不如说要什么

这个跟 ChatGPT 类似，你应该将你想要的东西说清楚，而不是告诉 Midjourney 不要什么，如果你想让 Midjourney 不生成某样东西，就需要用到 参数 — no。

## 你不说，模型就会随机给你

因为图像信息的信息量远超过文字，所以很多时候，Midjourney 会随机填充一些内容给你，它既是缺陷，也是亮点功能。因为当你不在 prompt 里说明这些词时，你就能获得发散的结果。

如果你想减少这些随机性，就需要用到一些 prompt 框架（或者所谓的模板），本教程会由浅入深地将这个框架教给你。

## 参数

Midjourney 还有一点跟 ChatGPT 有较大差异，它允许你在 prompt 里加入参数，而且这些参数相对来说一致性都比较好，所以如果你想实现的功能，参数里支持，那优先使用参数，而不是在主体里描述。你会在后续的教程中学到如何善用参数。

另外，需要注意，本教程生成的图片默认为 V5 版本，所以我没有在 prompt 里就加 v5 参数。

