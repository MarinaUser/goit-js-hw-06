
const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

inputChange.addEventListener('input', event => {
    abracadabra.style.fontSize = `${event.currentTarget.value }px`
})