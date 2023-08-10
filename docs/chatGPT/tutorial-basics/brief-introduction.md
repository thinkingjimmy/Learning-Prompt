---
sidebar_position: 1
---

# Introduction

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## What is Prompt Engineering?

To understand this term, we first need to understand what a "prompt" is.

Simply put, a prompt is **an instruction given to an AI model**.

It can be a question, text description, or even text with parameters. The AI model generates corresponding text or images based on the information provided in the prompt.

For example, when we enter `What is the capital of China?` into ChatGPT, that question is the prompt.

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is the capital of China?" initial-response="The capital of China is Beijing. " max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>
Prompt Engineering (PE) is:

> Prompt Engineering is an AI technique that improves AI performance by designing and refining the prompts given to AI systems. The goal is to create highly effective and controllable AI by enabling systems to perform tasks accurately and reliably.

That sounds complex. Let me explain another way.

You've likely used AI products where it seems you just need to type or speak to get an AI response. Seems no technical skill is needed.

And for basic usage, you really don't need anything extra beyond entering text. But to get satisfactory, precise answers, you need PE skills.

Human language is inherently imprecise. Machines still can't fully understand us. PE helps address this gap. Also, due to how large language models work, they struggle with certain logical problems unless properly prompted (no need to dive into why yet, just know it's an issue).

For example, if we enter this into ChatGPT:

```other
What is 100*100/400*56?
```

It will return an incorrect answer of 0.4464. (Note if you run this below in [Dyno](https://trydyno.com/) , it will likely be wrong too, the API version returns 14):

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is 100*100/400*56?" initial-response="To solve this problem, we need to follow the order of operations, which is PEMDAS (parentheses, exponents, multiplication/division, addition/subtraction). In this case, there are no parentheses or exponents, so we perform multiplication and division from left to right before performing addition and subtraction.100*100/400*56 = (100*100)/(400*56) (Perform multiplication and division from left to right)= 10,000/22,400 = 0.4464 (Divide 10,000 by 22,400)Therefore, 100100/40056 = 0.4464." max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

But if we tweak the prompt, it gives the right answer. Note even with the tweak, the old API model in Dyno below likely still gets it wrong - we'd need Role Prompting for correctness (explained later).

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="What is (100*100)/400*56?" initial-response="(100*100)/400*56 = (100*100/400)*56 (Perform multiplication and division from left to right, applying the associative property of multiplication)= 25*56 = 1400 (Simplify by performing multiplication)" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

Additionally, current AI has many restrictions. PE skills help circumvent limitations and better tap into capabilities, as we'll cover later.

In summary, Prompt Engineering is an important AI technique:

- As a user, it helps maximize capabilities for a better experience and productivity.
- As a designer or developer, it helps design and refine prompts to improve system accuracy and user experience.

## Is PE Necessary to Learn?

Frankly, there is some debate around PE.

The previous section highlighted the advantages of prompts. But some liken it to early search engine optimization tricks that search "experts" peddled back in the day before engines matured. Those tricks are no longer needed.

Like with the math example, the API got it wrong but ChatGPT was more accurate. Soon parentheses may not even be needed for correct answers (as of March 2, 2023).

Based on my understanding of products and users, as well as expert opinions, I believe:

> **PE is relatively valuable to learn now given AI's early stage, but may be eliminated long-term. That "long-term" might be 3 years, maybe 1 year.**

OpenAI CEO Sam Altman said recently that writing prompts for chatbots is a very high-leverage skill.

![image.png](https://media.heptabase.com/v1/images/b92049c5-ff11-40d4-b38d-e7b45d802985/479cf9aa-2ef3-42d4-8568-f9c323e8b05f/image.png)

But in an interview [last year](https://greylock.com/greymatter/sam-altman-ai-for-the-next-era/), he said we may not need PE in 5 years.

![image.png](https://media.heptabase.com/v1/images/b92049c5-ff11-40d4-b38d-e7b45d802985/14c13281-01c5-47b8-9c38-333d9b57783f/image.png)

**For users, learning prompts can help maximize usage of ChatGPT etc. for now.**

**For products, prompts are likely a short-term stepping stone until more natural interactions and stronger understanding.**
