var multiplechoiceEl = document.getElementById("multiple-choice") // creates variable for multiple choice container and referenced to html element by get element by id method.
multiplechoiceEl.style.display = "none" //hides multiple choice 
var timerEL = document.querySelector(".timer") // creates variable and stores timer class reference within it.
var timerObject; // creates timerObject variable
var timerCounter = 50; //creates timer counter of 50 seconds
var startButtonEL = document.getElementById("start-button") //creates a variable for start button and retrieves reference to related html element and is stored within that variable
var highScoreformEL = document.getElementById("high-score-form") //creates element for high score form
var answerAlertEL = document.getElementById("alert-answer") //creates variable for an alert regarding the right or wrong answer
highScoreformEL.style.display="none" //hides high score form

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
// ^creates a list of questions for the quiz and their answers, plus specifies the correct answer


var questionIndex = 0;
var questionEl = document.getElementById("question");
var choiceButtons = document.querySelectorAll("#multiple-choice button");
var score = 0;
var scoreDispEl = document.getElementById("score-display")
function populateQuestion() {
    questionEl.textContent = questionsList[questionIndex].question;
    for (var i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = questionsList[questionIndex].choices[i];
    }

}
// this creates a function to populate the html multiple choice section with the data from the question list variable

for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", function () {
        if (this.textContent === questionsList[questionIndex].correct) {
            score++;
            answerAlertEL.textContent = "Correct"
        } else {
            timerCounter -= 5
            answerAlertEL.textContent = "Incorrect" // knocks score down by 5 if incorecct answer givin

        }
        setTimeout(function(){
            answerAlertEL.textContent = ""

        },1000) //creates a limited window for alert message to appear. 
        questionIndex++;
        if (questionIndex === questionsList.length) {
            endQuiz();
        } else {
            populateQuestion(); 
        } // manages whether to move on to then ext question or end the quiz based on the number of questions left

    });
}


function endQuiz() {
    clearInterval(timerObject);
    multiplechoiceEl.style.display = "none";
    highScoreformEL.style.display = "block";
    document.getElementById("score-display").innerText = "Your score is:" + timerCounter
}//ends the quiz and shows the final score

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
}); // starts the quiz and displays the mutiple choice quiz and hides the start button



document.getElementById("save-user-score").addEventListener("click",function(){
    var user = document.getElementById("user-input").value
    var scoreBoard = JSON.parse(localStorage.getItem("codeQuiz")) || []
    scoreBoard.push({
        user:user,
        score: timerCounter + score
    })
    localStorage.setItem("codeQuiz",JSON.stringify(scoreBoard))

})//saves a players score and name to local storage