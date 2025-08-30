const boxes = document.querySelectorAll(".box");
const next = document.querySelector(".nextbutton");
const correct = document.getElementById('correct');
const quizname = document.querySelector(".quizname");
const question = document.querySelector(".titlewrapper");
const scoretext = document.querySelector(".score");
const currentanswers = [];
let questionNumber;
let check=0;
let answerclicked;
let score=0;

const questions = [
    "How many dots are on a pair of dice?", "What country has the highest life expectancy?","Who is the ancient Greek god of the Sun?","What is the capital of Spain?","When did WW1 start?"
]
const answers = [
    "21","20","24","42",
    "Japan","Mexico","Hong Kong","Tunisia",
    "Zeus","Poseidon","Ares","Apollo",
    "Valencia","Madrid","Barcelona","Tenerife",
    "1915","1914","1934","1922"
]

function generateQuestion() {
    questionNumber = Math.floor(Math.random() * questions.length);
    question.textContent = questions[questionNumber];

    if (questions.length==0){
        alert("out of questions!")
    }

    const currentanswers = answers.splice(questionNumber * 4, 4);
    const questionText = questions.splice(questionNumber, 1)[0];
    currentanswers.forEach((ans, i) => boxes[i].textContent = ans);


    const n = questionNumber * 4;
    boxes.forEach((box, i) => {
        box.textContent = currentanswers[i];
    });

    boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
    answerclicked=i+1;
    if (questionNumber==0) {
        if (answerclicked==4) {
            score=score+1;
            scoretext.textContent="Score: "+score;
            generateQuestion();
        }
    } else if (questionNumber==1) {
        if (answerclicked==3) {
            score=score+1;
            scoretext.textContent="Score: "+score;
            generateQuestion();
        }
    } else if (questionNumber==2) {
        if (answerclicked==4) {
            score=score+1;
            scoretext.textContent="Score: "+score;
            generateQuestion();
        }
    } else if (questionNumber==3) {
        if (answerclicked==2) {
            score=score+1;
            scoretext.textContent="Score: "+score;
            generateQuestion();
        }
    } else if (questionNumber==4) {
        if (answerclicked==2) {
            score=score+1;
            scoretext.textContent="Score: "+score;
            generateQuestion();
        }
    }
  });
});
}

next.addEventListener("click", generateQuestion);

generateQuestion();