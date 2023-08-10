---
sidebar_position: 4
---

# Scenario 4: Writing Code

<head>
  <script defer="defer" src="https://embed.trydyno.com/embedder.js"></script>
  <link href="https://embed.trydyno.com/embedder.css" rel="stylesheet" />
</head>

## Scenario

Beyond answering questions, another key scenario is having the AI generate content based on requirements. I categorize the main sub-scenarios based on output differences as:

- Creating from scratch
- Enhancing existing content
- Simplifying complex content

Let's discuss "creating from scratch" first - having the AI generate content purely from your description, such as:

- Writing job descriptions
- Product descriptions for ecommerce
- Scripts for short videos
- Even writing code

For things like job descriptions, specifying the objective clearly is often enough for satisfactory results. For this section, let's look at code writing. Here's an example prompt to have ChatGPT write SQL:

```other
Create a MySQL query for all students in the Computer Science Department:
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
```

It returns:

```other
SELECT students.*
FROM students
INNER JOIN departments
ON students.DepartmentId = departments.DepartmentId
WHERE departments.DepartmentName = 'Computer Science';
```

## **Tip 3: Use Primer Words to Guide Output**

A small tweak for code generation is using primer words at the end to signal the AI can start writing code now.

Adding "SELECT" to the end prompts it to write SQL:

```other
Create a MySQL query for all students in the Computer Science Department:
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
SELECT
```

Similarly, "import" works well for Python. Note the primer just indicates code can be generated now - you still need to specify the language in the prompt.

This technique is also mentioned in Andrew Ng's ChatGPT [course](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/). There the primer words are directly stated in the prompt, e.g (The key is specifying JSON format in the prompt text.):

```python
prompt = f"""
Generate a list of three made-up book titles along \
with their authors and genres.
Provide them in JSON format with the following keys:
book_id, title, author, genre.
"""
```
