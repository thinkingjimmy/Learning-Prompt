---
sidebar_position: 2
---

# Tip 2: Include Examples

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

If you find it challenging to explain a problem or provide instructions with just text, you can include examples within the prompt:

```other
Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: Horse
Names:
```

By providing examples, the output becomes cooler and closer to the naming style desired:

```other
Gallop Guardian, Equine Avenger, The Mighty Stallion
```

Here are some examples to try yourself:

| Scenario                            | Less Effective                                                                                                                | Better                                                                                                                                                                                                                                                                                   | Reason                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Product naming                      | Product description: A pair of shoes that can fit any foot size.<br/>Seed words: adaptable, fit, omni-fit.<br/>Product names: | Product description: A home milkshake maker<br/>Seed words: fast, healthy, compact.<br/>Product names: HomeShaker, Fit Shaker, QuickShake, Shake Maker<br/>Product description: A pair of shoes that can fit any foot size.<br/>Seed words: adaptable, fit, omni-fit.<br/>Product names: | You can run this example below to see what answer AI gives without any examples. |
| Converting movie titles into emojis | Convert Star Wars into emoji                                                                                                  | Convert movie titles into emoji. <br/>Back to the Future: 👨👴🚗🕒<br/>Batman: 🤵🦇<br/>Transformers: 🚗🤖<br/>Star Wars:                                                                                                                                                                | You can run this example below to see what answer AI gives without any examples. |

<br/>

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Convert Star Wars into emoji" initial-response="🌟⚔️👽💥👨‍🚀👩‍🚀🚀" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>

<br/>

:::info 🔴
When using this tip, you may find that the model does not always provide the correct answer, even with the provided examples. In such cases, you will need to employ more advanced techniques. I will discuss how to optimize the prompt to achieve more accurate results in the advanced section.
:::
