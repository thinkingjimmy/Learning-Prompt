# 使用外部工具

{% hint style="warning" %}
如果我们不是开发者的话，这部分的技巧我们不太会用到。在这里进行简单介绍，如需深入学习可前往[OpenAI 官方文档](https://platform.openai.com/docs/guides/gpt-best-practices/strategy-use-external-tools)进行查看。
{% endhint %}

## **使用基于嵌入的搜索实现高效知识检索**

如果将外部信息源作为输入的一部分提供给模型，那么模型就可以利用这些信息生成更有见地且更及时的回答。例如，如果用户询问关于某部特定电影的问题，将关于该电影的高质量信息（如演员、导演等）添加到模型的输入中可能会很有帮助。嵌入可用于实现高效的知识检索，以便在运行时动态向模型输入中添加相关信息。

文本嵌入是一个可以度量文本字符串之间关联性的向量。相似或相关的字符串在嵌入空间里会比不相关的字符串距离更近。利用这一事实以及快速向量搜索算法的存在意味着嵌入可以用来实现高效的知识检索。具体而言，可以将文本语料库拆分成多个块，然后将每个块嵌入并存储起来。接下来，将查询请求进行嵌入，然后执行向量搜索以找到与查询请求最相关的文本块（即在嵌入空间中距离最近的那些文本块）。

## 使用代码执行进行更准确的计算或调用外部API

有些较为复杂的数学运算GPT无法给出满意的解答。这时可以指导模型编写程序代码来进行实现。生成输出后，可以提取并运行代码。最后，如果需要，可以将代码执行引擎（如Python / JavaScript解释器）的输出作为输入提供给模型以进行下一次查询。

提示语：

{% code overflow="wrap" %}
````
你可以通过将Python代码包裹在三个反引号中来编写和执行，例如```此处填写代码```。利用这种方式，你可以进行计算。

请找出下列多项式的所有实数根：3*x**5 - 5*x**4 - 3*x**3 - 7*x - 10。
````
{% endcode %}

小语 4.0 回复：

{% code overflow="wrap" %}
````
要找出多项式的所有实数根，我们可以使用Python的`numpy`库中的`roots`函数。首先，我们需要安装`numpy`库，然后导入它并使用`roots`函数找到多项式的根。这是相应的代码：

```python
import numpy as np

coefficients = [3, -5, -3, 0, -7, -10]
roots = np.roots(coefficients)
real_roots = [root for root in roots if np.isreal(root)]

print(real_roots)
```

请注意，这个代码可能无法在这个平台上运行。你可以在本地Python环境中运行它以获得结果。
````
{% endcode %}

<figure><img src="../.gitbook/assets/image (12).png" alt=""><figcaption></figcaption></figure>

遗憾的是，这种方式GPT 目前只能给到我们Python代码，还没有办法将代码运行直接给到我们结果（有些鸡肋），我们接下来可以选择找一个[在线代码运行](https://ideone.com/)工具（📢注意将语言切换为 "Python3"），复制这段代码运行得到答案。

<figure><img src="../.gitbook/assets/image (58).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**发散一下：**

将GPT难以处理的问题转换成某种程序代码是一个巧妙的技巧，同理，这个技巧你可以用于：

1. GPT生成mermaid代码，通过https://mermaid.live/来生成流程图表
2. GPT生成midjourney提示词，并通过midjourney进行AI绘图
3. ...

这个技巧无需你懂得编程知识，只要你找到对应的工具和工具所需要的语法，即可解决问题！
{% endhint %}

代码执行的另一个好用例是调用外部API。如果模型被正确地指导使用API，它可以编写利用它的代码。通过提供文档和/或展示如何使用API的代码示例，可以指导模型如何使用API。

提示语：

{% code overflow="wrap" %}
````
你可以通过将其封装在三重反引号中来编写和执行Python代码。同时，请注意您可以访问以下模块，以帮助用户向他们的朋友发送信息：

```python
import message
message.write(to="Bob", message="嘿，下班后想见面吗？")```

请告知爱丽丝，我将在10点在咖啡店与她见面。
````
{% endcode %}

{% hint style="danger" %}
警告：

执行由模型生成的代码本质上并不安全，因此在任何试图这样做的应用程序中都应采取预防措施。特别是需要一个沙盒式代码执行环境来限制不受信任的代码可能造成的危害。
{% endhint %}
