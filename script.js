const circle = document.querySelector('#circuloSobreicon');
const indicator = document.querySelector('.indicator');
const indicador = document.querySelector('#indicador');

function slider(el) {
    const item = el.getAttribute('id');
    const svg = el.children[0];
    const svgs = document.querySelectorAll('svg');
    svgs.forEach(item => item.id = '');
      
    if(item === 'about') {
        circle.className = 'slide-one';
        // indicator.className = 'indicator indicator-one';
        indicador.className = 'indicator-one';
        svg.id = 'selected';
    } else if(item === 'services') {
        circle.className = 'slide-two';
        // indicator.className = 'indicator indicator-two';
        indicador.className = 'indicator-two';
        svg.id = 'selected';
    } else if(item === 'projects') {
        circle.className = 'slide-three';
        // indicator.className = 'indicator indicator-three';
        indicador.className = 'indicator-three';
        svg.id = 'selected';
    } else {
        circle.className = 'slide-default';
        // indicator.className = 'indicator indicator-default';
        indicador.className = 'indicator-default';
        svg.id = 'selected';
    }
}