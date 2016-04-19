I finished the book.
The following is my review of it and final project.

I'm still learning quite a bit from this other resource, http://philip.greenspun.com/sql/queries.html


triangular relationships http://www.sqlservercentral.com/articles/T-SQL/61539/

RBAR (row by agonizing row) issues https://www.simple-talk.com/sql/t-sql-programming/rbar--row-by-agonizing-row/

CTE common table expressions and derived tables

```
with t1 as (
select a.foo, count(distinct b.id) c
from account a left join rx_order b on a.id = b.account_id group by a.foo)
select c, count(*) as z from t1 group by c bar by c asc;
```

mapping objects to relation databases http://www.agiledata.org/essays/mappingObjects.html
