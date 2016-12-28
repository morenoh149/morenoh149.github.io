---
layout: post
title: Class creation in javascript
---

I found this tricky. I was trying to test a node program that would log to stdout as is prescribed by
[12 factor apps: logs](https://12factor.net/logs).


{% highlight javascript %}
mport axios from 'axios';
import test from 'ava';
import http from 'http';
const exec = require('child_process').exec;

test('app can run', t => {
  let captured_stdout = '';

  return new Promise((resolve, reject) => {
    const server = exec('node ./index.js', { env: { SERVER_PORT: 4001 }}, (error, stdout, stderr) => {
        // if (error || stderr) { // not useful as SIGTERM appears as an erroneous exit
        //   reject();
        // }
        captured_stdout = stdout.trim().split('\n');
        resolve();
      }
    );
    setTimeout(() => { server.kill('SIGTERM'); }, 1000);
  }).then(() => {
    t.is(captured_stdout.length, 2);
    t.is(JSON.parse(captured_stdout[1]).state, 'running');
  });
});

test('memory event logged after 10s', t => {
  let captured_stdout = '';

  return new Promise((resolve, reject) => {
    const server = exec('node ./index.js', { env: { SERVER_PORT: 4002 }}, (error, stdout, stderr) => {
        captured_stdout = stdout.trim().split('\n');
        resolve();
      }
    );
    setTimeout(() => { server.kill('SIGTERM'); }, 11000);
  }).then(() => {
    t.is(JSON.parse(captured_stdout[2]).event, 'memory');
  });
});

{% endhighlight %}
