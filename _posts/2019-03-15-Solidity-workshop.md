---
layout: post
title: "Solidity workshop"
image: /img/2019-03-15-ethereum.jpg
---
![Ethereuem](/img/2019-03-15-ethereum.jpg)
In early January I was reached out to by the nyc blockchain group asking if I could teach
whatever I know about Solidity. I said yes. The audience was undergrads completeing
coursework in project management and computer science. Not all of them knew what
bitcoin was so I covered a lot of ground in a short amount of time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/v8tRSqKFZ_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Hopefully others find the recording useful. I enjoyed doing the event as it forced
me to clarify my thoughts and research aspects of blockchain that were not clear to me.
Below follows the notes I circulated with the audience.

# Soldity Workshop

## Prerequisites
Attendees should do the following before the event to get the most out of it.
There will be a 20 minute lecture-overview at the beginning. You can do the prerequisites during the overview if
you have not done so by then.

1. install [node.js](https://nodejs.org/en/) (lts version is recommended)
1. install [git](https://git-scm.com/downloads) (use brew if on osx)
1. install a code editor ([vscode](https://code.visualstudio.com) or [atom.io](https://atom.io))
1. install the [truffle suite](https://github.com/trufflesuite/truffle) `$ npm install -g truffle`
1. install [ganache](https://truffleframework.com/ganache)
1. install the [chrome browser](https://www.google.com/chrome/)
1. install the [metamask chrome extension](https://metamask.io)
1. get test tokens for the Ropsten network via the faucet https://blog.bankex.org/how-to-buy-ethereum-using-metamask-ccea0703daec
1. read first page of the solidity docs https://solidity.readthedocs.io/en/v0.5.2/introduction-to-smart-contracts.html

## Workshop
We will be going through the truffle tutorial https://truffleframework.com/tutorials/pet-shop

Questions that were asked during the workshop:
* what is truffle? is there a lowerlevel way of making contracts?

Truffle suite is a popular collection of tools for smart contract development. You can think of it as ruby on rails or Django but for smart contracts. The suite makes many decisions for you. Once you learn more about smart contract development you are free to break those decisions. See [using the compiler](https://solidity.readthedocs.io/en/v0.4.24/using-the-compiler.html), https://dapp.tools/dapp/ and https://solidity.readthedocs.io/en/v0.5.2/resources.html
* what are migrations and deploying? what's happening here?

Keen audience members may ask themselves, if the blockchain is immutable how do we update our software? Migrations allow you to update your smart contracts by providing a thin abstraction that just holds a pointer (reference) to the body of your smart contract. When you want to update your smart contracts logic you can deploy the latest version as a new contract and update the reference in the original shim. For more details read [demystifying truffle migrate](https://medium.com/@blockchain101/demystifying-truffle-migrate-21afbcdf3264).
* how is blockchain/mining like a game?

It may have been an odd phrasing to call blockchain a game. I was trying to communicate that game theory is used a lot in this community to describe things. Bitcoin mining is also a race among all the nodes to find a solution to the math problem. For a good explanation of bitcoin watch [3Blue1Brown](https://www.youtube.com/watch?v=bBC-nXj3Ng4) or [Anders](https://anders.com/blockchain/).
* why is compiling making some json?

When you compile solidity, by default you get a binary and an application binary interface file (ABI). The abi is a json file describing the interface exposed by the binary. Json is just a popular file format, it could've been xml, yaml or any other format.

## Lecture
The lecture-overview will provide background information on blockchain, smart contracts, the current state
of the technology and possible future directions. The slides are at https://bit.ly/2FkePe5

[EVM diagram](https://raw.githubusercontent.com/ethereumbook/ethereumbook/develop/images/evm-architecture.png)

## Resources

### Learning
* https://cryptozombies.io - free solidity online learning curriculum
* https://github.com/chronaeon/beigepaper/blob/master/beigepaper.pdf - ethereum beige paper, an easier to read verson of the ethereum white paper
* https://bitcoin.org/bitcoin.pdf - bitcoin white paper, the one that started it all
* [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook/blob/develop/book.asciidoc) - unofficial subject reference
* https://solidity.readthedocs.io - language documentation
* https://www.chainshot.com - free soldity and aragon learning curriculum
* https://github.com/ScottWorks/ConsenSys-Academy-Notes - notes from student during consensys academy
* https://github.com/ethereum/wiki/wiki - ethereum techincal wiki, covers research topics and current problems being tackled
* https://github.com/ePaperthereum/wiki/wiki/White-Paper - ethereum white paper

### Tools
* https://remix.ethereum.org - browserbased soldity ide, very popular in the community
* https://ethfiddle.com - like jsfiddle but for solidity, good for sharing code you're stuck on
* https://ethgasstation.info - online gas calculator for estimating your costs

### Community
* http://www.cryptonyc.org - local community, join the telegram chat!
* http://chainhaus.com - local community, join the telegram chat!
* https://www.meetup.com/nyc-blockchain-devs/ local meetup
* http://bit.ly/StowProtocolSlack local ethereum slack (reason I'm here)
* https://openzeppelin.org - contract auditors based out of argentina, considered the leaders in the field
* https://www.trailofbits.com - local security firm, have positioned themselves as leaders in smart contract security auditing
* https://www.empirehacking.nyc - security meetup, run by trailofbits
* https://gitter.im/ethereum/solidity - chatroom for discussing solidity code
* https://gitcoin.co - freelance gigs paid in cryptocurrency (good for resume building)
