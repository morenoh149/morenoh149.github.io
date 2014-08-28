---
layout: post
title: Adding unix aliases to OSX
---

A part of mastering the commandline is extending it with your own custom commands. On any nix environment you
should have access to config files, e.g., `~/.bashrc` or `~/.profile`. I add my aliases to my `~/.zshrc` file.
[ZSH](https://github.com/robbyrussell/oh-my-zsh) is pretty dope btw, definitely check it out.

Heres and excerpt of my `.zshrc`.
{% highlight bash %}
alias mkblog="jekyll build; jekyll serve -w"
alias gph="git push heroku master"
alias rr="rake routes"
alias corrun="cordova build android; cordova run android; adb logcat | grep CONSOLE"
function pyserver() {
  python -m SimpleHTTPServer "${1:-8765}";
}
alias tunnel="ssh harry@< took out my ip :p > -D 8080"
{% endhighlight %}


