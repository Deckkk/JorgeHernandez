var menu = document.getElementById("Menu");

var sticky = menu.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= sticky) {
        menu.classList.add("sticky")
      } else {
        menu.classList.remove("sticky");
      }
}