---
layout: post
title: "Running a full bitcoin node on OSX"
image: /img/2018-11-29-bitcoin-generic.jpg
---
![blah](/img/2018-11-29-bitcoin-generic.jpg)
Running a full bitcoin node on osx is a good way to familiarize yourself with blockchain administration.
You can explore the ledger locally and you don't suffer any of the risks Simple Payment Verification
nodes suffer from. If you have ~300 GB of free disk space you should try it out.

* Clone [bitcoin core](https://github.com/bitcoin/bitcoin)
* Run `./autogen.sh`
* Run `./configure`
* Run `make`
* Run `sudo make install`
you'll now have `bitcoind` and `bitcoin-cli` in `/usr/local/bin`
* Decide where you want to store the blockchain, for me I used `/Volumes/secondDisk/Bitcoin`
* Verify you can run `bitcoind -datadir=<data location>`, this will also begin constructing the configuration files
* Add file `bitcoin.conf` to your `data location`
* Populate it with the following
{% highlight yaml %}
datadir=<data location>
txindex=1
rpcuser=bitcoinrpc
rpcpassword=<your password>
{% endhighlight %}
the txindex lets your bitcoin-cli check all transactions, not just the ones for this installation
* Daemonize it `cp contrib/init/org.bitcoin.bitcoind.plist ~/Library/LaunchAgents`
* If you are not using the default data location add an extra line to the [config](https://github.com/bitcoin/bitcoin/blob/master/contrib/init/org.bitcoin.bitcoind.plist) `<string>-datadir=/Volumes/<data location>/Bitcoin/</string>` as shown below.
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
* Load the service file `launchctl load ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist`
* Start the service `launchctl load ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist`
* Verify it's running, if you see two lines its working. `ps aux | grep bitcoind`
* If for whatever reason the service errors out (check `launchctl list`) edit the config and reload with `launchctl unload ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist` and `launchctl load ~/Library/LauchAgents/org.bitcoin.bitcoind.plist`
* Once you have a full copy of the blockchain (may take a day or two with decent internet speeds) you can use the cli to inspect the blockchain `bitcoin-cli -datadir=<data location> getrawtransaction 10d7c4e022f35288779be6713471151ede967caaa39eecd35296aa36d9c109ec`

To stop the service `launchctl unload ~/Library/LaunchAgents/org.bitcoin.bitcoind.plist`.

Let me know if these instructions work for you.
