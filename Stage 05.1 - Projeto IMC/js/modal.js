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