---
sidebar_position: 9
---

# 场景8：人物

## 名人照片

这算是 V5 的新特性，Midjourney 在 V5 版本认识很多名人，你可以在描述主体的时候，加上名人的名字，就可以生成该名人的照片，我们生成几个电影里的经典照片：

![MJ063.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/EB62943E-ADCC-4468-B60E-D169F0F3CF2B_2/xOETLxIXANtcgo60y3subblRZBPFAy2s1WiPfpD37tcz/MJ063.png)

第一个是 Keanu Reeves，第二个是 Vito Corleone（我并没有输入主演人 Marlon Brando），两组图的 prompt 都非常简单，你可以尝试自己写一下😁

本章最后有答案。

## 衣服模特

做衣服类电商的朋友可能会比较需要这个功能：

1. 用 AI 生成一个虚拟人
2. 然后将货物照片（比如某件衣服）传给 AI
3. AI 将虚拟人和货物的照片融合在一起

坦率说来，我觉得 Midjourney 应该是可以的，但目前的效果还不太好，要想实现这个需求，只需要用到前面介绍的技巧九里提到的 blend 功能，详细方法就不在这赘述了，大致就是我将商品图和人物图用 blend 功能融合了下：

![MJ062.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9FA8101B-B012-4339-BF1E-231EC942538F_2/njVETvNkyOeNowSlU3lxncBLQV9G5ZP7irNJSVFCUUwz/MJ062.png)

为了验证一致性，我生成了几张 Reeves 的图分别尝试了下，最后输出的结果是这样的：

![MJ064.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9B2361C9-2C05-484E-8BE8-FB0DCFA27DD3_2/txkN1BRQG3P7uEEEcl9DwmoRBa6PLiTrzOW9iLqay2Ez/MJ064.png)

整体来看，好像还行，但真的用在商品描述图里，我觉得还不太可能，因为里面的衣服跟原图差距还比较大（可以细看里面的纽扣）。

但我觉得未来 Midjourney 可能会优化好这个功能，并且我觉得如果可以自己训练模型，这个功能实现起来应该不难。

## 老照片

这个算是名人照片的分支玩法，最近大家应该看到过很多类似的照片，其实 prompt 很简单，主体和背景大家用翻译软件搞搞就行：

|         | **Prompt**                                            | **解释**                 |
| ------- | ----------------------------------------------------- | ---------------------- |
| 类型是什么？  | photography                                           | 照片                     |
| 主体是什么？  | a group of Chinese people gathered around Darth Vader | 一群中国人在围观达斯维达           |
| 环境是怎样的？ | on the street                                         | 大街上                    |
| 构图是怎样的？ | null                                                  | 不太重要，就让 AI 自由发挥        |
| 用什么镜头？  | fuji film                                             | 为了使得照片更有那味，增加了一个富士电影镜头 |
| 是什么风格？  | style of 1990s                                        | 增加了一个 90s风格            |

用类似的 prompt 生成了两组图片：

![MJ095.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/2D0E911B-A54D-4168-8AC1-D14C54229124_2/yhc7BPiRWsZZ0UmozWshXLiXe9QKkRpxzQi9xpR9v9cz/MJ095.png)

## 技巧十四：增加风格——年份

上面的老照片场景，我们用了 1990s 风格，严格地说，这个 1990s 更适合放在主体，或者环境里，放在风格里也不是不行，因为不仅仅希望主体是 1990s 还希望图片生成的风格也是 1990s。

这就是最后一种风格词用法：年代。

拿插画那一章的两个 prompt 修改一下，我都没在 prompt 里加艺术家的名字，而是改为 style of 1920s，玫瑰的图有点那味，猫的图右上角那张太逗了。

![MJ096.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/86D4276A-5254-4DC7-BC55-74559AFFF785_2/xwHZmIA6Z6NzghaKitsq6NbM2lo9EpgmeUAh46FLqSUz/MJ096.png)

## 名人照片答案

Reeves 很简单，就是说明主体，然后注明穿着标志性的衣服，走在大雨里：

```other
Keanu Reeves, wearing a black long leather coat, walking down the street in the rain
```

然后教父的那张就更简单了：

```other
Vito Corleone sitting on a chair
```

## 技巧十五：如何让 Midjourney 生成的人更具有多样性？

这里的多样性其实是指人的高矮胖瘦，甚至身体的一些特殊性等。

不知道各位有没有发现，大多数用 AI 生成的图片，人物都非常漂亮和英俊，但这并不好，这其实某种程度上代表了社会的偏见。

所以我想在本章重点介绍下，如何让 Midjourney 生成更多样的人体。

**方法一：Slider 方法**

在上一章，我介绍了增加权重的方法，这个方法还可以帮助你生成不同体型的人物，以下是 Midjourney 官方社区的案例：

```other
Plus-sized ginger female dressed in bohemian vest, maxi skirt, espadrilles, walking across autumn campus courtyard, morning atmosphere:: plus-sized::-0.3 --ar 2:3
```

你可以控制 plus-sized 后面的参数，从而使画面中的人物变胖或者变瘦。这里需要注意，并不是负数就是越瘦的意思，而是削弱了 plus-sized 权重，如果你的 prompt 词是 thin 你加个负数 slider 参数那就是变胖了：

![MJ119.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/FD1613E3-BD48-4D41-91C8-A0EA057B6883_2/exEgBwvmyRPyzadeRHy7BBJN7uLVk71FBNXHC0trXR4z/MJ119.png)

**方法二：直接描述**

Midjourney 是知道一些多样性的词语的，比如：

- blind：失明
- deaf：聋
- cerebral palsy：小儿麻痹
- accessibility：行动不便

![MJ120.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/9770FDB6-F9D3-40EC-AB4B-2D6CA7AC58CD_2/lQyNTkK4OxqTtO9HwtyH5yu7qP7qu7DfTyRsxPsaF4Qz/MJ120.png)

