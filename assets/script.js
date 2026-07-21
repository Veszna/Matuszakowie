const dropdowns = document.querySelectorAll('.nav-dropdown');


dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.nav-button');
    const menu = dropdown.querySelector('.nav-menu');
    const arrows = dropdown.querySelectorAll('.nav-arrow');

    button.addEventListener('click', () => {
        menu.classList.toggle('show');
        arrows.forEach(arrow => arrow.classList.toggle('show'));
    });
});