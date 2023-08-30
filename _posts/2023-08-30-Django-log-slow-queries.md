---
layout: post
title: "My review of Pandas 30 day challenge"
image: /img/2023-08-30-python-pandas.png
---
![Python Pandas](/img/2023-08-30-python-pandas.png)
Recently I completed the Leetcode 30 day Pandas Challenge. Pandas is a popular python
library for data analysis and Leetcode has made a set of problems to learn it.
Here I share my thoughts on the problems and whether you should try it too.

Some background. Before this challenge I felt I had a good understanding of
Pandas. I understood what dataframes and Series are. How pandas builds upon
numpy datatypes. I also used pandas professionally in the past to build ETL
pipelines.

After the challenge I felt like I had a deeper understanding of pandas. I
am much more comfortable renaming columns in a dataframe, changing dataframe
datatypes, merging frames sql-style and more comfortable solving tasks I may
run into daily.

The set consists of 30 problems to solve. Behind the scenes the problems are
the same as other SQL problems on the website, except you have to solve them with python and pandas. This leads to many sql comments on the problems which
can be annoying for someone trying to learn only pandas.

![Leetcode sql comments on a pandas problem](/img/2023-08-30-leetcode-comments.png)

Also because the problem
statements are for sql you end up getting very comfortable with the pandas
apis. For example in many problems you have to construct the final dataframe
with specific column names

{% highlight python %}
def food_delivery(delivery: pd.DataFrame) -> pd.DataFrame:
    df = delivery
    num = len(df)
    immediate = len(df[df['order_date'] == df['customer_pref_delivery_date']])
    return pd.DataFrame({'immediate_percentage': [round(immediate/num*100, 2)]})
{% endhighlight %}

If we were a python data analyst we wouldn't be naming columns like this very often.

The 30 pandas questions are split into 6 section.
1. Data Filtering
1. String Methods
1. Data Manipulation
1. Statistics
1. Data Aggregation
1. Data Integration

## Data Filtering
Here you are tasked with filtering in many ways. You learn things like
* [Boolean Indexing](https://pandas.pydata.org/docs/user_guide/10min.html#boolean-indexing)
* [.query() method](https://pandas.pydata.org/docs/user_guide/indexing.html?highlight=query#the-query-method)

## String Methods
* Series.str Family of methods [https://github.com/pandas-dev/pandas/blob/v2.0.3/pandas/core/strings/accessor.py#L2962](https://github.com/pandas-dev/pandas/blob/v2.0.3/pandas/core/strings/accessor.py#L2962)
* Adding columns with [numpy.where](https://devdocs.io/numpy~1.23/reference/generated/numpy.where)
* Regex with Series.str.contains() and Series.str.match()

## Data Manipulation
* DataFrames's [head() and tail()](https://pandas.pydata.org/docs/user_guide/basics.html#head-and-tail)
* Numbering rows with [rank() https://devdocs.io/pandas~1/reference/api/pandas.dataframe.rank](https://devdocs.io/pandas~1/reference/api/pandas.dataframe.rank)
* Reshaping and pivot tables with [melt()](https://pandas.pydata.org/docs/user_guide/reshaping.html?highlight=melt#reshaping-by-melt)
* deduplicating with [drop_duplicates()](https://pandas.pydata.org/docs/user_guide/indexing.html?highlight=drop_duplicates#duplicate-data)

## Statistics
* constructing dataframes with [pd.Dataframe()]()
* Quantizing with [pd.cut()](https://pandas.pydata.org/docs/user_guide/basics.html?highlight=cut#discretization-and-quantiling)

## Data Aggregation
* Aggregations with [groupby()]()
* [Named Aggregations](https://pandas.pydata.org/docs/user_guide/groupby.html?highlight=namedagg#named-aggregation) with lambdas
* Adding new columns with [assign()](https://pandas.pydata.org/docs/user_guide/dsintro.html?highlight=assign#assigning-new-columns-in-method-chains)

## Data Integration
* Promoting a group's index to a column with [reset_index()](https://pandas.pydata.org/docs/getting_started/intro_tutorials/07_reshape_table_layout.html?highlight=reset_index#wide-to-long-format)
* sql-style-join with [merge()](https://pandas.pydata.org/docs/user_guide/merging.html#database-style-dataframe-or-named-series-joining-merging)
* testing membership with [Series.isin()](https://pandas.pydata.org/docs/user_guide/indexing.html?highlight=isin#indexing-with-isin)
* [Negating .isin() with the unary not ~](https://pandas.pydata.org/docs/user_guide/indexing.html?highlight=isin#boolean-operators)

Overall I would recommend doing this challenge. The questions seem realistic to
the tasks a data analyst may encounter in everyday work. The questions force
you to use a large amount of the pandas api. The problems are rated as "beginner"
pandas difficulty. You could complement this challenge with some Kaggle
competitions so you could apply your pandas knowledge.