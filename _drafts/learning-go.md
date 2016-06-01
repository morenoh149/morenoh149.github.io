at my new job we have a go backend

Here's what I think of go and how I'm learning it.

http://www.evanmiller.org/four-days-of-go.html
https://learnxinyminutes.com/docs/go/
freenode #go-nuts
you spend enough time there they'll inevitably tell you do to the [tour](https://tour.golang.org/basics/3)

https://gobyexample.com/hello-world

Do https://golang.org/doc/code.html to get some basic environment issues out of the way and learn how to call things from different
packages. Doing this first would have saved me some headaches.

stdlib sql tutorial http://go-database-sql.org/index.html

theory
https://en.wikipedia.org/wiki/Guarded_Command_Language
https://en.wikipedia.org/wiki/Communicating_sequential_processes

http://whipperstacker.com/2015/10/05/3-trivial-concurrency-exercises-for-the-confused-newbie-gopher/

OO go https://nathany.com/good/

an incindiary post that trended earlier this year http://www.jtolds.com/writing/2016/03/go-channels-are-bad-and-you-should-feel-bad/

very good guide https://gobyexample.com/hello-world

https://deadlockempire.github.io/

a good self contained resource http://openmymind.net/The-Little-Go-Book/

if you're dealing with JSON (and it's hard not to be) read http://blog.golang.org/json-and-go

go channel axioms http://dave.cheney.net/2014/03/19/channel-axioms

go slices usage and internals https://blog.golang.org/go-slices-usage-and-internals

chrome extension to make the go playground more pleasant https://chrome.google.com/webstore/detail/better-go-playground/odfhkelcmblecfdnboahphiafolojmpl

constants in Go https://blog.golang.org/constants

advanced testing https://youtu.be/yszygk1cpEc

styleguide beyond goimports https://github.com/golang/go/wiki/CodeReviewComments

6 years of go, best practices https://peter.bourgon.org/go-best-practices-2016/#configuration

how to use the `flag` stdlib package to give your software arguments https://robots.thoughtbot.com/where-to-define-command-line-flags-in-go

advanced:

llvm in go https://blog.felixangell.com/an-introduction-to-llvm-in-go/

contrast go linking with C linking http://cs-fundamentals.com/c-programming/static-and-dynamic-linking-in-c.php

go concurrency pattern: piplines https://blog.golang.org/pipelines *actually used at work!*

Use godoc to document your programs, it's very good https://blog.golang.org/godoc-documenting-go-code

All the articles listed at https://golang.org/doc/ are very good and essential actually for many useful go tools, like `go test` and `go doc`.
The Go team has developed a very good blog.

go wiki learn page https://github.com/golang/go/wiki/Learn

video: golang testing sydjs 2014 https://www.youtube.com/watch?v=ndmB0bj7eyw

video: web apps in go "Code that grows with grace" https://vimeo.com/53221560

strings: https://blog.golang.org/strings

dealing with json https://eager.io/blog/go-and-json/ note: this resource actually demos using field tags to unmarshal json with odd key names like "_foo"


