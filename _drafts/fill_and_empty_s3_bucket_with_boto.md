

demo how to fill and empty s3 bucket programatically

def delete_s3_resources(self):
    #     client = boto3.client(
    #         's3',
    #         aws_access_key_id=django.conf.settings.S3_ACCESS_KEY,
    #         aws_secret_access_key=django.conf.settings.S3_SECRET_KEY,
    #     )
    #     bucket = client.list_objects_v2(Bucket=django.conf.settings.S3_BUCKET)
    #     for item in bucket['Contents']:
    #         client.delete_object(Bucket=django.conf.settings.S3_BUCKET, Key=item['Key'])
    #     while len(bucket['Contents']) == 1000:
    #         bucket = client.list_objects_v2(
    #             Bucket=django.conf.settings.S3_BUCKET,
    #             StartAfter=items[0]['Key'],
    #         )
    #         for item in bucket['Contents']:
    #             client.delete_object(Bucket=django.conf.settings.S3_BUCKET, Key=item['Key'])
