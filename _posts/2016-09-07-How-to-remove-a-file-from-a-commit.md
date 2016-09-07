---
layout: post
title: How to remove a file from a git commit
---

If you need to quickly remove a file from a commit you just made ...

`git checkout <commit sha> <path to file>`

`git commit --amend`

and rewrite the commit message without the file.
