---
sidebar_position: 2
---

# 场景1：Stock Photo

Text Prompt 的部分，我删除重写了 3 遍，每次写完都不太满意。前两遍，我都希望通过一个或几个万能模板教会大家写 Midjourney 的 Text Prompt，但实际试了很多遍后，我发现：

1. 图片信息量非常大，万能模板的确让你生成一张及格的图片，但很难让你生成一个完全满意的图片。
2. 要想生成一张高分图片，需要的不仅仅是 prompt engineering，甚至还需要一些美学知识，不同场景参数的使用都是不一样的，所以有些时候，用模板反而有点死板。

所以，我不想直接教大家所谓的万能模板，而是通过一个个实际场景教大家如何写好 text prompt ，因为不同场景，你告知给模型的信息是不一样的。

而且我认为，知道为什么，远比知道怎么做更重要。当你知道为什么后，遇到新的场景，你也能很好地解构出 prompt 里需要什么，而不是盲目套模板。

最后，图片场景有非常多，我会尽量分享一些大家日常工作中能用上的。希望能让 AI 提高你的工作效率，而不是用完即弃的玩具。

Text Prompt 开篇介绍一下 Midjourney V5 提升较大的 Stock Photo 场景。

## 什么是 Stock Photo？

Stock Photo 直译为图库图片。一般你能在一些图库网站上找到，这些图片通常来自一些摄影师或设计师。部分图片因为版权的原因，如果你需要使用则需要付费。

大部分使用 Stock Photo 的用户都是一些设计公司，或者广告公司。你应该常常能看到这类图片，比如最经典的两人握手照片：

![MJ019.jpeg](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/ABFCBA68-C353-43B5-B0D8-EB8CA8B93718_2/DOoxcVSfiXgkl66z77M8vPNbxQSbpXzBTPEh7I5FFWkz/MJ019.jpeg)

我认为 AI 生成图片对图片库冲击非常大，V5 版本基本上满足了我的 Stock Photo 需求。

## 技巧一：临摹

我认为学习图片类的 prompt，跟学习画画是类似的，最好的学习方法不是直接用模板。

而是拿真图，或者别人生成的图来临摹。英文不好，也可以先写中文，然后让 ChatGPT 翻译。当你临摹了几张后，你就会慢慢搞懂如何做出类似的图了。

拿上面的那个握手图为例，我们仔细观察上面那张图，图中元素有什么：

1. 第一主体是两个手，然后握在了一起，并且看起来是两个亚裔男人。
2. 第二两人都穿着西装。
3. 第三背景看上去像是在办公楼的大门，两人可能是在握手告别。并且背景刻意进行虚化了，或者是使用照相机拍摄的。

![MJ020.jpeg](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/861C8258-85BF-40A9-8389-5583F653CF3D_2/koWtZdjhYPCuvk8y9wbOckqwLISoCxZzDogBJVFLgAgz/MJ020.jpeg)

再归纳总结下，大概的信息：

- 主体：两个穿着西装的亚裔男人在握手告别
- 场景：办公楼大门
- 图像风格：stock photo，照相机拍摄，

这时候，我们就能尝试写一下 prompt 了（如果你觉得自己英文水平还不太行，也可以尝试用翻译软件翻译）。

```other
stock photo of two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building,taken with Canon
```

Midjourney 生成的结果如下所示。

Emm 🤔 好像跟我们的预期不一样。不要慌，刚开始用 Midjourney 一定会遇到这种问题，重要的是多尝试。

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E398A4A0-ECBB-4592-8CAA-AE68AED3FCCC_2/srcSfwZqzcgOymCyOlvnAMVi1okc5zsoKI3eSfA6kh8z/MJ021.png"
    } 
    style={{width: 500}} 
/>

我们再来分析下 Midjourney 为何生成了这样的图片？复盘下：

1. 首先图片的主体，或者说焦点，我们只需要「握手」，而不是两个人。
2. 照相模式好像并不能实现背景虚化？更像是一种图像风格，图四就像是一种老照片的风格。

那我们调整下 prompt，增加焦点和背景虚化关键词：

```other
stock photo of two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building, focus on two hands, taken with Canon, background bokeh
```

再来看看生成的结果，结果好很多，图 1 和 图4 基本满足需求了，图 2 和图 3 裁剪一下，也能满足我们的需求。不过需要注意，Midjourney 在人手的生成上，暂时还有点问题，你细看图 2和图 4，其中有一个人的手有 6 个手指 😂，但我认为未来应该会修复：

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/4931E039-2B61-49DB-98C1-B524E780BBC3_2/W6jeVicuOIl0RU7EqpXP71NeJ8BWY3FHgXoxFobCQmMz/MJ161.png"
    } 
    style={{width: 500}} 
/>

那我们来总结一下 prompt ，该 prompt 分成以下几个部分：

![MJ022.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/07B84FDC-3494-4173-824F-92CABFDD9CA8_2/WZmCoU5tVeOGV6wnngJkFfzyIed10o5tKIWDar54D9gz/MJ022.png)

- 第一部分（红色线）：描述你想要的内容主体。
- 第二部分（蓝色线）：描述主体背景/环境。
- 第三部分（黄色线）：照片的焦点位置。
- 第四部分（绿色线）：照片的风格或者说是特殊要求。

总结下之后，你是不是就总结出了一个模板了？😁

## 技巧二：多实验

上述的案例，我还想教给各位第二个技巧：多试验。

图片生成遇到不符合预期的情况，不要慌，分析问题，然后使用控制变量法，一个个调整图片，不要急，上面我写的 prompt 还有一个地方，不知道各位有没有注意，就是开头的 stock photo，试试将这两个词删掉会怎样？

```other
two Asian men in suits shaking hands,say goodbye in front of the main entrance of the office building, focus on two hands, taken with Canon, background bokeh
```

生成结果也依然满足需求，而且手指的数量也准确了，说明这个 Stock Image 对模型的影响不是很大。

<img 
    src={
        "https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/BBB1BC5B-BDE3-4034-B297-46D10CEC44D6_2/iH9AHSuCO6bCVxInVZvgbnybwNXUTbwkjT9Bjumf36Mz/MJ023.png"
    } 
    style={{width: 500}} 
/>

## 技巧三：善用 Image2Image 功能

在 Stock Photo 场景里，还有一个非常厉害的技巧，这个方法我一开始觉得不太适合教，因为这个对 Stock Photo 库影响太大了 😂

但本着工具中立的原则，并且这个技巧，其实在很多场景都能用（比如生成头像等），所以还是觉得有必要教给大家。

各位一般用 Stock Photo 库会遇到以下几个问题：

1. 图有版权，没法商用，或者说需要付费。
2. 有些图，被很多人用过，其他人一眼就看出来这是 Stock Photo。
3. 图里的内容大体符合要求，但细节不符合要求，比如上图两个亚洲男性握手，可能换成一男一女，且其中一人是黑人会好一些。

要解决这三个问题，最好的方式就是让 AI 改一改原来的图片。让 AI 改图，只需要用到 Image2Image（或者叫 Blend） 功能即可。操作步骤如下：

:::info

后来在某书刷到类似的教程，我才知道这个方法大家一般叫垫图。老外好像一般都叫 Image2Image，或者 img2img。

:::

1. 将你看到的不错的 stock photo 发给 Midjourney Bot（我还是以前面的那张握手照为例）
2. 右键复制该图片的链接，然后黏贴到输入框
3. 在链接后加个空格
4. 接着输入你想要的内容，比如将其中一个人的手换成黑人，一个人换成女性：

```other
one Afican-American hand and one Asian woman hand
```

生成的结果是这样的，我在 prompt 里没有提任何西装，以及场景背景信息，就说我要一个非裔的手，一个亚裔女性的手：

![MJ162.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/B9BD4D78-6C58-4A4A-8433-9D562A949CBB_2/xb58eLg0qFxYh6JyyMs4HpXvI1oFxcWfDDXi70zpY1Az/MJ162.png)

抛开6 根手指的问题，这个技巧是不是很高效？不过需要注意，blend 功能（这个后续教程会讲到）我发现更适合两张图融合，图片+文字不是很稳定，各位要有耐心，多测试一下。

