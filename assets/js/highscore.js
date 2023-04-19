var scoreBoard = JSON.parse(localStorage.getItem("codeQuiz")) || [] //breaks down the data in local storage assigns to scoreboard variable.
var buttonsHTML =""
for(let i=0;i<scoreBoard.length;i++){
    buttonsHTML += `<tr><td>${scoreBoard[i].user}</td>
    <td>${scoreBoard[i].score}</td></tr>`
//creates html code for being displayed in table form
}

document.getElementById("score-data").innerHTML = buttonsHTML