---
id: ex-Syntax-Solutions
title: "2.4 - Python Syntax Solutions"
sidebar_position: 24
---

## Exercise Set 1: Basic Structure and Indentation

### Solution 1: Fix the Syntax

```python
def calculate_total(price, tax):  # Added parentheses and colon
    result = price + (price * tax)  # Added indentation
    return result  # Added indentation

print(calculate_total(100, 0.2))  # Added closing parenthesis
```
**Explanation**: Fixed issues:
- Added parentheses for function parameters
- Added colon after function definition
- Added proper indentation for function body
- Added closing parenthesis for print function

### Solution 2: Indentation Challenge
```python
def check_temperature(temp):
    if temp > 30:
        print("It's hot!")
        if temp > 35:
            print("It's very hot!")
        else:
            print("It's warm")
    else:
        print("It's not hot")
```
**Explanation**: 
- Each nested block is indented with 4 spaces
- The second if statement is nested inside the first if block
- The else statements align with their corresponding if statements
