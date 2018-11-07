---
layout: post
title: CryptoZombies Review
---
[CryptoZombies](https://cryptozombies.io/) is one of the best free beginner Solidity courses for learning Ethereum Smart Contract development.
In this post I review the 6 lessons of the curriculum. I hope this feedback helps improve the site and motivates
others to go through it as well.
*UPDATE*: they [updated cryptozombies](https://medium.com/loom-network/cryptozombies-season-2-is-here-and-introducing-zombie-battleground-custom-game-modes-f1f09efa24f4)

## Lesson 1: Making the Zombie Factory
Walks you through the creation of a simple contract written in solidity step
by step. First impressions of the language are it uses javascript-esque
syntax (`function` for beginning a function signature) but all variables are
statically typed. You must declare the type when using numbers or strings.
Structs are introduced, it feels like C in Javscript's clothing.
The function signatures feel very Java-esque
with declaration of public/private functions. Functions in Soldity
are public by default, so you should make reserved functions private.
The last chapter in this lesson demos web3.js and how it would call a smart
contract.

## Lesson 2: Zombies Attack Their Victims
[Mappings](http://solidity.readthedocs.io/en/v0.4.23/types.html?highlight=mapping#mappings)
are introduced. At first I thought they were functions but they are more like
plain objects in Javascript. You treat it as an object with keys and values
that are updatable. All indexes in a Mapping are equal to `0` in a new mapping.
A global variable
[msg.sender](http://solidity.readthedocs.io/en/v0.4.23/units-and-global-variables.html?highlight=msg#block-and-transaction-properties)
is introduced, touching on the security model of contracts and
what's available in global scope.
The most interesting thing about this chapter is they go over how to write a
contract that interacts with preexisting contracts on the blockchain. You are
walked through how to fetch a
[cryptokitty](https://en.wikipedia.org/wiki/CryptoKitties) from their
[contract](https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d#code)
and mix the kitty's DNA with your Zombie. We are also introduced to contract
inheritance.

## Lesson 3: Advanced Solidity Concepts
We see how to use an `external` function to allow updating addresses to
other contracts in the future. Contracts may have bugs and so it's a
common need to be able to update contracts.
They also introduce the concept of Gas and strategies to
minimize Gas cost in your programs.
[Modifiers](http://solidity.readthedocs.io/en/v0.4.23/structure-of-a-contract.html#function-modifiers)
are introduced, they behave like function decorators or mixins in other
languages. Instead of `yield` like other languages you use `_;` which is too terse.

## Lesson 4: Zombie Battle System
This chapter shows how contracts always have a balance and how to write
functions that can receive ether. The
[payable](http://solidity.readthedocs.io/en/v0.4.24/miscellaneous.html?highlight=payable#modifiers)
function modifier allows a function to receive ether, otherwise an exception is
thrown. Generating true random numbers is an issue, some
[solutions on StackOverflow](https://ethereum.stackexchange.com/questions/191/how-can-i-securely-generate-a-random-number-in-my-smart-contract).
For cryptozombies we opt to use vulnerable random numbers, but if your contract
is going to be valuable you should use the true random approach.

## Lesson 5: ERC721 & Crypto-Collectibles
Here we write a contract implementing
[ERC721 (non fungible tokens)](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md).
The contract has to implement the interface

{% highlight solidity %}
contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);

  function balanceOf(address _owner) public view returns (uint256 _balance);
  function ownerOf(uint256 _tokenId) public view returns (address _owner);
  function transfer(address _to, uint256 _tokenId) public;
  function approve(address _to, uint256 _tokenId) public;
  function takeOwnership(uint256 _tokenId) public;
}
{% endhighlight %}
keeping in mind that there is no official ERC721 standard, so we implement
[openzeppelin's version](https://github.com/OpenZeppelin/openzeppelin-solidity/tree/master/contracts/token/ERC721).
Note, Openzeppelin's ERC721 standard has changed,
so we implement the deprecated version. For example, an
[ApprovalForAll](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721Basic.sol#L21)
event was added to the spec and the
[transfer](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/DeprecatedERC721.sol#L13)
function was removed.
[Github issue](https://github.com/loomnetwork/cryptozombie-lessons/issues/151).

It also covers smart contract security. For example, overflows in contract variables.
To prevent bugs we use openzepplin's
[SafeMath library](https://openzeppelin.org/api/docs/math_SafeMath.html).
We review solidity library syntax and write our own library to prevent variable
overflows.

## Lesson 6: App Front-ends & Web3.js
In this Lesson we revisit web3 (we first saw it in lesson 1). Familiarity with
HTML and Javascript is assumed so if you aren't already do
[learnyouhtml](https://github.com/denysdovhan/learnyouhtml),
[javascripting](https://github.com/workshopper/javascripting) and
[promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt).

The limitations of the platform shine in this Lesson. Equal
javascript like
`var startApp = function() {` and `function startApp() {` are different.
Javascript without semicolons on every valid place is also
considered incorrect.
It seems like the site uses a string comparison after removing whitespace to
determine solutions. This can be frustrating if you know your solution is correct but doesn't match theirs exactly.

## Summary
I found frustrating the use of the term keccak256. It's assumed
knowledge. It's not
explained what it is and why it's used over other schemes. A single sentence
like, "The Keccak256 hash is used throughout Ethereum, it's used for generating
hashes and is the successor to SHA-3." would go a long way. A good explanation from [mastering ethereum](https://github.com/ethereumbook/ethereumbook/blob/develop/keys-addresses.asciidoc#ethereums-cryptographic-hash-function---keccak-256)

```
Ethereum uses the Keccak-256 cryptographic hash function in many places. Keccak-256 was designed as a candidate for the SHA-3 Cryptographic Hash Function Competition held in 2007 by the National Institute of Science and Technology. Keccak was the winning algorithm, which became standardized as Federal Information Processing Standard (FIPS) 202 in 2015.

However, during the period when Ethereum was developed, the NIST standardization was not yet finalized. NIST adjusted some of the parameters of Keccak after the completion of the standards process, allegedly to improve its efficiency. This was occurring at the same time as heroic whistleblower Edward Snowden revealed documents that imply that NIST may have been improperly influenced by the National Security Agency to intentionally weaken the Dual_EC_DRBG random-number generator standard, effectively placing a backdoor in the standard random number generator. The result of this controversy was a backlash against the proposed changes and a significant delay in the standardization of SHA-3. At the time, the Ethereum Foundation decided to implement the original Keccak algorithm, as proposed by its inventors, rather than the SHA-3 standard as modified by NIST.
```

It'd be nice to get a breakdown of tools in the ecosystem. Like how does [truffle](https://truffleframework.com/)
compare to [dapp](https://dapp.tools/dapp/)?

What is the [year 2038 problem](https://en.wikipedia.org/wiki/Year_2038_problem)?

If you like CryptoZombies try [ChainShot](https://www.chainshot.com/). This platform doesn't have as much material
as CryptoZombies but it does handle equivalent solidity better.

## Solidity Examples
* [Declare a var and update it](https://ethfiddle.com/Q7L0zEegCA)
* [solidity struct example](https://ethfiddle.com/Jk-pEoqwXz)
* [solidity mapping example](https://ethfiddle.com/k4LeGI8Kkd)
