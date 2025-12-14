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
