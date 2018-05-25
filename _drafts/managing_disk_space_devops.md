How to manage disk space for devops

## find large files
many times your instances run out of space, this could be due to logging

or mismanaging docker images, or not anticipating chacheing requirements when
you change the behavior of your software.

here's how you can find the large files on disk and remove them in a pinch

## determine available disk space to see if you need a larger volume

df -h
displays disk usage by directory and the space available on each (go over each
column as it's not obvious, also compare to osx)

## go over systemctl command

## setup cron job to routinely free space
You can free up space on a schedule with cron jobs. To view existing jobs run
{% highlight shell %}
crontab -l
{% endhighlight %}

You may see something like
{% highlight shell %}
0 23 * * * sudo docker system prune --all -f
\*/2 * * * * /usr/share/jenkins/agent-uptime-script.sh
{% endhighlight %}

You can decode this on [crontab.guru](https://crontab.guru/).

This second would print “At 23:00.” The second returns “At every 2nd minute.”
If you click the `next` button some examples are displayed
{% highlight shell %}
next at 2018-04-23 12:24:00
then at 2018-04-23 12:26:00
then at 2018-04-23 12:28:00
then at 2018-04-23 12:30:00
then at 2018-04-23 12:32:00
{% endhighlight %}

## migrating to a larger volume
On AWS.

## Always return true for some command
Say you have a test suite, but you don't want to prevent deployment of the software
when the test suite fails. You can always add `|| true` to any commandline utility.

e.g.,
```
// Jenkinsfile
sh 'npm test || true'
```

## systemd on ubuntu
is the default init system on linux these days.
the logs are stored in binary and are visible with `journalctl`.
Read `man systemd` on a linux box.
