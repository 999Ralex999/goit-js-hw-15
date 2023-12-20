/**
  |============================
  | Element
  |============================
*/
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

/**
  |============================
  | Function
  |============================
*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}

/**
  |============================
  | Event
  |============================
*/
buttonEl.addEventListener("click", changeColor);
