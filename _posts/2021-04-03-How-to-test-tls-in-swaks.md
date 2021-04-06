---
layout: post
title: "How to Test TLS in SWAKS"
image: /img/2020-04-3
---

![](/img/2020-0)
In this post we detail how to use Swaks for testing emails over tls. This
post picks up where the manual page leaves off and more explicitly goes
over how to send a test email over tls. Swaks is a popular tool in penetration
testing circles, it is written in Perl and according to it's github history it
was first published on December 12th 2001.

## Installing
Swaks is available from most popular package managers for
[installation](http://www.jetmore.org/john/code/swaks/installation.html).

With ubuntu or debian:
{% highlight shell %}
$ sudo apt-get install swaks
{% endhighlight %}

In a Dockerfile you can append it to the list of dependencies:
{% highlight shell %}
RUN apt-get update \
  # for testing smtp
  && apt-get install -y swaks \
  ...
{% endhighlight %}

Note Swaks is not available in apk for alpine linux base images. I mention this because
alpine is a popular base image for docker containers.

## Send email with tls 1.2
This is the heart of the post. To send an email using swaks and tls 1.2 do:
{% highlight shell %}
$ swaks \
  --to harry@test.com \
  --server smtp.server.com \
  --from email@address.com \
  --auth-user username \
  --auth-password password \
  --port 587 \
  -tls \
  --tls-protocol tlsv1_2
{% endhighlight %}
in my case we had to specify port 587 and a specific from address due to the security
preferences on the smtp server. Your mileage may vary.

## More use
For completeness here is what I first tried. Running swaks by only specifying the credentials
swaks negotiated NTLM (windows NT Lan Manager (a weak protocol)).
{% highlight shell %}
$ swaks \
  --to harry@test.com \
  --server smtp.server.com \
  --from email@address.com \
  --auth-user username \
  --auth-password password \
  --port 587

=== Trying smtp.server.com:587...
=== Connected to smtp.server.com.
<- 220 foo.bar.com Microsoft ESMTP MAIL Service ready at Sat, 3 Apr 2021 19:21:16 -0400
-> EHLO foo.bar.com
<- 250-foo.bar.com Hello
<- 250-SIZE 
<- 250-PIPELINING
<- 250-DSN
<- 250-ENHANCEDSTATUSCODES
<- 250-STARTTLS
<- 250-AUTH GSSAPI NTLM
<- 250-8BITMIME
<- 250-BINARYMIME
<- 250 CHUNKING
-> AUTH NTLM
<- 334 NTLM supported
-> foobar
<- foobar
-> foobar
<- 235  Authentication successful
-> MAIL FROM:<test@server.com>
<- 250 2.1.0 Sender OK
-> RCPT TO:<harry@test.com>
<- 250 2.1.5 Recipient OK
-> DATA
<- 354 Start 
-> Date: Sat, 03 Apr 2021 19:21:16 -0400
-> To: harry@test.com
-> From: email@address.com
-> Subject: test Sat, 03 Apr 2021 19:21:16 -0400
-> Message-Id: <foobar@foo.bar.com>
-> X-Mailer: swaks v20170101.0 jetmore.org/john/code/swaks/
->
-> This is a test mailing
->
-> .
<- 250 2.6.0 <foobar@foo.bar.com> Queued mail for delivery
-> QUIT
<- 221 2.0.0 Service closing transmission channel
=== Connection closed with remote host.
{% endhighlight %}

## OpenSSL
If for whatever reason you cannot install swaks (for example on alpine linux) you
can try the openssl command.

{% highlight shell %}
$ openssl s_client -no_tls1 -no_tls1_1 -no_tls1_2 -connect your.mail.host:port
{% endhighlight %}
