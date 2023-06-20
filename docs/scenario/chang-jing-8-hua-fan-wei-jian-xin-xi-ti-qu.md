# 🔬 场景8：化繁为简——信息提取

## 场景介绍

介绍完信息总结，再聊聊信息提取，我们认为这个场景是继场景 3 推理以外，第二个值得深挖的场景。这个场景有非常多的有意思的场景，比如：

1. 将一大段文字，甚至网页里的内容，按要求转为一个表格。
2. 按照特定格式对文章内容进行信息归类。

第二个可能比较难理解，举个 OpenAI 里的[例子](https://platform.openai.com/playground/p/DoMbgEMmkXJ5xOyunwFZDHdg?model=text-davinci-003)，它的提示语是这样的（为了有足够空间显示内容，我们仅节选了 text 里的部分内容，完整内容，可以[点击这里](https://platform.openai.com/playground/p/DoMbgEMmkXJ5xOyunwFZDHdg?model=text-davinci-003)查看）：

{% code overflow="wrap" %}
```other
从下面的文章中提取重要的实体。首先提取所有公司名称，然后提取所有人名，接着提取符合内容的具体主题，最后提取总体主题。
期望格式：
公司名称：<逗号分隔的公司名称列表>
人名：-||-
具体主题：-||-
总体主题：-||-

文本："""为下一代应用程序提供动力
OpenAI Codex推动
Codex现在通过OpenAI API为70个不同的应用程序提供动力，涵盖了各种用例。

2022年5月24日
阅读时间4分钟
OpenAI Codex是一个基于GPT-3的自然语言转代码系统，可将简单的英语指令转换为十几种流行的编程语言。去年8月，我们通过API发布了Codex，它是GitHub Copilot的主要构建模块。

Warp是一个基于Rust的终端，从头开始重新构思，旨在帮助个人和团队在命令行中提高生产力。

终端命令通常很难记住、查找和构建。用户通常需要离开终端并在网络上搜索答案，即使这样，结果也可能无法给他们提供正确的命令来执行。Warp使用Codex让用户可以在终端内直接运行自然语言命令进行搜索，并立即获得可用的结果。

“Codex使Warp能够让终端更易用、功能更强大。开发者可以使用自然语言搜索整个命令，而不是试图记住它们或逐个拼凑。Codex驱动的命令搜索已经成为我们的游戏改变特性之一。”

—Zach Lloyd，Warp创始人

Machinet通过使用Codex生成智能单元测试模板，帮助专业Java开发人员编写高质量的代码。

Machinet通过从构建自己的机器学习系统转向使用Codex，实现了几倍的开发加速。Codex的灵活性使得能够轻松添加新功能和功能，节省用户时间，帮助他们提高生产力。

“Codex是我们武器库中的一项神奇工具。它不仅使我们能够生成更有意义的代码，还帮助我们找到了新的产品架构设计，并使我们摆脱了局部最优。”

—Vladislav Yanchenko，Machinet创始人"""。
```
{% endcode %}

提示语有点长，这里解释下，它是让 AI 将文章里的重点内容进行抽离，并将其根据特定格式进行输出。要求将文章里提到的公司、人名、主题都按照 逗号空格分开的方式罗列出来。

最后的回复是这样的：

{% code overflow="wrap" %}
```other
公司名称：OpenAI, GitHub, Warp, Machinet
人名：Zach Lloyd, Vladislav Yanchenko
具体主题：OpenAI Codex推动应用程序, Warp终端, Machinet智能单元测试模板, GPT-3自然语言转代码系统
总体主题：OpenAI Codex在不同应用程序中的应用和影响
```
{% endcode %}

<figure><img src="../.gitbook/assets/image(77).png" alt=""><figcaption></figcaption></figure>

## **技巧 6：通过格式词阐述需要输出的格式**

上述的案例，就是用到了这个技巧。这个技巧是技巧 2 的变种，比较常用于生成文本场景。其实在场景 7 中，你也可以用到这个技巧。

假设你想让 AI 总结一篇非常非常长的文章，并且按照特定格式给你总结，那你可以在文章前面明确输出的格式（为了不占用太多显示空间，我们省略了正文内容，你可以在 OpenAI 的 Playground 看到[完整案例](https://platform.openai.com/playground/p/3U5Wx7RTIdNNC9Fg8fc44omi)）。它的意思其实是让 ChatGPT 按「主题」总结，每个主题里按照无序列表（就是里面那个 -）将每个 主题的主要观点罗列出来。

```other
请概括以下演讲的主要观点，并按照以下格式呈现：
主题1：<主题名称1>
- <观点1>
...
主题2：<主题名称2>
- <观点1>
...
主题10：..

文本："""
非常感谢弗雷德的热情介绍，也感谢大西洋理事会今天的盛情款待。

过去两年来，全球经济的走势受到了新冠病毒的影响以及我们为抗击疫情所做的努力。然而，如今俄罗斯与乌克兰之间的战争已经改变了世界经济前景的格局。弗拉基米尔·普京对乌克兰及其人民的无端攻击造成了巨大的人道灾难，生命惨遭蹂躏，家庭流离失所或沦为难民，社区和城市被毁。
...
"""
```

回复是这样的：

```other
主题1：全球经济走势
- 受新冠病毒影响
- 抗击疫情的努力

主题2：俄罗斯与乌克兰战争
- 改变世界经济前景格局
- 造成人道灾难
- 生命受到影响，家庭流离失所或沦为难民
- 社区和城市被毁
```

<figure><img src="../.gitbook/assets/image(52).png" alt=""><figcaption></figcaption></figure>

关于这个场景和技巧想再解释一下为什么潜力很大。根据使用各种总结或者信息提取的产品发现，AI 并不知道什么是重点，所以在总结的过程中，会丢失很多内容。如何引导 AI 进行总结，就变得非常重要，且具有一定的可玩性。针对此场景的技巧：

使用此技巧可以使输出更结构化。比如针对一篇文章进行问答，你不仅想要得到一个答案，也希望 小语 GPT 的答案符合特定的格式，方便你下一步进行自动化。

比如问 "这里的债券期限是多少？" , 正常 GPT 模型的答案可能是 "债券期限是 4 年" 或 "期限 4 年"。 小语 GPT 的回答不稳定，且不方便继续处理。

解法： 我们可以通过这个技巧，让模型理解我们预期的格式。并在此基础上，为了方便自动化，让模型输出特定的结构化答案 (比如 JSON/Markdown 等)。 也可以方便集成更多的额外要求，比如增加一个"置信水平“，并通过提示语的形式指定这些数值的格式与甚至区间。

比如：

```other
{context}
Question: What is bond duration mentioned here.
Answer template (Valid JSON format):
{{
"duration": $duration_numeric_value_in_year,
"confidence_level": $answer_confidence_level_high_moderate_or_low,
}}
Answer:
```