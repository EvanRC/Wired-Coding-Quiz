var multiplechoiceEl = document.getElementById("multiple-choice")
multiplechoiceEl.style.display = "none"
var timerEL = document.querySelector(".timer")
var timerObject;
var timerCounter = 50;
var startButtonEL = document.getElementById("start-button")

var answerAlertEL = document.getElementById("alert-answer")

var questionsList = [
    {
        question: "what does HTML stand for?",
        choices: ["HyperText Markup Language", "Hot Tamale Lemonade", "Hyperlooop Testing Material", "happy TreeHouse Living"],
        correct: "HyperText Markup Language"

    },
    {
        question: "What does CSS stand for?",
        choices: ["Crazy superb snacks", "Continental Style Sandwhiches", "Cascading Style Sheets", "Cascade SKi Snow-Shop"],
        correct: "Cascading Style Sheets"
    },
    {
        question: "What is JavaScript?",
        choices: ["A coffeee shop", "A legendary play script", "An infectious disease", "A scriptive programming language"],
        correct: "A scriptive programming language"
    },
    {
        question: "What is the DOM?",
        choices: ["The lead guy from fast and furious", "A weapon", "Decimal Only Math", "Document Object Model"],
        correct: "Document Object Model"
    },
    {
        question: "What is a for loop?",
        choices: ["A racetrack", "A programming tool to complete a set of instructions a fixed amout of times", "A type of knot", "A math equation often used in quantum physics"],
        correct: "A programming tool to complete a set of instructions a fixed amout of times"

    }

];


var questionIndex = 0;
var questionEl = document.getElementById("question");
var choiceButtons = document.querySelectorAll("#multiple-choice button");
var score = 0;

function populateQuestion() {
    questionEl.textContent = questionsList[questionIndex].question;
    for (var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = questionsList[questionIndex].choices[i];
    }

}

for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function () {
        if (this.textContent === questionsList[questionIndex].correct) {
            score++;
            answerAlertEL.textContent = "Correct"
        } else {
            timerCounter -= 5
            answerAlertEL.textContent = "Incorrect"

        }
        setTimeout(function(){
            answerAlertEL.textContent = ""

        },1000)
        questionIndex++;
        if (questionIndex === questionsList.length) {
            endQuiz();
        } else {
            populateQuestion();
        }

    });
}

function updateScore() {
    var scoreEl = document.createElement("div");
    scoreEl.textContent = "Score: " + score;
    scoreEl.classList.add("score");
    document.body.appendChild(scoreEl);
}

function endQuiz() {
    clearInterval(timerObject);
    multiplechoiceEl.style.display = "none";
    updateScore();
}

startButtonEL.addEventListener("click", function () {
    timerObject = setInterval(function () {
        timerEL.innerText = "Time Left: " + timerCounter;
        if (timerCounter > 0) {
            timerCounter--;
        } else {
            endQuiz();
        }
    }, 1000);
    populateQuestion();
    multiplechoiceEl.style.display = "block";
    startButtonEL.style.display = "none";
});



