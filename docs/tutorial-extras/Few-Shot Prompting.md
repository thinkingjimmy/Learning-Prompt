---
sidebar_position: 3
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

同样在推理场景，我提到了 Few-Shot Prompting 的技术，本章介绍下它的优缺点和技巧。

## 介绍

我们在技巧2 中，提到我们可以给模型一些示例，从而让模型返回更符合我们需求的答案。这个技巧其实使用了一个叫 Few-Shot 的方法。

这个方法最早是 Brown 等人在 2020 年[发现的](https://arxiv.org/pdf/2005.14165.pdf)，论文里有一个这样的例子，非常有意思，通过这个例子你应该更能体会，像 ChatGPT 这类统计语言模型，其实并不懂意思，只是懂概率 😁

Brown 输入的内容是这样的（whatpu 和 farduddle 其实根本不存在）：

```other
A "whatpu" is a small, furry animal native to Tanzania. An example of a sentence that uses
the word whatpu is:
We were traveling in Africa and we saw these very cute whatpus.
To do a "farduddle" means to jump up and down really fast. An example of a sentence that uses
the word farduddle is:
```

Output 是这样的：

```other
When we won the game, we all started to farduddle in celebration.
```

不过这并不代表，Few-Shot 就没有缺陷，我们试试下面这个例子：

Prompt：

```other
The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.
A: The answer is False.

The odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.
A: The answer is True.

The odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.
A: The answer is True.

The odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.
A: The answer is False.

The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 
A:
```

Output 是这样的：

```other
The answer is True.
```

输出的答案其实是错误的，实际上的答案应该是：

```other
Adding all the odd numbers (15, 5, 13, 7, 1) gives 41. The answer is False.
```

那我们有没有什么方法解决？

## 技巧8：Few-Shot Chain of Thought

要解决这个缺陷，就要使用到新的技巧，Few-Shot Chain of Thought。

根据 Wei 他们团队在 [2022 年的研究](https://arxiv.org/pdf/2201.11903.pdf)表明：

> 通过向大语言模型展示一些少量的样例，并在样例中解释推理过程，大语言模型在回答提示时也会显示推理过程。这种推理的解释往往会引导出更准确的结果。

下面是论文里的案例，使用方法很简单，在技巧2 的基础上，再将逻辑过程告知给模型即可。从下面这个案例里，你可以看到加入解释后，输出的结果就正确了。

![FewShotChainOfThought001.png](./assets/FewShotChainOfThought001.png)

那本章开头提的例子就应该是这样的（注：本例子同样来自 Wei 团队论文）：

```other
The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.
A: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.

The odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.
A: Adding all the odd numbers (17, 19) gives 36. The answer is True.

The odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.
A: Adding all the odd numbers (11, 13) gives 24. The answer is True.

The odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.
A: Adding all the odd numbers (17, 9, 13) gives 39. The answer is False.

The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 
A:
```

聊完技巧，我们再结合前面的 Zero-Shot Chain of Thought，来聊聊 Chain of Thought 的关键知识。根据 [Sewon Min](https://arxiv.org/search/cs?searchtype=author&query=Min%2C+S) 等人在 [2022 年的研究](https://arxiv.org/abs/2202.12837) 表明，思维链有以下特点：

1. "the label space and the distribution of the input text specified by the demonstrations are both key (regardless of whether the labels are correct for individual inputs)" 标签空间和输入文本的分布都是关键因素（无论这些标签是否正确）。
2. the format you use also plays a key role in performance, even if you just use random labels, this is much better than no labels at all. 即使只是使用随机标签，使用适当的格式也能提高性能。

理解起来有点难，我一个 prompt 案例给大家解释（🆘 如果你有更好的解释，不妨反馈给我）。我给 ChatGPT 一些不一定准确的例子：

```other
I loved the new Batman movie!  // Negative
This is bad // Positive
This is good // Negative
What a good show! //
```

Output 是这样的：

```other
Positive
```

在上述的案例里，每一行，我都写了一句话和一个情感词，并用 // 分开，但我给这些句子都标记了错误的答案，比如第一句其实应该是 Positive 才对。但：

1. 即使我给内容打的标签是错误的（比如第一句话，其实应该是 Positive），对于模型来说，它仍然会知道需要输出什么东西。 换句话说，模型知道 // 划线后要输出一个衡量该句子表达何种感情的词（Positive or Negative）。这就是前面论文里 #1 提到的，即使我给的标签是错误的，或者换句话说，是否基于事实，并不重要。标签和输入的文本，以及格式才是关键因素。
2. 只要给了示例，即使随机的标签，对于模型生成结果来说，都是有帮助的。这就是前面论文里 #2 提到的内容。

最后，需要记住，思维链仅在使用大于等于 100B 参数的模型时，才会生效。

BTW，如果你想要了解更多相关信息，可以看看斯坦福大学的讲义：[Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf)

