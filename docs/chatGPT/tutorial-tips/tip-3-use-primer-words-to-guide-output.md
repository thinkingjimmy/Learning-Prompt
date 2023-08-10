---
sidebar_position: 3
---

# Tip 3: Use Primer Words to Guide Output

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
