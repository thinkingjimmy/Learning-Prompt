---
sidebar_position: 4
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

前面提到的改写例子，我在 prompt 里加了让其更易于阅读，这个优化方法是 OK 的。也很常用，比如你想将你写的 Email 改得更商务，则只需要加 business 相关的词即可。

我再介绍一个更有效的技巧，就是在 prompt 里增加一些 role（角色）相关的内容，让 AI 生成的内容更符合你的需求。

比如还是上面那个 rewrite 的例子，我在例子前加入这样的一段话，我让 AI 假设自己是一个小学老师，并且很擅长将复杂的内容转变成 7、8岁小朋友也能听懂的话，然后再改写这段话：

```other
You are a primary school teacher who can explain complex content to a level that a 7 or 8 year old child can understand. Please rewrite the following sentences to make them easier to understand:
```

Output 就变成了下面这样。不管是用词，还是语法，看起来都更容易懂了。

```other
OpenAI is a place where people work on making computers really smart. It's like a lab where they do research to make computers do amazing things! They want the computers to be really friendly and helpful to people. They use one of the most powerful computers in the world to do this research. A bunch of really rich and smart people gave money to start this lab. One of them is Elon Musk, but he left in 2018. Another really big company, Microsoft, gave them a lot of money too.
```

另外除了增加角色外，还能让 AI 模拟某个人，比如让 AI 以 David Foster Wallace 的风格改写上述那段话：

```other
Imagine you are the famous writer David Foster Wallace, please rewrite this sentences.
```

Output 是这样的：

```other
As David Foster Wallace, I might rewrite these sentences to sound more like this:

OpenAI is a lab that studies something called artificial intelligence, which is like when computers can do things that normally only humans can do. They have a big computer that's one of the most powerful in the world, and they're trying to make sure the AI they create is friendly and helpful. The lab was started in 2015 in a city called San Francisco, and a bunch of important people gave them a lot of money to do their research. One of those people was Elon Musk, who stopped working there but still gives them money, and Microsoft also gave them a lot of money recently.
```

关于这个技巧的应用，以及如何更好地使用 AI 提升写作能力，建议各位阅读 Nat Eliason 的 [Using ChatGPT as a Writing Coach](https://blog.nateliason.com/p/chatgpt-writing-coach)，他使用 ChatGPT 辅助其写作，就用到了上述的技巧。

