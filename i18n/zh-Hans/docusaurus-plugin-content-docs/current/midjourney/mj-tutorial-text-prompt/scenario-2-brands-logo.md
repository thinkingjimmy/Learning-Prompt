---
sidebar_position: 3
---

# 场景2：品牌 Logo

## 我们需要学习提示词吗？

前一章各位搞懂了基础 prompt 后，从本章开始就会教大家更多垂直场景的 prompt。关于垂直场景，我看到大量的教程和分享都是分享各种提示词，比如 Logo 相关的提示词有：

- modern
- minimalist
- vintage
- cartoon
- geometric

坦率地说，在我学习如何使用 Midjourney 的过程中，我一开始也以为只要看了别人的 prompt 用了别人的提示词，就能生成好的图片。

但对于新手来说，我不建议各位直接上来就记模版，记这些词。

因为写好一段 prompt ，你缺的不是提示词，**而是对设计的理解，甚至是想象力。**

比如本章节的 Logo 设计，如果你根本不知道 Logo 包含哪些元素，适合什么风格，你懂再多的提示词也没法生成满意的 Logo。正如我 Midjourney 教程前面提到的那样，Midjourney 跟 ChatGPT 不一样，ChatGPT 是声明式的，你甚至可以让它扮演某个角色，但 Midjourney 是指令式的，你只能用指令让它画出你想象中的图片。当你能很稳定地出图后，再研究这些词不迟。

对于普通人来说，真正阻碍我们的可能不是学会这些词语，而是我们的审美。

## 常见的品牌 Logo

常见的品牌 Logo 一般分成以下 4 种形式：

- Graphic Logo：一般以图形为主，像 Apple、Twitter 以及 Midjourney 就是这种 logo。
- Lettermark Logo：一般用公司名字的首字母作为 logo 主体，像 Facebook、Tesla 还有 IBM （IBM 全称是 International Business Machines）都是用公司名的首字母作为 logo。
- Geometric Logo：几何图形组成的 logo，比如 Nike、百事可乐、万事达卡就是这个类型。
- Mascot Logo：以公司吉祥物为 logo 的相对来说比较少见，像米其林的 logo 就是吉祥物轮胎人，我最喜欢的烤鸡餐厅 Nando’s 就是一只🐔

其实常见的品牌 Logo 里其实还有一种，是文字组合式的，文字加上面任意一种，比如 Tesla 的 完整 Logo 就是 Tesla 加一个 T。但因为 Midjourney 在文字的生成上，有非常多的问题，所以不在本章进行介绍。

![MJ024.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3FF9DD86-C008-49F0-908B-9D6C06497857_2/oNKsiYXidprqaCyAYGvEJkk93Y5DQ9Rx5c7gxrKgszQz/MJ024.png)

## Graphic Logo

当你想用 AI 生成 Logo 的时候，我建议你选一个你认可的方向，然后再让 AI 生成。

首先我们来分析一下 Graphic Logo 的特性：

1. Logo 类型：graphic logo
2. Logo 图形描述：比如猫
3. 风格：
   1. 多为扁平化设计：flat
   2. 多为矢量图形：vector graphic
   3. 简洁：simple

根据特性撰写的 prompt ，核心的关键就是将风格描述清楚：

```other
flat vector graphic logo of cat, simple minimal
```

Graphic Logo 还有一种常见的设计，比如前面的例子里 Midjourney 的 Logo 就是这种，只需要在 graphic 后加一个 line 即可：

```other
flat vector graphic line logo of cat, simple minimal
```

下方左边 4 个是没有加 line 的版本：

![MJ032.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/C745CB0E-D25E-43C0-BC5B-F884644841AA_2/RiPvMKr3P0b3mbjmy5oBckl60Uk2sw6pxjGej2yUiygz/MJ032.png)

## Lettermark Logo

这个根据我的实验，也试用了很多人写的 prompt，我个人的感受是，这种类型的 Logo 看起来简单，就一个字母进行变形，但让 AI 生成反而效果很一般，而且有一个算是比较有意思的发现，用 A 字母做出来的 Logo 质量比其他字母做出来的 Logo 质量要好很多（非严格按照数据统计，仅个人感受）。这个类型的 Logo 有以下特点：

1. Logo 类型：lettermark
2. Logo 图形描述：
   1. 纯字母
   2. 字体样式：可以按需加上喜欢的字体
3. 风格：
   1. 矢量
   2. 简洁：simple minimal

根据特性撰写 prompt（最后生成的是 A 和 C 的 logo，我个人感觉 A 的好很多），另外需要注意，这个例子其实是想说明，在 Midjourney 里，语法并不重要，lettermark 不一样要按照语法要求，写成 lettermark logo of letter A ：

```other
letter A logo, lettermark, typography, vector simple minimal
```

![MJ028.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F6B3BD42-9141-46DE-9C69-BC1E1994F9E9_2/8S6oy1xu2c7XbVXay3Tw82k5S7fWdvKO06743nWWjGkz/MJ028.png)

## Geometric Logo

这个类型的 Logo 相对来说，虽然只有图形，但有很多玩法，介绍两个常用玩法：

- 循环重复

如果你用的是 iPhone ，可以看看 iPhone 里的照片应用的 Logo，它也是一个 Geometric Logo ，而且它是椭圆图形旋转重复，最后组合成了一朵花的形状。拆解一下，关键词是：

1. Logo 类型：geometric logo
2. Logo 图形描述：
   1. 旋转重复：radial repeating
3. 风格：
   1. 简洁：simple minimal

让我们来写一个类似的 prompt：

```other
Flat geometric vector geometric logo of flower, petals radial repeating, simple minimal
```

- 渐变

另一个常见玩法就是渐变色，如果你用的是电脑的浏览器是 Edge，可以去看看它的 Logo，它的 Logo 就是一个渐变色，然后是个浪的外观。拆解一下，关键词是：

1. Logo 类型：geometric logo
2. Logo 图像描述
   1. 浪的形状：curved wave shape
   2. 蓝绿渐变：blue green gradient
3. 风格：
   1. 简洁：simple minimal

让我们来写一个类似的 prompt：

```other
Flat geometric vector graphic logo of curved wave shape, blue green gradient ,simple minimal
```

最后生成的结果是这样的，我很喜欢花的第三个，浪的第二个：

![MJ029.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/5D97972B-43C9-4162-902D-9B5DEEFB2B88_2/xEkxv0Bt1L7yWt2HfBmj9bilZqxUCWFdFRAxHYHhmi0z/MJ029.png)

## Mascot Logo

这种吉祥物类型的 Logo，我认为是 Midjourney 最擅长的 Logo 风格。但也非常考验我们的想象力，当然我们也可以仅提供一些比较简单的词语，让 AI 帮我们生成，让我们一起来为一个机器人公司写一个 Mascot Logo ，拆解一下 prompt 关键词：

1. Logo 类型：mascot logo
2. Logo 主体描述：比如机器人 robot
3. 风格：
   1. 简洁：simple

最后 prompt：

```other
a mascot vector logo of a robot, simple,
```

还有给一家泡面公司生成一个吉祥物又会怎样：

```other
simple mascot logo for a Instant Noodles company
```

以下是生成的结果，我很喜欢泡面公司的 logo：

![MJ030.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/63A21AD3-F378-4CBD-BBED-76BF6B148C98_2/DArxe0a2MxlhmOQs450lJL4rRFM3xmKjdlef7Wh0DBIz/MJ030.png)

## 技巧四：增加风格——艺术运动

> 因为篇幅的原因，本教程不会介绍特别多的风格，我会在我的[小红书账号](https://www.xiaohongshu.com/user/profile/6073d38d00000000010068a6?xhsshare=CopyLink&appuid=6073d38d00000000010068a6&apptime=1679646639)上更新。感兴趣的朋友可以去关注下。

前面生成的 logo ，有一些估计各位会觉得平平无奇，比如 Lettermark Logo，原因并不是 Midjourney 能力不强，而是我们给的指令太少了，只要在 prompt 里加几个单词，就能生成不一样的 Logo：
左边四个的 prompt 是这样的，我仅仅在原来的 prompt 上加了两个单词 Pop Art：

```other
letter A logo, lettermark, typography, vector simple, Pop Art
```

![MJ031.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/8A4D874C-EC41-40D0-B6CC-3BE64BF86D8C_2/s6gX0xQ1bLlOpxf7nWTvF5dxtj97VLXhayhDBTJxOA8z/MJ031.png)

Pop Art 是什么？

波普艺术（Pop Art，又译为普普艺术或通俗艺术），是一种起源于20世纪50年代和60年代的艺术运动，它强调对大众文化、大众媒体和消费主义文化的反思和表达。Pop 来自“流行艺术”（popular art）一词里的 popular，由1956年英国艺术评论家罗伦斯·艾伟（Lawrence Allowey）所提出。

Pop Art 的特点是：

- 它的内容主体一般是大众日常生活中常见的物品和图像，如广告标语、杂志封面、食品包装等。
- 一般用色比较大胆，同时线条比较简洁，强调物品本身的视觉效果和意义。

右边边四个的 prompt 是这样的，我在 prompt 里加上了 De Stijl 。

```other
letter A logo, lettermark, typography, vector simple,De Stijl
```

De Stijl 是什么？

它是一个荷兰艺术运动，始于 1917 年，致力于简化视觉元素，包括直线，平面和基本色彩。

它的成员包括画家 Piet Mondrian 和 Theo van Doesburg 等人。De Stijl 的成员致力于将艺术与设计融合，以创造出具有实用性和功能性的美学。

De Stijl 的特点有：

- 常常用几何图形进行设计，如矩形和直线。
- 用色基本只用基本色彩，比如黑、白、灰、红、黄、蓝。
- 追求平衡和和谐，强调形式和结构，不注重细节和表现力。

看完这些介绍，再看看 Midjourney 输出的 Logo 是不是有那味了？

