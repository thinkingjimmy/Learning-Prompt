---
sidebar_position: 3
---

# 技巧三：善用 Image2Image 功能

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