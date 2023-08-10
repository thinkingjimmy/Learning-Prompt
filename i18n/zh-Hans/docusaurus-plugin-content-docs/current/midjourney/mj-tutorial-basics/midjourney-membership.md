---
sidebar_position: 5
---

# 订阅 Midjourney 会员

## 如何订阅？

你可以在 Midjourney 的服务器，或者 Midjourney Bot 聊天窗口，输入 /subscribe，然后按下回车：

![MJ010.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/FF0900C2-310C-4919-877B-CE0C5AD57201_2/GYoKiAcee0vFK7gsuffsxLzk9PsopzvV1cvJORt4lEEz/MJ010.png)

然后 Bot 就会发送这样的消息，点击 Open subscription 按钮就能进入到付费页面了：

![MJ011.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/26F1A0DD-C603-41E0-8D2B-1205A1A7658B_2/pYHGFSwBpsnJk9CP2LrhG15wzfZ7z2872Nzqf4kxf0sz/MJ011.png)

付费的过程还比较简单，我这里就不做介绍了，只是需要注意，Midjourney 的付费功能用的服务提供商是 Stripe ，目前应该只支持信用卡支付，所以如果要买会员需要有一张信用卡。

## 各套餐之间的差异有哪些？

我把差异的都总结在下表（数据截止至 2023-03-28）：

|                      | **Basic Plan**           | **Standard Plan** | **Pro Plan** |
| -------------------- | ------------------------ | ----------------- | ------------ |
| 月付价格              | $10 / month              | $30 / month       | $60 / month  |
| 年付价格              | $8 / month               | $24 / month       | $48 / month  |
| Fast Generations     | 3 hours 左右（大约能生成 200 张图） | 15 hours          | 30 hours     |
| Concurrent Fast Jobs | 3                        | 3                 | 12           |
| Relaxed Generations  | ❌                        | ✅                 | ✅            |
| Stealth Mode         | ❌                        | ❌                 | ✅            |

首先，Midjourney 的计费跟 OpenAI 不太一样，OpenAI 计费用的是 Token，Midjourney 用的计费方式是时间，因为其主要的成本在 GPU 计算，Midjourney 采用这种方式，估计也是因为他们的 GPU 也是租的，租用 GPU 的费用也是按时间计算，所以转嫁到消费者上也按照时间算了，Basic 版本看后台，Fast Generation 的时间是 3h 20 min，然后官方说明是应该能生成 200 多张图。

不过每张图所耗的 GPU 时间并不固定，还取决于你的图片质量等，影响费用的因素有以下几种，各个参数对应的影响，可以查阅教程里关于参数的内容。我这不展开解释，简而言之，图片质量越好，个性化因素越多，价格就越贵。

|                         | **低于平均价格**                    | **平均价格**      | **高于平均价格**                        |
| ----------------------- | ----------------------------- | ------------- | --------------------------------- |
| 不同任务                    | Variations（就是生成图片后，图片下的 V 按钮） | /imagine 生成图片 | Upscale（就是生成图片后，图片下的 U 按钮）        |
| Aspect Ratio 长宽比        |                               | 默认            | tall or wide（换句话说，改这个参数就要花更多的钱）   |
| Model Version 模型版本      |                               | 默认（—V 4）      | —test or —testp 这两个模型会更贵一些，我一般很少用 |
| Quality Parameter图像质量参数 | --q 0.25 or —q 0.5             | 默认（—q 1）      | —q 2                              |
| Stop Parameter停止参数      | --stop 10 到 —stop 99           | 默认（—stop 100） |                                   |

然后 Standard Plan 开始还有一种叫 Relaxed Gerneration 的模式，这种模式下，该套餐付费用户，可以无限出图，但图片生成的速度会变慢，按照官方解释是 0-10 分钟。

其实本质上它是一种 GPU 空闲资源排队方案，切换到 Relax 模式下，所有生成图片请求会进入到一个排队等待状态，当没有 Fast 模式下的用户使用 GPU 时，就会将 GPU 资源给 Relax 模式的用户，所以才需要等待那么长的时间，本质上是闲置资源的利用 。

另外需要注意：

1. 你用得越多 Relax 模式，你等待的时间就越长，这个有点像是手机运营商的无限套餐逻辑，流量达到某个阈值就会降速，所以如果你是和他人合购账号，就需要注意了，Fast 时间基本上就是先到先得，Relax 模式越用会越慢。
2. 即使你上个月底已经切换为 Relax 模式，每个月的月初，系统也会自动将模式切换为 Fast 模式。

最后还有一个 Stealth 模式，Midjourney 是一个默认开放的社区，所以你在 Midjourney 上生成的图片（包括你私聊 Bot 生成的图片），都是公开的，你可以在会员 Gallery 那看到所有人生成的图片。

只有 Pro 版本可以不公开自己的图片到 Gallery，另外还有一点需要注意，如果你打开了 Stealth 模式，然后在 Midjourney 的 Discord 公开频道生成图片，Stealth 模式不生效，生成的图片依然会被 Discord 公开频道里的人看见。

