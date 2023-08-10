---
sidebar_position: 3
---

# Scenario 3: Inference

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## Scenario

Within the broad question answering scenario, inference is an interesting sub-scenario with lots of potential that prompts can really unlock.

If you want to build a small ChatGPT API app, I suggest starting here - less competition than other areas.

Here's a simple example - I entered a GMAT math question into ChatGPT:

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

Its output is such that it will reason and operate according to the requirements of the question:

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

This scenario is fairly simple, so I won't give more examples here; you can try entering various topics into ChatGPT.
