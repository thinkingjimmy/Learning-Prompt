---
sidebar_position: 9
---

# 技巧 9：其他

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

一些小的技巧，我会统一放在这里。

## 在示例里加入特定符号，让模型知道如何处理特殊情况

这个解释起来有点复杂，以下是 OpenAI 的官方 prompt，在一些奇怪的问题上比如 `What is Devz9` 的回答，你可以用？代替答案，让模型知道当遇到超出回答范围时，需要如何处理（注意：此方法在 playground 上有效，但在 ChatGPT 上无效）。

```other
Q: Who is Batman?
A: Batman is a fictional comic book character.

Q: What is torsalplexity?
A: ?

Q: What is Devz9?
A: ?

Q: Who is George Lucas?
A: George Lucas is American film director and producer famous for creating Star Wars.

Q: What is the capital of California?
A: Sacramento.

Q: What is Kozar-09?
A: 
```

它的 Output 是这样的：

```other
?
```

