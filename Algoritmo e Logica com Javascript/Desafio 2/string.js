const students = [
  // student 1
  {
    name: "Rafael",
    n1: 10,
    n2: 10,
  },
  // student 2
  {
    name: "Andreia",
    n1: 8,
    n2: 6.5,
  },
  // student 3
  {
    name: "Arthur",
    n1: 10,
    n2: 3.1,
  },
  // student 4
  {
    name: "Fernando",
    n1: 4,
    n2: 3.4,
  },
  // student 5
  {
    name: "Chun-li",
    n1: 7,
    n2: 2.2,
  },
];

// função calcular 
function calculation(n1, n2){
  let media = (n1 + n2) / 2; 
  return media
}

//  para um student de students faça
for (let student of students){
  mediaIndividual = calculation(student.n1, student.n2);

  let sumMessage = mediaIndividual < 7 
  ? "Infelizmente não foi dessa vez, Estude mais!" 
  : "Parabéns pela sua Aprovação!";

  alert(`A media do(a) aluno(a) ${student.name} é: ${mediaIndividual} 
${sumMessage}`)
}

// function printStudent(student) {
//   return `
//   A media do(a) aluno(a): ${student.name} é: ${sumMessage}
//   `
// }