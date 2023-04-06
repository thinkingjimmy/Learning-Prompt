---
sidebar_position: 7
---

# 场景6：游戏

## Prompt 真的越长越好吗？

按照 Midjourney 的官方文档里的说法，并不一定：

> Prompts can be very simple. Single words (or even an emoji!) will produce an image. Very short prompts will rely heavily on Midjourney’s default style, so a more descriptive prompt is better for a unique look. However, **super-long prompts aren’t always better.** Concentrate on the main concepts you want to create.

但你会发现，好像中文社区分享的 prompt 都非常长，但只要各位仔细观察，或者用翻译软件查一查，你会发现很神奇的事情：

1. 有一些词拼写错误。原因是某书，不支持复制黏贴，导致很多人 OCR prompt，然后识别错误，大家都在搬运 prompt ，导致错误一直传递，这也算是新时代的水印了吧。
2. 有一些词非常重复，比如 8k、UHD、Ultra Quality，他们都在说一个事情，就是高清，加多了也不会有叠加作用。
3. 很多词你根本不知道为啥需要，但好像每个人都加了。比如 8K 这些词，你有想过这个词是有必要的吗？是有用的吗？但实际上这些词官方并不推荐使用，这些词甚至对你的图会造成破坏（详见 Midjourney 官方 FAQ 一章）。

如果你看完我的教程，你会发现我讲的例子里，很多图只要很少的 prompt 就能描述清楚，生成的图片也不差。

当然我并不是说，不能写很长的 prompt，如果你生成的内容本来就很复杂，那写长一点也没所谓，但写完问问自己，这有必要吗？

## 像素游戏

说到游戏，我最喜欢的风格是像素风，像素风格一般有：

- 8-bit
- 16-bit
- 32-bit

各位都可以自己试试，介绍一个我写的 prompt，最近塞尔达发布了最新作《王国之泪》，很喜欢他们的天空岛的设定，所以用 Midjourney 生成了一个 16-bit pixel art 版本：

|         | **Prompt**                          | **解释**                         |
| ------- | ----------------------------------- | ------------------------------ |
| 类型是什么？  | 16-bit pixel art                    |        16 bit 风格       |
| 主体是什么？  | island in the clouds, ancient ruins | 天空岛，岛上有遗迹                      |
| 背景是什么？  | null                                | 主题描述里其实已经有背景了（clouds），所以我就没重复写 |
| 构图是怎样的？ | null                                | 不太重要，就让 AI 自由发挥                |
| 用什么镜头？  | null                                | 不太重要，就让 AI 自由发挥                |
| 是什么风格？  | Zelda style                         | 因为是复刻塞尔达，所以加了塞尔达风格             |
| 参数      | null                                | 没有加任何参数                        |

再生成一个宠物小精灵的场景：

|        | **Prompt**       | **解释**                |
| ------ | ---------------- | --------------------- |
| 类型是什么？ | 8-bit pixel art  | 换成了更复古的 8 bit 风格      |
| 主体是什么？ | types of Pokémon | 我想让 AI 生成宠物小精灵图谱一样的内容 |

这两个 prompt 都很短，但很有意思，可玩性挺强的，各位可以多玩玩：

![MJ047.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/42038F81-4724-492D-8E3E-207D4F323282_2/ZCwPyjZXmrHBUUqBbyAhsUaM1RBQPTrC2YlSymAwmMEz/MJ047.png)

## 3D 游戏——场景

因为篇幅的原因，我无法将所有有关 3D 游戏的 prompt 都介绍完，我只能挑选一些我比较喜欢的风格讲一下，而且我不是专业的 3D 设计师，所以未免会有讲错的地方，望见谅。

在 3D 场景设计里，我最喜欢的应该是像素风 3D 微缩场景，也不知道是不是叫这个名字😂，写一个 prompt 给大家看看：

|         | **Prompt**                | **解释**                        |
| ------- | ------------------------- | ----------------------------- |
| 类型是什么？  | isometric clean pixel art | 这个风格我是问了 ChatGPT 的，不确定是不是叫这个。 |
| 主体是什么？  | robotics lab              | 机器人实验室                        |
| 背景是什么？  | null                      | 不太重要，就让 AI 自由发挥               |
| 构图是怎样的？ | null                      | 不太重要，就让 AI 自由发挥               |
| 用什么镜头？  | null                      | 不太重要，就让 AI 自由发挥               |
| 是什么风格？  | null                      | 我在类型里提了，所以不需要重复强调             |
| 参数      | null                      | 没有加任何参数                       |

以下左图是火星工厂，右图是机器人实验室：

![MJ065.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F8FEDD52-A5C0-4DC1-9272-DDAD1516C1A7_2/KzXpDhwHszpx2U4irBAB2duycySJNwaAe9VFBPHWz6gz/MJ065.png)

## 3D 游戏——人物

主体描述我就不多说了，更多是分享 3D prompt 的必要的要素：

|    <div style={{width:180}}></div>     | **Prompt**                  | **解释**                                                                                                             |
| ------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 类型是什么？  | blender 3d                  | 我测试了下，只写 3d 也行，但不知道为啥没那味，加了 blender（一个 3D 建模软件）就会好很多。                                                              |
| 主体是什么？  | Dark Vader, full body, cute | 达斯维达的全身像，然后我希望它生成一个 Q 版的                                                                                           |
| 背景是什么？  | null                        | 不太重要，就让 AI 自由发挥                                                                                                    |
| 构图是怎样的？ | isometric                   | 等轴侧投影，这是一种用二维平面呈现三维物体的方法，效果可以看后面生成的图片，各位就知道是啥了。                                                                    |
| 用什么镜头？  | null                        | 不太重要，就让 AI 自由发挥                                                                                                    |
| 是什么风格？  | Pixar, style of artstation  | 我这里加了皮克斯风格，以及跟之前讲插画的那章加了 behance 类似，加了 artstation 后效果有变好（artstation 跟 behance 类似，也是设计师分享作品的一个网站，但主要分享 3d 或游戏相关的内容） |
| 参数      | null                        | 没有加任何参数                                                                                                            |

我用以上 prompt 生成了达斯维达和风暴兵的，我觉得风暴兵还挺可爱的：

![MJ048.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/63438D30-C24E-4148-886D-9C6A1D302588_2/kSt6iyB2qKSrgCxCAHXzmbbyTl2dQvZ8ap0bBCBMMosz/MJ048.png)

## 3D 游戏——装备

游戏装备非常非常多，我没法一一给大家介绍，只介绍一些我了解的，首先是戒指，多大数的游戏戒指都是那种印章戒指（signet ring），

|         | **Prompt**            | **解释**          |
| ------- | --------------------- | --------------- |
| 类型是什么？  | blender 3d            | 这个可加可不加         |
| 主体是什么？  | star war, signet ring | 星球大战的印章戒指       |
| 背景是什么？  | null                  | 不太重要，就让 AI 自由发挥 |
| 构图是怎样的？ | isometric             | 等轴侧投影（这个可加可不加）  |
| 用什么镜头？  | null                  | 不太重要，就让 AI 自由发挥 |
| 是什么风格？  | null                  | 不太重要，就让 AI 自由发挥 |
| 参数      | null                  | 没有加任何参数         |

另外一个可能常见的是装备集（我不确定这个中文是否正确，英文叫 Item Collections），写法是这样的：

|         | **Prompt**                  | **解释**                                |
| ------- | --------------------------- | ------------------------------------- |
| 类型是什么？  | blender 3d, game sheet      | game sheet 简单说是那种游戏设定图，一般就是罗列各种装备     |
| 主体是什么？  | lightsabers, paladin armor, | 希望生成一些列的星球大战的光剑和圣骑士盔甲                 |
| 背景是什么？  | null                        | 不太重要，就让 AI 自由发挥                       |
| 构图是怎样的？ | null                        | 类型包含了，所以不用填                           |
| 用什么镜头？  | null                        | 不太重要，就让 AI 自由发挥                       |
| 是什么风格？  | style of Hearthstone        | 我很喜欢炉石传说的风格，也很好奇，中古风格，遇上未来题材，会生成怎样的设计 |
| 参数      | null                        | 没有加任何参数                               |

最后生成的结果如下，但我对装备集的生成不是很满意，后面我会介绍一个技巧，教大家如何渐进优化生成的图片：

![MJ050.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/433C0BD6-C942-4976-A8C8-63BCDA338383_2/VmIwLbFyJhOrxyQDPqOexk9moWmXulLNoyHGYbrBeHgz/MJ050.png)

## 技巧十：控制变量法渐进优化

很多人把 AI 生成图片比喻为炼丹，我觉得非常贴切，很多时候，也不知道为啥，在 prompt 里加一点神秘配方，图片就会很不一样。

不过我觉得虽然过程很像炼丹，但并不代表我们需要像古人那样，用撞大运的方式炼制丹药。我认为目前使用 Midjourney 最好的方法是：控制变量渐进优化法。

拿上面那个装备集的图片为例，我希望它生成的是装备，并且是一件件地排布，而且光剑的效果也很奇怪，首先我们来逐条排查 prompt：

|   <div style={{width:180}}></div>      | **Prompt**                  | **检查**                                                                        |
| ------- | --------------------------- | ----------------------------------------------------------------------------- |
| 类型是什么？  | blender 3d, game sheet      | 这个好像有点问题，我希望的炉石传说的风格，好像不是这种精致的 3D 效果，生成的风格更像是星际争霸的，而炉石传说是那种黏土风格（clay render）。 |
| 主体是什么？  | lightsabers, paladin armor, | 这里可能也有问题，会不会是没有写 different types of lightsabers 导致只生成一种光剑。                    |
| 背景是什么？  | null                        | 这个应该没啥问题                                                                      |
| 构图是怎样的？ | null                        | 这个应该没啥问题                                                                      |
| 用什么镜头？  | null                        | 这个应该没啥问题                                                                      |
| 是什么风格？  | style of Hearthstone        | 感觉生成的图没有那种中世纪盔甲的油腻感，但如果前面改了黏土风格，会不会好一些？这里可能也需要优化下。                            |
| 参数      | null                        | 这个应该没啥问题                                                                      |

从这个表里可以看到，我们发现了三个问题，其中第一个黏土风格问题，跟最后一个问题有关，此时我的建议是：

1. 每次仅修改一个，其余变量不变。
2. 修改完一条，效果符合预期后，再修改下一个。
3. 我的经验优先修改主体内容，因为主体有的时候会影响其余的变量。
4. 如果想确定这个修改是否具有一致性，或者说是否符合要求，而不是恰巧符合，可以用相同的 prompt 再生成一次。不过因为没生成一次都要花钱，所以这个是可选项。

OK，按照以上原则，我们修改一下我们的 prompt，看看生成了什么，的确加了 different types of 后，光剑就多了，问题解决了：

![MJ051.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/D9C6275A-84EE-42EC-9509-F43E60C9B66F_2/pGbPtLPgN7zTTZlDFgNVexGZ4BxTGtiE3vy0jdlY5CIz/MJ051.png)

然后我们修改下 blender 3d，将其改为 clay render （黏土渲染），我改完之后发现生成的结果（左边四张），好像质感还是差了一点，于是我又试了下保留 3d blender 加 oily 的效果（中间四张），以及 clay render 加 oily 两个一起用（右边四张）。

![MJ052.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/ADB20BDA-306A-43F7-90E0-DEBC3DA471CE_2/xGfjCTVHUxQI4j1CVceShaJEMymax4oa3NxxPccCI1wz/MJ052.png)

我个人觉得好像两个都改了效果是最好的（右边四张）。

对比一下最开始的 prompt 生成的图片，是不是最终的图片效果更好？所以这个技巧主要想告诉大家，写 prompt 没有必要照抄答案，你也有能力自己写好 prompt。

## 游戏设定稿

游戏这一章，再介绍一个可能会用到的一个场景人物设定稿，prompt 如下：

|         | **Prompt**                        | **解释**                            |
| ------- | --------------------------------- | --------------------------------- |
| 类型是什么？  | concept design sheet           | 设定稿                               |
| 主体是什么？  | female paladin, character design, | 生成一个女性圣骑士的角色设定                    |
| 背景是什么？  | white background                  | 设定稿一般都是白底的                        |
| 构图是怎样的？ | null                              | 类型包含了，所以不用填                       |
| 用什么镜头？  | null                              | 不太重要，就让 AI 自由发挥                   |
| 是什么风格？  | null                              | 因为我对游戏相关的风格和设计师都不熟悉，所以就让 AI 自由发挥了 |
| 参数      | null                              | 没有加任何参数                           |

最后的结果如下：

![MJ056.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/0FFAEF59-6D98-4DDD-A8B2-15DFF4C0271F_2/cXK5a350kBkbeayVgwFSlaAQoj8cQrDDlYRRIxlxrkgz/MJ056.png)

