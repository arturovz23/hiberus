const navToggle = document.querySelector('.nav__toggle');
const navUl = document.querySelector('.nav__ul');

navToggle.addEventListener('click', () => {
    navUl.classList.toggle('nav__ul--visible');

    if (navUl.classList.contains('nav__ul--visible')){
        navToggle.setAttribute('aria-label', 'Cerrar menu');
    }else{
        navToggle.setAttribute('aria-label', 'Abrir menu');
    }
});