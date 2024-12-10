---
id: Variables
title: "2.2 Introduction to Variables"
sidebar_position: 2
---

Let's talk a bit more about variables. In Python, a *variable* is a named location in the computer's memory that can store data. Variables allow us to assign values to names, making it easier to manipulate and work with data in our programs.

## 2.2.1 Variable Declaration and Assignment
To declare a variable in Python, we simply need to choose a name for the variable and use the assignment operator `=` to assign a value to it. Here's an example:

```python
name = "John"
```
In the above example, we've declared a variable named name and assigned it the value `"John"`. The value can be of any data type, which means it can store different types of information in the computer memory, for example text or numbers. We will talk more about data types later. 

## 2.2.2 Variable Reassignment
Once a variable has been declared, we can change its value by assigning it a new value. Here's an example:
```python
age = 25
print(age)  # Output: 25

age = 30
print(age)  # Output: 30
```
In the above example, we initially assign the value 25 to the variable age. We then reassign the value 30 to age. The variable takes on the new value, and when we print it, we see the updated value.

## 2.2.3 Variable Naming Rules
When choosing names for variables, there are a few rules to keep in mind:

- Variable names must start with a letter or an underscore. They cannot start with a number.
- Variable names are case-sensitive. For example, `age` and `Age` are considered different variables.
- Variable names can contain letters, numbers, and underscores. They cannot contain spaces or special characters.
- It's recommended to use descriptive names that reflect the purpose of the variable.
- Python reserved keywords (e.g., `if`, `while`, `for`) cannot be used as variable names.

### Conventional style
The conventional (but not requiered) style of variable names follow the _snake_case_ style for variables and functions, and _PascalCase_ for class-names. Some other languages (e.g. java), prefer the _camelCase_ style for variables.

```python
this_is_snake_case = "The preferred variable naming style in Python"

thisIsCamelCase = "The preferred variable naming style in Java"

class ThisIsPascalCase:
    """The preferred naming style for classes in most languages"""
```

So if you want to be a cool python-programmer, `use_snake_case` 😎

```python
# Examples for invalid variable names
0invalid_name = 1   # Variables can't start with numbers!
invalid name =      # Variable names can't contain spaces!
if = 1              # if is a special reserved keyword!

# Bad practice
print = 1           # print and id are built-in functions, 
id = 1              # and you should avoid using tem as variable names

neid = 1            # Not easy to understand. Use readable names
a = 1               # unless using common abbrevieations or the meaning
                    # is otherwise given by the immediate context.

number_of_employees_that_are_on_vacation_this_period = 1 
# Example above is descriptive, but too long! 

# Good variable names
output = 1
employee_id = 1

n_employee_ids      # n is a common abbreviation for total amount
i = 1               # i is a common name for a counter e.g. in loops
                    # if it is clear that n and i represent these values
                    # by the context, it may be suitable abbreviations.
```
> ### Naming Rules at a glance:
>- Must start with a letter (a-z, A-Z) or an underscore (_)
>- Can be followed by letters, digits (0-9), or underscores (_)
>- Keywords (reserved words like `if`, `while` and `for`)  cannot be used as variable names
>  