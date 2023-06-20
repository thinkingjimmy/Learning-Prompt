---
sidebar_position: 2
---

# ➕ 技巧2：增加示例

直接告知 AI 什么能做，什么不能做外。在某些场景下，我们能比较简单地向 AI 描述出什么能做，什么不能做。但有些场景，有些需求很难通过文字指令传递给 AI，即使描述出来了，AI 也不能很好地理解。

比如给宠物起英文名，里面会夹杂着一些所谓的名字风格。此时你就可以在 prompt里增加一些例子，我们看看这个例子：

```other
为一匹拥有超能力的马儿起三个名字。
```

回复如下所示。第一个和第二个感觉还行，第三个成了马术貌似与马儿名字无关。整体来看三个都比较一般，不够酷。

```other
1. 超能马
2. 飞驰神驹
3. 神奇马术
```

此时你就可以在提示语里增加一些案例：

```other
为一种拥有超能力的动物起三个名字。

动物：猫
名字：利爪队长、特工绒球、神奇猫侠

动物：狗
名字：护卫者拉夫、神奇犬侠、巴克爵士

动物：马
名字：
```

增加例子后，输出的结果就更酷一些，或者说是我想要的那种风格的名字。

```other
风驰电掣、神奇马侠、奔雷神骏
```

以下是一些场景案例，我们整理了两个"不太有效的" 和 "更好的" 的提示语，你可以自己尝试下这些案例：

<table><thead><tr><th width="127">场景</th><th width="160">不太有效的</th><th>更好的</th><th>原因</th></tr></thead><tbody><tr><td>起产品名</td><td><p>产品描述：一双适合任何脚型的鞋子。 </p><p>关键词：适应性强，合适，全尺寸适配。 产品名称：</p></td><td><p>产品描述：家用奶昔制作器 </p><p>关键词：快速，健康，紧凑。 </p><p>产品名称：家享摇摇机、健康摇摇机、速摇奶昔、摇摇大师</p><p><br>产品描述：一双适合任何脚型的鞋子。 </p><p>关键词：适应性强，合适，全尺寸适配。 </p><p>产品名称：</p></td><td>可以在下方运行这个案例，在不给示例的情况下 AI 会给你什么答案。</td></tr><tr><td>将电影名称转为 emoji</td><td>将《星球大战》转换为表情符号</td><td><p>将电影名称转换为表情符号。 </p><p>回到未来：👨👴🚗🕒 </p><p>蝙蝠侠：🤵🦇 </p><p>变形金刚：🚗🤖 </p><p>星球大战：</p></td><td>可以在下方运行这个案例，在不给示例的情况下 AI 会给你什么答案。</td></tr></tbody></table>