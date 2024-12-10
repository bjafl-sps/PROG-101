---
id: ex-Control-Structures-Solutions
title: "2.5 - Control Structures Solutions"
sidebar_position: 25
---

# Solutions for Control Structures Exercises

## Exercise Set 1: Conditional Statements

### 1. Temperature Advisor
```python
# Create temperature variable
temperature = 25  # You can change this value to test different cases

# Check temperature and give appropriate advice
if temperature > 30:
    print("Stay hydrated!")
elif temperature >= 20:  # This means between 20 and 30
    print("Perfect weather!")
elif temperature >= 10:  # This means between 10 and 20
    print("Bring a jacket!")
else:  # This means below 10
    print("It's cold!")
```

### 2. Grade Calculator
```python
# Get the score (in real program, you might want to use input())
score = 85

# Determine the grade using if-elif-else
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

# Print both score and grade
print(f"Score: {score}")
print(f"Grade: {grade}")
```

## Exercise Set 2: For Loops

### 3. Counting Practice
```python
# a) Print numbers 1 to 5
for i in range(1, 6):  # range(1, 6) gives numbers 1 through 5
    print(i)

# b) Print every even number between 2 and 10
for i in range(2, 11, 2):  # Start at 2, go up to 10, step by 2
    print(i)

# c) Print multiplication table of 5
for i in range(1, 6):
    print(f"5 x {i} = {5 * i}")
```

### 4. List Navigator
```python
fruits = ["apple", "banana", "cherry", "date", "elderberry"]

# a) Print each fruit on a new line
for fruit in fruits:
    print(fruit)

# b) Print each fruit with its index number
for index, fruit in enumerate(fruits, 1):  # enumerate with start=1
    print(f"{index}. {fruit}")

# c) Print only fruits with more than 5 letters
for fruit in fruits:
    if len(fruit) > 5:
        print(fruit)
```

## Exercise Set 3: While Loops

### 5. Number Guesser
```python
# Set up the game
secret_number = 7
guess_count = 0
correct = False

# Keep asking for guesses until correct
while not correct:
    # Get guess 
    guess = int(input("Guess the number (1-10): "))
    guess_count += 1
    
    if guess == secret_number:
        print(f"Correct! You needed {guess_count} guesses!")
        correct = True
    elif guess < secret_number:
        print("Too low!")
    else:
        print("Too high!")
```

### 6. Password Checker
```python
correct_password = "python123"
attempts = 3

while attempts > 0:
    password = input("Enter password: ")
    
    if password == correct_password:
        print("Access granted!")
        break
    else:
        attempts -= 1
        if attempts > 0:
            print(f"Wrong password! {attempts} attempts remaining")
        else:
            print("Access denied! No attempts remaining")
```

## Exercise Set 4: Loop Control

### 7. Skip the Bad Stuff
```python
numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9]

# a) Print only positive numbers using continue
print("Positive numbers:")
for num in numbers:
    if num < 0:
        continue
    print(num)

# b) Print numbers until first negative using break
print("\nNumbers until first negative:")
for num in numbers:
    if num < 0:
        break
    print(num)
```

### 8. Menu System
```python
while True:
    # Display menu
    print("\nMenu:")
    print("1. Say Hello")
    print("2. Count to 10")
    print("3. Exit")
    
    # Get choice
    choice = input("Enter your choice (1-3): ")
    
    # Handle choices
    if choice == "1":
        print("Hello!")
    elif choice == "2":
        for i in range(1, 11):
            print(i)
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice. Please try again.")
```

## Exercise Set 5: Combined Concepts

### 9. FizzBuzz
```python
for num in range(1, 21):
    if num % 3 == 0 and num % 5 == 0:
        print("FizzBuzz")
    elif num % 3 == 0:
        print("Fizz")
    elif num % 5 == 0:
        print("Buzz")
    else:
        print(num)
```

### 10. Pattern Printer
```python
# Pattern 1: Increasing stars
print("Pattern 1:")
for i in range(1, 6):
    print('*' * i)

# Pattern 2: Decreasing stars
print("\nPattern 2:")
for i in range(5, 0, -1):
    print('*' * i)
```
