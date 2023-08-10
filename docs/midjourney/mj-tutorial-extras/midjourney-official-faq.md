---
sidebar_position: 3
---

# Midjourney Official FAQ

In this chapter, I'll share some of the important questions and answers from the official FAQs.

## Are terms like 4K, HD, and other rendering words useful?

According to the [official explanation](https://discord.com/channels/662267976984297473/1029786943141191700), rendering words include：

> Rendering words include `4k, 6k, 8k, 16k, ultra 4k, octane, unreal, v-ray, lumion, renderman, hd, hdr, hdmi, high-resolution, dp, dpi, ppi, 1080p`.

Are they useful? The official explanation is:

> Rendering words do **_something_** to your image. They may also be what's **_breaking_** your prompt. So, as part of troubleshooting, we recommend removing them. Removing them often fixes issues with blurring, focus, clarity, and coherence.

In other words, these words have an impact but more harm than good. Adding these words may actually undermine your prompt, especially in some photography scenarios where you might want to use effects like background blur. Therefore, the official recommendation is to remove these words.

## Does the word order in the prompt affect the result?

[Official explanation](https://discord.com/channels/662267976984297473/1020572050898813029)：

> Word order matters. Early words are generally more influential.

The order of words does affect the result, and words that appear earlier have a greater influence. That's why I have placed the "category" at the forefront in the template I designed because it is my most important goal. The official also advises:

1. Avoid listing words: Listing means writing multiple words with the same meaning in the prompt.
2. Use specific and relevant words: The more specific the generated image is to the prompt, the better.
3. Use sentence fragments: Instead of writing complex sentences with relative clauses, use separate words or phrases.
4. Avoid using consolation words like 4K, 8K, 16K, etc.

## Why doesn't the Seed work?

According to the [official evaluation ](https://discord.com/channels/662267976984297473/1017917091606712430/threads/1022698154170253363)of Seed, it is as follows:

> - Seeds can not transfer the style or appearance of images across jobs.
> - Seeds can not be used to 'bookmark' styles or appearance. (i.e. "Use seed XYZ for that!")
> - Seeds are the weakest force in Midjourney. In --v 5 they may not work as expected at all.

In summary, this feature is very unstable in the V5 version, and you should not expect it to transfer the prompt across images.
