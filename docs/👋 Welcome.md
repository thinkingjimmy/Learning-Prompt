---
sidebar_position: 1
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 关于本教程

如果你不知道能拿 ChatGPT 或者其他 AI 产品来干什么；

如果你不知道如何更好地使用 OpenAI 提供的 API；

那本教程应该能帮到你。

这是一份教你如何更好使好地使用 ChatGPT 和其他 AI 产品的免费教程。

它不是什么？

- 本教程不是 prompt 大全，如果你预期是找到能直接用的 prompt，建议你谷歌找一找。本教程更多地是教你方法，以及解释这些方法为何有效。
- 本教程不是权威指南，在这个领域我也只是学生。

## 为什么会有这个教程？

我最近一直在研究 Prompt Engineering 相关的知识，然后发现大多数教程都是英文的，有些教程作者甚至是 NLP 或者 ML 的专家，内容都非常好，但对我这种初学者来说，阅读起来还是有点吃力。

所以我就萌生出了自己写一份教程的想法，想着通过输出倒逼输入的方式去学习。

另外，再说说感性的话，每次看到各种专家吐槽中国 AI 发展太功利，都是往钱看，不够有远见，所以错失了不少机会。

坦率说来，我觉得就像当年吐槽中国为了发展经济不顾环保一样，我们难道不知道环保很重要吗？并不是，我们家底就这样，肯定会有所取舍的。

我们并不缺提出问题的人，与其吐槽当年不努力，不如现在埋头苦干，贡献自己的力量。

**往者不可谏，来者犹可追。**

所以就有了这份教程。

## 如何阅读？

很感谢你打开这份教程，但我建议你在阅读这份教程的时候：

1. **降低预期：** 我不是专家，我也在学习，我只是比你多走了几步而已。教程里的内容难免会有遗漏或错误。另外，我这份教程，目标读者是初学者，所以在教程中，为了让大家更容易理解，难免会用到不太准确的类比，或者用词，请各位见谅。
2. **不要吝啬你的反馈：** 如果你遇到无法看懂的地方，亦或者我写错了的地方，不妨给我提个 Issue 或者填写这个表单。我们共同进步，并为 PE 的科普出一份力。
3. **通过输出倒逼输入：** 最好的学习方法就是实操，教程里会提供不少案例，你边阅读，边尝试。甚至如果可以的话，不妨将你写的 prompt 通过 Issue 或表单的方式，分享给我，我会将不错的案例加到文档内。

你可以根据你的需求来阅读此教程：

- 如果你对 AI 和 Prompt Engineering 不是很了解，建议你从基础篇开始读起。基础篇更多的会从用户的角度教你如何使用 AI 产品（目前仅更新了面向文字类 AI，后续会更新 Midjourney 的内容），或者换句话说，会讲更多 prompt 的内容。
- 如果你已经了解基本的用法，并且想要学习如何更好地开发 AI 产品，想了解更多 prompt engineering 的内容。那可以直接跳去高级篇阅读。
- 如果你只是想快速了解使用 AI 产品的技巧，你可以直接读技巧篇，那里汇总了所有使用技巧。
- 如果你已经了解如何使用了，但想了解更多使用场景，可以看看资料 & 产品推荐篇。

另外，我一直认为最好的学习方法，就是实践，所以我建议你使用 ChatGPT 运行一下教程里的案例。这样能够记得更牢靠一些。

你也可以直接在文档里运行案例。但需要注意，本文档使用了 [Dyno](https://trydyno.com/) embed 功能，如果你发现你看不到下面的案例，请检查你的网络，以及允许浏览器运行 JS。如果你能看到下面的案例，可以点击里面的 Generate 按钮。第一次使用会提示各位输入你个人的 ChatGPT API key（不用担心安全，这个 Key 仅会保存在本地），将 key 输入进去就可以运行文档里的案例了。

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is the capital of China?" initial-response="The capital of China is Beijing. " max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>
最后，在读文档的过程中，你会看到以下几个 emoji：

- 🚧 ：标有这个 emoji 代表内容，我还需要进一步去完善补充，但并不影响你的阅读。我会在后续迭代补充。
- 🆘 ：这个代表我需要各位的帮助，比如有可能是希望大家给我一些某场景的 prompt 案例等。如果你有想法，不妨通过 Issue 或[表单](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，向我反馈。
- 🔴：为了让大家能更平滑地学习高级篇的内容，我会在基础篇提一些高级篇的概念，当你看到这个红色圆时，就表示这是高级内容，你可以不深究，先了解即可。

## 如何贡献一份你的力量？

如果可以的话，不妨在 [Github Page](https://github.com/thinkingjimmy/Learning-Prompt) 上给我点赞，或者将本教程分享给其他人。感谢~

在阅读这个文档的时候：

1. 遇到错别字、句子不通顺，亦或者读不懂的地方，欢迎通过 Issue 或[表单](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，反馈给我，我会对其进行修改。一经采纳会将你的名字罗列在感谢人名单内。
2. AI 的发展非常快，今天写的教程，很有可能明天就过期了。如果你在文档里看到有什么落后的内容，比如某些指令已经不需要了，或指令不生效了，也欢迎通过 Issue 或[表单](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，向我反馈。
3. 看到标有 🆘 的内容，然后你又有不错的想法，不妨通过 Issue 或[表单](https://mcousdyt7h.feishu.cn/share/base/form/shrcn8p8MEmbkTiCDyVVPmdUoSg)的方式，向我反馈你的想法。

在感谢人名单页面里，我会罗列帮助过我的朋友们 😁

最后，你也可以给我[买一杯咖啡](https://www.buymeacoffee.com/thinkingjimmy)。或者购买我的其他付费内容产品：

- [播客小捕手：](https://xiaobot.net/p/xiaobushous1?refer=599951e8-47eb-4898-aa3b-a7d0a1a06b0f)如果你喜欢播客，不妨看看，未来我会在上面尝试更多 AI 相关的想法。
- [随意搜寻 | 2023](https://xiaobot.net/p/suiyisouxun2023?refer=599951e8-47eb-4898-aa3b-a7d0a1a06b0f) ：我的付费 newsletter，每周更新。

## 感谢

本教程制作过程中，内容和案例参考了以下教程或文档：

1. [Prompt-Engineering-Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)
2. [Learn Prompting](https://learnprompting.org/)
3. [ChatGPT3-Free-Prompt-List](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List)
4. [Natural Language Processing with Deep Learning](http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf)
5. [edx ChatGPT101](https://www.edx.org/course/introduction-to-chatgpt)
6. [OpenAI Examples](https://platform.openai.com/examples)





