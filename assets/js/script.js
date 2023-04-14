var multiplechoiceEl = document.getElementById ("multiple-choice")
multiplechoiceEl.style.display = "none"
var timerEL = document.querySelector(".timer")
var timerObject;
var timerCounter = 50;
var startButtonEL = document.getElementById ("start-button")

startButtonEL.addEventListener("click", function(){
    timerObject = setInterval(function(){
        timerEL.innerText = "Time Left: "+timerCounter //49 on 
        if(timerCounter > 0){
            timerCounter--//48 timerCounter =timerCounter-1
        }
    },1000)
    multiplechoiceEl.style.display = "block"
    startButtonEL.style.display = "none"
})

var questionsList = [
    {
        question:"what is html?",
        choices:["opt1","opt2","opt3",'opt4'],
        correct:"opt1"
    
    }
]




