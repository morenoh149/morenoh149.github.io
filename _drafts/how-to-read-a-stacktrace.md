

say you have
```
value@https://www.foobar.com/main.1234.js:10:20000
value@[native code]
notifyAll@https://www.foobar.com/main.1234.js:11:20000
close@https://www.foobar.com/main.1234.js:12:20000
closeAll@https://www.foobar.com/main.1234.js:13:20000
perform@https://www.foobar.com/main.1234.js:14:20000
perform@https://www.foobar.com/main.1234.js:15:20000
w@https://www.foobar.com/main.1234.js:16:20000
w@[native code]
closeAll@https://www.foobar.com/main.1234.js:17:20000
perform@https://www.foobar.com/main.1234.js:18:20000
l@https://www.foobar.com/main.1234.js:19:20000
a@https://www.foobar.com/main.1234.js:11:20000
enqueueSetState@https://www.foobar.com/main.1234.js:12:20000
setState@https://www.foobar.com/main.1234.js:13:20000
handleChange@https://www.foobar.com/main.1234.js:13:20000
[native code]
u@https://www.foobar.com/main.1234.js:14:20000
https://www.foobar.com/main.1234.js:15:20000
s@https://cdn.thirdparty.lib/thirdparty.min.js:16:20000
https://cdn.thirdparty.lib/thirdparty.min.js:17:20000
r@https://cdn.thirdparty.lib/thirdparty.min.js:18:20000
```
or
```
Error: value is undefined
    at t.value (https://www.foobar.com/main.1234.js:11:20000)
    at e.notifyAll (https://www.foobar.com/main.1234.js:12:20000)
    at a.close (https://www.foobar.com/main.1234.js:13:20000)
    at a.closeAll (https://www.foobar.com/main.1234.js:14:20000)
    at a.perform (https://www.foobar.com/main.1234.js:15:20000)
    at r.perform (https://www.foobar.com/main.1234.js:16:20000)
    at r.perform (https://www.foobar.com/main.1234.js:17:20000)
    at Object.w [as flushBatchedUpdates] (https://www.foobar.com/main.1234.js:18:20000)
    at a.closeAll (https://www.foobar.com/main.1234.js:19:20000)
    at a.perform (https://www.foobar.com/main.1234.js:11:20000)
```

what are these?

make these and explain them
?? django-traceback.html
?? stacktrace.js
?? stacktrace.py
?? stacktrace.rb

