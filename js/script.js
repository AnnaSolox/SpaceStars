// Declaración de variables
var canvas, ctx;

// Inicio del juego
function canvasStars(){
    //Obtengo el elemento canvas
    canvas = document.getElementById("miCanvas");

    //Especifico el contexto 2D
    ctx = canvas.getContext("2D");

    //Llamo a la función que pinta el fondo de las estrellas
    pintarFondo();

    //Llamo a la función que pinta la nave
    pintarNave();

    //Llamo a la función que pinta la base
    pintarBase();

    //Llamo a la función que pinta los asteroides
    pintarAsteroides();

}

// Pinto el fondo con estrellas
function pintarFondo(){

    //Pinto el fondo de negro
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.rect(0,0,600,600); // posición x, y, ancho y alto
    ctx.closePath();
    ctx.fill();

    //Pinto 100 estrellas
    for(i= 0; i < 100; i++){
        //Posiciones x e y aleatorias
        var x = Math.random() * 600;
        var y = Math.random() * 600;

        //Pinto un punto blanco en esa posición
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(x , y , 3 , 0 , Math.PI * 2); //posición x, y, radio (px), inicio del arco (en grados) fin del arco (en grados)
        ctx.closePath();
        ctx.fill();
    }

}

// Pinto la nave
function pintarNave(){

}

// Pinto la base
function pintarBase(){

}

// Pintar asteroides
function pintarAsteroides(){

}

// Muevo la nave
function moverNave(){

}

//Actualizo el contador y detecto si se ha quedado sin movimientos
function actualizarContador(){

}

// Detecto las colisiones con las base u otros asteroides
function detectarColision(){

}

// Finalizo el juego
function finalizar(){

}

// Reinicio el juego
function reiniciar(){

}