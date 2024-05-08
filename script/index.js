document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1; // 1 dan 20 gacha tasodifiy son olish
    let score = 10; // boshlang'ich hisob
    let highscore = 0; // eng yuqori hisob
    const numberDisplay = document.querySelector('.number');
    const messageDisplay = document.querySelector('.message');
    const scoreDisplay = document.querySelector('.label .score');
    const highscoreDisplay = document.querySelector('.label-highscore .highscore');
    const guessInput = document.querySelector('.guess');
    const checkBtn = document.querySelector('.check');
    const againBtn = document.querySelector('.again');
  
    function displayMessage(message) {
      messageDisplay.textContent = message;
    }
  
    checkBtn.addEventListener('click', () => {
      const guess = parseInt(guessInput.value);
  
      // Check if the input is valid
      if (!guess || guess < 1 || guess > 20) {
        displayMessage('Iltimos, 1 dan 20 gacha raqam kiriting!');
      } else {
        // Check the guess
        if (guess === randomNumber) {
          // Win
          displayMessage('Tabriklayman! Tug\'ri topdingiz!');
          numberDisplay.textContent = randomNumber;
          document.body.style.backgroundColor = '#60b347';
          // Update highscore if necessary
          if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
          }
        } else {
          // Wrong guess
          if (score > 1) {
            displayMessage(guess < randomNumber ? '📉 Xato! Raqam kattaroq.' : '📈 Xato! Raqam kichikroq.');
            score--;
            scoreDisplay.textContent = score;
          } else {
            displayMessage('😔 Siz yutqazdingiz! Yana bir urinish uchun "Qayta urinish!" tugmasini bosing.');
            scoreDisplay.textContent = 0;
          }
        }
      }
    });
  
    againBtn.addEventListener('click', () => {
      score = 10;
      scoreDisplay.textContent = score;
      randomNumber = Math.floor(Math.random() * 20) + 1;
      numberDisplay.textContent = '?';
      guessInput.value = '';
      document.body.style.backgroundColor = '#222';
      displayMessage('Iltimos, 1 dan 20 gacha raqam kiriting!');
    });
  });
  