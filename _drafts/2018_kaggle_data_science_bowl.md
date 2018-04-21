---
layout: post
title: Data Science Bowl 2018 recap
---

This years bowl https://datasciencebowl.com/2018tutorialwinners/

Used google [Colab](https://colab.research.google.com/) so all team members can
see what the team's progress is. I found the built in introductory material is
a very good way to learn the tool. The
[Overview of Colaboratory Features](https://colab.research.google.com/notebooks/basic_features_overview.ipynb)
is expecially useful.

Our team's work is viewable at this
[colab notebook](https://drive.google.com/file/d/1UuUte6WA0vzUdfTe0CdvSpCcuELZxx9i/view?usp=sharing).

The approach taken was the same as the
[U-net architecture](https://arxiv.org/pdf/1505.04597.pdf). It uses skip
connections similar to LSTM to keep track of 'context' in 2 dimensions.

Learned the loss function was engineered to segment cells better by giving
larger penalty for misclassifying the cell boundaries. This means carefully
selecting a loss function or engineering a loss function is an important part of
Deep learning.

Discussed skip connections at length and how they give the U-net model the
ability to reason about locality (context) in 2d better. We've seen skip
connections before for handling sequences of data (video/audio) for reasoning
over time. See section 10.9.1 http://www.deeplearningbook.org/contents/rnn.html
and LSTMs GRUs RNNs in general

upsampling is deconvolution. Deconvolution can be done in many ways it seems.


