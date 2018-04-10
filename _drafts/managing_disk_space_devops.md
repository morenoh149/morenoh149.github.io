How to manage disk space for devops


## find large files
many times your instances run out of space, this could be due to logging

or mismanaging docker images, or not anticipating chacheing requirements when
you change the behavior of your software.

here's how you can find the large files on disk and remove them in a pinch

## determine available disk space to see if you need a larger volume

df -h
displays disk usage by directory and the space available on each (go over each
column as it's not obvious, also compare to osx)
