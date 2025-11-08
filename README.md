# SPACE STARS - VERSIÓN PERSONALIZADA

**Space stars** es un juego desarrollado en `HTML5`, `CSS`y `JavaScrip`. El objetivo es mover una nave desde el punto de salida hasta la base sin chocar con ningún asteroide antes de que se terminen  tanto el tiempo como los movimientos.

Esta versión sigue la plantilla utilizada en el ejercicio propuesto y añade nuevas funcionalidades respecto a la jugabilidad y la estética del mismo. 

## Estructura de archivos
**index.html**
Estructura básica de la página y punto de entrada del juego. Incluye:
- Fuentes personalizadas de *Google fonts*
- Enlace al CSS de estilos.
- Enlace al JavaScript con las funciones del juego.
- Contenedor del panel de información (mensaje, movimiento, tiempo y contador de brújulas).
- Canvas de 600x600 donde se dibujarán los elementos visuales del juego.

**css/style.css**
Estilos gráficos del juego.
- Grid de estilos del panel de información.
- Tipografías para conseguir estilo retro.
- Tiempo iniciado en verde.

**js/script.js**
Contiene la lógica completa del juego:

## Variaciones visuales
### Imágenes
Se añaden imágenes `SVG` personalizadas para majorar la estética del juego:
- Asteroides
- Estrellas
- Nave
- Brújulas
- Base

### Estilos CSS
- Fuentes:  Audiowide para el titular y Inconsolata para el resto de textos.
- Panel de información a tres columnas utilizando `display: grid`.

