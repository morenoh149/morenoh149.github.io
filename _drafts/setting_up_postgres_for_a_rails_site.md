---
layout: post
title: Setting up Postgres for a Rails site
---

Here's a quick solution adding a specific user (aka role) in Postgres.

If your rake complains
```
ActiveRecord::NoDatabaseError (FATAL:  role "<appName>" does not exist
Run `$ bin/rake db:create db:migrate` to create your database):
```

You may need to setup a user in Postgres for the project.

Run `createuser <appName>`. Add `-s` if you get an error about the user not
being able to create databases `createuser <appName> -s`.

If you need to delete this user run `dropuser <appName>`.
