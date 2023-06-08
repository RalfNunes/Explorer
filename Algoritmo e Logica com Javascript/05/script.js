/* Solicitar o nome do aluno e as 3 notas 
do bimestre calcular a média daquele aluno. 

Se o aluno passou no bimestre, dar os parabéns. 

Se o aluno não passou no bimestre, motivar o aluna a dar melhor na prova de recuperação. 

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota */



let nameStudy   = prompt("Digite o seu nome")
let firstNote   = prompt("Digite a sua primeira nota")
let secondNote  = prompt("Digite a sua segunda nota")
let trirdNote   = prompt("Digite a sua terceira nota")

firstNote   = Number(firstNote)
secondNote  = Number(secondNote)
trirdNote   = Number(trirdNote)

let soma = (firstNote + secondNote + trirdNote) / 3
let result = soma >= 6
soma = soma.toFixed(2)

if (result) {
  alert('Parabéns '+ nameStudy + ' a sua media é ' + soma + ' esta aprovad(o)a!')
} else if(soma < 3){
  alert("Reprovado!!!")
}else {
  alert('Poxa, ' + nameStudy + ' a sua media é ' + soma + ' e infelizmente esta de recuperação, bora dar o melhor na próxima prova')
}
