---
layout: post
title: "Sliding Window in python trapezoid"
image: /img/
---
I often find myself having to reimplement the sliding window algorithm. Here is
a basic template for sliding windows. It is a good starting point for adding
other features like counting characters or tracking the largest size of the window.

This template takes a basic two-pointer approach. But it reads better from top to
bottom and generalizes more than other solutions I have seen. First we increase the window size by shifting the right pointer `r`.
If the window reaches the max size we slide it by incrementing pointer `r` and
the left pointer `l`. If we reach the right side we shrink the window by increasing
the left pointer `l`.

{% highlight python %}
s = "ABCDEFG"
window_length = 3
l = r = 0
while l < len(s):
    if r - l < window_length and r < len(s):
        r += 1
    elif r - l == window_length and r < len(s):
        r += 1
        l += 1
    else:
        l += 1
    win = s[l:r]
    print(win)
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
    l = r = 0
    while l < len(s):
        if r - l < window_length and r < len(s):
            r += 1
        elif r - l == window_length and r < len(s):
            r += 1
            l += 1
        else:
            l += 1
        win = s[l:r]
        yield(win)
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
