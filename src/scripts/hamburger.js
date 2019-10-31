let btn = document.querySelector(".hamburger-btn");
let menu = document.querySelector(".hamburger-menu")
let menuItem = document.querySelector(".menu");
let social = document.querySelector(".social");

btn.addEventListener('click', function(e) {
  e.preventDefault();
  btn.classList.toggle("active");
  menu.classList.toggle("visible");
})

menuItem.addEventListener('click', function(e) {
  btn.classList.remove("active");
  menu.classList.remove("visible");
})

social.addEventListener('click', function(e) {
  btn.classList.remove("active");
  menu.classList.remove("visible");
})