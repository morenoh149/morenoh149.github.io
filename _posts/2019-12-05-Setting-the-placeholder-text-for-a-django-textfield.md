---
layout: post
title: "Setting the placeholder text for a Django TextField"
---
Recently I struggled with a Django form. The requirement was to specify a placeholder
html data attribute. This task is very standard but the terms involved made it
tricky to figure out the solution. I provide it here to help others.

Let's say you have an Event model. The description may be very long so you choose
the TextField to store it.

{% highlight python %}
class Event(gis_models.Model):                                                                                         
    title = models.CharField()
    description = models.TextField(blank=True, null=True)
{% endhighlight %}

We may then make a form class for our Event model.

{% highlight python %}
class EventForm(forms.ModelForm):
    description = forms.CharField(
        required=False,
        widget=forms.Textarea(
            attrs={"placeholder": "Add a description of your event",}
        ),
    )

    class Meta:
        model = Event
        fields = [
            "title",
            "description",
        ]
{% endhighlight %}

Let's dissect this:
1. We override the the default rendering for the description. If we omitted the `description = forms...` part we would still get a working form input.
1. This form field override consists of two parts for us, the Field and the widget.
  1. If you review the list of [Built-in Field classes](https://docs.djangoproject.com/en/2.2/ref/forms/fields/#built-in-field-classes) you'll notice there is no field for a text or TextField. So instead the closest is the `CharField` which we use.
  1. Reviewing the [Widgets handling input of text](https://docs.djangoproject.com/en/2.2/ref/forms/widgets/#widgets-handling-input-of-text) you'll see best widget for our case is the Textarea (note the case).
1. For this example we are making the description optional. In django form classes any explicitly defined fields are considered required, so we need to mark it as explicitly _not_ required to make it optional.
1. All Form fields accept a `widgets` keyword argument. This is the html template that django will return to the browser. This is where we tell django we want an html5 `<textarea>` tag in our form.
1. The `forms.Textarea` (note the case) accepts a keyword argument `attrs`. This is a dictionary of html data attributes that you want to attach. This is where we specify the placeholder text
1. Finally in the `Meta` we are required to pass in either `fields` or `exclude` specifying what model fields we want in our form.

For completeness here is a django template that would work with the previous form.
It uses some bootstrap4.

{% highlight python %}
<form action="/" method="post">
  {% csrf_token %}
  {{ form.non_field_errors }}
  <formgroup>
    {{ form.title.errors }}
    {{ form.title.label_tag }}
    {{ form.title }}
  </formgroup>
  <formgroup>
    {{ form.description.errors }}
    {{ form.description }}
  </formgroup>
  <input type="submit" class="btn btn-primary" value="Submit" />
</form>
{% endhighlight %}
