---
sidebar_position: 11
---
# 场景10：动漫

刚好，在写这一章的时候，Midjourney 发布了其 Niji 的 V5 版本，所以我以下 prompt 我都会在 —niji 5 的参数下运行。

## 多种 Anime Style

在 niji 5 模型下，默认生成的内容都会自带 Anime 风格，你可以在 prompt 语句的风格部分中添加国家、年代和创作者，还有一种方法是加动漫风格，根据 [Midlibrary](https://www.midlibrary.io/midguide/niji-anime-version-of-midjourney-v4) 的统计，Midjourney 支持的 Anime Style 超过 120 多种。

我这里就不罗列了，详细的列表可以看我整理的 List 或者直接去 Midlibrary，它们总结的是真的好。

我这里只分享几个我觉得不错，且模型支持得也不错的风格（prompt 主体都是 Statue Of Liberty**）**：

| <div style={{width:180}}>**照片**</div>  | **名称**                     | **介绍**                                                                                                                                            |
| ------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
|  ![MJ128](assets/MJ128.png)      | Chibi Anime Style          | Chibi Anime Style 是指卡通迷你风格。是一种独特的绘画风格，特别受到日本动漫迷和卡通迷的喜爱。该风格的特点是将角色绘制成缩小版的样式，更加可爱和卡通化。在这种风格下，一些角色的头比正常比例大得多，人物的描绘也更加简化，并且动画在绘制时常常用短暂时间的快速动作来传递动态效果。 |
|  ![MJ129](assets/MJ129.png)      | Gakuen Anime Style         | Gakuen Anime Style是指在日本动漫中常见的一种风格，主要呈现校园生活与高中生活的情境。这种风格的作品通常涉及到学生会、文化节、恋爱、友情、竞争等校园主题，角色也往往是年龄在16-18岁之间的学生。                                        |
|  ![MJ130](assets/MJ130.png)      | Gekiga Anime Style         | Gekiga Anime Style是一种比较沉重、严肃的日本漫画风格，常常涉及社会问题、人生哲理等成人主题。这种风格的特点是以黑色、灰色为主色调，图像表现力较强，人物表情和行为也更加真实。                                                   |
|  ![MJ131](assets/MJ131.png)      | J Horror Anime Style       | J Horror Anime Style是指恐怖题材的日本动漫风格，这种风格的作品常常涉及灵异、鬼怪、妖怪等超自然力量。                                                                                      |
|  ![MJ132](assets/MJ132.png)      | Jidaimono Anime Style      | Jidaimono Anime Style是指日本历史剧题材的动漫风格，通常呈现古代日本的历史背景和文化特征。这种风格的作品往往描绘战争、家族斗争、忍者、武士道、神话传说等元素，以及用具有浓重日本特色的艺术表现手法来传递历史文化的内涵。                            |
|  ![MJ133](assets/MJ133.png)      | Kawaii Anime Style         | Kawaii Anime Style是一种非常可爱和萌的动漫风格，通常呈现出像动物、小孩、角色等可爱的形象。这种风格的作品以颜色鲜明、轮廓粗糙、脸部表情夸张为主要特点。                                                              |
|  ![MJ134](assets/MJ134.jpeg)      | Mecha Anime Style          | Mecha Anime Style是以机器人为主题的日本动漫风格，通常呈现出大型机器、机甲战争、铁甲舞者等元素。这种风格的作品常常运用科幻、未来世界设定、大规模战斗等元素，以及动态的战斗场面和机器人设计，塑造出复杂的机器人世界和角色人物关系。                         |
|  ![MJ135](assets/MJ135.png)      | Realistic Anime Style      | Realistic Anime Style是一种真实主义的日本动漫风格，通常呈现出秉持着更加现实和真实的人物形象和情节。这种风格的作品表现力很强，人物形象、环境场景等具有更多的细节，刻画出更为真实的情感世界。                                          |
|  ![MJ136](assets/MJ136.png)      | Semi-Realistic Anime Style | Semi-Realistic Anime Style是在Realistic Anime Style和 Anime Style之间的一个中间状态的风格，风格上比较真实，但是仍带有一定的动漫风格。这种风格的作品通常涉及到带有现实性的情节和人物，但是也常常运用到动漫风格的表现手法。        |
|  ![MJ137](assets/MJ137.png)      | Shoji Anime Style          | Shoji Anime Style是按照日本漫画家小学馆长生涯逐步形成的一种风格。这种风格的作品，通常以聚焦单个人物或小团体的故事为主线。其特点是画面明亮，颜色和谐，人物表情和行为搞笑夸张，情节简洁易懂。                                            |
|  ![MJ138](assets/MJ138.png)      | Kemonomimi Anime Style     | Kemonomimi Anime Style是一种带有动物耳朵和尾巴等特征的日本动漫风格，通常以人类或近似人类的形象呈现，但却带有不同种类的动物耳朵和尾巴等特征。这种风格的作品与少女漫画(girls' manga)、少年漫画(boys' manga)等风格都有一定的关系。          |

## 将图片转为动漫风格

这个用到我们之前教的 img2img 功能，你只需要在 prompt 里加入图片 URL，然后加上以下 prompt 即可（为了更像原图，我加了 iw 参数）:

```other
panel from manga --iw 2
```

另一个我加了Naoko Takeuchi（美少女战士的作者），模型还是不善于生成人手：

![MJ139.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F7D11C92-7C2C-4228-81B3-4E66568304DA_2/iSy3AUZE4Px5izMSe7S7wA9msByQKRl5i8gCxObyg7wz/MJ139.png)

