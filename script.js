'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/* const arrowDown = function (guess) {
  guess--;
};
const arrowUp = function (guess) {
  guess++;
}; */

const doCheck = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('NO');
  } else if (guess === number) {
    displayMessage('Погодио си! :)');
    if (highscore < score) highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    15;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
  } else if (score > 1) {
    displayMessage(guess > number ? 'Превелики' : 'Премали');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.score').textContent = 0;
    displayMessage('Изгубио си');
  }
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', doCheck);

document.addEventListener('keydown', function (e) {
  //console.log(e.code);
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    doCheck();
  }
});

/* document.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowUp') guess++;
  console.log(guess);
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'ArrowDown') guess--;
}); */

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Почни да погађаш..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
