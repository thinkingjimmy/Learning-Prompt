---
sidebar_position: 1
---

# Tip 1: To Do and Not To Do

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

:::caution
The tips I provide can actually be applied to various scenarios. I explained them in a specific scenario because I believe they are more likely to be used in that scenario, and making them easier to remember. It does not mean that these tips can only be used in that specific scenario. Additionally, mixing multiple tips is also a good approach.
:::

In the question-answer scenario, to make AI's answers more accurate, it is common to include conditions in the questions. For example, asking AI to recommend a movie to you, e.g. "Recommend a movie to me." However, this prompt is too broad, and AI cannot provide a direct answer. Instead, it will ask you what type of movie you're interested in, resulting in a time-consuming conversation.

To be more efficient, prompts often say something like:

```other
DO NOT ASK FOR INTERESTS. DO NOT ASK FOR PERSONAL INFORMATION.
```

With that, ChatGPT's latest API will just recommend a movie instead of asking you questions:

```other
Certainly! If you're in the mood for an action-packed movie, you might enjoy "John Wick" (2014), directed by Chad Stahelski and starring Keanu Reeves. The movie follows a retired hitman named John Wick who seeks vengeance against the people who wronged him. It's a fast-paced and stylish film with lots of thrilling action sequences and an engaging story. If you're looking for something that will keep you on the edge of your seat, "John Wick" is definitely worth a watch!
```

But older models like Davinci-003 may still ask about your interests:

```other
Sure, I can recommend a movie based on your interests. What kind of movie would you like to watch? Do you prefer action, comedy, romance, or something else?
```

So OpenAI's [best practices ](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)say:

> **Instead of just saying what not to do, say what to do instead.**

In my experience, though new models understand "Not To Do", for decisive answers it's more efficient to state allowed actions. Back to the movie example:

```other
Recommend a movie from the top global trending movies to me.
```

Of course, this doesn't mean that "Not Todo" should never be used:

- If you've clearly constrained the task already and want to narrow it further.
- For exploration, when you only know what not to include. Add Not To Dos to help the AI respond, then optimize later.

Here are some examples of Less Effective vs Better prompts to try:

| Scenario                                    | Less Effective                                                                   | Better                                                                           | Reason                                                                                                                                                                                                |
| ------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recommend essential English words for IELTS | Please suggest me some essential words for IELTS                                 | Please suggest me 10 essential words for IELTS                                   | The latter prompt is more specific. The former prompt may provide around 20 words. There is still room for improvement, such as adding more qualifying words like words starting with the letter "A". |
| Recommended places to visit in Hong Kong    | Please recommend me some places to visit in Hong Kong. Do not recommend museums. | Please recommend me some places to visit in Hong Kong including amusement parks. | The latter prompt provides more accurate and efficient recommendations. However, if you want to explore more options, the former prompt can also be used.                                             |

<br/>

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Please suggest me some essential words for IELTS" initial-response="1. Essential: important, necessary, required, indispensable, vital
1. Important: critical, significant, major, key, essential
2. Necessary: essential, required, indispensable, mandatory, needful
3. Required: necessary, essential, mandatory, needed, called for
4. Indispensable: essential, necessary, vital, critical, required" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
