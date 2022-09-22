---
layout: post
title: "How to create a csv in python"
---

Here's a quick way to make a csv in python. We incorporate the current time
so that we get unique filenames and unique rows. Adding unique rows can more
thoroughly test systems that are meant to parse the csv.

{% highlight python %}
class Event(gis_models.Model):
    title = models.CharField()
    description = models.TextField(blank=True, null=True)
{% endhighlight %}

W

"""
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

server = smtplib.SMTP('smtp.foobar.com:587')
server.starttls()

msg = MIMEMultipart()
msg['From'] = "foo@foobar.com"
msg['To'] = "bar@foobar.com"
msg['Subject'] = "Python Email"

message = "This email is sent using python."
msg.attach(MIMEText(message,'plain'))

Password = "bar"
Username = "foo"
server.login(Username, Password)
server.sendmail(msg['From'], msg['To'], msg.as_string())

print("Message sent from " + msg['From'] + " to " + msg['To'])
"""
