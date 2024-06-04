    df = accounts
    bins = pd.IntervalIndex.from_tuples(
        [(0, 19_999), (20_000, 50_000), (50_001, float('inf'))]
    )
    df['category'] = pd.cut(
        df['income'],
        [0, 20_000, 50_000, float('inf')],
        labels=['Low Salary', 'Average Salary', 'High Salary'])
    g = df.groupby('category')
    g = g.count().reset_index().rename(columns={'account_id': 'accounts_count'})
    df =  g[['category', 'accounts_count']]
    # reorder category column
    df = pd.DataFrame({
        'category': [
            'High Salary',
            'Low Salary',
            'Average Salary'
        ],
        'accounts_count': [
                           df[df['category'] == 'High Salary']['accounts_count'],
                           df[df['category'] == 'Low Salary']['accounts_count'],
                           df[df['category'] == 'Average Salary']['accounts_count']
                        ]
    })