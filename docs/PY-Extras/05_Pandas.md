---
id: Data-Manipulation-with-Pandas
title: "Pandas"
sidebar_position: 4
---

# Pandas

Pandas is a powerful data manipulation and analysis library for Python. It introduces two main data structures:

1. DataFrame: A 2-dimensional labeled data structure with columns that can be of different types (like Excel spreadsheets)
2. Series: A 1-dimensional labeled array that can hold data of any type

### Pandas excels at:
- Reading/writing various file formats (CSV, Excel, SQL databases)
- Data cleaning and preparation
- Merging and joining datasets
- Handling missing data
- Time series functionality
- Statistical operations

It's built on top of NumPy and integrates well with other scientific Python libraries, making it a cornerstone of data science in Python.

:::info Official Docs
The official documentation for this library can be found at [pandas.pydata.org](https://pandas.pydata.org/docs/)
:::

Below is a short reference for basic functionality of the pandas library. Check out the [official user guide](https://pandas.pydata.org/docs/user_guide/index.html#user-guide) for a more in-depth reference. 

### Creating DataFrames
```python
import pandas as pd

# From dictionary
df = pd.DataFrame({
    'name': ['Alice', 'Bob'],
    'age': [25, 30]
})

# From CSV
df = pd.read_csv('file.csv')

# From Excel
df = pd.read_excel('file.xlsx')
```

### Basic Operations
```python
# Basic info
df.info()                    # DataFrame info
df.describe()               # Statistical summary
df.shape                    # (rows, columns)
df.columns                  # Column names
df.dtypes                   # Column data types

# Viewing data
df.head(n)                  # First n rows
df.tail(n)                  # Last n rows
df.sample(n)                # Random n rows
```

### Selection and Indexing
```python
# Column selection
df['column']                # Single column
df[['col1', 'col2']]       # Multiple columns

# Row selection
df.loc[row_label]          # Label-based
df.iloc[row_index]         # Integer-based
df.iloc[0:5, 0:2]          # Slice rows and columns

# Boolean indexing
df[df['age'] > 25]         # Filter by condition
df.query('age > 25')       # Query method
```

### Data Cleaning
```python
# Missing values 
df.isna().sum()            # Count missing values
df.dropna()                # Drop rows with any NA
df.fillna(value)           # Fill NA with value

# Duplicates
df.duplicated()            # Find duplicates
df.drop_duplicates()       # Remove duplicates
```

### Data Manipulation
```python
# Adding/removing columns
df['new_col'] = values     # Add new column
df.drop('col', axis=1)     # Remove column

# Sorting
df.sort_values('col')      # Sort by column
df.sort_index()            # Sort by index

# Type conversion
df['col'].astype('type')   # Convert type
pd.to_datetime(df['date']) # Convert to datetime
```

### Grouping and Aggregation
```python
# Group by operations
df.groupby('category').mean()
df.groupby(['cat1', 'cat2']).agg({
    'col1': 'sum',
    'col2': 'mean'
})

# Pivot tables
df.pivot_table(
    values='value',
    index='row_groups',
    columns='col_groups',
    aggfunc='mean'
)
```

### Merging and Joining
```python
# Combining DataFrames
pd.merge(df1, df2, on='key')           # SQL-style join
pd.concat([df1, df2], axis=0)          # Vertical concatenation
pd.concat([df1, df2], axis=1)          # Horizontal concatenation
```

### Data Export
```python
df.to_csv('output.csv')                 # Export to CSV
df.to_excel('output.xlsx')             # Export to Excel
df.to_json('output.json')              # Export to JSON
```

### Common String Operations
```python
df['col'].str.lower()                   # Lowercase
df['col'].str.contains('pattern')       # String matching
df['col'].str.split(',')               # Split strings
df['col'].str.strip()                  # Remove whitespace
```

### Time Series
```python
df.resample('M').mean()                 # Monthly resampling
df['date'].dt.month                     # Extract month
df.set_index('date').asfreq('D')       # Set frequency
```
I'll add the most useful plotting patterns with pandas and pyplot.

### Basic Plotting with Pandas/Pyplot
```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns  # Optional but recommended

# Style configuration
plt.style.use('seaborn')  # Optional but improves default aesthetics
```

### Line Plots
```python
# Simple line plot
df.plot(x='date', y='value')
# Multiple lines
df.plot(x='date', y=['value1', 'value2'])

# More control with pyplot
plt.figure(figsize=(10, 6))
plt.plot(df['date'], df['value'], label='Series')
plt.title('Title')
plt.xlabel('X Label')
plt.ylabel('Y Label')
plt.legend()
plt.grid(True)
plt.show()
```

### Bar Plots
```python
# Vertical bars
df.plot(kind='bar', x='category', y='value')
# Horizontal bars
df.plot(kind='barh', x='category', y='value')

# Grouped bars
df.plot(kind='bar', x='category', y=['value1', 'value2'])

# Stacked bars
df.plot(kind='bar', x='category', y=['value1', 'value2'], stacked=True)
```

### Statistical Plots
```python
# Histogram
df['value'].hist(bins=50)

# Box plot
df.boxplot(column='value', by='category')

# Violin plot (requires seaborn)
sns.violinplot(data=df, x='category', y='value')

# Distribution plot
df['value'].plot(kind='kde')
```

### Scatter Plots
```python
# Simple scatter
df.plot.scatter(x='value1', y='value2')

# With pyplot for more control
plt.scatter(df['value1'], df['value2'], 
           c=df['color_value'],  # Color by value
           s=df['size_value'],   # Size by value
           alpha=0.5)            # Transparency

# Matrix of scatter plots
pd.plotting.scatter_matrix(df)
```

### Subplots
```python
# Multiple plots in grid
fig, axes = plt.subplots(2, 2, figsize=(12, 8))

# Plot on specific subplot
df.plot(ax=axes[0, 0], title='Plot 1')
df.plot.scatter(ax=axes[0, 1], x='val1', y='val2', title='Plot 2')
df.plot.box(ax=axes[1, 0], title='Plot 3')
df.plot.hist(ax=axes[1, 1], title='Plot 4')

plt.tight_layout()
plt.show()
```

### Time Series Plots
```python
# Time series with proper date formatting
df.set_index('date').plot()

# Customize time series plot
plt.figure(figsize=(12, 6))
plt.plot(df.index, df['value'])
plt.gcf().autofmt_xdate()  # Angle and align the tick labels
```

### Customization and Saving
```python
# Common customization options
plt.figure(figsize=(10, 6))
plt.plot(df['x'], df['y'],
         color='blue',
         linestyle='--',
         marker='o',
         linewidth=2,
         markersize=8,
         alpha=0.7)

# Add annotations
plt.annotate('Important Point', 
            xy=(x, y),
            xytext=(x+1, y+1),
            arrowprops=dict(facecolor='black', shrink=0.05))

# Save plot
plt.savefig('plot.png', dpi=300, bbox_inches='tight')
```

### Interactive Plotting with plotly (Optional)
```python
import plotly.express as px

# Interactive line plot
fig = px.line(df, x='date', y='value')
fig.show()

# Interactive scatter
fig = px.scatter(df, x='value1', y='value2', 
                 color='category',
                 size='size_value',
                 hover_data=['additional_info'])
fig.show()
```

Remember to call `plt.show()` when using pyplot directly, unless you're in a Jupyter notebook where it's displayed automatically. Also, it's good practice to use `plt.close()` after saving figures to free up memory when creating many plots in a script.