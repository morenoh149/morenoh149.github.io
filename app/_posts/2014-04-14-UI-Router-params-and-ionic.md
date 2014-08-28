---
layout: post
title: AngularJS - UI-Router, Params and Ionic
---

I've been learning [ui-router](https://github.com/angular-ui/ui-router) and I'd like to share some things I've learned that took me a while to get. With bits of [Ionic Framework](http://ionicframework.com/).

Let's say you have an abstract state with a child and another state and you want to trigger a transition from the
controller to the other state. The following is a concrete example. I was building an ionic app that would grab a photo
from the phones photolibrary and transition to another view, passing the fetched uri to the new view.

###app.js
{% highlight javascript %}
'use strict';

var app = angular.module('Txtbinge', ['ionic', 'firebase']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    controller: 'AppController',
    templateUrl: 'templates/applayout.html'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'centerContent' :{
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('crop-image', {
    url: '/crop-image/:imageURI',
    templateUrl: 'templates/crop-image.html',
    controller: 'CropController'
  });

  $urlRouterProvider.otherwise('/app/home');
});
{% endhighlight %}

Here we set up all the states in our app. Note that the 'crop-image' state is going to require an ':imageURI' param in
it's url.

{% highlight javascript %}
'use strict';

app.controller('AppController', function($scope, $state, Camera) {

  $scope.newPost = function() {
    if( navigator.camera ) {
      Camera.getPicture().then(function(imageURI) {
        $scope.imagesrc = encodeURIComponent(imageURI);
        $state.go('crop-image', {imageURI:$scope.imagesrc});
      }, function(err) {
        console.log('error inside getPicture(): ' + err);
      });
    } else {
      console.log('no camera');
      var str = encodeURIComponent('app/images/ionic.png');
      console.log('encoded uri is: ' + str);
      $state.go('crop-image', {imageURI:str});
    }
  };
});

app.controller('CropController', function($scope, $stateParams) {
  $scope.imageURI = $stateParams.imageURI;
  console.log('inside cropcontroller ' + $scope.imageURI);
});
{% endhighlight %}
The `AppController` is the main controller for this app. Accessible from any state inheriting from the `app` abstract
state declared in `app.js`. Notice how we are fetching a uri from the photolibrary and passing it as a parameter for the
`CropController`. We must first call `encodeURIComponent()` on this uri to pass the value around. Otherwise ui-router
get's confused - loading `CropController` but failing to change the url or load the template.

###camera-service.js
{% highlight javascript %}
'use strict';

app.factory('Camera', ['$q', function($q) {
  function cameraSuccess(imageURI, q) {
    // hack until cordova 3.5.0 is released
    if (imageURI.substring(0,21) === 'content://com.android') {
      var photoSplit=imageURI.split('%3A');
      imageURI='content://media/external/images/media/'+photoSplit[1];
    }
    q.resolve(imageURI);
  }
  return {
    getPicture: function() {
      var q = $q.defer();
      navigator.camera.getPicture(function(imageURI) { cameraSuccess(imageURI, q); },
                                  function(msg) {
                                    q.reject(msg);
                                  }, {
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
      });
      return q.promise;
    }
  };
}]);
{% endhighlight %}
In `camera-service.js` we've wrapped all calls to the [cordova-plugin-camera](https://github.com/apache/cordova-plugin-camera/) in an agularjs service. This is a good solution until the Ionic Framework provides guidance on interfacing with
cordova plugins. See [How to use Cordova plugins ...](http://forum.ionicframework.com/t/how-to-use-cordova-plugins-with-ionic-framework-the-angular-way/1804/25).

tbc
