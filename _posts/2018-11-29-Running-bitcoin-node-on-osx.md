---
layout: post
title: "Running a full bitcoin node on OSX"
image: /img/2018-11-29-bitcoin-generic.jpg
---
![blah](/img/2018-11-29-bitcoin-generic.jpg)
Running a full bitcoin node on osx is a good way to familiarize yourself with blockchain administration.
You can explore the ledger locally and you don't suffer any of the risks Simple Payment Verification
nodes suffer from. You can "Be your own Bank" or so they say. If you have ~300 GB of free disk space you should try it out.

The steps below will walk you through installing and running a bitcoin node on your osx computer.
You will get a copy of the source code, compile it, configure it, install it to run on startup and verify it's running.
For those installing bitcoin on a secondary harddrive there are some extra steps.
If you are not using the default location you have to specify the install directory when using the commands, e.g. `bitcoin-cli -datadir=<data location> getblockchaininfo`. The configuration file will be read from the install directory.
Note if you choose to run a lightweight node, you cannot look up arbitrary bitcoin transaction info.
These instructions build upon the instructions in the [project](https://github.com/bitcoin/bitcoin/blob/master/doc/build-osx.md).

* Clone [bitcoin core](https://github.com/bitcoin/bitcoin)
* Run `brew install automake berkeley-db4 libtool boost miniupnpc openssl pkg-config protobuf python qt libevent qrencode`
* Run `./contrib/install_db4.sh .`
* Run `./autogen.sh`
* Run `./configure`
* Run `make` (may take 5 minutes to compile)
* Run `sudo make install`
you'll now have `bitcoind` and `bitcoin-cli` in `/usr/local/bin`
* Decide where you want to store the blockchain. I used `/Volumes/secondDisk/Bitcoin`. The default location is `/Users/<user name>/Library/Application Support/Bitcoin`.
* Verify you can run `bitcoind` this will also begin constructing the configuration files. (If you are not using the default location specify the data location as an argument `bitcoind -datadir=<data location>`.)
* Add file `bitcoin.conf` to your `data location`
* Populate it with the following
{% highlight yaml %}
datadir=<data location>
txindex=1
rpcuser=bitcoinrpc
rpcpassword=<your password>
{% endhighlight %}
TODO [show alternative conf for lightweight node](https://github.com/bitcoinbook/bitcoinbook/blob/f8b883dcd4e3d1b9adf40fed59b7e898fbd9241f/ch03.asciidoc#configuring-the-bitcoin-core-node).
the txindex setting lets your bitcoin-cli check all transactions, otherwise it will only check transactions this node
has made
* Daemonize it `cp contrib/init/org.bitcoin.bitcoind.plist ~/Library/LaunchAgents`
* If you are not using the default data location add an extra line to the
[plist](https://github.com/bitcoin/bitcoin/blob/master/contrib/init/org.bitcoin.bitcoind.plist) file you just copied, `<string>-datadir=/Volumes/<data location>/Bitcoin/</string>` as shown below:
{% highlight xml %}
<key>Label</key>
<string>org.bitcoin.bitcoind</string>
<key>ProgramArguments</key>
<array>
  <string>/usr/local/bin/bitcoind</string>
  <string>-datadir=/Volumes/<data location>/Bitcoin/</string>
</array>
<key>RunAtLoad</key>
<true/>
{% endhighlight %}
* Load and start the service `launchctl load ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist`
* Verify it's running, run `ps aux | grep bitcoind` if you an entry like

`admin  83592  69.5  1.5  4592184 247812 ??  R  1:20AM  0:20.46 /usr/local/bin/bitcoind`
* If for whatever reason the service errors out (check `launchctl list`) edit the config and reload with `launchctl unload ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist` and `launchctl load ~/Library/LauchAgents/org.bitcoin.bitcoind.plist`
* Once you have a full copy of the blockchain (may take a day or two with decent internet speeds) you can use the cli to inspect the blockchain `bitcoin-cli -datadir=<data location> getrawtransaction 10d7c4e022f35288779be6713471151ede967caaa39eecd35296aa36d9c109ec`
* To verify a lightweight node is working try `bitcoin-cli getblockchaininfo`

To stop the bitcoin `launchctl unload ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist`.

Let me know if these instructions work for you!
