
  <h1 align="center"><strong>Bingo Twingo App</strong></h1>

## INDEX

  * Bingo Twingo APP
  * Tecnologías Implicadas :
    * Javascript ES6
    * NodeJs
    * Express
    * Websockets:
         * Socket.io 
    * Webpack
    * GitHub Actions
    * Jest
    * ESLint
  * Proceso de Desarrollo



# Bingo Twingo APP

 * Bingo twingo es un proyecto de desarrollo de aplicaciones web en modo offline y online _**usando websockets con socket.io**_ que consiste en un juego de bingo online tradicional para jugar sin conexión a internet o online con otros jugadores remotos.

 * Es rápido y divertido y no requiere ningún tipo de inicio de sesión, registrarse, joder, el infierno de las cookies ... y todas las cosas molestas que suelen tener las aplicaciones web modernas.

 * Ha sido desarrollado como una aplicación de una sola página con javascript RAW ES6. La única biblioteca de terceros utilizada en la interfaz ha sido socket_io_client.

    _**En backend _lado del servidor_ usamos nodejs + express + socket.io**_


## Javascript ES6


* **JavaScript** es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web.
* Cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado.
* _Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales **HTML y CSS** hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje._

### Entonces, ¿qué puede hacer realmente?

* Almacenar valores útiles dentro de variables.
* Operaciones sobre fragmentos de texto _conocidas como "cadenas" (strings) en programación_.
* Y ejecuta código en respuesta a ciertos eventos que ocurren en una página web. Usamos un evento click en nuestro ejemplo anterior para detectar cuándo se hace clic en el botón y luego ejecutar el código que actualiza la etiqueta de texto.

    **¡Y mucho más!**

### Sin embargo, lo que aún es más emocionante es la funcionalidad construida sobre el lenguaje JavaScript de lado del cliente. Las denominadas interfaces de programación de aplicaciones (API) te proporcionan superpoderes adicionales para utilizar en tu código JavaScript.

### _Las API son conjuntos de bloques de construcción de código listos para usar que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar._

## Qué es ECMAScript

*  ECMAScript es el estándar que define cómo debe de ser el lenguaje Javascript. 
* Es poco aconsejable usar hoy ES6, debido a la falta de compatibilidad.Lo correcto sería esperar a que todos los navegadores se pongan al día para empezar a usar ES6 con todas las garantías.
* Afortunadamente,los transpiladores son programas capaces de traducir el código de un lenguaje para otro, o de una versión para otra. Por ejemplo, el código escrito en ES6, traducirlo a ES5. Dicho de otra manera, el código con posibles problemas de compatibilidad, hacerlo compatible con cualquier plataforma.

## NodeJs

* **NodeJs** es un entorno de tiempo de ejecución de JavaScript _de ahí su terminación en .js haciendo alusión al lenguaje JavaScript_.
* Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. También aporta muchos beneficios y soluciona muchísimos problemas, por lo que sería más que interesante realizar nuestro curso de Node.js para obtener las bases, conceptos y habilidades necesarias que nos motiven a profundizar en sus opciones e iniciar la programación. 

* Fue creado por los desarrolladores originales de JavaScript.
* Gracias a Node.js se puede ir un paso más allá en la programación con JavaScript no solo creando sitios web interactivos, sino teniendo la capacidad de hacer cosas que otros lenguajes de secuencia de comandos como Python pueden crear. 

* **La idea principal de Node.js es usar el modelo de entrada y salida sin bloqueo y controlado por eventos para seguir siendo liviano y eficiente frente a las aplicaciones en tiempo real de uso de datos que se ejecutan en los dispositivos.**

## Express 

* **Express** es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para:

    * Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
    *  Integración con motores de renderización de _'vistas'_ para generar respuestas mediante la introducción de datos en plantillas.
    *  Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar   la respuesta.
    *   Añadir procesamiento de peticiones _'middleware'_ adicional en cualquier punto dentro de la tubería de manejo de la petición.


## WebSockets

* **WebSocket** es un protocolo de red basado en TCP que establece cómo deben intercambiarse datos entre redes. Puesto que es un protocolo fiable y eficiente, es utilizado por prácticamente todos los clientes. El protocolo TCP establece conexiones entre dos puntos finales de comunicación, llamados sockets. De esta manera, el intercambio de datos puede producirse en las dos direcciones.
* Se utiliza **WebSocket** siempre que se trate de establecer conexiones de forma rápida. Es el caso, por ejemplo, de los chats de asistencia técnica, de los tickers de noticias o de actualizaciones de bolsa en directo, de los servicios de mensajería instantánea y de los juegos en tiempo real.

## Socket.io

* **Socket.io** es una librería en JavaScript para Node.js que permite una comunicación bidireccional en tiempo real entre cliente y servidor. Para ello se basa principalmente en Websocket pero también puede usar otras alternativas como sockets de Adobe Flash, JSONP polling o long polling en AJAX, seleccionando la mejor alternativa para el cliente justo en tiempo de ejecución.

* _Es importante resaltar que las aplicaciones hechas en Socket.io tiene una desventaja y es que no soportan interacciones con otros clientes que usen Websocket estándar. Esto se debe a que Socket.io no es una implementación del protocolo Websocket sino una librería de comunicación web en tiempo real que utiliza varios protocolos._

## WebPack

* **WebPack** es básicamente un empaquetador de módulos o module bundler, pero gracias a un de sus componentes, los plugins, puede hacer las veces de tasks runner, es decir podemos hacer tareas de todo tipo, como mover directorios, hacer clean up, etc.
* Además , **Webpack** se define como un empaquetador de módulos.

* _En la actualidad es utilizado por miles de proyectos de desarrollo web Front-End: desde frameworks como React o Angular hasta en el desarrollo de aplicaciones tan conocidas como Twitter, Instagram, PayPal o la versión web de Whatsapp._

* También podemos definir **WebPack**,como una herramienta de compilación  que coloca en un grafo de dependencias a todos los elementos que forman parte de tu proyecto de desarrollo: código JavaScript, HTML, CSS, plantillas, imágenes, fuentes... Esta idea central es la que lo convierte en una herramienta tan poderosa.

##  GitHub Actions

* **GitHub Actions** permite crear flujos de trabajo **_workflows_** que se pueden utilizar para compilar, probar y desplegar código, dando la posibilidad de crear flujos de integración y despliegue continuo dentro del propio repositorio de git.
* Los flujos de trabajo tienen que contener al menos un _job_. Estos incluyen una serie de pasos que ejecutan tareas individuales que pueden ser acciones o comandos. Un flujo de trabajo puede comenzar por distintos eventos que suceden dentro de GitHub, como un _push_ al repositorio o un _pull_ request.

## Jest 

* **Jest** ha sido desarrollado por el equipo de Facebook y, aunque nace en el contexto de React, es un framework de testing generalista que podemos utilizar en cualquier situación.
* Con él que podemos construir tests unitarios trabajando con matchers personalizados, crear mocks o comprobar snapshots de componentes visuales como algo sencillo y accesible.

## ESLint

* Los linters son herramientas de programación que examinan el código del programador y lo ayudan a corregir errores de sintaxis, código incorrecto, malas prácticas o costumbres o incluso ayudarlo a seguir guías de estilo, favoreciendo escribir código de calidad y acostumbrando al usuario a solventar ciertos problemas comunes como programador.

*  **ESLint** es un linter que examina código Javascript, siguiendo unas ciertas normas y criterios personalizables por el programador, para que el código Javascript siga ciertos estándares y estilos, favoreciendo la escritura de código de calidad.
* **ESLint** es totalmente configurable y puedes indicarle que criterios _llamados reglas_ quieres que utilice y cuales prefieres que ignore, adaptándose a las necesidades de cualquier empresa, programador o equipo de trabajo.


# Proceso de Desarrollo

