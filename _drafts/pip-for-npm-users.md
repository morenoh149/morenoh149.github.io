pip + virutalenv together have the same functionality as npm does

* `virtualenv <env directory>` creates the project environment

* unlike npm it must be activated `source <env directory>/bin/activate`

you may now install dependencies like `pip install foo`, unlike `npm install foo`

you dependencies will reside in the virtualenv directory, unlike in node_modules

unlike npm where you can specify `npm install --save foo` to add the file to the project dependencies,
with pip you must freeze out your dependencies `$ pip freeze > requirements.txt`

Unlike `package.json` it is conventional to list project requirements in a `requirements.txt` file.

Read http://docs.python-guide.org/en/latest/dev/virtualenvs/
