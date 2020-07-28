var returnToQuiz = document.querySelector(".return-to-quiz");
var quizClear = document.querySelector(".clear-scores");
var submitForm = document.querySelector(".submitform")
quizClear.addEventListener('click', clearScore);
returnToQuiz.addEventListener('click', returnToMain);
submitForm.addEventListener('click', sumbitScore )


function sumbitScore(){
    submitForm.classList.add('hide');
};

function returnToMain() {
    window.location.href = 'file:///C:/Users/Alex/Bootcamp-Homework-Week-Four/02-Homework/index.html'
   }

function clearScore() {

}