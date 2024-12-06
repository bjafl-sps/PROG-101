# 2. Introduction to Data types

## 2.1 What Are Data Types?
Data types specify the kind of data that a variable can hold, such as integers, decimals, text, or more complex types like lists and dictionaries. The type of data defines the operations that can be performed on it and how it is stored in memory.

## 2.2 Python's Built-in Data Types
Python is dynamically typed, which means you don't need to declare the type of a variable when you create one. However, understanding the types is crucial for effective programming in Python. Here’s a brief overview of the most common data types:

### Numeric Types:
- Integers (``int``): 
    - Whole numbers, positive or negative, without decimals. 
    ```python
    #Examples:  
    -3
    0
    42
    ```

- Floating Point Numbers (``float``): 
    - Numbers with a decimal point or in exponential (E) notation. 
    ```python
    #Examples: 
    3.14,
    -0.001
    2e2.
    ```

- Boolean Type:
    - Booleans (``bool``): Represents truth values. The two possible values are ``True`` and ``False``.

### Text Type:
- Strings (``str``): 
    - A sequence of Unicode characters used to store text.
    ```python
    #Example: 
    "Hello, world!"
    'This is fun!'
    ```


### Sequence Types:
- Lists (``list``): 
    - Ordered collections of items that can be of different types. Lists are mutable (changeable). 

    ```python
    #Example: 
    [1, 'apple', 3.14]
    ```

- Tuples (``tuple``): 
    - Similar to lists, but immutable (unchangeable). 
    ```python
    #Example: 
    (1, 'apple', 3.14)
    ```

- Range (``range(...)``): 
    - Represents a sequence of numbers, often used for looping a specific number of times in for loops.
 
    ```python
    #Example: 
    range(3) # Values: [0, 1, 2]
    range(1, 4) # Values: [1, 2, 3]
    range(4, 1, -1) # Values: [4, 3, 2]
    range(3, 9, 2) # Values: [3, 5, 7]
    ```

### Mapping Type:
- Dictionaries (``dict``): 
    - Unordered collections of key-value pairs. 
    ```python
    #Example:  
    {'name': 'Alice', 'age': 30}
    ```

### Set Types:
- Sets (``set``):
    - Unordered collections of *unique* elements. 
    ```python
    #Example:  
    {'apple', 'banana', 'cherry'}
    ```

## Why Understanding Data Types is Important
- Efficiency
    - Some types are more efficient for certain operations. For example, tuples are faster than lists for read-only operations.
- Functionality
    - Different types are suited to different tasks. Knowing when to use a list versus a tuple or a dictionary can impact the functionality of your program.
- Safety
    - Certain operations are only valid for certain types, and mixing incompatible types can lead to errors. Understanding data types helps in writing error-free code.

## *In essence*
Data types are the building blocks of code logic in Python. By mastering the use of these types, you are laying the groundwork for more complex programming tasks and effective problem-solving.

&nbsp;

> **Bonus**
>
> Other data types:
> - Frozen Sets (``frozenset``): Immutable version of a set.
> - Binary Types
>   - Bytes (``bytes``): Immutable sequences of bytes.
>   - Byte Arrays (``bytearray``): Mutable sequences of bytes.
>   - Memory Views (``memoryview``): Memory views of binary data.