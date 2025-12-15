"use-strict";
// Counter Logic
let counter = document.querySelector(".counter");
let counterButtons = document.querySelector(".counter-buttons");
let counterValue = 0;
counter.textContent = counterValue;

counterButtons.addEventListener("click", (e) => {
  if (e.target.className === "increse") incrementHandler(counterValue);
  if (e.target.className === "dicrese") dicrementHandler(counterValue);
});
const incrementHandler = () => {
  counterValue++;
  return (counter.textContent = counterValue);
};
const dicrementHandler = () => {
  if (counterValue > 0) counterValue--;
  return (counter.textContent = counterValue);
};

///////////////////////////////////////////////////
// Show & Hide Element Logic
let visibiltyHandlerBtn = document.querySelector(".visibilty-handler");
let text = document.querySelector(".visible");

visibiltyHandlerBtn.addEventListener("click", (e) => {
  visibiltyHandler(e);
});

const visibiltyHandler = (e) => {
  if (text.classList.contains("visible-text")) {
    handleInvisible(e);
  } else {
    handleVisible(e);
  }
};

const handleVisible = (e) => {
  e.target.textContent = "Hide Text";
  text.classList.remove("invisible-text");
  text.classList.add("visible-text");
};
const handleInvisible = (e) => {
  e.target.textContent = "Show Text";
  text.classList.remove("visible-text");
  text.classList.add("invisible-text");
};

/////////////////////////////////////////////////////////
// Show & Hide Tabs Logic
let tabs = document.querySelector(".tabs-container");
let toggeler = document.querySelector(".toggeler");

tabs.addEventListener("click", (e) => {
  if (e.target.nextElementSibling.classList.contains("invisible-text")) {
    e.target.nextElementSibling.classList.remove("invisible-text");
    e.target.nextElementSibling.classList.add("visible-text");
    e.target.children[1].textContent = "-";
  } else {
    e.target.nextElementSibling.classList.remove("visible-text");
    e.target.nextElementSibling.classList.add("invisible-text");
    e.target.children[1].textContent = "+";
  }
});
/////////////////////////////////////////////////////////
// Handling theme
let btnThemeHandler = document.querySelector(".theme-btn");
let themeValue = localStorage.getItem("theme");

if (localStorage.getItem("theme") === "dark") {
  document.body.style.backgroundColor = "#222";
  btnThemeHandler.textContent = "Light";
  document.documentElement.style.setProperty("--main-color", "#999");
  document.documentElement.style.setProperty(
    "--main-bg",
    "rgba(128, 104, 74, 1)"
  );
  document.documentElement.style.setProperty("--shadow", "");
} else {
  document.body.style.backgroundColor = "#f0f0f0";
  btnThemeHandler.textContent = "Dark";
  document.documentElement.style.setProperty("--main-color", "#222");
  document.documentElement.style.setProperty("--main-bg", "burlywood");
  document.documentElement.style.setProperty("--shadow", "#c7c4c4");
}
btnThemeHandler.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  window.location.reload();
});
