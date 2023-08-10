---
sidebar_position: 3
---

# Scenario 2: Brand Logos

## Do we need to learn prompt keywords?

In the previous chapter, you learned the basics of writing prompts. Starting this chapter, I'll teach you prompts for more specific vertical scenes. When it comes to vertical scenes, I've seen many tutorials and posts that simply share various prompt keywords, such as keywords related to logos:

- modern
- minimalist
- vintage
- cartoon
- geometric

To be frank, when I was learning to use Midjourney, I also thought that looking at other people's prompts and using their keywords would allow me to generate good images.

However, for beginners, I don't recommend just memorizing templates and keywords.

Because what you're missing when writing a good prompt is not keywords, **but an understanding of design, even imagination**.

For example, in this chapter on logo design, if you don't know what elements a logo contains or what styles are suitable, no amount of keyword knowledge will help you generate a satisfactory logo. As I mentioned in my Midjourney tutorial, Midjourney is different from ChatGPT. ChatGPT is declarative - you can even have it roleplay. But Midjourney is imperative - you can only use commands to make it draw the image you imagine. Once you can generate images steadily, then you can study these words.

For ordinary people, what really hinders us may not be learning these terms, but our sense of aesthetics.

## Common Types of Brand Logos

Common brand logos generally fall into the following 4 types:

- Graphic Logo: Mainly graphical, like the logos for Apple, Twitter, and Midjourney.
- Lettermark Logo: Uses the initials of the company name as the main logo, like Facebook (FB), Tesla (T), and IBM (I).
- Geometric Logo: Logos composed of geometric shapes, like Nike, Pepsi, and Mastercard.
- Mascot Logo: Less common, uses a company mascot as the logo. Michelin's logo is the Michelin Man, and one of my favorite chicken restaurants, Nando's, uses a chicken 🐔.

There is also a common type that combines text and any of the above types. For example, Tesla's full logo is the Tesla T. But I won't cover text in this chapter because Midjourney still has many issues generating text.

![MJ024.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/3FF9DD86-C008-49F0-908B-9D6C06497857_2/oNKsiYXidprqaCyAYGvEJkk93Y5DQ9Rx5c7gxrKgszQz/MJ024.png)

## Graphic Logo

When you want AI to generate a logo, I suggest picking a direction you like first, then having the AI generate options.

Let's analyze the characteristics of graphic logos:

- Logo type: graphic logo
- Logo graphic description: e.g. a cat
- Style:
  - Often flat design: flat
  - Often vector graphics: vector graphic
  - Simple: simple

Based on these traits, the core of the prompt is describing the style clearly:

```other
flat vector graphic logo of cat, simple minimal
```

A common graphic logo design, like Midjourney's logo, just adds "line" after "graphic":

```other
flat vector graphic line logo of cat, simple minimal
```

The 4 on the left don't have "line":

![MJ032.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/C745CB0E-D25E-43C0-BC5B-F884644841AA_2/RiPvMKr3P0b3mbjmy5oBckl60Uk2sw6pxjGej2yUiygz/MJ032.png)

## Lettermark Logo

Based on my experiments, including trying many other people's prompts, my feeling is that while lettermark logos look simple - just a stylized letter - they are actually hard for AI to generate well. I also noticed an interesting trend where logos using the letter A seem much higher quality than other letters (not statistically rigorous, just my impression). Lettermark logos have these traits:

- Logo type: lettermark
- Logo graphic description:
  - A single letter
  - Font style: add desired font if needed
- Style：
  - Vector
  - Simple, minimal

Prompt based on traits (generated logos for A and C - A looks much better in my opinion). Note that syntax doesn't matter much in Midjourney, but lettermark conventionally would be "lettermark logo of letter A":

```other
letter A logo, lettermark, typography, vector simple minimal
```

![MJ028.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/F6B3BD42-9141-46DE-9C69-BC1E1994F9E9_2/8S6oy1xu2c7XbVXay3Tw82k5S7fWdvKO06743nWWjGkz/MJ028.png)

## Geometric Logo

This logo type has many possibilities through shapes, despite being simple graphics. I'll introduce two common techniques:

### Radial repeating

If you use an iPhone, look at the Photos app logo. It's also a geometric logo, using repeating oval shapes rotated to form a flower. Breaking it down, key terms are:

- Logo type: geometric logo
- Logo graphic description:
  - Radially repeating: radial repeating
- Style:
  - Simple, minimal: simple minimal

Let's write a similar prompt:

```other
Flat geometric vector geometric logo of flower, petals radial repeating, simple minimal
```

### Gradients

Another common technique is using color gradients. If you use Microsoft Edge, look at its logo - it's a gradient wave shape. Keywords:

- Logo type: geometric logo
- Logo graphic description:
  - Curved wave shape
  - Blue green gradient
- Style:
  - Simple, minimal: simple minimal

Prompt:

```other
Flat geometric vector graphic logo of curved wave shape, blue green gradient ,simple minimal
```

Here are the results - I really like the 3rd flower and 2nd wave:

![MJ029.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/5D97972B-43C9-4162-902D-9B5DEEFB2B88_2/xEkxv0Bt1L7yWt2HfBmj9bilZqxUCWFdFRAxHYHhmi0z/MJ029.png)

## Mascot Logo

I think this logo type is what Midjourney excels at most. But it also requires a lot of imagination - or you can provide simple keywords and let the AI generate options.

Let's create a mascot logo for a robotics company - prompt keywords:

- Logo type: mascot logo
- Logo subject description: e.g. robot
- Style:
  - Simple

Prompt:

```other
a mascot vector logo of a robot, simple,
```

What about a mascot for an instant noodle company?

```other
simple mascot logo for a Instant Noodles company
```

Here are the results - I really like the noodle logo:

![MJ030.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/63A21AD3-F378-4CBD-BBED-76BF6B148C98_2/DArxe0a2MxlhmOQs450lJL4rRFM3xmKjdlef7Wh0DBIz/MJ030.png)

## Tip 4: Adding Style - Art Movements

> For length I won't cover many styles here, but I'll share more on my [Twitter](https://twitter.com/hellojimmywong) - follow me there for updates.

Some of the logos generated earlier may seem a bit plain. This isn't because Midjourney lacks capability, but because our prompts were too simple. Adding just a couple words can create very different logos.

The 4 on the left used this prompt - I just added "Pop Art" to the original:

```other
letter A logo, lettermark, typography, vector simple, Pop Art
```

![MJ031.png](https://res.craft.do/user/full/d845172f-becd-4255-bf79-d722098b2d83/doc/15EA26B6-9B49-4076-B8D8-DFE53ABD52C8/8A4D874C-EC41-40D0-B6CC-3BE64BF86D8C_2/s6gX0xQ1bLlOpxf7nWTvF5dxtj97VLXhayhDBTJxOA8z/MJ031.png)

### What is Pop Art?

Pop art is an art movement that emerged in the 1950s and 1960s. It emphasizes reflection on and expression of popular culture, mass media, and consumerist culture. "Pop" comes from "popular art," a term coined in 1956 by British art critic Lawrence Alloway.

Characteristics of Pop Art:

- Focuses on common everyday objects and imagery like advertisements, magazine covers, product packaging.
- Uses bold, bright colors, clean lines, emphasizes visual impact.

The 4 on the right used this prompt - I added "De Stijl":

```other
letter A logo, lettermark, typography, vector simple,De Stijl
```

### What is De Stijl?

De Stijl was a Dutch art movement starting in 1917 aimed at visual simplification using straight lines, planes and primary colors.

Members included painters like Piet Mondrian and Theo van Doesburg. De Stijl sought to integrate art and design to create aesthetics that were practical and functional.

Characteristics of De Stijl:

- Heavy use of geometric forms like rectangles and straight lines.
- Limited color palette sticking to primaries like black, white, gray, red, yellow, blue.
- Pursuit of balance and harmony, focus on form and structure over detail and expression.

With this context, you can see how the logos take on that stylistic flavor.
