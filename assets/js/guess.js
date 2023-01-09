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
	  };
    })
});