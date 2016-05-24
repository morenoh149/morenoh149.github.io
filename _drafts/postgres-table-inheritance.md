postgres has a feature called table inheritance.

What is this and when should you use it? should you avoid it?

* http://www.postgresql.org/docs/current/static/ddl-inherit.html
* pay special note to the caveats http://www.postgresql.org/docs/current/static/ddl-inherit.html#DDL-INHERIT-CAVEATS
* [Table inheritance Overview](http://www.varlena.com/GeneralBits/98.php)
* http://ledgersmbdev.blogspot.com/2012/08/intro-to-postgresql-as-object.html http://ledgersmbdev.blogspot.com/2012/08/postgresql-or-modelling-part-2-intro-to.html http://ledgersmbdev.blogspot.com/2012/08/postgresql-or-modelling-part-3-table.html

thus, table inheritance is something you should likely not use at the beginning of a project. You typically use it when a table has grown
larger than the physical memory on your server.

Postgres supports partitioning via table inheritance, thus the two topics are deeply related.

  Myon | morenoh149: "use it for partitioning, but not for anything else"  
## what is partitioning?
* [Partitioning Docs](http://www.postgresql.org/docs/current/static/ddl-partitioning.html)
* [Partition a table that is already being referenced to](http://people.planetpostgresql.org/dfetter/index.php?/archives/51-Partitioning-Is-Such-Sweet-Sorrow.html)
* [Partitioning as a strategy to keep indexes small enough to fit in memory](https://wiki.postgresql.org/wiki/Segment_Exclusion)
* [pg_partman - Partition management extension for PostgreSQL](https://github.com/keithf4/pg_partman)
* [Slides - PostgreSQL Partioning](http://www.slideshare.net/xzilla/postgresql-partitioning-pgcon-2007-presentation)


* [mysql vs postgres](http://www.wikivs.com/wiki/MySQL_vs_PostgreSQL#bodyContent)

How to keep track of stuff:

if you're a serious company you're going to want to keep track of changes in your database. Is there a generic enough
approach we can adopt in our projects?

https://github.com/disqus/pg_audit

