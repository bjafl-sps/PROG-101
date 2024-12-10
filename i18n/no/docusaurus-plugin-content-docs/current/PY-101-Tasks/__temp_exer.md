# Python Syntax - Practice Exercises

## Exercise Set 1: Basic Syntax and Comments

### Exercise 1: Multi-level Comments
```python
# Program title: Temperature Converter
# Author: Jane Smith
# Date: December 10, 2024

# Main function to convert Celsius to Fahrenheit
def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32    # Formula for conversion
    return fahrenheit                     # Return the result

# Test the function
temperature = 25    # Room temperature in Celsius
result = celsius_to_fahrenheit(temperature)
print(f"{temperature}°C is {result}°F")
```
**Explanation**: This solution demonstrates different types of comments: file documentation, function explanation, and inline comments.

## Exercise Set 2: Indentation Practice

### Exercise 2: Nested Control Structures
```python
def grade_student(score):
    if score >= 0 and score <= 100:
        if score >= 90:
            print("Grade: A")
            if score == 100:
                print("Perfect score!")
        elif score >= 80:
            print("Grade: B")
        elif score >= 70:
            print("Grade: C")
        else:
            print("Grade: F")
            if score < 50:
                print("Need significant improvement")
    else:
        print("Invalid score")

# Test with different scores
grade_student(100)  # Perfect A
grade_student(85)   # B
grade_student(45)   # F with improvement message
```
**Explanation**: Shows proper indentation with multiple nested if-elif-else statements.

## Exercise Set 3: Variables and Operators

### Exercise 3: Operator Combinations
```python
# Initialize variables
x = 10
y = 3

# Arithmetic operators
print(f"Addition: {x + y}")
print(f"Subtraction: {x - y}")
print(f"Multiplication: {x * y}")
print(f"Division: {x / y}")
print(f"Floor Division: {x // y}")
print(f"Modulus: {x % y}")
print(f"Exponentiation: {x ** y}")

# Compound assignment operators
total = 0
total += x  # Add x
print(f"After adding x: {total}")
total -= y  # Subtract y
print(f"After subtracting y: {total}")
total *= 2  # Multiply by 2
print(f"After multiplying by 2: {total}")
```
**Explanation**: Demonstrates various operators and compound assignments.

## Exercise Set 4: Control Flow

### Exercise 4: Combined Control Structures
```python
def analyze_number(num):
    # Check if number is positive, negative, or zero
    if num > 0:
        print("Number is positive")
    elif num < 0:
        print("Number is negative")
    else:
        print("Number is zero")
        return  # Exit early for zero

    # Check if even or odd (only for non-zero numbers)
    if num % 2 == 0:
        print("Number is even")
    else:
        print("Number is odd")

    # Check size range
    if abs(num) < 10:
        print("Single digit number")
    elif abs(num) < 100:
        print("Two digit number")
    else:
        print("Large number")

# Test the function
analyze_number(25)
analyze_number(-16)
analyze_number(0)
```
**Explanation**: Shows how to combine multiple control structures and return statements.

## Exercise Set 5: Loops

### Exercise 5: Loop Combinations
```python
def print_pattern(rows):
    # For loop with range
    for i in range(rows):
        # Nested loop for pattern
        for j in range(i + 1):
            print("*", end="")
        print()  # New line after each row

    # While loop counting down
    count = rows
    while count > 0:
        print("-" * count)
        count -= 1

# Test the pattern
print_pattern(5)
```
**Explanation**: Demonstrates nested loops and different loop types.

## Exercise Set 6: Functions

### Exercise 6: Function Parameters and Returns
```python
def calculate_stats(numbers):
    """
    Calculate basic statistics for a list of numbers.
    Returns a dictionary with min, max, sum, and average.
    """
    if not numbers:  # Check for empty list
        return None
    
    stats = {
        "minimum": min(numbers),
        "maximum": max(numbers),
        "sum": sum(numbers),
        "average": sum(numbers) / len(numbers)
    }
    
    return stats

# Test the function
test_numbers = [4, 2, 7, 1, 9, 3]
result = calculate_stats(test_numbers)

if result:
    for key, value in result.items():
        print(f"{key}: {value}")
```
**Explanation**: Shows function documentation, parameter handling, dictionary usage, and return values.

## Challenge Exercise Solutions

### Challenge 1: Temperature Monitoring System
```python
def monitor_temperature(readings):
    """
    Monitor temperature readings and provide analysis.
    """
    if not readings:
        return "No readings provided"

    # Initialize variables
    total = 0
    high_temps = 0
    low_temps = 0
    
    # Process each reading
    for temp in readings:
        # Add to total for average
        total += temp
        
        # Check temperature ranges
        if temp > 30:
            high_temps += 1
        elif temp < 10:
            low_temps += 1
    
    # Calculate average
    average = total / len(readings)
    
    # Prepare report
    report = f"""Temperature Analysis:
    Average Temperature: {average:.1f}°C
    High Temperatures (>30°C): {high_temps}
    Low Temperatures (<10°C): {low_temps}
    Total Readings: {len(readings)}"""
    
    return report

# Test the system
temperatures = [25, 32, 8, 27, 35, 15, 5, 28]
print(monitor_temperature(temperatures))
```
**Explanation**: Comprehensive example combining functions, loops, conditionals, and string formatting.

### Challenge 2: Shopping Cart System
```python
def create_cart():
    """Initialize an empty shopping cart"""
    return {}

def add_item(cart, item, price, quantity=1):
    """Add an item to the cart"""
    if item in cart:
        cart[item]["quantity"] += quantity
    else:
        cart[item] = {"price": price, "quantity": quantity}
    return f"Added {quantity} {item}(s) to cart"

def remove_item(cart, item, quantity=1):
    """Remove an item from the cart"""
    if item in cart:
        if cart[item]["quantity"] <= quantity:
            del cart[item]
            return f"Removed {item} from cart"
        else:
            cart[item]["quantity"] -= quantity
            return f"Removed {quantity} {item}(s) from cart"
    return "Item not found in cart"

def calculate_total(cart):
    """Calculate total price of cart"""
    total = 0
    for item, details in cart.items():
        total += details["price"] * details["quantity"]
    return total

# Test the shopping cart system
cart = create_cart()
print(add_item(cart, "apple", 0.5, 3))
print(add_item(cart, "banana", 0.3, 2))
print(add_item(cart, "apple", 0.5, 2))
print(f"Cart total: ${calculate_total(cart):.2f}")
print(remove_item(cart, "apple", 2))
print(f"Updated total: ${calculate_total(cart):.2f}")
```
**Explanation**: Advanced example showing function interaction, dictionary manipulation, and formatted output.

Would you like me to add any additional examples or provide more detailed explanations for any of these solutions?








datatypes:

## Exercise Set 5: Complex Structures
9. **Todo List Manager**
   Create a program that:
   - Uses functions for:
     * Adding tasks
     * Marking tasks complete
     * Listing tasks
     * Removing tasks
   - Uses proper indentation
   - Stores task status (complete/incomplete)
   - Uses appropriate data structures

10. **Bank Account Simulator**
    Create a program with:
    - Functions for:
      * Deposit
      * Withdraw
      * Check balance
    - Proper indentation
    - Input validation
    - Transaction history tracking
    - Minimum balance checking





    # Basics

    1. Basic Printing and Comments
```python
# Exercise: Add comments to explain what each line does
# Then run the code and observe the output
print("Hello, Python!")
print(2 + 3)
print("2 + 3")
```

2. Variables and Simple Operations
```python
# Exercise: Create variables and perform calculations
# 1. Create two variables with numbers
# 2. Add them together and store in a third variable
# 3. Print the result
# 4. Try multiplying them instead
# Bonus: What happens if you add two string variables?
```

3. Data Types Exploration
```python
# Exercise: Create different types of variables and use type()
# 1. Create a number (like your age)
# 2. Create a decimal number (like your height)
# 3. Create a text (like your name)
# 4. Use type() to check each variable's type
# 5. Print the results
```

4. Simple String Operations
```python
# Exercise: Work with strings
name = "Python"
# 1. Print the length of the name using len()
# 2. Add " Programming" to the name and print it
# 3. Create your own string and try the same operations
```

5. Basic Function Practice
```python
# Exercise: Create and use a simple function
# 1. Create a function that prints "Good morning!"
# 2. Call the function
# 3. Modify the function to take a name parameter
# 4. Call it with different names
```

6. Indentation Challenge
```python
# Exercise: Fix the indentation
def greet():
print("Hello!")  # This line needs proper indentation
print("Welcome!")  # This line too
```

7. Multiple Assignment Practice
```python
# Exercise: Try different ways of assigning variables
# 1. Create three variables in three separate lines
# 2. Create the same three variables in one line
# 3. Print all variables
# Which style is easier to read?
```

8. Type Conversion Exercise
```python
# Exercise: Convert between different types
# 1. Create a number as a string (e.g., "42")
# 2. Convert it to an integer using int()
# 3. Convert it to a float using float()
# 4. Print each result and its type
```

These exercises are designed to:
- Be completable within a few minutes each
- Reinforce concepts from the document
- Encourage experimentation
- Build confidence through immediate feedback
- Progress from simple to more complex tasks

Would you like me to provide solutions for any of these exercises or suggest more specific variations?











# Additional Variable Practice Exercises

## Exercise Set 1: String Operations
1. **String Transformation Chain**
   Create a program that:
   - Starts with the string "python programming"
   - Performs these operations in sequence:
     * Capitalize the string
     * Add " is fun!" to the end
     * Convert to uppercase
     * Replace "FUN" with "AWESOME"
   - Print the result after each step
   - Use variable reassignment for each change

2. **Name Formatter**
   Write a program that:
   - Takes a first name and last name (lowercase)
   - Creates these variations:
     * Full name (properly capitalized)
     * Initials only (uppercase)
     * Reversed name (last, first)
   - Stores each variant in a new variable
   - Prints all variations

## Exercise Set 2: Number Manipulation
3. **Calculator Chain**
   Create a program that:
   - Starts with the number 50
   - Performs these operations in sequence:
     * Add 10
     * Multiply by 2
     * Subtract 15
     * Divide by 5
   - Uses compound operators (+=, -=, etc.)
   - Prints result after each operation
   - Comments predicting each result

4. **Temperature Converter Chain**
   Write a program that:
   - Starts with 100 degrees Fahrenheit
   - Converts it to Celsius
   - Rounds to 2 decimal places
   - Converts back to Fahrenheit
   - Tracks precision loss
   - Uses variable reassignment
   - Prints each step

## Exercise Set 3: Type Conversion
5. **Type Conversion Explorer**
   Create a program that:
   - Starts with the integer 42
   - Converts through these types in sequence:
     * Integer → String → Float → Boolean
   - Prints value and type after each conversion
   - Includes error handling for invalid conversions
   - Documents what happens to the value in each step

6. **String to Number Challenge**
   Write a program that:
   - Creates these strings:
     * "123"
     * "45.67"
     * "12abc"
     * "-123.45"
   - Attempts to convert each to:
     * Integer
     * Float
   - Uses try/except for error handling
   - Prints success or failure messages

## Exercise Set 4: Multiple Variable Assignment
7. **Coordinate Swapper**
   Create a program that:
   - Creates x, y, z coordinates (3 numbers)
   - Swaps their values in different combinations:
     * x and y
     * y and z
     * All three rotated
   - Uses multiple assignment syntax
   - Prints coordinates after each swap

8. **List Unpacking Practice**
   Write a program that:
   - Creates a list of 5 numbers
   - Unpacks into variables:
     * First two numbers
     * First, middle, and last
     * All five numbers
   - Uses multiple assignment syntax
   - Handles lists of different lengths
   - Includes error handling

## Challenge Exercises
9. **Variable Value Tracker**
   Create a program that:
   - Defines a variable
   - Performs at least 5 different operations
   - Keeps track of:
     * All previous values
     * The type of each value
     * The operation that changed it
   - Prints a history of the variable's changes

10. **Multi-Variable Calculator**
    Create a program that:
    - Takes three numbers
    - Performs these operations:
      * Sum of all three
      * Product of all three
      * Average of all three
      * Difference between highest and lowest
    - Uses multiple assignment
    - Stores results in descriptively named variables
    - Formats output clearly

## Requirements for All Exercises:
- Use meaningful variable names
- Include comments explaining the code
- Handle errors appropriately
- Print results clearly
- Follow Python naming conventions
- Use proper spacing and formatting

## Learning Goals:
After completing these exercises, you should be able to:
- Manipulate strings effectively
- Perform mathematical operations with variables
- Convert between different data types
- Use multiple assignment syntax
- Handle errors in type conversion
- Track variable changes
- Format output clearly

## Additional Practice Solutions

### String Operations
```python
# Initialize starting variables
text = "hello"
print(f"Original text: {text}")

# Multiple reassignments with transformations
text = text.capitalize()
print(f"Capitalized: {text}")

text = text + " world!"
print(f"Concatenated: {text}")

text = text.upper()
print(f"Uppercase: {text}")

text = text.replace("WORLD", "Python")
print(f"Replaced: {text}")
```

### Number Manipulation
```python
# Initialize number variable
number = 10
print(f"Starting number: {number}")

# Various mathematical operations and reassignments
number += 5  # Addition
print(f"After adding 5: {number}")

number *= 2  # Multiplication
print(f"After multiplying by 2: {number}")

number -= 7  # Subtraction
print(f"After subtracting 7: {number}")

number /= 2  # Division
print(f"After dividing by 2: {number}")

# Convert to integer
number = int(number)
print(f"After converting to integer: {number}")
```

### Type Conversion Examples
```python
# Start with a number
value = 42
print(f"Original value: {value} (Type: {type(value)})")

# Convert to string
value = str(value)
print(f"As string: {value} (Type: {type(value)})")

# Convert to float
value = float(value)
print(f"As float: {value} (Type: {type(value)})")

# Convert to boolean
value = bool(value)
print(f"As boolean: {value} (Type: {type(value)})")

# Demonstrate type conversion limitations
try:
    # This will raise an error
    number = int("hello")
except ValueError as e:
    print(f"Error converting 'hello' to integer: {e}")
```

### Multiple Variable Assignment
```python
# Multiple assignment in one line
x, y, z = 1, 2, 3
print(f"x: {x}, y: {y}, z: {z}")

# Swap values using multiple assignment
x, y = y, x
print(f"After swap - x: {x}, y: {y}")

# Assign same value to multiple variables
a = b = c = 0
print(f"a: {a}, b: {b}, c: {c}")

# Unpack a list into variables
numbers = [10, 20, 30]
first, second, third = numbers
print(f"first: {first}, second: {second}, third: {third}")
```
