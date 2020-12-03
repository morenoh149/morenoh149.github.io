---
layout: post
title: "Django Find Records in an Hour"
---

Here we show how to select all records that occur in an hour. This is useful for
cases where you are running an async task at some interval smaller than a day.
My first attempts at doing this type of filtering involved providing a start and
end datetime. But theres a way to do it more simply by leveraging some database
functions.

I needed to schedule microservice calls based on some business logic. We know with
async tasks its better to add a field to your model with a time to
be acted on rather than delaying tasks ([5. Using a Long countdown or an eta in the Far Future.](https://adamj.eu/tech/2020/02/03/common-celery-issues-on-django-projects/)). So with an hourly task, its pretty
natural to want to find all records that should be acted upon at that hour. The
following example shows running some operation when an Event starts and ends 🤗.

{% highlight python %}

# models.py

class Event(models.Model):
    start = models.DateTimeField(blank=True, null=True)

# tasks.py

# In your celery setup area
def setup_periodic_tasks(sender, **kwargs):
    sender.add_periodic_task(
    crontab(minute=15), do_for_events_this_hour.s(), name="do_for_events_this_hour"
)

# the actual celery task
@app.task()
def do_for_events_this_hour():
    from django.db.models.functions import Now, TruncHour
    from .models import Event

    events_this_hour = (
        Event.objects.annotate(hour=TruncHour("start")).filter(hour=TruncHour(Now()))
    )
    for event in events_this_hour:
        print(f"event this hour: {event}")

{% endhighlight %}

This basically truncates the datetime start to the nearest hour. And because we
run the task every hour we don't have to worry about the minutes and seconds.

The `crontab(minute=15)` bit makes the task run at the 15th minute of every hour.
The [celery crontab](https://docs.celeryproject.org/en/stable/reference/celery.schedules.html#celery.schedules.crontab) api provides an asterisk for the default values of args like `hour`,
`day_of_week`, etc. So an invocation like `crontab(minute=15)` is evaluated like
`crontab(minute=15, hour='*', day_of_week='*', day_of_month='*', month_of_year='*')`,
which is analagous to `15 * * * *`. [See in crontab](https://crontab.guru/#15_*_*_*_*).


My original approach involved tracking start and end times
{% highlight python %}
start = timezone.now()
end = start + datetime.timedelta(hours=1)
...
Event.objects.filter(start__gte=start, start__lt=end)
{% endhighlight %}
but you have to worry more about edgecases and this might be slower.
