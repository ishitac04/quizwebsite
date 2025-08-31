const boxes = document.querySelectorAll(".box");
const next = document.querySelector(".nextbutton");
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const quizname = document.querySelector(".quizname");
const question = document.querySelector(".titlewrapper");
const scoretext = document.querySelector(".score");
const currentanswers = [];
const correctanswers = ["42","Hong Kong","Apollo","Madrid","1914"]
let questionNumber;
let check = 0;
let answerclicked;
let score = 0;
let usedQuestions=0;
let remaining=5;
let back;

const questions = [
    "How many dots are on a pair of dice?", "What country has the highest life expectancy?", "Who is the ancient Greek god of the Sun?", "What is the capital of Spain?", "When did WW1 start?"
]
const answers = [
    "21","20","24","42",
    "Japan","Mexico","Hong Kong","Tunisia",
    "Zeus","Poseidon","Ares","Apollo",
    "Valencia","Madrid","Barcelona","Tenerife",
    "1915","1914","1934","1922"
]

function generateQuestion() {
    remaining = questions.length - usedQuestions;
    if (remaining === 0) {
        back = confirm("Out of questions! Score: "+score+". Return to homepage?");
            if (back) {
                window.location.href = "index.html";
            } else {
                location.reload();
            }
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
    boxes.forEach((box, i) => {
        box.onclick = () => {
            answerclicked = i + 1;
            for (i=0; i<correctanswers.length;i++) {
                if (box.textContent === correctanswers[i]) {
                    correct.play();
                    score++;
                    scoretext.textContent = "Score: " + score;
                } else {
                wrong.play();
            }
            }
            generateQuestion();
        };
    });
}

next.addEventListener("click", generateQuestion);

generateQuestion();