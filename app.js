const quizData = [
    {
        question : 'Who are you?',
        a : 'Dinda Maylinda Sari',
        b : 'The cutest person on the planet',
        c : 'Orang paling wangi se alam semesta',
        d : 'Semuanya Benar',
        correct : 'd'
    },{
        question : "Who do you want to be with for the rest of your life?",
        a : 'Vian',
        b : 'Vito Ananda',
        c : 'Vito Rizqi Ananda',
        d : 'Semuanya Benar',
        correct : 'd'
    },{
        question : "Who Is Vian's Favorite Person",
        a : 'Dinda',
        b : 'Dinda Maylinda Sari',
        c : '@dindamylns on instagram',
        d : 'Semuanya Benar',
        correct : 'd'
    },{
        question : 'When Does Vian Feel Very Happy?',
        a : 'When He Meets With Dinda',
        b : 'When Dinda Calls Him Cute',
        c : 'When Dinda Takes Care of Him',
        d : 'Semuanya benar',
        correct : 'd'
    }
];
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz(); 

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

   
}

function getSelected(){
    

    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {


    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct ){
            score++;
        }
    
        currentQuiz++;
        if(currentQuiz<quizData.length){
        loadQuiz(); 
        } else{
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2><button onclick=location.href='letter.html'>Here is my letter to you!</button>`;
        }
    }
    
});