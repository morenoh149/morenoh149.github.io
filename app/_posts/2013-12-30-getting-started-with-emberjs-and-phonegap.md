---
layout: post
title: Getting started with emberjs and phonegap (work in progress)
---

Source code for this project can be found [here](https://github.com/morenoh149/ember_blog_tutorial_with_ember_app_kit).

The ember app kit is currently the defacto starting point for any ember project.

You're going to have to learn a little grunt and bower. The getting started tutorial on
the ember site is a good starting point. To add bootstrap, moment.js and showdown.js add
them to the end of the dependencies section. Note, bower in the ember-app-kit installs to
the `vendor/` directory as opposed to the `bower_components` which is usually the default.

{% highlight json linenos %}
{
  "name": "ember-app-kit",
  "dependencies": {
    "handlebars": "~1.1.2",
    "jquery": "~1.9.1",
    "qunit": "~1.12.0",
    "ember": "~1.3.0-beta.4",
    "ember-data": "~1.0.0-beta.4",
    "ember-resolver": "git://github.com/stefanpenner/ember-jj-abrams-resolver.git#master",
    "ic-ajax": "~0.2",
    "ember-testing-httpRespond": "~0.1.1",
    "bootstrap": "~3",
    "momentjs": "",
    "showdown": ""
  },
  "resolutions": {
    "ember": "~1.3.0-beta.4"
  }
}
{% endhighlight %}
putting an "" empty string seems to work fine. Then reference these assets from index.html as normal.

The next deviation deals with how handlebars is setup. In the tutorial you see dale declaring
`<script type="text/x-handlebars">` and writing his handlebars stuff right there. With EAK
the templating is put into the `templates/` directory. With `application.hbs` wrapping the
other templates.

`app/templates/application.hbs`
{% highlight html linenos %}
<div class="navbar navbar-default" role="navigation">
  <div class="navbar-header">
    <a class="navbar-brand" href="#">Bloggr</a>
  </div>
  <div class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <li><a href="#">Posts</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
</div>
{% raw %}
{{outlet}}
{% endraw %}
{% endhighlight %}

We then add the about resource to `router.js`

In the tutorial tom simply adds a `posts` var for our sample data fixture. In EAK there's a [api-stub](https://github.com/stefanpenner/ember-app-kit/tree/master/api-stub)
mechanism. Let's use that instead.

You'll need to read (and probably re-read) [Using Modules & the Resolver](http://iamstef.net/ember-app-kit/guides/using-modules.html)
