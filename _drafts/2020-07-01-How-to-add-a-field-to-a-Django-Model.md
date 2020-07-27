---
layout: post
title: "How to Add a Field to a Django Model"
---

In Django development you must translate business logic into sql tables and columns.
How we store data and what data we store is constantly changing. In this post we
briefly go over adding data to a Model. And what happens when you inevitably
change your mind.

## Add Url to Model

Say you have an existing model named Product
```
# models.py
class Product(models.Model):
    name = models.CharField(max_length=300)
```
You want to add a new field to store more information about the Product.
You are asked to store a url to the source of the product like a wholesale provider.
You can add a `URLField`.
```
# models.py
class Product(models.Model):
    name = models.CharField(max_length=300)
    source = models.URLField(default="alibaba.com")
```

## Create Migration

To test your change you must alter the database to add this new column.
Run
```
$ python manage.py makemigrations
```
This will generate a new file in `<app_name>/migrations/` detailing how exactly to alter the database.

## Run Migration

But you still need to actually alter the database. To do that run the migration forward
```
$ python manage.py migrate
```
The `migrate` management command will detect unapplied migrations and apply them.

## Check change

You can check the new field is on the model in the django shell
```
$ python manage.py shell
> from app_name.models import Product
> my_product = Product()
> my_product.source
 "alibaba.com"
```

## Change your mind?

Often when developing a feature I may want to change the datatype of the field.
Problem is that you already changed the database locally. Here's how to make the
second change:

1. roll back the migration. 
1. change field type to urlField or ImageField
1. delete old migration
1. creat new migration
1. apply new migration
1. check things work as expected
