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
var questionIndex = 0
var questionsAndAnswers = [
    {question : 'What is question1?', answers : ['answer1.1', 'answer2.1', 'etc 1.', 'etc4'], solution : 'answer1.1'},
    {question : 'What is question2?', answers : ['answer1.2', 'answer2.2', 'etc 2.', 'etc3'], solution : 'answer1.2'},
    {question : 'What is question3?', answers : ['answer1.3', 'answer2.3', 'etc 3.', 'etc2'], solution: 'answer1.3'},
    {question : 'What is question4?', answers : ['answer1.4', 'answer2.4', 'etc 4.', 'etc1'], solution : "answer1.4"},
]


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
 questionAnswerRotation();
}


function questionAnswerRotation() {
    //question rotation object make an array of object to rotate
    var solution = questionsAndAnswers[questionIndex].solution; 
    var clicked = 
    h2.textContent = questionsAndAnswers[questionIndex].question;
    answerButton.textContent = questionsAndAnswers[questionIndex].answers[0];
    answerButton2.textContent = questionsAndAnswers[questionIndex].answers[1];
    answerButton3.textContent = questionsAndAnswers[questionIndex].answers[2];
    answerButton4.textContent = questionsAndAnswers[questionIndex].answers[3];
    // if(solution === ) {

    // }
    questionIndex++;
}


function submitLog() {
 submitForm.classList.remove('hide'); 
}

function timeTracker() {

}





//answers are in an array, look into ul li activity for this activity 07 look ma no HTML
//make it incremental steps for the array above
//add a correct answer may want to make answers an object too