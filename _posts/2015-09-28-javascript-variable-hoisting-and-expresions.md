---
layout: post
title: Variable Hoisting and expressions
---

When javascript runs it first parses the entire file for variable and function
declarations. Say you have learned about this and think you understand how it
works. You write the following script and it fails

{% highlight javascript %}
function demo(){
  hoisted1()
  hoisted2()
}
demo()

function hoisted1(){
  console.log('hoisted1 executed')
}

var hoisted2 = function(){
  console.log('hoisted2 executed')
}
{% endhighlight %}

A common pitfall is when you know about hoisting but expect an expression to
also be hoisted. See hoisted1 is a function declaration and gets hoisted.
hoisted2 is a variable declaration and gets hoisted but the expression does not.
I ran into this myself during an interview and could not figure out why the
expression was not available within demo.
