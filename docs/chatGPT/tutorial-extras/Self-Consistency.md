---
sidebar_position: 4
---

# Self-Consistency

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

Self-consistency is a supplementary technique in Chain of Thought that allows the model to generate multiple chains of thought and select the most frequent answer as the final result.

According to [2022](https://arxiv.org/pdf/2203.11171.pdf) research by Xuezhi Wang et al.,when we optimize the model using only one chain of logic, there is still a possibility of the model making errors. To address this, XueZhi Wang et al. proposed a new method that involves running the model multiple times and selecting the most frequent answer as the final result:

![SelfConsistency001.png](./assets/SelfConsistency001.png)

In my experience so far, ChatGPT seems highly self-consistent - I haven't seen cases of multiple differing answers yet. From my research, self-consistency appears more useful for evaluating model quality - good models tend to be more self-consistent.

**For this example, consider the following multi-step reasoning problem:**

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

Self-consistency selects the most consistent answer from multiple inference paths. Here, inference paths A and B both yield the same conclusion (8 fruits). This approach increases the model's confidence in the final answer.
