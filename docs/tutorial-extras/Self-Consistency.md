---
sidebar_position: 4
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

Self-Consistency 自洽是对 Chain of Thought 的一个补充，它能让模型生成多个思维链，然后取最多数答案的作为最终结果。

按照 Xuezhi Wang 等人在 [2022 年发表的论文](https://arxiv.org/pdf/2203.11171.pdf) 表明。当我们只用一个逻辑链进行优化时，模型依然有可能会算错，所以 XueZhi Wang 等人提出了一种新的方法，让模型进行多次运算，然后选取最多的答案作为最终结果：

![SelfConsistency001.png](./assets/SelfConsistency001.png)

就我目前使用下来，在 ChatGPT 上，其自洽性非常高，暂时没有遇到过出现多种答案的情况。查阅多份资料，我发现这个自洽性可能更多的用于评估模型的优劣，好的模型一般自洽性会比较高。

**在此案例中，考虑如下多步推理问题：**

```
Consider a multi-step reasoning problem like the following:

Question: If a store has 10 apples and 8 oranges, and it sells 6 apples and 4 oranges, how many fruits are left in the store?

Instead of directly answering the question, the chain-of-thought prompting would require the language model to produce a series of short sentences that mimic a human's reasoning process:

The store has 10 apples.
The store has 8 oranges.
6 apples are sold.
4 oranges are sold.
There are 10 - 6 = 4 apples left.
There are 8 - 4 = 4 oranges left.
The store now has 4 apples + 4 oranges = 8 fruits.

```

Using self-consistency, the language model generates multiple reasoning paths:

```
Reasoning Path A:

The store has 10 apples.
The store has 8 oranges.
6 apples are sold.
4 oranges are sold.
There are 10 - 6 = 4 apples left.
There are 8 - 4 = 4 oranges left.
The store now has 4 apples + 4 oranges = 8 fruits.
Reasoning Path B:

The store initially has 10 apples and 8 oranges.
It sells 6 apples, so there are 10 - 6 = 4 apples left.
It sells 4 oranges, so there are 8 - 4 = 4 oranges left.
The store now has 4 apples + 4 oranges = 8 fruits.
```

翻译过来则为：


```
问题：如果一家商店有 10 个苹果和 8 个橙子，此时店里卖出了 6 个苹果和 4 个橙子，那么店里还剩下多少水果？

思维链提示（chain-of-thought prompting）不是直接回答问题，而是要求语言模型生成一系列模仿人类推理过程的短句：

商店有 10 个苹果。
店里有 8 个橙子。
卖了 6 个苹果。
卖了 4 个橙子。
还剩下 10 - 6 = 4 个苹果。
剩下 8 - 4 = 4 个橙子。
商店现在有 4 个苹果 + 4 个橙子 = 8 个水果。
```

使用 Self-consistency，语言模型生成多个推理路径：

```
推理路径A：

商店有 10 个苹果。
店里有 8 个橙子。
卖了 6 个苹果。
卖了 4 个橙子。
还剩下 10 - 6 = 4 个苹果。
剩下 8 - 4 = 4 个橙子。
商店现在有 4 个苹果 + 4 个橙子 = 8 个水果。

推理路径 B：

商店最初有 10 个苹果和 8 个橙子。
商店卖了 6 个苹果，所以还剩下 10 - 6 = 4 个苹果。
商店卖了 4 个橙子，所以还剩下 8 - 4 = 4 个橙子。
商店现在有 4 个苹果 + 4 个橙子 = 8 个水果。
```


Self-consistency 从生成的多个推理路径中选择最一致的答案。在这个例子中，推理路径 A 和 B 都得出相同的答案（8 个水果）。可以看到这种做法增加了模型对最终答案正确的信心。
