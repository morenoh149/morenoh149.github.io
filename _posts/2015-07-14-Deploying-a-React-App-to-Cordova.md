---
layout: post
title: Deploying a React App to Cordova
---

I've been building out a webapp using react. It's completely responsive and
developed in [device mode](https://developer.chrome.com/devtools/docs/device-mode).

Once I was happy with it's behavior in browsers I decided it was time to port it
as a native mobile app. Below we assume the whole application has been compiled
with Browserify or Webpack into an *app.js* file. I'm also assuming es6 syntax
and [inline styles](https://facebook.github.io/react/tips/inline-styles.html).

### index.html
* declare *cordova.js* before your bundle. This is automatically injected by
Cordova at runtime.
* declare a *viewport* meta tag to prevent resizing
* declare a *Content Security Policy*. Read [Cordova-plugin-whitelist](https://github.com/apache/cordova-plugin-whitelist#content-security-policy).

{% highlight html %}
<html>
  <head>
    <meta name="viewport"
          content="user-scalable=no,
                   initial-scale=1,
                   maximum-scale=1,
                   minimum-scale=1,
                   width=device-width">

    <!-- Allow everything in development -->
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

### Javascript
First thing to note is that cordova has it's own hooks for device lifecycle
events. Checkout [Cordova Events](http://devdocs.io/cordova/cordova_events_events.md).

Specifically, we must delay execution of our webapp until the *deviceready*
event executes. Wrap your applications entry point like so

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

* for later versions of iOS you'll want to add some top padding to your app.
{% highlight javascript %}
// somewhere in your app
if(window.device && device.platform === 'iOS') {
  styles.base.paddingTop = '20px'
}
{% endhighlight %}

* wherever you have *onClick* handlers you'll have to add an *onTouchEnd*
handler. See
[React.js Events](https://facebook.github.io/react/docs/events.html#touch-events)
{% highlight javascript %}
<i
  onClick={() => this.transition()}
  onTouchEnd={() => this.transition()} >
</i>
{% endhighlight %}
* declare *React.initializeTouchEvents(true)*

### Cordova project setup
Install the cordova cli tool `npm install -g cordova`

From your project directory

1. `cd ..`
2. `cordova create <new dirname>`
3. `cd <new dirname>`
4. `cordova platform add ios && cordova platform add android`
5. `cordova plugin add cordova-plugin-device && cordova plugin add cordova-plugin-whitelist`
6. Backup or rename the *www* directory
7. Symlink the original project to *www* `ln -s ../reactProject www`
8. Finally we can test the app in the simulator `cordova emulate ios`

You'll want to customize [config.xml](http://cordova.apache.org/docs/en/5.1.1/config_ref_index.md.html).
Especially the *name*, *description* and *author* tags.

If you plan on using git for this ignore the *plugins/* and *platforms/* folders.

Then customize your [Icons and Splash screens](http://cordova.apache.org/docs/en/5.1.1/config_ref_images.md.html).
Also see Androids [Graphics Assets](https://support.google.com/googleplay/android-developer/answer/1078870)
page.

Actually deploying to app stores will require signing. See
[Signing Android](http://ionicframework.com/docs/guide/publishing.html) and
[Publishing iOS](http://forum.ionicframework.com/t/how-to-submit-ios-app-to-app-store-using-xcode/1795/6).
For these run `cordova build --release <platform>`.

Useful links:

* [Cordova tutorial](https://ccoenraets.github.io/cordova-tutorial/create-cordova-project.html)
* [Android Signing Manually](https://developer.android.com/tools/publishing/app-signing.html#signing-manually)
* [cordova-plugin-console](https://github.com/apache/cordova-plugin-console)
* [cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)
* [cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information)
* [ios-sim](https://github.com/phonegap/ios-sim)
* [react-fastclick](https://github.com/JakeSidSmith/react-fastclick)
* [react-localstorage](https://github.com/STRML/react-localstorage)
