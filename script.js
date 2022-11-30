const circle = document.querySelector('#circuloSobreicon');
const indicator = document.querySelector('.indicator');

function slider(el) {
    const item = el.getAttribute('id');
    if(item === 'about') {
        circle.className = 'slide-one';
        indicator.className = 'indicator indicator-one';
    } else if(item === 'services') {
        circle.className = 'slide-two';
        indicator.className = 'indicator indicator-two';
    } else if(item === 'projects') {
        circle.className = 'slide-three';
        indicator.className = 'indicator indicator-three';
    } else {
        circle.className = 'slide-default';
        indicator.className = 'indicator indicator-default';
    }
}