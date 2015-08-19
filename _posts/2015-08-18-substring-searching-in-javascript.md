---
layout: post
title: Substring Search in Javascript
---

In this post I'll detail some notes I accumulated while designing a browser-based
plagiarism detector.

I've been working through MIT's [Introduction to Algorithms](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm)
for the past couple of weeks. I have also been interviewing for a new job recently.
Throughout my interviews I got really interested
in [Hash tables](https://en.wikipedia.org/wiki/Hash_table) as object's in
javascript exhibit behaviours similar to Hash tables. Mainly, **Search**, **Inserts**
and **Deletes** average O(1) complexity.

So if you want to quickly search for items in a dataset. A hacky way to achieve
this in javascript would be to put them all into a vanilla object `{}` and
access the fields via key.

_Interestingly V8 (used in node.js and the Chrome browser) doesn't use such a
data-structure. Instead opting for a strategy called [Hidden Classes](https://developers.google.com/v8/design?csw=1#prop_access).
But it still exhibits the same performance characteristics._

The MIT course goes into Hashing algorithms as they are used to
decide where in the Hash table to put the information. We studied [rabin fingerprinting](https://en.wikipedia.org/wiki/Rabin_fingerprint)
which uses a mathematical tool called a rolling-hash. Essentially hashing is a
computationally expensive operation. But once you perform it once, with the
rabin fingerprint, you can compute the hash for a string that differs by one
character in O(1) time. A more in depth paper is [available](http://courses.csail.mit.edu/6.006/spring11/rec/rec06.pdf).

I got really excited about this algorithm and decided to implement it in
javascript as an npm module, [karp-rabin-search](https://www.npmjs.com/package/karp-rabin-search).
When I showed the code to a colleague he quickly mentioned how the problem has
been expressed in past as [C's strstr](http://www.codecogs.com/library/computing/c/string.h/strstr.php)
as well as [PHP's](http://php.net/manual/en/function.strstr.php).

Javascript doesn't ship with a `strstr` method. But we do have [indexOf](http://devdocs.io/javascript/global_objects/string/indexof).
A very cute implementation of strstr could be made

{% highlight javascript %}
// returns portion of string starting with needle
function strstr(haystack, needle) {
  var indexOfResult = haystack.indexOf(needle)
  if( indexOfResult !== -1) {
    return haystack.slice(indexOfResult)
  } else {
    return false
  }
}
{% endhighlight %}

In any case, surely the rabin-karp algo is better than iteratively calling
`indexOf` on a string?! wrong. Unless I did something gross in the implementation,
iteratively calling `indexOf` like so is faster.

{% highlight javascript %}
// returns indexes in T where P occur
function iterativeIndexOf(T, P, i) {
  if(!i) { i = 0 }
  var results = []

  var matchIndex = T.indexOf(P)
  while(matchIndex !== -1) {
    results.push(matchIndex)
    matchIndex = T.indexOf(P, matchIndex + 1)
  }
  return results
}
{% endhighlight %}

On my machine the above code can run on `/usr/share/dict/words` in 10ms
whereas my rabin-karp algo takes 238ms. File is [test.js](https://github.com/morenoh149/rabin-karp-search/blob/master/test.js)
So why is V8 so fast? Under the hood V8 implements `indexOf` using the
[Boyer-Moore algorithm](https://github.com/v8/v8/blob/master/src/string-search.h#L283)
along with some heuristics for different input sizes.

I'd like to mention [JSInspect](https://www.npmjs.com/package/jsinspect) which
is a very cool tool in the same spirit.
