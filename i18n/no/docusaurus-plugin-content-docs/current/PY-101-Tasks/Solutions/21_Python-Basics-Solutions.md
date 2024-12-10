---
id: ex-Python-Basics-Solutions
title: "2.1 - Python Basics Solutions"
sidebar_position: 21
---

## Python Basics - Exercise Set 1: Comments and Basic Printing

### Solution 1: First Steps with Comments
```python
# My name is John Doe
# This program prints a welcome message to the screen
print("Hello, World!")
```
**Explanation**: This solution demonstrates basic comment syntax and the print function. Comments start with # and continue to the end of the line.

### Solution 2: Comment Practice
```python
# Define a variable to store the person's name
name = "Alice"
# Define a variable to store the person's age
age = 25
# Print the person's name
print(name)
# Print the person's age
print(age)
```
**Explanation**: Each line is explained with a comment, making the code's purpose clear to readers.

## Python Basics - Exercise Set 2: Basic Operations

### Solution 3: Calculator Practice
```python
# Create two numbers for calculation
num1 = 10
num2 = 5

# Addition
sum_result = num1 + num2
print(f"Addition: {num1} + {num2} = {sum_result}")

# Subtraction
diff_result = num1 - num2
print(f"Subtraction: {num1} - {num2} = {diff_result}")

# Multiplication
mult_result = num1 * num2
print(f"Multiplication: {num1} * {num2} = {mult_result}")

# Division
div_result = num1 / num2
print(f"Division: {num1} / {num2} = {div_result}")
```
**Explanation**: This solution shows all basic arithmetic operations and uses f-strings for formatted output.

### Solution 4: String Operations
```python
# Create variables for first and last name
first_name = "John"
last_name = "Doe"

# Concatenate names with a space
full_name = first_name + " " + last_name
print(f"Full name: {full_name}")

# Calculate and print name length
name_length = len(full_name)
print(f"The length of the full name is: {name_length} characters")
```
**Explanation**: Demonstrates string concatenation and the len() function for counting characters.

## Python Basics - Exercise Set 3: Variables and Types

### Solution 5: Type Explorer
```python
# Create variables of different types
integer_var = 42
float_var = 3.14
string_var = "Hello"
boolean_var = True

# Print each variable and its type
print(f"Integer: {integer_var} is of type {type(integer_var)}")
print(f"Float: {float_var} is of type {type(float_var)}")
print(f"String: {string_var} is of type {type(string_var)}")
print(f"Boolean: {boolean_var} is of type {type(boolean_var)}")
```
**Explanation**: Shows how to create variables of different types and use the type() function.

### Solution 6: Variable Transformation
```python
# Create number variable
number = 42
print(f"Original number: {number} (Type: {type(number)})")

# Convert to string
string_number = str(number)
print(f"Converted to string: {string_number} (Type: {type(string_number)})")
```
**Explanation**: Demonstrates type conversion using str() function.

## Python Basics - Exercise Set 4: Functions

### Solution 7: Simple Function Creation
```python
def say_good_morning():
    print("Good morning!")

# Call the function three times
say_good_morning()
say_good_morning()
say_good_morning()
```
**Explanation**: Shows function definition and multiple function calls.

### Solution 8: Basic Calculator Function
```python
def calculate(num1, num2):
    # Calculate and print sum
    print(f"Sum: {num1 + num2}")
    # Calculate and print difference
    print(f"Difference: {num1 - num2}")
    # Calculate and print product
    print(f"Product: {num1 * num2}")

# Call function with different numbers
calculate(10, 5)
calculate(20, 3)
```
**Explanation**: Demonstrates function parameters and multiple operations within a function.

## Python Basics - Exercise Set 5: Indentation Practice

### Solution 9: Fix the Indentation
```python
def greet(name):
    print("Hello")
    print(name)
    print("How are you?")

# Test the function
greet("Alice")
```
**Explanation**: Shows proper indentation within a function definition.

### Solution 10: Create Nested Code
```python
def check_number(num):
    if num > 0:
        if num > 100:
            print("That's a big positive number!")
        else:
            print("That's a positive number!")
    else:
        print("That's not a positive number!")

# Test with different numbers
check_number(150)
check_number(50)
check_number(-10)
```
**Explanation**: Demonstrates multiple levels of indentation with nested if statements.

## Challenge Solutions

### Solution 11: Mini Calculator Program
```python
def add(a, b):
    """Add two numbers and return result"""
    return a + b

def subtract(a, b):
    """Subtract b from a and return result"""
    return a - b

def multiply(a, b):
    """Multiply two numbers and return result"""
    return a * b

def divide(a, b):
    """Divide a by b and return result"""
    if b != 0:
        return a / b
    else:
        return "Cannot divide by zero"

# Get input numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform all operations and print results
print(f"\nResults for {num1} and {num2}:")
print(f"Addition: {add(num1, num2)}")
print(f"Subtraction: {subtract(num1, num2)}")
print(f"Multiplication: {multiply(num1, num2)}")
print(f"Division: {divide(num1, num2)}")
```
**Explanation**: Comprehensive program showing function definitions, user input, and formatted output.

### Solution 12: Type Converter
```python
# Create variables of different types
integer_num = 42
float_num = 3.14
string_text = "123"

# Integer conversions
print(f"Original integer: {integer_num} ({type(integer_num)})")
print(f"To float: {float(integer_num)} ({type(float(integer_num))})")
print(f"To string: {str(integer_num)} ({type(str(integer_num))})")

# Float conversions
print(f"\nOriginal float: {float_num} ({type(float_num)})")
print(f"To integer: {int(float_num)} ({type(int(float_num))})")  # Note: Decimals are truncated
print(f"To string: {str(float_num)} ({type(str(float_num))})")

# String conversions
print(f"\nOriginal string: {string_text} ({type(string_text)})")
print(f"To integer: {int(string_text)} ({type(int(string_text))})")  # Only works for numeric strings
print(f"To float: {float(string_text)} ({type(float(string_text))})")  # Only works for numeric strings

# Comment about impossible conversions
"""
Note: The following conversions would cause errors:
- int("hello")  # Error: Cannot convert non-numeric string to integer
- float("hello")  # Error: Cannot convert non-numeric string to float
- int(True)  # Works but might not be meaningful: converts to 1
- int(False)  # Works but might not be meaningful: converts to 0
"""
```
**Explanation**: Demonstrates various type conversions and includes comments about impossible conversions.