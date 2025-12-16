"use-strict";
// Counter Logic
let counter = document.querySelector("[data-counter]");
let counterButtons = document.querySelector("[data-counter-buttons]");
let counterValue = 0;
counter.textContent = counterValue;

counterButtons.addEventListener("click", (e) => {
  if (e.target.matches("[data-counter-action='increase']")) counterValue++;
  if (e.target.matches("[data-counter-action='dicrease']"))
    counterValue = Math.max(0, counterValue - 1);

  counter.textContent = counterValue;
});

///////////////////////////////////////////////////
// Show & Hide Element Logic
let visibiltyHandlerBtn = document.querySelector("[data-visibilty-handler]");

visibiltyHandlerBtn.addEventListener("click", (e) => {
  const text = document.querySelector("[data-visible-text]");
  const isVisible = text.classList.toggle("invisible-text");

  e.target.textContent = !isVisible ? "Hide Text" : "Show Text";
});

/////////////////////////////////////////////////////////
// Show & Hide Tabs Logic
let tabs = document.querySelector(".tabs-container");

tabs.addEventListener("click", (e) => {
  const tabHeader = e.target.closest("[data-tab-header]");

  if (!tabHeader) return;

  const tabToggler = tabHeader.querySelector("[data-tab-toggler]");
  const tab = tabHeader.closest("[data-tab]");
  const tabText = tab.querySelector("[data-tab-content]");
  const isOpen = tabText.classList.contains("invisible-text");

  tabToggler.textContent = !isOpen ? "+" : "-";
  tabText.classList.toggle("invisible-text");
});
/////////////////////////////////////////////////////////
// Handling theme
const themeBtn = document.querySelector("[data-theme-toggle]");
const root = document.documentElement;

const currentTheme = localStorage.getItem("theme") || "light";
root.dataset.theme = currentTheme;
themeBtn.textContent = currentTheme === "dark" ? "Light" : "Dark";

themeBtn.addEventListener("click", () => {
  const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  themeBtn.textContent = newTheme === "dark" ? "Light" : "Dark";
});
/////////////////////////////////////////////////////////////////////////
// Handling modal
let modalShower = document.querySelector("[data-modal-opener]");
let modalBody = document.querySelector("[data-modal]");
let modalCloser = document.querySelector("[data-modal-closer]");

modalShower.addEventListener("click", () => {
  modalBody.classList.add("is-open");
});

modalBody.addEventListener("click", (e) => {
  const modal = e.target.closest("[data-modal]");

  if (e.target === modalBody || modal) {
    modal.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modalBody.classList.remove("is-open");
});
