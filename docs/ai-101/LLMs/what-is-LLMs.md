---
sidebar_position: 1
---

# What is a Large Language Model?

Many of us have heard that ChatGPT is an LLM, but what exactly does LLM stand for?

LLM stands for Large Language Model. So, what is a language model?

Simply put, a language model is a mathematical model of human language. The key here is the **mathematical model**; a language model is constructed using mathematical formulas and is not a logical framework. This understanding is crucial.

The concept of a language model was initially proposed by [Dr. Frederick Jelinek](https://en.wikipedia.org/wiki/Frederick_Jelinek).

He is a world-renowned expert in speech recognition and natural language processing. During his time at IBM, he introduced a statistical framework for speech recognition, which had a profound impact on speech and language processing. It fundamentally made practical speech recognition possible. Prior to Jelinek, scientists treated speech recognition as an artificial intelligence problem or a pattern matching problem. Jelinek approached it as a communication problem.

Why is it considered a communication problem? And why does transforming it into a communication problem enable speech recognition?

According to Shannon's principles of modern communication, communication, also known as encoding and decoding of a channel, involves the generation of original information by the information source and the reconstruction of information by the recipient that is as close as possible to the original information.

For example, when you make a phone call and ask someone, "Have you had dinner?" before transmission, the communication system encodes this sentence into something like "100111101100000...". However, during transmission, there will inevitably be signal loss, and the recipient may receive an incomplete code like "1001111011000...". In this case, we cannot decode it back into the original sentence.

How can we solve this problem?

We can list all the sentences that are similar to the received code "1001111011000..." and consider the possible options:

- Have you had dinner?
- Did you have dinner?
- Have you had dinner?
- Have you eaten dinner?

Then, the communication system calculates the probability for each option and selects the one with the highest likelihood. As long as the noise is not too significant and there is redundancy in the transmitted information, we can reconstruct the original information.

Dr. Jelinek believed that instead of teaching computers grammar, it would be best to enable computers to calculate the probability of different possible sentences.

The mathematical model that calculates the probability of each sentence in natural language is called a language model.
