let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const tryButton = document.querySelector(`#tryButton`)
const resetButton = document.querySelector(`#resetButton`)



/*Adiciona o evento de pressionar a tecla Enter ao campo de entrada*/
document.querySelector('#inputNumber').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    handleTryClick(event);
  }
});



/*Funções callback*/
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector(`#inputNumber`)

  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector(`.screen1`).classList.add(`hide`)
    document.querySelector(`.screen2`).classList.remove(`hide`)

    document
    .querySelector(`.screen2 h2`)
    .innerText = `Você acertou em ${xAttempts} tentativas`
  }

  xAttempts++
  inputNumber.value = ''; // Limpa o campo de entrada
  inputNumber.focus(); // Coloca o foco de volta no campo de entrada
}

function handleResetClick () {
  document.querySelector(`.screen2`).classList.add(`hide`)
  document.querySelector(`.screen1`).classList.remove(`hide`)
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}




/*Eventos*/
tryButton.addEventListener(`click`, handleTryClick)
resetButton.addEventListener(`click`, handleResetClick)



document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})





