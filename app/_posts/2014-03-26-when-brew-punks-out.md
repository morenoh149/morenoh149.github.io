---
layout: post
title: When brew punks out
---

Today I was trying to upgrade all my brew kegs with `brew upgrade`. But it trips up on libiconv.
You might try like I did and call brew with sudo but you get this message

{% highlight bash %}
Error: Cowardly refusing to `sudo brew upgrade`
You can use brew with sudo, but only if the brew executable is owned by root.
However, this is both not recommended and completely unsupported so do so at
your own risk.
{% endhighlight %}

Interesting, so now what? We could login as root but that might complicate things.
What I did was give myself (a non-root user) access to the file. Like so

{% highlight bash %}
sudo su
<password>
chown <username> /usr/local/Cellar/libiconv/
exit
{% endhighlight %}

Now that directory belongs to the current user and brew has no issues modifying that directory!

http://stackoverflow.com/questions/14527521/brew-doctor-says-warning-usr-local-include-isnt-writable
`sudo chown -R $USER /usr/local/include`
