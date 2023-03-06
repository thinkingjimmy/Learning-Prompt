---
sidebar_position: 2
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

直接告知 AI 什么能做，什么不能做外。在某些场景下，我们能比较简单地向 AI 描述出什么能做，什么不能做。但有些场景，有些需求很难通过文字指令传递给 AI，即使描述出来了，AI 也不能很好地理解。

比如给宠物起英文名，里面会夹杂着一些所谓的名字风格。此时你就可以在 prompt里增加一些例子，我们看看这个例子：

```other
Suggest three names for a horse that is a superhero.
```

Output 是这样的，第一个感觉还行，第二个 Captain 有 hero 的感觉，但 Canter 就像是说这匹马跑得很慢，而且三个都比较一般，不够酷。

```other
Thunder Hooves, Captain Canter, Mighty Gallop
```

此时你就可以在 prompt 里增加一些案例：

```other
Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: Horse
Names:
```

增加例子后，输出的结果就更酷一些，或者说是我想要的那种风格的名字。

```other
Gallop Guardian, Equine Avenger, The Mighty Stallion
```

以下是一些场景案例，我整理了两个 Less Effective（不太有效的） 和 Better（更好的） prompt，你可以自己尝试下这些案例：

| 场景            | Less Effective                        | Better                                                                                                                             | 原因                                |
| ------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------- |
| 起英文名          | Suggest three English names for a boy. | Suggest three English names for a boy.  <br/> Here are some examples: Jimmy、Jason、James     | 可以在下方运行这个案例，在不给示例的情况下 AI 会给你什么答案。 |
| 将电影名称转为 emoji | Convert Star Wars into emoji.       | Convert movie titles into emoji.  <br/> Back to the Future: 👨👴🚗🕒  <br/>Batman: 🤵🦇  <br/>Transformers: 🚗🤖  <br/>Star Wars: | 可以在下方运行这个案例，在不给示例的情况下 AI 会给你什么答案。 |


<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Convert Star Wars into emoji" initial-response="🌟⚔️👽💥👨‍🚀👩‍🚀🚀" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>