---
sidebar_position: 6
---

# Tip 6: Use Formatting Terms to Specify Output Structure

The above example uses this technique - a variant of Tip 2 more common for text generation. You could also apply it in Scenario 7 for customized summaries.

Say you want the AI to summarize a very long article in a specific format. Specify the format upfront (again truncating text for space, see the [full playground link](https://platform.openai.com/playground/p/3U5Wx7RTIdNNC9Fg8fc44omi)）:

```other
Summarize the main points of the following speech
Use the following format:
Topic 1: <topic_name_1>
- <point_1>
..
Topic 2: <topic_name_2>
- <point_1>
..
Topic 10: ..

Text: """
Thank you so much, Fred, for that lovely introduction. And thanks to the Atlantic Council for hosting me today.

The course of the global economy over the past two years has been shaped by COVID-19 and our efforts to fight the pandemic. It’s now evident, though, that the war between Russia and Ukraine has redrawn the contours of the world economic outlook. Vladimir Putin’s unprovoked attack on Ukraine and its people is taking a devastating human toll, with lives tragically lost, families internally displaced or becoming refugees, and communities and cities destroyed.
...

"""
```

The output is as follows:

```other
Topic 1: The war in Ukraine
- The war is taking a human toll with lives lost, families displaced, and communities destroyed
- The Biden administration is committed to holding Russia accountable
- The war has violated international law and is a challenge to the international order

Topic 2: The global economy
- The war is having negative impacts on the global economy, including higher commodity prices and inflation
- The IMF and World Bank will be focused on helping developing countries weather the impacts of the war
- The ultimate outcome for the global economy depends on the path of the war
```

Regarding this scenario and technique, I would like to further explain why they have great potential. Based on my experience using various summary and information extraction products, I have found that AI often struggles to identify the most important information. As a result, it tends to miss out on important details during the summarization process. Guiding AI in the summarization process becomes crucial and offers a level of playfulness.

---

In Andrew Ng's ChatGPT Prompt Engineering [course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) he covers an advanced use of this technique - having the AI output in a specific format while also checking if criteria are met to determine what to return. Here's the prompt from his course (Python code with some escapes to ignore):

```python
You will be provided with text delimited by triple quotes.
If it contains a sequence of instructions, \
re-write those instructions in the following format:

Step 1 - ...
Step 2 - …
…
Step N - …

If the text does not contain a sequence of instructions, \
then simply write \"No steps provided.\"

\"\"\"{text}\"\"\"
```

In short, the prompt has two steps:

1. Convert the input text into steps
2. Add a check - if no step content in the input, return "No Steps"

If the input text contains step-by-step instructions like making tea:

```other
Making a cup of tea is easy! First, you need to get some \
water boiling. While that's happening, \
grab a cup and put a tea bag in it. Once the water is \
hot enough, just pour it over the tea bag. \
Let it sit for a bit so the tea can steep. After a \
few minutes, take out the tea bag. If you \
like, you can add some sugar or milk to taste. \
And that's it! You've got yourself a delicious \
cup of tea to enjoy.
```

The output would be (because steps are present):

```other
Step 1 - Get some water boiling.
Step 2 - Grab a cup and put a tea bag in it.
Step 3 - Once the water is hot enough, pour it over the tea bag.
Step 4 - Let it sit for a bit so the tea can steep.
Step 5 - After a few minutes, take out the tea bag.
Step 6 - Add some sugar or milk to taste.
Step 7 - Enjoy your delicious cup of tea!
```

But if the input was:

```other
The sun is shining brightly today, and the birds are \
singing. It's a beautiful day to go for a \
walk in the park. The flowers are blooming, and the \
trees are swaying gently in the breeze. People \
are out and about, enjoying the lovely weather. \
Some are having picnics, while others are playing \
games or simply relaxing on the grass. It's a \
perfect day to spend time outdoors and appreciate the \
beauty of nature.
```

Based on the absence of step-based content in the text, the AI output would be:

```other
No steps provided.
```
