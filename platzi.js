var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
    url : "tile.png",
    cargaOK : false
};

var vaca = { 
    url : "vaca.png",
    cargaOK : false
};

var cerdo = {
    url : "cerdo.png",
    cargaOK : false,
    avance : 10,
    xi : 250,
    yi : 250
};

// aca fuerzo a que el canvas sea un cuadrado de 500px
var canvas = document.getElementsByTagName('canvas')[0];
canvas.height = 500;
canvas.width  = 500;

var cantidad = aleatorio(5,25);

fondo.imagen = new Image(); // creo el elemento img
fondo.imagen.src = mapa; // le asigno la ruta al elemento img
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}




function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, cerdo.xi, cerdo.yi);
    }
}

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);

//var xCerdo = 250;
//var yCerdo = 250;
//var movimiento = 50;


function moverCerdo(chanchito, x, y)
{
    papel.drawImage(chanchito, x, y)
}

function dibujarTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP:
            moverCerdo(cerdo.imagen, cerdo.xi, cerdo.yi - cerdo.avance)
            cerdo.yi = cerdo.yi - cerdo.avance;
            dibujar()
        break;

        case teclas.DOWN:
            moverCerdo(cerdo.imagen, cerdo.xi, cerdo.yi + cerdo.avance)
            cerdo.yi = cerdo.yi + cerdo.avance;
            dibujar()
        break;

        case teclas.LEFT:
            moverCerdo(cerdo.imagen, cerdo.xi, cerdo.yi + cerdo.avance)
            cerdo.xi = cerdo.xi - cerdo.avance;
            dibujar()
        break;

        case teclas.RIGHT:
            moverCerdo(cerdo.imagen, cerdo.xi, cerdo.yi + cerdo.avance)
            cerdo.xi = cerdo.xi + cerdo.avance;
            dibujar()
        break;
    }
}   

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

