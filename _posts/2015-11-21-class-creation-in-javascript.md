---
layout: post
title: Class creation in javascript
---

Javascript isn't generally considered a very object oriented language. It allows
a lot of flexibility in approaches. The following notes detail how to create an
object in javascript utilizing constructor functions.

We create one object, then add a function to it's prototype chain to avoid
having it copied many times, then we subclass it and detail how to set up the
prototype chain.

{% highlight javascript %}
function ParentClass() { // constructor function
  this.x = 1;
  this.y = 2;

  this.move = function() { // available to all instances but copied many times
    console.log('move!');
  }
}

var p = new ParentClass(); // make an instance

console.log('p is typeof', p.constructor.name); // query constructor object to get typeof

try {
  p.global('aye');
} catch(e) {
  console.log('catch error', e);
}

// add a method to every instance of this class, shared amongst all instances
ParentClass.prototype.global = function(arg) {
  console.log('method on the prototype chain:', arg);
}
p.global('aye'); // available even to already created instances

// subclassing
function SubClass() {
  ParentClass.call(this); // 'super'-class constructor call
}

var s = new SubClass();
s instanceof ParentClass // false
s instanceof SubClass // true

// setup prototype chain for inheritance
SubClass.prototype = Object.create(ParentClass.prototype);
SubClass.prototype.constructor = ParentClass;

var c = new SubClass();
c instanceof ParentClass // true
c instanceof SubClass // true
{% endhighlight %}

Another common feature leveraged with classes is privacy of variables and functions.
The less we expose in our classes and APIs the less coupling we get between
modules.

* use `this` keyword for public fields
* use `var` to instantiate things only available within this closure.
* use `this.methodName` to define a *privileged* function, a public function that
can access private variables. Similar to getters.

{% highlight javascript %}
// module.js
function Module() {
  this.public = 'foo'
  var private = 'bar'

  var privateHelper = function() { return 42 }
  this.calc = function() { console.log('calculated: ', privateHelper()) }
  this.privileged = function() { return private }
}
module.exports = Module
{% endhighlight %}

You could also explicitly return the object returned by the constructor but
it is not encouraged javascript style. The following produces the same object.

{% highlight javascript %}
// module.js
function Module() {
  var public = 'foo'
  var private = 'bar'

  var privateHelper = function() { return 42 }
  var calc = function() { console.log('calculated: ', privateHelper()) }
  var privileged = function() { return private }

  return {
    public: public,
    calc: calc,
    privileged: privileged
  }
}
module.exports = Module
{% endhighlight %}
