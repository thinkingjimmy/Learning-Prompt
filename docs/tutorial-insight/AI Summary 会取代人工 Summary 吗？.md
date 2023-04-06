---
sidebar_position: 1
---

:::info 
本篇博文首发于我的付费专栏[播客小捕手](https://xiaobot.net/p/xiaobushous1?refer=599951e8-47eb-4898-aa3b-a7d0a1a06b0f) ，可以点击查看该专栏，了解下这个专栏是干啥的，这样你更能体会到这篇博文的背景。
:::

最近 AI 相关的话题非常火爆，也有部分朋友留言说 AI 出现，我们这种人工 Summary 迟早要被淘汰。也有人说有了 AI，总结起来会不会更快。

所以我想写一篇番外篇，跟大家分享下以下问题：

1. 目前 AI Summary 工具是如何实现的？又有哪些限制？
2. AI Summary 有哪些缺点？
3. AI Summary 会取代人工 Summary 吗？
4. 播客小捕手后续的计划。

## 一些科普

聊对比前，我想先科普一些 ChatGPT 相关的知识，各位了解这些知识后，才能更好地对比 AI Summary 和人工 Summary。

* Token：这个指的是 OpenAI 处理文本的基本单位，可以是单词或者字符的片段。例如，“hamburger” 被分成 “ham”、“bur” 和 “ger” 三个 Token，而 “pear” 是一个 Token。1个 Token 大约相当于 4 个字符或者 0.75 个英文单词。

* 一些限制：
  * OpenAI 的模型有一个固定的 Token 限制，例如 GPT-3 的 Davinci 模型最多可以处理2049 个 Token，大约 1500 个英文单词。最新 Turbo 模型大约是 4,096 个 Token，大约是 3000 个英文单词。
  * 另外这个限制还有一个细节，Token 限制的计数包含输入和输出的文本。换句话说，不是说我输入 3000 个英文单词，然后 OpenAI 能返回 3000 个英文单词的结果，而是输入+输出总共不能超过 3000 个英文单词。
  * 文字限制。目前 OpenAI 的 GPT-3 模型只能处理文字。

懂了这几个限制后，我再讲解下，市面上的视频/Podcast Summary 是怎么做的。实际上你能直接用 ChatGPT 模拟这些插件。

首先，因为限制 #3 ，需要将视频/Podcast 的音频转为文字。这一步因为 Youtube 有 Transcript，所以很多产品会直接拿 Transcript 来用。

第二步将 Transcript 和 Prompt（一般是「请总结以下内容」）一起传给 OpenAI 。传给 Open AI 的东西类似这样，你也可以在 ChatGPT 上试试，只需要将下方 Transcript 的内容替换成 Youtube 上的真实 Transcript 即可：

```
Please summarize the following sentences.
Text: """
Transcript
"""
```

最后 OpenAI 就会返回 Summary 结果。

但某些视频和 Podcast 会非常长，一集可能有几万字，因为 #2 的限制，根本没法将一集完整的 Transcript 都传给 OpenAI，所以不同的产品，会有不同的处理方式。目前常见的处理方式是「裁切总结」，将 Transcript 切成多个时长为 5 分钟的 Transcript ，再传给 OpenAI ，让 OpenAI 先总结一遍，然后再将这些段落总结，传给 OpenAI ，再让它总结一遍，生成最终的总结内容。

## 目前 AI Summary 的缺点

了解完这些 Summary 应用的原理后，目前这类产品的缺点也就相对好理解了：

* **缺点一：内容依赖 Transcript。**

某些没有 Transcript 的内容基本没法 Summary。比如短视频，或者 vlog，很多都是只有画面，没有说话内容。这些都没法 Summary。

当然应该没有人需要短视频 Summary 吧，内容已经够快餐了 😂

* **缺点二：内容质量依赖 Transcript 质量。**

如果 Transcript 质量不好，AI 总结出来的内容会非常奇怪，举个例子，如果 Transcript 包含了背景音乐里的歌词，AI 就会总结这段歌词。人看到就会很奇怪，突然中间来了一段「爱拼才会赢」的总结。

* **缺点三：Token 限制导致内容缺失。**

人一分钟大约能讲 125 - 150 个英文单词，180 - 200 个中文。按照现在人们看视频的习惯，视频内容一般不会超过 15 分钟，换算下来大约是 2200 个英文单词左右，或者 3000 个中文字，不过很多视频都不会一直说话，所以字数会少于这个数。

所以很多做视频 AI Summary 就会简单处理 Token 限制的问题，比如只传 2500 个英文单词，然后让 AI 返回 500 个英文单词的内容。这种处理方式就比较粗暴（但并不是不能用，哈哈哈），对于长视频来说，就会缺失后半段的总结，如果后半段有反转，那总结就会是完全错误的。

比如 [Glarity](https://glarity.app/) 这个插件，给 Knowledge Project 141 的总结是这样的：

> 这段视频中，Kunal Shah谈到了他从家族企业中学到的几个成功做生意的要素。他们中的大多数人来自于商人的社群，这种社群的人更愿意承担风险、具有更低的羞耻感、更能理解事物的价值、更能发现新的趋势、并且愿意帮助自己的社群成功。这些特点让这些人更有可能在商业上获得成功。

对比看看[我的总结](https://xiaobot.net/post/1cef6b4e-da54-4a56-a517-8b2e86fabc4c)，这段总结应该只输入了前15分钟的内容。（BTW，我这里并不是说这样设计不行，因为 Glarity 支持自定义 prompt，它是我目前常用的 AI 插件之一，只是觉得它能更好 😁 ）

* **缺点四：层层总结导致内容缺失。**

当然也不是所有人都那么做，切分总结能部分解决缺失的问题，但切分时长就很关键，如果太长，比如 15 分钟，3000 个英文单词，AI 就没法返回总结了。

另外，这种层层总结，也会导致信息缺失。第一次总结，类似将照片切成一块块，然后逐个打码，最后再将这些打码后的块，组合成一张图，再打一次码，内容少了，也更不清晰了。

* **缺点五：AI 并不知道什么是重点。**

如果前面 4 个缺点，在技术上未来应该能解决（比如 OpenAI 放开限制到 8K 个 Token），但最后的一个缺点，相对来说，我还没想到如何解决，举个实际的例子。

还是以 Knowledge Project 141 为例，Summarize.tech 的 [Summary](v) 方式是将视频切分成 5 分钟的一段，然后再对生成的内容进行二次总结。我们一起看看这个结果：

> 00:15:00 The author discusses how he has learned that many concepts in western society are not applicable to Asian societies, such as the value of time. He also discusses how Hinduism is not as scalable as other religions because it is not standardized.

里面提到一个 “such as the value of time”，我在听这一段的时候，我认为这段内容很精彩。因为这段 Kunal 聊的是「为何很多工具产品在亚洲赚不到钱」，他解释原因是对于许多亚洲国家来说都是如此，时间作为一个价值概念从未被教导过。

但如果你看上面的 AI 总结，其实省略了很多内容，并且吸引力不够，如果我读得快一点，很可能就会忽略它。再看看另一个例子：

> 00:35:00 In India, less than six percent of urbanIndian women have financial income of their own, and 94 of them are currently taking care of kids or taking care of the family and not contributing to the labor force. Another interesting thing is 95 of all financial products in India are bought by men. Credit cards, car loans, and home loans are all by men, while investments are only by men. India has now nearly two thousand dollars per capita income yearly, but if you remove the top 30 million families or 30 million individuals, the per capita income would drop to maybe 600. This is why many western markets love to come to India, because its per capita income is never going to beat and grow like China's because before China started becoming affluent, 96 of Chinese urban women were working because of the one child policy which forced it to become a general neutral society. However, in India, female participation of labor is going down. The per capita income is not going to grow and therefore a lot of foreign companies love to come to India because India is the "dau farm of the world." All the big internet giants, like Facebook, Twitter, and YouTube, will say "I have 500 million billion users in India, but look at the arpu and peel the ar

首先这个总结应该是 Token 到达上限，最后没有输出完。让后拿这个总结和上一个总结做对比，你应该会和我一样有相同的疑惑，为何这段总结更长？更详细？

我自己也尝试写了一些 prompt，这一块即使 ChatGPT 也做不到很好的一致性（换句话说，你反复提问一样的问题，它会给你返回不同的答案），暂时不知道它以什么标准进行总结。

但我也测试出来了一些有意思的东西，最后会跟大家分享。

## AI Summary 会取代人工 Summary 吗？

我的想法是：
1. 值得总结的，它暂时还做不好。
2. 它能做好的，总结的意义感觉也不是很大。

我目前尝试下来，AI 最擅长总结的是那些科技产品评测，特别是像钟文泽做的那些开箱评测，总结准确还很全。但我想说这些评测你会只看文字版本吗？

我不太会。

所以我也很好奇，这些 AI Summary 工具的策略是怎样的。

我反而觉得可能将这些结果重新组装，做成新产品，可能还有意思一些。

比如将全网评测 iPhone 14 的视频都总结一遍，然后将这些总结结果再做一些统计，那我就能知道各种 UP 主是怎么评价 iPhone 14 的，赞的人有哪些，赞的地方有哪些，踩的人又有哪些，又踩了什么。

现在的 AI 产品玩法，都还是脱离不了文字的交互方式，以及直接跟 AI 交互的方式。为何不试试用 AI 的结果做产品？以前要想搞一个什么值得买很难，需要很多人力，现在会不会简单一些呢？

再说说它暂时做不好的内容，我可能会用它来做辅助，但用它做辅助也有两个担忧：

1. 我不知道它总结的全不全。
2. 被动学习变成主动学习：这个跟第一条有点关系，纯听，或者看文字稿，我大部分时间是被动学习，我能很快判断这个是不是值得记录的，但现在它总结给我，我就要主动去想它总结的内容是什么，是不是值得细听。

所以就我目前测试下来，文字稿对我的辅助作用最大。其次才是 AI 总结，它帮到我的更多的是定位重点，作为

不过我相信未来应该会有更好的解决方案，比如未来应该会支持更多媒介，并且 Token 的限制也会放宽。

## 后续的计划

其实我和 fonter 在构思播客小捕手的时候，我们就有用 AI 的想法，但那个时候 ChatGPT 才刚出，还有很多限制，价格也很贵。

所以我们就打算用小报童做个 MVP 试试，先人肉做一些看看，躬身入局，实际去做了，才能发现问题。另一方面也尝试用各种自动化工具解决效率问题，比如我们就高度依赖飞书的多维表格，很多内容都是程序自动化抓取和处理的。

所以，后续我们会尝试更多 AI 工具，甚至自己去搭建一些 AI 产品。

## One More Thing

前面有提到，我在测试 prompt 的时候，测试出了一些有意思的东西。

是这样的。

我在前面提到 AI Summary 不知道什么是重点。但如果你传给 AI 的 Prompt 里包含一些案例，它就能根据你给的案例做一些优化。某种程度上是告知它什么是重点。

简单说，类似这样的：

```
In India, less than six percent of urbanIndian women have financial income of their own, and 94 of them are currently taking care of kids or taking care of the family and not contributing to the labor force. Another interesting thing is 95 of all financial products in India are bought by men. Credit cards, car loans, and home loans are all by men, while investments are only by men. India has now nearly two thousand dollars per capita income yearly, but if you remove the top 30 million families or 30 million individuals, the per capita income would drop to maybe 600. 

Highlight: less than six percent of urbanIndian women have financial income of their own.
```

然后下一段话，你就可以这样问，ChatGPT 会返回它理解的 Highlight 内容给你：

```
This is why many western markets love to come to India, because its per capita income is never going to beat and grow like China's because before China started becoming affluent, 96 of Chinese urban women were working because of the one child policy which forced it to become a general neutral society. However, in India, female participation of labor is going down. The per capita income is not going to grow and therefore a lot of foreign companies love to come to India because India is the "dau farm of the world." 

Highlight: 
```

未来基于 AI 做一个专属于个人的推荐或者 Summary 系统是有可能的。只是你需要给不少初始化数据给模型。

比如人对某篇文章的开头段落进行高亮，后续 AI 就能自动根据你的高亮结果，高亮文章后续可能被高亮的内容。当收集的数据足够多，新的文章都能自动高亮了。
