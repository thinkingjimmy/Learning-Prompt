---
sidebar_position: 3
---

# 🔖 技巧3：使用引导词

在[代码生成](../ji-ben-shi-yong-chang-jing-shi-yong-ji-qiao/chang-jing-4-wu-zhong-sheng-you-xie-dai-ma.md)场景里，有一个小技巧，上面提到的案例，其提示语还可以继续优化，在提示语最后，增加一个代码的引导，告知 AI 「我已经将条件描述完了，你可以写代码了」。

更好的提示语：

```other
创建一个MySQL查询，用于获取 Computer Science Department 的所有学生：
表格：departments，列名：[DepartmentId, DepartmentName]
表格：students，列名：[DepartmentId, StudentId, StudentName]

SELECT
```

在提示语的最后增加 SELECT 可以很好地提示 AI 可以写 SQL 代码了。

同样的道理，如果你想让 AI 写 Python 代码，那代码引导会是比较好的提示。但需要注意，这个只是告知 AI 可以写代码了，并不能告知 AI 写何种代码，你仍然需要在提示语里增加提示，告知 AI 要生成何种语言的代码。
