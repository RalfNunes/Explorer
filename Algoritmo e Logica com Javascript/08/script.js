/* 
# Desafio: 

Faça um programa que tenha um menu e apresente a seguinte mensagem: 

Olá, usuário! Digite a opção desejada
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa. 

----- 
O program deverá capturar o número digitado pelo usúario e mostrar o seguintes cenários: 

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
  Se não houver nenhum item cadastrado, mostrar a mensagem: 
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/


/* 
 Dados de entradas do usuario
  1. numero desejado 
  2. item da lista


 Variveies
  1. opção digita
  2. lista de itens

  Fluxo ideial 
  -  

  Quais tratamento de dado 
  - transformar a String em Number
  - Capturar o numero 
  - Guardar o item na lista

*/

/* MEU JEITO 
let optionOne  = "1"
let optionTwo  = "2"
let optionTree = "3"

optionOne  = Number(optionOne)
optionTwo  = Number(optionTwo)
optionTree = Number(optionTree)

let message   = prompt(`Olá, usuário! Digite a opção desejada: \n ${optionOne} .Cadastrar um item na lista \n ${optionTwo} .Mostrar itens cadastrados \n ${optionTree} .Sair do programa`)

*/

let option;         // estão vazios 
let items  = []     // estão vazios

while (option != 3) {
  
  let option = Number(prompt(`
  Olá, usuário! Digite a opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa.`))
  
  
  // ARRUMAR UMA LOGICA PARA PEGAR SÓ ACEITAR OS NUMEROS 1 2 3 
  // if (option != (1 2 3)) {
  //   alert("Somente as opção 1, 2 e 3")
  // } 


  if (option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item) 
  } else if (option == 2) {
      if(items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
  } else {
    alert("Até Logo!!")
  }
}


let option         // estão vazios 
let items  = []     // estão vazios

while (option != 3) {
  
  let option = Number(prompt(`
  Olá, usuário! Digite a opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa.`))
  
  
  // ARRUMAR UMA LOGICA PARA PEGAR SÓ ACEITAR OS NUMEROS 1 2 3 
  // if (option != (1 2 3)) {
  //   alert("Somente as opção 1, 2 e 3")
  // } 

  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item) 
    break;

    case 2:
      if(items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
    break;

    case 3:
      alert("Até Logo!!")
    break;

    default:
      alert("Opção inválida, tente novamente")
    break;
  }
}