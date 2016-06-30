---
layout: post
title: Learn Golang in 3 Months
---

At my new job we have a Go backend. It's a nice language with familiar C-like syntax. Someone with C, C++, C# or Java experience
will feel right at home. A language designed to make Software Engineering easier. At the same time it's being seeked out to address
bottlenecks in Ruby and [Python](https://www.reddit.com/r/golang/comments/2aup1g/why_are_people_ditching_python_for_go/ciyzj2o) codebases.

### Syntax
* [Learn X in Y Minutes - Go](https://learnxinyminutes.com/docs/go/)
* [Go Playground](https://play.golang.org/)
* [Go Playground Chrome Extension](https://chrome.google.com/webstore/detail/better-go-playground/odfhkelcmblecfdnboahphiafolojmpl)
* [Four days of Go](http://www.evanmiller.org/four-days-of-go.html) A experienced developer's impression of the language.

### Getting Started
* Do [How to write Go code](https://golang.org/doc/code.html) to get some basic environment issues out of the way and learn how to call go functions from different
files and packages. Doing this first would have saved me some headaches.
* [Go Tour](https://tour.golang.org/) The **defacto** tutorial for Go.
* [Go By Example](https://gobyexample.com/hello-world) Learn Go by following examples 
* [The little Go Book](http://openmymind.net/The-Little-Go-Book/) A good self contained resource 

### Community
* IRC freenode `#go-nuts` chat channel. They get pretty pedantic at times and frequently refer you to the [Spec](https://golang.org/ref/spec).

### Exercises
* [stdlib sql tutorial](http://go-database-sql.org/index.html) If you'll be using a database.
* [Concurrency Exercises for the confused newbie gopher](http://whipperstacker.com/2015/10/05/3-trivial-concurrency-exercises-for-the-confused-newbie-gopher/)

### Read the Official Blog
The Go team has developed a very good [blog](https://blog.golang.org/). All the articles are very good and
essential actually for many useful go tools like `go test` and `go doc`. Useful for staying up to date on language news.

* [The Cover story](https://blog.golang.org/cover) Test Coverage tool.
* [Go slices usage and internals](https://blog.golang.org/go-slices-usage-and-internals) *How Slices (Arrays) work in Go.*
* [Constants in Go](https://blog.golang.org/constants)
* [Go concurrency patterns: Pipelines](https://blog.golang.org/pipelines)
* [Strings](https://blog.golang.org/strings)

### JSON
* [JSON and Go](http://blog.golang.org/json-and-go)
* [Go and JSON](https://eager.io/blog/go-and-json/) This resource actually demos using field tags to unmarshal json with odd key names like `_foo`
super useful
* [Playground: unmarshal json](https://play.golang.org/p/7FnyUrH_EV)

### Godoc
Use Godoc to document your programs, it's very good and everyone uses it. We use it at Capsule to generate our internal api
documentation.

* Work through [Documenting Go Code](https://blog.golang.org/godoc-documenting-go-code)
* [godoc Godoc](https://godoc.org/golang.org/x/tools/cmd/godoc) Read the doc on the tool for usage. `godoc -http=:6060 -goroot=.` assuming you're in this project's directory.
godoc docs are designed to give you a snapshot of all go code on your machine. Once you have this running you can see the docs by navigating to http://localhost:6060/
go wiki learn page https://github.com/golang/go/wiki/Learn

### Videos
* golang testing sydjs 2014 https://www.youtube.com/watch?v=ndmB0bj7eyw
* web apps in go "Code that grows with grace" https://vimeo.com/53221560
* Go: a simple programming environment https://vimeo.com/53221558 goes over some small go programs and interesting parts of the standard library
I would transcribe the larger example he goes over towards the end. It's a router that reads in a config file. It also demonstrates how to test such a
server. https://github.com/nf/webfront

### Advanced
* [Go Code Examples](https://github.com/golang/example) medium sized Go sample go programs
* type checking https://github.com/golang/example/tree/master/gotypes
* advanced testing https://youtu.be/yszygk1cpEc
* contrast go linking with C linking http://cs-fundamentals.com/c-programming/static-and-dynamic-linking-in-c.php
* llvm in go https://blog.felixangell.com/an-introduction-to-llvm-in-go/
* styleguide beyond goimports https://github.com/golang/go/wiki/CodeReviewComments
* 6 years of go, best practices https://peter.bourgon.org/go-best-practices-2016/#configuration
* how to use the `flag` stdlib package to give your software arguments https://robots.thoughtbot.com/where-to-define-command-line-flags-in-go

#### Theory
* [Wikipedia: Guarded Command Language](https://en.wikipedia.org/wiki/Guarded_Command_Language)
* [Wikipedia: Communicating Sequential Processes](https://en.wikipedia.org/wiki/Communicating_sequential_processes)
* [Object Oriented Go](https://nathany.com/good/)
* [Go channel axioms](http://dave.cheney.net/2014/03/19/channel-axioms)
* [Go Garbage Collector](https://docs.google.com/document/d/1gCsFxXamW8RRvOe5hECz98Ftk-tcRRJcDFANj2VwCB0/preview) A paper describing the upcoming garbage collector design 

#### Why Go is the way it is
* https://commandcenter.blogspot.com/2012/06/less-is-exponentially-more.html
* https://talks.golang.org/2012/splash.article
