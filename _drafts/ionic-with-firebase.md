use the yeoman generator
https://github.com/diegonetto/generator-ionic

use bower to install dependencies like firebase and angularfire

`bower install firebase --save`
`bower install angularfire --save`

this will not only install firebase but add it to your dependency list in bower.json

add 'firebase' to app.js
`var app = angular.module('IonicFirebaseTodoApp', ['ionic', 'firebase'])`

jshint will complain upon linting about using variables that aren't defined within the same js file.
To fix this add these to your .jshintrc file
"globals": {
    "angular": false,
    "app": true,
    "prompt": true,
    "Firebase": true,
    "StatusBar": true
  }

you also need a line /* exported app */ because `app` is declared within that file and referenced in many others.

I had an object tasks, and I want to update the `finished` field from false to true. One way to accomplish this
is to `$set` the object to a different version of itself.

{% highlight javascript %}
$scope.toggleTask = function(key) {
    var clickedTask = $scope.activeTasks.$child(key);
    clickedTask.$set({
      title: clickedTask.title,
      finished: !clickedTask.finished
    });
  };
{% highlight javascript %}

Another way is to alter the local variable copy and run `$save` instead. This is the way I went with ultimately.
{% highlight javascript %}
$scope.toggleTask = function(key) {
    var clickedTask = $scope.activeTasks.$child(key);
    clickedTask.finished = !clickedTask.finished;
    clickedTask.$save();
  };
{% highlight javascript %}


* cover ui-router
* side menu
* nav view vs regular view
* interactions of cordova plugins with our apps
* angularjs ideas, use of directives, promises to percolate state up to the views
* ionic sass color customization
* ionicons usage
* debug console in safari for ios-sim
* debug with adb logcat for android
* use of chrome dev tools mobile emulation for local development
