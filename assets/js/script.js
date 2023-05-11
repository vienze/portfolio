// navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
// navbar menu toggle
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// navbar scroll detect
const header = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};
// function active link
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
    navbar.classList.toggle("active");
  });
});
navLinks[0].classList.add("active");
// end navbar

// typed js home section
var typed = new Typed("#typed", {
  strings: ["Frontend Developer", "Graphic Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 200,
  startDelay: 100,
  fadeOut: false,
  loop: true,
});
