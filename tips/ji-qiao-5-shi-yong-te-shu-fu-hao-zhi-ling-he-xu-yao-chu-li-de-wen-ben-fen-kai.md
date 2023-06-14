---
sidebar_position: 5
---

# 技巧5：使用特殊符号

不管是信息总结，还是信息提取，你一定会输入大段文字，甚至多段文字，此时有个小技巧。

可以用“”“将指令和文本分开。根据我们的测试，如果你的文本有多段，增加”“”会提升 AI 反馈的准确性（这个技巧来自于 OpenAI 的 API [最佳实践文档](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)）

像我们之前写的提示语就属于没那么有效。为什么呢？根据我们的经验目前 AI 还不能稳定的知道什么是指令，什么是待处理的内容，用符号分隔开来会更利于 AI 区分。

不太有效的提示语：

{% code overflow="wrap" %}
```other
请将以下句子改写为更易理解的形式。

OpenAI是一个美国人工智能（AI）研究实验室，由非营利组织OpenAI Incorporated（OpenAI Inc.）和其盈利子公司OpenAI Limited Partnership（OpenAI LP）组成。 OpenAI旨在推广和发展友好型人工智能，并使用世界第五大超级计算机进行研究。该组织于2015年由Sam Altman、Reid Hoffman、Jessica Livingston、Elon Musk、Ilya Sutskever、Peter Thiel等人在旧金山创立，共承诺捐赠10亿美元。Musk于2018年从董事会辞职但仍然是捐赠者。微软于2019年向OpenAI LP提供了10亿美元的投资，并在2023年1月提供了第二笔多年期投资，金额据报道为100亿美元。
```
{% endcode %}

更好的提示语：

{% code overflow="wrap" %}
```other
请将以下句子概括，以便更易理解。

文本："""
OpenAI是由非营利组织OpenAI Incorporated（OpenAI Inc.）和其营利子公司OpenAI有限合伙公司（OpenAI LP）组成的美国人工智能（AI）研究实验室。OpenAI旨在推广和发展友好的AI，并进行AI研究。OpenAI系统在全球第五大超级计算机上运行。该组织于2015年在旧金山由Sam Altman、Reid Hoffman、Jessica Livingston、Elon Musk、Ilya Sutskever、Peter Thiel等人共同承诺捐赠10亿美元成立。Musk于2018年从董事会辞职，但仍是捐赠者。微软于2019年向OpenAI LP提供了10亿美元的投资，并于2023年1月提供了第二笔多年投资，金额为100亿美元。
"""
```
{% endcode %}
