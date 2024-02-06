const questions = [
    {
        question: "Which of the following is not part of CRUD operations in SQL?",
        answers: [
            {text: "creating a table", correct: false},
            {text: "Deleting records from the table", correct: false},
            {text: "Creating a copy of a table", correct: true},
            {text: "Updating the data stored in the table", correct: false},
        ]
    },
    {
        question: "CSV stands for?",
        answers: [
            {text: "code Standard Value", correct: false},
            {text: "Comma Standard Value", correct: false},
            {text: "Code Separated Value", correct: false},
            {text: "comma Separated Value", correct: true},
        ]
    },
    {
        question: "A group of cells is called?",
        answers: [
            {text: "text cluster", correct: false},
            {text: "multicell", correct: false},
            {text: "cell range", correct: true},
            {text: "chart", correct: false},
        ]
    },
    {
        question: "To create a chart, pyplot provides?",
        answers: [
            {text: "print()", correct: false},
            {text: "plot()", correct: true},
            {text: "chart()", correct: false},
            {text: "figure()", correct: false},
        ]
    }

]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const countEl = document.getElementById("count")

let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// diplay questions

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct == true){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} our of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "none";
    countEl.style.display = "none";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        countEl.innerHTML = `${currentQuestionIndex + 1} of ${questions.length}`;
    }else{
        startQuiz();
    }
})
startQuiz();


