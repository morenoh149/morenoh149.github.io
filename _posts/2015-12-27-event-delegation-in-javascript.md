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

The diagram above illustrates event propagation if a user were to click on a
cell in a table on a webpage. It illustrates three phases the browser goes
through:

1. **Capture** - the browser fires all events set to capture mode from the root
to the target
2. **Target** - events registered at the target fire
3. **Bubbling** - event propagates upwards. Most events are set to fire during
this phase

This is fundamental browser behavior, and as such, essential knowledge for web
developers. Using this system we can write our programs more simply. We can
place an event listener on an ancestor element to handle all events that occur
below it. The classic example is placing a listener on a list (`<ul>`, `<ol>`)
and capturing bubbling click events from the `<li>`s below it. This results in
reduced RAM usage for the webpage and less code for developers to maintain.

{% highlight javascript %}
var table = document.getElementsByTagName("tbody")[0];
table.addEventListener(
  'click',
  function(e) {
    if (e.target && e.target.nodeName == "TD") {
      console.log('Cell clicked! Contents: ', e.target.textContent);
    }
  }
);
{% endhighlight %}

Here we add an event listener on the table body that can print out any cell's
contents. We introspect on `e.target` to identify the specific element that was
clicked.

The strategy may become cumbersome if your logic is looking for an intermediate
element, say, trigger logic on `<a>` but `e.target` is a nested `<span>`. You'll
have to use `e.target.className.split(' ')` and look for specific classes.

## useCapture
Most events bubble. But some don't. `focus`, `change`, `error` and `blur` for
example.

For these you can execute the event listener (function) during the capture phase
instead. Simply provide `true` as the third argument to `addEventListener`.

{% highlight javascript %}
table.addEventListener(
  'click',
  function(e) { console.log('event target ', e.target); },
  true // <- useCapture
);
{% endhighlight %}

Interestingly `e.target` is still the initiating dom node. The browser must be
computing that before the propagation phases are performed.

## Stopping
If for whatever reason you want to stop an event from firing on any other
nodes in the chain use `Event.stopPropagation()`. It even works on events triggered
during the capture phase.

More often though you'll be using `Event.preventDefault()` as it prevents
behavior such as toggling checkboxes and loading other pages after clicking
links anchor tags.

{% highlight javascript %}
// <a href="foo.com"><span>text</span></a>

a.addEventListener(
  'click',
  function(e) {
    e.preventDefault();  // <- stops browser from following the link
    e.stopPropagation();
  },
  true
);

span.addEventListener(
  'click',
  function(e) {
    // logic here will never execute
  }
);
{% endhighlight %}

## jQuery
If you are considering using jQuery for it's event delegation and event
normalization features consider the following lighter weight implementations of the
[Event Delegation Pattern](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/event-delegation.html)

* Google's [JsAction](https://github.com/google/jsaction/)
* The Financial Times' [DOM Delegate](https://github.com/ftlabs/ftdomdelegate)

## React
React provides a
[Synthetic Event](https://facebook.github.io/react/docs/events.html#syntheticevent)
api which attempts to provide a more uniform interface for events.
For example it sets all events to bubble by default.

To define listeners that execute during the capture phase simply append
`Capture` to the function name, e.g., `onFocusCapture` will execute the
listener on `focus` during the capture phase.
