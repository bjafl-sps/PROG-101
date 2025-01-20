---
id: ex-Data-Types-Solutions
title: "2.3 - Data Types Solutions"
sidebar_position: 23
---

# Data Types Exercise Solutions

## Exercise Set 1: Numeric Types

### Solution 1: Number Play
```python
# Create large integer
big_number = 1234567890
print(f"Large integer: {big_number}")

# Create float with many decimal places
precise_float = 3.14159265359
print(f"Float with many decimals: {precise_float:.10f}")

# Perform basic math
result_add = big_number + precise_float
result_multiply = big_number * precise_float
print(f"Addition result: {result_add}")
print(f"Multiplication result: {result_multiply}")

# Convert between int and float
float_number = float(big_number)
int_number = int(precise_float)
print(f"Integer converted to float: {float_number}")
print(f"Float converted to integer: {int_number} (decimal part lost)")
```

### Solution 2: Calculator Plus
```python
# Create two float numbers
num1 = 10.7
num2 = 3.3

# Perform division
division_result = num1 / num2
print(f"Division result: {division_result}")

# Convert to integer
int_result = int(division_result)
print(f"Integer result: {int_result}")

# Show information loss
lost_decimal = division_result - int_result
print(f"Information lost in conversion: {lost_decimal}")
```

## Exercise Set 2: Strings

### Solution 3: String Explorer
```python
# Single quotes
single_quoted = 'Hello'
print(f"Single quoted: {single_quoted}")

# Double quotes
double_quoted = "World"
print(f"Double quoted: {double_quoted}")

# String with quote inside
quote_inside = "He said 'Hello' to me"
print(f"Quote inside: {quote_inside}")

# Multi-line string
multi_line = """This is line 1
This is line 2
This is line 3"""
print("Multi-line string:")
print(multi_line)
```

### Solution 4: String Operations
```python
# Create two strings
first_part = "Python"
second_part = "Programming"

# Concatenate with space
combined = first_part + " " + second_part
print(f"Combined string: {combined}")

# Count characters
char_count = len(combined)
print(f"Number of characters: {char_count}")

# Comment: Expected count is 17 (6 + 1 + 11 characters)
```

## Exercise Set 3: Lists and Tuples

### Solution 5: List Basics
```python
# Create list with different types
mixed_list = [42, "Hello", 3.14, True]
print(f"Original list: {mixed_list}")

# Print specific items
print(f"First item: {mixed_list[0]}")
print(f"Last item: {mixed_list[-1]}")

# Modify an item
mixed_list[1] = "World"
print(f"After modification: {mixed_list}")

# Add new item
mixed_list.append("New Item")
print(f"After adding item: {mixed_list}")
```

### Solution 6: Tuple vs List
```python
# Create tuple and list with same values
my_tuple = (1, 2, 3, 4)
my_list = [1, 2, 3, 4]

print("Original tuple:", my_tuple)
print("Original list:", my_list)

# Modify list
my_list[0] = 100
print("Modified list:", my_list)

# Try to modify tuple (will cause error)
my_tuple[0] = 100

# Comment: Tuples are immutable, meaning they cannot be changed after creation
# Lists are mutable and can be modified at any time
```

## Exercise Set 4: Dictionaries

### Solution 7: Simple Contact List
```python
# Create contact dictionary
contact = {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "phone": "123-456-7890"
}

# Print specific values
print(f"Name: {contact['name']}")
print(f"Age: {contact['age']}")

# Add new key-value pair
contact["address"] = "123 Main St"
print(f"After adding address: {contact}")

# Modify existing value
contact["age"] = 31
print(f"After updating age: {contact}")
```

## Challenge Solutions

### Solution 9: Mini Database
```python
# Create database of friends
friends_db = []

# Add friends
def add_friend(name, age, hobbies):
    friend = {
        "name": name,
        "age": age,
        "hobbies": hobbies
    }
    friends_db.append(friend)
    return f"Added {name} to database"

# Print friend info
def print_friend_info(friend):
    print(f"\nName: {friend['name']}")
    print(f"Age: {friend['age']}")
    print("Hobbies:", ", ".join(friend['hobbies']))

# Add initial friends
add_friend("Alice", 25, ["reading", "hiking", "photography"])
add_friend("Bob", 30, ["gaming", "cooking"])
add_friend("Charlie", 28, ["swimming", "painting"])

# Print all friends
print("All friends in database:")
for friend in friends_db:
    print_friend_info(friend)

# Modify friend information
for friend in friends_db:
    if friend["name"] == "Bob":
        friend["hobbies"].append("gardening")
        print("\nUpdated Bob's hobbies:")
        print_friend_info(friend)

# Add new friend
add_friend("Diana", 27, ["dancing", "singing"])
print("\nAfter adding new friend:")
for friend in friends_db:
    print_friend_info(friend)
```
