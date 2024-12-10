---
id: Control-Structures
title: "2.5 Introduction to Control Structures"
sidebar_position: 5
---

Control structures are fundamental building blocks in Python that determine the flow of your program. They allow your code to make decisions, repeat tasks, and execute different blocks of code based on conditions. Think of them as traffic signals that direct your program's execution path.

## 2.5.1 Conditional Statements
Conditional statements help your program make decisions. They execute different code blocks based on whether certain conditions are True or False.

### if Statement
The most basic conditional statement is `if`. It runs a block of code only when a condition is True.

```python
# Basic if statement
age = 18
if age >= 18:
    print("You are an adult")  # This will only run if age is 18 or higher
```

### if-else Statement
When you want to do one thing if a condition is True and another if it's False, use `if-else`.

```python
temperature = 25
if temperature > 30:
    print("It's hot today!")
else:
    print("The weather is nice")
```

### elif Statement
For checking multiple conditions, use `elif` (else if) between `if` and `else`.

```python
score = 85
if score >= 90:
    print("A grade")
elif score >= 80:
    print("B grade")
elif score >= 70:
    print("C grade")
else:
    print("Need improvement")
```

## 2.5.2 Loops
Loops allow you to repeat a block of code multiple times. Python has two main types of loops.

### for Loop
Use `for` loops when you want to iterate over a sequence (like a list, string, or range) or when you know exactly how many times you want to repeat something.

```python
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop a specific number of times
for i in range(3):
    print(f"Count: {i}")  # Will print: Count: 0, Count: 1, Count: 2
```

### while Loop
Use `while` loops when you want to repeat code as long as a condition remains True.

```python
# Basic while loop
count = 0
while count < 3:
    print(count)
    count += 1  # Don't forget to update the condition!

# Loop with a break statement
while True:
    user_input = input("Type 'quit' to exit: ")
    if user_input == "quit":
        break  # Exits the loop
```

## 2.5.3 Loop Control Statements
Python provides special statements to control the behavior of loops.

### break Statement
Use `break` to exit a loop completely.

```python
for i in range(5):
    if i == 3:
        break  # Loop stops when i equals 3
    print(i)  # Will print: 0, 1, 2
```

### continue Statement
Use `continue` to skip the rest of the current iteration and move to the next one.

```python
for i in range(4):
    if i == 2:
        continue  # Skips printing when i equals 2
    print(i)  # Will print: 0, 1, 3
```

## 2.5.4 Why Control Structures Matter
- Decision Making
    - Control structures let your program make choices based on conditions.
- Code Reuse
    - Loops help you avoid writing the same code multiple times.
- Program Flow
    - They determine the order and conditions under which your code executes.

### *In essence*
Control structures are like the traffic signals of your program. They direct the flow of execution, allowing your code to make decisions and repeat tasks efficiently. Mastering these structures is crucial for writing effective Python programs.

> **Practice Tip**
>
> When writing loops:
> - Always ensure there's a way to exit the loop
> - Be careful with while loops to avoid infinite loops
> - Start with simple conditions and add complexity gradually