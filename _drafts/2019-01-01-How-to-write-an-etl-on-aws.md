How to write an ETL with Python.

on AWS, lets say you are a startup using the typical tech stack. ror/node/django
with a postgres db for oltp. You are now growing up and need to generate reports
for the sales department every day. This is taxing on the database and degrades
performance for paying customers during the day. What the solution?

Build an etl from pg to a datawarehouse. Lets build an etl that takes the data
from postgres, makes any transformations we want, and then load it into redshift.
This way we basically are making a copy of the data and can query the datawarehouse
without slowing down the main database.

use http://docs.bonobo-project.org/en/master
