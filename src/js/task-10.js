function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs={ 
 CreateBtn: document.querySelector('[data-create]'),
 DestroyBtn: document.querySelector('[data-destroy]'),
 newBox: document.querySelector('#boxes'),
 input: document.querySelector('#controls input'),
}



refs.CreateBtn.addEventListener('click', createBox);
refs.DestroyBtn.addEventListener('click', destroyBoxes);

function createBox() {
  let amount = refs.input.value;
  createBoxes(amount);
  
}

function createBoxes(amount) { 
  let size = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) { 
    const div = document.createElement('div');
    const randomColor = getRandomHexColor();
    div.style.backgroundColor = randomColor;
    div.style.width = size +'px';
    div.style.height = size +'px';
    div.style.marginTop = '10px';
    fragment.appendChild(div);
    size += 10;
    refs.newBox.append(fragment);
  }
 
}

function destroyBoxes() {
  refs.newBox.innerHTML = '';
}