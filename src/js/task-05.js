const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onOutputName);

function onOutputName(event) {
    event.currentTarget.value === '' ?
        span.textContent = 'Anonymous' :
        span.textContent = event.currentTarget.value;
        
    } 

