function myFunction() {
  var y = document.getElementById('TemasDesplegable');
    if ( y.style.left === '-100%' ) {
      y.style.left = '0%';
    } else { 
        y.style.left = '-100%';
    }
}
