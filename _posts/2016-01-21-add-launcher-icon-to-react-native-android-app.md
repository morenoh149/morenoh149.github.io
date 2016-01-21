---
layout: post
title: How to add app icons in React Native Android
---

During the development of my most recent app. I realized the
[React Native docs](https://facebook.github.io/react-native/docs/signed-apk-android.html#content)
do not cover how to add an app icon. I love the little android icon as much as
the next person but we need our own logo. Here we have opted to not use Android
Studio as it may want to fiddle with our gradle configs.

Upload your image to
[Android asset Studio](http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html).
Pick whatever effects you'd like to apply. The tool generates a zip file for
you. Click `Download .Zip`.

Unzip the file on your machine. Then drag over the images you want to your
`/android/app/src/main/res/` folder. Make sure to put each image in the right
subfolder `mipmap-{hdpi, mdpi, xhdpi, xxhdpi, xxxhdpi}`.

![Drag icons]({{ site.url }}/img/androidDragNDrop.png)

Do not (as I originally did) naively drag and drop the whole folder over your
`res` folder. As you may be removing your `/res/values/{strings,styles}.xml`
files altogether.

You'll get this error

{% highlight javascript %}
Unknown source file : warning: string 'catalyst_debugjs' has no default translation.
Unknown source file : warning: string 'catalyst_inspect_element' has no default translation.
Unknown source file : warning: string 'catalyst_jsload_error' has no default translation.
Unknown source file : warning: string 'catalyst_jsload_message' has no default translation.
Unknown source file : warning: string 'catalyst_jsload_title' has no default translation.
Unknown source file : warning: string 'catalyst_reloadjs' has no default translation.
Unknown source file : warning: string 'catalyst_settings' has no default translation.
Unknown source file : warning: string 'catalyst_settings_title' has no default translation.
/Users/harrymoreno/programming/reactNative/DragAndDrop/android/app/build/intermediates/manifests/full/debug/AndroidManifest.xml:21:24-40 : No resource found that matches the given name (at 'label' with value '@string/app_name').
/Users/harrymoreno/programming/reactNative/DragAndDrop/android/app/build/intermediates/manifests/full/debug/AndroidManifest.xml:22:24-39 : No resource found that matches the given name (at 'theme' with value '@style/AppTheme').
/Users/harrymoreno/programming/reactNative/DragAndDrop/android/app/build/intermediates/manifests/full/debug/AndroidManifest.xml:26:28-44 : No resource found that matches the given name (at 'label' with value '@string/app_name').

:app:processDebugResources FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:processDebugResources'.
> com.android.ide.common.process.ProcessException: org.gradle.process.internal.ExecException: Process 'command '/usr/local/opt/android-sdk/build-tools/23.0.1/aapt'' finished with non-zero exit value 1

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

BUILD FAILED

Total time: 7.006 secs
Could not install the app on the device, read the error above for details.
Make sure you have an Android emulator running or a device connected and have
set up your Android development environment:
https://facebook.github.io/react-native/docs/android-setup.html
{% endhighlight %}
