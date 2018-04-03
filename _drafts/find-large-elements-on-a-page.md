Routinely when building a mobile responsive website I need to find and element
that is too wide and breaking the page. You can find it with

{% highlight json linenos %}
const deviceWidth = 500;
$$('*').filter((e) => e.offsetWidth > 500)
{% endhighlight %}

