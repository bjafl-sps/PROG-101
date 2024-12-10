---
id: ex-Control-Structures
title: "2.5 - Control Structures"
sidebar_position: 25
---

# Exercises for [Control Structures](../PY-101/02_Python-Basics/05_Control-Structures.md)

## Exercise Set 1: Conditional Statements
1. **Temperature Advisor**
   Write a program that:
   - Creates a variable for temperature
   - Uses if-elif-else to give different advice based on temperature:
     - Above 30°C: "Stay hydrated!"
     - Between 20°C and 30°C: "Perfect weather!"
     - Between 10°C and 20°C: "Bring a jacket!"
     - Below 10°C: "It's cold!"
   - Includes comments explaining your logic

2. **Grade Calculator**
   Create a program that:
   - Takes a numerical score (0-100)
   - Uses if-elif-else to assign letter grades:
     - A: 90-100
     - B: 80-89
     - C: 70-79
     - D: 60-69
     - F: Below 60
   - Prints both the score and the grade

## Exercise Set 2: For Loops
3. **Counting Practice**
   Write programs for these tasks:
   ```python
   # a) Print numbers 1 to 5
   
   # b) Print every even number between 2 and 10
   
   # c) Print the multiplication table of 5 (5 x 1 to 5 x 5)
   ```

4. **List Navigator**
   Given this list:
   ```python
   fruits = ["apple", "banana", "cherry", "date", "elderberry"]
   
   # Write code to:
   # a) Print each fruit on a new line
   # b) Print each fruit with its index number (1. apple, 2. banana, etc.)
   # c) Print only fruits with more than 5 letters
   ```

## Exercise Set 3: While Loops
5. **Number Guesser**
   Create a simple number guessing game that:
   - Has a secret number (you choose)
   - Keeps asking for guesses until correct
   - Tells if each guess is too high or too low
   - Counts how many guesses were needed

6. **Password Checker**
   Write a program that:
   - Keeps asking for a password until the correct one is entered
   - Gives users only 3 attempts
   - Uses break or continue appropriately
   - Prints appropriate messages for success/failure

## Exercise Set 4: Loop Control
7. **Skip the Bad Stuff**
   Given this list:
   ```python
   numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9]
   
   # Write code to:
   # a) Print only positive numbers using continue
   # b) Print numbers until you hit the first negative, then stop using break
   ```

8. **Menu System**
   Create a simple menu system that:
   ```python
   # Shows these options:
   # 1. Say Hello
   # 2. Count to 10
   # 3. Exit
   
   # - Keeps showing the menu until user chooses Exit
   # - Uses appropriate control structures to handle each choice
   # - Handles invalid inputs gracefully
   ```

## Exercise Set 5: Combined Concepts
9. **FizzBuzz**
   Write the classic FizzBuzz program:
   - Count from 1 to 20
   - For multiples of 3, print "Fizz" instead of the number
   - For multiples of 5, print "Buzz" instead of the number
   - For multiples of both 3 and 5, print "FizzBuzz"

10. **Pattern Printer**
    Create a program that prints these patterns using nested loops:
    ```python
    # Pattern 1:      Pattern 2:
    # *              *****
    # **             ****
    # ***            ***
    # ****           **
    # *****          *
    ```