// O ideal é criar constantes para o codigo que mais usa
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// constante para criar um número randomico
const randomNumber = Math.round(Math.random() * 10)
// variavel de controle 
let xAttempts = 1 

// essa funcão feita para capturar o evento do "click"
// função callback
function handleTryClick(event) {
  event.preventDefault();  // não faça o padrão do form
  const inputNumber = document.querySelector("#inputNumber");
  
// se o número for igual o randomico
  if (Number(inputNumber.value) == randomNumber) {
    // achar a classe no html e adicionar 
    screen1.classList.add("hide") 
    // achar a classe no html e remover
    screen2.classList.remove("hide")
    // mostrar na proxima tela as tentativas 
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
  }

  // deixar o input vazio
  inputNumber.value =""


  xAttempts++
}

// Eventos
// criando uma constantes para os ids de botões
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// nome do evento 'click' depois colocar o função que vai reagir 
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")

  xAttempts = 1
})

