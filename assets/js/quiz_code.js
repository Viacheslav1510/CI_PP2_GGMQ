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
/** showQuestion function gets data from "const quiz" and shows question with questionIndex variable.
 * This function uses the loop to show answers 
 * 
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