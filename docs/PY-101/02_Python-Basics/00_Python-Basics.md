# Chapter 2.0: Introduction
There are many new concepts and words to learn and get familiar with when starting out with programming. This chapter will give a quick overview of some core elements of the python language. We will go deeper into each part later, but having an overview from the beginning will help you to understand and structure what you'll be learning later. Don't worry if you dont't understand everything now! At the moment we are just building a framework, drawing the first lines on a sketch. We will fill in the blanks later, and maybe even add som colors 😎

## 2.0.0: Python Syntax
Syntax refers to the set of rules determining how code should be written. Just as grammar shapes languages, adhering to Python's syntax ensures code is readable and executable by computers. The syntax in Python is pretty easy and readable, which makes it suitable for beginners. 

### 2.0.0.0: Comments
Let's start with comments! When writing code, it's useful to provide comments to human readers. This makes it easier to remember what different parts of the code is doing, and helps others reading your code to understand it. Comments are ignored by the computer during execution.

In Python comments start with the character #

```python
# This is a comment in Python
```

### 2.0.0.1: Statements
A statement is a single instruction that performs a specific action or task within a program. It represents the smallest standalone unit of code that the computer can execute to accomplish a particular operation.

Python statements are executed line-by-line and each statement ends with a newline character.

```python
# The following code has three statements

a = 5  # Assignment statement
b = 3 + 2  # Arithmetic expression as a statement
print(a)  # Function call statement
```
### 2.0.0.3: Operations
Operations in programming refer to actions or manipulations performed on data. This includes simple arithmetic operations like addition and subtraction, as well as logical operations such as comparisons (equal to, not equal to, greater than, less than). An operation can also manipulate strings or assign values to variables. Operators are the symbols or statements `+`, `-`, `len()`, and so on.

Below are some examples of basic operators in Python

```python
# Arithmetic Operations
a = 10
b = 5

addition = a + b
subtraction = a - b
multiplication = a * b
division = a / b
modulo = a % b
exponentiation = a ** b

# Comparison Operations
x = 10
y = 5

x == y  # False
x != y  # True
x > y   # True
x < y   # False
x >= y  # True
x <= y  # False

# String Operations
text1 = "Hello"
text2 = "World"

concatenation = text1 + " " + text2 # Yields "Hello World"
len(text1) # Yields 5

```
Note the difference between `=` and `==`. The first is the assign operator, which assigns a value to a variable. The latter is a comparison operator, that compares one variable or value to another. Also note that `+` can mean different things depending on the context. A `+` between two numbers will perform a mathematical addition. A `+` between to strings will join (concatenate) these strings together to a new string.

### 4. Functions
Functions contain code to perform defined operations. Using functions make your code more organized, and easier to manage. Functions also allows you to reuse by allowing the reuse a set of instructions. Don't copy-paste code you use several times, use functions instead!

In python you use the keyword `def` to define a function:
```python
# This is a simple python function:
def hi():
    print('Hello!')
```
### 4. Indentation
Python uses indentation to define blocks of code. Proper indentation is crucial for determining the scope of code blocks.

```python
if a > b:
    print("This code is indented correctly")
else:
print("This is not indented correctly")  # Incorrect indentation will result in an error
```
## Variables in Python
### 2. Variable Assignment
Variables are created and assigned values using the = operator.

```python
my_var = 10  # Assigns the value 10 to the variable 'my_var'
```

### 3. Data Types
Python is dynamically typed, so you don't need to declare a variable's data type explicitly.

```python
# Examples of different data types
num = 10  # Integer
pi = 3.14  # Float
text = "Hello, Python!"  # String
is_valid = True  # Boolean

# Check the data type using the 'type()' function
print(type(num))  # Output: <class 'int'>
print(type(pi))  # Output: <class 'float'>
print(type(text))  # Output: <class 'str'>
print(type(is_valid))  # Output: <class 'bool'>
```

### 4. Variable Reassignment
Variables in Python can be reassigned to different values of any data type.

```python
my_var = 5
my_var = "Hello"  # Valid - my_var changes from an integer to a string
```
### 5. Multiple Assignment
Python allows multiple variables to be assigned values in a single line.

```python
a, b, c = 5, 10, 15  # Assigns 5 to a, 10 to b, and 15 to c
```
As a general rule it's not a good idea to assign multiple variables in a single line. This makes the code harder to read. Sometimes it's ok or useful to do so, but often its better to write a few extra lines than to compress several operations into a single line. The following rewriting og the above code will be easier to read:
```python
# Assigning each variable on a separate line makes the code easier to read:
a = 5
b = 10
c = 15
```

## Built in functions and keywords
In Python, built-in functions and keywords play an important role in the language. Built-in functions are pre-defined functions provided by Python that perform specific tasks. Keywords, on the other hand, are reserved words and have special meanings and functionalities in the language.

### 1. Built-in Functions
Python provides a rich set of built-in functions that you can use in your programs. These functions are readily available and can be used without the need for additional imports or installations. Here are some key points about built-in functions:

Built-in functions perform specific operations on input values and return results.
They can take zero or more arguments (inputs) and can return a value as an output.
Examples of built-in functions include print(), len(), input(), type(), str(), int(), float(), etc.
Here's an example of using a built-in function:

name = "John"
print("Hello, " + name)  # Output: Hello, John

length = len(name)
print("Length of name:", length)  # Output: Length of name: 4
In the above example, we use the built-in functions print() and len(). The print() function displays the given message on the console, and the len() function returns the length of the string.

Keywords
Keywords in Python are reserved words that have special meanings and functionalities. They cannot be used as variable names or any other identifiers in your code. Some common keywords in Python include if, for, while, def, return, import, class, in, not, and, or, etc.

Here's an example illustrating the use of a keyword:

def greet(name):
    if name == "Alice":
        print("Hello, Alice!")
    else:
        print("Hello, stranger!")

greet("Alice")  # Output: Hello, Alice!
greet("Bob")  # Output: Hello, stranger!
In the above example, the keywords def, if, and else are used. def is used to define a function, if is used for conditional branching, and else is used in conjunction with if for alternative execution paths.

Using built-in functions and keywords provides a powerful way to perform various tasks and control the flow of your programs in Python.