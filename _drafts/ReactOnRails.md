---
layout: post
title: React On Rails
---

Lessons learned from developing a React app with a JSON API.

* use browserify
* use npm to manage your frontend dependencies
* use [heroku-buildpack-multi](https://github.com/ddollar/heroku-buildpack-multi)
when pushing your polyglot app. *Note* this will cause both bundle and npm to
run everytime you push to heroku. My deploys are creeping up on 5 minutes to
complete.
