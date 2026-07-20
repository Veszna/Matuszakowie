const button = document.querySelector('.nav-button');
const menu = document.querySelector('.nav-menu');

button.addEventListener('click', () => {
    menu.classList.toggle('show');
});