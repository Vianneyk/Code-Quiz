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
        correctAnswer: "B"},

    {
        question: "How many minutes are there in an hour?",
        choiceA: "50 minutes",
        choiceB: "70 minutes",
        choiceC: "80 minutes",
        choiceD: "60 minutes",
        correctAnswer: "D"},

    {    
        question: "How many kilometers are there in a mile?",
        choiceA: "1.6 kilometers",
        choiceB: "2.2 kilometers",
        choiceC: "2.8 kilometers",
        choiceD: "1.5 kilometers",
        correctAnswer: "A"},    

    {
        question: "How many pounds are there in a stone?",
        choiceA: "5 pounds",
        choiceB: "7 pounds",
        choiceC: "14 pounds",
        choiceD: "19 pounds",
        correctAnswer: "C"},];   


        

startQuizButton.addEventListener("click",startQuiz);