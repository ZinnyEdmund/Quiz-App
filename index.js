//Arrays of quiz with multiple-choice options and correct answers
const questions= [
    {
        question: "Which HTTP status means 'Not Found'?",
        options: ["400", "201", "500", "404"],
        answer: "404"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript", "Swift"],
        answer: "JavaScript"
    },
    {
        question: "WHat HTML stands for?",
        options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "High Tech Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the function of CSS?",
        options: ["To structure a webage", "To style a webpage", "To add logic to a webpage", "To store data"],
        answer: "To style a webpage"
    },
    {
        question: "What is Git used  for?",
        options: ["Game development", "Version control", "Database management", "Cybersecurity"],
        answer: "Version control"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<h1>", "<href>"],
        answer: "<a>"
    },
    {
        question: "Which of these is a JavaScript framework?",
        options: ["Django", "Laravel", "React", "Spring"],
        answer: "React"
    },
    {
        question: "What is the main function of a database?",
        options: ["To edit image", "To browse the internet", "To create animation", "To store data"],
        answer: "To store data"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Apple", "Tesla", "Netscape", "Google"],
        answer: "Netscape"
    },
    {
        question: "How has Learnable affected your mental health?",
        options: ["Positively", "Negatively", "I don't know", "I need a therapy"],
        answer: "I need a therapy"
    }

];

//Variables to track quiz progress
let currentQuestionIndex = 0;
let score = 0;

//Selecting elements from the HTML
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextbtn = document.getElementById("next-btn");
const progressEl = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const scoreBox = document.getElementById("score-box");
const finalScoreEl = document.getElementById("final-score");

//Loads the current question and its options
function loadQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";  

    //Creates button for each answer choice
    currentQuestion.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });

    //update progress indicator
    progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

//Checks the selected answer and updates the score
function checkAnswer(selected){
    if (selected === questions[currentQuestionIndex].answer){
        score++;
    }
    nextQuestion();
}

//Moves to the next question or ends the code
function nextQuestion(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        loadQuestion();
    }
    else{ 
        showResults();
    }
}

//Displays the user's final score at the end of the quiz
function showResults(){
    quizBox.classList.add("hide"); //Hide the quiz questions

    scoreBox.classList.remove("hide"); //Show the score screen
    finalScoreEl.textContent = `Your score: ${score} / ${questions.length}`; //Display the final score                            
}

//Resets the quiz for a new attempt
function restartQuiz(){
    score = 0;
    currentQuestionIndex = 0; //Resets index
    scoreBox.classList.add("hide"); //Hide score screen
    quizBox.classList.remove("hide"); //Show quiz again
    loadQuestion(); //Reload the first question
}

//Sents event listener for the next button
nextbtn.onclick = nextQuestion;

//Loads the first question when the page loads       
loadQuestion();