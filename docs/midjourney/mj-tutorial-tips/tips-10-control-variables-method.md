---
sidebar_position: 10
---

# Tip 10: Iteratively Improve via Controlled Variable Changes

Many compare AI image generation to alchemy. It's true that small mystery tweaks in prompts can greatly change the output.

But while the process resembles alchemy, I don't think we need to take an ancient trial-and-error approach to find the philosopher's stone. I believe the best way to use Midjourney is: **iterative improvement via controlled variable changes**.

Let's take the equipment collection image as an example. My goal was for it to generate equipment, laid out piece by piece, but the lightsaber effects also looked strange. Let's methodically go through the prompt:

| <div style={{width:180}}></div> | **Prompt**                  | **Explanation**                                                                                                 |
| ------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| What is the type?               | blender 3d, game sheet      | Seems off - the Hearthstone style I wanted isn't this polished 3D look. It's more of a clay render style.       |
| What is the subject?            | lightsabers, paladin armor, | Possible issue - maybe I should have written "different types of lightsabers" to get more variety.              |
| What is the background?         | null                        | Seems fine                                                                                                      |
| What is the composition?        | null                        | Seems fine                                                                                                      |
| What lens?                      | null                        | Seems fine                                                                                                      |
| What is the style?              | style of Hearthstone        | Doesn't have the oily medieval armor feel - but might improve if I change the clay render? Might need tweaking. |
| Parameters                      | null                        | Seems fine                                                                                                      |

We've identified 3 potential issues, with the first clay render issue also related to the style issue. My suggestions:

1. Only change one variable at a time, keeping others constant.
2. Once a change meets expectations, move onto the next.
3. In my experience, tackle content first, as it can influence other variables.
4. To verify consistency, you can regenerate with the same prompt - though this costs money, so optional.

Let's follow these principles and tweak our prompt. Adding "different types" helped, we're getting more lightsaber variety:

![MJ051.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/D9C6275A-84EE-42EC-9509-F43E60C9B66F_2/pGbPtLPgN7zTTZlDFgNVexGZ4BxTGtiE3vy0jdlY5CIz/MJ051.png)

Next I tried changing blender 3d to clay render (left 4 images), keeping 3d blender and adding oily (middle 4 images), and both clay render + oily (right 4 images).

![MJ052.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/ADB20BDA-306A-43F7-90E0-DEBC3DA471CE_2/xGfjCTVHUxQI4j1CVceShaJEMymax4oa3NxxPccCI1wz/MJ052.png)

I feel the combination works best (right 4 images).

Comparing to our original, I think the final images are improved, demonstrating how you can methodically write better prompts vs copying others.
