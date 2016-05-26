---
layout: post
title: Fix Ruby OpenSSL missing
---

Today I was starting work on a new project that relied on Ruby. I saw the following error

gem install bundle
ERROR:  While executing gem ... (Gem::Exception)
    Unable to require openssl, install OpenSSL and rebuild ruby (preferred) or use non-HTTPS sources 

run

`brew install chruby ruby-install`
`ruby-install ruby -- --with-openssl-dir=/usr/local/bin/openssl`
then switch to it with
`chruby <ruby version>`
https://medium.com/@heidar/switching-from-rbenv-to-postmodern-s-ruby-install-and-chruby-f0daa24b36e6#.sx932c8to

I still got another related error

gem install eventmachine -v '1.2.0.1'
Building native extensions.  This could take a while...
ERROR:  Error installing eventmachine:
	ERROR: Failed to build gem native extension.

to fix this
`brew link openssl`
and follow the instructions. Which told me to unlink another package and rerun the command.
