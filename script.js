



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

// const navbar = document.querySelector("[data-navbar]");
// const navTogglers = document.querySelectorAll("[data-nav-toggler]");

// const toggleNav = () => {
//   navbar.classList.toggle("active");
//   document.body.classList.toggle("nav-active");
// }

// addEventOnElements(navTogglers, "click", toggleNav);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-ul");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)



function NewTab() {
  window.open(
    "https://drive.google.com/file/d/1PWDFAedYbOU7LGcKE9O8SNiY1aUOCr_N/view?usp=share_link",
    "_blank"
  );
}



// const header = document.querySelector("[data-header]");
// const backTopBtn = document.querySelector("[data-back-top-btn]");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     header.classList.add("active");
//     backTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     backTopBtn.classList.remove("active");
//   }
// });






