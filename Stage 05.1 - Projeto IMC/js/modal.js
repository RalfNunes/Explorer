// separando o modal para ajudar melhorar o entendimento, criando um metodo
export const Modal = {
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

// fechar a janela do modal
Modal.buttonClose.onclick = () => {
  Modal.close()
}

// fecha na tecla "esc"
window.addEventListener('keydown', handleKeydown)
function handleKeydown() {
  if (event.key === 'Escape'){
    Modal.close()
  }
} 

// function handleKeydown(event){
//   console.log(event.key)
// }
