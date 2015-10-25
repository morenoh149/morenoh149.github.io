---
layout: post
title: Class creation in javascript
---

{% highlight javascript %}
function ParentClass() { // constructor function
  this.x = 1;
  this.y = 2;

  this.move = function() { // available to all instances but copied many times
    console.log('move!');
  }
}

var p = new ParentClass(); // make an instance

console.log('e is typeof', e.constructor.name); // query constructor object to get typeof

try {
  p.global('aye');
} catch(e) {
  console.log('catch error', e);
}

// add a method to every instance of this class, shared amongst all instances
ParentClass.prototype.global = function(arg) {
  console.log('method on the prototype chain:', arg);
}
p.global('aye'); // availabe even to already created instances

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
