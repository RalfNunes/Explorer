// constante para criar um número randomico
const randomNumber = Math.round(Math.random() * 10)
// variavel de controle 
let xAttempts = 1 

// essa funcão feita para capturar o evento do "click"
function handleClick(event) {
  event.preventDefault();  // deixar o evento padrão sem carregar a pagina
  const inputNumber = document.querySelector("#inputNumber");
  
// se o número for igual o randomico
  if (Number(inputNumber.value) == randomNumber) {
    // achar a classe no html e adicionar 
    document.querySelector(".screen1").classList.add("hide") 
    // achar a classe no html e remover
    document.querySelector(".screen2").classList.remove("hide")
    // mostrar na proxima tela as tentativas 
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  xAttempts++

  console.log(randomNumber)
}

