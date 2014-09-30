---
layout: post
title: Why is it so damn hard to gitignore recursively
---

I have a directory where I'm storing all my solution to [nodeschool.io](http://www.nodeschool.io/) courses.
For many of these solutions I have installed node dependencies. These are stored in a `node_modules` directory
in each folder. To ignore a directory recursively you can use the following `.gitignore` file

{% highlight bash %}
# .gitignore file
node_modules
{% endhighlight %}

If you would like to remove any node_modules directories you've added accidentally you can use something like
`git rm --cached */node_modules -r` (ymmv).

Why did this warrant a blog post? I was searching around online and on irc for the solution to my problem
and there were a lot of misleading solutions such as `/***/node_modules` `**/node_modules` or even `**/*node_modules`.
Now I know.

Related [1](http://huge.mints.ne.jp/01/2014/it_technique_en/761/#comment-3684) [2](http://stackoverflow.com/questions/16550688/how-to-gitignore-files-recursively)
