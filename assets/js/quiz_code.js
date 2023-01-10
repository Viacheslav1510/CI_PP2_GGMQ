let score = 0;
let questionIndex = 0;
let percentage = 0;
let shuffledQuestions;
let questionContainer = document.getElementById('question');
let answersContainer = document.getElementById('answer');
let submitBtn = document.getElementById('submit');
let currentScoreQuiz = document.getElementById('cur-score');
let progressBar = document.getElementById('progress-line');
let quizGameContainer = document.querySelector('.quiz-game');

showQuestion();
submitBtn.onclick = checkAnswer;

/** 
 * showQuestion function gets data from "const quiz" and shows question with questionIndex variable.
 * This function uses the loop to show answers. 
 */
function showQuestion() {
    questionContainer.innerHTML = quiz[questionIndex].question;

    let answer = '';
    for (key of quiz[questionIndex].answers ) {
        answer += `<li>
                      <label>
                        <input data-answer="${key}" type="radio" name="answer" class="answer">
                        <span>${key}</span>
                      </label>
                   </li>`;    
    }

    answersContainer.innerHTML = answer;
}

/**
 *  checkAnswer function uses checked radio button to compare user's answer with correct answer.
 *  it increases question index and update progress bar with each submit.
 *  function increases score with every matched answer.
 *  function shows alert when user didn't select answer. 
 */
function checkAnswer() {
    let selectedAnswer = answersContainer.querySelector('input[type="radio"]:checked');

    if (!selectedAnswer){
        alert("Please select answer");
        return;
    }

    let userAnswer = selectedAnswer.getAttribute("data-answer");
    let correctAnswer = quiz[questionIndex].correct_answer;
    
    if (userAnswer === correctAnswer){
        score++;
        currentScoreQuiz.innerHTML = score;
    }

    if (questionIndex !== quiz.length - 1) {
        questionIndex++;
        showQuestion();
    } else {
        clearHtml();
        showResult();
    }
}

/**
 * clearHtml function clears question amd answers container to show result.
 */
function clearHtml() {
    document.getElementById('question').innerHTML = '';
    document.getElementById('answer').innerHTML = '';
}

/**
 * showResult function gets score value and shows message relatively to it's score.
 */
function showResult() {
    let resultMessage;

    if (score === 10) {
        resultMessage = "AMAZING! You're computer GURU."
    } else if (score < 5) {
        resultMessage = "I know you can better"
    } else {
        resultMessage = "Wow, it's good! Could you beat your result?"
    }

    let resultContent = `
            <h2> Finish! You scored ${score}/10</h2>
            <p>${resultMessage}</p>
    `

    quizGameContainer.style.textAlign = "center"
    questionContainer.innerHTML = resultContent;
    submitBtn.textContent = "Play Again";
    submitBtn.onclick = () => history.go();
}