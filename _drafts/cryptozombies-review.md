## Lesson 1: Making the Zombie Factory
Walks you through the creation of a simple contract written in solidity step
by step. First impressions of the language are it uses javascript-esque
syntax (`function` for beginning a function signature) but all variables are
statically typed. You must declare the type when using numbers or strings.
Structs are exposed right away and it all feels like C in javscript's clothing.
The function signatures feel very java-esque
with declaration of public/private functions. Functions in soldity
are public by default, so you should make reserved functions explicitly private.
The last chapter in this lesson demos web3.js and how it would call a smart
contract.

## Lesson 2: Zombies Attack Their Victims
[Mappings](http://solidity.readthedocs.io/en/v0.4.23/types.html?highlight=mapping#mappings)
are introduced. At first I thought they were functions but they are more like
typical objects in Javascript. You treat it as an object with keys and values
that are updatable. All indexes in a mapping are equal to `0` in a new mapping.
A global variable
[msg.sender](http://solidity.readthedocs.io/en/v0.4.23/units-and-global-variables.html?highlight=msg#block-and-transaction-properties)
is introduced, touching on the topic of the security model of contracts and
what's avialable in global scope.
The most interesting thing about this chapter is they go over how to write a
contract that interacts with preexisting contracts on the blockchain. You are
walked through how to fetch a
[cryptokitty](https://en.wikipedia.org/wiki/CryptoKitties) from their
[contract](https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d#code)
and mix the kitty's DNA with your Zombie's. We are also introduced to contract
inheritance.

## Lesson 3: Advanced Solidity Concepts
We are shown how to use an `external` function to allow updating addresses to
other contracts in the future. Inevitably contracts may have bugs and so it's a
common requirement to be able to call newer contracts.
They also introduce the concept of Gas to run computations and strategies to
minimize Gas cost in your programs.
[Modifiers](http://solidity.readthedocs.io/en/v0.4.23/structure-of-a-contract.html#function-modifiers)
are introduced, then behave like function decorators or mixins in other
languages. Instead of `yield` like other languages you use `_;` which I think
is too terse.

## Lesson 4: Zombie Battle System
This chapter shows how contracts always have a balance and how to write
functions that can receive ether. The
[payable](http://solidity.readthedocs.io/en/v0.4.24/miscellaneous.html?highlight=payable#modifiers)
function modifier allows a function to receive ether, otherwise an exception is
thrown. The subject of generating true random numbers is touched on, some
[ideas on StackOverflow](https://ethereum.stackexchange.com/questions/191/how-can-i-securely-generate-a-random-number-in-my-smart-contract).
For cryptozombies we opt to use vulnerable random numbers, but if your contract
is going to be valuable you should use the more involved approaches.

## Lesson 5: ERC721 & Crypto-Collectibles

## Closing Thoughts
Something I've found frustrating is the use of the term keccak256. It's assumed
knowledge but it was not clear to me that it is synonymous with
[SHA-3](https://en.wikipedia.org/wiki/SHA-3) a successor to SHA-2. But it's not
explained what it is and why it's used over other schemes. A single sentence
like, "The Keccak256 hash is used throughout Ethereum, it's used for generating
hashes and is the successor to SHA-3." would go a long way.

## Fiddles
[Declare a var and update it](https://ethfiddle.com/auxt0T8XP7)
