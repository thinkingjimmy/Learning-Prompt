---
sidebar_position: 1
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>


看完基础篇的各种场景介绍后，你应该对 Prompt 有较深的理解。

之前的章节我们讲的都是所谓的「术」，更多地集中讲如何用，但讲「道」的部分不多。高级篇除了会讲更高级的运用外，还会讲更多「道」的部分。

高级篇的开篇，我们来讲一下构成 prompt 的框架。

## Basic Prompt Framework

查阅了非常多关于 ChatGPT prompt 的框架资料，我目前觉得写得最清晰的是 Elavis Saravia [总结](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-intro.md)的框架，他认为一个 prompt 里需包含以下几个元素：

- **Instruction（必须）：** 指令，即你希望模型执行的具体任务。
- **Context（选填）：** 背景信息，或者说是上下文信息，这可以引导模型做出更好的反应。
- **Input Data（选填）：** 输入数据，告知模型需要处理的数据。
- **Output Indicator（选填）：** 输出指示器，告知模型我们要输出的类型或格式。

只要你按照这个框架写 prompt ，模型返回的结果都不会差。

当然，你在写 prompt 的时候，并不一定要包含所有4个元素，而是可以根据自己的需求排列组合。比如拿前面的几个场景作为例子：

- 推理：Instruction + Context + Input Data
- 信息提取：Instruction + Context + Input Data + Output Indicator

## CRISPE Prompt Framework

另一个我觉得很不错的 Framework 是 [Matt Nigh](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List) 的 CRISPE Framework，这个 framework 更加复杂，但完备性会比较高，比较适合用于编写 prompt 模板。CRISPE 分别代表以下含义：

- **CR：** Capacity and Role（能力与角色）。你希望 ChatGPT 扮演怎样的角色。
- **I：** Insight（洞察力），背景信息和上下文（坦率说来我觉得用 Context 更好）。
- **S：** Statement（指令），你希望 ChatGPT 做什么。
- **P：** Personality（个性），你希望 ChatGPT 以什么风格或方式回答你。
- **E：** Experiment（尝试），要求 ChatGPT 为你提供多个答案。

以下是这几个参数的例子：

| **Step**          | **Example**                          |
| ----------------- | ------------------------------ |
| Capacity and Role | Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.<br/>把你想想成机器学习框架主题的软件开发专家，以及专业博客作者。                                                                                                                                                                                    |
| Insight           | The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.<br/>这个博客的读者主要是有兴趣了解机器学习最新进展技术的专业人士。                                                                                                                                                            |
| Statement         | Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries.<br/>提供最流行的机器学习框架的全面概述，包括它们的优点和缺点。包括现实生活中的例子，和研究案例，以说明这些框架如何在各个行业中成功地被使用。 |
| Personality       | When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.<br/>在回应时，混合使用 Andrej Karpathy、Francois Chollet、Jeremy Howard 和 Yann LeCun 的写作风格。                                                                                                                                 |
| Experiment        | Give me multiple different examples.<br/>给我多个不同的例子。                                                                                                                                                                                                                                                                                    |

将所有的元素都组合在一起，就变成了这样的 prompt，对比基础 prompt 生成的结果会非常不一样，各位可以在下方试用：

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries.When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.Give me multiple different examples." initial-response="" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>


