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
* On mobile you have to be aware of the user's connectivity. Use [window.navigator.onLine](http://devdocs.io/dom/navigatoronline/online)
and provide feedback to the user if they are offline.

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
Especially the *id*, *name*, *description* and *author* tags. Read about ids
under `Additional Versioning`.

If you plan on using git for this ignore the *plugins/* and *platforms/* folders.

### App Store Listing
The Google and Apple App Stores require additional information from your app.

Customize your [Icons and Splash screens](http://cordova.apache.org/docs/en/5.1.1/config_ref_images.md.html).
Read Androids [Graphics Assets](https://support.google.com/googleplay/android-developer/answer/1078870) page.
Read iTunes Connect's [Screenshot Properties](https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Appendices/Properties.html) *scroll to it*.

[Cordova Icon](https://github.com/AlexDisler/cordova-icon) and
[Cordova Splash](https://github.com/AlexDisler/cordova-splash) are useful for
generating the images needed. You're going to want an icon of size 1024 x 1024
pixels and a splash image 1242 × 2208 pixels.

#### Android
To build an Android release `cordova build --release <platform>`.

Then you have to sign the app
[Signing Android](http://ionicframework.com/docs/guide/publishing.html)

#### iOS
For iOS I find it easier to use xcode to push to the app store.

Read [Publishing iOS](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/SubmittingYourApp/SubmittingYourApp.html).

You'll want to make an app ID and an iTunes Connect app profile. Both are
accessible from [developer.apple.com](http://developer.apple.com).

When you are uploading screenshots for your iOS store listing it's useful to
know `cmd + S` in the iOS simulator saves a screenshot to your desktop.

Useful links:

* [Cordova tutorial](https://ccoenraets.github.io/cordova-tutorial/create-cordova-project.html)
* [Android Signing Manually](https://developer.android.com/tools/publishing/app-signing.html#signing-manually)
* [cordova-plugin-console](https://github.com/apache/cordova-plugin-console)
* [cordova-plugin-geolocation](https://github.com/apache/cordova-plugin-geolocation)
* [cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information)
* [ios-sim](https://github.com/phonegap/ios-sim)
* [react-fastclick](https://github.com/JakeSidSmith/react-fastclick)
* [react-localstorage](https://github.com/STRML/react-localstorage)
