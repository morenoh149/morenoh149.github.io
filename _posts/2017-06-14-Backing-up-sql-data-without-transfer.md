---
layout: post
title: Backing up SQL data without Transfer
---

When working with data we typically make backups in case we make a mistake. In this age of high speed connections
you still want to avoid transferring unnecessary data around, be it because it's very large or you're working over a
cellphone connection. You can backup the data within the database.

If you only have a single schema available, create a new one for the purpose of backups.

{% highlight sql %}
% psql
p> CREATE SCHEMA new_schema;
p> SET search_path TO new_schema;
{% endhighlight %}

Setting the search_path makes the repl work from the prespective of the new schema.

To copy the table run 
{% highlight sql %}
p> CREATE TABLE backup_table AS SELECT * FROM original_schema.original_table;
{% endhighlight %}

Now you can perform your risky operations on the original data with confidence.

If something bad does happen you can restore info by doing

{% highlight sql %}
p> TRUNCATE original_schema.original_table;
p> INSERT INTO original_schema.original_table SELECT * FROM backup_table;
{% endhighlight %}

For complete backups read [Chapter 25: Backup and Restore](https://www.postgresql.org/docs/current/static/backup.html).
For a data backup solution try [PGbackrest](https://github.com/pgbackrest/pgbackrest).
