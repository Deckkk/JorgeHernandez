var secciones = document.querySelectorAll('.seccion-tema');

console.log(secciones);
// console.log(secciones[0].id );

displaySec(2);

function displaySec(posicion) {

 for ( let el of secciones ) {
     if ( el.id == secciones[posicion].id ) {
         el.style.display = 'block';
     } else {
         el.style.display = 'none';
     }
 }

}
