---
id: Data-Manipulation-with-Pandas
title: "4 - Data Manipulation with Pandas"
sidebar_position: 4
---

:::info 
Related to [Datacamp - Data Manipulation with Pandas](https://app.datacamp.com/learn/courses/data-manipulation-with-pandas)
:::

## Chapter 1: Transforming DataFrames

### Introducing DataFrames & Inspection
```python
# Basic DataFrame inspection
df.head()        # First few rows
df.tail()        # Last few rows
df.info()        # Structure and data types
df.describe()    # Statistical summary
df.shape         # Dimensions
df.columns       # Column names
df.index         # Row labels
```

### Sorting and Subsetting
```python
# Sorting
df.sort_values(by='column', ascending=True)
df.sort_values(by=['col1', 'col2'])  # Multiple columns

# Subsetting columns
df['column']                     # Single column
df[['col1', 'col2']]            # Multiple columns

# Subsetting rows
df[df['column'] > value]        # Boolean indexing
df[df['category'].isin(['A', 'B'])]  # Multiple conditions

# Categorical subsetting
df[df['category'] == 'value']
```

### Adding New Columns
```python
# Creating new columns
df['new_col'] = df['col1'] + df['col2']
df['new_col'] = df['col'].apply(function)
df.assign(new_col = lambda x: x['col1'] + x['col2'])
```

## Chapter 2: Aggregating DataFrames

### Summary Statistics
```python
# Basic statistics
df['column'].mean()
df['column'].median()
df['column'].std()
df['column'].min()
df['column'].max()

# Date summaries
df['date'].dt.year
df['date'].dt.month
df['date'].min(), df['date'].max()

# Cumulative statistics
df['column'].cumsum()
df['column'].cumprod()
df['column'].cummax()
```

### Counting
```python
# Unique values
df['column'].nunique()
df['column'].value_counts()
df.drop_duplicates()
```

### Grouped Summary Statistics
```python
# Basic groupby
df.groupby('category')['value'].mean()

# Multiple groupby with different aggregations
df.groupby(['cat1', 'cat2']).agg({
    'col1': 'mean',
    'col2': ['sum', 'count'],
    'col3': 'max'
})

# Percentage calculations
df.groupby('category')['value'].sum() / df['value'].sum() * 100
```

### Pivot Tables
```python
# Basic pivot
df.pivot_table(
    values='value',
    index='row_category',
    columns='column_category'
)

# Pivot with multiple aggregations
df.pivot_table(
    values=['val1', 'val2'],
    index='category',
    aggfunc={'val1': 'mean', 'val2': 'sum'},
    fill_value=0
)
```

## Chapter 3: Slicing and Indexing

### Explicit Indexes
```python
# Index operations
df.set_index('column')
df.reset_index()
df.set_index(['col1', 'col2'])  # Multi-index

# Accessing with .loc and .iloc
df.loc['index_value']
df.iloc[0:5]
```

### Slicing
```python
# Various slicing methods
df.loc['start':'end']
df.loc[:, 'col1':'col3']
df.iloc[1:5, 2:4]

# Time series specific
df.loc['2020':'2021']
df.loc['2020-01':'2020-12']
```

## Chapter 4: Creating and Visualizing

### Visualization
```python
# Basic plotting
df.plot(kind='line')
df.plot(kind='bar')
df.plot(kind='scatter', x='col1', y='col2')

# Time series
df.plot(x='date', y='value')
```

### Missing Values
```python
# Handling missing data
df.isna().sum()
df.dropna()
df.fillna(method='ffill')
df.fillna(value={'col1': 0, 'col2': 'unknown'})
```

### Creating DataFrames
```python
# Various creation methods
pd.DataFrame([dict1, dict2, dict3])  # From list of dicts
pd.DataFrame({'col1': [1,2,3], 'col2': ['a','b','c']})  # From dict of lists

# File operations
pd.read_csv('file.csv')
df.to_csv('output.csv', index=False)
```
