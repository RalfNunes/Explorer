import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import {calcutaleIMC, notNumber} from './utils.js'

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

  const weightOrHeighIsNotAnumber = notNumber(weight) || notNumber(height)
  if (weightOrHeighIsNotAnumber) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = calcutaleIMC(weight, height) // chamando a função
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}` // mostrando a mensagem
  Modal.message.innerHTML = message 
  Modal.open()
}

// Desafio = fechar a janela de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


