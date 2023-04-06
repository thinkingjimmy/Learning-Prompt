---
sidebar_position: 8
---
# 技巧八：使用 Seed 参数对图进行二次修改

注意：这个技巧，我个人觉得未来潜力比较大，但目前 Midjourney 的实现效果还比较一般，效果得不到保证。官方的社区的帮助文档也提到这个功能在 V5 非常不稳定。详细可以看看我整理的 Midjourney 官方 FAQ 一章。

你可能遇到类似这样的场景：

1. 你输入一段 prompt，机器生成了 4 张图片
2. 你看了下4张照片，发现其中有一张还行，但其余不是很满意，然后改了下 prompt，机器又生成了一些
3. 但这次生成的照片你都不满意，你就很烦恼为何会这样
4. 然后你就像为啥不能在第一次生成图上做修改呢？

基于某一次生成的结果进行二次 prompt 修改，理论上我认为是可以的，以赛博朋克头像为例，我先用上述 prompt 生成了四张图片，然后在消息的右上角点击 emoji 按钮（下图1），然后再输入框里（下图2）输入 envelope，然后点击信封 emoji（下图3），接着 bot 就会将 seed 号码发给你。

![MJ040.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A81C7114-3DD6-4EB3-A4BA-FBB1A68713CC_2/MybA70bYUjrlgsScqvQUbkdVbbftxkf40OPdtEHsGdkz/MJ040.png)

然后我修改上面的赛博朋克头像的 prompt，将其背景改为 China Town，此时需要注意：

1. 新的 prompt 并不是只改 background，你需要将之前的 prompt 都带上。
2. prompt 仅修改 background 的部分。
3. 最后带上 seed 参数。

以下是我的案例：

原 prompt：

```other
{img url}  avatar, cyberpunk robot face, holographic VR glasses,holographic cyberpunk clothing, neon-lit cityscape background, Cyberpunk, by Josan Gonzalez --s 500 --iw 1
```

新 prompt（seed 码只是示例，你要填写自己的 seed）：

```other
{img url}  avatar, cyberpunk robot face, holographic VR glasses,holographic cyberpunk clothing, China Town background, Cyberpunk, by Josan Gonzalez --s 500 --iw 1 --seed 758242567
```

以下是生成的效果（左图为原图，右图是用了 seed 后生成的图），可以看到，背景的确换了，但人的外观也有点变化 😂

效果不是很好，但我觉得值得探索，这样能提高渐进优化的成功率：

![MJ041.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/56857A8C-7F46-4631-BEAA-696EE75C3A4E_2/FLBeKQqjyzfqEIyRyHUon4bg0JOXdteAPE7TgjsrZ60z/MJ041.png)

