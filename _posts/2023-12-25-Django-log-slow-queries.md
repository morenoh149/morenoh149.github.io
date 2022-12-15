---
layout: post
title: "Django log slow queries"
image: /img/2023- - -stopwatch.png
---
![Stopwatch running a marathon](/img/2023- - -stopwatch.png)
It is important to keep track of the performance of your application. One
popular way to do this is to log slow queries.

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
