---
sidebar_position: 8
---

# Tip 8: Modifying Images Using Seed

Note: I think this technique has potential but is currently unreliable in Midjourney. The official help docs also mention seeds are very unstable in V5. See my Midjourney FAQ chapter.

You may encounter situations like:

1. You input a prompt and get 4 images
2. One image looks decent but the rest unsatisfactory, so you tweak the prompt
3. But now all the new outputs are unsatisfactory, which is frustrating
4. You wish you could modify one of the initial outputs

In theory you should be able to provide a seed from initial outputs for the model to further modify.

For example, with the cyberpunk avatar I first generate images using the original prompt. Then in Discord, click the emoji button in the top right of the message (Image 1 below), type "envelope" in the text box (Image 2), and click the envelope emoji (Image 3). This makes the bot send you the seed number.

![MJ040.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/A81C7114-3DD6-4EB3-A4BA-FBB1A68713CC_2/MybA70bYUjrlgsScqvQUbkdVbbftxkf40OPdtEHsGdkz/MJ040.png)

Then I modify the prompt to change the background to Chinatown. Note:

1. The new prompt includes the original, only the background portion is changed.
2. Add the seed parameter.

Original prompt:

```other
{img url}  avatar, cyberpunk robot face, holographic VR glasses,holographic cyberpunk clothing, neon-lit cityscape background, Cyberpunk, by Josan Gonzalez --s 500 --iw 1
```

New prompt (replace seed with your actual number):

```other
{img url}  avatar, cyberpunk robot face, holographic VR glasses,holographic cyberpunk clothing, China Town background, Cyberpunk, by Josan Gonzalez --s 500 --iw 1 --seed 758242567
```

Here are the results - the background did change, but the face also changed a bit! 😂

The effect isn't great, but I think it's worth exploring as this could improve iterative refinement:

![MJ041.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/56857A8C-7F46-4631-BEAA-696EE75C3A4E_2/FLBeKQqjyzfqEIyRyHUon4bg0JOXdteAPE7TgjsrZ60z/MJ041.png)
