let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

// o botão quando colocar um evento de click nele,
// ele vai executar uma função arrow;
buttonToggle.addEventListener('click', (event) => {
  // adicionar a classe do light no html
  document.documentElement.classList.toggle('light')

  // se o darkMode for true ele é light se não é dark;
  const mode = darkMode ? 'light' : 'dark'
  // evento é para pegar o botão, e procurar o span e sobre escrever;
  event.currentTarget
  .querySelector('span').textContent = `${mode} mode ativado!`

  // o valor do darkMode tem que ser alterado para false
  darkMode = !darkMode
})