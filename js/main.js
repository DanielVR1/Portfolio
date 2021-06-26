var  x = window.pageYOffset;

window.onscroll = function() {

var posicionActualScroll = window.pageYOffset;

  if ( x > posicionActualScroll) {

    document.getElementById("navbar").style.top = "0";

  } else {

    document.getElementById("navbar").style.top = "-50px";

  }

   x = posicionActualScroll;

}

//fin codigo para ocultar navbar haciendo scroll