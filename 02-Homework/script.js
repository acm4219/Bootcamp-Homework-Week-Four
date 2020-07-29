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
    
    {question : 'What is not a variable type?', 
    answers : ['1. var', '2. let', '3. from', '4. const'], 
    solution :'3. from'},
    
    {question : 'How do you write a variable?', 
    answers : ['1. var examplePrompt = ', '2. var EXAMPLEPROMPT = ', '3. var exampleprompt()', '4. VAR eXaMpLe-ProMPT()'], 
    solution : '1. var examplePrompt'},
    
    {question : 'What is not an object that can be used in a variable?', 
    answers : ['1. Boolean', '2. Number', '3. String', '4. Noodle'], 
    solution: '4. Noodle'},

    {question : 'What is an Array?', 
    answers : ['1. A lot of variables', '2. A List', '3. Magical Psuedocode', '4. A Ray'], 
    solution : "2. A List"},
]

var answerSelection = [];

var timeEl = document.querySelector(".timer");
var secondsLeft = 60;
var submissionButton = document.querySelector(".submit-button");

gameStartButton.addEventListener('click', gameStart);

answersection.addEventListener('click', function(event) {
    event.preventDefault();
    if(event.target.matches("button") && questionIndex <= 3) {
        answerSelection = event.target.getAttribute("data-answer");
        if(questionsAndAnswers[questionIndex].solution === event.target.textContent) {
            //add time to timer maybe a function here
            secondsLeft + 10
            timeEl.textContent = "Timer: " + secondsLeft;
        } else {
            //subtract time maybe a function
            secondsLeft - 10
            timeEl.textContent = "Timer: " + secondsLeft;
        }
        questionAnswerRotation();
    }
});
textElement.addEventListener('click', gameStart);
// submissionButton.addEventListener('click', submitLog)


function gameStart() {
 console.log('start');
 gameStartButton.style.display = 'none';
 textElement.style.display = 'none';
 quizContainer.classList.remove('hide');
 questionAnswerRotation();
 timeTracker();
}


function questionAnswerRotation() {
    //question rotation object make an array of object to rotate
     
    h2.textContent = questionsAndAnswers[questionIndex].question;
    answerButton.textContent = questionsAndAnswers[questionIndex].answers[0];
    answerButton2.textContent = questionsAndAnswers[questionIndex].answers[1];
    answerButton3.textContent = questionsAndAnswers[questionIndex].answers[2];
    answerButton4.textContent = questionsAndAnswers[questionIndex].answers[3];
          
    // function increment() {
    //     if(questionIndex >= 3) {
    //         clearInterval(questionIndex); return;
            
    //     }
       
        
    // }
    questionIndex++;
    // increment();
    console.log(answerSelection)
}


function submitLog() {
 
  window.location.href = 'file:///C:/Users/Alex/Bootcamp-Homework-Week-Four/02-Homework/highscore.html';
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