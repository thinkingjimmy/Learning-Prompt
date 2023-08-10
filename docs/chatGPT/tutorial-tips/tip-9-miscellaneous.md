---
sidebar_position: 9
---

# Tip 9: Miscellaneous

Here are some small tips that I will compile here.

## Adding specific symbols in examples to guide the model on handling special cases

This explanation may be a bit complex, but here is the official prompt from OpenAI. In some strange questions like `What is Devz9` you can use `?` as a placeholder for the answer. This helps the model understand how to handle situations that are beyond the scope of the answer (note: this method works in the playground but not in ChatGPT).

```other
Q: Who is Batman?
A: Batman is a fictional comic book character.

Q: What is torsalplexity?
A: ?

Q: What is Devz9?
A: ?

Q: Who is George Lucas?
A: George Lucas is American film director and producer famous for creating Star Wars.

Q: What is the capital of California?
A: Sacramento.

Q: What is Kozar-09?
A:
```

The output of this prompt looks like this:

```other
?
```
