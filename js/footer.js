
//FUNCION PARA ANIMACION DEL FOOTER.

//Variables elementos HTML.
var copyR = document.querySelector('.copyrigth');
var redes = document.querySelector('.redes-sociales');

function despliegueFooter() {
    redes.style.transform = 'scale(1)';
    copyR.style.transform = 'translateX(-30%)';  
}

function cerrarFooter() {
    redes.style.transform = 'scale(0)';
    copyR.style.transform = 'translateX(115%)'; 
}

