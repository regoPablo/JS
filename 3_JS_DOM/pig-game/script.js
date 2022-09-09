'use strict';

let currentScore = 0;
let activePlayer = 0;
let playerScore = [0, 0];

//Inicio
init();

//Evento Roll Dice
document.querySelector('.btn--roll').addEventListener('click', rollDice);
//Evento Hold
document.querySelector('.btn--hold').addEventListener('click', hold);
//Evento new game
document.querySelector('.btn--new').addEventListener('click', init);

//Funcion que lleva el juego al estado inicial
function init() {
  currentScore = 0;
  activePlayer = 0;
  playerScore = [0, 0];
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  document.querySelector('.player--0').classList.add('player--active');
}

function rollDice() {
  let diceNumber = Math.floor(Math.random() * 6) + 1;

  //Mostramos el dado que sacamos
  document.querySelector('.dice').setAttribute('src', `dice-${diceNumber}.png`);
  document.querySelector('.dice').style.display = 'block';

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Cambiamos de jugador
    playerSwitch();
  }
}

function hold() {
  playerScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    playerScore[activePlayer];

  if (playerScore[activePlayer] >= 50) {
    //Gandor
    console.log('ganador');
    document.getElementById(`name--${activePlayer}`).textContent = 'WINNER 🥳';
  } else {
    playerSwitch();
  }
}

function playerSwitch() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  if (activePlayer === 0) {
    activePlayer = 1;
    toggle();
  } else {
    activePlayer = 0;
    toggle();
  }
}

function toggle() {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}
