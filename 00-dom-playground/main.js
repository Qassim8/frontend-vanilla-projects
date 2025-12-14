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
