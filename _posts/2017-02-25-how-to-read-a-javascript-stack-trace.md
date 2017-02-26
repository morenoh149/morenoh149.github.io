---
layout: post
title: How to read a Javascript Stack Trace
---

A Stack Trace is a report of the active stack frames at a certain point in time during the execution of a program.
You should learn how to interpret these to debug live systems because in many cases a stack trace is all you have to solve a customer's issue.

You can think of a stack trace as a timeline of function calls that lead up to the error. Software programs typically have a runtime stack. When a function is
invoked the runtime will create a new activation record and place that on "top" of the stack. In this
way a program can weave in and out of function calls, many times entering the same function in a particular trace.

### Example
The following is a minimal example of a program that encounters an error and shows a stack trace.
{% highlight javascript linenos %}
// stacktrace.js
a = () => {
  b();
}
b = () => {
  c();
}
c = () => {
  notDefined();
}
a();
{% endhighlight %}

this program would produce the output
{% highlight shell %}
$ node stacktrace.js
/Users/harrymoreno/stacktrace.js:9
  notDefined();
  ^

ReferenceError: notDefined is not defined
    at c (/Users/harrymoreno/stacktrace.js:9:3)
    at b (/Users/harrymoreno/stacktrace.js:6:3)
    at a (/Users/harrymoreno/stacktrace.js:3:3)
    at Object.<anonymous> (/Users/harrymoreno/stacktrace.js:11:1)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
    at Module.load (module.js:456:32)
    at tryModuleLoad (module.js:415:12)
    at Function.Module._load (module.js:407:3)
    at Function.Module.runMain (module.js:575:10)
{% endhighlight %}

From Wikipedia _"The stack trace shows where the error occurs, namely in the c function. It also shows that the c function was called by b, which was called by a, which was in turn called by the code on the last line of the program. The activation records for each of these three functions would be arranged in a stack such that the a function would occupy the bottom of the stack and the c function would occupy the top of the stack."_

Notice that our code is near the top of the stack trace. Typically when reading a stack trace I do the following:

1. **Identify the frames that belong to me.** Towards the bottom you'll see module related frames from nodejs. When working
with frameworks or libraries like Angular or lodash, you'll want to ignore frames that don't belong to you. As it's
unlikely the issue lays in the dependencies. (Unless you've found a bug in your dependency in which case you should
report the issue with the maintainers!).
1. **Start reading from the top.** The stack trace will include all frames up to the error encountered, but that
doesn't always mean the problem lays there. The end of the stack trace is only a starting point in your search to fix
the bug.

### Practical Example
In modern Single Page Applications certain optimizations are done that will make interpreting a stack trace much
harder. You may get a trace like the following.

{% highlight shell %}
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
{% endhighlight %}

Notes:

* Many folks run their program through a compression step like [UglifyJS](https://github.com/mishoo/UglifyJS2#usage).
This reduces the size of the file downloaded by your visitors.
One downside is that the stack trace produced becomes much harder to read as the function
names are swapped for single character names. For example, functions like `notifyAllUsers` would be renamed to `l`.
* To avoid having the browser download every one of the .js files in your codebase we typically put them all into a
single bundle. This reduces the number of http requests the browser needs to perform (and their associated overheads).
  * However, when you get a stack trace it'll now point to code regions that are very deep in the file like line 14, column
20,000.
  * The bundle itself may be over 1 MB in size. This is large enough to crash many code editors.

#### Stack Trace reading in VIM
Thankfully vim is able to handle large files well enough. Some tips:

* navigate to a deep region of a file (`11:20000`) like so
  * `[line number]gg` so for the above `11gg` will jump to the 11th line
  * `[column number]l` so for the above `20000l` will advance the cursor to the 20000th column
* you may have a dump but the newlines aren't respected for whatever reason
  * `%s/,/,\r/g` will do a global replace on commas and insert a newline after

#### Stringify Error objects with a stack trace
One thing I was surprised to discover was stringification of javascript Error object don't include the related stack
trace by default. Instead it's made available as a property `myError.stack`.

{% highlight javascript %}
var error = new Error('testing');
JSON.stringify(error);  // produces {}
{% endhighlight %}

When logging a client's state a naive
solution may be to process all objects through `JSON.stringify()` but this will omit any Error object's stack traces.
You can solve this by adding a small `replacer` function as an argument to `stringify`

{% highlight javascript %}
// http://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify
function replaceErrors(key, value) {
    if (value instanceof Error) {
        var error = {};
        Object.
          getOwnPropertyNames(value).
          forEach(function (key) {
            error[key] = value[key];
          });
        return error;
    }
    return value;
}
var error = new Error('testing');
JSON.stringify(error, replaceErrors);
{% endhighlight %}

will return a string representation of the Error object along with it's stack trace. Making any sort of clientside
state logging you implement much more useful.
