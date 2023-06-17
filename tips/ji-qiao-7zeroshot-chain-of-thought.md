---
sidebar_position: 7
---

# 🧠 技巧7：零样本思维链

这个技巧使用起来非常简单，只需要在问题的结尾里放一句 `让我们一步一步地思考` （让我们一步步地思考），模型输出的答案会更加准确。

这个技巧来自于 Kojima 等人 2022 年的论文 [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916)。在论文里提到，当我们向模型提一个逻辑推理问题时，模型返回了一个错误的答案，但如果我们在问题最后加入 `让我们一步一步地思考` 这句话之后，模型就生成了正确的答案：

![ZeroShotChainOfThought001.png](../docs/chatGPT/tutorial-tips/assets/ZeroShotChainOfThought001.png)

论文里有讲到原因，感兴趣的朋友可以去看看，这里简单解释下为什么：

1. 首先各位要清楚像 ChatGPT 这类产品，它是一个统计语言模型，本质上是基于过去看到过的所有数据，用统计学意义上的预测结果进行下一步的输出（这也就是为什么你在使用 ChatGPT 的时候，它的答案是一个字一个字地吐出来，而不是直接给你的原因，因为答案是一个字一个字算出来的）。
2. 当它拿到的数据里有逻辑，它就会通过统计学的方法将这些逻辑找出来，并将这些逻辑呈现给你，让你感觉到它的回答很有逻辑。
3. 在计算的过程中，模型会进行很多假设运算（不过暂时不知道它是怎么算的）。比如解决某个问题是从 A 到 B 再到 C，中间有很多假设。
4. 它第一次算出来的答案错误的原因，只是因为它在中间跳过了一些步骤（B）。而让模型一步步地思考，则有助于其按照完整的逻辑链（A > B > C）去运算，而不会跳过某些假设，最后算出正确的答案。

按照论文里的解释，零样本思维链涉及两个补全结果，左侧气泡表示基于提示输出的第一次的结果，右侧气泡表示其收到了第一次结果后，将最开始的提示一起拿去运算，最后得出了正确的答案：

![ZeroShotChainOfThought002.png](../docs/chatGPT/tutorial-tips/assets/ZeroShotChainOfThought002.png)

这个技巧，除了用于解决复杂问题外，还适合生成一些连贯主题的内容，比如写长篇文章、电影剧本等。

但需要注意其缺点，连贯不代表，它就一定不会算错，如果其中某一步骤算错了，错误会因为逻辑链，逐步将错误积累，导致生成的文本可能出现与预期不符的内容。

根据 Yongchao Zhou 等人的[最新论文](https://sites.google.com/view/automatic-prompt-engineer)，使用思维链更好的提示语是：

{% code overflow="wrap" %}
```
让我们一步一步地解决这个问题，以确保我们得到正确的答案。
```
{% endcode %}

在吴恩达的 ChatGPT 提示语工程 [课程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)中，有提到一个这个技巧的另一种用法，不仅仅只是让 AI 按步骤行事，还会告知 AI 每一步要做什么。比如这个案例（注意这个是 python 代码）：

```
prompt_2 = f"""
Your task is to perform the following actions:
1 - Summarize the following text delimited by
  <> with 1 sentence.
2 - Translate the summary into French.
3 - List each name in the French summary.
4 - Output a json object that contains the
  following keys: french_summary, num_names.

Use the following format:
Text: <text to summarize>
Summary: <summary>
Translation: <summary translation>
Names: <list of names in Italian summary>
Output JSON: <json with summary and num_names>

Text: <{text}>
"""
```

简单解释下这个代码：

1. 开头是让 AI 按照 1 ～ 4 步运行
2. 然后再让 AI 根据特定格式输出内容

最后 AI 的输出是这样的：

{% code overflow="wrap" %}
```
Summary: Jack and Jill go on a quest to fetch water, but misfortune strikes and they tumble down the hill, returning home slightly battered but with their adventurous spirits undimmed.
Translation: Jack et Jill partent en quête d'eau, mais la malchance frappe et ils dégringolent la colline, rentrant chez eux légèrement meurtris mais avec leurs esprits aventureux intacts.
Names: Jack, Jill
Output JSON: {"french_summary": "Jack et Jill partent en quête d'eau, mais la malchance frappe et ils dégringolent la colline, rentrant chez eux légèrement meurtris mais avec leurs esprits aventureux intacts.", "num_names": 2}
```
{% endcode %}

上述的案例只是将任务拆解，能让 AI 生成的结果更加符合要求，这个方法同样能提升 AI 的回答准确性，比如这个案例：

```
判断学生的解答是否正确。

问题：
我正在建设一个太阳能发电设施，需要帮助计算财务数据。

土地价格为每平方英尺100美元

太阳能电池板价格为每平方英尺250美元

我谈判了一份维护合同，第一年的费用为10万美元，此后每平方英尺10美元
请问第一年运营的总成本与设施的平方英尺数之间的关系是什么？

学生的解答：
令x为设施的平方英尺数。
成本：

土地成本：100x

太阳能电池板成本：250x

维护成本：100,000 + 10x
总成本：100x + 250x + 100,000 + 10x = 450x + 100,000
```

AI 的回答是「学生的解答正确」。但其实学生的答案是错误的，应该 360x + 100,000，我们将提示语调整成这样：

```python
首先，你需要自行解决这个问题。然后，将你的解决方案与学生的解决方案进行比较，评估学生的解决方案是否正确。在你自己解决问题之前，不要判断学生的解决方案是否正确。

问题描述：我正在建设一个太阳能发电设备，我需要帮助计算财务数据。
- 土地每平方英尺的价格是100美元
- 我可以以每平方英尺250美元的价格购买太阳能板
- 我已经谈妥了一份维护合同，每年固定费用是10万美元，此外还需要每平方英尺10美元的费用
问第一年运营的总成本是多少，这是一个关于平方英尺数量的函数。

学生的解决方案：设x为设施的面积（以平方英尺为单位）。
1. 土地成本：100x
2. 太阳能板成本：250x
3. 维护成本：100,000 + 100x
总成本：100x + 250x + 100,000 + 100x = 450x + 100,000
```

本质上，也是将任务分拆成多步，这次 AI 输出的结果是这样的（结果就是正确的了）：

{% code overflow="wrap" %}
```
首先，我们自己解决这个问题。

设x为设施的面积（以平方英尺为单位）。
1. 土地成本：100x
2. 太阳能板成本：250x
3. 维护成本：100,000 + 10x
总成本：100x + 250x + 100,000 + 10x = 360x + 100,000

现在我们来评估学生的解决方案。学生的解决方案中，维护成本的计算有误，应该是100,000 + 10x，而不是100,000 + 100x。因此，学生的总成本计算也有误，正确的总成本应该是360x + 100,000，而不是450x + 100,000。
```
{% endcode %}

<figure><img src="../.gitbook/assets/image (65).png" alt=""><figcaption></figcaption></figure>
