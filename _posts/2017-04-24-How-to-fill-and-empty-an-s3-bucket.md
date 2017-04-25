---
layout: post
title: How to fill and empty an s3 bucket programmatically
---

Say you have an s3 bucket. You may want to programmatically empty it. In order to empty
a bucket it must have items in it. So I'll demonstrate how to put and remove items from a bucket.
We'll use the excellent [boto3](https://boto3.readthedocs.io/) library.

### How to fill a bucket

{% highlight python %}
# s3_fill.py

import boto3
from s3_constants import S3_ACCESS_KEY, S3_SECRET_KEY, S3_BUCKET

# fill bucket with objects, assumes bucket exists already
def fill_s3_bucket(num_of_objects):
    client = boto3.client(
        's3',
        aws_access_key_id=S3_ACCESS_KEY,
        aws_secret_access_key=S3_SECRET_KEY,
    )
    for i in range(num_of_objects):
        print('creating file', '{:04d}'.format(i))
        client.put_object(Bucket=S3_BUCKET, Body=b'foo', Key='file_' + '{0:04d}'.format(i))

fill_s3_bucket(3000)
{% endhighlight %}

Here we are using the [Client](https://boto3.readthedocs.io/en/latest/reference/services/s3.html#client) object to put
many small files on the s3 bucket.
There's a [Bucket](https://boto3.readthedocs.io/en/latest/reference/services/s3.html#bucket) object but I didn't find it very useful
for this task.
The script prints out it's progress as I found writing to s3 fairly slow.

I pulled the constants from a separate file as that's closer to what I was doing in django.

### How to empty a bucket

{% highlight python %}
# s3_empty.py

import boto3
from s3_constants import S3_ACCESS_KEY, S3_SECRET_KEY, S3_BUCKET

# empty existing bucket
def empty_s3_bucket():
    client = boto3.client(
        's3',
        aws_access_key_id=S3_ACCESS_KEY,
        aws_secret_access_key=S3_SECRET_KEY,
    )
    response = client.list_objects_v2(Bucket=S3_BUCKET)
    for item in response['Contents']:
        print('deleting file', item['Key'])
        client.delete_object(Bucket=S3_BUCKET, Key=item['Key'])
        while response['KeyCount'] == 1000:
            response = client.list_objects_v2(
                Bucket=S3_BUCKET,
                StartAfter=response['Contents'][0]['Key'],
            )
            for item in response['Contents']:
                print('deleting file', item['Key'])
                client.delete_object(Bucket=S3_BUCKET, Key=item['Key'])

empty_s3_bucket()
{% endhighlight %}

Here I empty the bucket. The [list_objects_v2](https://boto3.readthedocs.io/en/latest/reference/services/s3.html#S3.Client.list_objects_v2)
function is designed to paginate and will return at most 1000 object paths. So you'll see we issue requests for more object paths
if the number of keys in a response is 1000. The loop above will delete and paginate until all objects are deleted from the bucket.

The scripts are available in a [gist](https://gist.github.com/morenoh149/8e59b00bc48d42803f5136edceb6a663).
