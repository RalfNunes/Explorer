const patients = [
  {
    name: "Rafael",
    age: 33, 
    weight: 74,
    height: 182,
  },

  {
    name: "Andreia",
    age: 32, 
    weight: 50,
    height: 165,
  },

  {
    name: "Arthur",
    age: 10, 
    weight: 27,
    height: 134,
  },
]

let patientsNames   = []
let patientsAges    = []
let patientsWeights = []
let patientsHeights = []


// ESTRUTA CONVECIONAL FOR 
/* 
sfor (let index = 0; index < patients.length; index++) {
  patientsNames[index] = patients[index].name
}
*/

// ESTRUTA MODERNA FOR 

//  para um paciente de pacientes faça 
for (let patient of patients) {
  patientsNames.push(patient.name)
  patientsAges.push(patient.age)
  patientsWeights.push(patient.weight)
  patientsHeights.push(patient.height)
}


alert(`Lista de paciente: 

 Nome:    ${patientsNames[0]} 
 Idade:   ${patientsAges[0]}
 Peso:    ${patientsWeights[0]}
 Altura:  ${patientsHeights[0]}
 
 Nome:    ${patientsNames[1]} 
 Idade:   ${patientsAges[1]}
 Peso:    ${patientsWeights[1]}
 Altura:  ${patientsHeights[1]}

 Nome:    ${patientsNames[2]} 
 Idade:   ${patientsAges[2]}
 Peso:    ${patientsWeights[2]}
 Altura:  ${patientsHeights[2]}
 
 `)


