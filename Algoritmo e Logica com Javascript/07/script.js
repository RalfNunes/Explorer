/* # Desafios
- Jogo da advinhação

Apresente a mensagem ao usuário: 
"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não adivinhar o número, mostrar a mensagem: 
"Erro, tente novamente"

Caso o usuário acerte o número, aprensentar a mensagem: 

"Parabéns! Você advinhou o número em X tentativas" 

Substitua o "x" da mensagem, pelo número de tentativas */

// MEU JEITO 
/*
let numberChosen = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

numberChosen = Number(numberChosen)

// let numberMachine = Math.random(1)
// console.log(numberMachine)

function generationRandom(max) {
  return Math.round(Math.random() * max) + 1;
}

let numberMachine = generationRandom(2)

if (numberChosen === numberMachine) {
  alert('Parabéns! Você advinhou o número em X tentativas')
} else {
  alert('Erro, tente novamente')
}
console.log(numberMachine) */


let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;


while(Number(result) != randomNumber){
  result = prompt('Erro, tente novamente: ')
  xAttempts++
}

if (xAttempts == 1) {
  alert(`Parabéns! Você advinhou o número ${randomNumber} em ${xAttempts} tentativa`)
} else {
  alert(`Parabéns! Você advinhou o número ${randomNumber} em ${xAttempts} tentativas`)
}


console.log(result, randomNumber, xAttempts)

/*
Math.ceil(1.2)      // sempre vai arredondar para cima ex. 2
Math.floor(1.5)    // sempre vai arredondar para baixo ex. 1
math.round(1.6)   // se for ex.1.4 vai aparecer ex.1, acima disso ex.1.5 ex. 2
*/