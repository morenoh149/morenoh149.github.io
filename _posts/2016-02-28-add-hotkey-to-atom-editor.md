---
layout: post
title: How to add a shortcut to Atom
---

Atom has become my default editor. Before I used vim most but thankfully there
is a [vim-mode](https://github.com/atom/vim-mode) plugin to get most of the
benefits.

However not everyone is comfortable using vim navigation keys to edit code.
For my team members I added a shortcut to my Atom config to quickly enable and
disable the vim-mode plugin. It pays to be a good team player!

You can extend your Atom editor by adding functionality to your `init.coffee`.
{% highlight javascript %}
// ~/.atom/init.coffee
atom.commands.add 'atom-workspace', 'vim-mode:toggle-enabled', ->
  disabledPackages = atom.config.get('core.disabledPackages')
  disabledPackageIndex = disabledPackages.indexOf('vim-mode')
  if disabledPackageIndex is -1
    disabledPackages.push('vim-mode')
  else
    disabledPackages.splice(disabledPackageIndex, 1)
  atom.config.set('core.disabledPackages', disabledPackages)
{% endhighlight %}

Then to add a shortcut to execute `vim-mode:toggle-enabled` defined above add to
your `keymap.cson`.
{% highlight javascript %}
// ~/.atom/keymap.cson
'atom-workspace':
  'ctrl-alt-v': 'vim-mode:toggle-enabled'
{% endhighlight %}

Now I can do `ctrl-alt-v` to turn vim-mode on and off.

Read more about
[The Init File](https://atom.io/docs/v1.5.2/hacking-atom-the-init-file)
and
[Customizing Key bindings](https://atom.io/docs/v1.5.2/using-atom-basic-customization#customizing-key-bindings).
