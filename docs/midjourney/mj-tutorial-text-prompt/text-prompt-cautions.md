---
sidebar_position: 1
---

# Writing Text Prompt Guidelines

There are several differences in the usage of prompts between Midjourney and ChatGPT. This chapter will provide a detailed explanation of the distinctions in Midjourney's text prompt.

## Grammar

Firstly, Midjourney generally does not understand grammar. Even if your grammar is incorrect, as long as the words are correct, it can still generate images.

Additionally, Midjourney's lack of understanding of grammar results in another issue: longer prompts are not necessarily better. Especially with various relative clauses, Midjourney does not comprehend them. It is better to separate instructions with commas and input them individually. The following are the grammar recommendations [officially suggested](https://docs.google.com/document/d/e/2PACX-1vRHOxyEb-ERGi-BdZM8Z_piEP54m4HwO0z8scjmEurEp2UZVA6rFxvyKd15elYVHUWfP1oSA4CQFwxr/pub?utm_source=docs.google.com&utm_medium=tutorial&utm_campaign=midjourney) by Midjourney:

- Replace prepositional phrases with the adjective + noun word order.
  - "hair flowing in the wind" should be changed to "flowing hair"
  - "a carrot for a nose" should be changed to "carrot nose"
- Replace prepositional phrases with more specific verbs.
  - "a girl with a flashlight" should be changed to "a girl using a flashlight"
  - "a girl with a big smile on her face" should be changed to "smiling girl"

Lastly, Midjourney does not differentiate between lowercase and uppercase letters.

## Vocabulary

In terms of vocabulary, Midjourney is somewhat similar to ChatGPT. It also does not have a good understanding of synonyms. For example, consider the following two cases:

1. The word "big." How big does it refer to? The more tangible the concept of "big," the better the effect for Midjourney. For instance, using "gigantic" is better than using the more general term "big."
2. The word "cats" is plural, but how many cats does it specifically refer to? For Midjourney, "two cats" is clearer than just "cats."

Furthermore, Midjourney can substitute emojis for words (I believe emojis are essentially words), which is quite an interesting feature.

## Instead of What Not to Include, Specify What You Want

Similar to ChatGPT, you should clearly state what you want instead of telling Midjourney what not to generate. If you want Midjourney to not generate something, you need to use the parameter "no."

## If You Don't Specify, the Model Will Randomly Provide

Due to the abundant information in image data compared to text, there are instances when Midjourney will randomly fill in content for you. This is both a defect and a unique feature. When you do not specify certain words in the prompt, you will obtain more divergent results.

If you want to reduce this randomness, you need to use some prompt frameworks (or templates). This tutorial will teach you these frameworks step by step, starting from the basics.

## Parameters

Midjourney also differs from ChatGPT in that it allows you to include parameters in the prompt. These parameters are relatively consistent, so if the functionality you want is supported by the parameters, it is best to use them instead of describing it in the body of the prompt. You will learn how to effectively use parameters in the subsequent tutorials.

Please note that the images generated in this tutorial default to the V5 version, so I did not include the v5 parameter in the prompt.
