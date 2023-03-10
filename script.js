'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'ð Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 55;
// console.log(document.querySelector('.guess').value);

// Variable Definations
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('âNo number!');
    // document.querySelector('.message').textContent = 'âNo number!';
    // When the input is not in the given number range
  } else if (guess < 0 || guess > 20) {
    displayMessage('ðYou must enter a number between 1 and 20!');
    // When input is same
  } else if (guess === secretNumber) {
    displayMessage('ð Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When input is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'ð Too high!' : 'ð Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('ð®Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// When you clicked again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');

  document.querySelector('.guess').disabled = false;
});
