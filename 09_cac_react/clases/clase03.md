# :star: CLASE 03 - 06 MAR

## :stars:  Vamos a realizar la pagina de Dulces Amaya


Primero vamos a realizar el **PROTOTIPADO** y vamos a realizar el **DIAGRAMA DE FLUJO**.

Tenemos:

- El **HEADER** con el **LOGO** (que tambien va a tener un link el que me va a dejar en la parte del logo-cabecera) y el **NAVBAR** (que tiene los **LINKS INTERNOS** ya que nuestra web es ONEPAGE).

Se puede mejorar la cabecera con un fondo que tenga colos asi se ven bien los links y no se pierden, el logo en general esta hacia la izquierda y hacia la derecha el NavBar. Y hay que hacerlo responsivo, por ejemplo al ver en celular que tengamos el Menu Hamburguesa.

Para no perder el Header al scrolear se puede poner fixed o sino se puede tener abajo a la derecha la flecha hacia arriba para ir al NavBar.


Los links son 

-**Home**, va a ser el sector de la HERO IMAGE con el texto y el CTA, que dice CONCENOS, pero como no tenemos una seccion de Nosotros queda redundante ya que justo la seccion que sigue es la de los productos.

-**Productos**, van a ser los recuadros con los productos, en vez de tenerlos en cajas lo podria tener en un **slider** con las flechas a los costados que me indica que tiene una continuacion, me interactua con el carousel, que me va a mostrar mas productos, y el usuario lo maneja.

La Gestalt habla de la CONTINUIDAD, por eso en el carousel se le pone un pre y un post sobreado, asi el usuario tiene esa sensacion de **continuidad**.

También tiene una parte de **Recetas**, las cuales pueden venir de una base de datos o de una API. -> **Recetas** tendría que ser un nuevo link en el **NavBar** -> Tengo un CTA que me va a crear un Pop Up donde se muestre la receta. Como viene de una bd o una API, va a ser un carousel, y puede tener un paginado si son muchas. Podría tenr la opción de **marcarla como favorito** -> Tendría que tener un **login** o escribirme a un **newsletter** asi los guardamos en la base de datos como **futuro cliente**


-**Locales**

-**Contacto**, va a ser el formulario de contacto, que antes va a tener mi nueva seccion de Conocenos o Nosotros.

- El **FOOTER** con... 

...los links del sitio, es otro modo de que me redirija a las secciones dle sitio, ademas del NavBar.

...las Redes Sociales

...la ubicacion con el mapa

---


![image](https://user-images.githubusercontent.com/72580574/223558555-ed25245a-c6c5-4f61-982a-f0177645c503.png)


---

 ## :stars: Funcionalidades

- Tener el NavBar fijo arriba o si me fui para abajo y no tengo el Navbar fixed puedo tener la flecha para ir hacia arriba.


---

El usuario quiere que **la nevegabilidad sea facil**, scrolea la pagina, no la lee toda.

Debemos hacer un sitio simple atractivo para que el usuario la utilice, interactue y no abandone la web

---

- Estamos aramndo como un **Diagrama de Flujo** de toda la **navegación interna** y sus **funciones**(links internos, links externos, interacciones como los CTA, los botones-que hacen, que despliegan). 

- Y luego analizar itnernamente, por ejemplo el **botón enviar**, al hacer click, ¿qué funcionalidad me da? Una vez que se completa el **form** debe ir a una **base de datos**, la cual debe estar conectada y voy a tener dos casos: envío exitoso o envío fallido(voy a tener un evento y avisarle al usuario que no se envío, debe saber). Además en el mismo form tengo que tener mis **validaciones del front** para que en cada campo que el usuario vaya completando, tengo que ir avisando si manda mal algo para que lo corrija(se ve si se avisa al hacer click en enviar o a medida que va completando cada parte del formulario).

- Por más que tengo un buen diseño, siempre antes hago todo este análisis

---

- **Landing Page** no lleva links.

- **One Page** es una pagina completa con enlaces en la misma web.
 
---
---

## 📋 Tarea

Armar el prototipo de funcionalidad, ya sea a mano, con Figma o con lo que podamos.

---
---

## :star: Diseño Adaptable o Responsive Design

![image](https://user-images.githubusercontent.com/72580574/223559516-0150ee2f-849e-492b-bba9-6c1fe8e67bd9.png)

:tv: Referentes:

- [**Ethan Marcotte**](https://ethanmarcotte.com/)

![image](https://user-images.githubusercontent.com/72580574/223559958-85049dd0-4709-4319-827a-72935641de65.png)


- [**Luke Wroblewski**](Ethan Marcotte http://ethanmarcotte.com/)

De responsive web design hacia **mobile first design**

![image](https://user-images.githubusercontent.com/72580574/223559821-8a9a4aeb-d751-454f-9aac-1a401a493a1f.png)


### Media Queries 

**Media Queries** es un módulo CSS3 que permite la representación de contenido para adaptarse a condiciones como la resolución de pantalla. Se convirtió en un estándar recomendado por la W3C en Junio del 2012. y es un principio básico de la tecnología de Diseño web adaptativo.

[Para ampliar](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries)

[http://mediaqueri.es/](http://mediaqueri.es/)

### Framework

Un **framework de CSS** es una **librería de estilos genéricos** que puede ser usada para implementar diseños web. Aportan una serie de utilidades que pueden ser aprovechadas frecuentemente en los distintos diseños web.

- **Foundation**:

-[GRilla de 12 columnas](https://get.foundation/sites/docs-v5/components/grid.html)

-Mobile First

-Responsive

![image](https://user-images.githubusercontent.com/72580574/223560445-886898dc-a735-4acd-a245-a1cd3cd2ca59.png)

- **Bootstrap**
- 
![image](https://user-images.githubusercontent.com/72580574/223560839-2cfd30f4-d9b5-4fbf-8e96-8bf06a819416.png)


-[Grilla de 12 columnas](https://getbootstrap.com/docs/3.4/examples/grid/)

-Mobile First

-Responsive

---
---

## :star: DISEÑO DE APPS WEB Y MOBILE - VISUALIZACIÓN E INTERFACES


### Calidad del diseño de webapps

![image](https://user-images.githubusercontent.com/72580574/223561227-7381a1ad-09a8-46f4-bd69-24d01f94ebbf.png)


- **Usabilidad**_

-Comprensión global del sitio

-Características y estética de la interfaz

-Características especiales

-Retroalimentación y ayuda en línea

### METAS DEL DISEÑO WEB

```
-Simplicidad
-Consistencia
-Identidad
-Robustez
-Navegabilidad
-Atractivo visual
-Compatibilidad
```

![image](https://user-images.githubusercontent.com/72580574/223561595-bd5b16c2-0ad4-48ca-98f8-bca99e462822.png)

- **Objetivos de la interfaz**:

-Establecer una ventana congruente en el contenido y las funciones que brinda.

-Guiar al usuario a través de una serie de interacciones con la webapp.

-Organizar las opciones de navegación y contenido disponibles para el usuario.

### SEMÁNTICA DE LA NAVEGACIÓN

- Jerarquía de usuarios (actores)

- Casos de uso desarrollados (para cada actor)

- Unidades semánticas de navegación:

• Formas de navegación

• Nodos de navegación

• Jerarquía de unidades semánticas de

### SINTAXIS DE NAVEGACIÓN

- Vínculo de navegación individual

- Barra de navegación horizontal

- Columna de navegación vertical

- Pestañas

- Mapas del sitio

### CREACIÓN DE UNA UNIDAD SEMÁNTICA DE NAVEGACIÓN

Ejemplo “Casa Segura”, tomado de Pressman.

![image](https://user-images.githubusercontent.com/72580574/223562047-5bcefb34-0780-4f6b-b435-da75d94e9c90.png)


### MÉTODO DE DISEÑO DE HIPERMEDIOS ORIENTADO A OBJETOS

Ejemplo “Casa Segura”, tomado de Pressman.

![image](https://user-images.githubusercontent.com/72580574/223562144-eec03213-e598-4375-8fe8-de45936c7b2d.png)


### DIFERENCIAS ENTRE APLICACIONES Y WEB MÓVILES

- Deben ser descargadas e instaladas.

- Diseñadas específicamente para dispositivos móviles.

- Pueden verse aun cuando se está sin conexión a Internet.

- Acceden a ciertas características de hardware del teléfono.

- Mejor experiencia de uso.


### MOBILE FIRST

- Tendencia emergente de trabajo.

- El diseño comienza desde cero (no hay web antecesora).

- Implica plantear el proceso de diseño teniendo en cuenta el móvil en primer lugar.


### PROCESO DE DISEÑO Y DESARROLLO DE UNA APP

![image](https://user-images.githubusercontent.com/72580574/223562379-01a62c98-2dea-4bf2-a396-6facf39af53c.png)

![image](https://user-images.githubusercontent.com/72580574/223562430-bb337035-8827-4a57-817b-6c225000e8a9.png)

### TIPOS DE APLICACIONES SEGÚN SU DESARROLLO

- **Aplicaciones nativas**:

• Desarrolladas con Software Development Kit

• Se descargan e instalan desde las tiendas de aplicaciones

• Se actualizan frecuentemente

• Pueden hacer uso de las notificaciones del sistema operativo

• No requieren Internet para funcionar

• Interfaz basada en las guías de cada sistema operativo

- **Aplicaciones web**:

• Base de programación de las aplicaciones web

• Pueden ser fácilmente utilizadas en diferentes plataformas

• No necesitan instalarse

• No requieren actualización (por parte del usuario)

• Requieren de una conexión a Internet

• Interfaz más genérica e independiente de la apariencia del sistema operativo

- **Aplicaciones híbridas**:

• Desarrollo parecido a la de una aplicación web, pero se compila o empaqueta como una aplicación nativa.

• Casi con un mismo código se obtienen diferentes aplicaciones y distribuirlas en tiendas.

• Permiten acceder, usando librerías, a las capacidades del teléfono.

• Diseño visual que no se identifica en gran medida con el del sistema operativo.

### DEFINIENDO LA PROPUESTA

- Investigación del usuario

- Definición funcional

- Arquitectura de información

- Wireframes

• Papel

• Stencils

• Plantillas

- Prototipo

• Documentos navegables

• Versiones web

• Otros formatos

### INTERACCIÓN Y PATRONES

- Principios de experiencia de usuario

- Simplicidad Consistencia Navegación

- Intuitiva

### INTERACCIÓN Y FORMAS DE SOSTENER EL MÓVIL

De acuerdo a la forma de sostener el móvil, el pulgar tiene mayor o menor dificultad en acceder a ciertas zonas.

![image](https://user-images.githubusercontent.com/72580574/223563063-f9f47543-b8c6-4ddd-a0bb-874531473cfa.png)


Saine, Jamie. How Mobile Users Hold Devices. http://blog.utest.com/how-mobile-users-hold-devices/2013/03/


### INCIDENCIA EN LA ORIENTACIÓN DEL TERMINAL

Las diferentes orientaciones son una oportunidad de repensar la disposición de información que sea más útil en cada caso.

![image](https://user-images.githubusercontent.com/72580574/223563167-b9101cf2-5694-4159-ae23-e276baf71b19.png)

### PATRONES DE INTERACCIÓN

Según Martijn van Welie, «un patrón de interacción es un resumen práctico de una solución de diseño que se ha demostrado que funciona más de una vez.
Utilízalos como guía, no como una ley»*.

* [http://www.androidpatterns.com/](http://www.androidpatterns.com/)


### NAVEGACIÓN: PESTAÑAS

Se pueden utilizar para filtrar contenidos o cambiar entre pantallas que tienen el mismo nivel de jerarquía, indicando siempre dónde se está y hacia dónde más se puede ir.

Es necesario destacar siempre la pestaña seleccionada, mantener el orden y la ubicación inicial y no usarlas para incluir otras acciones distintas a la navegación.

Google sugiere aplicar una regla de oro: no emplear más de cinco o siete pestañas.

![image](https://user-images.githubusercontent.com/72580574/223563395-de52ac83-8db0-4e39-a335-26c443085d30.png)

Las pestañas se ubican arriba en Android y Windows Phone y en iOS, abajo.

### NAVEGACIÓN: LISTAS

Esta forma de mostrar tantos ítems como sea necesario permite al usuario tocar alguno de ellos para obtener información complementaria.

Las listas pueden mostrar tanto textos como imágenes, pero es importante siempre jerarquizar su contenido.

Cuando contiene muchos elementos puede añadirse un sistema de índice que complemente la navegación a medida que se va desplazando, de forma vertical, por el
contenido de la lista.

![image](https://user-images.githubusercontent.com/72580574/223563525-783d15b5-108c-4650-97df-e3edcc1c09a2.png)


Uso de listas en Android, iOS y Windows Phone.


### NAVEGACIÓN: GALERÍAS DE IMÁGENES

La disposición de imágenes está regida por la retícula propuesta por cada sistema operativo. En caso de que excedan el área disponible, se realiza un recorte de las imágenes a mostrar.

Android es un caso particular, ya que al mostrar imágenes en la vista de cuadrícula es posible utilizar un desplazamiento horizontal, siendo recomendable mostrar una parte de las imágenes siguientes.

![image](https://user-images.githubusercontent.com/72580574/223563656-bd6607c0-5b92-4967-b437-bcb65a765a37.png)


Las galerías de imágenes usan un formato reticular en Android, iOS y Windows Phone.

###  NAVEGACIÓN: MENÚ TIPO CAJÓN

Este patrón, popularizado por Facebook, permite cambiar rápidamente entre pantallas de la aplicación.

Brinda mejor aprovechamiento del espacio y, una vez desplegada la lista, ofrece una forma cómoda de navegar los contenidos, pero obliga a los usuarios a tocar el botón y desplegar el panel para poder saber cuáles son las opciones disponibles en la lista.

Android ha estandarizado su uso en las guías oficiales, recomendándolo para los niveles de navegación más altos o cuando las opciones de menú no tengan relación directa entre sí.

![image](https://user-images.githubusercontent.com/72580574/223563798-6cdaccbd-f0c2-4760-a90e-b66445a04622.png)


Muy popular en Android, iOS y Windows Phone, aunque por ahora solo el primero lo incorpora en sus guías oficiales.

###  NAVEGACIÓN: VOLVER

Los usuarios acostumbrados a usar la web encontrarán aquí una forma conocida de navegar. En el mundo móvil, con la navegación pantalla a pantalla, el uso del botón «volver» es muy frecuente.

En iOS, este botón está contenido en la barra de navegación. La navegación entre páginas es jerárquica.

En Windows Phone, el botón físico del teléfono se encarga de gestionar esta forma de navegar entre los contenidos.

![image](https://user-images.githubusercontent.com/72580574/223564232-94b6d86e-2e6e-4c33-b0c1-e06d6818fb8e.png)


El botón de volver en Android se usa arriba y abajo; en iOS, siempre arriba y en Windows Phone, es el botón físico del terminal.


### ACCIONES: BARRA DE ACCIONES

El compendio de acciones que se pueden realizar se representa por medio de íconos, por ello la correcta selección de estos recursos gráficos es fundamental.

Es importante ordenar las acciones en función de la frecuencia de uso. El ancho de la pantalla determinará cuantos ítems se pueden mostrar.

![image](https://user-images.githubusercontent.com/72580574/223564543-5a6ed0e7-6750-4fd7-8c79-d83d44b0baac.png)


La barra de acciones se ubica arriba en Android y abajo en iOS y Windows Phone.


###  ACCIONES: DESBORDE DE ACCIONES

Las funciones extra y de uso poco frecuente se descubren por medio de la «revelación progresiva». Están ocultas la mayor parte del tiempo, hasta que el usuario las reclame.

![image](https://user-images.githubusercontent.com/72580574/223564675-84b4a743-ea32-48ce-b530-6d95f4312508.png)


Android, iOS y Windows Phone plantean diferentes alternativas para resolver el desborde de acciones.

### ACCIONES: ACCESOS RÁPIDOS

Hay acciones que deben estar muy a mano, por ejemplo, acceder a las acciones asociadas a ítems en una lista o retícula.

![image](https://user-images.githubusercontent.com/72580574/223564778-f19634a0-f6da-4104-8880-029911da6b56.png)


Formas de acceder rápidamente a acciones en Android, iOS y Windows Phone.

### ACCIONES: COMPARTIR

Probablemente una de las acciones más empleadas en estos días: compartir contenidos con amigos, en Facebook, en Twitter, por mensaje de texto, como sea. Los
sistemas operativos también han notado esta necesidad y han facilitado una implementación integrada al sistema muy fácil de aprovechar.

![image](https://user-images.githubusercontent.com/72580574/223564925-28ad4dd1-435a-4468-ad93-b8b0a48ca815.png)


La acción de compartir se despliega arriba en Android, abajo en iOS y en pantalla completa en Windows Phone. 


### ACCIONES: BUSCAR

Mediante la introducción de texto o por voz. 

Es preferible ir mostrando los resultados a medida que el usuario escribe para mejorar la experiencia de uso. Idealmente, el tiempo de espera entre la introducción de los datos y el resultado no debería ser superior a uno o dos segundos.

![image](https://user-images.githubusercontent.com/72580574/223565026-90c4fe11-83ca-4ad4-a51a-f6ac61eeffd0.png)

Buscar se ubica arriba en Android y iOS; en Windows Phone utiliza una pantalla aparte.

### ACCIONES: EDICIÓN DE LISTAS

Es posible que el usuario necesite modificar varios elementos de una lista de forma simultánea. Debe seleccionar los elementos sobre los que se quiere actuar y luego aplicar la acción correspondiente.

La manera de seleccionar elementos en una lista varía considerablemente de un SO a otro.

![image](https://user-images.githubusercontent.com/72580574/223565141-ad33de52-587c-44c6-bc3e-139fe0a4c619.png)


Android, iOS y Windows Phone presentan diferentes alternativas para realizar la selección múltiple de elementos en una lista.

### ACCIONES: CUADROS DE DIÁLOGO
 
Hay veces que se interrumpir al usuario para que tome una decisión o para explicarle algo antes de continuar una tarea. Mientras los diálogos están visibles en pantalla no es posible hacer otra cosa en el resto de la aplicación.

Cuando no requieren una toma de decisión, los cuadros son informativos y tienen únicamente un botón para cerrarlos. Se debe limitar su uso para mensajes graves o trascendentales que no puedan esperar.

Otros se usan para comunicar al usuario que debe tomar una decisión para poder continuar y puede elegir entre dos o más opciones disponibles. 

![image](https://user-images.githubusercontent.com/72580574/223565262-bb22eced-3a93-4ed7-8107-59572e4abced.png)


Cuadros de diálogo que requieren la toma de decisiones por parte del usuario en Android, iOS y Windows Phone.

### ACCIONES: NOTIFICACIONES DENTRO DE LA APP

No requieren la intervención del usuario ni tampoco interrumpen su flujo de trabajo.

Son la confirmación visual (u otra) de que la acción que se acaba de realizar ha ido bien.

Se muestra explícitamente cómo han ido las cosas o que sucederá en breve con simples mensajes de confirmación. Se presentan en pequeños avisos que desaparecen luego de unos segundos.

Comunican mensajes que no tienen una importancia crítica.

![image](https://user-images.githubusercontent.com/72580574/223565431-3630b507-e3a0-4718-9d45-7fd3183df78b.png)


Android ofrece notificaciones in-app nativas, en iOS y Windows Phone deben programarse especialmente.

### ACCIONES: INTRODUCCIÓN DE DATOS

Los sistemas operativos han desarrollado teclados diferentes dependiendo del tipo de dato que deba ingresarse. Ya que es un un elemento que ocupa gran parte de la pantalla y que dificulta la navegación entre los campos para introducir información.

Es recomendable usar otras alternativas como menús deslizantes, desplegables, checks o cualquier opción similar a una lista donde el usuario pueda elegir entre varias opciones. Y los componentes de hardware en el teléfono.

![image](https://user-images.githubusercontent.com/72580574/223565576-cf23c3d2-5eb5-4fb0-9167-da6285572cd9.png)


Diferentes tipos de teclados usados para introducción de datos en Android, iOS y Windows Phone.

### GESTOS: TOCAR

Toca la superficie con la yema del dedo.

Android -> Selecciona la acción primaria.

Apple -> Selecciona la acción primaria.

Windows -> Selecciona la acción primaria.

![image](https://user-images.githubusercontent.com/72580574/223565707-6ea09f87-f970-4b4b-abab-eeb63a98530e.png)


### GESTOS: ARRASTRAR

Mueve un dedo sobre la superficie sin perder el contacto.

Android -> Archivar o borrar al arrastrar horizontalmente en listas.

Apple -> Mostrar un botón de eliminar al arrastrar horizontalmente en listas. Mover ítems en listas.

Windows -> Cambiar a otras pestañas o sectores de una vista Panorama.

![image](https://user-images.githubusercontent.com/72580574/223565909-8f6bfcbd-8624-4273-ae2f-4ae6a1c954e4.png)



### GESTOS: DESLIZAR

Desliza rápidamente y sin detenerte la yema de un dedo sobre la superficie.

Androd -> Desplazarse a través del contenido. Cambiar a otras pestañas.

Apple -> Desplazarse a través del contenido.

Windows -> Desplazarse a través del contenido. Cambiar a otras pestañas o sectores de una vista Panorama.

![image](https://user-images.githubusercontent.com/72580574/223565967-831a8469-1e68-49c6-bb5f-1f023b67b3ee.png)


### GESTOS: MANTENER PULSADO

Toca la superficie durante un período prolongado de tiempo sin mover el dedo.

Android -> Entrar al modo de edición de listas.

Apple -> Mostrar un tooltip. Aumentar el contenido visible bajo el dedo.

Windows -> Mostrar un tooltip sin seleccionar el elemento.

![image](https://user-images.githubusercontent.com/72580574/223566217-6bc331ed-f0d5-4ae0-afa2-28da0714922e.png)


### GESTOS: DOBLE TOQUE

Toca rápidamente la superficie dos veces con la yema del dedo.

Android -> Alternar entre acercar y alejar. Seleccionar texto.

Apple -> Alternar entre acercar y alejar.

Windows -> Alternar entre acercar y alejar.

![image](https://user-images.githubusercontent.com/72580574/223566327-c067601d-4efd-4597-b5eb-8b28306e8494.png)

### GESTOS: JUNTAR Y SEPARAR

Toca la superficie con dos dedos y júntalos o sepáralos.

Android -> Aumentar o reducir el zoom.

Aple -> Aumentar o reducir el zoom.

Windows- > Aumentar o reducir el zoom.

![image](https://user-images.githubusercontent.com/72580574/223566441-993288c2-9c89-441e-bffe-c6703e9c45e0.png)

### GESTOS: GIRAR

Toca la superficie con dos dedos y júntalos o sepáralos mientras giras la muñeca.

Android -> Girar una imagen o un mapa.

Aple -> Girar una imagen o un mapa.

Windows -> Girar una imagen o un mapa.

![image](https://user-images.githubusercontent.com/72580574/223566544-3c41c8ff-38bc-4720-b523-1761fde0b795.png)

## DISEÑO VISUAL

La interfaz de una aplicación es el lugar donde nacen las interacciones.

En mayor medida está compuesta por botones, gráficos, íconos y fondos, que tienen una apariencia visual diferente en cada uno de los sistemas 
operativos.

- Identidad visual

- Grilla o retícula de construcción

- Tipografía

- Color

- Lenguaje textual

- Animación

### PROBANDO CON USUARIOS

- Test de usabilidad

- Test en móviles

- Test guerrilla

- Otras formas de obtener información

• Dogfooding

• Test de los cinco segundos

## EL MUNDO TABLETA

• Si ya se tiene una app para móvil, el siguiente paso natural es diseñar una versión para Tablet.

• Se trata de dos medios que se diferencian, no solo en tamaño, sino también en los modos de uso —cómo y dónde son utilizados— y en la relación que
generan con el usuario.

### LA PANTALLA GRANDE

Mayor protagonismo visual

Tipografía

Aprovechamiento del espacio


### MAYOR PROTAGONISMO VISUAL

El espacio disponible en una tableta permite que los gráficos se luzcan más en pantalla.

### APROVECHAMIENTO DEL ESPACIO

Las tabletas hacen un uso diferente del espacio, lo que permite mostrar dos pantallas en una sola. En este caso, Dropbox muestra la lista de archivos junto con el contenido, algo que no se puede hacer en iPhone sin cambiar de pantalla.

![image](https://user-images.githubusercontent.com/72580574/223567024-3b051337-9e06-44c8-870b-761f1dddf576.png)

## CONTEXTO DE USO

La interacción

La funcionalidad

Contenido de la app

### LA INTERACCIÓN

Según la manera de sostener la tableta, las zonas inferiores de la pantalla son más fáciles de acceder.

![image](https://user-images.githubusercontent.com/72580574/223567124-4a3a800f-4d3a-43ec-8fbd-3be7baea1fcb.png)


### FUENTES

• Pressman, Roger. Ingeniería de Software, enfoque práctico. Capítulo 13.
McGraw-Hill, 7ma Edición.

• Cuello, Javier y Vittone, José. Diseñando apps para móviles. Capítulos 1, 5, 7,
8, 10, 14. Edición: Catalina Duque Giraldo. Primera edición: junio de 2013.

---
---

## :star: DISEÑO DE LA INTERFAZ DE USUARIO VISUALIZACIÓN E INTERFACES :star:

![image](https://user-images.githubusercontent.com/72580574/223567377-93c1d2f5-f0d4-4596-9c20-47efc484e1ec.png)

### USABILIDAD ASPECTOS DOMINANTES

“Para producir tecnología que se adapte a los seres humanos, es necesario estudiar a éstos.” Norman

- Identificación de: REGLAS DORADAS

- Definición de: MECANISMOS DE INTERACCIÓN (GUI)

### REGLAS DORADAS*

- Dejar el control al usuario

- Reducir la carga de memoria

- Interfaz consistente.

*Acuñadas por Theo Mandel

### DEJAR EL CONTROL AL USUARIO

- **Principio 1**: Definir modos de interacción de manera que no se obligue al usuario a realizar acciones innecesarias o no deseadas.

![image](https://user-images.githubusercontent.com/72580574/223567627-305ec7fd-49ff-4d3f-aadf-2c2f0f1f0455.png)


- **Principio 2**: Dar una interacción flexible.

![image](https://user-images.githubusercontent.com/72580574/223567710-8aa37687-c2b6-4c28-b693-d5eb8e7225e9.png)


- **Principio 3**: Permitir que la interacción del usuario sea interrumpible y también reversible.

![image](https://user-images.githubusercontent.com/72580574/223567779-518c1560-3cb6-41bf-bff2-97d03276cf17.png)



- **Principio 5**: Ocultar los tecnicismos internos al usuario ocasional.



- **Principio 6**: Diseñar la interacción directa con objetos que aparezcan en la pantalla.

![image](https://user-images.githubusercontent.com/72580574/223567927-37b767ca-fcb1-4424-824d-9ed5141ed0a2.png)


### REDUCIR LA NECESIDAD DE QUE EL USUARIO MEMORICE

- **Principio 1**: Reducir la demanda de memoria de corto plazo. 

![image](https://user-images.githubusercontent.com/72580574/223568023-10177bc2-8d02-4640-8d59-93fdf0c27480.png)


- **Principio 2**: Hacer que lo preestablecido sea significativo.

![image](https://user-images.githubusercontent.com/72580574/223568081-4db1b359-48d6-4034-9790-79e68778ce9b.png)


- **Principio 3**: Definir atajos que sean intuitivos.

![image](https://user-images.githubusercontent.com/72580574/223568159-0e285700-728f-4f89-af7a-93680ff262aa.png)


- **Principio 4**: La distribución visual de la interfaz debe basarse en una metáfora del mundo real.

![image](https://user-images.githubusercontent.com/72580574/223568231-7a1a251a-4230-46f7-81f0-e322f92409a5.png)

- **Principio 5**: Revelar información de manera progresiva.

![image](https://user-images.githubusercontent.com/72580574/223568330-ce83e992-3d77-4ac2-870d-ef993c2162a7.png)


### HACER CONSISTENTE LA INTERFAZ

- **Principio 1**: Permita que el usuario coloque la tarea en curso en un contexto significativo.

![image](https://user-images.githubusercontent.com/72580574/223568416-d548575c-130f-4dae-87f9-06677a6c4292.png)


- **Principio 2**: Mantener la consistencia en toda la familia de aplicaciones.

![image](https://user-images.githubusercontent.com/72580574/223568474-369d8537-fc1c-4c27-a621-9d5f0579256e.png)


- **Principio 3**: Si los modelos interactivos anteriores han creado expectativas en el suario, no haga cambios a menos de que haya una razón ineludible para ello.

![image](https://user-images.githubusercontent.com/72580574/223568556-96b57a35-4f31-4b73-9c92-4b60c8dd9da9.png)


---

##  ANÁLISIS Y DISEÑO DE LA INTERFAZ DE USUARIO

- Análisis y modelos del diseño de la interfaz

• Creación de modelos

- Proceso

• Iterativo

---

##  ANÁLISIS Y MODELOS DEL DISEÑO DE LA INTERFAZ

![image](https://user-images.githubusercontent.com/72580574/223568695-37cfdbe1-32f3-4d12-8ab6-8837f6fb347d.png)

---

## PROCESO DE DISEÑO DE LA INTERFAZ DE USUARIO

![image](https://user-images.githubusercontent.com/72580574/223568754-efdfc1d8-69e4-46a2-b742-8fe1712e97e1.png)


![image](https://user-images.githubusercontent.com/72580574/223568777-0d7be385-aef4-4757-9618-3029ff87911e.png)


![image](https://user-images.githubusercontent.com/72580574/223568802-4b7909ff-1637-4b6d-b58d-bba98fa1b8a6.png)


![image](https://user-images.githubusercontent.com/72580574/223568834-a2d3ec24-3f5b-4e3b-b299-d861711fd36c.png)


![image](https://user-images.githubusercontent.com/72580574/223568870-820af9f4-ce4b-4351-8e09-12ea887c9440.png)


![image](https://user-images.githubusercontent.com/72580574/223568920-a3312466-613a-4dc7-afd5-7797529eb948.png)


![image](https://user-images.githubusercontent.com/72580574/223568996-098d8471-c3e9-4b25-936f-7e16aa78069a.png)


![image](https://user-images.githubusercontent.com/72580574/223569022-af86835b-042b-4e5e-a604-6e4dee257d58.png)


![image](https://user-images.githubusercontent.com/72580574/223569051-4178ab09-5cb8-4001-aa80-2db902cf8a9f.png)


![image](https://user-images.githubusercontent.com/72580574/223569079-98fb6b91-8b4d-4303-a4eb-2952d3e9fd3b.png)


---

##  DISEÑO DE UNA INTERFAZ PARA WEBAPPS

- ¿Dónde estoy?

• Webapp accedida

• Jerarquía del contenido

- ¿Qué puedo hacer ahora?

• Funciones disponibles,

• Vínculos vivos,

• Contenido relevante,

• etcétera

- ¿Dónde he estado,hacia dónde voy?

• Mapa con:

• Lugares visitados

• Trayectorias a realizar

---

##  PRINCIPIOS Y LINEAMIENTOS DEL DISEÑO DE LA INTERFAZ

![image](https://user-images.githubusercontent.com/72580574/223569256-65f6e74c-5691-4c17-814a-236aeba7f8ef.png)


---

## PREVISION

Una webapp debe diseñarse de modo que prevea el siguiente movimiento del usuario.

---

## COMUNICACIÓN
 
La interfaz debe comunicar el estado de cualquier actividad iniciada por el usuario.

![image](https://user-images.githubusercontent.com/72580574/223569367-b7185ec8-ca61-4905-9aef-44e71fd896db.png)


---

## CONSISTENCIA

El uso de controles de navegación, menús, iconos y estética (color, forma y distribución) debe ser consistente en la webapp.

![image](https://user-images.githubusercontent.com/72580574/223569477-70e2e5d0-7a4b-4802-bcf7-0e5430696017.png)


---

## AUTONOMÍA CONTROLADA

La interfaz debe facilitar el movimiento del usuario a través de la webapp, pero lo debe hacer de manera que obligue a respetar las
convenciones que se hayan establecido para la aplicación.

---

## EFICIENCIA

El diseño de la webapp y su interfaz deben optimizar la eficiencia del trabajo del usuario, no la del desarrollador que la diseña y construye ni del ambiente cliente-servidor que la ejecuta.

![image](https://user-images.githubusercontent.com/72580574/223569680-1babc103-272b-4a77-823a-cfc4967b8981.png)


---

## FLEXIBILIDAD

La interfaz debe tener flexibilidad suficiente para permitir que algunos usuarios realicen tareas directamente, y que otros exploren la webapp en forma aleatoria.

![image](https://user-images.githubusercontent.com/72580574/223569665-1d4e5f43-3587-4199-8eeb-8ceeb184f6a6.png)

---

## CENTRARSE

La interfaz de la webapp (y el contenido que presente) debe mantenerse centrada en las tareas en curso del usuario.

---

## LEY DE FITT

“El tiempo para llegar a un objetivo está en función de la distancia que hay hasta él y del tamaño que tenga”. Tognozzi

![image](https://user-images.githubusercontent.com/72580574/223569785-1e5436e4-ede6-42e9-bb48-f283895c0577.png)


---

###  OBJETOS DE LA INTERFAZ HUMANA

Se ha desarrollado una vasta biblioteca de objetos reutilizables de interfaces humanas para webapps. Úselas.

![image](https://user-images.githubusercontent.com/72580574/223569894-fd0c68f5-1e37-43f2-ba0e-2b0035a84a3f.png)

---

### REDUCCIÓN DE LA LATENCIA

En vez de hacer que el usuario espere a que termine alguna operación interna (como descargar una imagen gráfica compleja), la webapp debe usar tareas múltiples, de manera que permita que el usuario continúe con su trabajo mientras finaliza la operación.


---

## APRENDIZAJE

Una interfaz de webapp debe diseñarse para minimizar el tiempo de aprendizaje y, una vez aprendida, minimizar el que se dedique a reaprender cuando se regrese a la webapp.

---

## METÁFORAS

Una interfaz que use una metáfora de interacción es más fácil de aprender y de usar, en la medida en la que la metáfora sea apropiada para la aplicación y el usuario.

![image](https://user-images.githubusercontent.com/72580574/223570090-eefdbbb3-93c9-4437-91bd-f82c22779349.png)

---

## MANTENER LA INTEGRIDAD DE LOS PRODUCTOS DEL TRABAJO

Un producto del trabajo (por ejemplo, un formato llenado por un usuario o una lista especificada por él) debe guardarse en forma automática, de modo que no se pierda si ocurriera un error.

---

## LEGIBILIDAD

Toda la información presentada en la interfaz debe ser legible para jóvenes y viejos.

---

## DAR SEGUIMIENTO AL ESTADO

Cuando resulte apropiado, debe darse seguimiento al estado de la interacción del usuario y guardarlo, de modo que éste pueda salir y volver más tarde para
recuperarlo de donde lo haya dejado.

---

## NAVEGACIÓN VISIBLE

Una interfaz de webapp bien diseñada da “la ilusión de que los usuarios están en el mismo lugar, con el trabajo llevado a ellos”. Tognozzi

---

## FLUJO DE TRABAJOS PARA EL DISEÑO DE LA INTERFAZ DE WEBAPP

Revisar información del modelo de requerimientos y refinarla

Esquematizar la distribución de la interfaz

Mapear objetivos de usuario en acciones específicas

Definir tareas de usuario asociadas con cada acción

Guionar imágenes en pantalla para cada acción Refinar distribución y guiones Identificar objetos de interfaz

---

## MAPEO DE OBJETIVOS DE USUARIO EN ACCIONES

![image](https://user-images.githubusercontent.com/72580574/223570389-c5df042f-5351-4eac-88e6-b52144ce4801.png)


---

## EVALUACION DEL DISEÑO

![image](https://user-images.githubusercontent.com/72580574/223570445-d3781016-fd52-47a0-a838-271768d1500e.png)

---

## CRITERIOS DE EVALUACIÓN DEL DISEÑO

- Longitud y complejidad del modelo de requerimientos.

• Cantidad de aprendizaje requerido

- Tareas del usuario especificadas y promedio de acciones por tarea.

• Tiempo de interacción de la eficiencia general del sistema

- Acciones, tareas y estados del sistema indicados por el modelo.

• Carga de memoria

- Estilo de la interfaz, herramientas de ayuda y protocolo del manejo de errores.

• Complejidad de la interfaz y grado de aceptación

---

## PATRONES DE DISEÑO DE LA IU

Whole UI: Navegación de Alto Nivel

Distribución de pág.: Apilar Tarjetas

Formato y entrada: Llenar espacios

Tablas: Ordenar Tabla

Manipulación directa de los datos: Migajas de Pan

Navegación: Editar

Búsqueda: Búsqueda Simple

Elementos de pág.: Mago

Comercio electrónico: Carrito de Compras

Varios: Indicador de Avance

---

## WHOLE UI: NAVEGACIÓN DE ALTO NIVEL

Cada nombre de función o contenido representa un vínculo hacia la función o contenido apropiados.

![image](https://user-images.githubusercontent.com/72580574/223570632-ab05efa2-245a-4b13-841a-ba4f0f207995.png)


---

## DISTRIBUCIÓN DE PÁG.: APILAR TARJETAS

Un clic en una pestaña hace que aparezca la tarjeta apropiada.


![image](https://user-images.githubusercontent.com/72580574/223570718-71dfde27-d07e-46ee-b159-6b8cebc04600.png)


---

## FORMATO Y ENTRADA: LLENAR ESPACIOS

Indicador de texto o gráfico que inicia la validación y el procesamiento.

![image](https://user-images.githubusercontent.com/72580574/223570812-ced415bf-c937-4d3a-bda0-6af06873fd93.png)


---

## TABLAS: ORDENAR TABLA

Cada encabezado de columna inicia el ordenamiento de todos los registros.

![image](https://user-images.githubusercontent.com/72580574/223570900-348598f5-7b42-444d-ad1b-bfe8fd1d0b47.png)

---

## MANIPULACIÓN DIRECTA DE LOS DATOS: MIGAJAS DE PAN

Cualquiera de las entradas en la pantalla de las migajas de pan puede usarse como un apuntador hacia el vínculo de regreso hacia un nivel más alto de la jerarquía.

![image](https://user-images.githubusercontent.com/72580574/223570992-016e402d-7690-4c33-91b2-3ea62a91c300.png)

---

##  NAVEGACIÓN: EDITAR

Ningún elemento de navegación.

Ayuda al usuario a navegar a través de menús jerárquicos, páginas web y pantallas interactivas.

---

## BÚSQUEDA: BÚSQUEDA SIMPLE

Cada entrada de la lista representa un vínculo de navegación hacia los datos a los que se hace referencia con la entrada.

![image](https://user-images.githubusercontent.com/72580574/223571130-db55ce7b-9e2e-478f-a3c9-399da223246c.png)

---

## ELEMENTOS DE PÁG.: MAGO

Navegación hacia delante y atrás, permite que el usuario vuelva a cada etapa en el proceso mago.

![image](https://user-images.githubusercontent.com/72580574/223571236-5b9c1ada-2861-47fd-b6a6-8f49822aa21d.png)


---

##  COMERCIO ELECTRÓNICO: CARRITO DE COMPRAS

Contiene la capacidad de continuar la compra o salir.

![image](https://user-images.githubusercontent.com/72580574/223571314-f847a8b0-9659-4fb6-a5a1-e39c3aef6e68.png)


---

##  VARIOS: INDICADOR DE AVANCE

Es frecuente que contenga un botón que permita al usuario hacer una pausa o cancelar el procesamiento.

![image](https://user-images.githubusercontent.com/72580574/223571393-20d1e412-0ee7-4b49-8bd0-e2c200b5f642.png)


---

## PATRONES DE DISEÑO WEBAPP

- Centrarse en el diseño

Arquitectura de la información

Navegación

Presentación

Funcionales

- Granularidad del diseño

Arquitectura

Diseño

Componentes

---

### FUENTES

• Pressman, Roger. Ingeniería de Software, enfoque práctico. Capítulos 11 y 12. McGraw-Hill, 7ma Edición.

• Para ver:

• http://www.beoninternet.net/diseno-web-usabilidad-de-la-navegacion-en-tablet-y-movil/

• http://es.slideshare.net/embluemail/usabilidad-mvil-e-interfaces-lionel-fiszman

---
---

## :star: HCI (Human Computer Interaction), usabilidad y su relación con el diseño de interacción. :star:

![image](https://user-images.githubusercontent.com/72580574/223571764-229d9612-939e-4290-a17a-08711d8d0c53.png)

La Interacción Persona-Ordenador del inglés Human Computer Interaction (HCI) «es una disciplina relacionada con el diseño, evaluación, desarrollo y estudio de los fenómenos que rodean los sistemas informáticos para uso humano», ACM SIGCHI.

El objetivo del HCI es crear software usable, seguro y funcional.

La usabilidad tiene como objetivo crear sistemas:

* Eficientes

* Efectivos

* Seguros

* Útiles

* Fáciles de aprender

* Fáciles de recordar

Experiencia de usuario del inglés User Experience (UX) se preocupa de aspectos más amplios y subjetivos: satisfacción, diversión, entretenimiento, motivación, estética, creatividad o emociones.

###  ¿Cómo asegurar la usabilidad?

La usabilidad es un trabajo a largo plazo que forma parte del control total de la calidad, que puede cambiar la cultura de la empresa que la acoge. La usabilidad no es imagen corporativa, no es un informe que se lee y se guarda o algo que incumba sólo a un departamento. La usabilidad no es un extra en el desarrollo de productos y servicios.

La usabilidad es estratégica y debe trabajar desde el corazón de las operaciones de negocio. La usabilidad está en el corazón de la excelencia.

Aseguras la usabilidad de un producto si:

* Incorporas a los usuarios en todo el proceso de desarrollo.

* Tu proceso de desarrollo es iterativo.

* Estableces medidas cuantitativas al inicio del proyecto.

* Haces test de usabilidad.

* Trabajas en equipos multidisciplinares.

###  Palabras clave:

- Actor: Es un papel de cualquier entidad externa al software que interactúa con él. Pueden ser usuarios, máquinas u otros sistemas de software.

- Casos de uso: Representan funcionalidades del software iniciadas por un actor o por otro caso de uso.

- Evaluación: Evaluar un sistema implica recoger datos de requisitos de usuario en una actividad particular para un entorno de trabajo.

- Escenario: Historia ficticia y personalizada con personajes, eventos, productos y entornos. Ayudan a explorar ideas y las ramificaciones de las decisiones de diseño.

- Tarea: Descripción de lo que la gente hace. Estas descripciones predicen y evalúan la dificultad de un sistema.

---

### Diseño accesible

Principios y pautas del diseño accesible según las WCAG 2.0

La accesibilidad o el diseño accesible en internet, es simple y llanamente diseñar tu contenido para que sea interoperable (cualquier usuario pueda acceder
independientemente del navegador o sistema operativo) e independiente del dispositivo (cualquier usuario pueda acceder tanto si usa un ratón, un teclado, etc.).

Es aún muy frecuente que la accesibilidad esté mal asociada a algo:

* Difícil y complicado.

* Que afecta a muy pocos.

* Con coste elevado.

* Sólo para ciegos.

* Poco estético o diseños sólo de texto.

Las pautas de verificación WCAG 2.0 del W3C son el referente mundial y se rigen por  estos cuatro principios de diseño accesible aplicables a cualquier tecnología:

#### 1: Perceptible - La información y los componentes de interfaz deben presentarse a los usuarios de manera que puedan ser percibidos.

Las pautas para cumplir este principio:

* 1.1 - Todo el contenido no textual debe disponer de alternativas en formato texto.

* 1.2 - Proporciona alternativas al contenido tempo-dependiente: audio, vídeo o multimedia.

* 1.3 - Crea contenido que pueda presentarse de diferentes formas sin perder información o estructura.

* 1.4 - La presentación debe resultar lo más fácil de percibir para las personas con discapacidad.

#### 2: Operable - Los componentes de la interfaz de usuario y navegación deben ser operables.

Las pautas para cumplir este principio:

* 2.1 - Todas las funcionalidades deben ser accesibles mediante un teclado.

* 2.2 - Proporciona a los usuarios tiempo suficiente para leer y usar el contenido.

* 2.3 - Evita contenidos que puedan provocar transtornos en los usuarios.

* 2.4 - Facilita a los usuarios ayuda a la navegación, localización del contenido y posición.

####  3: Comprensible - La información y las operaciones de la interfaz de usuario deben ser comprensibles.

Las pautas para cumplir este principio:

* 3.1 - El contenido textual debe ser legible y comprensible.

* 3.2 - Presenta el contenido y su comportamiento de forma predecible.

* 3.3 - Ayuda a los usuarios a prevenir y corregir los errores.

#### 4: Robusto - El contenido y el código deben ser compatibles para que sean interpretados por una amplia variedad de agentes de usuario.

Es el principio sobre el que se asienta todo lo demás y contiene una única pauta: 

4.1 - Asegura la compatibilidad con los agentes de usuario actuales y futuros.

Un agente de usuario en una aplicación para acceder a las páginas web.

---

## Diseño centrado en el usuario

Implicar al usuario en el proceso de desarrollo de software

Diseño Centrado en el Usuario (DCU) no es lo mismo que diseñar pensando en el usuario. DCU es diseñar y evaluar con usuarios para los que se está creando el producto.

La evaluación debe ser hecha en todos los estados del proceso de diseño, y tan temprano como sea posible.

El estándar ISO 13407 "Human centred design for interactive systems", provee de un marco teórico para el desarrollo de actividades centradas en el usuario. Desarrolla prototipos y éstos son probados, cambiados o sustituidos con el feedback de los usuarios reales.

DCU produce software:

* Más fácil de usar y entender.

* Mejora la calidad de vida de los usuarios e incrementa la satisfacción.

* Incrementa la productividad y eficacia operacional de los usuarios y por lo tanto los de la organización.

* El proceso permite identificar problemas en un estado en el cual aún es barato y posible hacer cambios.

### Principios

- Balance apropiado de funciones: Son tus usuarios los que deciden si tu producto es fácil de usar, y si quieren utilizarlo o no.

- Usuarios activos: La incorporación de usuarios en el proceso productivo, aumenta el uso del producto.

- Desarrollo iterativo: Mejora mediante múltiples repeticiones con retroalimentación cíclica.

- Grupos de diseño multidisciplinar: Hay que involucrar varias partes y diferentes perspectivas.

## Diseño con estándares

El fin de la caducidad en internet

La creación de varias versiones de marcado y código no estándar, cada una en función del comportamiento no estándar de un determinado navegador, es la causa de la perpetua obsolescencia que inunda muchos sitios en internet.

Además de las secuencias de comandos propietarias, los programadores diseñan marcado de presentación que duplica el ancho de banda necesario para ver u ofrecer una página al tiempo que reduce su accesibilidad para motores de búsqueda, navegadores y dispositivos no tradicionales.

Las tecnologías creadas por el World Wide Web Consortium (W3C) permiten que se puedan diseñar y crear sitios con un funcionamiento duradero, aunque cambien los estándares y navegadores.

Los estándares permiten:

* Tener mayor control sobre el diseño visual.

* Desarrollar comportamientos sofisticados que funcionen en diferentes navegadores.

* Cumplir las normas y directrices de accesibilidad sin sacrificar el aspecto visual, el rendimiento o la sofisticación.

* Admitir varios navegadores sin preocuparse de crear diferentes versiones.

* Admitir dispositivos no tradicionales, desde inalámbricos a teléfonos móviles compatibles.

* Conseguir sofisticadas versiones impresas de cualquier página sin crear versiones "aptas para impresión".

* Separar estilo de estructura y comportamiento.

* Realizar la transición entre el lenguaje del pasado HTML, al marcado basado en XML

* Garantizar que los sitios diseñados de esta forma funcionarán en los futuros navegadores y dispositivos.

### ¿Qué es el W3C?

Creado en 1994, el W3C trabaja con especificaciones y directrices con la intención de promover la evolución de la web. Su director Tim Berners-Lee inventó la web en 1989.

Entre las especificaciones desarrolladas por el W3C destacan el HTML, CSS, XHTML y el modelo de objetos de documento DOM entre otras muchas.


### ¿Qué es ECMA?

Entre otros organismos de estándares podemos destacar el European Computer Manufacturers Association, fundada en 1961.

Son responsables entre otros del lenguaje ECMAScript, que familiarmente se denomina JavaScript estándar.

###  Estándares HCI

Los estándares HCI están relacionados con la usabilidad y se pueden categorizar en:

1. El uso del producto

2. La interfaz de usuario y el diseño de iteración.

3. El proceso utilizado para desarrollar un producto.

4. La capacidad de una organización de aplicar diseño centrado en el usuario


###  ¿Qué es la compatibilidad directa?

Es la que permite que cualquier documento que se publique en internet funcione en diferentes navegadores, plataformas y dispositivos, presentes y futuros.

Los tres componentes - estructura, presentación y comportamiento - son la trinidad de los estándares.


---

## Diseño de la información

### La arquitectura de los contenidos
 
En un edificio, cada elemento, mueble o localización sirve a unos propósitos, los sitios web y el software en general, tienen arquitecturas intangibles que se construyen con  contenidos. Igual que los edificios, nos hacen reaccionar y sólo las percibimos cuando algo falla.

La invisibilidad de esta arquitectura que llamamos de información es el mayor problema para justificar a veces su existencia e importancia.

### Arquitectura de la información

Es la disciplina encargada de planificar, analizar, organizar la disposición y presentación de los contenidos en los sistemas de información interactivos.

Las labores de un arquitecto de información incluyen:

* Estructurar, etiquetar y planificar la navegación.

* Estructurar el diseño de la información para facilitar las tareas.

* Gestionar la información.

* Diseñar buscadores.

Diseño gráfico, diseño de iteración, redacción de contenidos o experiencia de usuario no es arquitectura de información. Aunque todas estas disciplinas se solapan e influyen en un proyecto de diseño de software.

### ¿Por qué es importante?

Para calcular su importancia hay que considerar los costes y el valor del contenido, la formación a trabajadores-clientes, o la construcción y mantenimiento de un sistema.

No es distinto a otras áreas de negocio, como el marketing, la ingeniería o los recursos humanos.

---

##  Diseño de interfaz

### Interfaz no es sólo lo que se ve en la pantalla

En tecnología se denomina interfaz a muchas cosas, pero es la interfaz gráfica de usuario el concepto aquí tratado. De forma abreviada en inglés, también se le denomina Graphic User Interface (GUI), o User interface (UI).

La primera interfaz gráfica de usuario fue diseñada por Xerox en los años 70. Pero no fue hasta los 80 cuando Apple las hizo mundialmente populares en sus ordenadores, posteriormente fueron copiadas por Microsoft con sus "windows".

En un software bien diseñado, los elementos que componen la interfaz, son funcionalmente independientes y están conectados de forma indirecta al programa.

Algunos componentes básicos

1. Puntero: en un símbolo de pantalla que te permite mover o seleccionar objetos y comandos.

2. Periféricos de puntero: como el ratón del ordenador.

3. Iconos: Pequeñas imágenes que representan comandos, documentos o ventanas.

4. Escritorio: área de la pantalla que representa una mesa de trabajo.

5. Ventanas: conocidas en inglés como Windows. Sirven para dividir la pantalla en diferentes secciones.

6. Menús: La mayoría de las interfaz de usuario te permiten ejecutar comandos seleccionando opciones en ellos.

---

## Diseño orientado a objetos

Comunicar gráficamente diseño de software

El software siempre cumple unos requisitos. Para comunicar los requisitos entre las partes responsables de un proyecto, se pueden utilizar lenguajes naturales.

Los lenguajes de programación como SQL, Java o XML, también se utilizan para comunicar los detalles de un sistema.

Los lenguajes de modelado son el puente entre los requisitos y el desarrollo del sistema. 

El Unified Modeling Language (UML) es un lenguaje visual de modelado y comunicación, que se usa para especificar, visualizar, construir y documentar software.

### Ejemplo de gráfico UML

![image](https://user-images.githubusercontent.com/72580574/223573288-69e59a51-6465-4d42-b9a3-37b1dda0b4a2.png)

### Objetivos del UML

* Fácil de usar.

* Expresivo.

* Simple.

* Preciso.

* Extensible.

* Independiente de la implementación.

* Independiente del proceso.

Para que los desarrolladores contaran con modelos precisos se creó el sub-lenguaje Object Constrain Language (OCL), para añadir condiciones a los elementos del modelo que debe cumplir para considerarlo correcto.

UML es independiente del proceso de desarrollo utilizado, pero sus autores promueven el uso de un proceso dirigido por los casos de uso, centrado en la arquitectura, iterativo e incremental.

---

### Diseño de procesos: operaciones de negocio

El diseño de un producto y su proceso de creación no pueden separarse, especialmente en los servicios, donde el proceso es el servicio.

Un producto y su proceso de desarrollo son conceptos entrelazados, donde el diseño de los procesos es crítico para asegurar la satisfacción de los clientes.

Cuando uno dice que es diseñador, la mayoría asume que te dedicas a mejorar el aspecto de un producto. Pero DISEÑAR es una actividad mucho más amplia. No hay una definición universal, pero también es diseño «el proceso por el que los requisitos funcionales de los usuarios se cumplen, configurando los recursos y actividades que componen un producto o servicio».

Diseñar es tomar decisiones. Diseñar es planificar recursos para convertirlos en productos o servicios. Diseñar es especificar objetivos de:

* Producto: ¿qué atributos percibe el consumidor de utilidad?

* Proceso: ¿cómo podemos reproducir de forma sistemática características esenciales?

### Fases de un proceso de diseño

![image](https://user-images.githubusercontent.com/72580574/223573453-70545011-f6fb-456e-a73a-49e1716d293d.png)

Un producto y su proceso interactúan de forma estrecha cuando:

* Parte del servicio del producto es la experiencia del cliente.

* El diseño y el proceso productivo afecta a las características del producto.

* El diseño del producto determina los procesos necesarios para producirlo.

Cuanto más tarde aparezca el diseño en las operaciones de negocio, más difícil y costoso es mejorar un producto o servicio.

![image](https://user-images.githubusercontent.com/72580574/223573500-e7444453-d0c0-4480-bbac-b2420c5f874f.png)

---

## Diseño en paralelo

#### Mejora los resultados del proceso de diseño

Se puede confiar que un diseño sea bueno desde el principio y que al emplear un desarrollo de iteración mejore, o puedes asegurar los resultados si desde el principio aplicas un diseño en paralelo.

En un proceso de diseño en paralelo se crean diferentes bocetos realizados o no por un mismo diseñador. Para mantener el presupuesto ajustado, todas las versiones paralelas deben crearse de forma rápida y económica. No es necesario completar todas las funciones o detalles del producto, sólo las más importantes para el proyecto. Tampoco es necesario detallar excesivamente el diseño, basta con unos sencillos prototipos.

#### Proceso de diseño en paralelo

Una vez realizadas las opciones de diseño (mínimo de 3 y máximo de 5), hay que
comprobarlas con test de usabilidad, en donde cada usuario participante DEBE probar
todas las opciones creadas.

Con cada participante se debe alterar el orden de los diseños, para evitar que se
transfieran experiencias previas durante el test. Al final es fundamental que los
participantes del test hagan una comparativa de las opciones testadas.


Finalmente hay que crear un único diseño que combine lo mejor de cada opción. El test
no debe ser una competición para identificar un único diseño ganador, siempre todas las
opciones tienen algo de bueno.

En 1996 Jakob Nielsen y Jan Maurits Faber publicaron Improving System Usability
Through Parallel Design donde evaluaban tres procesos de diseño:

* Si de 4 alternativas simplemente se escogía la mejor y luego se aplicaba un diseño
de iteración, la usabilidad mejoraba un 56% más que la media de los cuatro diseños
originales.

* Si se combinan los diseños en uno nuevo se mejoraba su usabilidad un +70% más
que la media de los cuatro diseños originales.

* Si se aplica un proceso de iteración al diseño combinado en la primera repetición la
mejora de la usabilidad era de un 152% más que la media de los cuatro diseños
originales.

En 2010 la universidad de Stanford publicó Parallel prototyping leads to better design
results, more divergence, and increased self-efficacy. En este estudio el objetivo era
aumentar el CTR (click-through rate) de las campañas publicitarias en internet.
Los anuncios creados mediante diseño en paralelo conseguían durante los primeros 5
días de campaña un 67% de mejores resultados. Los anuncios diseñados en paralelo
conseguían un CTR de 0.055% en comparación al CTR de 0.033% de los anuncios no
creados así.

En una campaña de 15 días los diseños en paralelo obtenían un 12% de mejores
resultados: un CTR de 0.045% comparados con un CTR de 0.040%
Las conclusiones son siempre las mismas, tanto si empleamos el proceso para
desarrollar un software o diseñar un anuncio publicitario: el diseño en paralelo genera
mejores resultados.

---

### Diseño visual, diseño gráfico

¿Una simple cuestión de gusto?

«La estética no me interesa, no sé lo que es. Lo bonito es una apelación burguesa que
está vacía de sentido. Puedo comprender la coherencia de signos, la armonía de
parámetros. La estética es un juicio cultural sin valor porque no es intemporal. No es
más que la herramienta que sirve a la moda, al consumo, al "me gusta, no me gusta". La
belleza de un objeto es su competencia para expresar un mensaje y una función. No
trabajo en lo bello, intento trabajar en lo bueno.» Philippe Starck
Diseño gráfico es un término anterior a diseño visual y define a quienes crean
composiciones con imágenes y tipografía para comunicar un mensaje. Su origen se
remonta al descubrimiento de la escritura, pero es sólo a finales del XIX cuando se
convierte en una disciplina independiente.

Algunas aplicaciones son: publicaciones, libros, productos de márketing, multimedia
(títulos de películas, anuncios, tv), identidad corporativa (logotipos, tarjetas de visita,
papelería), diseño de embases o signos de información.

Algunos diseñadores no son «artistas» ya que no crean los gráficos, ilustraciones o
fotografías que utilizan. Otros diseñadores gráficos no trabajan con texto, es el caso de
ilustradores o artistas digitales. Y otros hacen de todo: impresión, web, maquetación,
ilustración...

Me gusta, no me gusta

Las decisiones en diseño visual no se pueden sustentar en gustos.
Un buen diseñador gráfico debe responder de su trabajo contestando a preguntas
concretas ¿cómo refuerza el diseño la estructura? ¿Cómo clarifica las opciones de los
usuarios? ¿Por qué ese color refuerza el mensaje?
Los artistas pueden ignorar la parte de negocio de su trabajo, los diseñadores no.

Material extraído de:
http://www.albertolacalle.com/index.htm

---
---
