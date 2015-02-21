---
layout: post
title: SHPE San Francisco Pagina Web Cambio de Imagen
---

#### The English version of this post is available [here](../../../2014/12/12/shpe-sf-site-makeover.html).

Estoy feliz de anunciar [R3DM](http://the.r3dm.com/) ha completado su primer
proyecto. Esta vivo [shpesfba.org](http://www.shpesfba.org/).

<div class="center">
  <a href="http://www.SHPEsfba.org">
    <img src="/img/SHPE-landing.png" alt="SHPE página de inicio" />
  </a>
</div>

### Stack
Para este proyecto originalmente usamos [GhostJS](http://ghost.io/). Encontramos
dos problemas. Cuando pregunatmos como se lanza Ghost en Heroku no nos
dieron ayuda. Hay muchas paginas de web que relatan como lanzar Ghost a Heroku
pero nos dieron el sentido que no era algo que querian soportar.

Segundo. Cuando pasamos el fase cosmético - implementando nuestro diseño en un
Ghost tema - encontramos que añadiendo funcionalidad al Server era considerado
como un **App**. Y teníamos que esperar hasta que madure el API. Desde entonces
parece que han hecho progreso [Ghost App](https://github.com/TryGhost/Ghost-App).

Con estos problemas entonces probamos [KeystoneJS](http://Keystonejs.com/).
Keystone es un framework nuevo de puro Javascript. Es compuesto de Node.js,
Mongoose, MongoDB y Express - tecnologías que ya conocíamos.

El primer paso fue transladando nuestra tema para Ghost de Handlebars a
Jade. Keystone usa [Jade](http://jade-lang.com/). Despues limpiamos el proyecto
generado y empezamos a familiarizarnos con la estructura de un proyecto
Keystone.

Nuestro primer funcionalidad fue importación de Eventos Facebook usando el
[Graph API](https://developers.facebook.com/docs/graph-api/reference/v2.2).
Originalmente intentamos crear un Facebook App para poder mantener los eventos
de SHPE completamente via nuestro sito de web. Pero fue muy difícil el proceso
para applicar y aprobar (nos negaron dos veces). Pues cambiamos entonces a
desarrollar usando sólo las partes del API que son públicos. El resultado
es un administrador crea el evento primero en Facebook y entonces usando
el `event_id` lo añade a nuestro sitio. Sin mas trabajo para el administrador.

Para re-generar nuestro app usamos [Gulp](http://gulpjs.com) y [Bower](http://bower.io).

Las imágenes estan grabados en [Cloudinary](http://cloudinary.com/). Que nos
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

Tambien originalmente desarrollamos el frontend usando [Pure.css](http://purecss.io).
En ese instante parecía como la mejor solution. Chiquito y simple. Rápidamente
cambiamos a [Bootstrap](http://getbootstrap.com) debido a su barra de
navegación *responsive*. Yo soy un fan de aprendiendo cosas nuevas pero me
pareció un gasto do tiempo desarrollar otra barra de navegación.

Otra cosas que usamos:

+ Para el Slider usamos [slick](https://kenwheeler.github.io/slick/)
+ Bootstrap tranladado a Stylus [bootstrap-stylus](https://github.com/Acquisio/bootstrap-stylus)
+ Para la gallería [Bootstrap Image Gallery](https://blueimp.github.io/Bootstrap-Image-Gallery/)
+ Para seleccionar la fetcha en la forma [pickadate.js](http://amsul.ca/pickadate.js/)
+ Las formas tambien usan [bootstrapvalidator](http://bootstrapvalidator.com/)
que le indica al usuario si la información que dieron esta incorrecto.

### AdminUI
La característica mas importante de KeystoneJS es la página de administración.

<div class="center">
  <img src="/img/SHPE-adminui.png" alt="página de administración Keystone" >
  <br>
  <span class="caption">página de administración Keystone</span>
</div>
<br>

[Keystone](http://www.Keystonejs.com/) es un **Content Management System** o
CMS. Si algun dia llega a ser tan popular cómo Wordpress lo es, eso seria algo
increíble. Desarrollando un sito con un CMS is muy bueno para proyectos que se
tienen que entregar a un cliente. Estas dando un pedazo de software - un sitio
o applicación - que se puede usar por una persona que no es téchnico. Esto
mantiene los costos bajo para el cliente porque entonces no tienen que pedir
mas funcionalidad. Y los desarrolladores tienen menos tares muy simple. ¡Los CMS
nos hacen todo felizes!

### About
Si estas interesado en un sitio costumbre para tu compañia pongase en contacto.
[R3DM](http://r3dm.com) siempre esta vuscando nuevos clientes y proyectos
interesantes.
