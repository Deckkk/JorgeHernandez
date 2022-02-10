
//Variables 

var diseño = document.querySelector('#Diseño');
var colores = document.querySelector('#Colores');
var tipografias = document.querySelector('#Tipografias');
var iconos = document.querySelector('#Iconos');
var prototipos = document.querySelector('#Prototipos');
var guias = document.querySelector('#Guias-estilo');
var sitemaps = document.querySelector('#sitemaps');
var plantillas =document.querySelector('#plantillas');

var mainPrincipal = document.querySelector('.container-2');
var mainTemas = document.querySelector('.container');


function Diseño() {

    diseño.style.display = 'block';
    colores.style.display = 'none';
    tipografias.style.display = 'none';
    iconos.style.display = 'none';
    prototipos.style.display = 'none';
    guias.style.display = 'none';
    sitemaps.style.display = 'none';
    plantillas.style.display = 'none';

}

function Colores() {

    diseño.style.display = 'none';
    colores.style.display = 'block';
    tipografias.style.display = 'none';
    iconos.style.display = 'none';
    prototipos.style.display = 'none';
    guias.style.display = 'none';
    sitemaps.style.display = 'none';
    plantillas.style.display = 'none';

}

function Tipografias() {

    diseño.style.display = 'none';
    colores.style.display = 'none';
    tipografias.style.display = 'block';
    iconos.style.display = 'none';
    prototipos.style.display = 'none';
    guias.style.display = 'none';
    sitemaps.style.display = 'none';
    plantillas.style.display = 'none';

}

function Iconos() {

    diseño.style.display = 'none';
    colores.style.display = 'none';
    tipografias.style.display = 'none';
    iconos.style.display = 'block';
    prototipos.style.display = 'none';
    guias.style.display = 'none';
    sitemaps.style.display = 'none';
    plantillas.style.display = 'none';

}

function Prototipos() {

    diseño.style.display = 'none';
    colores.style.display = 'none';
    tipografias.style.display = 'none';
    iconos.style.display = 'none';
    prototipos.style.display = 'block';
    guias.style.display = 'none';
    sitemaps.style.display = 'none';
    plantillas.style.display = 'none';

}

function Guias() {

    diseño.style.display = 'none';
    colores.style.display = 'none';
    tipografias.style.display = 'none';
    iconos.style.display = 'none';
    prototipos.style.display = 'none';
    guias.style.display = 'block';
    sitemaps.style.display = 'none';
    plantillas.style.display = 'none';

}

function Sitemaps() {

    diseño.style.display = 'none';
    colores.style.display = 'none';
    tipografias.style.display = 'none';
    iconos.style.display = 'none';
    prototipos.style.display = 'none';
    guias.style.display = 'none';
    sitemaps.style.display = 'block';
    plantillas.style.display = 'none';

}

function Plantillas() {

    diseño.style.display = 'none';
    colores.style.display = 'none';
    tipografias.style.display = 'none';
    iconos.style.display = 'none';
    prototipos.style.display = 'none';
    guias.style.display = 'none';
    sitemaps.style.display = 'none';
    plantillas.style.display = 'block';

}

function seccionTemas() {

    if (  mainPrincipal.style.display != 'none' ) {

        mainPrincipal.style.display = 'none';
        mainTemas.style.display = 'flex';

    } else {

        mainPrincipal.style.display = 'flex';
        mainTemas.style.display = 'none';

    }

}


