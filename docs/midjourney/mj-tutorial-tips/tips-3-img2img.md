---
sidebar_position: 3
---

# Tip 3: Using Image2Image

For stock photos, there is a very powerful technique. At first I didn't want to teach this because it has a big impact on stock photo sites 😂

But in the spirit of tool neutrality, and since this technique can be useful in many cases (like generating avatars), I think it's still worth sharing.

When using stock photos, you may encounter these issues:

1. The photo has copyright and can't be used commercially, or requires payment.
2. Some photos have been used by many people, so they are easily recognizable as stock photos.
3. The content generally meets the needs, but details don't match - for example the two Asian men shaking hands could be changed to a man and woman, with one person being African American.

The best way to address these issues is to have the AI modify the original photo. You can do this using the Image2Image (or Blend) feature:

:::info

Later I saw a similar tutorial in a book, and realized people call this technique "priming". International users seem to call it Image2Image or img2img.

:::

1. Send the stock photo you want to modify to the Midjourney bot. I'll use the handshake photo as an example.
2. Right click to copy the image URL, then paste it into the text box.
3. Add a space after the URL.
4. Then describe the changes you want, like changing one hand to African American and one to Asian female:

```other
one Afican-American hand and one Asian woman hand
```

Here is the result. In the prompt I didn't mention anything about suits or the background. I just said I wanted one African American hand and one Asian female hand:

![MJ162.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/B9BD4D78-6C58-4A4A-8433-9D562A949CBB_2/xb58eLg0qFxYh6JyyMs4HpXvI1oFxcWfDDXi70zpY1Az/MJ162.png)

Aside from the 6 fingers issue, this is a very efficient technique right? Note that I've found the blend feature (which I'll cover later) works better for merging two images rather than image + text, so you'll need some patience and experimentation.
