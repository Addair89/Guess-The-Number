'use strict';
/*console.log(document.querySelector('.message').textContent); //this first selects the element. Then we get the text value.

//sam as above. BUt now i can change the value/text content. I could put this into a fi/else block or a function to change the value based on a conditon. Like if they guessed the right number.
document.querySelector('.message').textContent = '🎉 Correct Number!';

//getting and settting the value of the 'hidden' number
document.querySelector('.number').value = 13;
console.log(document.querySelector('.number').value);

//getting and setting the value of the 'scor'
document.querySelector('.score').textContent = 20;
document.querySelector('.score').value = 29;

//getting the value of the guess from the player.
document.querySelector('.guess').value = 50;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  ////WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('Please enter a Number');

    //When PLayer Wins/////
  } else if (guess === secretNumber) {
    displayMessage('✅ You cheated huh?');
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    ///when guess is wrong... DRY VERSION OF IF ELSE DOWN BELOW
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⏬ Lower' : '⏫ Higher');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('🤯 You lost the game');
    }
  }
  //   ///WHEN PLAYER GUESSES TO HIGH
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⏬ Lower';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = ' 🤯 You lost the game';
  //     }

  //     ////WHEN PLAYER GUESSES TOO LOW
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '⏫ Higher';
  //       score -= 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = '🤯 You lost the game';
  //     }
  //   }
});

///PLAY AGAIN EVENT BTN
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  if (score > highScore) {
    highScore = score;
  }
});
