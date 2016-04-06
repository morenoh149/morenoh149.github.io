---
layout: post
title: SchemaSpy for Postgres
---

This was harder than it should have been so I'm documenting it.

0. Install java
1. Download [SchemaSpy](http://schemaspy.sourceforge.net/) it's a .jar file
2. Download [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/) also a .jar
3. Run
`java -jar <schemaspy jar> -t pgsql -db <database name> -u <user> -host localhost -o <output directory> -s "public" -dp <jdbc driver>`

for a remote database (say on Amazon RDS) try

`java -jar <schemaspy jar> -t pgsql -db <database name> -u <user> -p <password> -host foo.bar.region.rds.amazonaws.com -o <output directory> -s "public" -dp <jdbc driver>`

now you can open `<output directory>/index.html` to get amazing info on your postgres database.
Hopefully someday I'll be able to get a postgres schema to load in [wwwsqldesigner](http://ondras.zarovi.cz/sql/demo/?keyword=default)
but I couldn't figure it out. This way I could send my friends a link.
