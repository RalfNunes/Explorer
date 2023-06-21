// DESAFIO 1
alert("DESAFIO 1: Hello World!")

// DESAFIO 2
let numberOne =  6
let numberTwo =  7

// REATRIBUIÇÃO
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = (numberOne + numberTwo)
alert("DESAFIO 2: O resultado é " + sum)


// DESAFIO 3
let numberTree = 8
if (typeof numberTree === "string") {
  alert("DESAFIO 3: Não é um número");
} else {
  alert("DESAFIO 3: É um número"); 
}

// DESAFIO 4
let numberFour = "8"
if (typeof numberFour === "string") {
  alert("DESAFIO 4: É um string");
} else {
  alert("DESAFIO 4: Não é um string"); 
}


// DESAFIO 5
let numberFive = 5 
if (typeof numberFive === "boolean") {
  alert("DESAFIO 5: É um booleano");
} else {
  alert("DESAFIO 5: Não é um booleano"); 
}

// DESAFIO 6
let sub = (numberOne - numberTwo)
alert("DESAFIO 6: " + sub)

// DESAFIO 7
let mult = (numberOne * numberTwo)
alert("DESAFIO 7: " + mult)

// DESAFIO 7
let div = (numberOne / numberTwo)
alert("DESAFIO 8: " + div)

// DESAFIO 9 e 10  
let parOuImpar = sum % 2 == 0 ? 'É um número par' : 'É um número ímpar'
alert(parOuImpar)