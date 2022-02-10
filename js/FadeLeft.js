

// VARIABLES PARA ELEMENTOS DEL HTML 
var row = document.querySelectorAll('.row');
var mainInfo = document.querySelector('.main-info');
var mainSection = document.querySelector('.main-section');

// FUNCION QUE NOS MUEVE LAS SECCIONES INTRODUCCION Y TEMAS 
function temas() {

    if ( mainSection.style.transform == 'translateX(200%)') {

        //MODIFICAMOS ESTILOS DE MAINSECTION
        mainSection.style.transition = '1s';
        mainSection.style.transform = 'translateX(-60%)';

        //MODIFICAMOS ESTILOS DE MAININFO
        mainInfo.style.transition = '1s';
        mainInfo.style.transform = 'translateX(-200%)';

    } else {
        //MODIFICAMOS ESTILOS DE MAINSECTION
        mainSection.style.transition = '1s';
        mainSection.style.transform = 'translateX(200%)';
        
        //MODIFICAMOS ESTILOS DE MAININFO
        mainInfo.style.transition = '1s';
        mainInfo.style.transform = 'translateX(0)';

    }


    


}
