---
sidebar_position: 2
---

# Zero-Shot Prompts

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

In the previous section on inference scenarios, I mentioned the technique of Zero-Shot Prompting. This chapter will provide a detailed explanation of what it is and the techniques involved in using it.

## Introduction

Zero-Shot Prompting is a natural language processing technique that allows computer models to perform tasks based on prompts or instructions. One commonly used application of this technique is ChatGPT.

Traditional natural language processing techniques often require supervised training on a large annotated dataset to accurately predict or generate outputs for specific tasks or domains. In contrast, the Zero-Shot Prompting approach is more flexible and generalizable because it does not require specialized training for each new task or domain. Instead, it leverages pre-trained language models and some examples or prompts to facilitate reasoning and generate outputs.

For example, with ChatGPT, you can provide a short prompt like `Describe the plot of a movie` and it can generate a summary of the plot without being specifically trained on movie-related data.

## Drawbacks

However, there are some drawbacks:

1. It relies on pre-trained language models, which may be limited or biased by their training data. For example, ChatGPT often defaults to male pronouns like "he" instead of "she" in certain domains like investing since the data used to train it had more male examples for finance.
2. Although zero-shot prompting doesn't require training models individually for each task, it needs massive amounts of data for fine-tuning to achieve optimal performance - ChatGPT's training data is in the trillions of examples.
3. Due to the flexibility and generalizability of zero-shot prompting, outputs may sometimes be inaccurate or not as expected, requiring further model tuning or more prompt text to correct.

## Tip 7: Zero-Shot Chain of Thought

To address the third drawback, researchers found a technique called chain of thought prompting.

It's simple to use - just append **`Let's think step by step`** to the end of the prompt. This results in more accurate responses from models.

This comes from Kojima et al.'s 2022 paper [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916)。They showed that when posing a logical reasoning problem where the model initially answered incorrectly, adding **`Let's think step by step`** resulted in the correct response:

![ZeroShotChainOfThought001.png](./assets/ZeroShotChainOfThought001.png)

The paper explains why this works - in brief (🆘 please share if you have better explanations!):

1. Remember chatbot-like models are statistical language models predicting sequentially based on statistical patterns in their training data.
2. When the data contains logic, the models statistically learn to present logical responses.
3. Many hypothetical computations happen during inference that we don't fully understand yet. For a problem involving steps A->B->C, many intermediates happen.
4. Initially wrong answers occur when the model skips some intermediates (B). Prompting step-by-step thinking ensures full logical chains (A->B->C) run without skipped assumptions, yielding the right result.

As the paper depicts, the chain involves two completions - the initial incorrect response to the prompt, and the final correct response when prompted to re-think the original prompt and initial output step-by-step:

![ZeroShotChainOfThought002.png](./assets/ZeroShotChainOfThought002.png)

This technique is not only useful for solving complex problems but also for generating coherent content, such as writing long articles or movie scripts.

However, it is important to note that coherence does not guarantee correctness. If there is an error in one of the steps, the chain of logic can accumulate the error, resulting in generated text that may not align with expectations.

Additionally, according to the research conducted by Wei et al. in a [2022 paper](https://arxiv.org/pdf/2201.11903.pdf), this technique is only effective when used with models containing 100 billion or more parameters. It does not work with smaller models trained on limited data samples.

---

In Andrew Ng's ChatGPT Prompt Engineering [course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) shows another usage of this technique - not just thinking step-by-step, but specifying what should happen at each step. Here's an example prompt from the course (Python code):

```
prompt_2 = f"""
Your task is to perform the following actions:
1 - Summarize the following text delimited by
  <> with 1 sentence.
2 - Translate the summary into French.
3 - List each name in the French summary.
4 - Output a json object that contains the
  following keys: french_summary, num_names.

Use the following format:
Text: <text to summarize>
Summary: <summary>
Translation: <summary translation>
Names: <list of names in Italian summary>
Output JSON: <json with summary and num_names>

Text: <{text}>
"""
```

To explain:

1. The prompt instructs the model to follow steps 1-4
2. Then output in a defined format

The final output:

```
Summary: Jack and Jill go on a quest to fetch water, but misfortune strikes and they tumble down the hill, returning home slightly battered but with their adventurous spirits undimmed.
Translation: Jack et Jill partent en quête d'eau, mais la malchance frappe et ils dégringolent la colline, rentrant chez eux légèrement meurtris mais avec leurs esprits aventureux intacts.
Names: Jack, Jill
Output JSON: {"french_summary": "Jack et Jill partent en quête d'eau, mais la malchance frappe et ils dégringolent la colline, rentrant chez eux légèrement meurtris mais avec leurs esprits aventureux intacts.", "num_names": 2}
```

The above simply breaks down the task for better results. But this method also improves accuracy, like in this example:

```
Determine if the student's solution is correct or not.

Question:
I'm building a solar power installation and I need help working out the financials.

Land costs $100 / square foot

I can buy solar panels for $250 / square foot

I negotiated a contract for maintenance that will cost \
me a flat $100k per year, and an additional $10 / square foot
What is the total cost for the first year of operations
as a function of the number of square feet.

Student's Solution:
Let x be the size of the installation in square feet.
Costs:

Land cost: 100x

Solar panel cost: 250x

Maintenance cost: 100,000 + 100x
Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000

```

The AI's original response is `The student's solution is correct.` However, the student's answer of 360x + 100 is wrong - it should be 360x + 100,000. Adjusting the prompt:

```python
prompt = f"""
Your task is to determine if the student's solution \
is correct or not.
To solve the problem do the following:
- First, work out your own solution to the problem.
- Then compare your solution to the student's solution \
and evaluate if the student's solution is correct or not.
Don't decide if the student's solution is correct until
you have done the problem yourself.
Use the following format:
Question:
###
question here
###
Student's solution:
###
student's solution here
###
Actual solution:
###
steps to work out the solution and your solution here
###
Is the student's solution the same as actual solution \
just calculated:
###
yes or no
###
Student grade:
###
correct or incorrect
###
Question:
###
I'm building a solar power installation and I need help \
working out the financials.
- Land costs $100 / square foot
- I can buy solar panels for $250 / square foot
- I negotiated a contract for maintenance that will cost \
  me a flat $100k per year, and an additional $10 / square \
  foot
  What is the total cost for the first year of operations \
  as a function of the number of square feet.
###
Student's solution:
###
Let x be the size of the installation in square feet.
Costs:
1. Land cost: 100x
2. Solar panel cost: 250x
3. Maintenance cost: 100,000 + 100x
   Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
###
Actual solution:
"""
```

Again, we broke it into multiple steps. Now the output is (the correct response):

```
Let x be the size of the installation in square feet.

Costs:

1. Land cost: 100x
2. Solar panel cost: 250x
3. Maintenance cost: 100,000 + 10x

Total cost: 100x + 250x + 100,000 + 10x = 360x + 100,000

Is the student's solution the same as actual solution just calculated:
No

Student grade:
Incorrect
```

Next chapter covers chaining limitations when combining with few-shot learning.
