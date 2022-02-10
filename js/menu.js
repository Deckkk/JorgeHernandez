

/* Jorge Hernandez Flores */

//Elemento boton Menu
var botonMenu = document.querySelector('.hamburguesa');


//Elemento lista del menu
var listaMenu = document.querySelector('.menu-de-contenido');

//Elemento frase del html.
var frase = document.querySelector('.frase');

//Elemento contenedor personal.
var contenedorPersonal = document.querySelector('.personal');

//Elemento tarjeta
var tarjeta = document.querySelector('.tarjeta');

var introduccion = document.querySelector('.introduccion');

function abrirCerrar() {

    if ( listaMenu.style.transform == 'scale(1)' ) {
        listaMenu.style.transform = 'scale(0)';
        contenedorPersonal.style.width = '50%';
        frase.style.display = 'block';

        tarjeta.style.width = '500px';
        introduccion.style.display = 'block';
    } else {
        listaMenu.style.transform = 'scale(1)';
        frase.style.display = 'none';
        contenedorPersonal.style.width = '17%';

        tarjeta.style.width = '4rem';
        introduccion.style.display = 'none';
    }

}



function desplegarInfo() {

    

    if ( tarjeta.style.width !== '500px' ) {
        tarjeta.style.width = '500px';
        introduccion.style.display = 'block';
    } else {
        tarjeta.style.width = '4rem';
        introduccion.style.display = 'none';

    }



}