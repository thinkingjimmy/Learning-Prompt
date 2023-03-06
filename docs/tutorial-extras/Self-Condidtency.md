---
sidebar_position: 4
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

# Self-Consistency

Self-consistency 自洽是对 Chain of Thought 的一个补充，它能让模型生成多个思维链，然后取最多数答案的做为最终结果。

按照 Xuezhi Wang 等人在 [2022 年发表的论文](https://arxiv.org/pdf/2203.11171.pdf) 表明。当我们只用一个逻辑链进行优化时，模型依然有可能会算错，所以 XueZhi Wang 等人提出了一种新的方法，让模型进行多次运算，然后选取最多的答案做为最终结果：

![SelfConsistency001.png](./assets/SelfConsistency001.png)

就我目前使用下来，在 ChatGPT 上，其自洽性非常高，暂时没有遇到过出现多种答案的情况。查阅多份资料，我发现这个自洽性可能更多的用于评估模型的优劣，好的模型一般自洽性会比较高。

:::info 🆘 
征集案例
:::
