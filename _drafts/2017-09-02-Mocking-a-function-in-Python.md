---
layout: post
title: How to Mock a function in Python
---

Mocking is a useful technique when testing software.

Below we mock out the behavior of a function that returns some value or raises an exception.
{% highlight python %}
@patch('foo')
def test_foo(self, mock_foo):
    '''
    Test some model functionality if foo responds differently between calls.
    '''
    mock_client = mock_foo.Client.return_value
    def side_effect(arg):
        if arg == '123':
    	raise HTTPError
        else:
    	return fixtures.FOO_SUCCESS
    mock_client.C.side_effect = side_effect

    some_function_that_uses_mocked_function_underneath()
{% endhighlight %}

to run do `$ python tests.py`. If you get a complaint about mock not being installed simply
install mock via pip (`$ pip install mock`).
