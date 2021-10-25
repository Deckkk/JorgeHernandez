function myFunction() {
  var x = document.getElementById('header1');
  var y = document.getElementById('slider');
  var j = document.getElementById('myBtn');
  var h = document.getElementById('Eslogan');
  if ( (x.style.top === '-150px') && (y.style.top === '-2000px') ) {
    x.style.top = '0px';
    y.style.top = '0px';
    j.style.top = '85%';
    h.style.visibility = 'hidden';
  } else {
    x.style.top = '-150px';
    y.style.top = '-2000px';
    j.style.top = '60%';
    h.style.visibility = 'visible';
  }
}
