const boxes = document.querySelectorAll(".box");
const next = document.querySelector(".nextbutton");
const sparkle = document.getElementById('sparkle');
const wrong = document.getElementById('wrong');
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
let back;
let result;

const questions = [
    "What is your favorite colour?", "What animal describes you best?", "What is your favorite activity?", "How would you best describe yourself?", "What dessert would you want to eat most?"
]
const answers = [
    "Red","Blue","Yellow","Green",
    "Tiger","Dolphin","Eagle","Squirrel",
    "Camping","Swimming","Kite-flying","Hiking",
    "Energetic","Dependable","Impulsive","Kind",
    "Molten Chocolate Cake","Ice Cream","Cookies","Brownies"
]

function generateQuestion() {
    remaining = questions.length - usedQuestions;
    if (remaining === 0) {

        if (0<=score && score<=50) {
            result="Fire"
        } else if (50<score && score<=100) {
            result="Water"
        } else if (100<score && score<=150) {
            result="Air"
        } else if (150<score) {
            result="Earth"
        }

        back = confirm("Your soul element is: "+result+"! Return to homepage?");
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
            
            if (answerclicked==1) {
                score=score+10;
                sparkle.play();
            } else if (answerclicked==2) {
                score=score+20;
                sparkle.play();
            } else if (answerclicked==3) {
                score=score+30;
                sparkle.play();
            } else if (answerclicked==4) {
                score=score+40;
                sparkle.play();
            }
            generateQuestion();
        };
    });
}

next.addEventListener("click", generateQuestion);

generateQuestion();