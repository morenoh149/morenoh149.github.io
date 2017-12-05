---
layout: post
title: Starting a new Python project with Pipenv
---

[Pipenv](https://github.com/kennethreitz/pipenv) is a new tool for managing dependencies and virtualenv environments for Python projects.

To start a new project:
1. `pipenv install` - instantiates the virtualenv
1. `pipenv shell` - activates the virtualenv
1. `pipenv install <dependency>` - installs a dependency
1. `exit` - exits out the shell as normally to exit the virtualenv
 
When users pull your project they should run
1. `pipenv shell`
1. `pipenv install`
