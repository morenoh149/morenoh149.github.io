---
layout: post
title: How to fill and empty an s3 bucket programmatically
---

Say you have an s3 bucket. You may want to programmatically empty it. In order to empty
a bucket it must have items in it. So I'll demonstrate how to both put and remove items from a bucket.
We'll use the excellent [boto3](https://boto3.readthedocs.io/) library.

### How to fill a bucket

{% highlight javascript %}
{% endhighlight %}

### How to empty a bucket

{% highlight javascript %}
def delete_s3_resources(self):
    client = boto3.client(
        's3',
        aws_access_key_id=django.conf.settings.S3_ACCESS_KEY,
        aws_secret_access_key=django.conf.settings.S3_SECRET_KEY,
    )
    bucket = client.list_objects_v2(Bucket=django.conf.settings.S3_BUCKET)
    for item in bucket['Contents']:
        client.delete_object(Bucket=django.conf.settings.S3_BUCKET, Key=item['Key'])
        while len(bucket['Contents']) == 1000:
            bucket = client.list_objects_v2(
                Bucket=django.conf.settings.S3_BUCKET,
                StartAfter=items[0]['Key'],
            )
            for item in bucket['Contents']:
                client.delete_object(Bucket=django.conf.settings.S3_BUCKET, Key=item['Key'])
{% endhighlight %}
