---
layout: post
title: How to add ESLint to a React Project
---

This is how I add eslint to a javascript project. It also lints `.jsx` files.

Run `npm install babel babel-eslint eslint eslint-plugin-react`

Then set in your `.eslintrc` file
{% highlight javascript %}
{
"parser": "babel-eslint",
"plugins": ["eslint-plugin-react"]
}
{% endhighlight %}

Also enable whatever rules you'd like from [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react).

Add to your `.package.json`
{% highlight javascript %}
"scripts": {
  "lint": "eslint --ext=.js,.jsx ."
}
{% endhighlight %}

Now you can lint your project by running `npm run lint`.
