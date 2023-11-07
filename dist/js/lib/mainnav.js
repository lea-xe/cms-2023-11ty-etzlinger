export function init() {
}

document.getElementById("hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
var x = document.getElementById("navbar");
if (x.classList.contains("open")) {
  x.classList.remove("open");
} else {
  x.classList.add("open");
}
}
