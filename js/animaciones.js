const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const merchcard1 = document.getElementById('merchcard1');
const merchcard2 = document.getElementById('merchcard2');


const cargarSeccion = (entradas, observador) =>{
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });

};

const observador = new IntersectionObserver(cargarSeccion, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});

observador.observe(card1);
observador.observe(card2);
observador.observe(card3);
observador.observe(merchcard1);
observador.observe(merchcard2);