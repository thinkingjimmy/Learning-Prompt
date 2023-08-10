---
sidebar_position: 3
title: Develop large language models
---

# What does it take to develop large language models?

:::info

The primary content of this article is derived from the paper [A Survey of Large Language Models](https://arxiv.org/abs/2303.18223).

:::

After understanding the principles of large language models, you may wonder how they are developed and what the key factors are. Recently, there have been numerous articles claiming that even 5G communication is crucial for developing large language models, solely for the sake of generating traffic 😂

In fact, as we have seen from the previous explanation, one of the key aspects of developing large language models is data.

## Key Factor 1: Data

Training data primarily consists of corpora. Nowadays, many language models use the following types of corpora:

- Books: BookCorpus, which has been commonly used for smaller language models like GPT-2, includes over 11,000 e-books. It mainly comprises novels and biographies, with the most recent update dating back to December 2015. A larger book corpus is Gutenberg, consisting of 70,000 books, including works of fiction, essays, and dramas. It is one of the largest open-source book corpora and was most recently updated in December 2021.
- CommonCrawl: This is currently the largest open-source web crawling database. However, it contains a significant amount of dirty data, so the commonly used subsets are C4, CC-Stories, CC-News, and RealNews. Additionally, two news corpora, REALNEWS and CC-News, were extracted from CommonCrawl.
- Reddit Links: Reddit can be understood as the foreign version of Baidu Tieba + Zhihu. Currently, there are open-source databases such as OpenWebText and [PushShift.io](http://PushShift.io).
- Wikipedia: Wikipedia is the corpus widely used by large models.
- Code: Generally, this includes open-source public code repositories on GitHub or data from StackOverflow. Google previously released a dataset called BigQuery.

In practice, training large language models involves using a mixture of different data sources, rather than relying solely on a single corpus. For example, the data used for GPT-3 includes a combination of Books, CommonCrawl, Reddit Links, and Wikipedia.

From a data perspective, it is important to note that Chinese corpora have a small proportion in these models. ChatGPT is able to respond in Chinese because its training data contains some parallel Chinese-English data, allowing the model to "understand" Chinese-like behavior. Therefore, the more likely scenario is that it first generates content in English and then translates it into Chinese. If you were to ask ChatGPT 3.5, "Please give me some Chinese homophonic puns," you should be able to understand what I mean.

Here are the results returned by ChatGPT:

```other
Here are some examples of Chinese homophonic puns:

"I have evaporated," meaning "I am a Vaper" (Vaper sounds similar to "evaporated").

"We need to go through Sunday," meaning Tuesday, Wednesday, Thursday, Friday, and Saturday (sounds similar to "we need to go through Sunday").

"When I see you, my heart becomes colder below zero," meaning "half becomes cooler" (below zero sounds similar to "half" in Chinese).

"Difficult is the journey to Shu, as difficult as reaching 488" (sounds similar to "Difficult is the journey to Shu" and the number 488).

"The onion girl wants to cry, but she can't shed tears because the onion makes me cry" (onion and "want to cry" have similar pronunciations in Chinese).

"The rain is falling, and the old hometown has lush vegetation. I heard that you're always deep within me" (sounds similar to "deep within" and "search by my side").

"Your car is driving so fast that it is 'taxi-ing,' meaning 'ancestors have been brought out'" (sounds similar to "taxi-ing" and "ancestors").

```

## Key Factor 2: Algorithms

Once you have the data, you also need algorithms for computation. The most commonly used algorithm libraries for developing large language models are:

1. Transformers: This is an open-source Python library built using the Transformer architecture.
2. DeepSpeed: It is a deep learning optimization library developed by Microsoft.
3. Megatron-LM: This is a deep learning library developed by Nvidia.
4. JAX: It is a Python library developed by Google for high-performance machine learning algorithms.

## Key Factor 3: Computing Power

Simply put, computing power refers to computational resources, or hardware. OpenAI has not disclosed the amount of computing resources used for training the GPT-3 language model. However, OpenAI's CEO hinted at hardware costs exceeding $100 million. If we assume a cost of $1,000 per GPU, it would have involved around 100,000 GPUs, based on 32-bit computing. This would provide over 100 PFLOPS of computing power, which is approximately a quarter of the computing power of Alibaba Cloud's largest data center.

Note that this estimate is for the time when GPT-3 was trained.

Furthermore, I would like to share a viewpoint: Do not assume that computing power will always advance to overcome limitations. Computing power will always be a constraint because our demands for artificial intelligence will continuously increase.
