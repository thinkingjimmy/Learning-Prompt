---
sidebar_position: 6
---

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

这个技巧是技巧 2 的变种，比较常用于生成文本场景。其实在场景 7 中，你也可以用到这个技巧。

假设你想让 AI 总结一篇非常非常长的文章，并且按照特定格式给你总结，那你可以在文章前面明确输出的格式（为了不占用太多显示空间，我省略了正文内容，你可以在 OpenAI 的 Playground 看到[完整案例](https://platform.openai.com/playground/p/3U5Wx7RTIdNNC9Fg8fc44omi)）。它的意思其实是让 ChatGPT 按 Topic 总结，每个 Topic 里按照无序列表（就是里面那个 -）将每个 Topic 的主要观点罗列出来。

```other
Summarize the main points of the following speech
Use the following format:
Topic 1: <topic_name_1>
- <point_1>
..
Topic 2: <topic_name_2>
- <point_1>
..
Topic 10: ..

Text: """
Thank you so much, Fred, for that lovely introduction. And thanks to the Atlantic Council for hosting me today.

The course of the global economy over the past two years has been shaped by COVID-19 and our efforts to fight the pandemic. It’s now evident, though, that the war between Russia and Ukraine has redrawn the contours of the world economic outlook. Vladimir Putin’s unprovoked attack on Ukraine and its people is taking a devastating human toll, with lives tragically lost, families internally displaced or becoming refugees, and communities and cities destroyed.
...

"""
```

Output 是这样的：

```other
Topic 1: The war in Ukraine
- The war is taking a human toll with lives lost, families displaced, and communities destroyed
- The Biden administration is committed to holding Russia accountable
- The war has violated international law and is a challenge to the international order

Topic 2: The global economy
- The war is having negative impacts on the global economy, including higher commodity prices and inflation
- The IMF and World Bank will be focused on helping developing countries weather the impacts of the war
- The ultimate outcome for the global economy depends on the path of the war
```

关于这个场景和技巧，我想再解释一下为什么潜力很大。

根据我使用各种 Summary 或者信息提取的产品，我发现 AI 并不知道什么是重点，所以在总结的过程中，会丢失很多内容。如何引导 AI 进行总结，就变得非常重要，且具有一定的可玩性。

---

感谢 [AlexZhangji](https://github.com/AlexZhangji) 的分享，TA 提到一个使用此技巧的场景：

使用此技巧可以使输出更结构化。比如针对一篇文章进行问答，你不仅想要得到一个答案，也希望 ChatGPT 的答案符合特定的格式，方便你下一步进行自动化。

比如问 "这里的债券 duration 是多少？". 正常 GPT 模型的答案可能是 "债券 duration 是 4 年" 或 "duration 4 年"。
ChatGPT 的回答不稳定，且不方便继续处理。

解法：
我们可以通过这个技巧，让模型理解我们预期的格式。并在此基础上，为了方便自动化，让模型输出特定的结构化答案 (比如 JSON/Markdown 等)。
也可以方便集成更多的额外要求，比如增加一个"confidence level", 并通过 prompt 的形式指定这些数值的格式。

比如：

```other
{context}
Question: What is bond duration mentioned here.
Answer template (Valid JSON format):
{{
"duration": $duration_numeric_value_in_year,
"confidence_level": $answer_confidence_level_high_modrate_or_low,
}}
Answer:
```

---

在吴恩达的 ChatGPT Prompt Engineering [课程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)中，有提到一个这个技巧的高级用法，在让 AI 按照特定格式输出内容的同时，还让 AI 根据内容是否满足特定条件，来判断应该输出什么结果，下面课程中的案例的 prompt（注意这个是 python 代码，有一些转义字符，可以不用管）：

```python
You will be provided with text delimited by triple quotes.
If it contains a sequence of instructions, \
re-write those instructions in the following format:

Step 1 - ...
Step 2 - …
…
Step N - …

If the text does not contain a sequence of instructions, \
then simply write \"No steps provided.\"

\"\"\"{text}\"\"\"
```

简单解释下，这个 prompt 分成两步：

让 AI 将输入的 text 转为步骤（就是 prompt 里的 Step 1、2）

然后还增加了一个判断，如果输入的 text 里没有 step 的内容，那么就输出 No Step

假如输入的 text 是一个泡茶的步骤介绍：

```other
Making a cup of tea is easy! First, you need to get some \
water boiling. While that's happening, \
grab a cup and put a tea bag in it. Once the water is \
hot enough, just pour it over the tea bag. \
Let it sit for a bit so the tea can steep. After a \
few minutes, take out the tea bag. If you \
like, you can add some sugar or milk to taste. \
And that's it! You've got yourself a delicious \
cup of tea to enjoy.
```

那么 AI 输出的内容是这样的（因为内容中包含了步骤式的内容）：

```other
Step 1 - Get some water boiling.
Step 2 - Grab a cup and put a tea bag in it.
Step 3 - Once the water is hot enough, pour it over the tea bag.
Step 4 - Let it sit for a bit so the tea can steep.
Step 5 - After a few minutes, take out the tea bag.
Step 6 - Add some sugar or milk to taste.
Step 7 - Enjoy your delicious cup of tea!
```

但如果我们输入的是这样的 text：

```other
The sun is shining brightly today, and the birds are \
singing. It's a beautiful day to go for a \
walk in the park. The flowers are blooming, and the \
trees are swaying gently in the breeze. People \
are out and about, enjoying the lovely weather. \
Some are having picnics, while others are playing \
games or simply relaxing on the grass. It's a \
perfect day to spend time outdoors and appreciate the \
beauty of nature.
```

从内容上看，这段话，没有任何步骤式的内容，所以 AI 的输出是这样的：

```other
No steps provided.
```
