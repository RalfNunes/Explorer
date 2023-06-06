

/* 
 Capturar 2 números
 e fazer as operações matématicas
 de soma(+), subtração(-), multiplicação(*),
 divisão(/), e resto da divisão. 

 E para cada operação mostrar um alerta com o resultado
*/

/*
  Encontre a solução ao problema:

  Pergunte o nome do usuário e escreva a mensagem:
  ""
*/

alert("Operadores Matématicos")
let numberOne = prompt("Digite o primeiro Número")
let numberTwo = prompt("Digite o segundo Número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


const sum = (numberOne + numberTwo)
const subtraction = (numberOne - numberTwo)
const multiplication = (numberOne * numberTwo)
const division = (numberOne / numberTwo)
const rest  = (numberOne % numberTwo)


alert("Resultado da Soma " + sum)
alert("Resultado da Subtração " + subtraction)
alert("Resultado da Multiplição " + multiplication)
alert("Resultado da Divisão " + division)
alert("Resultado do Resto " + rest)

