---
layout: post
title: Bash script for creating a bootable usb stick on OS X
---

Many times you have to create a bootable usb stick on a mac. I always follow the instructions at
[How to create a bootable USB stick on OS X](http://www.ubuntu.com/download/desktop/create-a-usb-stick-on-mac-osx). I created a quick
bash script that makes this process faster 

{% highlight bash linenos %}
###!/bin/bash
HELP_STR="please provide location of .iso"
if [ "$#" -lt 1 ]; then
  echo $HELP_STR
else
  echo "`diskutil list`"
  echo "==============="
  echo "enter disk to eject"
  echo -e ">> \c"
  read word
  echo "ejecting: $word"
  echo "`diskutil unmountDisk $word`"
  echo "copying $1 to $word note this may take a while and there won't be a progress bar"
  echo "`sudo dd if=$1 of=$word bs=1m`"
fi
{% endhighlight %}

[Gist on Github](https://gist.github.com/morenoh149/8640751/)
