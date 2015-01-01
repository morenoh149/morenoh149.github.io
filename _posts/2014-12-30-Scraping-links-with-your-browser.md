---
layout: post
title: Scraping links with just your browser
---

I recently came across a page with lots of links to txt files. I got frustrated when I wanted to look up
something in these files but couldn't because I'd have to download each one by one.

<br>

{:.center}
###  - ENTER THE BROWSER CONSOLE -

{:.right}
<small>*plus js friends*</small>

<br>

{% highlight javascript %}
// Run all this code in your browser console aka dev tools
// Grab all links on the current page
var links = $('a');
{% endhighlight %}

This returns a jquery-like object. A bunch of key-value pairs. The values being DOM Objects.
Sadly javascript doesn't have a `.values()` method like
[Ruby](http://www.ruby-doc.org/core-2.2.0/Hash.html#method-i-values). We could shim it using the following
function

{% highlight javascript %}
values = function(obj){
  return Object.keys(obj).map(function(key){
    return obj[key];
  });
}
{% endhighlight %}

See [this stackoverflow question](http://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key).

Then
{% highlight javascript %}
// make links an array of DOM anchor elements
links = values(links);

// Regex with criteria we're looking for
var myregex = /txt/;

// Filter using the regex
links = links.filter(function(element) {
  return myregex.exec(element.href);
});

// You can tell your browser to download these files by executing the click() method
links[0].click();
{% endhighlight %}

But what if there are too many?
You could try

{% highlight javascript %}
goodlinks.forEach(function(element) {
  element.target = "_blank";
  element.click();
});
{% endhighlight %}
Make sure that the anchor element has a
target of `_blank` or browsers will prevent so many tabs from opening.
If your browser is preventing too many tabs to open, or the site is throttling you, simulate pagination
{% highlight javascript %}
var start = 0;
for(var i=0; i<20; i++) {
  links[i + start].target = "_blank";
  links[i+start].click();
}
{% endhighlight %}
and repeat calls to this after incrementing start. Say `start = 20` then `start = 40` and so on.

Now on to building a [Full-text search engine with Postgres](http://blog.lostpropertyhq.com/postgres-full-text-search-is-good-enough/).
