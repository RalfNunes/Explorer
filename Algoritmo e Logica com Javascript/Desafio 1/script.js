// alert("Desafio 1")

numberOne = [];
numberTwo = [];

// Variaveis
let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o Segundo número");

// Reatribuição
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

// Calcúlos Matématica

// Funcão Soma
function sum() {
  return numberOne + numberTwo;
}
// Função Subtração
function sub() {
  return numberOne - numberTwo;
}
// Função Multiplicação
function mult() {
  return numberOne * numberTwo;
}
// Função Divisão
function div() {
  return (numberOne / numberTwo).toFixed(2);
}
// Função Resto
function rest() {
  return numberOne % numberTwo;
}

// Função de Igualdade
function equal() {
  if (numberOne == numberTwo) {
    return alert("Números iguais")
  } else return alert("Não são números iguais")
}

// Mensagem de alerta
alert(`
O resultado da soma ${sum(sum)}
O resultado da subtração ${sub(sub)}
O resultado da multiplicação ${mult(mult)}
O resultado da divisão ${div(div)}
O resultado do Resto ${rest(rest)}
O número é ${pImpar(pImpar)}
Esses números são ${equal(equal)}
`);

// Função Par ou Impar
function pImpar() {
  if ((numberOne + numberTwo) % 2 == 0) {
    return alert("Esse numero é Par");
  } else return alert("Esse numero é Ímpar");
}

