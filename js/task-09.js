function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColor = document.querySelector('.change-color');
const bodyChangeColor = document.querySelector('body');
const spanChangeColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', changeColor);
function changeColor() {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  spanChangeColor.textContent = getRandomHexColor();
}

