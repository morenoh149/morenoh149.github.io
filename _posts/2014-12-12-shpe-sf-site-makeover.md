---
layout: post
title: SHPE San Francisco site makeover
---

I'm happy to announce that [R3DM](http://the.r3dm.com/)'s first project is done!
It's live at [Shpesfba.org](http://www.shpesfba.org/).

#### La versión Español de este post esta [aqui](../../../2015/02/20/shpe-sf-sitio-cambio-de-imagen.html).

<div class="center">
  <a href="http://shpesfba.org/">
    <img src="http://harrymoreno.com/img/shpe-landing.png" />
  </a>
</div>

### Stack
For this project we originally went with [GhostJS](http://ghost.io/). We ran
into issues in two main ways. When we first asked the developers about how to
get ghost going on [heroku](http://heroku.com/) we didn't get much help. There
are many blog posts floating around the blogosphere regarding how to accomplish
this but it didn't seem like GhostJS was interested in this usecase.

Secondly, once we got past the cosmetic stage - implementing our design as a
ghost theme - we found that adding custom server side code fell under **App**
territory. And that ghost's App API was still under heavy development. Since
then it seems like they've made more progress on that front
[Ghost App](https://github.com/TryGhost/Ghost-App).

When we ran into these roadblocks we explored
[KeystoneJS](http://Keystonejs.com/). Keystone is a fairly new project as well
but we were happy to see that it was built using Node.js, Mongoose, Mongodb and
Express - technologies we were already familiar with.

The first step was to recompile our ghost theme from Handlebars to Jade.
Keystone uses [Jade](http://jade-lang.com/). After we did that we
cleaned up the generated files and started familiarizing ourselves with
Keystone's project structure.

Our first major server side functionality was importing Events data from
Facebook's [Graph API](https://developers.facebook.com/docs/graph-api/reference/v2.2).
We originally attempted to build a Facebook app so we could manage SHPE's
events through our website. But we had difficulty getting Facebook to
understand exactly what it was we wanted to do (they rejected our application
twice). So we went with plan B and built our functionality using the parts of
the api that don't require elevated privileges. The result being that an
administrator would first have to create the facebook event (as normal) then
grab the `event_id` from the url and paste it into our site. No additional work
for the group administrator.

For our build strategy we use [Gulp](http://gulpjs.com) and [Bower](http://bower.io).

The images are stored using [Cloudinary](http://cloudinary.com/). Which was
surprisingly nice. They have a freemium model and perform image manipulations on
the fly by simply modifying the URL you use to request images.

For analytics we use [Google Analytics](http://www.google.com/analytics/). A
must to measure web traffic, SEO and demographics.

### Styling
This is the first project where I used [Stylus](https://learnboost.github.io/stylus/).
Coming from a rails background I was already familiar with [Sass](http://sass-lang.com/)
and found Stylus very interesting. The features are mached almost one-to-one
with subtle differences. I find it hilarious when I asked a peer why stylus is
better than sass - we both shrugged. It just feels better and more inline with
the Javascript way of doing things. It may only be due to the fact that it's an
NPM module instead of a gem.

I really enjoy the [conditional assignment](https://learnboost.github.io/stylus/docs/operators.html#conditional-assignment--)
operator. I was first exposed to it while evaluating [Kuoto-Swiss](http://kouto-swiss.io/)
a Compass-like response for Stylus. We used Kuoto-Swiss to handle css vendor
prefixing for styling our form's placeholder text.

<div class="center">
  <img src="http://harrymoreno.com/img/shpe-placeholdertext.png" alt="styling placeholder text" >
  <br>
  <span class="caption">Italicized placeholder text</span>
</div>
<br>

I'm really looking forward to learning more about stylus's advanced features in
the future.

We also originally built our frontend using [Pure.css](http://purecss.io). At
the time it seemed like a good framework. Small and simple. We quickly
switched over to [Bootstrap](http://getbootstrap.com) due to it's responsive
navigation bar. I'm all for learning a lot but it seemed silly to rebuild a
responsive navbar when Bootstrap's is already so great.

Other things we used:

+ The events slider is built using [slick](https://kenwheeler.github.io/slick/) - the last carousel you'll ever need.
+ The stylus port of Bootstrap [bootstrap-stylus](https://github.com/Acquisio/bootstrap-stylus)
+ For the gallery [Bootstrap Image Gallery](https://blueimp.github.io/Bootstrap-Image-Gallery/)
+ The date selector in our forms is [pickadate.js](http://amsul.ca/pickadate.js/) an amazing find.
+ The forms also use [bootstrapvalidator](http://bootstrapvalidator.com/) to
let the user know if any fields are obviously wrong right away.

### AdminUI
One of the single most attractive features of Keystonejs is it's AdminUI.

<div class="center">
  <img src="http://harrymoreno.com/img/shpe-adminui.png" alt="Keystone's admin ui" >
  <br>
  <span class="caption">Keystonejs's adminUI</span>
</div>
<br>

[Keystone](http://www.Keystonejs.com/) bills itself as a **Content Management
System**. If it achieves even a fraction of how big Wordpress is, that would be
amazing. Delivering a site with a CMS is amazing for client work. You're
basically delivering a piece of software - a website or mobile app - that can be
used by a nontechnical person. This keeps costs low for the client. And the
developers aren't bogged down by small changes desired by the clients.
It empowers the customer!

### About
If you're interested in a custom built site - perhaps you have an idea for a
cool new phone app or would like to automate some task so your employees can do
real work - get in touch. [R3DM](http://r3dm.com) is always looking for new and
interesting work.
