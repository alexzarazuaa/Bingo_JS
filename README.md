# Bingo Twingo APP |  ALEX ZARAZUA

**INDEX**



  * Bingo Twingo APP
  * Tecnologías Implicadas :
    * Javascript RAW ES6
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


# Javascript RAW ES6

## JavaScript

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