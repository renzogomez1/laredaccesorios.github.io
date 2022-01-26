const iconoHambur = document.querySelector(".icono-hambur");
const navMenu = document.querySelector(".nav-menu");

iconoHambur.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});