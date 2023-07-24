// variaveis - variables 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// separando o modal para ajudar melhorar o entendimento, criando um metodo
const Modal = {
  wrapper:  document.querySelector('.modal-wrapper'), // abrir e fechar o modal
  message:  document.querySelector('.modal .title span'), // o span no html
  buttonClose: document.querySelector('.modal button.close'), // 

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

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

// fechar a janela do modal
Modal.buttonClose.onclick = () => {
  Modal.close()
}
