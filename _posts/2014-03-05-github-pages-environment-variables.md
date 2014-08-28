---
layout: post
title: Using github pages environment variables
---

**This method is now outdated. Github Pages now exposes the [site.github namespace](https://help.github.com/articles/repository-metadata-on-github-pages)**

I use jekyll with github pages to build this blog. I also use [disqus](http://disqus.com/) for comments.
You just have to add a code snippet into the page.
Problem is when developing with jekyll I usually like to test how things look locally and then push the site to github pages. Which means whenever I look at a blog post I haven't pushed, Disqus will create a thread like `localhost:4000/something.html` in addition to the intended one `morenoh149.github.io/something.html`. I asked around and found a [jekyll plugin](https://gist.github.com/nicolashery/5756478) for environment variables. But github pages [disables plugins](http://jekyllrb.com/docs/plugins/). So I dug through the `site` variable on both production and github pages and found github pages sets `GH_ENV` which I haven't seen documented anywhere. Now I simply do
{% highlight html %}
{% raw %}
{% if site.GH_ENV == 'gh_pages' %}
  < disqus snippet >
{% endif %}
{% endraw %}
{% endhighlight %}
to get the disqus thread generated only if the post is being viewed on github pages.
