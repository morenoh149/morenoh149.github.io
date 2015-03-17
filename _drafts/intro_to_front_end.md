I'm assuming you're on osx.

install homebrew
install xcode
install git 'brew install git'
install sublime text

cmd-space opens spotlight
open terminal

ls
  lists the files in the current dir

mkdir programming
  makes a programming folder in your home dir. put all future code in here

cd programming
  cd - change directory - moves you to different folders

man man
  manual pages are great for understanding commands

mkidr first-website
  start a project

cd first-website
touch index.html
touch sytle.css
touch script.js
pyserver -m SimpleHTTPServer

open browser to localhost:8000
open web developer tools

open devdocs.io
pin it in your browser, have it always open


tasks
* add text 'hello world' to `index.html` google if necessary. make sure you can see it in a browser
* setup github account. add branch gh-pages to your project.


tools
http://www.paciellogroup.com/resources/contrastanalyser/
http://paletton.com

## tips
* learn when not to use bootstrap grid. If you need to place items very close
together figuring out how to remove 15px worth of margin overlappage isn't very
fun. Instead place items in plain old divs and they items will touch.
* `* { border: 1px solid pink; }`
