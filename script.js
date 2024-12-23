'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentActivePlayerScore = 0;
let activePlayerNumber = 0;

// Rolling dice functionality （擲骰子功能）
btnRoll.addEventListener('click', () => {
  // 1. Generate a random dice roll
  const currentDiceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${currentDiceNumber}.png`;

  // 3 Check for rolled 1
  if (currentDiceNumber !== 1) {
    // Add dice to current score
    currentActivePlayerScore += currentDiceNumber;
    document.getElementById(`current--${activePlayerNumber}`).textContent =
      currentActivePlayerScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayerNumber}`).textContent = 0;
    currentActivePlayerScore = 0;
    activePlayerNumber = activePlayerNumber === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
