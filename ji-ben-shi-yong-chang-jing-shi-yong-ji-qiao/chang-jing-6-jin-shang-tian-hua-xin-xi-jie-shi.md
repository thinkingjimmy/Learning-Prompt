# 📊 场景6：锦上添花——信息解释

## 场景介绍

锦上添花下的第二大的场景是信息解释。它跟改写内容有点像，但又不太一样，信息解释有可能提供超过原文内容的信息。

举几个信息解释的例子，大家应该就能理解了：

1. 解释代码：比如你看到一段 Python 的代码，但你看不懂，你可以让 AI 解释下代码的含义。
2. 解释论文：看某篇论文看不懂，或者论文里的某一段看不懂，你也可以让 AI 解释。

以解释代码为例，它的提示语是这样的（此案例来自 OpenAI [官方案例](https://platform.openai.com/examples/default-python-to-natural-language)）：

```other
解释这段代码是做什么的:

Python 3 
def remove_common_prefix(x, prefix, ws_prefix): 
    x["completion"] = x["completion"].str[len(prefix) :] 
    if ws_prefix: 
        # keep the single whitespace as prefix 
        x["completion"] = " " + x["completion"] 
return x
```

以下是小语 GPT 的回复，它阐述了这段代码是拿来干什么的，同时还阐述了各个参数的含义：

{% code overflow="wrap" %}
```other
这段代码定义了一个名为 remove_common_prefix 的 Python 函数，该函数接受三个参数：x、prefix 和 ws_prefix。这个函数的主要目的是从 x["completion"] 字符串中移除公共前缀（prefix）。

1. 首先，通过 x["completion"].str[len(prefix):] 从 x["completion"] 字符串中移除公共前缀。这里使用了字符串切片，从 prefix 的长度开始，直到字符串末尾。

2. 接下来，检查 ws_prefix 参数。如果 ws_prefix 为 True，则在移除公共前缀后，保留一个空格作为前缀。这是通过将 " "（一个空格）与 x["completion"] 字符串相加来实现的。

3. 最后，函数返回修改后的 x。
```
{% endcode %}

<figure><img src="../.gitbook/assets/image (54).png" alt=""><figcaption></figcaption></figure>
