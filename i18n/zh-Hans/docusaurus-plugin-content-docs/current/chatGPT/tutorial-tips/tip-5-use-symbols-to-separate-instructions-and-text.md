---
sidebar_position: 5
---

# 技巧 5：使用特殊符号指令和需要处理的文本分开

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

不管是信息总结，还是信息提取，你一定会输入大段文字，甚至多段文字，此时有个小技巧。

可以用“”“将指令和文本分开。根据我的测试，如果你的文本有多段，增加”“”会提升 AI 反馈的准确性（这个技巧来自于 OpenAI 的 API [最佳实践文档](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)）

:::info
感谢 CraneHuang6 的提醒，这里还能用 ### 符号区隔，不过我一般会用“”“ ，因为我有的时候会用 # 作为格式示例，太多 # 的话 prompt 会看起来比较晕 😂
:::

像我们之前写的 prompt 就属于 Less effective prompt。为什么呢？据我的测试，主要还是 AI 不知道什么是指令，什么是待处理的内容，用符号分隔开来会更利于 AI 区分。

```other
Please summarize the following sentences to make them easier to understand.
OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]
```

Better prompt:

```other
Please summarize the following sentences to make them easier to understand.

Text: """
OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated (OpenAI Inc.) and its for-profit subsidiary corporation OpenAI Limited Partnership (OpenAI LP). OpenAI conducts AI research with the declared intention of promoting and developing a friendly AI. OpenAI systems run on the fifth most powerful supercomputer in the world.[5][6][7] The organization was founded in San Francisco in 2015 by Sam Altman, Reid Hoffman, Jessica Livingston, Elon Musk, Ilya Sutskever, Peter Thiel and others,[8][1][9] who collectively pledged US$1 billion. Musk resigned from the board in 2018 but remained a donor. Microsoft provided OpenAI LP with a $1 billion investment in 2019 and a second multi-year investment in January 2023, reported to be $10 billion.[10]
"""
```

另外，在吴恩达的 ChatGPT Prompt Engineering [课程](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)中，还提到，你可以使用其他特殊符号来分割文本和 prompt，比如`<>`，`<tag></tag>` 等，课程中的案例是这样的（注意这个是 python 代码，需要关注的是 prompt 里的 text）：

```python
text = f"""
You should express what you want a model to do by \
providing instructions that are as clear and \
specific as you can possibly make them. \
This will guide the model towards the desired output, \
and reduce the chances of receiving irrelevant \
or incorrect responses. Don't confuse writing a \
clear prompt with writing a short prompt. \
In many cases, longer prompts provide more clarity \
and context for the model, which can lead to \
more detailed and relevant outputs.
"""

prompt = f"""
Summarize the text delimited by triple backticks \
into a single sentence.
`{text}`
"""
```

如果你是在开发一款允许用户输入内容，并对内容进行总结的 AI 产品，那你就可以使用到这个技巧。
