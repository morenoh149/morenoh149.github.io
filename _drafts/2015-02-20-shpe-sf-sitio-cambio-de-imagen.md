---
layout: post
title: SHPE San Francisco Pagina Web Cambio de Imagen
---

Estoy feliz de anunciar [R3DM](http://the.r3dm.com/) ha completado su primer
proyecto. Esta vivo [Shpesfba.org](http://www.shpesfba.org/).

<div class="center">
  <a href="http://www.SHPEsfba.org">
    <img src="/img/SHPE-landing.png" alt="SHPE página de inicio" />
  </a>
</div>

### Stack
Para este proyecto originalmente usamos [GhostJS](http://ghost.io/). Encontramos
dos problemas. Cuando pregunatmos nosotros como se lanza Ghost en Heroku no nos
dieron ayuda. Hay muchas paginas de web que relatan como lanzar Ghost a Heroku
pero nos dieron el sentido que no era algo que querian soportar.

Segundo. Cuando pasamos el fase cosmético - implementando nuestro diseño en un
Ghost tema - encontramos que añadiendo funcionalidad al Server era considerado
como un **App**. Y teníamos que esperar hasta que madure el API. Desde entonces
parece que han hecho progreso [Ghost App](https://github.com/TryGhost/Ghost-App).

Con estos problemas entonces probamos [KeystoneJS](http://Keystonejs.com/).
Keystone es un framework nuevo de puro Javascript. Es compuesto de Node.js,
Mongoose, MongoDB y Express - tecnologías que ya conocíamos.

El primer paso fue transladando nuestra tema para Ghost desde Handlebars a
Jade. Keystone usa [Jade](http://jade-lang.com/). Despues limpiamos el proyecto
generado y empezamos a familiarizarnos con la estructura de un proyecto
Keystone.

Nuestro primer mayor funcionalidad fue importación de Eventos Facebook usando el
[Graph API](https://developers.facebook.com/docs/graph-api/reference/v2.2).
Originalmente intentamos crear un Facebook App para poder mantener los eventos
de SHPE completamento via nuestro sito de web. Pero fue muy difícil el proceso
para applicar y aprobar (nos negaron dos veces). Pues cambiamos entonces a
desarrollar usando sólo usando las partes del API que son públicos. El resultado
es un administrador tiene crear el evento primero en Facebook y entonces usando
el `event_id` lo añade a nuestro sitio. Sin mas trabajo para el administrador.

Para re-generar nuestro app usamos [Gulp](http://gulpjs.com) y [Bower](http://bower.io).

Los imágenes estan grabados en [Cloudinary](http://cloudinary.com/). Que nos
impresiono. Usan un modelo Freemium y puedes hacer cambios dinámicos simplemente
cambiando el URL que usas para solicitar el imagen.

Para analítica usamos [Google Analytics](http://www.google.com/analytics/). Que
es indispensable para medir tráfico, SEO y demografías.

### Styling
Este fue el primer proyecto que yo usé [Stylus](https://learnboost.github.io/stylus/).
Ya yo estaba familiarizado con [Sass](http://sass-lang.com/) y encontré Stylus
bien interesante. Los dos tienen casi las mismas características. Un dia tuvimos
una discusión internal - ¿Por que preferiemos Stylus a Sass? Sinceramento no
sabemos. Stylus tiene ese *algo*. Se instala usando npm. No gem. Y parece mas en
alineado con el mundo Javascript.

Yo personalmente amo el [conditional assignment](https://learnboost.github.io/stylus/docs/operators.html#conditional-assignment--)
operador. Yo lo vi por primera vez cuando estaba evaluando [Kuoto-Swiss](http://kouto-swiss.io/)
que es la respuesta de Stylus para Compass. Es un framework que hace tareas en
css mucho mas facil. Por ejemplo, se uso para añadir estilos al text del
formulario.

<div class="center">
  <img src="/img/SHPE-placeholdertext.png" alt="estilo para texto del formulario" >
  <br>
  <span class="caption">Texto Cursiva para el formulario</span>
</div>
<br>

Espero aprender mucho mas Stylus en el futuro.

We also originally built our frontend using [Pure.css](http://purecss.io). At
the time it seemed like a good framework. Small and simple. We quickly
switched over to [Bootstrap](http://getbootstrap.com) due to it's responsive
navigation bar. I'm all for learning a lot but it seemed silly to rebuild a
responsive navbar when Bootstrap's is already so great.

Tambien originalmente desarrollamos el frontend usando [Pure.css](http://purecss.io).
En ese instante parecía como la mejor solution. Chiquito y simple. Rápidamente
cambiamos a [Bootstrap](http://getbootstrap.com) debido a que su barra de
navegación *responsive*. Yo soy un fan de aprendiendo cosas nuevas pero me
pareció

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
  <img src="/img/SHPE-adminui.png" alt="Keystone's admin ui" >
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
