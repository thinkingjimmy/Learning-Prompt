---
sidebar_position: 3
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>


## 场景介绍

在问答这个大场景下，还有一个子场景是推理，这个场景非常有意思，而且是个非常值得深挖的场景，prompt 在此场景里发挥的作用非常大。

如果你想用 ChatGPT API 做点什么小应用，我建议可以从这个场景入手，相对来说没有其他场景那么红海。

举个比较简单的例子，我将美国工商管理硕士的入学考试 GMAT 的一道数学题输入进了 ChatGPT：

```other
If a real estate agent received a commission of 6 percent of the selling price of a certain house, what was the selling price of the house?
(1) The selling price minus the real estate agent’s commission was $84,600.
(2) The selling price was 250 percent of the original purchase price of $36,000.

(A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
(B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
(C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
(D) EACH statement ALONE is sufficient.
(E) Statements (1) and (2) TOGETHER are NOT sufficient.
```

这道题目的中文意思是这样的（你不妨也思考下这个题目？）：

```other
如果一个房地产经纪人的佣金是某个房子的售价的6％，那么这个房子的售价是多少？
（1）售价减去房地产经纪人的佣金为84,600美元。
（2）购买价是36,000美元，售价是购买价的250%。

（A）仅陈述（1）足以回答问题，但仅陈述（2）不能回答问题。
（B）仅陈述（2）足以回答问题，但仅陈述（1）不能回答问题。
（C）两个陈述合起来足以回答问题，但没有一个陈述单独足以回答问题。
（D）每个陈述单独足以回答问题。
（E）陈述（1）和（2）合起来不能回答问题。
```

它的 Output 是这样的，它会根据题目的要求去推理和运算：

```other
Let's assume the selling price of the house is S.

According to the given information, the real estate agent's commission is 6% of S, which is 0.06S.

So, the amount received by the seller after paying the commission would be (S - 0.06S) = 0.94S.

Statement (1) tells us that 0.94S = $84,600. Solving for S, we get S = $90,000.

Therefore, statement (1) alone is sufficient to determine the selling price of the house.

Statement (2) tells us that the selling price is 250% of the original purchase price, which means S = 2.5*$36,000 = $90,000.

Therefore, statement (2) alone is also sufficient to determine the selling price of the house.

Since both statements individually provide the same answer, we can conclude that together they are also sufficient to determine the selling price of the house.

Hence, the answer is (D) EACH statement ALONE is sufficient.
```

翻译成中文是这样的：

```other
假设房子的售价为S。

根据所给信息，房地产经纪人的佣金是S的6％，即0.06S。

因此，在支付佣金后卖方收到的金额为（S-0.06S）= 0.94S。

陈述（1）告诉我们，0.94S = 84,600美元。解出S，我们得到S = $90,000。

因此，陈述（1）单独足以确定房子的售价。

陈述（2）告诉我们，售价是原始购买价的250％，这意味着S = 2.5 * $36,000 = $90,000。

因此，陈述（2）单独也足以确定房子的售价。

由于两个陈述分别提供相同的答案，我们可以得出结论，它们共同足以确定房子的售价。

因此，答案是（D）每个陈述单独足以回答问题。
```

这个场景还比较简单，我就不在这举更多例子了，你可以将各种题目输入进 ChatGPT 里试试。

