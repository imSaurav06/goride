

// const overlay = document.querySelector("[data-overlay]");
// const navbar = document.querySelector("[data-navbar]");
// const navtogglebtn = document.querySelector(["data-nav-toggle-btn"]);
// const navbarlink = document.querySelectorAll(["data-navbar-link"]);


// const navtogglefunc = function(){
//   navtogglebtn.classList.toggle("active")
//   navbar.classList.toggle("active")
//   overlay.classList.toggle("active")
// }

// navtogglebtn.addEventListener("click" ,navtogglefunc);
// overlay.addEventListener("click" ,navtogglefunc);


// for (let i = 0; i < navbarlink.length; i++) {
//     navbarlink[i].addEventListener("click" ,navtogglefunc);
    
// }



const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}
