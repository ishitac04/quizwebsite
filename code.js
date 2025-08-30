let currentQ = 0;
const boxes = document.querySelectorAll(".box");
const next = document.querySelector(".nextbutton");
const correct = document.getElementById('correct');
const quizname = document.querySelector(".quizname");
const question = document.querySelector(".titlewrapper");

const questions = [
    "How many dots are on a pair of dice?", "What country has the highest life expectancy?","Who is the ancient Greek god of the Sun?","What is the capital of Spain?","When did WW1 start?"
]
const answers = [
    "Answer1","Answer2","Answer3","Answer4",
    "Answer5","Answer6","Answer7","Answer8",
    "Answer9","Answer10","Answer11","Answer12"
]

function generateQuestion() {
    let questionNumber=Math.floor((Math.random()/2)*10);
    boxes.forEach((box, i) => {
        next.addEventListener("click", () => {
            if (questionNumber==0) {
                question.textContent=questions[questionNumber];
            } else if (questionNumber==1) {
                question.textContent=questions[questionNumber];
            } else if (questionNumber==2) {
                question.textContent=questions[questionNumber];
            } else if (questionNumber==3) {
                question.textContent=questions[questionNumber];
            } else if (questionNumber==4) {
                question.textContent=questions[questionNumber];
            }
        });
    });
}

function myFunction() {
    generateQuestion();
}