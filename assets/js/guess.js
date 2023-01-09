/*
* The guess.js is used by the index.html file to make guess number game work
* The file generate random number and gets input user's number to check is it compares to each other
* guess.js keeps high score and gives possibility to refresh the page
*/

// Create all global variables
let guessBtn = document.querySelector("#check");
let resetBtn = document.querySelector("#reset");
let number = Math.floor(Math.random()*10) + 1;
console.log(number);
let guessInput = document.getElementById('inputNumber');
let highestScore = document.getElementById('high-score');
let message = document.getElementById('message');
let gameImage = document.getElementById('image');
let currentScoreElement = document.getElementById('cur-score');
let atemptsLeftElement = document.getElementById('attempts');

let curScore = 4;
let attemptsLeft = 4;
let highScore = 0;

/**
 * Add Event Listener "DOMContentLoaded" to verify whether a webpage has fully loaded.
 * Inside function passed event listener for "click" or press "Enter" for check input guess button.
 */
document.addEventListener("DOMContentLoaded", function() {
	
    guessBtn.addEventListener('click', checkAnswer);
    
    guessInput.addEventListener('keydown', function(event) {
      if (event.key === "Enter") {
        checkAnswer();
	  }
    })
});

/**
 * checkAnswer function checks if user's input compares to random generated number 
 *  while attempts to find number greater than "0".
 * This function decreases attemptsLeft variable by -1  with every user's input.
 */

function checkAnswer() {
    if (attemptsLeft > 0) {
        --attemptsLeft; 
        atemptsLeftElement.textContent = attemptsLeft;
        let guessNumber = parseInt(guessInput.value);

        if (guessNumber === number) {
            message.textContent = `Correct! I was thinking of ${number}.`
            gameImage.src = "https://media1.giphy.com/media/l2Z84eFooeHJu/giphy.gif?cid=ecf05e47xbrf7nt6dqv3jrbf7jgob0tpj65q4kczdcqw8swq&rid=giphy.gif&ct=g";
            highScore = curScore > highScore ? curScore : highScore;
            highestScore.textContent = highScore;
        } else if (guessNumber === 0 || guessNumber > 10) {
            message.textContent = "Please enter the number from 1 to 10";
            gameImage.src = "https://media3.giphy.com/media/9QrNWBKvBpCw0/giphy.gif?cid=ecf05e4762wdt2o99qe09niyixcqx8i48v9pbv7hdyy40xrg&rid=giphy.gif&ct=g";
            curScore--;
            currentScoreElement.textContent = curScore;
        } else if (guessNumber > number) {
            message.textContent = `Number ${guessNumber} is too high.`;
            gameImage.src = "https://media3.giphy.com/media/0PRjgsFnJIQHlscMip/giphy.gif?cid=ecf05e4705bn3vm3tqkduw6gij0g4ega66vy4431tgpweell&rid=giphy.gif&ct=g";
            curScore--;
            currentScoreElement.textContent = curScore;
        } else {
            message.textContent = `Number ${guessNumber} is too low.`;
            gameImage.src = "https://media3.giphy.com/media/8AlXqy1CZrixGd8OvJ/giphy.gif?cid=ecf05e47z1pxgikm16avzx9dy9v34rzfkfaingrebj7jy5tc&rid=giphy.gif&ct=g";
            curScore--;
            currentScoreElement.textContent = curScore;
        }

    } else {
        message.textContent = "You lost the game.... Try again";
        atemptsLeftElement.textContent = 0;
        gameImage.src = "https://media2.giphy.com/media/ka6M66Z58QEcXadCd4/giphy.gif?cid=ecf05e47d63eubhh0lfp3ahadp4u93dwwien84bjkmc5m6v6&rid=giphy.gif&ct=g"
    }
}