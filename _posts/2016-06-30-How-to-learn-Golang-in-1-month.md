---
layout: post
title: Learn Golang in 1 Month
---

At my new job we have a Go backend. It's a nice language with familiar syntax. Someone with C, C++, C# or Java experience
will feel right at home. A language designed to make Software Engineering easier. At the same time it's being sought out to address
bottlenecks in Ruby, Node.js and [Python](https://www.reddit.com/r/golang/comments/2aup1g/why_are_people_ditching_python_for_go/ciyzj2o) codebases.

### Syntax
* [Learn X in Y Minutes - Go](https://learnxinyminutes.com/docs/go/)
* [Go Playground](https://play.golang.org/)
* [Go Playground Chrome Extension](https://chrome.google.com/webstore/detail/better-go-playground/odfhkelcmblecfdnboahphiafolojmpl)
* [Four days of Go](http://www.evanmiller.org/four-days-of-go.html) An experienced developer's impression of the language.

### Getting Started
* Do [How to write Go code](https://golang.org/doc/code.html) to get some basic environment issues out of the way and learn how to call go functions from different
files and packages. Doing this first would have saved me some headaches.
* [Go Tour](https://tour.golang.org/) The **defacto** tutorial for Go.
* [Go By Example](https://gobyexample.com/hello-world) Learn Go by following examples 
* [The little Go Book](http://openmymind.net/The-Little-Go-Book/) A good self contained resource 

### Community
* IRC Freenode `#go-nuts` chat channel. They get pretty pedantic at times and frequently refer you to the [Spec](https://golang.org/ref/spec).
* [Gophers Slack](https://gophersinvite.herokuapp.com/) has regional chatrooms as well as topic specific ones.

### Exercises
* [Stdlib SQL tutorial](http://go-database-sql.org/index.html) If you'll be using a database.
* [Concurrency Exercises for the confused newbie gopher](http://whipperstacker.com/2015/10/05/3-trivial-concurrency-exercises-for-the-confused-newbie-gopher/)

### Read the Official Blog
The Go team has developed a very good [blog](https://blog.golang.org/). All the articles are very good and
essential actually for many useful go tools like `go test` and `go doc`. Useful for staying up to date on language news.

* [The Cover story](https://blog.golang.org/cover) Test Coverage tool.
* [Go slices usage and internals](https://blog.golang.org/go-slices-usage-and-internals) *How Slices (Arrays) work in Go.*
* [Constants in Go](https://blog.golang.org/constants)
* [Go concurrency patterns: Pipelines](https://blog.golang.org/pipelines)
* [Strings](https://blog.golang.org/strings)
* [Go wiki learn page](https://github.com/golang/go/wiki/Learn)

### Web applications
* [Writing Web applications](https://golang.org/doc/articles/wiki/) build a web app with just the standard library
* [Go-json-rest](https://ant0ine.github.io/go-json-rest/) boilerplate json api
* [Apex](http://apex.run/) a futuristic serverless deploy strategy for Amazon Web Services

### JSON
* [JSON and Go](http://blog.golang.org/json-and-go)
* [Go and JSON](https://eager.io/blog/go-and-json/) This resource actually demos using field tags to unmarshal JSON with odd key names like `_foo`
super useful
* [Playground: unmarshal json](https://play.golang.org/p/7FnyUrH_EV)

### Godoc
Use Godoc to document your programs, it's very good and everyone uses it. We use it at Capsule to generate our internal API
documentation.

* Work through [Documenting Go Code](https://blog.golang.org/godoc-documenting-go-code)
* [godoc Godoc](https://godoc.org/golang.org/x/tools/cmd/godoc) Read the doc on the tool for usage.
	* Run `godoc -http=:6060 -goroot=.` assuming you're in a project's directory.
godoc docs are designed to give you a snapshot of all go code on your machine. Once you have this running you can see the docs by navigating to `http://localhost:6060/`

### Object-Oriented
The way Object-Orientation is achieved in Go differs a bit from languages like Java or C#. The main facility is via interfaces. This approach helps avoid long
class hierarchies.

* [Object Oriented Go](https://nathany.com/good/)
* [Wikipedia: Composition over Inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

### Go playground
Here are some code samples I've written over the past couple of months. Every time I learned something or made a new insight into Go as a
noob I ended up making a playground demo and tweeting it. Hopefully some of them are useful to someone else.

* [basic if else](https://play.golang.org/p/tJpcp_L9iN)
* [Initialize a nested map](https://play.golang.org/p/GUsCboJuXC)
* [Sort slice of pointers to struct](http://play.golang.org/p/5Rm7Pty3-A)
* [Newton's method for finding square roots](http://play.golang.org/p/aZ02JgTqFn)
* [Slices Solution](http://play.golang.org/p/__8Fj4AGXc) solution to [Tour exercise: Slices](https://tour.golang.org/moretypes/18)
* [Pro solution to image problem](http://play.golang.org/p/Pks6Lpz8qa)
* [Golang Closures](http://play.golang.org/p/NAAoD75OYg)
* [Consts and custom types](http://play.golang.org/p/txg1Zq_A6j) `printf("%T", var)` prints the type of a variable
* [Structs must be declared before their use](http://play.golang.org/p/tN0oGcQP2e)
* [But placing the struct outside a function makes it available](http://play.golang.org/p/bbGppY38-B)
* [interface inside a struct and run it](http://play.golang.org/p/l9JWXT-w8Q)
* [struct initialization must have a trailing curly on the same line as the last field :/](http://play.golang.org/p/629DDZt9Dm)
* [type assertions](http://play.golang.org/p/nGdO-FIka-)
* [make a green square](https://play.golang.org/p/Sdh-LpHrTx)
* [unmarshal nested JSON](https://play.golang.org/p/7FnyUrH_EV)
* [how to find age from birthday](https://play.golang.org/p/CNGUG55JZ4)
* [print day of week](https://play.golang.org/p/rFm6nk33-C)
* [function arguments](https://play.golang.org/p/-16mh78fpO)
* [nil pointers](https://play.golang.org/p/k-rAwPzbxT)
* [cast integer to float and divide](https://play.golang.org/p/pP0O-CCPgu)
* [struct embedded and initialization](https://play.golang.org/p/YGZSi_8zLX)
* [round a floating point number to the nearest integer](https://play.golang.org/p/Mt7Bpw6qSB)

### Videos
* [Golang testing sydjs 2014](https://www.youtube.com/watch?v=ndmB0bj7eyw)
* [Web apps in go "Code that grows with grace"](https://vimeo.com/53221560)
* [Go: a simple programming environment](https://vimeo.com/53221558) goes over some small go programs and interesting parts of the standard library
I would transcribe the larger example he goes over towards the end. It's a router that reads in a config file. It also demonstrates how to test such a
server. [Source code](https://github.com/nf/webfront).
* [Advanced Testing](https://youtu.be/yszygk1cpEc)

### Advanced
* [Go Code Examples](https://github.com/golang/example) medium sized Go sample go programs
* [type checking](https://github.com/golang/example/tree/master/gotypes)
* [contrast Go linking with C linking](http://cs-fundamentals.com/c-programming/static-and-dynamic-linking-in-c.php)
* [LLVM in Go](https://blog.felixangell.com/an-introduction-to-llvm-in-go/)
* [Styleguide beyond goimports](https://github.com/golang/go/wiki/CodeReviewComments)
* [6 years of Go, best practices](https://peter.bourgon.org/go-best-practices-2016)
* [How to use the `flag` stdlib package to give your software arguments](https://robots.thoughtbot.com/where-to-define-command-line-flags-in-go)

#### Theory
* [Wikipedia: Guarded Command Language](https://en.wikipedia.org/wiki/Guarded_Command_Language)
* [Wikipedia: Communicating Sequential Processes](https://en.wikipedia.org/wiki/Communicating_sequential_processes)
* [Go channel axioms](http://dave.cheney.net/2014/03/19/channel-axioms)
* [Go Garbage Collector](https://docs.google.com/document/d/1gCsFxXamW8RRvOe5hECz98Ftk-tcRRJcDFANj2VwCB0/preview) A paper describing the upcoming garbage collector design 

#### Why Go is the way it is
Some literature from one of the author's of Go, Rob Pike, on Go's design.

* [Less is Exponentially more](https://commandcenter.blogspot.com/2012/06/less-is-exponentially-more.html)
* [Go at Google: Language Design in the Service of Software Engineering](https://talks.golang.org/2012/splash.article)
