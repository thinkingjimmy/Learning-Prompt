---
sidebar_position: 5
---

# Subscribe to Midjourney Membership

## How to subscribe?

You can subscribe to Midjourney by typing /subscribe on the Midjourney server or in the Midjourney Bot chat window, and then pressing Enter:

![MJ010.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/FF0900C2-310C-4919-877B-CE0C5AD57201_2/GYoKiAcee0vFK7gsuffsxLzk9PsopzvV1cvJORt4lEEz/MJ010.png)

The Bot will then send a message like this, click the Open subscription button to go to the payment page:

![MJ011.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/26F1A0DD-C603-41E0-8D2B-1205A1A7658B_2/pYHGFSwBpsnJk9CP2LrhG15wzfZ7z2872Nzqf4kxf0sz/MJ011.png)

The payment process is quite simple, so I won't go into detail here. However, please note that Midjourney's payment provider is Stripe, which currently only supports credit card payments. Therefore, you will need a credit card to purchase a membership.

## What are the differences between the packages?

I have summarized the differences in the table below (data as of 2023-03-28):

|                      | **Basic Plan**                               | **Standard Plan** | **Pro Plan** |
| -------------------- | -------------------------------------------- | ----------------- | ------------ |
| Monthly Price        | $10 / month                                  | $30 / month       | $60 / month  |
| Annual Price         | $8 / month                                   | $24 / month       | $48 / month  |
| Fast Generations     | About 3 hours (generating around 200 images) | 15 hours          | 30 hours     |
| Concurrent Fast Jobs | 3                                            | 3                 | 12           |
| Relaxed Generations  | ❌                                           | ✅                | ✅           |
| Stealth Mode         | ❌                                           | ❌                | ✅           |

First of all, Midjourney's billing is different from OpenAI's. OpenAI bills based on tokens, while Midjourney bills based on time. This is because the main cost for Midjourney is GPU computation, and they also rent GPUs, so they pass on the cost to consumers based on time. In the Basic version, the Fast Generation time is about 3 hours and 20 minutes, and it is expected to generate over 200 images.

However, the GPU time consumed per image is not fixed and depends on factors such as image quality. The following factors affect the cost, and you can refer to the tutorial for more details on each parameter. In summary, the higher the image quality and the more personalized factors, the higher the price.

|                   | **Below Average Price**                               | **Average Price**        | **Above Average Price**                                                |
| ----------------- | ----------------------------------------------------- | ------------------------ | ---------------------------------------------------------------------- |
| Different Tasks   | Variations（the V button under the generated images） | /imagine generate images | Upscale(the U button under the generated images)                       |
| Aspect Ratio      |                                                       | Default                  | tall or wide（changing this parameter will cost more）                 |
| Model Version     |                                                       | Default（—V 4）          | —test or —testp these models are more expensive, but I rarely use them |
| Quality Parameter | --q 0.25 or —q 0.5                                    | Default（—q 1）          | —q 2                                                                   |
| Stop Parameter    | --stop 10 to —stop 99                                 | Default（—stop 100）     |                                                                        |

In addition, the Standard Plan introduces a mode called Relaxed Generation, which allows unlimited image generation for paying users. However, the speed of image generation will be slower, about 0-10 minutes according to the official explanation.

Essentially, this is a queuing solution for idle GPU resources. When switched to Relax mode, all image generation requests are placed in a queue and wait when there are no users in Fast mode utilizing the GPU. Therefore, the longer waiting time is due to the utilization of idle resources.

Please note:

1. The more you use the Relax mode, the longer you will wait. This is similar to the logic of unlimited data plans from mobile operators, where the speed is reduced once the usage reaches a certain threshold. So, if you are sharing an account with others, you need to be cautious. Fast mode works on a first-come, first-served basis, and using the Relax mode more often will make it slower.
2. Even if you switched to Relax mode at the end of the previous month, the system will automatically switch the mode back to Fast mode at the beginning of each month.

Lastly, there is a Stealth mode. Midjourney is an open community by default, so any images generated on Midjourney (including those generated by chatting with the Bot) are public. You can see all the images generated by everyone in the Member Gallery.

Only the Pro version allows you to keep your images private in the Gallery. Additionally, please note that if you enable Stealth mode and generate images in Midjourney's Discord public channels, the Stealth mode will not work, and the generated images will still be visible to people in the Discord public channels.
