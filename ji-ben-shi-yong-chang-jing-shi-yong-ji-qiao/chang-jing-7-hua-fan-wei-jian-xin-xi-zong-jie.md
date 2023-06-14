---
sidebar_position: 7
---

# 📝 场景7：化繁为简——信息总结

### 场景介绍

内容生成大场景下的第二个场景是化繁为简，这个场景其实很好理解，就是将复杂的内容，转为简单的内容，一般常遇到的场景有：

1. 信息总结：顾名思义，就是对一堆信息进行总结。
2. 信息解释：这个跟改写内容有点像，但这个更偏向于解释与总结。下一章会给大家介绍更多的例子。
3. 信息提取：提取信息里的某一段内容，比如从一大段文字中，找到关键内容，并分类。

本章会讲一下信息总结。信息总结还是比较简单的，基本上在提示语里加入总结就可以了。但如果你想要一些特别的效果，不妨组合使用之前介绍的技巧，比如：

1. 使用技巧 2，增加总结示例，让 AI 总结符合你需求的内容
2. 使用技巧 4，增加角色，让 AI 总结的内容具有一定的风格

不过在这个场景，还有个技巧需要各位注意。

### **技巧 5：使用特殊符号将指令和需要处理的文本分开**

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
