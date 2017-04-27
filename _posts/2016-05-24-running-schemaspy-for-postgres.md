---
layout: post
title: Running SchemaSpy for Postgres
---

This was harder than it should have been so I'm documenting it.

0. Install Java®️
1. Download [SchemaSpy](http://schemaspy.sourceforge.net/) it's a .jar file
2. Download [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/) also a .jar
3. Run
`java -jar <schemaspy jar> -t pgsql -db <database name> -u <user> -host localhost -o <output directory> -s "public" -dp <jdbc driver>`

for a remote database (say on Amazon RDS) try

`java -jar <schemaspy jar> -t pgsql -db <database name> -u <user> -p <password> -host foo.bar.region.rds.amazonaws.com -o <output directory> -s "public" -dp <jdbc driver>`

If you get a complaint about the schema, it defaults to the username, pass in the correct schema name after `-s`.

now you can open `<output directory>/index.html` to get amazing info on your postgres database.

![Dellstore2 DataModel]({{ site.url }}/img/schemaSpy-dellstore2.png)

Above is the output for the [dellstore2](https://github.com/morenoh149/postgresDBSamples/tree/master/dellstore2-normal-1.0)
datamodel. You can drill down to focus on a single table and its relationships. Let's isolate 'Orders'.

![Dellstore2 Orders]({{ site.url }}/img/schemaSpy-dellstore2-orders.png)

You can test it out yourself [dellstore SchemaSpy]({{ site.url }}/assets/dellstore2/index.html).

Hopefully someday I'll be able to get a postgres schema to load in [wwwsqldesigner](http://ondras.zarovi.cz/sql/demo/?keyword=default)
but I couldn't figure it out. This way I could send my friends a link to my data model.

For other applications, like [weka](http://www.cs.waikato.ac.nz/ml/weka/index.html) you would want to place the jdbc driver in the
[classpath](https://jdbc.postgresql.org/documentation/92/classpath.html).
