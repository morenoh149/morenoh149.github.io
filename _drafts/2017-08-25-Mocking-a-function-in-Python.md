---
layout: post
title: How to Mock a function in Python
---

Working code is available at https://github.com/morenoh149/django-diy-blog/tree/hm-mock-function

{% highlight python %}
@patch('app.models.foo')
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
