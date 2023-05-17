const menuButton = document.getElementById("boton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function () {
  nav.classList.toggle("navAbierto");
});

