---
id: ex-Variables-Solutions
title: "2.2 - Variables Solutions"
sidebar_position: 22
---

## Exercise Set 1: Variable Basics

### Solution 1: Name Game
```python
# Create variables using snake_case naming convention
first_name = "John"        # First name in snake_case
last_name = "Smith"        # Last name in snake_case
user_age = 25             # Age using descriptive name

# Print all variables with descriptive labels
print(f"First name: {first_name}")
print(f"Last name: {last_name}")
print(f"Age: {user_age}")

# Comment explaining naming choices:
"""
Variable naming explanations:
- first_name: snake_case format, clear meaning
- last_name: snake_case format, clear meaning
- user_age: prefix 'user_' to distinguish from other potential age variables
All names are descriptive and follow Python conventions
"""
```

### Solution 2: Variable Swap
```python
# Create initial variables
x = 10
y = 20

# Print initial values
print(f"Initial values:")
print(f"x = {x}")
print(f"y = {y}")

# Swap values using temporary variable
temp = x
x = y
y = temp

# Print swapped values
print(f"\nAfter swapping:")
print(f"x = {x}")
print(f"y = {y}")

# Alternative Python-specific solution using tuple unpacking
x, y = y, x  # Swap back to original values
```

## Exercise Set 2: Variable Naming Rules

### Solution 3: Identify Valid Names
```python
# Valid variable names with explanations
first_name = "John"    # Valid: letters and underscore
_first_name = "John"   # Valid: can start with underscore

# Invalid variable names with explanations
"""
1st_name = "John"      # Invalid: starts with number
first-name = "John"    # Invalid: contains hyphen
first name = "John"    # Invalid: contains space

# Additional examples with explanations
firstName = "John"     # Valid but not pythonic (should use snake_case)
FIRST_NAME = "John"    # Valid but suggests constant by convention
"""

# Demonstration of case sensitivity
name = "John"
Name = "Jane"
NAME = "Jim"

print(f"name: {name}")
print(f"Name: {Name}")
print(f"NAME: {NAME}")
```

### Solution 4: Fix Bad Names
```python
# Original poor names
x = "John Smith"
a = 25
thing = "Developer"
DATA = True

# Fixed with better names
full_name = "John Smith"        # Descriptive of content
age = 25                        # Clear meaning
occupation = "Developer"        # Specific and meaningful
is_active = True               # Boolean naming convention

# Print values with improved names
print(f"Name: {full_name}")
print(f"Age: {age}")
print(f"Occupation: {occupation}")
print(f"Active status: {is_active}")
```

## Exercise Set 3: Variable Reassignment

### Solution 5: Value Tracking
```python
# Initialize counter with explanatory comment
counter = 0
print(f"Initial value: {counter}")  # Expected: 0

# First reassignment
counter = counter + 1
print(f"After first increment: {counter}")  # Expected: 1

# Second reassignment using shorthand
counter += 2
print(f"After adding 2: {counter}")  # Expected: 3

# Third reassignment with multiplication
counter *= 2
print(f"After doubling: {counter}")  # Expected: 6

# Fourth reassignment with division
counter /= 3
print(f"After dividing by 3: {counter}")  # Expected: 2.0

# Final reassignment to different type
counter = "Done counting"
print(f"Final value: {counter}")  # Expected: "Done counting"

# Demonstrate Python's dynamic typing
print("\nType checking after each assignment:")
print(f"Initial type: {type(counter)}")
```
