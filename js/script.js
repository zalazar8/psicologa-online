const toggleButton = document.getElementById('boton');
const navList = document.getElementById('lista');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
});

let p = document.getElementById('lista'); // Encuentra el elemento "p" en el sitio
  p.onclick = muestraAlerta; // Agrega función onclick al elemento
    
  function muestraAlerta(evento) {
    navList.classList.toggle('active');
  }


new WOW().init();

(window).scroll(function(){
    let sticky = $("header");
    if ($(window).scrollTop() >= 100){
        sticky.addClass("fixed");
    }else{
        sticky.removeClass("fixed");
    }
});