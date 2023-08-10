---
sidebar_position: 4
---

# Tip 4: Add Roles or Characters

The rewrite example above added a role to "make it easier to understand", a common optimization. Roles like "for a business audience" work too.

An even better technique is specifying a role or character in the prompt to better match the desired output.

For the same rewrite example, I pretended to be an elementary school teacher simplifying text for 7-8 year olds:

```other
You are a primary school teacher who can explain complex content to a level that a 7 or 8 year old child can understand. Please rewrite the following sentences to make them easier to understand:
```

The output uses simpler words and grammar:

```other
OpenAI is a place where people work on making computers really smart. It's like a lab where they do research to make computers do amazing things! They want the computers to be really friendly and helpful to people. They use one of the most powerful computers in the world to do this research. A bunch of really rich and smart people gave money to start this lab. One of them is Elon Musk, but he left in 2018. Another really big company, Microsoft, gave them a lot of money too.
```

You can also mimic a specific person, like having the AI rewrite as famous author David Foster Wallace:

```other
Imagine you are the famous writer David Foster Wallace, please rewrite this sentences.
```

It returns:

```other
As David Foster Wallace, I might rewrite these sentences to sound more like this:

OpenAI is a lab that studies something called artificial intelligence, which is like when computers can do things that normally only humans can do. They have a big computer that's one of the most powerful in the world, and they're trying to make sure the AI they create is friendly and helpful. The lab was started in 2015 in a city called San Francisco, and a bunch of important people gave them a lot of money to do their research. One of those people was Elon Musk, who stopped working there but still gives them money, and Microsoft also gave them a lot of money recently.
```

For more on using this technique and AI to improve writing, I recommend Nat Eliason's [Using ChatGPT as a Writing Coach](https://blog.nateliason.com/p/chatgpt-writing-coach)

---

Adding roles can greatly improve the accuracy of AI responses, but writing good roles is not simple. Also in daily use, you may need prompts with multiple different roles, like a teacher for learning or a translation assistant. Switching prompts frequently in ChatGPT can be inconvenient.

To address this, our [PoleStar Chat](https://github.com/thinkingjimmy/PoleStarChat) offers 100+ premade AI bots with role prompts covering education, writing, entertainment and more. You can invoke prompts quickly like using any IM app, with @mentions. For example, @ the Tarot Master bot for a daily reading, without learning prompt setup:

![Alt text](assets/polestarchat-bot.png)
