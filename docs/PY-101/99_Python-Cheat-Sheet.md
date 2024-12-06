## Variables & Assignments
Creating a Variable: Simply assign a value to a variable name.

```python
x = 10
name = "Alice"

# Multiple Assignments: Assign multiple variables at once.
a, b, c = 5, 3.2, "Hello"
```

## Basic Operations
### Arithmetic: 
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus) 
- `**` (Power)
- `//` (Floor Division)

```python
sum = 7 + 3                 # 10
difference = 7 - 3          # 4
product = 7 * 3             # 21
quotient = 7 / 3            # 2.333...
remainder = 7 % 3           # 1
power = 7 ** 3              # 343 (7^3)
floor_quotient = 7 // 3     # 2
```

### Comparison: 
- `==` (Equal to)  
- `!=` (Not equal to)  
- `>` (Greater than)  
- `<` (Less than)  
- `>=` (Greater than or equal to)  
- `<=` (Less than or equal to)

```python
7 == 3  # False
7 != 3  # True
7 > 3   # True
7 < 3   # False
7 >= 3  # True
7 <= 3  # False
```
### List Operations
Creating a List: List are created using square brackets.

```python
fruits = ["apple", "banana", "cherry"]
```

### Accessing List Items
Items in a list are indexed starting from zero. Items are accessed using `[index]` after the variable name. Negative numbers can be used to refer to the position relative to the end of the list.

```python
first_fruit = fruits[0]         # "apple"
second_fruit = fruits[1]        # "banana"
third_fruit = fruits[3]         # "cherry
last_fruit = fruits[-1]         # "cherry"
second_last_fruit = fruits[-2]  # "banana"
```

### Adding Items
Items can be added using the `append()` method.

```python
fruits.append("orange")
```

### Removing Items
Items can be removed using the `remove()` method.

```python
fruits.remove("banana")
```

## Logic Control Structures

### If Statement

```python
if age < 18:
    print("Minor")
elif age == 18:
    print("Just turned 18")
else:
    print("Adult")
```

### For Loop
Iterating over a sequence.

```python
for fruit in fruits:
    print(fruit)
```

## While Loop

### Executing as long as a condition is true.

```python
count = 5
while count > 0:
    print(count)
    count -= 1
```

## Functions

### Defining a Function

```python
def greet(name):
    return f"Hello, {name}!"
```
### Calling a Function

```python
message = greet("Alice")
print(message)
```

### Built-in Functions

- `print()`: Display output.
- `len()`: Return the length of an object.
- `int()`, `float()`, `str()`: Convert to the respective type.
- `input()`: Read a string from standard input.
- `range()`: Generate a sequence of numbers.

```python
print("Hello, World!")
number_of_fruits = len(fruits)
age = int(input("Enter your age: "))
```

This cheat sheet covers the very basics in Python programming. As you progress, you'll encounter more complex data types, advanced functions, and Python's extensive standard libraries.