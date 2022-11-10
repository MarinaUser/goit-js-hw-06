const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
    valueEl.textContent = this.value;
  },
  decrement() {
    this.value -= 1;
    valueEl.textContent = this.value;
  },
};

decrementBtn.addEventListener('click', function () {
  counter.decrement();
 
});

incrementBtn.addEventListener('click', function () {
  counter.increment();
  
});