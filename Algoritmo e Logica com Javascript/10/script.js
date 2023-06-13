// CALCULO DE IMC
const patients = [

  // PACIENT 1 
  {
    name: "Rafael",
    age: 33, 
    weight: 74,
    height: 182,
  },
   // PACIENT 2
  {
    name: "Andreia",
    age: 32, 
    weight: 50,
    height: 165,
  },
  // PACIENT 3
  {
    name: "Arthur",
    age: 10, 
    weight: 27,
    height: 134,
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
} 


function printPatientIMC(patient) {
  return `
  Nome:   ${patient.name}
  Idade:  ${patient.age}
  Peso:   ${patient.weight}
  Altura: ${patient.height}
  IMC:    ${IMC(patient.weight, patient.height)}
  `
}

//  para um paciente de pacientes faça 
for (let patient of patients){
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}


/* 
// criação 
function liquidificador(fruta1, fruta2){
  const suco = fruta1 + fruta2
  return
}

// execução 
let meuSuco = liquificador("Maça", "banana")
aler(meuSuco)
 
*/


//  alert(`
//     Paciente ${patients[0].name} possui o IMC de: ${(patients[0].weight / ((patients[0].height / 100) ** 2)).toFixed(2)}
//   `)

