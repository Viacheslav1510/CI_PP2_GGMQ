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
    });
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
            message.textContent = `Correct! I was thinking of ${number}.`;
            gameImage.src = "assets/images/guess-right.webp";
            highScore = curScore > highScore ? curScore : highScore;
            highestScore.textContent = highScore;
            guessInput.remove();
            guessBtn.remove();
        } else if (guessNumber <= 0 || guessNumber > 10 || isNaN(guessNumber)) {
            message.textContent = "Please enter the number from 1 to 10";
            gameImage.src = "assets/images/guess-please.webp";
            curScore--;
            currentScoreElement.textContent = curScore;
        } else if (guessNumber > number) {
            message.textContent = `Number ${guessNumber} is too high.`;
            gameImage.src = "assets/images/guess-high.webp";
            curScore--;
            currentScoreElement.textContent = curScore;
        } else {
            message.textContent = `Number ${guessNumber} is too low.`;
            gameImage.src = "assets/images/guess-low.webp";
            curScore--;
            currentScoreElement.textContent = curScore;
        }

    } else {
        message.textContent = "You lost the game.... Try again";
        atemptsLeftElement.textContent = 0;
        gameImage.src = "assets/images/guess-lose.webp";
    }

    guessInput.value = '';
}

/**
 * resetBtn.addEventListener uses Reset Button for reset game and memorize high score.
 */
resetBtn.addEventListener('click', function() {
    number = Math.floor(Math.random()*10) + 1;
    curScore = 4;
    attemptsLeft = 4;
    message.textContent = "Guess the number between 1 and 10";
    currentScoreElement.textContent = curScore;
    atemptsLeftElement.textContent = attemptsLeft;
    guessInput.value = '';
    gameImage.src = "assets/images/guess-start.webp";
    document.querySelector('guess')[0].parentNode.insertBefore(guessInput, document.querySelector('guess')[0].nextElementSibling );
    guessInput.parentNode.insertBefore(guessBtn, guessInput.nextElementSibling);
});