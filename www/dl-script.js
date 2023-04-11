const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  siderbarOpen = document.querySelector(".siderbarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

var darkmodeData = true;

window.addEventListener("DOMContentLoaded", () => {
  let getMode = localStorage.getItem("mode");
  if ((getMode && getMode === "dark-mode") || darkmodeData) {
    body.classList.add("dark");
    darkmodeData = true;
  }else{
    darkmodeData = false;
  }
  console.log(`storage: ${window.localStorage.getItem("mode")}`);
});

//java script code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  if (darkmodeData) {
    body.classList.add("dark");
    localStorage.setItem("mode", "light-mode");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("mode", "dark-mode");
  }

  darkmodeData = !darkmodeData;

  console.log(`storage: ${window.localStorage.getItem("mode")}`);
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
