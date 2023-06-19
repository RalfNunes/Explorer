// alert("Desafio 1")

numberOne = [];
numberTwo = [];

// Variaveis
let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o Segundo número");

// Verificar se é igual
function checkEqual() {
  return numberOne === numberTwo ? 'são iguais' : 'são diferentes'
}

// Reatribuição
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);


// Calcúlos Matématica

// Funcão Soma
let sum = (numberOne + numberTwo)

// Par ou Ímpar 
let parOuImpar = sum % 2 == 0 ? 'par' : 'ímpar'

// Função Subtração
function sub() {
  return (numberOne - numberTwo);
}
// Função Multiplicação
function mult() {
  return (numberOne * numberTwo);
}
// Função Divisão
function div() {
  return (numberOne / numberTwo).toFixed(2);
}
// Função Resto
function rest() {
  return (numberOne % numberTwo);
}



// Mensagem de alerta
alert(`
Os dois números inseridos ${checkEqual(checkEqual)}
O resultado da soma ${sum}
O resultado dos números é ${parOuImpar}
O resultado da subtração ${sub(sub)}
O resultado da multiplicação ${mult(mult)}
O resultado da divisão ${div(div)}
O resultado do Resto ${rest(rest)}
`);
