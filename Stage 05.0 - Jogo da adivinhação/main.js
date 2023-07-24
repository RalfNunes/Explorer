// # Variaveis
// O ideal é criar constantes para o codigo que mais usa
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
// Eventos
// criando uma constantes para os ids de botões
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
// constante para criar um número randomico
// mudar para let para ser reutilizada
let randomNumber = Math.round(Math.random() * 10)
// variavel de controle 
let xAttempts = 1 

const btnKeydown = document.querySelector('keydown')

// # EVENTOS 
// nome do evento 'click' depois colocar o função que vai reagir 
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
// função vai limpar o 'Enter', na parte da function vai ter receber um evento
btnKeydown.addEventListener('keydown', handleKeyDown)

// # FUNÇÕES ou METODOS
// essa funcão feita para capturar o evento do "click"
// função callback
function handleTryClick(event) {
  event.preventDefault();  // não faça o padrão do form
  const inputNumber = document.querySelector("#inputNumber");
  
// se o número for igual o randomico
  if (Number(inputNumber.value) == randomNumber) {
    toogleScreen()
    // achar a classe no html e adicionar 
    // screen1.classList.add("hide") // foi alterado para função toogle
    // achar a classe no html e remover
    // screen2.classList.remove("hide") // foi alterado para função toogle
    // mostrar na proxima tela as tentativas
    // podemos buscar no próprio elemento 
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  

  // deixar o input vazio
  inputNumber.value =""

  xAttempts++
}

function handleResetClick() {
  toogleScreen()
  xAttempts = 1
  // para ter um novo número
  randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleKeyDown(){
  // evento.tecla"KEY" = 'nome do ação', só vai ser ativo na segunda tela .screen2 porque as duas opções são verdadeiras.
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}