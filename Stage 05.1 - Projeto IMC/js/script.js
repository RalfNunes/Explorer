import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {IMC, notNumber} from './utils.js'

// variaveis - variables 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// 3 maneiras de criar e atrixbuir função a um evento
// form.onsubmit () => {} // MANEIRA 2
// form.onsubmit = handleSubmit // MANEIRA 3
// function handleSubmit(){}

form.onsubmit = function(event) {
  event.preventDefault() // evitar o padrão, não fazer
  const weight = inputWeight.value // capturar o valor do peso
  const height = inputHeight.value // capturar o valor do altura

  const showAlertError = notNumber(weight) || notNumber(height)
  if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height) // chamando a função
  const message = `Seu IMC é de ${result}` // mostrando a mensagem

  Modal.message.innerHTML = message 
  Modal.open()
}


