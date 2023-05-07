---
sidebar_position: 6
---
<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## 场景介绍

锦上添花下的第二大的场景是信息解释。它跟改写内容有点像，但又不太一样，信息解释有可能提供超过原文内容的信息。

举几个信息解释的例子，大家应该就能理解了：

1. 解释代码：比如你看到一段 Python 的代码，但你看不懂，你可以让 AI 解释下代码的含义。
2. 解释论文：看某篇论文看不懂，或者论文里的某一段看不懂，你也可以让 AI 解释。

以解释代码为例，它的 prompt 是这样的（此案例来自 OpenAI [官方案例](https://platform.openai.com/examples/default-python-to-natural-language)）：

```other
Explanation of what the code does:

Python 3 
def remove_common_prefix(x, prefix, ws_prefix): 
    x["completion"] = x["completion"].str[len(prefix) :] 
    if ws_prefix: 
        # keep the single whitespace as prefix 
        x["completion"] = " " + x["completion"] 
return x
```

以下是 ChatGPT 的 Output，它阐述了这段代码是拿来干什么的，同时还阐述了各个参数的含义：

```other
This is a Python function called remove_common_prefix that takes in three parameters: x, prefix, and ws_prefix.

The x parameter is assumed to be a Pandas DataFrame or Series object with a column named "completion", which contains strings that may or may not start with the prefix string.

The prefix parameter is a string that represents the common prefix that needs to be removed from the beginning of each string in the "completion" column of the DataFrame.

The ws_prefix parameter is a Boolean value that indicates whether or not to keep a single whitespace character as a prefix after the common prefix has been removed.

The function modifies the "completion" column of the DataFrame by removing the prefix string from the beginning of each string in that column using the Pandas str method and string slicing. The len(prefix) : syntax is used to slice the string starting from the character that follows the prefix.

If ws_prefix is True, then the function adds a single whitespace character as a prefix to each string in the "completion" column after removing the prefix.

Finally, the modified DataFrame is returned by the function.
```

