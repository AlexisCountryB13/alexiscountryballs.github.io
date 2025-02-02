const button = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-list");

button.addEventListener("click", () => {
    menu.classList.toggle("active");
});
