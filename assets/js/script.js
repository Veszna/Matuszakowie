const dropdowns = document.querySelectorAll('.nav-dropdown');


dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.nav-button');
    const menu = dropdown.querySelector('.nav-menu');
    const arrow = dropdown.querySelector('.nav-arrow');

    button.addEventListener('click', () => {
// Är den här menyn öppen? om ja = true, om nej = false
        const isOpen = menu.classList.contains('show');
// Stänger alla menyer
        dropdowns.forEach(item => {
            item.querySelector('.nav-menu').classList.remove('show');
            item.querySelector('.nav-arrow').classList.remove('show');
        });
// Om menyn inte var öppen, öppna den
        if (!isOpen) {
    menu.classList.add('show');
    arrow.classList.add('show');
}

    });    
});

document.addEventListener('click', (event) => {
// closest letar uppåt i DOM-trädet för att hitta närmaste element som matchar selektorn
    const clickedDropdown = event.target.closest('.nav-dropdown');
// Om klicket inte var på en dropdown, stäng alla dropdowns
    if (!clickedDropdown) {
        dropdowns.forEach(dropdown => {
            dropdown.querySelector('.nav-menu').classList.remove('show');
            dropdown.querySelector('.nav-arrow').classList.remove('show');
        });
    }
});