---
layout: post
title: SHPE San Francisco Pagina Web Cambio de Imagen
---

Estoy feliz de anunciar que el [R3DM](http://the.r3dm.com/) ha completado su primer
proyecto. Esta disponible en [shpesfba.org](http://www.shpesfba.org/).

#### The English version of this post is available [here](../../../2014/12/12/shpe-sf-site-makeover.html).

<div class="center">
  <a href="http://shpesfba.org/">
    <img src="http://harrymoreno.com/img/shpe-landing.png" />
  </a>
</div>

### Stack
Para este proyecto originalmente usamos [GhostJS](http://ghost.io/). Encontramos
dos problemas. Cuando preguntamos como se lanza Ghost en Heroku no nos
dieron ayuda. Hay muchas paginas de web que relatan como lanzar Ghost a Heroku
pero nos dieron el sentido que no era algo que querian soportar.

Luego pasamos a la fase cosmética - implementando nuestro diseño en un
tema de Ghost - encontramos que añadiendo funcionalidad al Server era considerado
como un **App**. Y teníamos que esperar hasta que madure el API. Desde entonces
parece que han hecho progreso [Ghost App](https://github.com/TryGhost/Ghost-App).

Como resultado de estos problemas decidimos probar [KeystoneJS](http://Keystonejs.com/).
Keystone es un framework nuevo de puro Javascript. Está compuesto de Node.js,
Mongoose, MongoDB y Express - tecnologías que ya conocíamos.

El primer paso fue traducir nuestro tema para Ghost de Handlebars a
Jade. Keystone usa [Jade](http://jade-lang.com/). Después limpiamos el proyecto
generado y empezamos a familiarizarnos con la estructura de un proyecto
Keystone.

Nuestra primera funcionalidad fue la importación de Eventos Facebook usando el
[Graph API](https://developers.facebook.com/docs/graph-api/reference/v2.2).
Originalmente intentamos crear un Facebook App para poder mantener los eventos
de SHPE completamente via nuestro sito de web. Pero fue muy difícil el proceso
para applicar y aprobar (nos negaron dos veces). Pues cambiamos entonces a
desarrollar usando sólo las partes del API que son públicos. Ahora, como resultado
un administrador crea el evento primero en Facebook y entonces usando
el `event_id` lo añade a nuestro sitio. Sin mas trabajo para el administrador.

Para re-generar nuestro app usamos [Gulp](http://gulpjs.com) y [Bower](http://bower.io).

Las imágenes estan almacenadas en [Cloudinary](http://cloudinary.com/). Lo cual nos
impresionó. Usan un modelo Freemium y puedes hacer cambios dinámicos simplemente
cambiando el URL que usas para solicitar el imagen.

Para analítica usamos [Google Analytics](http://www.google.com/analytics/). Que
es indispensable para medir tráfico, SEO y demografías.

### Estilo
Este fue el primer proyecto que yo usé [Stylus](https://learnboost.github.io/stylus/).
Ya yo estaba familiarizado con [Sass](http://sass-lang.com/) y encontré Stylus
bien interesante. Los dos tienen casi las mismas características. Un día tuvimos
una discusión interna - ¿Por que preferiemos Stylus a Sass? Sinceramento no
sabemos. Stylus tiene ese *algo*. Se instala usando npm. No gem. Y parece más en
línea con el mundo Javascript.

Yo personalmente amo el [conditional assignment](https://learnboost.github.io/stylus/docs/operators.html#conditional-assignment--)
operador. Yo lo vi por primera vez cuando estaba evaluando [Kuoto-Swiss](http://kouto-swiss.io/)
que es la respuesta de Stylus para Compass. Es un framework que hace tareas en
css mucho mas facil. Por ejemplo, se uso para añadir estilos al text del
formulario.

<div class="center">
  <img src="http://harrymoreno.com/img/shpe-placeholdertext.png" alt="estilo para texto del formulario" >
  <br>
  <span class="caption">Texto Cursiva para el formulario</span>
</div>
<br>

Espero aprender mucho mas Stylus en el futuro.

Además, originalmente desarrollamos el frontend usando [Pure.css](http://purecss.io).
En ese instante parecía como la mejor solución. Compacto y simple. Rápidamente
cambiamos a [Bootstrap](http://getbootstrap.com) debido a su barra de
navegación *responsiva*. Yo soy fanático de aprender cosas nuevas pero me
pareció una pérdida de tiempo desarrollar otra barra de navegación.

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
  <img src="http://harrymoreno.com/img/shpe-adminui.png" alt="página de administración Keystone" >
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

### Información
Si estás interesado en un sitio personalizado para tu compañía ponte en contacto.
[R3DM](http://r3dm.com) siempre esta buscando nuevos clientes y proyectos
interesantes.

*Gracias a Berkeley Martinez y Johnny Estilles por revisar este post.*
