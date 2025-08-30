const boxes = document.querySelectorAll(".box");
const next = document.querySelector(".nextbutton");
const correct = document.getElementById('correct');
const quizname = document.querySelector(".quizname");
const question = document.querySelector(".titlewrapper");
const currentanswers = []
let questionNumber;

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
    const n = questionNumber * 4;
    const currentanswers = answers.slice(n, n + 4);

    boxes.forEach((box, i) => {
        box.textContent = currentanswers[i];
    });
}

next.addEventListener("click", generateQuestion);

generateQuestion();

function generateAnswers() {
    for (let a = 0; a < answers.length; a++) {
        n=questionNumber*4;
        console.log(n)
        if (n<=a && a<n+4) {
            console.log("In loop")
            currentanswers.push(answers[a]);
            console.log(currentanswers);
        }
    }
    currentanswers=[]
}