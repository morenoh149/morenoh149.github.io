---
layout: post
title: "Sliding Window in python trapezoid"
image: /img/
---
I often find myself having to reimplement the sliding window algorithm. Here is
a basic template for sliding windows. It is a good starting point for adding
other features like counting characters or tracking the largest size of the window.

{% highlight python %}
s = "ABCDEFG"
window_length = 3
ptr_a, ptr_b = 0, 1
while ptr_a < ptr_b:
    win = s[ptr_a:ptr_b]
    print(win)
    if ptr_b == len(s):
        ptr_a += 1
    elif ptr_b - ptr_a < window_length:
        ptr_b += 1
    else:
        ptr_b += 1
        ptr_a += 1
{% endhighlight %}
output
{% highlight bash %}
A
AB
ABC
BCD
CDE
DEF
EFG
FG
G
{% endhighlight %}

We can rewrite this as a generator if you prefer
{% highlight python %}
# sliding_window.py
def sliding_window_generator(s, window_length):
    ptr_a, ptr_b = 0, 1
    while ptr_a < ptr_b:
        win = s[ptr_a:ptr_b]
        yield(win)
        if ptr_b == len(s):
            ptr_a += 1
        elif ptr_b - ptr_a < window_length:
            ptr_b += 1
        else:
            ptr_b += 1
            ptr_a += 1
{% endhighlight %}
interaction
{% highlight bash %}
$ python -i sliding_window.py
>>> g = sliding_window_generator('ABCDEFG', 3)
>>> next(g)
'A'
>>> print(next(g))
AB
>>> next(g)
'ABC'
>>> next(g)
'BCD'
>>> next(g)
'CDE'
>>> next(g)
'DEF'
>>> next(g)
'EFG'
>>> next(g)
'FG'
>>> next(g)
'G'
{% endhighlight %}
