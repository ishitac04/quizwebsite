const boxes = document.querySelectorAll(".box");
const next = document.querySelector(".nextbutton");
const correct = document.getElementById('correct');
const quizname = document.querySelector(".quizname");
const question = document.querySelector(".titlewrapper");
const scoretext = document.querySelector(".score");
const currentanswers = [];
let questionNumber;
let check = 0;
let answerclicked;
let score = 0;
let usedQuestions=0;
let remaining=5;

const questions = [
    "How many dots are on a pair of dice?", "What country has the highest life expectancy?", "Who is the ancient Greek god of the Sun?", "What is the capital of Spain?", "When did WW1 start?"
]
const answers = [
    "42", "20", "24", "21",
    "Hong Kong", "Mexico", "Japan", "Tunisia",
    "Apollo", "Poseidon", "Ares", "Zeus",
    "Madrid", "Valencia", "Barcelona", "Tenerife",
    "1914", "1915", "1934", "1922"
]

function generateQuestion() {
    remaining = questions.length - usedQuestions;
    if (remaining === 0) {
        alert("Out of questions!");
        return;
    }
    questionNumber = Math.floor(Math.random() * remaining)
    question.textContent = questions[questionNumber];

    [questions[questionNumber], questions[remaining - 1]] = [questions[remaining - 1], questions[questionNumber]];

    const start = questionNumber * 4;
    const answerStart = (remaining - 1) * 4;
    for (let i = 0; i < 4; i++) {
        [answers[start + i], answers[answerStart + i]] = [answers[answerStart + i], answers[start + i]];
    }

    question.textContent = questions[remaining - 1];
    for (let i = 0; i < 4; i++) {
        boxes[i].textContent = answers[answerStart + i];
    }

    usedQuestions++;
}

next.addEventListener("click", generateQuestion);

generateQuestion();