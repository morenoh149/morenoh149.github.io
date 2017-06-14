---
layout: post
title: Backing up Database data without Transfer
---

When working with data we typically make backups in case we make a mistake. In this age of high speed connections
you sometimes still want to avoid transferring data around, be it because it's very large or youre working over a
cellphone connection. You can backup the data within the database.

If you only have a single schema available create a new one for the purpose of backups.

{% highlight shell %}
% psql
p> CREATE SCHEMA schema_name;
{% endhighlight %}

Then to copy the table run 
{% highlight shell %}
p> CREATE TABLE backup_table AS SELECT * FROM original_table;
{% endhighlight %}

Now you can perform your risky operations on the original data with confidence.

If something bad does happen you can restore info by doing

{% highlight shell %}
p> TRUNCATE original_table;
p> INSERT INTO original_table SELECT * FROM original_table;
{% endhighlight %}

For complete backups read [Chapter 25: Backup and Restore](https://www.postgresql.org/docs/current/static/backup.html).
For a data backup solution try [PGbackrest](https://github.com/pgbackrest/pgbackrest).
