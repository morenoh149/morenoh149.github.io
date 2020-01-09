---
layout: post
title: "Django and datatables"
---
I recently worked on a project using Django and datatables. These technologies
are very stable and powerful enough to build UIs that must display large amounts
of data in the browser. We will go over how to extend an example app with more
powerful features.

1. fix warning when a nullable field is missing https://github.com/izimobil/django-rest-framework-datatables/pull/67/files

2. return extra data to the UI for building buttons that work over ajax, i.g. rowId so that we
can toggle the field value of the instance https://github.com/izimobil/django-rest-framework-datatables/blob/master/example/albums/serializers.py

3. explain that thankfully with server side rendering, full text search can be
passed back to the api for processing

4. searching across multiple columns with the `name` arg https://github.com/izimobil/django-rest-framework-datatables/issues/6#issuecomment-569148406


