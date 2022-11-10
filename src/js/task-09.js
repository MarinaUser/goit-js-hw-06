function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeButtonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

changeButtonColor.addEventListener('click', onClickChangeButtonColor);

function onClickChangeButtonColor () {
  let color = getRandomHexColor();
  
  body.style.backgroundColor = color;
  spanColor.textContent = color;
}