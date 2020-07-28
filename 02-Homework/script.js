var gameStartButton = document.getElementById("quiz-start");

var answersection = document.getElementById("answersection");
var answerButton = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");

var textElement = document.getElementById('text');

var quizContainer = document.querySelector(".quizsection");

var submitForm = document.querySelector(".submitform");

var h2 = document.querySelector(".question"); 
var questionIndex = 0;
var questionsAndAnswers = [
    {question : 'What is not a variable type?', answers : ['var', 'let', 'from', 'const'], solution : 'from'},
    {question : 'How do you write a variable?', answers : ['var examplePrompt = ', 'var EXAMPLEPROMPT = ', 'var exampleprompt()', 'VAR eXaMpLe-ProMPT()'], solution : 'var examplePrompt'},
    {question : 'What is not an object that can be used in a variable?', answers : ['Boolean', 'Number', 'String', 'Noodle'], solution: 'Noodle'},
    {question : 'What is an Array?', answers : ['A List', 'A lot of variables', 'Magical Psuedocode', 'A Ray'], solution : "A List"},
]


var timeEl = document.querySelector(".timer");
var secondsLeft = 10;
var submissionButton = document.querySelector(".submit-button");

gameStartButton.addEventListener('click', gameStart);
answerButton.addEventListener('click', questionAnswerRotation);
answerButton2.addEventListener('click', questionAnswerRotation);
answerButton3.addEventListener('click', questionAnswerRotation);
answerButton4.addEventListener('click', questionAnswerRotation);
textElement.addEventListener('click', gameStart);
// submissionButton.addEventListener('click', submitLog)


function gameStart() {
 console.log('start');
 gameStartButton.style.display = 'none';
 textElement.style.display = 'none';
 quizContainer.classList.remove('hide');
 submitForm.classList.add('hide');
 questionAnswerRotation();
 timeTracker();
}


function questionAnswerRotation() {
    //question rotation object make an array of object to rotate
    // var solution = questionsAndAnswers[questionIndex].solution; 
    // var clicked = 
    h2.textContent = questionsAndAnswers[questionIndex].question;
    answerButton.textContent = questionsAndAnswers[questionIndex].answers[0];
    answerButton2.textContent = questionsAndAnswers[questionIndex].answers[1];
    answerButton3.textContent = questionsAndAnswers[questionIndex].answers[2];
    answerButton4.textContent = questionsAndAnswers[questionIndex].answers[3];
    // if(solution === ) {

    // }
   
    function increment() {
        if(questionIndex >= 3) {
            clearInterval(questionIndex); return;
        }
        questionIndex++;
    }

    increment();
    // submitLog();
}


function submitLog() {
 submitForm.classList.remove('hide'); 
//  window.location.href = 'file:///C:/Users/Alex/Bootcamp-Homework-Week-Four/02-Homework/highscore.html';
}

function timeTracker() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          quizContainer.classList.add('hide');
          submitLog();
        }
    
      }, 1000);
}






//answers are in an array, look into ul li activity for this activity 07 look ma no HTML
//make it incremental steps for the array above
//add a correct answer may want to make answers an object too