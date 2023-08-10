---
sidebar_position: 5
---

# Tip 5: Use Symbols to Separate Instructions and Text

Whether summarizing or extracting, you'll likely input a lot of text. A small tweak is using """ to separate instructions and content. From my testing, this improves accuracy especially for multi-paragraph text (tip via OpenAI's [best practices](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api))

:::info
Thanks to CraneHuang6's reminder, another way to separate the instructions and text is by using ### symbols. However, I personally prefer to use triple quotation marks (""") because I sometimes use # as a formatting example, and having too many # symbols in the prompt can be confusing 😂
:::

So prompts without separators like we had before are less effective - the AI struggles to distinguish instructions vs content.

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

Additionally, in Andrew Ng's ChatGPT Prompt Engineering [course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/), he also mentions that you can use other special symbols to divide the text and prompt, such as `<>`, `<tag></tag>`, and so on. Here's an example from the course (please note that this is a Python code example, and the text inside the prompt is what needs to be focused on):

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

If you are developing an AI product that allows users to input content for summarization, you can utilize this technique.
