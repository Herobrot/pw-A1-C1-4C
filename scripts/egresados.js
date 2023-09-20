const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    var mas = dropdown.querySelector('.mas');
    const menu = dropdown.querySelector('.menu');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        mas = mas.innerHTML === "+" ? "+" : "-";
        menu.classList.toggle('menu-open');
    });
});