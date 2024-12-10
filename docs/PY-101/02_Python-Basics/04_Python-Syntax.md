---
id: Python-Syntax
title: "2.4 Introduction to Python Syntax"
sidebar_position: 3
---

Python is a powerful, high-level programming language known for its simplicity and readability. It is widely used in various fields such as web development, data science, and automation. Python's syntax is clear and easy to learn, making it a great choice for beginners.

## 2.4.1. **Comments**
In Python, comments are written using the `#` symbol. Comments are ignored by the Python interpreter and are used to explain the code.

```python
# This is a single-line comment
print("Hello, World!")  # This is an inline comment
```

## 2.4.2. Indentation
Unlike many programming languages that use braces `{ }` to define *blocks of code*, Python uses indentation. It is important to consistently use spaces (usually 4 spaces) or tabs for indentation. The line that introduces a new block of code should always end with `:`, and the next line should then always have its indentation (4 spaces / tab) increased by 1. There is no symbol that indicates the end of a code block, the block simply ends when the indentation is decreased.

```python
if a > 5:
    print("This is indented")  # This block will run if the condition is True
else:
    print("This is also indented") # Will run if the condition is False


    print("This line is part of the else block")

print("This is not indented") # Will run afterwards, regardless of condition
```

## 2.4.3. Variables
Python is dynamically typed, which means you don't need to declare the type of a variable before using it. A variable is simply created by assigning a value.

```python
x = 10  # Creating a variable and assigning it a value
y = 5
```

## 2.4.4. Basic Operators
Python supports basic mathematical operations like addition, subtraction, multiplication, and division.

```python
x = 10
y = 5

sum = x + y          # Addition
difference = x - y   # Subtraction
product = x * y      # Multiplication
quotient = x / y     # Division
```

## 2.4.5. Control Flow

Core functionality for controlling the logical flow of your program.

### if Statement

The if statement checks if a condition is true and executes a block of code if it is.

```python
if x > 5:
    print("x is greater than 5")
```

### else and elif
else runs when the if condition is false, and elif allows checking additional conditions.


```python
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5")
```

### Loops
for Loop
A for loop is used to iterate over a sequence (like a list or range).

```python
for i in range(5):
    print(i)  # Prints numbers 0 to 4
```

### while Loop
A while loop runs as long as the condition is true.


```python
count = 0
while count < 5:
    print(count)
    count += 1
```

## 2.4.6. Functions
Functions in Python are defined using the `def` keyword. Functions help organize code into _reusable_ blocks. The definition of functions should always end with parentheses `()`. The parentheses may contain one or more _parameters_ that serve as input data for the function.

```python
def greet():
    print("Hello!")

def greet_2(name):
    print("Hello", name, "!")

greet()  # Calling the function
greet_2("Bob")
```

## 2.4.7. Basic Data Structures
### Lists
Lists are used to store multiple items. They are defined with square brackets `[]`.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Accessing the first item in the list
```

### Dictionaries
Dictionaries store data in key-value pairs, defined with curly braces `{}`.

```python
person = {"name": "Alice", "age": 25}
print(person["name"])  # Accessing the value by key
```
