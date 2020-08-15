

## what does .delay() do?

what is task.delay(4, 4) ?
https://docs.celeryproject.org/en/stable/getting-started/first-steps-with-celery.html#calling-the-task

## scheduling jobs at django startup

## dispatching tasks from a django view

Do not pass in django models as arguments to tasks, that’s bad practice.  Pass the identifier to the celery task, and the task should retrieve the model from the database.
Reason is, you pass the model, and the task doesn’t execute for some time.  The data for that model changes by the time the task executes, so it’s working on old data

## dispatching tasks from a task


## speed up development by with a management command

you can speed up your iteration when writing celery tasks by wrapping them in a management command 
so you can test out the function without restarting docker over and over.
This has the added benefit of being able to insert a breakpoint for debugging your tasks.
We all know how useful debuggers are right?
