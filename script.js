'use strict';

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling dice functionality （擲骰子功能）
btnRoll.addEventListener('click', () => {
  // 1. Generate a random dice roll
  const currentDiceNumber = Math.trunc(Math.random() * 6) + 1;
});
