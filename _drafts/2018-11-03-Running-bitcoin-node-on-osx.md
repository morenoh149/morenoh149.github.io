---
layout: post
title: "Running a full bitcoin node on osx"
image: /img/blah.png
---
![blah](/img/blah.png)
Running a full bitcoin node on osx is a good way to familiarize yourself with node administration.
You can explore the blockchain locally and you don't suffer any of the risks of Simple Payment Verification
nodes suffer from. If you have ~300 GB of free disk space you should try it out.

1. Clone [bitcoin core](https://github.com/bitcoin/bitcoin)
1. `./autogen.sh`
1. `./configure`
1. `make`
1. `sudo make install`
you'll now have `bitcoind` and `bitcoin-cli` in `/usr/local/bin`
1. decide where you want to store the blockchain, for me I used `/Volumes/secondDisk/Bitcoin`
1. verify you can run `bitcoind -datadir=<data location>`, this will also begin constructing the configuration files
1. add file `bitcoin.conf` to your `data location`
1. populate it with the following
```
datadir=<data location>`
txindex=1
```
the txindex lets your bitcoin-cli check all transactions, not just the ones for this installation
1. daemonize it `cp contrib/init/org.bitcoin.bitcoind.plist ~/Library/LaunchAgents`
1. if you are not using the default data location add an extra arg to the config `<string>-datadir=/Volumes/DVDbay/Bitcoin</string>` under the `<string>/usr/local/bin/bitcoind</string>` line
1. load the service file `launchctl load ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist`
1. start the service `launchctl load ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist`
1. verify it's running, if you see two lines `ps aux | grep bitcoind`
1. if for whatever reason the service errors out (check `launchctl list`) edit the config and reload with `launchctl unload` and `launchctl reload`

to stop the service for whatever reason run `launchctl stop org.bitcoin.bitcoind.plist` and `launchctl unload org.bitcoin.bitcoind.plist`
