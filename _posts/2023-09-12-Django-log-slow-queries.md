---
layout: post
title: "Django log slow queries"
image: /img/2023-09-12-stopwatch.png
---
![Stopwatch running a marathon](/img/2023-09-12-stopwatch.png)
It is important to keep track of the performance of your application. One
popular way to do this is to log slow queries. Below is how to do this in Django
python. Your logging config will vary depending on how your django app is setup.
On simpler django sites it might be in [settings.py](https://docs.djangoproject.com/en/4.2/topics/logging/#examples)

{% highlight python %}
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'slow_queries': {
            '()': 'django.utils.log.CallbackFilter',
            # output slow queries only, unit are 1s, so 0.3 is 300ms
            # ref 300ms * 0.001 = 0.3, 50ms * 0.001 = 0.05
            'callback': lambda record: record.duration > 0.05
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': True,
        },
        'django.db.backends': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': False,
            'filters': ['slow_queries'],
        },
    },
}
{% endhighlight %}

This config has two `loggers`. One named `django` and one named `django.db.backends`.
Loggers are the entry point for the logging system in django. We apply our slow
query logic only to the `django.db.backends` handler. After a logger has
dealt with a log it applies any `filters` onto it.

Filters provide extra control over logs. We define one filter in the example above.
This filter will allow only slow queries to go through, thus we would log slow
queries so that the developer can read them later. The filter applies a python
lambda inline that will only let logs with a duration > 50 milliseconds pass through.

This config has one handler `console`. A handler is a destination for where
the django logs should go. This could be a file writer, stdout, another handler,
etc.