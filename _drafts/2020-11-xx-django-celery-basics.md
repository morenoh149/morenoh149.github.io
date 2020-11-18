1. setup with cookiecutter-django (docker + celery + flower)
1. write a task that runs once per minute (polling some mailbox)
1. write a task that runs once per day (sql report)
1. write a task that is scheduled by a django view immediately (resize an image, send emails, perform some action on every row in a csv, or some other long running process)
1. write a task that begins polling after a view runs (view submits job to 3rd party api, task needs to poll for result)

