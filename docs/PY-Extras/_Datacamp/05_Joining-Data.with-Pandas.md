---
id: Joining-Data-with-Pandas
title: "5 - Joining Data with Pandas"
sidebar_position: 5
---

:::info 
Related to [Datacamp - Joining Data with Pandas](https://app.datacamp.com/learn/courses/joining-data-with-pandas)
:::

## Chapter 1: Data Merging Basics

### Inner Join
```python
pd.merge(left_df, right_df, on='key')
pd.merge(left_df, right_df, left_on='left_key', right_on='right_key')
pd.merge(left_df, right_df, on=['key1', 'key2'])  # Multiple keys
df1.merge(df2, how='inner', indicator=True)  # Shows merge source
```

### One-to-Many
```python
pd.merge(df1, df2, on='key', validate='1:m')
pd.merge(df1, df2, on='key', validate='one_to_many')
```

### Multiple Tables
```python
df1.merge(df2).merge(df3)  # Multiple tables
df1.merge(df2, on='key1').merge(df3, on='key2')
```

## Chapter 2: Different Join Types

### Left/Right/Outer Joins
```python
pd.merge(df1, df2, how='left')
pd.merge(df1, df2, how='right')
pd.merge(df1, df2, how='outer')
df1.merge(df2, how='left', indicator=True)  # Shows merge type
df_merged = pd.merge(df1, df2, how='outer', suffixes=('_left', '_right'))
```

### Self Joins
```python
pd.merge(df, df, left_on='col1', right_on='col2')
pd.merge(df, df.copy(), on='key')
```

### Index Merges
```python
pd.merge(df1, df2, left_index=True, right_index=True)
pd.merge(df1, df2, left_on='key', right_index=True)
df1.join(df2)  # Simplified index-based merge
df1.join([df2, df3])  # Join multiple dataframes on index
```

## Chapter 3: Advanced Merging

### Filtering Joins
```python
df1[df1['key'].isin(df2['key'])]  # Semi-join
df1[~df1['key'].isin(df2['key'])]  # Anti-join
df1.merge(df2[['key']], on='key', how='left', indicator=True)  # Another semi-join approach
```

### Concatenation
```python
pd.concat([df1, df2])
pd.concat([df1, df2], axis=0)  # Vertical (default)
pd.concat([df1, df2], axis=1)  # Horizontal
pd.concat([df1, df2], ignore_index=True)
pd.concat([df1, df2], keys=['source1', 'source2'])
pd.concat([df1, df2], join='inner')  # Only matching columns
pd.concat([df1, df2], verify_integrity=True)  # Check duplicates
```

### Data Validation
```python
pd.merge(df1, df2, validate='1:1')
pd.merge(df1, df2, validate='1:m')
pd.merge(df1, df2, validate='m:1')
pd.merge(df1, df2, validate='m:m')
```

## Chapter 4: Time Series and Advanced Operations

### Ordered Merging
```python
pd.merge_ordered(df1, df2, on='date')
pd.merge_ordered(df1, df2, on='date', fill_method='ffill')
pd.merge_ordered(df1, df2, on=['date', 'category'])
```

### Asof Merging
```python
pd.merge_asof(df1, df2, on='timestamp')
pd.merge_asof(df1, df2, on='timestamp', by='category')
pd.merge_asof(df1, df2, on='date', tolerance=pd.Timedelta('1D'))
pd.merge_asof(df1, df2, on='timestamp', direction='forward')
pd.merge_asof(df1, df2, on='timestamp', direction='backward')
pd.merge_asof(df1, df2, on='timestamp', direction='nearest')
```

### Query Operations
```python
df.query('column > 5')
df.query('col1 < col2 & col3 == "value"')
df.query('index > "2020-01-01"')
df.query('column.isin(@valid_values)')
df.query('col1 == @variable')  # Using external variables
```

### Melt Operations
```python
df.melt()  # Basic melt
df.melt(id_vars=['id'])  # Keep certain columns as identifiers
df.melt(id_vars=['id'], value_vars=['var1', 'var2'])
df.melt(id_vars=['id'], var_name='variable', value_name='value')
df.melt(col_level=0)  # For multi-level columns
pd.wide_to_long(df, stubnames=['prefix'], i=['id'], j='suffix')
```

### Additional Useful Operations
```python
df.reset_index()  # Reset index before merge if needed
df.set_index('key')  # Set index for join operations
df.sort_values('key')  # Sort before merge (can improve performance)
df.drop_duplicates()  # Remove duplicates before merge
```