---
sidebar_position: 12
---

# Tip 12: Increase Weight

Notice how in the Chinese figures, only the 3rd looks Chinese? That's because the low weight of "Chinese style" resulted in only one output. You'll encounter ignored prompt words too, like mentioning a bird but none in the image.

Why does this happen? Prompt words are weighted by order (see my Midjourney FAQ). In our prompt, Chinese style was last, hence the fewest results. To fix missing elements, weight is likely the issue.

**There are many ways to increase weight, the simplest is re-ordering**. For example, putting Chinese style first (the results become small-eyed style! I generated twice, the second is better):

```other
product photography, Chinese Style,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting
```

Simply re-ordering makes a big difference, so don't blindly follow supposed templates - experiment!

![MJ071.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/6E917EAA-BBFD-4635-AB8E-2D65E67F9FF3_2/Oy0pJCtpE5QtmqFlxePvrjeZmm5SZXvtqXhQag6J4EUz/MJ071.png)

**Second method is slider.**

Add :: after your prompt, then the word to adjust, :: again, and the weight value. For our example without reordering:

```other
product photography,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting, Chinese Style :: Chinese Style :: 0.5
```

The weight seems too high, generating unrelated images (bottom left). Let's add Joan of Arc weight on top of it (bottom right):

```other
product photography,Joan of Arc, full body, hand painted, plastic, detailed, white background, studio lighting, Chinese Style :: Joan of Arc:: 0.25 style of Chinese:: 0.5
```

With tuned parameters, 2 of the 4 images have stronger Chinese style:

![MJ072.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/E9CE4D80-F8C7-4853-847D-C5D4554AFD41_2/sJD7ejS8e3Q3xV8O38UyS6Uh6ZtslrBh2XQv1bodhvwz/MJ072.png)

Honestly this method isn't great for this case - reordering content or weights has higher ROI. Slider is better for missed prompt words, like the official example:

```other
several sad cats watch a crying woman in a home-office environment with laptop
```

The images focus on you, not the crying woman (left 4 images). Using slider (right 4 images) fixes that:

```other
several sad cats watch a crying woman in a home-office environment with laptop:: several sad cats::0.5 crying woman::0.6 laptop::0.7
```

Note slider values are 0.25, 0.5, 0.6, 0.7. You can also reduce weights with -0.7, -0.6, -0.5, -0.25:

![MJ073.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/D6451060-D2BE-47D3-A9BF-4921FC13029A_2/5Two9kXOOTkE1TETh2HI30leqOSxLrzd0mhE5ErcBpwz/MJ073.png)

If slider still doesn't work, there's a last resort **cowbell** which frankly goes against Midjourney best practices, but can work - in this prompt the woman doesn't look shy (left 4 images):

```other
A songbird sits on the shoulder of a shy blonde woman dressed in white.
```

You can repeat words:

```other
A songbird sits on the shoulder shoulder shoulder shoulder shoulder shoulder of a shy shy shy shy shy shy shy blonde woman dressed in white.
```

![MJ074.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/41FD5011-5634-40CF-9F8F-2AF36AC425BA_2/eFAOEBOZslASMqPp8fmkIhNPBhsrWWAaod8ZzUQyHy0z/MJ074.png)
