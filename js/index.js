const body = document.querySelector('body');
const navToggle = document.querySelector('.nav__toggle');
const navUl = document.querySelector('.nav__ul');


//Agregar aria-label al icono de menu
navToggle.addEventListener('click', () => {
    navUl.classList.toggle('nav__ul--visible');

    if (navUl.classList.contains('nav__ul--visible')){
        navToggle.setAttribute('aria-label', 'Cerrar menu');
    }else{
        navToggle.setAttribute('aria-label', 'Abrir menu');
    }
});

// Funcion para cerrar menu al hacer clic en enlace en formato tablet - mobile
const links = navUl.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      navUl.classList.remove("nav__ul--visible");
    });
  }
