
Today I was starting work on a new project that relied on Ruby. After using rvm for the latest

if you see

gem install bundle
ERROR:  While executing gem ... (Gem::Exception)
    Unable to require openssl, install OpenSSL and rebuild ruby (preferred) or use non-HTTPS sources 

run

`brew install chruby ruby-install`
`ruby-install ruby -- --with-openssl-dir=/usr/local/bin/openssl`
https://medium.com/@heidar/switching-from-rbenv-to-postmodern-s-ruby-install-and-chruby-f0daa24b36e6#.sx932c8to
