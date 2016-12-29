---
layout: post
title: Testing Javascript Logging Programs
---

This turned out to be more time consuming than I'd like. I was testing a Node.js program that would log to stdout as prescribed by
[The 12 Factor Apps - Logs](https://12factor.net/logs).

Say you have something like
{% highlight javascript %}
// index.js
setInterval(() => console.log(Date.now()), 1000);
{% endhighlight %}

We want to have a test where the program under test is executed, allowed to
print items to `stdout` and then we want to make assertions about what was
logged out.
{% highlight javascript %}
// test.js
import test from 'ava';
const exec = require('child_process').exec;

test('app prints to stdout', t => {
  return new Promise((resolve, reject) => {
    const server = exec(
      'node ./index.js', 
      { env: { SERVER_PORT: 4000 }}, 
      (error, stdout, stderr) => {
	// not useful as SIGTERM appears as an erroneous exit
        // if (error || stderr) { 
        //   reject();
        // }
        const output = stdout.trim().split('\n');
        resolve(output);
      }
    );
    setTimeout(() => { server.kill('SIGTERM'); }, 1000);
  }).then((output) => {
    t.truthy(output);
  });
});

test('another test to illustrate parallelism', t => {
  return new Promise((resolve, reject) => {
    const server = exec(
      'node ./index.js',
      { env: { SERVER_PORT: 4001 }},
      (error, stdout, stderr) => {
        const output = stdout.trim().split('\n');
        resolve(output);
      }
    );
    setTimeout(() => { server.kill('SIGTERM'); }, 1000);
  }).then((output) => {
    t.truthy(output);
  });
});
{% endhighlight %}

Some key things that sunk me time:

* [AVA test runner](https://github.com/avajs/ava) would report a passing test if it reached the end of
the test without error. To avoid this I would have to wrap the `exec` call
in a Promise.
* utilize `exec`'s `option.SERVER_PORT` option with different port values for every test to allow your test suite to run tests and server processes in parallel.
* `exec`'s callback is executed after the process terminates. Since we are
testing a long running process we need to explicitly terminate the server by sending it a `SIGTERM` signal. Above we do so in a `setTimeout`.

[Source on Github](https://github.com/morenoh149/jsLoggingExample)
