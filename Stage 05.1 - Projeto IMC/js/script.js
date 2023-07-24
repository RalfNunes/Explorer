import { Modal } from './modal.js'

// variaveis - variables 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// 3 maneiras de criar e atrixbuir função a um evento
// form.onsubmit () => {} // MANEIRA 2
// form.onsubmit = handleSubmit // MANEIRA 3
// function handleSubmit(){}

// função para calcular 
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

form.onsubmit = function(event) {
  event.preventDefault() // evitar o padrão, não fazer
  const weight = inputWeight.value // capturar o valor do peso
  const height = inputHeight.value // capturar o valor do peso

  const result = IMC(weight, height) // chamando a função
  const message = `Seu IMC é de ${result}` // mostrando a mensagem

  Modal.message.innerHTML = message 
  Modal.open()
}


