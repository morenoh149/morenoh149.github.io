---
layout: post
title: "Using expo release channels in your project"
image: /img/2019-07-05-phone-app-testing.png
---
![Phone app testing](/img/2019-07-05-phone-app-testing.png)
How do you manage your expo phone app's configuration between testing and production?
Expo has a feature called release channels that allow you to distribute different
versions of your app. In this post I'll go over my approach to configuration management
of a react native app using release channels.

The relevant part of the expo docs are at [Release Channels](https://docs.expo.io/versions/v33.0.0/distribution/release-channels/#using-release-channels-for-environment-variable-configuration).
Here they demonstrate using the code like this

{% highlight javascript %}
function getApiUrl(releaseChannel) {
  // since releaseChannels are undefined in dev, return your default.
  if (releaseChannel === undefined) return App.apiUrl.dev

  // this would pick up prod-v1, prod-v2, prod-v3
  if (releaseChannel.indexOf('prod') !== -1) return App.apiUrl.prod

  // return staging environment variables
  if (releaseChannel.indexOf('staging') !== -1) return App.apiUrl.staging
}
{% endhighlight %}

I had several questions when reading this snippet. Is `releaseChannel` a global variable?
Is `App` the component at the root of my project (`App.js`)?

The answers are:
1. `releaseChannel` is an argument to this function. You can read the value from the [Constants](https://docs.expo.io/versions/v33.0.0/sdk/constants/) api.
1. `App` here is an object holding all the environment variables.

After struggling to understand how to do this I ended up with the following approach.

{% highlight javascript %}
// src/constants/config.js
import Constants from 'expo-constants';

const environments = {
  "dev": {
    apiHost: "http://localhost:8000", // for ios sim
    //apiHost: "http://e20acbde.ngrok.io", // for android emulator
    amplitude: '4375515460',
    segment: 'pgjfapavsy',
  },
  "staging-v1": {
    apiHost: "https://staging.herokuapp.com",
    amplitude: '9757933226',
    segment: 'lygxjzklkt',
  },
  "staging-v2": {
    apiHost: "https://staging.herokuapp.com/v2",
    amplitude: '4210166152',
    segment: 'kkfvmlgeft',
  },
  "prod": {
    apiHost: "https://prod.herokuapp.com",
    amplitude: '3723012370',
    segment: 'pomuzuyxml',
    facebookAppId: "189override884439",
  }
};

const commonConfigs = {
  googleKey: "189foo-bar",
  facebookAppId: "189foo bar884439",
}

const env = Constants.manifest.releaseChannel || 'dev';

export default {
  ...commonConfigs,
  ...environments[env],
};
{% endhighlight %}

Which can be used throughout your app like so

{% highlight javascript %}
import config from "src/constants/config";
...
  fetch(config.apiHost, ...);
{% endhighlight %}

Some advantages here:
1. We use a single lookup variable (`environments`). You can get the environment by reading out the value by key.
1. We factor out common values into `commonConfig`. This slims down the size of the lookup object.
1. Its easy to override commonConfigs if a particular environment needs to.
1. I actually demonstrate how to use the expo `Constants` api.

One potential downside is that we don't do partial matching of the release channel name like in the expo docs. But in my experience relying on `.indexOf()` can be error prone and it's probably a better idea to be more explicit when matching your environments by name.
