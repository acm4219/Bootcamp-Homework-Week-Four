var gameStartButton = document.getElementById("quiz-start");
var answersection = document.getElementById("answersection");
var answerButton = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");
var textElement = document.getElementById('text');
var quizContainer = document.querySelector(".quizsection");
var submitForm = document.querySelector(".submitform");



gameStartButton.addEventListener('click', gameStart);
answerButton.addEventListener('click', questionAnswerRotation);
answerButton2.addEventListener('click', questionAnswerRotation);
answerButton3.addEventListener('click', questionAnswerRotation);
answerButton4.addEventListener('click', questionAnswerRotation);
textElement.addEventListener('click', gameStart);



function gameStart() {
 console.log('start');
 gameStartButton.style.display = 'none';
 textElement.style.display = 'none';
 quizContainer.classList.remove('hide');
 submitForm.classList.add('hide');
}


function questionAnswerRotation() {
    //question rotation object make an array of object to rotate
    
}


function submitLog() {
 submitForm.classList.remove('hide'); 
}

function timeTracker() {

}



var questionsAndAnswers = [
    {question : 'What is question?', answers : ['answer1', 'answer2', 'etc.', 'etc'], solution : 'answer1'},
    {question : 'What is question?', answers : ['answer1', 'answer2', 'etc.', 'etc'], solution : 'answer1'},
    {question : 'What is question?', answers : ['answer1', 'answer2', 'etc.', 'etc'], solution: 'answer1'},
    {question : 'What is question?', answers : ['answer1', 'answer2', 'etc.', 'etc'], solution : "answer1"},
]

//answers are in an array, look into ul li activity for this activity 07 look ma no HTML
//make it incremental steps for the array above
//add a correct answer may want to make answers an object too