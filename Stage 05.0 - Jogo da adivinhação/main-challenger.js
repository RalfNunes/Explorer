const inputNumber = document.querySelector("#inputNumber");
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const btnKeydown = document.querySelector('keydown')


let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1 


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
btnKeydown.addEventListener('keydown', handleKeyDown)


function handleTryClick(event) {
  event.preventDefault();
  
  
  if (Number(inputNumber.value) == randomNumber) {
    toogleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
  }

  let userNumber = Number(inputNumber.value)

  if (inputNumber.value < 0 || inputNumber > 10) {
    inputNumber.value = ""
    return alert(`Número inválido, Somente números entre 0 e 10`)
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toogleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleKeyDown(){
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}