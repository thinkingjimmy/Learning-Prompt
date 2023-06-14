# ✏️ 场景5：锦上添花——改写内容

### 场景介绍

除了从 0 生成内容外，你也可以先给 AI 一段已经写好的内容，然后让 AI 对其进行修改，让 AI 帮你将内容改得更好。实际的场景有如：

1. 翻译：将中文文档翻译成英文，亦或者将英文翻译成中文。关于翻译还想补充说明下，像小语 GPT 除了能翻译人类的语言外，还能翻译编程语言，比如将 Python 代码翻译成 Haskell 代码。
2. 修改：修改内容的语法，甄别内容里的错别字。
3. 润色：润色文章，将内容改成另一种风格。

本章重点介绍下润色场景，下面这是个润色的例子。

提示语（内容来自维基百科）：

{% code overflow="wrap" %}
```other
请将以下句子改写为更易理解的形式。

OpenAI是一个美国人工智能（AI）研究实验室，由非营利组织OpenAI Incorporated（OpenAI Inc.）和其盈利子公司OpenAI Limited Partnership（OpenAI LP）组成。 OpenAI旨在推广和发展友好型人工智能，并使用世界第五大超级计算机进行研究。该组织于2015年由Sam Altman、Reid Hoffman、Jessica Livingston、Elon Musk、Ilya Sutskever、Peter Thiel等人在旧金山创立，共承诺捐赠10亿美元。Musk于2018年从董事会辞职但仍然是捐赠者。微软于2019年向OpenAI LP提供了10亿美元的投资，并在2023年1月提供了第二笔多年期投资，金额据报道为100亿美元。
```
{% endcode %}

它的回复是这样的：

{% code overflow="wrap" %}
```other
OpenAI是一个专注于人工智能（AI）的研究组织。它由非营利性机构OpenAI Incorporated和营利性子公司OpenAI Limited Partnership两部分组成。该组织的目标是创建友好且有益于人类的人工智能。OpenAI使用全球最强大的超级计算机之一进行研究。该组织成立于2015年，总共筹集了10亿美元资金，其中包括Sam Altman、Reid Hoffman、Jessica Livingston、Elon Musk、Ilya Sutskever和Peter Thiel等一群人在旧金山创立了这个组织。Musk在2018年从董事会辞职，但仍然在财务上支持该组织。2019年，微软向OpenAI LP投资10亿美元，并于2023年1月再次投资100亿美元。
```
{% endcode %}

我们不难看出改写前后文本差别不是很大，并没有达到我们期望改写后更容易理解的预期。

### 技巧 4：增加角色或人物

前面提到的改写例子，接下来我们在提示语里加了「角色」让其更易于阅读，这个优化方法是很可以的。也很常用，比如你想将你写的 Email 改得更商务，则只需要加 「商务」 相关的词即可。

这里再介绍一个更有效的技巧，就是在提示语里增加一些「角色」相关的内容，让 AI 生成的内容更符合你的需求。

比如还是上面那个重写的例子，我们在例子前加入这样的一段话，我们让 AI 假设自己是一个小学老师，并且很擅长将复杂的内容转变成 7、8 岁小朋友也能听懂的话，然后再改写这段话：

{% code overflow="wrap" %}
```other
你是一位小学老师，能够将复杂的内容解释得让7或8岁的孩子也能理解。请重新编写以下句子，使它们更容易理解：
```
{% endcode %}

回复就变成了下面这样。不管是用词，还是语法，看起来都更容易懂了。

{% code overflow="wrap" %}
```other
OpenAI是一个在美国的机器人大脑研究地方，有两个部分组成，一个是不赚钱的OpenAI Inc.，另一个是赚钱的OpenAI LP。OpenAI的目标是让机器人大脑变得更友好，他们用世界上第五大的超级大电脑来做研究。这个地方是在2015年由Sam Altman、Reid Hoffman、Jessica Livingston、Elon Musk（特斯拉的老板）、Ilya Sutskever、Peter Thiel等人在旧金山创建的，他们一起答应给10亿美元。虽然Elon Musk在2018年离开了领导小组，但他还是会给钱。微软在2019年给了OpenAI LP 10亿美元，然后在2023年1月又给了第二次很多年的钱，大概是100亿美元。
```
{% endcode %}

<figure><img src="../.gitbook/assets/image (37).png" alt=""><figcaption></figcaption></figure>

另外除了增加角色外，还能让 AI 模拟某个人，比如让 AI 以大卫·福斯特·华莱士的风格改写上述那段话：

```other
想象一下你是著名作家大卫·福斯特·华莱士，请重新写这句话。
```

回复是这样的：

{% code overflow="wrap" %}
```other
在美利坚合众国的科技研究领域，有一家名为OpenAI的人工智能实验室，它由非营利性质的OpenAI Incorporated（OpenAI Inc.）与盈利子公司OpenAI Limited Partnership（OpenAI LP）共同组成。OpenAI的使命是致力于推动和发展具有友善属性的人工智能技术，同时利用全球第五大超级计算机作为研究工具。这个组织诞生于2015年，由Sam Altman、Reid Hoffman、Jessica Livingston、Elon Musk、Ilya Sutskever、Peter Thiel等一众杰出人士在旧金山共同创立，他们携手承诺捐赠了10亿美元。虽然Musk在2018年辞去了董事会职务，但他依然是该组织的捐赠者。2019年，微软向OpenAI LP投入了10亿美元的资金，而在2023年1月，微软又为OpenAI提供了第二笔多年期投资，据悉，这笔投资高达100亿美元。
```
{% endcode %}

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption></figcaption></figure>

关于这个技巧的应用，以及如何更好地使用 AI 提升写作能力，大家有兴趣的可以阅读下 Nat Eliason 的 [Using ChatGPT as a Writing Coach](https://blog.nateliason.com/p/chatgpt-writing-coach)，他使用 ChatGPT 辅助其写作，就用到了上述的技巧。
