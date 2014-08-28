---
layout: post
title: Changing the owner of a heroku app with S3 assets
---

I recently had to migrate a Heroku app that was under my personal accounts, Heroku and s3, to another user.
But this app also had assets under Amazon Web Services Simple Storage Service which made the process more complicated. You can use something like [bucket explorer](http://www.bucketexplorer.com/) to manage S3 with a gui.
I'll show you how to do it with [aws-cli](https://aws.amazon.com/cli/).
I'm assuming you [installed it](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html)
and you're familiar with the commandline in general.

Since we are using more than one aws account we should use a config file to store both sets of credentials. See [AWS configuring environment](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).
Place your personal credentials under default and make another set for the recipient.

{% highlight bash %}
  #~/.aws/config
  [default]
  aws_access_key_id=blah
  aws_secret_access_key=blah
  region=blah

  [profile client001]
  aws_access_key_id=new-blah
  aws_secret_access_key=new-blah
  region=new-blah
{% endhighlight %}

Remember to clear your env
variables if you were using them before. aws-cli defaults to using the env variables if present, even if you pass
the `--profile` argument.

Now you should be able to do `aws s3 ls` and get your file listing. And `aws s3 ls --profile client001` and get the
client's files.
If you are dealing with a small amount of data < 1TB we can simply copy the files to our local machine and then copy
them back to the new bucket. For larger amounts I have no clue :(

{% highlight bash %}
  aws s3 cp s3://mybucket/ . --recursive
{% endhighlight %}
Note aws-cli cp command doesn't support matching by `*` so you have to use the `--recursive` flag.
You can test what will happen if you run the command, with the `--dryrun` flag.

You can copy the files to the new bucket like so.
{% highlight bash %}
  aws s3 cp . s3://new-bucket --profile client001 --recursive
{% endhighlight %}
Note you may have to specifiy `--region some-region` for some reason specifying the region in my config file didn't work.

You have to set the heroku env variables to the new aws credentials using the [heroku toolbelt](https://toolbelt.heroku.com/)
{% highlight bash %}
heroku config:set AWS_ACCESS_KEY_ID=new_blah
heroku config:set AWS_SECRET_ACCESS_KEY=new_blah
heroku config:set AWS_S3_BUCKET=new_blah
{% endhighlight %}
and just transfer it using heroku's [system](https://devcenter.heroku.com/articles/transferring-apps).
