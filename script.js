// DOM ELEMENTS

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const restartButton = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");

const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");

const scoreSpan = document.getElementById("score");

const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");

const resultMessage = document.getElementById("result-message");

const progressBar = document.getElementById("progress");


// SPORTS QUESTIONS

const quizQuestions = [

  {
    question: "Which country won the FIFA World Cup in 2022?",
    answers: [
      { text: "Brazil", correct: false },
      { text: "Argentina", correct: true },
      { text: "Germany", correct: false },
      { text: "Spain", correct: false },
    ],
  },

  {
    question: "How many players are on the court for one basketball team?",
    answers: [
      { text: "4", correct: false },
      { text: "5", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ],
  },

  {
    question: "Which sport uses wickets and a bat?",
    answers: [
      { text: "Baseball", correct: false },
      { text: "Golf", correct: false },
      { text: "Cricket", correct: true },
      { text: "Tennis", correct: false },
    ],
  },

  {
    question: "Who is called 'King James'?",
    answers: [
      { text: "Michael Jordan", correct: false },
      { text: "LeBron James", correct: true },
      { text: "Stephen Curry", correct: false },
      { text: "Kobe Bryant", correct: false },
    ],
  },

  {
    question: "Which country is famous for cricket?",
    answers: [
      { text: "India", correct: true },
      { text: "Canada", correct: false },
      { text: "Italy", correct: false },
      { text: "Mexico", correct: false },
    ],
  },

];


// QUIZ VARIABLES

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;


// TOTAL QUESTIONS

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;


// BUTTON EVENTS

startButton.addEventListener("click", startQuiz);

restartButton.addEventListener("click", restartQuiz);


// START QUIZ

function startQuiz() {

  currentQuestionIndex = 0;
  score = 0;

  scoreSpan.textContent = score;

  startScreen.classList.remove("active");

  quizScreen.classList.add("active");

  showQuestion();
}


// SHOW QUESTION

function showQuestion() {

  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent =
    (currentQuestionIndex / quizQuestions.length) * 100;

  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {

    const button = document.createElement("button");

    button.textContent = answer.text;

    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);

  });

}


// SELECT ANSWER

function selectAnswer(event) {

  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;

  const isCorrect =
    selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {

    if (button.dataset.correct === "true") {

      button.classList.add("correct");

    } else if (button === selectedButton) {

      button.classList.add("incorrect");

    }

  });

  if (isCorrect) {

    score++;

    scoreSpan.textContent = score;

  }

  setTimeout(() => {

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {

      showQuestion();

    } else {

      showResults();

    }

  }, 1000);

}


// SHOW RESULTS

function showResults() {

  quizScreen.classList.remove("active");

  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage =
    (score / quizQuestions.length) * 100;

  if (percentage === 100) {

    resultMessage.textContent =
      "🏆 MVP Performance!";

  } else if (percentage >= 80) {

    resultMessage.textContent =
      "🔥 Amazing Sports Knowledge!";

  } else if (percentage >= 60) {

    resultMessage.textContent =
      "👏 Great effort athlete!";

  } else if (percentage >= 40) {

    resultMessage.textContent =
      "💪 Keep training champion!";

  } else {

    resultMessage.textContent =
      "📚 Practice more and come back stronger!";

  }

}


// RESTART QUIZ

function restartQuiz() {

  resultScreen.classList.remove("active");

  startQuiz();

}