---
layout: post
title: Data Science Bowl 2018 Recap
---
![Kaggle Data Science Bowl 2018](/img/2018-05-04-kaggle-data-science-bowl-2018.png)
This year our team competed in the 2018 Kaggle Data Science Bowl. The goal of
the competition is to identify cells in microscopic images. There can be one,
many or zero cells in any given image. Our solution was a Convolutional Neural
Netowork with skip connections.

We used Google [Colab](https://colab.research.google.com/) which offers a free
ipython notebook-like environment with a GPU. It offers realtime collaboration
similar to google docs and google sheets. The
[Overview of Colaboratory Features](https://colab.research.google.com/notebooks/basic_features_overview.ipynb)
is a good resource to learn this tool as well as the example notebooks.

The approach we used was the same one as the winner of the ISBI cell tracking
challenge 2015:
[The U-net architecture](https://arxiv.org/pdf/1505.04597.pdf). It uses skip
connections similar to LSTMs to keep track of 'context' in 2 dimensions.

The paper mentions Upsampling. This is the same as the term Deconvolution used
in other literature. Deconvolution can be done in many ways. The method that
ships with keras is the
[Conv2DTranspose](https://keras.io/layers/convolutional/#conv2dtranspose).

Through out the competition we learned the loss function is critical to the
performance of the network. It may sound obvious but careful selection of an
appropriate loss function will change the way the model behaves. For example,
we engineered the loss function to segment cells better by giving larger
penalty for misclassifying the cell boundaries. This worked because many cell
images have cells overlapping and touching, so the first versions of the model
would have trouble learning the boundary between cells. This boundary should be
labeled as not being a cell, but would be classified as a cell incorrectly.

Congratulations to this years
[winning kernel](https://datasciencebowl.com/2018tutorialwinners/).

Reviewed fast Run Length Encoding of image masks https://www.kaggle.com/rakhlin/fast-run-length-encoding-python
Read keras docs on convolution layers https://keras.io/layers/convolutional/ to figure out what "padding" means
Shared thoughts on padding, convolution naturally lowers the output dimension of the images, so padding is a way to preserve the original image's pixel dimensions.
Padding also forces the model to give attention to objects at the edges of the image and not disregard them

Part of the work of doing Data Science in Python involves become familiar with
the apis available. To that end I've been learning the matplotlib api. We used
it to do some EDA on the training data. We generated a histogram of the number
of masks, i.e. cells, in a traning example. We were not able to solve this
ourselves but we got some help on
[Stackoverflow](https://stackoverflow.com/questions/49620411/plot-a-grid-of-images-retrieved-via-url-in-python).

Thank you to teammates [Taraqur](https://www.linkedin.com/in/tqrahman/),
[Jacob Peters](https://www.linkedin.com/in/jacobdpeters/) and
[Cal Almodovar](https://www.linkedin.com/in/cal-orlando-almodovar-41b01258/)

Notes from our meeting,

Based our baseline on https://www.kaggle.com/keegil/keras-u-net-starter-lb-0-277/notebook
Forked project https://github.com/kamalkraj/DATA-SCIENCE-BOWL-2018 at https://github.com/morenoh149/DATA-SCIENCE-BOWL-2018
Uploaded that notebook to Colab https://drive.google.com/file/d/1UuUte6WA0vzUdfTe0CdvSpCcuELZxx9i/view?usp=sharing we can all collaborate on this together
Learned the loss function was engineered to segment cells better by giving larger penalty for misclassifying the cell boundaries. This means carefully selecting a loss function or engineering a loss function is an important part of Deep learning.
Discussed skip connections at length and how they give the U-net model the ability to reason about locality (context) in 2d better. We've seen skip connections before for handling sequences of data (video/audio) for reasoning over time. See section 10.9.1 http://www.deeplearningbook.org/contents/rnn.html and LSTMs GRUs RNNs in general

Goals for 3/20
Read U-net paper https://arxiv.org/pdf/1505.04597.pdf
Finish running baseline kernel in colab, fix any runtime errors
Submit baseline solution to kaggle to get that out of the way
Research loss functions and choose one
Verify we give large penalty to misclassifying cell segmentation as mentioned in the paper
Figure out what is meant by upsampling in the paper and what is it's motivation
Experiment with different skip connection schemes to gain an intuition of what's possible.

We met via hangouts.

A good tutorial on google colab https://medium.com/deep-learning-turkey/google-colab-free-gpu-tutorial-e113627b9f5d
Collaborated on https://colab.research.google.com/drive/1UuUte6WA0vzUdfTe0CdvSpCcuELZxx9i#scrollTo=4e2x9ui8M1hB
Learned that everyone must execute the cells locally in order to see the same output, the notebook outputs are shared but not the "internal" state of the notebooks
Reviewed usage of the 'tree' command and install extra software via apt-get
Reviewed fast Run Length Encoding of image masks https://www.kaggle.com/rakhlin/fast-run-length-encoding-python
Reviewed https://www.kaggle.com/piotrczapla/tensorflow-u-net-starter-lb-0-34 for ideas on how to improve the model
Read keras docs on convolution layers https://keras.io/layers/convolutional/ to figure out what "padding" means
Shared thoughts on padding, convolution naturally lowers the output dimension of the images, so padding is a way to preserve the original image's pixel dimensions.
Padding also forces the model to give attention to objects at the edges of the image and not disregard them
Shared thoughts on ensembling models and how to get an ensemble to generate a submission
Added each other to n.y.c team https://www.kaggle.com/c/data-science-bowl-2018/team if you are not on it please request or reply with your handle
Generated and submitted a baseline prediction
goals for next week:
add padding to model
perform image augmentation
Visualize a single prediction on an image in the notebook
Research loss functions and choose one
Verify we give large penalty to misclassifying cell segmentation as mentioned in the paper
Figure out what is meant by upsampling in the paper and what is it's motivation
Experiment with different skip connection schemes to gain an intuition of what's possible.
Think about how we could use an Autoencoder to pretrain parts of the model or to discover useful structures in the data.

Notes:
* Figured out how to display many masks in a grid, solution is Work in progress at https://colab.research.google.com/drive/1UuUte6WA0vzUdfTe0CdvSpCcuELZxx9i#scrollTo=JJOowI8dG7fp&line=8&uniqifier=1
* Explained what the u-net architecture is doing
* Explained max pooling and how it trims the image
* Explained convolution (again) and how it's generating a larger representation (64 times larger than the input by adding layers (depth))

Goals for next week:
* find a new place to meet. Please respond with where you leave from Tuesday nights and where you are going and we'll try to find a convenient location for all of us. Me: work in dumbo, live in bushwick.
I propose Caffe bene on canal st https://goo.gl/maps/Rk8g1k3TG3D2
* Figure out what the submission format actually means. This means plotting the submission coordinates on a sample test image if they are coordinates
* Internalize the python filesystem api. Read http://www.diveintopython3.net/comprehensions.html#os and skim https://docs.python.org/3.6/library/os.html#files-and-directories (https://devdocs.io/python~3.6/library/os#os.listdir)
* Measure time to train baseline solution, and augment data enough to make training take about an hour. See if there is any improvement in accuracy.

what is rle?

CNN notes compiled by jacob https://colab.research.google.com/drive/1H_CCNqv5z8P5bRD8uqMxg4LmwQiOLwMH

keras u-net starter kernel https://www.kaggle.com/keegil/keras-u-net-starter-lb-0-277?scriptVersionId=2164855

good starters for common ML tasks http://mlreference.com/pca-logistic-regression-sklearn


