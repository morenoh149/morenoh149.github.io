---
layout: post
title: Deploying a React App to Cordova
---

I've been building out a webapp using react. It's completely responsive and
developed in mobile emulation mode.

Once I was happy with it's behavior in browsers I decided it was time to port it
as a native mobile app. Below we assume the whole application has been compiled
with Browserify or Webpack into an `app.js` file.

First thing to note is that cordova has it's own hooks for device lifecycle
events. Checkout [Cordova Events](http://devdocs.io/cordova/cordova_events_events.md).

Specifically, we must delay execution of our webapp until `deviceready()`
executes. Wrap your applications entry point like so

{% highlight javascript %}
function startApp() {
  // your app logic
}
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
{% endhighlight %}

In your index.html

* make sure to declare `cordova.js` in your index.html file before your bundle.
This is automatically injected by Cordova.
* declare a viewport meta tag to prevent resizing
* declare a Content Security Policy. Read [Cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist#content-security-policy).

{% highlight html %}
<html>
  <head>
    <meta name="viewport"
          content="user-scalable=no,
                   initial-scale=1,
                   maximum-scale=1,
                   minimum-scale=1,
                   width=device-width">

    <!-- Enable all requests, inline styles, and eval() -->
    <meta http-equiv="Content-Security-Policy"
          content="default-src *;
                   style-src 'self' 'unsafe-inline';
                   script-src 'self' 'unsafe-inline' 'unsafe-eval'">
  </head>
  <body>
    <script src="cordova.js"></script>
    <script src="app.js"></script>
  </body>
</html>
{% endhighlight %}

* for later versions of iOS you'll want to add some top padding to your app.
{% highlight javascript %}
// somewhere in your app
if(window.device && device.platform === 'iOS') {
  styles.base.paddingTop = '20px'
}
{% endhighlight %}

* wherever you have onClick handlers you'll have to add an onTouchEnd handler or
similar for mobile touch events
* if you haven't already declare `React.initializeTouchEvents(true)`. See
[React.js Events](https://facebook.github.io/react/docs/events.html#touch-events)

After you've made these changes you can make a cordova copy of your project.
Install the cordova cli tool `npm install -g cordova`

From your existing project directory

1. `cd ..`
2. `cordova create appCordova`
3. `cd appCordova`
4. `cordova platform add ios && cordova platform add android`
5. `cordova plugin add cordova-plugin-device && cordova plugin add cordova-plugin-whitelist`
6. Backup and rename the `www` directory. Then symlink
the original project to `www`. `ln -s ../project www`
7. Finally we can test the app in the simulator `cordova emulate ios`

You'll want to edit [config.xml](http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html).
Especially the `name`, `description` and `author` tags.

I've shared my results on [github](https://github.com/morenoh149/tempCordova).
If you plan putting this under version control I recommend gitignoring `plugins/`
and `platforms/`.

Actually deploying to app stores will require signing. See
[Publishing Android](http://ionicframework.com/docs/guide/publishing.html) and
[Publishing iOS](http://forum.ionicframework.com/t/how-to-submit-ios-app-to-app-store-using-xcode/1795/6).

Other useful links:

* [Cordova tutorial](https://ccoenraets.github.io/cordova-tutorial/create-cordova-project.html)
* [cordova-plugin-console](https://github.com/apache/cordova-plugin-console)
* [cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)
* [ios-sim](https://github.com/phonegap/ios-sim)
* [react-fastclick](https://github.com/JakeSidSmith/react-fastclick)
