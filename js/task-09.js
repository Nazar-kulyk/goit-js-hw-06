const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});
