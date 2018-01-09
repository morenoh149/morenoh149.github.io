---
---

these are some notes I've compiled while learning Rails development. Since I use Heroku
it makes alot of sense to install postgresql locally and become familiar with it.

use `\d` to list all the tables in your database
you can run commands within psql by terminating a line with `;`
Note if you just use a carriage return you'll just send the database
a multiline command. This caused me lots of confusion.

Say you ran a migration that added a column and for whatever reason you want to get
rid of it from the commandline. use `ALTER TABLE table_name DROP column_name;`
Don't add `'` or `"` to the arguments they'll be interpreted as part of the names.


figure out why I thought this was important (http://www.postgresql.org/message-id/1155685965.28246.6.camel@dell.home.lan)


sometimes you have to drop a column. example, I made another branch and started modifying my dev db. but ended up deleting that branch
and retrying the feature in a new branch. But I wanted to use the same column name in the database.
The new branch will have a migration that attempts to create the same column in the db. And the migration will not go through because the
column already exists. use this:

`ALTER TABLE "users" drop COLUMN "username";` inside the psql utility

`\connect DBNAME` or `\c DBNAME` to switch to another database with the currently running instance of psql.
Note your machine may have multiple databases (for different projects). Each db holds many tables (or relations).

\e - to open a large buffer for large sql queries
