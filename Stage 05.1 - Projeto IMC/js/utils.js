// função para calcular 
export function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

// essa função sempre vai retornar um boleano true or false
export function notNumber(value) {
  return isNaN(value) || value == ""
 }
