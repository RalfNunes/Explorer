const students = [
  // student 1
  {
    name: "Rafael",
    n1: 10,
    n2: 10,
    media: []
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
  return ((n1 + n2) / 2).toFixed(2);
}

function printStudent(student) {
  return `
  A media do(a) aluno(a): ${student.name} é: ${calculation(student.n1, student.n2)}
  
  `
}

//  para um student de students faça
for (let student of students){
  let sumMessage = printStudent(student);
  alert(sumMessage);
}
