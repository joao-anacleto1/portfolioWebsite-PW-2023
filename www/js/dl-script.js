const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  siderbarOpen = document.querySelector(".siderbarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

var darkmodeData = true;

window.addEventListener("DOMContentLoaded", () => {
  body.classList.add("dark");
  modeToggle.classList.toggle("active");
});

//java script code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");

  if (darkmodeData) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }

  darkmodeData = !darkmodeData;
});

//java script code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//java script code to toggle siderbar

siderbarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("siderbarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});
