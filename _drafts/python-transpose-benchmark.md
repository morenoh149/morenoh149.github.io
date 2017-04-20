---
layout: post
title: Python transpose function benchmark
---

This is purely for educational purposes. I'm interested in seeing the performance differences between
different implementations of a matrix transpose operation. On the way I will demonstrate knowledge of
numpy usage from Python.

run like so `$ python -m unittest python-transpose-1`
note, adding ` 2> /dev/null` suppresses test output but allows print statement output

todo: get python unittest to also print out timing benchmark, we are interested in timing the transpose
function, not the amount of time it takes to setup the matrix


See also how to use numpy https://docs.scipy.org/doc/numpy/reference/generated/numpy.transpose.html
See also how to use range() to make a large matrix http://devdocs.io/python~3.5/library/functions#range
