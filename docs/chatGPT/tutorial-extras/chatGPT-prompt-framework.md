---
sidebar_position: 1
---

# ChatGPT Prompt Framework

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

After going through the various scenarios discussed in the basic section, you should have a deeper understanding of prompts.

In the previous chapters, we focused more on the "skill" aspect and how to use prompts, but we didn't delve into the "science" aspect. In the Advanced section, we will not only cover more advanced applications but also explore more of the "science".

To kick off the Advanced section, let's discuss the framework that constitutes a prompt.

## Basic Prompt Framework

After researching many ChatGPT prompt frameworks, I find Elavid Saravia's[ summary](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-intro.md) to be very clear. He states prompts contain:

- **Instruction（required）：** The specific task you want the model to perform.
- **Context（optional）：** Background information providing context to guide better responses.
- **Input Data (optional):** Data for the model to process.
- **Output Indicator (optional):** Specifies desired output type or format.

If you construct a prompt following this framework, the model's results will be consistent.

Of course, you don't necessarily have to include all four elements in your prompt. You can arrange and combine them according to your specific requirements. For example, let's consider a few scenarios:

- Inference: Instruction + Context + Input Data
- Information Extraction: Instruction + Context + Input Data + Output Indicator

## CRISPE Prompt Framework

Another great framework is Matt Nigh's [CRISPE](https://github.com/mattnigh/ChatGPT3-Free-Prompt-List). More complex but quite comprehensive for prompt templates:

- **CR：** Capacity and Role - The role for ChatGPT to take on.
- **I：** Insight - Background info and context (I think Context is clearer).
- **S：** Statement - What you want ChatGPT to do.
- **P：** Personality - Desired style or manner for responses.
- **E：** Experiment - Ask for multiple answers.

Here are examples for each element:

| **Step**          | **Example**                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Capacity and Role | Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.                                                                                                                                              |
| Insight           | The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.                                                                                                                       |
| Statement         | Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries. |
| Personality       | When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.                                                                                                                                         |
| Experiment        | Give me multiple different examples.                                                                                                                                                                                                                          |

Combining all elements yields a very different prompt than basic ones. Try it below to compare!

<div trydyno-embed="" openai-model="text-davinci-003" initial-prompt="Act as an expert on software development on the topic of machine learning frameworks, and an expert blog writer.The audience for this blog is technical professionals who are interested in learning about the latest advancements in machine learning.Provide a comprehensive overview of the most popular machine learning frameworks, including their strengths and weaknesses. Include real-life examples and case studies to illustrate how these frameworks have been successfully used in various industries.When responding, use a mix of the writing styles of Andrej Karpathy, Francois Chollet, Jeremy Howard, and Yann LeCun.Give me multiple different examples." initial-response="" max-tokens="256" box-rows="3" model-temp="0.7" top-p="1">
    <noscript>Failed to load Dyno Embed: JavaScript must be enabled</noscript>
</div>
