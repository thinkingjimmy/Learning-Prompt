---
sidebar_position: 6
---

# 技巧六：善用 no 参数，去掉不想要的元素

在徽章 Logo 的案例里，你应该还看过单色的徽章，比如校徽。但 Midjourney 有个习惯就是倾向于生成复杂的内容，生成单色内容，你可以在 prompt 里加入颜色，背景等等词，让其变得简洁。

还有一个技巧是用 no 参数。比如我想制作一个单色校徽，校徽主体是一本书，同时因为 Midjourney 对文字不是很擅长，我还要去掉 text。以下是我的 prompt，我在最后加了 no realistic color（没有颜色）text（字）。

```other
emblem for a university with large book, vintage --no realistic color text
```

然后我把上面那个 Instant Noodles company 的 prompt 也加了 no text，最后生成的两组图片是这样的（最后需要注意，no 参数在 logo 里使用时，--no text 有的时候会失效，但如果你去掉 — 直接输入 no text 就会生效，很神秘，估计是个 bug）：

![MJ038.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3BBFDC1C-3C18-4C91-8D74-FC2904B7665F_2/XYuI28qn00QDz7HxOwmHoRkRRZQRrC1jwNtRytEmvssz/MJ038.png)
