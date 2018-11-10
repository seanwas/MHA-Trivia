var variableQuestion =
    [
        "Who says 'Never fear, cause I am here?'",
        "What does froggy girl like to be called?",
        "what is Oragami called in MHA?",
        "what is the school called?",
        "What is another name for Bakugo?"
    ]

var variableAnswerOne = ["All Might","Debbie","Two Zone","Proctor","Kachun"]
var variableAnswerTwo= ["Undertaker","Bob","Marcus","UA","Ichiro"]
var variableAnswerThree = ["Barak Obama","Sue","Orbi","Ilion","Goku"]
var variableAnswerFour = ["Barney the Dinosaur","Harry Potter","There is no oragami in MHA","Norte Dame","Bender"]

var CorrectAnswer = [1,3,4,2,1];
var whatNumberAreWeon = 0;

loadQuestion()

document.getElementById("HTMLanswer1").addEventListener("click", answerOneClicked)
document.getElementById("HTMLanswer2").addEventListener("click", answerTwoClicked)
document.getElementById("HTMLanswer3").addEventListener("click", answerThreeClicked)
document.getElementById("HTMLanswer4").addEventListener("click", answerFourClicked)

function changeNumber(){
    whatNumberAreWeon = whatNumberAreWeon +1
    if(whatNumberAreWeon === 5){
        whatNumberAreWeon = 0
        endGame()
    }
}

function endGame(){
    alert("Game Over Man, Game Over")
}



function loadQuestion() {
    document.getElementById('HTMLquestion').innerText = variableQuestion[whatNumberAreWeon]
    document.getElementById('HTMLanswer1').innerText = variableAnswerOne[whatNumberAreWeon]
    document.getElementById('HTMLanswer2').innerText = variableAnswerTwo[whatNumberAreWeon]
    document.getElementById('HTMLanswer3').innerText = variableAnswerThree[whatNumberAreWeon]
    document.getElementById('HTMLanswer4').innerText = variableAnswerFour[whatNumberAreWeon]
    
}

function answerOneClicked() {
    console.log("Answer One Clicked")

    if (CorrectAnswer[whatNumberAreWeon] === 1) {
        alert("correct")
    } else {
        alert('wrong')
    }
    changeNumber()
    loadQuestion() 
}

function answerTwoClicked() {
    console.log("Answer Two Clicked")
    if (CorrectAnswer[whatNumberAreWeon] === 2) {
        alert("correct")
    } else {
        alert('wrong')
    }
    changeNumber()
    loadQuestion() 
}

function answerThreeClicked() {
    console.log("Answer Three Clicked")
    if (CorrectAnswer[whatNumberAreWeon] === 3) {
        alert("correct")
    } else {
        alert('wrong')
    }
    changeNumber()
    loadQuestion() 
}

function answerFourClicked() {
    console.log("Answer Four Clicked")
    if (CorrectAnswer[whatNumberAreWeon] === 4) {
        alert("correct")
    } else {
        alert('wrong')
    }
    changeNumber()
    loadQuestion() 
}