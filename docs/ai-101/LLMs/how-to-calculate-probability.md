---
sidebar_position: 2
title: Calculate probability
---

# How is probability calculated?

Since it is a mathematical model, how is probability calculated?

The simplest method is to use statistical approaches. In simple terms, probability is calculated based on the context provided as input. For example, in the sentence "Have you had dinner?", after "Have you had", there is a higher probability of nouns like "dinner" or "supper" rather than verbs like "sleep" or "go to bed".

This is the first stage of a language model, also known as a Statistical Language Model (SLM). Its basic idea is to establish a word prediction model based on the Markov assumption, which predicts the next word based on the recent context.

The subsequent development of language models iterated through three stages.

The second stage is the Neural Language Model (NLM), which trains a model using neural networks to learn the associations and probability relationships between words. It can utilize large amounts of data for deep learning, capturing more complex relationships between vocabulary. The NLM model adopts a hierarchical structure, transforming the input text data space into a high-dimensional semantic space for learning. By continuously updating the parameters of the neural network model, the NLM gradually acquires the semantic knowledge of the text data and can generate coherent, natural, and semantically accurate text.

Compared to the previously mentioned SLM, NLM has stronger learning capabilities due to the power of deep neural networks, possessing better generalization and adaptability when learning the language model. For example, it can generate longer texts. However, NLM relatively depends more on larger datasets and requires considerable human effort in data labeling.

The third stage is the Pre-trained Language Model (PLM), which is a natural language processing model trained using a large amount of text data. Relative to NLM, PLM utilizes unsupervised learning methods, eliminating the need for pre-labeling or specifying the text type of the data. The Transformer architecture, which some of you may be familiar with, is an example of a pre-trained language model.

The fourth stage is the Large Language Model (LLM). You can understand the current LLM as a PLM trained on an exceptionally large dataset. For example, GPT-2 has only 1.5 billion parameters, while GPT-3 has a staggering 175 billion parameters. Although LLM simply enlarges the model, these large-sized pre-trained language models exhibit different behaviors compared to smaller ones and demonstrate remarkable capabilities in solving complex tasks (commonly known as emergent abilities, noting that this emergent behavior is currently controversial). Therefore, the academic community refers to these large-scale pre-trained language models as Large Language Models (LLMs).

The above four stages may be challenging to comprehend, so you can understand it simply as:

1. Language models fundamentally calculate the probability of each sentence in natural language using a mathematical model. When you input a question to an AI, the AI calculates its answer based on probabilities.
2. Furthermore, modern language models are not limited to providing one answer to a question. In reality, for a given question, there can be multiple potential answers, and they are ranked based on their probabilities. Finally, the model returns the most likely answer.

These two understandings are crucial.
