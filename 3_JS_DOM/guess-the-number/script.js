'use strict';

//Creamos las variables globales score y highscore
let score = 20;
let highscore = 0;
let outputMessage = document.querySelector('.message');

//Generamos un numero aleatorio entre 1 y 20
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

//Evento al hacer click en el check
document.querySelector('.check').addEventListener('click', check);

//Evento al hacer click en el boton Again
document.querySelector('.again').addEventListener('click', retryGame);

function retryGame() {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.message').style.color = 'white';
  document.querySelector('body').style.backgroundColor = '#222';
}

function check() {
  let guessedNumber = Number(document.querySelector('.guess').value);

  let isValidNumber = inputValidation(guessedNumber);

  if (isValidNumber) {
    //Que pasa si el numero es valido
    checkResult(guessedNumber);
  } else {
    //Comportamiento cuando el número no es valido
    outputMessage.textContent = 'Introduce un numero del 1 al 20';
    outputMessage.style.color = '#ad3d39';
  }
}

function inputValidation(guessedNumber) {
  if (guessedNumber < 1 || guessedNumber > 20 || isNaN(guessedNumber))
    return false;
  return true;
}

function checkResult(guessedNumber) {
  if (guessedNumber === randomNumber) {
    outputMessage.textContent = 'Has acertado';
    outputMessage.style.color = '#51ad51';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#47b547';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessedNumber < randomNumber) {
    outputMessage.textContent = 'Has fallado. El nº es mas alto';
    outputMessage.style.color = '#51ad51';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    outputMessage.textContent = 'Has fallado. El nº es mas bajo';
    outputMessage.style.color = '#51ad51';
    score--;
    document.querySelector('.score').textContent = score;
  }
}
