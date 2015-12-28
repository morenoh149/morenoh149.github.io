---
layout: post
title: Event Delegation in JavaScript
---

Event delegation is a method of simplifying otherwise very verbose event
handling code in browsers. The method allows you to leverage the browser's
built-in event propagation system to execute logic based on user or network
input.

![Event Flow]({{ site.url }}/img/eventflow.svg)

*(source: [DOM-level-3-Events](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow))*

{% highlight javascript %}
{% endhighlight %}


* events bubble up
* so you can place an event listener on an ancestor element to handle all events
that occur below
* introspect on `e.target` to identify the specific element that was clicked on
* may cause issues if your logic is looking for an intermediate element
  * e.g., trigger logic on <a> tags but `e.target` is the <span> inside
* focus, change, error and blur events don't bubble
* Demo creation of an Event in pure js
* you can perform actions during the capture phase (when the event is cascading
  down to the target). This is a good way to perform extra logic for
  non-bubbling events.
* Demo how to trigger event on ancestor before child (by using useCapture=true)
* to prevent propagation of events use `Event.stopPropagation()`. Also works on
events triggered during the capture phase.
* `Event.preventDefault()` instead is used to prevent behavior such as toggling
checkboxes, updating text input fields or navigation on anchor tags.
* `Event.bubbles()`
* React
  * react provides a `Synthetic Event` which attempts to provide a more uniform
  interface
  * for a similar focus event the captures you'd define `onFocusCapture` simply
  appending Capture to the function name
  * quote `"React normalizes events so that they have consistent properties across different browsers."` this means events that traditionally don't bubble are made to
  bubble.
* Don't use jQuery
  * instead here are some lighter weight implementations of the
  [Event Delegation Pattern](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/event-delegation.html)
  * https://github.com/google/jsaction/
  * https://github.com/ftlabs/ftdomdelegate
