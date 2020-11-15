var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var submitScoreBtn = document.getElementById("submitScore");
var endGameBtns = document.getElementById("endGameBtns");

    var quizQuestions = [{
        question: "How many months are there in a year?",
        choiceA: "7 months",
        choiceB: "12 months",
        choiceC: "10 months",
        choiceD: "8 months",
        correctAnswer: "b"},

    {
        question: "How many minutes are there in an hour?",
        choiceA: "50 minutes",
        choiceB: "70 minutes",
        choiceC: "80 minutes",
        choiceD: "60 minutes",
        correctAnswer: "d"},

    {    
        question: "How many kilometers are there in a mile?",
        choiceA: "1.6 kilometers",
        choiceB: "2.2 kilometers",
        choiceC: "2.8 kilometers",
        choiceD: "1.5 kilometers",
        correctAnswer: "a"},    

    {
        question: "How many pounds are there in a stone?",
        choiceA: "5 pounds",
        choiceB: "7 pounds",
        choiceC: "14 pounds",
        choiceD: "19 pounds",
        correctAnswer: "c"},];   

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 60;
var timerInterval;
var score = 0;
var correct;


function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
};

function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("True!");
        currentQuestionIndex++;
        generateQuizQuestion();
        
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("False!")
        currentQuestionIndex++;
        generateQuizQuestion();
        
    }else{
        showScore();
    }
}


function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

function replayQuiz(){
    highscoreContainer.style.display = "none";
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    timeLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
}
        

startQuizButton.addEventListener("click",startQuiz);