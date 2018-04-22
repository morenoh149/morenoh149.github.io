---
layout: post
title: Data Science Bowl 2018 Recap
---
![Kaggle Data Science Bowl 2018](/img/kaggle-data-science-bowl-2018.png)
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

This years [winning kernel](https://datasciencebowl.com/2018tutorialwinners/)

Learned that everyone must execute the cells locally in order to see the same output, the notebook outputs are shared but not the "internal" state of the notebooks
Reviewed usage of the 'tree' command and install extra software via apt-get
Reviewed fast Run Length Encoding of image masks https://www.kaggle.com/rakhlin/fast-run-length-encoding-python
Reviewed https://www.kaggle.com/piotrczapla/tensorflow-u-net-starter-lb-0-34 for ideas on how to improve the model
Read keras docs on convolution layers https://keras.io/layers/convolutional/ to figure out what "padding" means
Shared thoughts on padding, convolution naturally lowers the output dimension of the images, so padding is a way to preserve the original image's pixel dimensions.
Padding also forces the model to give attention to objects at the edges of the image and not disregard them

Part of the work of doing Data Science in Python involves become familiar with
the apis available. To that end I've been learning the matplotlib api. We used
it to do some EDA on the training data. We generated a histogram of the number
of masks, i.e. cells, in a traning example. We were not able to solve this
ourselves but we got some help on [Stackoverflow](https://stackoverflow.com/questions/49620411/plot-a-grid-of-images-retrieved-via-url-in-python).
