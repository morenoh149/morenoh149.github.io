haha, So the first useful part is the history tab. Opening that will show you every request that has run since the server started

and if you’re making a bunch of ajax requests you’ll want to press the refresh button to see those appear

then you can switch to one of the requests and the rest of the tabs will switch to showing everything for that request

so the sql tab shows you every sql query for that request. You can open up a trace of what is calling that query, but generally it’s kinda messy and buried deep inside django rest framework

What i’ve found to be useful is just looking for duplicate and similar queries. These generally occur when you’re fetching a number of objects and then doing a pulling a related object from within python

So something like
for expert in Expert.objects.all():
  print(expert.meeting.all())


that expert.meeting.all()  is going to make it’s own query. but we can use stuff like select_related('meeting') in our query to prefetch that data. And you can see how the query is changed in django debug toolbar
