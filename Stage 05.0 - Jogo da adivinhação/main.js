function handleClick(event) {
  event.preventDefault();  // deixar o evento padrão sem carregar a pagina
  const inputNumber = document.querySelector("#inputNumber");
  console.log(inputNumber.value);
}