# 💻 场景4：无中生有——写代码

### 场景介绍

除了回答问题外，另一个重要的场景是让 AI 根据你的要求完成一些内容生成任务，根据输出的结果差异，我们将其概括为以下几个主要场景：

1. 无中生有
2. 锦上添花
3. 化繁为简

本章，我们先来聊聊「无中生有」场景。顾名思义，就是让 AI 给你生成一些内容。你只需要向 AI 描述你想写的内容，AI 就会按你的要求写出该内容。比如：

1. 撰写招聘信息
2. 撰写电商平台的货物描述
3. 撰写短视频脚本
4. 甚至让它写代码都可以

像撰写招聘信息等，你只需要明确目标，将目标定得比较明确即可生成能让你较为满意的答案。本章我想聊下写代码。下面是一个让小语 GPT 写代码的案例。

提示语：

```other
为 Computer Science Department 的所有学生创建一个MySQL查询：
数据表departments，包含列：[DepartmentId, DepartmentName]
数据表students，包含列：[DepartmentId, StudentId, StudentName]
```

回复：

{% code overflow="wrap" %}
````other
要创建一个MySQL查询，首先需要连接到数据库并选择相关的数据表。在这个例子中，我们需要连接到departments和students数据表。然后，我们需要使用INNER JOIN来连接这两个表，以便我们可以根据DepartmentId获取与Computer Science Department相关的所有学生。

以下是一个MySQL查询，用于获取与Computer Science Department相关的所有学生：

```sql
SELECT s.StudentId, s.StudentName
FROM students s
INNER JOIN departments d ON s.DepartmentId = d.DepartmentId
WHERE d.DepartmentName = 'Computer Science Department';
```

这个查询首先从students表中选择StudentId和StudentName列，然后使用INNER JOIN将students表与departments表连接在一起。连接条件是students表中的DepartmentId与departments表中的DepartmentId相等。最后，我们在WHERE子句中指定DepartmentName为'Computer Science Department'，以便仅返回与该部门相关的学生。
````
{% endcode %}

<figure><img src="../.gitbook/assets/image (24).png" alt=""><figcaption></figcaption></figure>

### **技巧 3：使用引导词，引导模型输出特定格式内容**

在代码生成场景里，有一个小技巧，上面提到的案例，其提示语还可以继续优化，在提示语最后，增加一个代码的引导，告知 AI 「我已经将条件描述完了，你可以写代码了」。

更好的提示语：

```other
创建一个MySQL查询，用于获取 Computer Science Department 的所有学生：
表格：departments，列名：[DepartmentId, DepartmentName]
表格：students，列名：[DepartmentId, StudentId, StudentName]

SELECT
```

在提示语的最后增加 SELECT 可以很好地提示 AI 可以写 SQL 代码了。

同样的道理，如果你想让 AI 写 Python 代码，那代码引导会是比较好的提示。但需要注意，这个只是告知 AI 可以写代码了，并不能告知 AI 写何种代码，你仍然需要在提示语里增加提示，告知 AI 要生成何种语言的代码。
